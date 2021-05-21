import React, {StackNavigator} from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';



import Home from './pages/Home/index';
import Detail from './pages/Detail/index';
import Detail2 from './pages/Detail/index2';
import Detail3 from './pages/Detail/index3'

const Stack = createStackNavigator();

function Routes(){

    return (

        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen 
                name='Home'
                component={Home}
                />
                <Stack.Screen
                name='Detail'
                component={Detail}
                />

                <Stack.Screen
                name='Detail2'
                component={Detail2}
                />
                <Stack.Screen
                name='Detail3'
                component={Detail3}
                />


            </Stack.Navigator>

        </NavigationContainer>




    );

}

export default Routes;