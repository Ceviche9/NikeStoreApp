import React from 'react'
import {View,
        Text,
        Image, 
        StyleSheet, 
        ScrollView, 
        TouchableOpacity    
    } from 'react-native';

import Body from '../Detail/Body'

export default function Detail({ navigation }) {

        navigation.setOptions({

            headerTitle: 'Jordan 1 Mid Light Smoke Grey'

        })

    return (

        <Body
        img={require('../Nike/light.jpg')}
        cost={'459,90'}
        name={'Jordan 1 Mid Light Smoke Grey'}
        discrp={'O Air Jordan 1 Mid Smoke Grey utiliza a colorblocking original do AJ1 e a mesma colorway do sneaker mais caro e mais desejado lançado pela Jordan Brand em 2020, o Air Dior 1 em colaboração com a marca de grife italiana Christian Dior. Esse modelo junto a mais algumas colorways que fazem alusão aos clássicos de época levaram o Jordan 1 Mid ao ápice de vendas nunca visto antes. Garanta já seu no Droper.'} 
       > 
       </Body>

    );

}
