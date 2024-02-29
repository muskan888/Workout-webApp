import {View, Text, useWindowDimensions} from 'react-native';
import{gql} from 'graphql-request';
import {useQuery} from '@tanstack/react-query';
import graphqlClient from '../graphqlClient';
import { ActivityIndicator, FlatList } from 'react-native-web';
const setsQuery= gql`
    query exercises {
    sets {
      documents {
        _id
        exercise
        reps
        weight
      }
    }
  }
`;
const SetsList=()=>{
    const {data,isLoading}=useQuery({
        queryKey: ['sets'],
        queryFn: ()=> graphqlClient.request(setsQuery),

});
if(isLoading){
    return <ActivityIndicator/>
}

    return(
       <FlatList 
       data ={data.sets.documents} 
       renderItem={({item}) => (<Text style={{backgroundColor:"#AEC6CE",marginVertical:10,padding:10, borderRadius:5,overflow:'hidden' }}>{item.reps} x {item.weight}{' '}</Text>
    )}
    />
    );
};

export default SetsList