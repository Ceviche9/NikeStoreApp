import React from 'react'
import {View,
        Text,
        Image, 
        StyleSheet, 
        ScrollView, 
        TouchableOpacity    
    } from 'react-native';


export default function Detail({ navigation }) {

        navigation.setOptions({

            headerTitle: 'Jordan 14 Retro Gym Red Toro'

        })




    return (
       <View 
            style={{backgroundColor:'#ffff',
                    flex: 1,
                    width: '100%',
                    height: '100%',
                    backgroundColor: '#ffff',
                    padding: 5,
                    }} >
           <TouchableOpacity>
            <Image 
                    style={{marginHorizontal: 470,
                                       
                    }}
                    source={require('..//Nike/cart.png')} />
            </TouchableOpacity>
    <ScrollView>    
        <View style={Tela}>
                <Image 
                style={{
                    marginTop: 40,
                    marginHorizontal: 80,
                    width: 400,
                    height: 250,}}
                source={require('../Nike/Jordan1.png')}/>
                <Text style={Line} />
            <View style={Tela2} >
                 
                    <Text style={Texto} >Preço: R$ 659,90</Text>
                    <Text style={Texto2} >Jordan 14 Retro Gym Red Toro</Text>

                    <Text style={Texto4} >DESCRIÇÃO:</Text>
                    <Text style={Texto3} >Jordan Brand lançou um novo colorway temático Chicago Bulls com o Jordan 14 Retro Gym Red Toro. Este lançamento se parece muito com o Jordan 14 Challenge Red, mas em vez de detalhes amarelos para imitar sua inspiração da Ferrari, o Gym Red 14 implementa painéis brancos para criar a vibração do uniforme dos Bulls.</Text>
                
                <TouchableOpacity style={Btn}>
                    <Text style={{color: '#ffff',
                                fontFamily:'OpenSans-Bold',}}>
                         COMPRAR
                    </Text>
                        
                </TouchableOpacity>          
            </View> 
        </View>
    </ScrollView>  
    
        </View> 



    );


}

const Style = StyleSheet.create({

    Line:{
      
        marginVertical: -20,
        marginBottom: 5,
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

        marginTop: 5,
        fontFamily:'OpenSans-Bold',
        color: 'black',
        opacity: 0.4,
        fontSize: 16,

    },

    Texto3:{

        marginTop: 10,
        fontFamily:'OpenSans-Regular',
        color: 'black',
        fontSize: 18,



    },
    Texto4:{

        marginTop: 20,
        fontFamily:'OpenSans-Bold',
        color: 'black',
        fontSize: 24,
  



    },
    Btn:{

        position: 'absolute',
        marginHorizontal: 270,
        marginVertical: 470,
        justifyContent: 'center',
        alignItems: 'center',
        width: 220,
        height: 90,
        borderRadius: 15,
        backgroundColor: 'black',
        fontSize: 18,
        color: '#ffff'



    },

    

    

    
  })
  
  
  const {Tela, Texto,Texto2,Texto3,Texto4, Tela2, Line, Btn } = Style;