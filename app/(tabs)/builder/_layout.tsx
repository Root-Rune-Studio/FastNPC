import { Slot, useSegments } from 'expo-router';
import { ThemedView } from '@/components/ThemedView';
import BuildStatus from '@/components/build-ui/BuildStatus';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function BuildLayout() {
  const segments = useSegments();
  const routeName = segments[segments.length - 1] || '';
  return (
    <ThemedView style={{ flex: 1 }}>
      <SafeAreaView style={{ flex: 1 }}>
        <BuildStatus routeName={routeName} />
        <Slot />
      </SafeAreaView>
    </ThemedView>
  );
}
