import {StyleSheet} from "react-native";

const styles = StyleSheet.create({
    background: {
        flex: 1,
        justifyContent: "center",
    },
    logoText: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'white',
    },
    logoSection: {
        width: "100%",
        height: '30%',
        justifyContent: "center",
        alignItems: "center",
    },
    counterSection: {
        width: "100%",
        height: "20%",
        justifyContent: "center",
        alignItems: "center",
    },
    drinkSection: {
        width: "100%",
        height: 200,
        justifyContent: "center",
        alignItems: "center",
    },
    undoButtonSection: {
        width: "100%",
        height: "20%",
        justifyContent: "center",
        alignItems: "center"
    },
    centered: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    errorSection: {
        paddingHorizontal: 20,
        paddingVertical: 8,
        alignItems: "center",
    },
    errorText: {
        color: "#ff6b6b",
        fontSize: 14,
        textAlign: "center",
    }
})

export default styles