import React  from 'react';
import {View , Text, StyleSheet, Button} from 'react-native';

export default (props) => {

    function executar(){

        console.warn('Exec!!!')


    }

    return(
    
        <>   
            
            <Button
                title='Executar #1'
                onPress={executar}
            
            />
            <Button
                title='Executar #2'
                onPress={ () => console.warn('Exec 2')}
            />
            
            <Button
                title='Executar #3'
                onPress={function () {
                    console.warn('Exec 3')



                }}
            />


        </>   

    )

} 

