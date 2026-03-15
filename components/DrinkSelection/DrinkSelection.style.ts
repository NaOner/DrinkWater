import { StyleSheet } from "react-native";

const color = "#000000";
export const activeColor = "rgba(255,255,255,0.83)";

const styles = StyleSheet.create({
    elementsToSelect: {
        width: 400,
        flexDirection: "row",
        justifyContent: "center",
    },

    element: {
        borderBottomColor: color,
        alignItems: "center",
        borderBottomWidth: 3,
        marginBottom: 20,
        width: 80,
    },

    elementActive: {
        borderBottomColor: activeColor,
    },

    text: {
        fontSize: 20,
        fontWeight: "bold",
        color: color,
    },

    textActive: {
        color: activeColor,
        fontWeight: "bold",
    },
});

export default styles;
