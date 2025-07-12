import { ThemedView } from '@/components/ThemedView';
import { useRouter } from 'expo-router';
import { useSQLiteContext } from 'expo-sqlite';
import { useState } from 'react';
import { Button, StyleSheet, TextInput } from 'react-native';
import ClearDatabaseCampaigns from '../db-utils/campaigns/ClearDatabaseCampaigns';
import ViewDatabaseCampaigns from '../db-utils/campaigns/ViewDatabaseCampaigns';

export default function CampaignForm() {
  const [title, setTitle] = useState('');
  
  const db = useSQLiteContext()
  const router = useRouter();

  const handleViewDatabase = async () => {
    await ViewDatabaseCampaigns(db);
  };

  const handleClearDatabase = async () => {
  await ClearDatabaseCampaigns(db);
  };

const handleSubmit = async () => {
  try {
    await db.runAsync(
      'INSERT INTO campaigns (title) VALUES (?)',
      [title]
    );
    router.push('/(tabs)');
  } catch (error) {
    console.error('Error inserting campaign:', error);
  }
};

  return (
    <ThemedView style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Campaign Name"
        value={title}
        onChangeText={setTitle}
      />
      <Button title="Submit a Campaign" onPress={handleSubmit} />
      <Button title="View Database Campaigns" onPress={handleViewDatabase} />
      <Button title="Clear Database Campaigns" onPress={handleClearDatabase} />
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    justifyContent: 'center',
  },
  input: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    marginBottom: 12,
    paddingHorizontal: 8,
  },
});