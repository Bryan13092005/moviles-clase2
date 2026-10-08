//se prensentan las vistas del usuario
//envuelve a todos los componentes de la aplicacion

//importar slot desde expo router
//es un componente que servira como espacio para renderizar la pantalla ACTIVA segun la ruta
import {Slot, Stack} from 'expo-router';

//layout raiz de expo router
//envuelve todas las rutas y vistas dentro de la carpeta app

export default function RootLayout() {
    //return <Stack screenOptions={{headerShown:false}}/>;
    return <Stack />;
}