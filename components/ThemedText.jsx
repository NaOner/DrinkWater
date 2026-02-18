import {Text, StyleSheet } from "react-native"

export default function ThemedText({title= false , children, style, ...props }){

    const type = title ? 'title' : 'text'

    return (
     <>
         <Text style={[styles[type], style]}
               {...props}
         >
             {children}
         </Text>
     </>
    )
}


const styles = StyleSheet.create({
    title: {
        color: '#0A2540',
        fontSize: 35,
        fontWeight: 'bold'
    },
    text: {
        color: '#0A2540',
        fontSize: 20,
        fontWeight: 'bold'

    },
})