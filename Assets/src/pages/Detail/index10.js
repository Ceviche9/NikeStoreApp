import React from 'react'

import Body from '../Detail/Body'

export default function Detail({ navigation }) {

        navigation.setOptions({

            headerTitle: 'Jordan 1 Retro High Pine Green'

        })

    return (

        <Body
        img={require('../Nike/green.jpg')}
        cost={'390,90'}
        name={'Jordan 1 Retro High Pine Green'}
        discrp={'O Air Jordan 1 Retro High OG "Pine Green" apresenta uma versão modificada do design clássico da silhueta, "Black Toe", apresentado pela primeira vez no mundo em 1985. A parte superior em couro emprega um esquema de cores em preto e branco com detalhes em Green Pine. o calcanhar, sola e asas de couro que envolvem a gola.'}
        brand={require('../Nike/brand/JordanW.png')} 
        > 
       </Body>

    );

}
