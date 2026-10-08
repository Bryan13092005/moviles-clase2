import React from 'react';
//los componentes se declaran desde el import
import {Text,View, StyleSheet, Image, Button, Alert, TextInput} from 'react-native'
import SimpleTouchableOpacity from '@/components/simple-touchable-button';
import {router} from 'expo-router'

const App =()=>{
    return(//poner 2 llaves quiere decir que voy a poner un objeto
    <View style={styles.container}>
        <Text style={styles.titulo}>HOLA MUNDO</Text>
        {/*desde url */}
        <Image
        source={{uri:'https://picsum.photos/id/237/200/300'}} style={styles.img}
        />
        {/*desde assests*/}
        <Image
        source={require('../../assets/images/buho.png')} style={styles.img}
        />
        <Button
            color='red'
            title='Presioname'
            onPress={()=>(Alert.alert("Hola EPN"))}
        />
        <SimpleTouchableOpacity title='Touchable Reutilizable' onPress={()=>{Alert.alert('Hola Desde Touchable Opacitty')}}/>

        <SimpleTouchableOpacity title='Navegacion' onPress={()=>{router.push('/mensaje')}}/>
        <SimpleTouchableOpacity title='Formulario' onPress={()=>{router.push('/formulario')}}/>

        <TextInput/>
    </View>
    )
}

const styles=StyleSheet.create({
    container:{
        flex:1, 
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'#95dbee'
    },
    titulo:{
        fontSize:50,
        fontWeight:'700',
        color:'#131313'
    },
    img:{
        height:200,
        width:200
    }
});

export default App;