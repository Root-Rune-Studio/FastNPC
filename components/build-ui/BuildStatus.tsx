import { ThemedView } from '@/components/ThemedView';
import { router } from 'expo-router';
import { Button, StyleSheet } from 'react-native';

export default function BuildStatus( { routeName } : { routeName: string } ) {
  return (
    <ThemedView style={styles.buttonRow}>
      <Button
        title="Step 1"
        onPress={() => router.push('/(tabs)/builder/build-step-1')}
        color={ routeName.includes('step-1') ? 'red' : undefined }
      />
      <Button
        title="Step 2"
        onPress={() => router.push('/(tabs)/builder/build-step-2')}
        color={ routeName.includes('step-2') ? 'red' : undefined }
      />
      <Button
        title="Step 3"
        onPress={() => router.push('/(tabs)/builder/build-step-3')}
        color={ routeName.includes('step-3') ? 'red' : undefined }
      />
    </ThemedView>
  );
}


const styles = StyleSheet.create({
  buttonRow: {
    display: 'flex',
    flex: 0,
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 10,
  },
});
