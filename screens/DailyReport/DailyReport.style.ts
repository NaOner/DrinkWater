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
    },
    titleSection: {
        height: 100,
        width: "100%",
        alignItems: 'center',
        justifyContent: "center",
        shadowColor: '#ffffff',
        shadowOffset: { width: 0, height: 0 },
        shadowOpacity: 0.8,
        shadowRadius: 10,
    },
    title: {
        flex: 0.4,
        fontSize: 30,
        fontWeight: 'bold',
        fontFamily: 'sans-serif',
        color: 'white',
    }
});

export default styles