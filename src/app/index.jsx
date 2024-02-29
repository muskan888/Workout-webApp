import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,FlatList} from 'react-native';
import exercises from '../../assets/data/exercises.json';
import ExerciseListItem from '../../src/components/ExerciseListItem';
import {useQuery} from '@tanstack/react-query'
import {gql} from 'graphql-request';
import { ActivityIndicator } from 'react-native-web';
import client from '../graphqlClient';


const exercisesQuery=gql`
  query exercises($muscle: String, $name: String){
    exercises(muscle: $muscle, name: $name){
      name
      muscle
  }
}
`;


export default function ExerciseScreen() {
  const {data,isLoading,error}=useQuery({
    queryKey:['exercises'],
    queryFn: () => client.request(exercisesQuery),
    
  });


  if(isLoading){
    return <ActivityIndicator/>
  }
  if(error){
   
    return <Text> Failed to fetch exercises</Text>
  }
 
  return (
    <View style={styles.container}>
      <FlatList
      data={data?.exercises}
      contentContainerStyle={{gap:5}}
      keyExtractor={(item,index)=> item.name+index}
      renderItem={({item})=><ExerciseListItem  item={item}/>}
      />
      <StatusBar style="auto" />
        </View> 
   
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#AEC6CE',
    padding:10,
    justifyContent: 'center',
   

  },
});
