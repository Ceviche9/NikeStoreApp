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

            headerTitle: 'Jordan 14 Retro Gym Red Toro'

        })

     return (
                    
        <Body
        img={require('../Nike/Jordan1.png')}
        cost={'659,90'}
        name={'Jordan 14 Retro Gym Red Toro'}
        discrp={'Jordan Brand lançou um novo colorway temático Chicago Bulls com o Jordan 14 Retro Gym Red Toro. Este lançamento se parece muito com o Jordan 14 Challenge Red, mas em vez de detalhes amarelos para imitar sua inspiração da Ferrari, o Gym Red 14 implementa painéis brancos para criar a vibração do uniforme dos Bulls.'} 
        > 
        </Body>

    );

}
