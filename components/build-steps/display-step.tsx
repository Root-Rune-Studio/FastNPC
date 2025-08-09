import * as React from "react";
import { useCurrentNPC } from "@/context/current-npc";
import { useSQLiteContext } from 'expo-sqlite';
import { ScrollView, StyleSheet } from "react-native";
import LoadingScreen from "../LoadingScreen";
import { ThemedText } from "../ThemedText";
import { ThemedView } from "../ThemedView";
import { getRandomBond, getRandomFlaw } from "@/services/display-step";
import { useNPCBuilder } from "@/hooks/useNPCBuilder";

export default function DisplayStep() {
  const db = useSQLiteContext();
  const { currentNPC, updateCurrentNPC } = useCurrentNPC();

  const { dataArrays, selections, createSelectionHandler, isLoading } = useNPCBuilder({
    // declaration order matters due to index use
    fetchFunctions: [
      () => getRandomBond(db, currentNPC?.archetype_id as number),      // INDEX 0 = Bond
      () => getRandomFlaw(db, currentNPC?.archetype_id as number),         // INDEX 2 = Flaw  
    ],
    initialSelections: [
      currentNPC?.bond_id,
      currentNPC?.flaw_id,
    ],
    updateDBHandlers: [
      (id) => updateCurrentNPC({ bond_id: id }),
      (id) => updateCurrentNPC({ flaw_id: id }),
    ],
    defaultValues: [1, 1] // Bond=1, Flaw=1
  });


  return (
    isLoading
      ? <LoadingScreen />
      : (
        <ScrollView style={styles.container}>      
          <ThemedView style={styles.sectionContainer}>
            <ThemedText style={styles.sectionText} type="subtitle">NPC</ThemedText>
          </ThemedView>
        </ScrollView>
      )
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  sectionContainer: {
    marginVertical: 20,
  },
  sectionText: {
    textAlign: 'center',
  },
  horizontalContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  verticalContainer: {
    marginTop: 10,
  },
});
