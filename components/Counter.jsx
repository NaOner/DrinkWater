import {Text, View, StyleSheet} from "react-native";

export default function Counter({limit, drunkWater}) {


    return (
        <View style={styles.container}>
            <Text>
                <Text style={styles.drunkWater}>{drunkWater}</Text>
                <Text style={styles.limit}>/{limit}</Text>
            </Text>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        margin: 10,
        width: "90%",
        height: 50,
        backgroundColor: "#eae9e9",
        alignItems: "center",
        justifyContent: "center",
        borderColor: "#0A2540",
        borderRadius: 10,
        borderWidth: 2

    },
    drunkWater: {
        color: '#0A2540',
        fontSize: 20,
        fontWeight: 'bold'
    },
    limit: {
        color: '#0A2540',
        fontSize: 15,
        fontWeight: 'bold'
    },
})