import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import kitchenScreen from './Cocina';
import LivingRoomScreen from './Sala'
import GardenScreen from './Jardin'
import BedRoomScreen from './recamara'
import mainScreen from './main'

const Stack = createStackNavigator();

const MyStack = () => {

    return (
        //Contenedor padre
        <Stack.Navigator headerMode='none'>

            <Stack.Screen
                name="mainScreen"
                component={mainScreen}
            />
            <Stack.Screen
                name="kitchenScreen"
                component={kitchenScreen}
            />
            <Stack.Screen
                name="GardenScreen"
                component={GardenScreen}
            />
            <Stack.Screen
                name="BedRoomScreen"
                component={BedRoomScreen}
            />
            <Stack.Screen
                name="LivingRoomScreen"
                component={LivingRoomScreen}
            />

        </Stack.Navigator>
    );
}


export default MyStack;
