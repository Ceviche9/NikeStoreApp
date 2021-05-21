import React, {StackNavigator} from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';



import Home from './pages/Home/index';
import Detail from './pages/Detail/index';
import Detail2 from './pages/Detail/index2';
import Detail3 from './pages/Detail/index3';
import Detail4 from './pages/Detail/index4';
import Detail5 from './pages/Detail/index5';
import Detail6 from './pages/Detail/index6';
import Detail7 from './pages/Detail/index7';


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
                <Stack.Screen
                name='Detail4'
                component={Detail4}
                />
                <Stack.Screen
                name='Detail5'
                component={Detail5}
                />

                <Stack.Screen
                name='Detail6'
                component={Detail6}
                />
                <Stack.Screen
                name='Detail7'
                component={Detail7}
                />
                

            </Stack.Navigator>

        </NavigationContainer>




    );

}

export default Routes;