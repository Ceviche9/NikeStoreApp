import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import Shoes from '../Home/Shoes'
import  { useNavigation } from '@react-navigation/native'


export default function Footer() {

    const navigation = useNavigation();
 
    return (

    <View>
        <Text style={Titulo} >Você Também pode levar:</Text>
        <View style={{flexDirection: 'row'}} >
            <ScrollView horizontal>
                <View >
                    <Shoes 
                        img={require('../Nike/list/ver-4.png')} 
                        cost='R$ 490,90'
                        onClick={() => navigation.navigate('Detail4') }>
                        Jordan 1 Retro High Royal
                    </Shoes>
                </View>    
                <View> 
                    <Shoes 
                        img={require('../Nike/list/ver-7.png')} 
                        cost='R$ 390,90'
                        onClick={() => navigation.navigate('Detail7')}>
                        Jordan 1 Retro High Pine Green
                    </Shoes>
                </View>  
                <View> 
                    <Shoes 
                        img={require('../Nike/list/ver-10.png')} 
                        cost='R$ 390,90'
                        onClick={() => navigation.navigate('Detail10')}>
                        Jordan 1 Retro High Pine Green
                    </Shoes>
                </View>  
            </ScrollView>

        </View>

    </View>




   
  );
}


const style = StyleSheet.create({

    Titulo:{
        paddingTop: 10,
        fontFamily:'OpenSans-Bold',
        color: 'black',
        fontSize: 24,

    },






})

const {Titulo} = style;