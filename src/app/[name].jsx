import{View,Text,StyleSheet,ScrollView} from 'react-native';
import { useLocalSearchParams } from 'expo-router';
import exercises from '../../assets/data/exercises.json';
import {Stack} from 'expo-router';
import {useState} from 'react';
import {gql} from 'graphql-request';
import {useQuery} from '@tanstack/react-query';
import graphqlClient from '../graphqlClient';
import { ActivityIndicator } from 'react-native-web';
import NewSetInput from '../components/NewSetInput';
import SetsList from '../components/SetsList';
const exerciseQuery=gql`
  query exercises($name: String) {
    exercises(name: $name) {
      name
      muscle
      instructions
      equipment
    }
  }
`
export default function ExerciseDetaulsScreen(){
    const {name}=useLocalSearchParams();
    const{data, isLoading,error}=useQuery({
      queryKey:['exercises',name],
      queryFn: ()=> graphqlClient.request(exerciseQuery,{name}),
    
    });
    const [isInstructionExpanded, setInstructionExpanded]=useState(false);

    if(isLoading){
      return<ActivityIndicator/>;
  
    }
    if(error){
      return <Text> Failed to fetch data</Text>
    }
    const exercise=data.exercises[0];
    if(!exercise){
            return <Text> Exercise not found</Text>;
        
    }
    
    return(
        <ScrollView contentContainerStyle={styles.container}>
          <Stack.Screen options={{title: exercise.name}}/>
          <View style={styles.panel} > 
            <Text style={styles.exerciseName}>
        {exercise.name}
        </Text>
      <Text style={styles.exerciseSubtitle}>
        <Text style={styles.subValue}>{exercise.muscle} | </Text> 
         <Text style={styles.subValue}>{exercise.equipment}</Text>
      </Text>
      </View>
     
      <Text style={styles.instructions} numberOfLines={isInstructionExpanded? 0:3}>
        {exercise.instructions}
      </Text>
      <Text onPress={()=>setInstructionExpanded(!isInstructionExpanded)}
      style={styles.seemore}>
        {isInstructionExpanded? 'View less': 'View more'}</Text>
        < NewSetInput exerciseName={exercise.name}/>
        <SetsList/>
      </ScrollView>
       
      
    );
}
const styles=StyleSheet.create({
    container:{
        padding:10,
        gap:10,
        
    },
      exerciseName: {
        fontSize: 20,
        fontWeight:'500',
        marginBottom:5,
        alignContent:"center"
    
      },
      exerciseSubtitle:{
        color: 'dimgray',
      },
      subValue:{
          textTransform: 'capitalize',
      },
      instructions: {
        fontSize:16,
        lineHeight:20,
      },
      panel: {
        backgroundColor:'#AEC6CE',
        padding:10,
        borderRadius:5,
      },
      seemore:{
        alignSelf:'center',
        padding:10,
        fontWeight:'600',
        color:'gray',
      },
})