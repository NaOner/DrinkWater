import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    background: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    safeArea: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        height: "100%",
    },
    displaySection: {
        flex: 0.9,
        width: "100%",
        height: "100%",
        alignItems: 'center',
        justifyContent: "center",
        borderColor: 'black',
        borderWidth: 3
    },
    titleSection: {
        height: 100,
        width: "100%",
        alignItems: 'center',
        justifyContent: "center",
        borderColor: 'black',
        borderWidth: 3
    },
    title: {
        flex: 0.4,
        fontSize: 22,
        fontWeight: 'bold',
        color: 'white',
    }
});

export default styles