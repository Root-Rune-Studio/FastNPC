import { ThemedView } from '@/components/ThemedView';
import { useRouter } from 'expo-router';
import { useSQLiteContext } from 'expo-sqlite';
import { useState } from 'react';
import { Button, StyleSheet, TextInput } from 'react-native';
import ClearDatabaseUsers from '../db-utils/users/ClearDatabaseUsers';
import ViewDatabaseUsers from '../db-utils/users/ViewDatabaseUsers';

export default function UserForm() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  
  const db = useSQLiteContext()
  const router = useRouter();

  const handleViewDatabase = async () => {
    await ViewDatabaseUsers(db);
  };

  const handleClearDatabase = async () => {
  await ClearDatabaseUsers(db);
  };

const handleSubmit = async () => {
  try {
    await db.runAsync(
      'INSERT INTO users (username, password, email, first_name, last_name) VALUES (?, ?, ?, ?, ?)',
      [username, password, email, firstName, lastName]
    );
    router.push('/(tabs)');
  } catch (error) {
    console.error('Error inserting user:', error);
  }
};

  return (
    <ThemedView style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Username"
        value={username}
        onChangeText={setUsername}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
      />
      <TextInput
        style={styles.input}
        placeholder="First Name"
        value={firstName}
        onChangeText={setFirstName}
      />
      <TextInput
        style={styles.input}
        placeholder="Last Name"
        value={lastName}
        onChangeText={setLastName}
      />
      <Button title="Submit a User" onPress={handleSubmit} />
      <Button title="View Database Users" onPress={handleViewDatabase} />
      <Button title="Clear Database Users" onPress={handleClearDatabase} />
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