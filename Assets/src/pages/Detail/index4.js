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

            headerTitle: 'Jordan 1 Retro High Light'

        })

    return (

        <Body
        img={require('../Nike/Jred.png')}
        cost={'499,90'}
        name={'Jordan 1 Retro High Light Smoke Grey'}
        discrp={'O Air Jordan 1 Retro High OG "Smoke Grey" mostra um pop de Varsity Red na aba do tornozelo, estampado com um logotipo clássico do Jordan Wings na lateral. O restante da parte superior é finalizado em tons estritamente neutros, destacados por uma base de couro branco com sobreposições de camurça cinza. Um Nike Swoosh preto é complementado pela combinação de hits pretos na gola e na sola de borracha.'} 
       > 
       </Body>

    );

}
