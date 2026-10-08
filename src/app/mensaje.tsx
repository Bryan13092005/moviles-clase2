import {router} from 'expo-router';
import {Button,Text,View,StyleSheet, SafeAreaViewBase} from 'react-native';

export default function MensajeScreen(){
    return(
        <View style={styles.container}>
            <Text style={styles.titulo}>Estas en la pagina de mensajes</Text>
            <Button title='Volver' onPress={()=>{router.back()}}></Button>
        </View>
    );
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