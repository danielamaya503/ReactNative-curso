import {View, Platform} from 'react-native'

//Barra de navegación de Expo
//https://docs.expo.dev/versions/latest/sdk/navigation-bar/
import {NavigationBar} from 'expo-navigation-bar';

import {Slot} from 'expo-router'
import {useFonts} from "expo-font";
import {StatusBar} from "expo-status-bar";
import {globalStyles} from "@/styles/global-styles";


 const RootLayout = () => {

     //Tipo de letra de Google
    const [loaded] = useFonts({
        SpaceMono: require('../../assets/fonts/SpaceMono-Regular.ttf'),
    });

    if(!loaded) return null;

    return(
        <View
            style={ globalStyles.backgroound}
        >
            <NavigationBar style={"auto"} />
            <Slot />
            <StatusBar style={'light'}/>
        </View>
    );
};

export default RootLayout;

