import React from 'react';
import { Stack } from 'expo-router';

export default function BuildLayout() {
  return (
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
    </Stack>
  );
}
