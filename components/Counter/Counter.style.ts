import {StyleSheet} from "react-native";

export const styles = StyleSheet.create({
    counter: {
        width: "90%",
        height: 50,
        backgroundColor: "white",
        alignItems: "center",
        justifyContent: "center",
        borderColor: "black",
        borderRadius: 20,
        borderWidth: 1,
        marginTop: 10,
    },
    counted: {
        fontSize: 25,
        fontWeight: 'bold',
        color: 'white',
    },
    limit: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#e8e7e7',
    },
    lightShadow: {shadowColor: '#ffffff', // Czysta biel
        shadowOffset: { width: 0, height: 0 },
        shadowOpacity: 0.8,
        shadowRadius: 10,
    },
})