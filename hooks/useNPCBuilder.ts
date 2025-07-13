import { useSQLiteContext } from 'expo-sqlite';
import { useEffect, useState } from 'react';

interface BuildStepConfig<T> {
  fetchFunctions: (() => Promise<{ data: T[] | null; error?: string }>)[];
  initialSelections: (number | undefined)[];
  updateDBHandlers: ((id: number) => Promise<void>)[];
  defaultValues: number[];
}

/**
 * Generic hook for handling build step data fetching and selection logic
 * Reusable across all build steps by accepting a configuration object
 */
export const useNPCBuilder = <T extends { id: number }>(
  config: BuildStepConfig<T>
) => {
  const db = useSQLiteContext();
  
  // Store fetched data as arrays: [[genders], [ages], [potencies]]
  const [dataArrays, setDataArrays] = useState<T[][]>([]);
  
  // Store current selections: [selectedGenderId, selectedAgeId, selectedPotencyId] or pass hard-coded default values declared within the buildstep component (see components/build-steps/build-step-1.tsx line 31 for an example)
  const [selections, setSelections] = useState<number[]>(
    config.initialSelections.map((sel, index) => sel || config.defaultValues[index])
  );
  
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        // Fetch data in parallel from all functions
        const responses = await Promise.all(
          config.fetchFunctions.map(fn => fn())
        );
        setDataArrays(responses.map(response => response.data || []));
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [db]);

  // Creates a selection handler for a specific section index -- a fn that returns another fn
const createSelectionHandler = (index: number) => async (id: number) => {
  const newSelections = [...selections];  // 1. Copy current selections array
  newSelections[index] = id;              // 2. Update the specific index with new id
  setSelections(newSelections);           // 3. Update React state
  await config.updateDBHandlers[index](id); // 4. Save to database
};
  return {
    dataArrays,
    selections,
    isLoading,
    createSelectionHandler,
  };
};