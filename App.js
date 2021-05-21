import 'react-native-gesture-handler';

import React from 'react'
import {StyleSheet, Text, View, StatusBar} from 'react-native'
import Rotas from './Assets/src/Rotas'

export default function App() {

  return (

    <>
      <StatusBar 
      style='light'
      backgroundColor='#fff'
      translucent={true} />
      <Rotas />


    </>

  );


}

const estilo = StyleSheet.create({

  Tela:{

    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',

  },
  Texto:{
    
    fontFamily:'OpenSans-Regular'


  },



})


const {Tela, Texto} = estilo;