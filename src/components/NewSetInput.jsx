import {View, Text,StyleSheet,TextInput,Button} from 'react-native';
import {useState} from 'react';
import {gql} from 'graphql-request';
import {useMutation} from '@tanstack/react-query';
import graphqlClient from '../graphqlClient';

const mutationDocument= gql`
mutation insertSet($newSet: NewSet!) {
    insertSet(
      document: $newSet
      collection: "sets"
      database: "Workouts"
      dataSource: "Cluster3"
    ) {
      insertedId
    }
  }
`;


const NewSetInput =({exerciseName})=> {
    const [reps,setReps]=useState('');
    const [weight, setWeight]=useState('');
    const {mutate,error,isError, isPending}=useMutation({
        mutationFn: (newSet)=> graphqlClient.request(mutationDocument,{newSet}),
    
    });
    const addSet=() =>{
        console.warn('Add set:',reps,weight);
        const newSet= {
            exercise: exerciseName,
            reps: Number.parseInt(reps),
        };
        if(Number.parseFloat(weight)){
            newSet.weight=Number.parseFloat(weight);
        }
        mutate(newSet);
        //save data in database
        setReps('');
        setWeight('');
    
    };
    console.log(error);
    return (
        <View style={styles.container}>
        <View style={styles.row}>
       
            <TextInput value={reps} onChangeText={setReps} placeholder="Reps" style={styles.input} placeholderTextColor="gray" keyboardType='numeric' />
            <TextInput value={weight} onChangeText={setWeight} placeholder='Weight' style={styles.input} placeholderTextColor="gray" keyboardType='numeric' />
            <Button title={isPending?'Adding..': 'Add'} onPress={addSet}/>
        
        
        </View>
       
        
        </View>
    );
};
const styles= StyleSheet.create({
    container:{
        backgroundColor:'white',
        padding:10,
        borderRadius:5,
        flexDirection:'row',
        gap:10,

    },
    row:{
        flexDirection:'row',
        gap:10,
    },
    input: {
        borderWidth: StyleSheet.hairlineWidth,
        padding:10,
        flex:1,
        borderRadius:5,
        borderColor: '#AEC6CE',
    }
})
export default NewSetInput;