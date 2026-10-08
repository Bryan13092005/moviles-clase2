import { StyleSheet,Text,TouchableOpacity } from "react-native";

type sympleTouchableButtonProps={
    title:string;
    onPress:()=>void;
};

export default function SimpleTouchableOpacity({title,onPress}: sympleTouchableButtonProps){
    return(
        <TouchableOpacity onPress={onPress} style={styles.button}>
            <Text style={styles.text}>{title}</Text>
        </TouchableOpacity>
    );
}

const styles=StyleSheet.create({
    button:{
        marginTop:12,
        backgroundColor:'#0824a3',
        paddingVertical:10,//espacio interno, entre el borde y el contenido
        paddingHorizontal:16,//espacio interno de iz a der etre el borde y texto
        borderRadius:8
    },
    text:{
        color:'rgb(240, 240, 240)',
        fontSize:16,
        fontWeight:'600'
    }
});