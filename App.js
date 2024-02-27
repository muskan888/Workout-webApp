import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import exercises from './assets/data/exercises.json';
export default function App() {
  const exercise=exercises[0];
  
  return (
    <View style={styles.container}>
    <View style={styles.exerciseContainer}>
      <Text style={styles.exerciseName}>{exercise.name}</Text>
      <Text style={styles.exerciseSubtitle}>{exercise.muscle.toUpperCase()} |{exercise.equipment}</Text>
      
      <StatusBar style="auto" />
    </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'gainsboro',
    padding:10,
    justifyContent: 'center',
  },
  exerciseContainer:{
    backgroundColor: '#fff',
    padding:10,
    borderRadius:10,
    gap:5,


  },
  exerciseName: {
    fontSize: 20,
    fontWeight:'500',
    marginBottom:5,

  },
  exerciseSubtitle:{
    color: 'dimgray',
  }
});
