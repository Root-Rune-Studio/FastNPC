import * as React from "react";
import { useCurrentNPC } from "@/context/current-npc";
import { useSQLiteContext } from 'expo-sqlite';
import { ScrollView, StyleSheet } from "react-native";
import LoadingScreen from "../LoadingScreen";
import { ThemedText } from "../ThemedText";
import { ThemedView } from "../ThemedView";
import { NPC } from "@/types/db-schema";

type DisplayNPC = Partial<NPC>

export default function DisplayStep() {
  const db = useSQLiteContext();
  const { currentNPC, updateCurrentNPC } = useCurrentNPC();
  const [isLoading, setIsLoading] = React.useState<boolean>(true);
  const [npc, setNpc] = React.useState<DisplayNPC>();


  if (isLoading) {
    return <LoadingScreen />;
  }

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
