import { useCurrentNPC } from "@/context/current-npc";
import { useNPCBuilder } from "@/hooks/useNPCBuilder";
import { getAges, getGenders, getPotencies } from "@/services/build-step-1";
import { useSQLiteContext } from 'expo-sqlite';
import { ScrollView, StyleSheet, TouchableOpacity } from "react-native";

import LoadingScreen from "../LoadingScreen";
import { ThemedText } from "../ThemedText";
import { ThemedView } from "../ThemedView";

export default function BuildStep1() {
  const db = useSQLiteContext();
  const { currentNPC, updateCurrentNPC } = useCurrentNPC();

  const { dataArrays, selections, createSelectionHandler, isLoading } = useNPCBuilder({
    // declaration order matters due to index use
    fetchFunctions: [
    () => getGenders(db),      // INDEX 0 = Gender
    () => getAges(db),         // INDEX 1 = Age  
    () => getPotencies(db)     // INDEX 2 = Potency 
    ],
    initialSelections: [
      currentNPC?.gender_id,
      currentNPC?.age_id,
      currentNPC?.potency_id
    ],
    updateDBHandlers: [
      (id) => updateCurrentNPC({ gender_id: id }),
      (id) => updateCurrentNPC({ age_id: id }),
      (id) => updateCurrentNPC({ potency_id: id })
    ],
    defaultValues: [2, 2, 3] // Gender=2, Age=2, Potency=3
  });

const renderSelectionButtons = (
    options: { id: number; name: string }[],
    selectedId: number,
    onSelect: (id: number) => Promise<void>,
    horizontal: boolean = true
  ) => (
    <ThemedView style={horizontal ? styles.horizontalContainer : styles.verticalContainer}>
      {options.map((option) => (
        <TouchableOpacity
          key={option.id}
          style={[
            styles.selectionButton,
            selectedId === option.id && styles.selectedButton,
            !horizontal && styles.fullWidthButton
          ]}
          onPress={() => onSelect(option.id)}
        >
          <ThemedText style={[
            styles.buttonText,
            selectedId === option.id && styles.selectedButtonText
          ]}>
            {option.name}
          </ThemedText>
        </TouchableOpacity>
      ))}
    </ThemedView>
  );

  if (isLoading) {
    return <LoadingScreen />;
  }

  return (
    <ScrollView style={styles.container}>      
      {/* Gender Section */}
      <ThemedView style={styles.sectionContainer}>
        <ThemedText style={styles.sectionText} type="subtitle">Gender</ThemedText>
        {renderSelectionButtons(dataArrays[0] || [], selections[0], createSelectionHandler(0))}
      </ThemedView>

      {/* Age Section */}
      <ThemedView style={styles.sectionContainer}>
        <ThemedText style={styles.sectionText} type="subtitle">Age</ThemedText>
        {renderSelectionButtons(dataArrays[1] || [], selections[1], createSelectionHandler(1))}
      </ThemedView>

      {/* Potency Section */}
      <ThemedView style={styles.sectionContainer}>
        <ThemedText style={styles.sectionText} type="subtitle">Potency</ThemedText>
        {renderSelectionButtons(dataArrays[2] || [], selections[2], createSelectionHandler(2), false)}
      </ThemedView>
    </ScrollView>
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
  selectionButton: {
    backgroundColor: '#D3D3D3',
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 8,
    flex: 1,
    marginHorizontal: 4,
    alignItems: 'center',
  },
  fullWidthButton: {
    marginVertical: 4,
    marginHorizontal: 0,
  },
  selectedButton: {
    backgroundColor: '#007AFF',
  },
  buttonText: {
    fontSize: 16,
    fontWeight: '500',
  },
  selectedButtonText: {
    color: 'white',
  },
});
