import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    image: {
        width: 200,
        height: 100,
    },
    background: {
        justifyContent: "center",
        alignItems: "center",
        padding: 10,
        width: 250,
        height: 150,
        borderRadius: 20,
        borderWidth: 1,
        borderColor: "black",
    },

    container: {
        justifyContent: "center",
        alignItems: "center",
    },

    text: {
        fontSize: 25,
        fontWeight: "bold",
        color: "white",
    },

    touchable: {
        shadowColor: "#000000", // Czysta biel
        shadowOffset: { width: 0, height: 0 },
        shadowOpacity: 0.8,
        shadowRadius: 10,
    },
});
