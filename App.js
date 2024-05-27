import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>My name is ELIJAH</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ADD8E6', 
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontsize: 24,
    fontWeight:  'bold',
  },
});
