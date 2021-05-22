import React from 'react'

import Body from '../Detail/Body'

export default function Detail({ navigation }) {

        navigation.setOptions({

            headerTitle: 'Jordan 1 Retro High Royal'

        })

    return (

        <Body
        img={require('../Nike/loyal.jpg')}
        cost={'490,90'}
        name={'Jordan 1 Retro High Royal'}
        discrp={'O Air Jordan 1 Retro High OG "Royal Toe" aplica uma mistura familiar de cores à silhueta icônica. A parte superior em couro apresenta uma base branca com sobreposições pretas contrastantes e Game Royal aparece na gola, na biqueira e na sola de borracha. Uma língua de nylon preta levemente acolchoada é coberta com uma etiqueta Nike Air, enquanto o clássico logotipo Jordan Wings aparece em branco na aba da gola lateral.'}
        brand={require('../Nike/brand/JordanW.png')} 
        > 
       </Body>

    );

}
