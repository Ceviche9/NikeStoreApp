import React from 'react'
import {View,
        Text,
        Image, 
        StyleSheet, 
        ScrollView, 
        TouchableOpacity    
    } from 'react-native';

import Body from './Body'

export default function Detail({ navigation }) {

        navigation.setOptions({

            headerTitle: 'Jordan 1 Mid Chicago Toe'

        })

    return (

        <Body
        img={require('../Nike/chicago.jpg')}
        cost={'1250,90'}
        name={'Jordan 1 Mid Chicago Toe'}
        discrp={'Chegada pela primeira vez em 1985, a Air Jordan 1 já existe há mais de 3 décadas. A linha Jordan continua renovando as silhuetas OG com cores frescas e materiais premium, e também colaborou com diferentes artistas, designers e varejistas para capturar a essência do original por meio de lentes modernas.'} 
       > 
       </Body>

    );

}
