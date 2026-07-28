import {Text, Pressable, PressableProps} from 'react-native'
import {globalStyles} from "@/styles/global-styles";
import {Colors} from "@/constants/theme";

//Háptica de la Expo (vibracion)
//https://docs.expo.dev/versions/latest/sdk/haptics/#impactfeedbackstyle
import * as Haptics from 'expo-haptics';

interface Props extends PressableProps
{
    label: string,
    color?: string,
    blackText?: boolean,
    onPress?: () => void,
    doubleSize?: boolean
}

//Regla de useHook es que debe iniciar con minuscula
 const CalculatorButton = ( {
                                label,
     color = Colors.darkGray,
     blackText = false,
                                onPress,
     doubleSize = false,
 }: Props) => {
    return(
        <Pressable
            style={ ({pressed}) => ({
                ...globalStyles.button,
                backgroundColor: color,
                opacity: pressed ? 0.8: 1,
                width: doubleSize ? 180 : 80
            })}
            onPress={ () => {
                Haptics.selectionAsync();
                if (onPress) onPress();
            }}
        >
            <Text
                style={{
                    ...globalStyles.buttonText,
                    color: blackText ? 'black' : 'white'
                }}
            >
                {label}
            </Text>
        </Pressable>
    )
}

export default CalculatorButton;