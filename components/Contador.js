import React, {useState} from 'react'
import {Text, Button, StyleSheet} from 'react-native' 



export default props => {

    const [numero, setNumero] = useState(props.inicial)

    const inc = () => setNumero(numero + props.passo)
    const dec = () => setNumero(numero - props.passo)



    return (

        <>
            <Text style={style.texto} >{numero}</Text>
            <Button title='+' onPress={inc} />
            <Button title='-' onPress={dec}/>

        </>



    )
}

const style = StyleSheet.create({
    texto:{ 
      fontSize:22

    },

})