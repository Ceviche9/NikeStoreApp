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

            headerTitle: 'Jordan 14 Retro Gym Red Toro'

        })

<<<<<<< HEAD
    return (
=======
     return (
    <View 
            style={{backgroundColor:'#ffff',
                    flex: 1,
                    flexDirection: 'column',
                    width: '100%',
                    height: '100%',
                    backgroundColor: '#ffff',
                    padding: 5,
                    }} >
           <TouchableOpacity>
            <View style={{width: '100%',
                        height: 40,
                        flexDirection: 'row-reverse',
                        alignItems: 'center',
                        padding: 10,
                    }}  >   
            <Image 
                source={require('..//Nike/cart.png')} />
            </View>
            </TouchableOpacity>
        <ScrollView style={{width:'100%'}} >    
            <View style={Tela}>
                <View style={{
                    alignItems:'center',
                    justifyContent: 'center'}} >
                    <Image 
                    style={{
                        width: 400,
                        height: 250,}}
                    source={require('../Nike/Jordan1.png')}/>
                </View>
                    <Text style={Line} />
                <View style={Tela2} >
                    
                        <Text style={Texto} >Preço: R$ 659,90</Text>
                        <Text style={Texto2} >Jordan 14 Retro Gym Red Toro</Text>

                        <Text style={Texto4} >DESCRIÇÃO:</Text>
                        <Text style={Texto3} >Jordan Brand lançou um novo colorway temático Chicago Bulls com o Jordan 14 Retro Gym Red Toro. Este lançamento se parece muito com o Jordan 14 Challenge Red, mas em vez de detalhes amarelos para imitar sua inspiração da Ferrari, o Gym Red 14 implementa painéis brancos para criar a vibração do uniforme dos Bulls.</Text>
                </View>         
                
            </View>
        </ScrollView>  
        <View style={{alignItems: 'center',
                    justifyContent:'center',
                    flexDirection: 'row',
                    padding: 10}}>
            <TouchableOpacity style={Btn}>
              <View style={{
                    alignItems: 'center',
                    justifyContent:'space-around',
                    flexDirection: 'row',
                   }} >  
                <Image source={require('..//Nike/cart.png')}/>

                <Text style={{color: 'black',
                            fontFamily:'OpenSans-Bold',
                            paddingLeft: 15,
                            }}>
                   COMPRAR
                </Text>
              </View> 
                            
            </TouchableOpacity> 
        </View>                         
    
    </View> 

>>>>>>> a48924ca379dc551c74e0ad37681e5b426c409a5

        <Body
        img={require('../Nike/Jordan1.png')}
        cost={'659,90'}
        name={'Jordan 14 Retro Gym Red Toro'}
        discrp={'Jordan Brand lançou um novo colorway temático Chicago Bulls com o Jordan 14 Retro Gym Red Toro. Este lançamento se parece muito com o Jordan 14 Challenge Red, mas em vez de detalhes amarelos para imitar sua inspiração da Ferrari, o Gym Red 14 implementa painéis brancos para criar a vibração do uniforme dos Bulls.'} 
       > 
       </Body>

    );

}

<<<<<<< HEAD
=======
const Style = StyleSheet.create({

    Line:{
      
      
        borderBottomColor: '#d8d8d8',
        borderBottomWidth: 3,
  

    },

    Tela:{
  
      flex: 1,
      width: '100%',
      height: '100%',
      backgroundColor: '#ffff',

    
    },

    Tela2:{


        width: '100%',
        height: 600,
        padding: 10,
        backgroundColor: '#ffff',





    },
    Texto:{
      
      
      fontFamily:'OpenSans-Bold',
      color: 'black',
      fontSize: 26,
  
  
    },
    Texto2:{

       
        fontFamily:'OpenSans-Bold',
        color: 'black',
        opacity: 0.4,
        fontSize: 16,

    },

    Texto3:{

        padding: 5,
        fontFamily:'OpenSans-Regular',
        color: 'black',
        fontSize: 18,



    },
    Texto4:{

        paddingTop: 10,
        fontFamily:'OpenSans-Bold',
        color: 'black',
        fontSize: 24,
  



    },

    Btn:{

      
        justifyContent: 'center',
        alignItems: 'center',
        width: 360,
        height: 90,
        borderWidth: 3,
        borderColor: 'black',
        borderRadius: 20,
        backgroundColor: '#ffff',
        fontSize: 18,
        



    },

    

    

    
  })
  
  
  const {Tela, Texto,Texto2,Texto3,Texto4, Tela2, Line, Btn } = Style;
>>>>>>> a48924ca379dc551c74e0ad37681e5b426c409a5
