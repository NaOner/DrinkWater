import {StyleSheet, Pressable, Text} from "react-native";
import {useState} from "react";
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import {Image} from "expo-image";



export default function AddButton({style, ...props}){

    const [state, setState] = useState(false)
    const pressedOrNoPressed = state ? "pressed" : "no_pressed"

    return (
        <Pressable
            onPressIn={() => {setState(true)}}
            onPressOut={() => {setState(false)}}
            style={[styles.button[pressedOrNoPressed], style]}
        >
            <Image src={FontAwesome6}></Image>
        </Pressable>
    )
}

const styles = StyleSheet.create({
    button: {
        pressed: {
            borderRadius: 30,
            borderWidth: 2,
            width: 60,
            alignItems: "center",
            textAlign: "center",
            justifyContent: "center",
            height: 60,
            borderColor: "#1CB0F6",
            backgroundColor: "white",
        },
        no_pressed: {
            borderRadius: 30,
            borderWidth: 2,
            width: 60,
            alignItems: "center",
            textAlign: "center",
            justifyContent: "center",
            height: 60,
            borderColor: "#DCF2F5",
            backgroundColor: "#1CB0F6",
        }
    },
})