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

            headerTitle: 'Jordan 11 Retro Low White '

        })

    return (

        <Body
        img={require('../Nike/concord.jpg')}
        cost={'980,90'}
        name={'Jordan 11 Retro Low White Concord'}
        discrp={'Jumpman entregou o Concord 11 em termos literais com o Jordan 11 Retro Low White Concord (W). Tradicionalmente, o Concord colorway é coberto por sobreposições de couro envernizado preto, mas com esta iteração, o roxo Concord é trazido para o primeiro plano e exibido como um componente principal no design.'} 
       > 
       </Body>

    );

}
