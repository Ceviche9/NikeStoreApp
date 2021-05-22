import React from 'react'
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
import Detail8 from './pages/Detail/index8';
import Detail9 from './pages/Detail/index9';
import Detail10 from './pages/Detail/index10';
import Cart from './pages/Shop/index';


const Stack = createStackNavigator();

function Routes(){

    return (

        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen 
                name='Nike Store'
                component={Home}
                options={{

                headerStyle:{
                backgroundColor: '#ffff',
                
                },
                headerTintColor: 'black',

                headerTitleStyle: {
                    fontFamily: 'OpenSans-BoldItalic',
                  },}}
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
                <Stack.Screen
                name='Detail8'
                component={Detail8}
                />
                <Stack.Screen
                name='Detail9'
                component={Detail9} 
                />
                <Stack.Screen
                name='Detail10'
                component={Detail10} 
                />
                
                <Stack.Screen
                name='Cart'
                component={Cart} 
                />
                

            </Stack.Navigator>

        </NavigationContainer>




    );

}

export default Routes;