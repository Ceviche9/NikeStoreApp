import React from 'react'

import Body from '../Detail/Body'

export default function Detail({ navigation }) {

        navigation.setOptions({

            headerTitle: 'Nike ISPA Overreackt Sail Multi'

        })

    return (

        <Body
        img={require('../Nike/ISPA.jpg')}
        cost={'953,90'}
        name={'Nike ISPA Overreackt Sail Multi'}
        discrp={'A linha técnica ISPA da Nike costuma testar novos detalhes. É realmente uma linha experimental. Esses dois modelos usam combinações de cores selvagens, inserções em várias camadas e um estilo técnico. Os sapatos também têm tiras longas que vão de dentro para cima para realçar o visual progressivo'} 
       > 
       </Body>

    );

}

