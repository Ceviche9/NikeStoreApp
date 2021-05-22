import React from 'react'

import Body from '../Detail/Body'

export default function Detail({ navigation }) {

        navigation.setOptions({

            headerTitle: 'Jordan 11 Retro Low White Bred'

        })

    return (

        <Body
        img={require('../Nike/bred2.jpg')}
        cost={'1250,90'}
        name={'Jordan 11 Retro Low White Bred'}
        discrp={'Jordan Brand combinou elementos de dois de seus maiores Jordan 11 colorways para criar o Jordan 11 Retro Low Concord Bred. Este design híbrido pega a parte superior de um Jordan 11 Low Concord tradicional e a combina com a sola vermelha do Jordan 11 Bred'}
        brand={require('../Nike/brand/JordanW.png')} 
        > 
       </Body>

    );

}
