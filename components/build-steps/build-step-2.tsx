import { useCurrentNPC } from "@/context/current-npc";
import { useNPCBuilder } from "@/hooks/useNPCBuilder";
import { getArchetypes } from "@/services/build-step-2";
import { useSQLiteContext } from 'expo-sqlite';
import { ScrollView, StyleSheet, TouchableOpacity } from "react-native";
import LoadingScreen from "../LoadingScreen";
import { ThemedText } from "../ThemedText";
import { ThemedView } from "../ThemedView";
import StandardArray from "../build-ui/StandardArray";

export default function BuildStep2() {
  const db = useSQLiteContext();
  const { currentNPC, updateCurrentNPC } = useCurrentNPC();

  const { dataArrays, selections, createSelectionHandler, isLoading } = useNPCBuilder({
    // declaration order matters due to index use
    fetchFunctions: [
    () => getArchetypes(db),      // INDEX 0 = Archetype
    ],
    initialSelections: [
      currentNPC?.archetype_id,
    ],
    updateDBHandlers: [
      (id) => updateCurrentNPC({ archetype_id: id }),
    ],
    defaultValues: [0] // Archetype=0
  });

const renderSelectionButtons = (
    options: {
      id: number;
      name: string,
      primary_ability: string,
      strength: number,
      dexterity: number,
      constitution: number,
      intelligence: number,
      wisdom: number,
      charisma: number,
      description: string,
    }[],
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
          <ThemedText style={[
            styles.abilityText,
            selectedId === option.id && styles.selectedButtonText
          ]}>
              {option.primary_ability}
          </ThemedText>
          {/* description container conditionally rendered only when selected */}
          {selectedId === option.id
            ? (
              <ThemedView style={styles.descriptionContainer}>
                <StandardArray
                  style={[
                    styles.abilityText,
                    selectedId === option.id && styles.selectedButtonText
                  ]}
                  str={option.strength}
                  dex={option.dexterity}
                  con={option.constitution}
                  int={option.intelligence}
                  wis={option.wisdom}
                  cha={option.charisma}
                  db={db}
                  potencyId={currentNPC?.potency_id as number ?? 3}
                />
                <ThemedText style={[
                  styles.abilityText,
                  selectedId === option.id && styles.selectedButtonText,
                  { textAlign: 'center' }
                ]}>
                  {option.description}
                </ThemedText>
              </ThemedView>
            ) : null
          }
        </TouchableOpacity>
      ))}
    </ThemedView>
  );

  if (isLoading) {
    return <LoadingScreen />;
  }

  return (
    <ScrollView style={styles.container}>      
      <ThemedView style={styles.sectionContainer}>
        <ThemedText style={styles.sectionText} type="subtitle">Archetype</ThemedText>
        {renderSelectionButtons(dataArrays[0] || [], selections[0], createSelectionHandler(0), false)}
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
  descriptionContainer : {
    marginTop: 16,
    backgroundColor: 'transparent',
    textAlign: 'center',
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
  abilityText: {
    fontSize: 14,
    fontWeight: 400,
  },
  selectedButtonText: {
    color: 'white',
  },
});
