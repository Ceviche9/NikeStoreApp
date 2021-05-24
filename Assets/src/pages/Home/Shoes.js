import React from 'react'
import {View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native'

export default function Shoes(props) {

    function filterDesc(desc){
        if (desc.length < 20){
            return desc;
        }

        return `${desc.substring(0,20)}...`;
      
    }

    return (
     
        <TouchableOpacity style={Tela} onPress={props.onClick} >
          <View style={Tela2} > 
            <Image
                source={props.img}
                style={Shoe}
            />
                <View style={Telatxt} >
                    <Text style={imgtxt}>{filterDesc(props.children)}</Text>
                    <Text style={price}>{props.cost}</Text>
                </View>
          </View>   
        </TouchableOpacity>

      

    );

}

const estilo = StyleSheet.create({


    

    preço:{

        fontSize: 18



    },

    Tela:{
        
        width: '100%',
        height: 300,
        alignItems: 'center',
        paddingTop: 5,  

    },

    Tela2:{

        alignItems: 'center',
        justifyContent: 'center'





    },

    Shoe:{
       
        width: 175,
        height: 175,




    },

    Telatxt :{

        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        opacity: 0.9,
  
  
  
    },

    imgtxt:{

        
        fontSize: 16,
        color: 'black',
  
    },

    price:{

       
        opacity: 0.7,
        fontSize: 16,


    },


})

const {Tela, Tela2, Texto, Shoe, preço,imgtxt, Telatxt, price} = estilo;