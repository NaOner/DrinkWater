import { View, Text, useColorScheme, StyleSheet } from "react-native"

export default function ThemedText({title= false , children, style }){

    //const theme = useColorScheme()
    const theme = "light"

    const type = title ? 'title' : 'text'

    return (
     <>
         <Text style={[styles[type][theme], style]}>
             {children}
         </Text>
     </>
    )
}


const styles = StyleSheet.create({
    title: {
        light: {
            color: '#0A2540',
            fontSize: 35,
            fontWeight: 'bold'
        }
    }, text: {
        light: {
            color: '#0A2540',
            fontSize: 20,
            fontWeight: 'bold'

        },
    }
})