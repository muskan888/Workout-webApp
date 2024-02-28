//root layout
import {Stack,Slot} from 'expo-router';
export default function RootLayout(){
    return <Slot/>
    return(
        <Stack> 
            <Stack.Screen name='index' options={{title:'Exercises'}}/>

        </Stack>
    )
}

