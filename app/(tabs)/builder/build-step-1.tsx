import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { ScrollView, StyleSheet } from 'react-native';

export default function BuildStep1() {
  return (
    <ScrollView style={styles.container}>
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Build Step 1</ThemedText>
      </ThemedView>
      <ThemedText>This is where we're looking to add Gender, Age, and Potency.</ThemedText>
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
  },
});