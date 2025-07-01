import { Slot, useSegments } from 'expo-router';
import { ThemedView } from '@/components/ThemedView';
import BuildStatus from '@/components/build-ui/BuildStatus';

export default function BuildLayout() {
  const segments = useSegments();
  const routeName = segments[segments.length - 1] || '';
  return (
    <ThemedView style={{ flex: 1, top: 25 }}>
      <BuildStatus routeName={routeName} />
      <Slot />
    </ThemedView>
  );
}
