import {router} from 'expo-router'
import {View,Text,TextInput,Button, StyleSheet,Alert} from 'react-native'

export default function Formulario(){
    return(
        <View style={styles.container}>
            <Text style={styles.titulo}>FORMULARIO</Text>
            <Text style={styles.campos}>Ingresa tu nombre: </Text><TextInput style={styles.input} placeholder='nombre'></TextInput>
            <Text style={styles.campos}>Ingresa tu edad: </Text><TextInput style={styles.input} placeholder='edad'></TextInput>
            <Text style={styles.campos}>Ingresa tu mascota favorita: </Text><TextInput style={styles.input} placeholder='mascota favorita'></TextInput>

            <Button
                color='red'
                title='GUARDAR'
                onPress={()=>(Alert.alert("GUARDADO"))}
            />
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
        color:'#ad21d8'
    },
    img:{
        height:200,
        width:200
    },
    campos:{
        fontSize:20,
        fontWeight:'600'
    },
    input:{
        backgroundColor:'#64dfe3'
    }
});