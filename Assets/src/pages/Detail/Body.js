import React from 'react'
import {View, 
        Text, 
        Image, 
        StyleSheet, 
        ScrollView, 
        TouchableOpacity,
    
    } from 'react-native'
import  { useNavigation } from '@react-navigation/native'

export default function Body(props) {


    const navigation = useNavigation();

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
                    source={props.img}/>
                </View>
                    <Text style={Line} />
                <View style={Tela2} >
                    
                        <Text style={Texto} >Preço: R$ {props.cost}</Text>
                        <Text style={Texto2}>{props.name}</Text>

                        <Text style={Texto4} >DESCRIÇÃO:</Text>
                        <Text style={Texto3} >{props.discrp}</Text>
                </View>
                <View style={{flex:1 , 
                            width: '100%',
                            height: 280,
                            justifyContent: 'center',
                            alignItems: 'center',
                            paddingTop: 20,
                            }} >
                 <Image
                 style={Brand}
                 source={props.brand}
                 />
                 
                </View>         
                
            </View>
        </ScrollView>  
        <View style={{
              
                    alignItems: 'center',
                    justifyContent:'center',
                    flexDirection: 'row',
                    padding: 10}}>
            <TouchableOpacity 
            style={Btn}
            onPress={() => navigation.navigate('Cart') }
            >
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






    )




}

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
        height: 450,
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

    Brand:{

        width: 390,
        height: 220,



    },
    
    

    

    
  })
  
  
  const {Tela, Texto,Texto2,Texto3,Texto4, Tela2, Line, Btn, Brand} = Style;