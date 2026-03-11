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
        borderWidth: 1,
        borderColor: 'black',
        width: "100%",
        height: '30%',
        justifyContent: "center",
        alignItems: "center",
    },
    counterSection: {
        borderWidth: 1,
        borderColor: 'black',
        width: "100%",
        height: "20%",
        justifyContent: "center",
        alignItems: "center",
    },
    drinkSection: {
        width: "100%",
        height: 200,
        borderWidth: 1,
        borderColor: 'black',
        justifyContent: "center",
        alignItems: "center",
    },
    undoButtonSection: {
        width: "100%",
        height: "20%",
        borderWidth: 1,
        borderColor: 'black',
        justifyContent: "center",
        alignItems: "center"
    }
})

export default styles