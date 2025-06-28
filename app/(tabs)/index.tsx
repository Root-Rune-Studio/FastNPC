import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { Image } from 'expo-image';
import { router } from 'expo-router';
import { Button, StyleSheet } from 'react-native';

const quickBuild = () => {
  router.push('/builder/build-step-2')
  return ""
}

export default function HomeScreen() {
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#A1CEDC', dark: '#1D3D47' }}
      headerImage={
        <Image
          source={require('@/assets/images/partial-react-logo.png')}
          style={styles.reactLogo}
        />
      }>
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Welcome to FastNPC!</ThemedText>
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
          <Button
            title="Build"
            onPress={() => router.push('/builder/build-step-1')}
          />
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
          <Button
            title="Quick-Build"
            onPress={() =>quickBuild()}
          />
      </ThemedView>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
});
