import { useEffect, useState } from 'react';
import { useRoute } from '@react-navigation/native';
import { ThemedView } from '@/components/ThemedView';
import { router } from 'expo-router';
import { Button, StyleSheet } from 'react-native';

export default function BuildStatus() {
  const route = useRoute();
  const [currrentRoute, setCurrentRoute] = useState<string>(route.name);
  useEffect(() => {
    setCurrentRoute(route.name);
  }, [route.name])
  return (
    <ThemedView style={styles.buttonRow}>
      <Button
        title="Step 1"
        onPress={() => router.push('/builder/build-step-1')}
        color={ currrentRoute.includes('step-1') ? 'red' : '' }
      />
      <Button
        title="Step 2"
        onPress={() => router.push('/builder/build-step-2')}
        color={ currrentRoute.includes('step-2') ? 'red' : '' }
      />
      <Button
        title="Step 3"
        onPress={() => router.push('/builder/build-step-3')}
        color={ currrentRoute.includes('step-3') ? 'red' : '' }
      />
    </ThemedView>
  );
}


const styles = StyleSheet.create({
  buttonRow: {
    display: 'flex',
    justifyContent: 'center',
    top: '40',
  },
});
