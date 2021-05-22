import React from 'react'
import {View, Text} from 'react-native'

import Body from '../Detail/Body'

export default function Detail({ navigation }) {

        navigation.setOptions({

            headerTitle: 'Cart'

        })

    return (

       <View>

            <Text>Hello world</Text>


       </View>

    );

}
