import { ActivityIndicator, StyleSheet } from "react-native"
import { ThemedText } from "./ThemedText"
import { ThemedView } from "./ThemedView"

const LoadingScreen = () => {
 return (
    <ThemedView style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#007AFF" />
        <ThemedText style={styles.loadingText}>Loading options...</ThemedText>
    </ThemedView>
 )   
}

const styles = StyleSheet.create(
    {
    loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  loadingText: {
    fontSize: 18,
    textAlign: 'center',
  }
    }
)

export default LoadingScreen