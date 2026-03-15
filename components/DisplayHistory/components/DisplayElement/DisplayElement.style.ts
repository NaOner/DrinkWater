import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    element: {
        width: 250,
        height: 55,
        backgroundColor: "white",
        borderColor: "black",
        borderWidth: 1,
        borderRadius: 20,
        marginBottom: 10,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        shadowColor: "#000000", // Czysta biel
        shadowOffset: { width: 0, height: 0 },
        shadowOpacity: 0.3,
        shadowRadius: 10,
    },
    text: {
        fontSize: 18,
        fontWeight: "bold",
        fontFamily: "sans-serif",
        color: "rgba(7,75,159,0.83)",
    },
});

export default styles;
