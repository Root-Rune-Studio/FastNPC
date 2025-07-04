import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { getAges, getGenders, getPotencies } from '@/services/build-step-1-services';
import { Age, Gender, Potency } from '@/types/db-schema';
import { useSQLiteContext } from 'expo-sqlite';
import { useEffect, useState } from 'react';
import { ActivityIndicator, ScrollView, StyleSheet, TouchableOpacity } from 'react-native';

// FIXME: state resets on page change. Will need global context

export default function BuildStep1() {
  const db = useSQLiteContext();
  const [genders, setGenders] = useState<Gender[]>([]);
  const [ages, setAges] = useState<Age[]>([]);
  const [potencies, setPotencies] = useState<Potency[]>([]);

  const [selectedGenderId, setSelectedGenderId] = useState<number>(2);
  const [selectedAgeId, setSelectedAgeId] = useState<number>(2);
  const [selectedPotencyId, setSelectedPotencyId] = useState<number>(3);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        
        const [gendersResponse, agesResponse, potenciesResponse] = await Promise.all([
          getGenders(db),
          getAges(db),
          getPotencies(db)
        ]);

        if (gendersResponse.data) {
          setGenders(gendersResponse.data);
        }
        
        if (agesResponse.data) {
          setAges(agesResponse.data);
        }
        
        if (potenciesResponse.data) {
          setPotencies(potenciesResponse.data);
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [db]);

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

  if (isLoading) {
    return (
      <ThemedView style={styles.loadingContainer}>
         <ActivityIndicator size="large" color="#007AFF" />
        <ThemedText style={styles.loadingText}>Loading options...</ThemedText>
      </ThemedView>
    );
  }

  return (
    <ScrollView style={styles.container}>      
      {/* Gender Section */}
      <ThemedView style={styles.sectionContainer}>
        <ThemedText style={styles.sectionText} type="subtitle">Gender</ThemedText>
        {renderSelectionButtons(genders, selectedGenderId, setSelectedGenderId)}
      </ThemedView>

      {/* Age Section */}
      <ThemedView style={styles.sectionContainer}>
        <ThemedText style={styles.sectionText} type="subtitle">Age</ThemedText>
        {renderSelectionButtons(ages, selectedAgeId, setSelectedAgeId)}
      </ThemedView>

      {/* Potency Section */}
      <ThemedView style={styles.sectionContainer}>
        <ThemedText style={styles.sectionText} type="subtitle">Potency</ThemedText>
        {renderSelectionButtons(potencies, selectedPotencyId, setSelectedPotencyId, false)}
      </ThemedView>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  loadingText: {
    fontSize: 18,
    textAlign: 'center',
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