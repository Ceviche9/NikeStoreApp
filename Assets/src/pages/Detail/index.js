import React from 'react'
import {View, Image} from 'react-native'

import Body from '../Detail/Body'

export default function Detail({ navigation }) {

        navigation.setOptions({

            headerTitle: 'Jordan 14 Retro Gym Red Toro',
            
           

        })

<<<<<<< HEAD
     return (

       <> 
            <Body
                img={require('../Nike/Jordan1.png')}
                cost={'659,90'}
                name={'Jordan 14 Retro Gym Red Toro'}
                discrp={'Jordan Brand lançou um novo colorway temático Chicago Bulls com o Jordan 14 Retro Gym Red Toro. Este lançamento se parece muito com o Jordan 14 Challenge Red, mas em vez de detalhes amarelos para imitar sua inspiração da Ferrari, o Gym Red 14 implementa painéis brancos para criar a vibração do uniforme dos Bulls.'} 
                brand={require('../Nike/brand/JordanW.png')}
                >
                     
            </Body>

       </> 

=======
    return (


        <Body
        img={require('../Nike/Jordan1.png')}
        cost={'659,90'}
        name={'Jordan 14 Retro Gym Red Toro'}
        discrp={'Jordan Brand lançou um novo colorway temático Chicago Bulls com o Jordan 14 Retro Gym Red Toro. Este lançamento se parece muito com o Jordan 14 Challenge Red, mas em vez de detalhes amarelos para imitar sua inspiração da Ferrari, o Gym Red 14 implementa painéis brancos para criar a vibração do uniforme dos Bulls.'} 
       > 
       </Body>
>>>>>>> 9c43103a7c05a0595eb054f6a3f188d26f025e5a

     
       
    );

}
