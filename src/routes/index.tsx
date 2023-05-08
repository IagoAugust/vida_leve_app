import * as React from 'react';

import { NavigationContainer} from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";


const Stack = createNativeStackNavigator();

import { Home } from '../screens/Home';
import { NewPacientes } from '../screens/NewPacients';

export function AppRoutes(){
    return(
        <NavigationContainer>
            <Stack.Navigator initialRouteName='Home'>
                <Stack.Screen name="Home" component={Home} />
                <Stack.Screen name='NewPacientes' component={NewPacientes}/>
            </Stack.Navigator >
        </NavigationContainer>
    )
}