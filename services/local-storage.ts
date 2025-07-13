import AsyncStorage from '@react-native-async-storage/async-storage';

const storeValue = async <T>(key: string, value: T): Promise<void> => {
  await AsyncStorage.setItem(key, JSON.stringify(value));
};

const getValue = async <T>(key: string): Promise<T | null> => {
  const value = await AsyncStorage.getItem(key);
  return value ? JSON.parse(value) : null;
};

const removeValue = async (key: string): Promise<void> => {
  await AsyncStorage.removeItem(key);
};

const updateValue = async <T>(key: string, updates: Partial<T>): Promise<void> => {
  const existingValue = await getValue<T>(key);
  if (existingValue) {
    const updatedValue = { ...existingValue, ...updates };
    await storeValue(key, updatedValue);
  }
};

export { getValue, removeValue, storeValue, updateValue };
