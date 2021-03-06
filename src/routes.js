import React from 'react';
import { Text } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

import Incidents from './pages/Incidents';
import Detail from './pages/Details';


export default function Routes() {
    return (
        <NavigationContainer>

            <Stack.Navigator screenOptions={{ headerShown: false }} >

                <Stack.Screen name='Incidents' component={Incidents} />
                <Stack.Screen name='Detail' component={Detail} />
                
            </Stack.Navigator>


        </NavigationContainer>
    );
}