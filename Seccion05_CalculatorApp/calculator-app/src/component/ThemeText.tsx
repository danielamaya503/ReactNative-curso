import {Text, TextProps} from 'react-native'
import {globalStyles} from "@/styles/global-styles";

//TextProps es una propiedad que reconoce para usar propiedades <Text>
//...rest: el resto de props nativas de Text.
//numberOfLines={1} limita el texto a una sola línea
//adjustsFontSizeToFit intenta reducir el tamaño para que quepa

interface Props extends TextProps{
    children: string,
    variante?: 'h1' | 'h2'
}
 const ThemeText = ( {
                         children,
                         variante = 'h1',
                         ...rest
 } : Props
 ) => {
    return(
            <Text
                style={[
                    {color: 'white', fontFamily: 'SpaceMono'},
                    variante === 'h1' && globalStyles.mainResult,
                    variante === 'h2' && globalStyles.subResult
                ]}
                numberOfLines={1}
                adjustsFontSizeToFit
                {...rest}
            >
                {children}
            </Text>
    )
}

export default ThemeText;