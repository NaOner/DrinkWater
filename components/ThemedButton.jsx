import {StyleSheet, Pressable, Text, useColorScheme} from "react-native";


export default function ThemedButton({style, title, children, ...props}){

    return (
        <Pressable
            style={({pressed}) => pressed ? styles.button.pressed : styles.button.no_pressed}
            {...props}>
            {({pressed}) => (
                <Text style={ pressed ? styles.text.pressed : styles.text.no_pressed}>
                    {children}
                </Text>
            )}
        </Pressable>
    )
}

const styles = StyleSheet.create({
    button: {
        no_pressed: {
            borderRadius: 20,
            borderWidth: 2,
            width: 100,
            alignItems: "center",
            justifyContent: "center",
            height: 50,
            borderColor: "#1CB0F6",
            backgroundColor: "#DCF2F5",
        },
        pressed: {
            borderRadius: 20,
            borderWidth: 2,
            width: 100,
            alignItems: "center",
            justifyContent: "center",
            height: 50,
            borderColor: "#DCF2F5",
            backgroundColor: "#1CB0F6",
        }
    },
    text: {
        no_pressed: {
            color: "#1CB0F6",
            fontWeight: "bold",
            fontSize: 20
        },
        pressed: {
            color: "#DCF2F5",
            fontWeight: "bold",
            fontSize: 20
        }
    }
})