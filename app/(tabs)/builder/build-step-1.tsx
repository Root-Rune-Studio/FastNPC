import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { Age, Gender, Potency } from '@/types/db-schema';
import { useState } from 'react';
import { ScrollView, StyleSheet, TouchableOpacity } from 'react-native';

// Mock data that would typically come from your database
const GENDERS: Gender[] = [
  { id: 1, name: 'M' },
  { id: 2, name: 'N/A' },
  { id: 3, name: 'F' }
];

const AGES: Age[] = [
  { id: 1, name: 'Child' },
  { id: 2, name: 'Adult' },
  { id: 3, name: 'Elder' }
];

const POTENCIES: Potency[] = [
  { id: 1, name: 'Very Weak', modifier: -2 },
  { id: 2, name: 'Weak', modifier: -1 },
  { id: 3, name: 'Neutral', modifier: 0 },
  { id: 4, name: 'Strong', modifier: 1 },
  { id: 5, name: 'Very Strong', modifier: 2 }
];

export default function BuildStep1() {
  const [selectedGenderId, setSelectedGenderId] = useState<number>(2);
  const [selectedAgeId, setSelectedAgeId] = useState<number>(2);
  const [selectedPotencyId, setSelectedPotencyId] = useState<number>(3);

  const renderSelectionButtons = <T extends { id: number; name: string }>(
    options: T[],
    selectedId: number,
    onSelect: (id: number) => void,
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

  return (
    <ScrollView style={styles.container}>      
      {/* Gender Section */}
      <ThemedView style={styles.sectionContainer}>
        <ThemedText style={styles.sectionText} type="subtitle">Gender</ThemedText>
        {renderSelectionButtons(GENDERS, selectedGenderId, setSelectedGenderId)}
      </ThemedView>

      {/* Age Section */}
      <ThemedView style={styles.sectionContainer}>
        <ThemedText style={styles.sectionText} type="subtitle">Age</ThemedText>
        {renderSelectionButtons(AGES, selectedAgeId, setSelectedAgeId)}
      </ThemedView>

      {/* Potency Section */}
      <ThemedView style={styles.sectionContainer}>
        <ThemedText style={styles.sectionText} type="subtitle">Potency</ThemedText>
        {renderSelectionButtons(POTENCIES, selectedPotencyId, setSelectedPotencyId, false)}
      </ThemedView>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  titleContainer: {
    flexDirection: 'row',
    gap: 8,
    marginBottom: 16,
  },
  sectionContainer: {
    marginVertical: 20,
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
  sectionText: {
    textAlign: 'center'
  }
});