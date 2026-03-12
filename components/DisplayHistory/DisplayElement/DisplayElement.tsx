import {View, Text } from "react-native";
import styles from "./DisplayElement.style";
import { CustomImage } from "./CustomImage";

interface waterParameters {
    type: string,
    volume: number,
    date: Date,
}

interface DisplayElementProps {
    item: waterParameters
}


function DisplayElement({ item }: DisplayElementProps) {


    return (
        <View style={styles.element}>
            <CustomImage item={item.type}/>
            <Text style={styles.text}>
                - {item.volume} ml
                - {String(item.date.getHours()).padStart(2, '0')}:{String(item.date.getMinutes()).padStart(2, '0')}
            </Text>
        </View>
    )
}

export default DisplayElement