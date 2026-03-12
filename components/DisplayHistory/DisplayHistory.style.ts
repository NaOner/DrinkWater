import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        flex: 0.9,
        backgroundColor: "rgba(6,50,108,0.83)",
        width: "80%",
        height: "80%",
        borderRadius: 20,
        borderWidth: 1,
        borderColor: "black",
        shadowColor: '#ffffff', // Czysta biel
        shadowOffset: { width: 0, height: 0 },
        shadowOpacity: 0.8,
        shadowRadius: 10,

    },
    indicatorStyle: {
        backgroundColor: 'white',
        width: 20,
    },
    scrollView: {

        padding: 10,
    },
});

export default styles