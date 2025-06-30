import React from 'react';
import { Stack } from 'expo-router';
import { ThemedView } from '@/components/ThemedView';
import BuildStatus from '@/components/build-ui/BuildStatus';

export default function BuildLayout() {
  return (
    <ThemedView>
      <BuildStatus />
      <Stack>
        <Stack.Screen
          name="build-step-1"
          options={{
            title: 'Step 1',
          }}
        />
        <Stack.Screen
          name="build-step-2"
          options={{
            title: 'Step 2',   
          }}
        />
        <Stack.Screen
          name="build-step-3"
          options={{
            title: 'Step 3',   
          }}
        />
      </Stack>
    </ThemedView>
  );
}
