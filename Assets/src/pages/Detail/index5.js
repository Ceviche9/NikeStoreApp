import React from 'react'


import Body from '../Detail/Body'

export default function Detail({ navigation }) {

        navigation.setOptions({

            headerTitle: 'Jordan 1 Retro High Tie'

        })

    return (

        <Body
        img={require('../Nike/blue.jpg')}
        cost={'1250,90'}
        name={'Jordan 1 Retro High Tie'}
        discrp={'Como o nome sugere, o modelo Nike Air Jordan 1 High OG "Tie Dye" apresenta uma impressão tie dye que lembra as cores da aurora. A mistura de azul e verde é acompanhada por um contraste atemporal em preto e branco.'}
        brand={require('../Nike/brand/JordanW.png')} 
       > 
       </Body>

    );

}
