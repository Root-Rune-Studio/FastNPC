import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { useState } from 'react';
import { ScrollView, StyleSheet, TouchableOpacity } from 'react-native';

type Gender = 'M' | 'N/A' | 'F' | null;
type Age = 'Child' | 'Adult' | 'Elder' | null;
type Potency = 'Very Weak' | 'Weak' | 'Neutral' | 'Strong' | 'Very Strong' | null;

export default function BuildStep1() {
  const [selectedGender, setSelectedGender] = useState<Gender>('N/A');
  const [selectedAge, setSelectedAge] = useState<Age>('Adult');
  const [selectedPotency, setSelectedPotency] = useState<Potency>('Neutral');

  const renderSelectionButtons = (
    options: string[],
    selectedValue: string | null,
    onSelect: (value: any) => void,
    horizontal: boolean = true
  ) => (
    <ThemedView style={horizontal ? styles.horizontalContainer : styles.verticalContainer}>
      {options.map((option) => (
        <TouchableOpacity
          key={option}
          style={[
            styles.selectionButton,
            selectedValue === option && styles.selectedButton,
            !horizontal && styles.fullWidthButton
          ]}
          onPress={() => onSelect(option)}
        >
          <ThemedText style={[
            styles.buttonText,
            selectedValue === option && styles.selectedButtonText
          ]}>
            {option}
          </ThemedText>
        </TouchableOpacity>
      ))}
    </ThemedView>
  );

  return (
    <ScrollView style={styles.container}>      
      {/* Gender Section */}
      <ThemedView style={styles.sectionContainer}>
        <ThemedText type="subtitle">Gender</ThemedText>
        {renderSelectionButtons(['M', 'N/A', 'F'], selectedGender, setSelectedGender)}
      </ThemedView>

      {/* Age Section */}
      <ThemedView style={styles.sectionContainer}>
        <ThemedText type="subtitle">Age</ThemedText>
        {renderSelectionButtons(['Child', 'Adult', 'Elder'], selectedAge, setSelectedAge)}
      </ThemedView>

      {/* Potency Section */}
      <ThemedView style={styles.sectionContainer}>
        <ThemedText type="subtitle">Potency</ThemedText>
        {renderSelectionButtons(
          ['Very Weak', 'Weak', 'Neutral', 'Strong', 'Very Strong'], 
          selectedPotency, 
          setSelectedPotency,
          false
        )}
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
});