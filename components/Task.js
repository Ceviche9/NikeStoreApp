import React from 'react';
import {View, Text,StyleSheet, TouchableOpacity} from 'react-native';

const Task = (props) => {

    return(

    <View style={item}>
        <View style={item2}>
            <View style={bloco}></View>
            <Text  style={Texto2} >{props.text}</Text>
        </View>
        <View style={circulo} ></View>
    </View>


    )

}

const styles = StyleSheet.create({

    item:{
        
    backgroundColor: 'white',
    padding: 15,
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 20,



    },

    item2:{

       
    flexDirection: 'row',
    alignItems: 'center',
    flexWrap: 'wrap',

    },

    bloco:{


    width: 24,
    height: 24,
    backgroundColor:'#284243',
    opacity: 0.9,
    borderRadius: 5,
    marginRight: 25,

    },
    Texto2:{
        maxWidth: '80%',
        fontSize: 18,

    },
    circulo:{

        width:12,
        height: 12,
        borderColor: '#284243',
        borderWidth: 2,
        borderRadius: 5,
    },


});

const {item} = styles;
const {item2} = styles;
const {bloco} = styles;
const {Texto2} = styles;
const {circulo} = styles;


export default Task;