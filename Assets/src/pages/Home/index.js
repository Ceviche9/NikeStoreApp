import React from 'react'
import {View, 
        Text,
        StyleSheet,
        ScrollView,
        Image,
        TouchableOpacity,
      } from 'react-native'


import  { useNavigation } from '@react-navigation/native'

import Shoes from './Shoes'

export default function Home() {

  

  const navigation = useNavigation();

  

    return (

        <View style={Tela}>
            <View style={header}>
              <Image styles={Imagem} 
              source={require('../Nike/Vector.png')}/>
            </View>
          <View style={container}>
            <View 
            style={{
              flexDirection: 'row', 
              justifyContent: 'center',
              alignItems: 'center',

              }} > 
                <Text style={Texto} >Tênis</Text>
                <Text style={Texto} > - </Text>
                <Text style={Texto2} >Masculino</Text>
              </View>
            <TouchableOpacity style={Btn} >
              <Image source={require('../Nike/Filter.png')} />
            </TouchableOpacity> 
          </View>

          <View style={{

          

          }} > 

            <Text style={Line}/>
          </View>


        <ScrollView> 
          <View>
            <Text style={Titulo}>Novidades:</Text>
          </View>

            <View 
            style={{


              height: 310,
              width: '100%' ,
              paddingTop: 10,
              justifyContent: 'center',
              alignItems: 'center',
              borderWidth: 0.5,
              borderRadius: 10,
              borderColor: 'black',
        
        
      
             
             }}>
             <TouchableOpacity onPress={() => alert('Clicou')} >
                
              <Image style={img} 
              source={require('../Nike/brand/JordanW.png')} />
             </TouchableOpacity> 
            </View>
        

          <Text style={Line2} />

          <View style={{height: 50, 
                        width: 200,
                        justifyContent: 'flex-end',
                   
                        }} >
           <Text style={Titulo2} >Populares:</Text>
          </View>

          
          <View style={{paddingTop: 10}} >
            <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
             
             <Shoes 
             img={require('../Nike/list/ver-2.png')} 
             cost='R$ 659,90'
             onClick={() => navigation.navigate('Detail')}>
              Jordan 14 Retro Gym Red Toro
             </Shoes>

             <Shoes 
             img={require('../Nike/list/ver-1.png')} 
             cost='R$ 953,90'
             onClick={() => navigation.navigate('Detail2')}>
              Nike ISPA Overreackt Sail Multi
             </Shoes>
            </View>

            <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
             
             <Shoes 
             img={require('../Nike/list/ver-3.png')} 
             cost='R$ 459,90'
             onClick={() => navigation.navigate('Detail3')}>
              Jordan 1 Mid Light Smoke Grey
             </Shoes>

             <Shoes 
             img={require('../Nike/list/ver-4.png')} 
             cost='R$ 499,90'
             onClick={() => navigation.navigate('Detail4')}>
              Jordan 1 Retro High Light Smoke Grey
             </Shoes>
            </View>

            <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
             
             <Shoes 
             img={require('../Nike/list/ver-5.png')} 
             cost='R$ 1250,90'
             onClick={() => navigation.navigate('Detail5') }>
              Jordan 1 Retro High Tie
             </Shoes>

             <Shoes 
             img={require('../Nike/list/ver-6.png')} 
             cost='R$ 499,90'
             onClick={() => navigation.navigate('Detail6') }>
              Jordan 1 Mid Chicago Toe
             </Shoes>
            </View>

            <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
             
             <Shoes 
             img={require('../Nike/list/ver-7.png')} 
             cost='R$ 980,90'
             onClick={() => navigation.navigate('Detail7')}>
              Jordan 11 Retro Low White Concord
             </Shoes>

             <Shoes 
             img={require('../Nike/list/ver-8.png')} 
             cost='R$ 1250,90'
             onClick={() => navigation.navigate('Detail8') }>
              Jordan 11 Retro Low White Bred
             </Shoes>
            </View>

            <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
             
             <Shoes 
             img={require('../Nike/list/ver-9.png')} 
             cost='R$ 490,90'
             onClick={() => navigation.navigate('Detail9') }>
              Jordan 1 Retro High Royal
             </Shoes>

             <Shoes 
             img={require('../Nike/list/ver-10.png')} 
             cost='R$ 390,90'
             onClick={() => navigation.navigate('Detail10')}>
              Jordan 1 Retro High Pine Green
             </Shoes>
            </View>
          </View>
        </ScrollView>     
        </View>

    );


}

const Style = StyleSheet.create({

    Tela:{
  
      flexDirection: 'column',
      width: '100%',
      height: '100%',
      backgroundColor: '#ffff',
      padding: 10

    
    },
    Texto:{
      
      
      fontFamily:'OpenSans-Bold',
      color: 'black',
      fontSize: 22,
  
  
    },
    Texto2:{

      fontFamily:'OpenSans-Bold',
      color: '#CECECF',
      fontSize: 22,

    },

    header:{
     
     alignItems:'center',
     justifyContent: 'center',
     width:'100%',
     height: 90,

    },

    Imagem:{

      width:'100%',
      height: 200,

    },

    img:{

      width: 400,
      height: 240,
      alignItems: 'center',


    },

    container:{

      paddingTop: 10,
      height: 50,
      width: '100%',
      backgroundColor: '#ffff',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',

    },
    
    Btn:{

      alignItems: 'center',
      justifyContent: 'center',
      width: 40,
      height: 40,
      
      


    },

    Line:{
      

      borderBottomColor: '#d8d8d8',
      borderBottomWidth: 3,

    },

    Titulo:{

      padding: 5,
      fontSize: 23,
      fontFamily:'OpenSans-Italic' ,


    },

    Titulo2:{

      padding: 5,
      fontSize: 23,
      fontFamily:'OpenSans-Bold' ,



    },

    Line2:{


      borderBottomColor: '#d8d8d8',
      borderBottomWidth: 2,
      

    },

    
  })
  
  
  const {Tela,
     Texto,
     Texto2,
      header,
      Imagem,
      container,
      Btn,
      Line,
      Titulo,
      Titulo2,
      img,
      Line2,
    
          } = Style;