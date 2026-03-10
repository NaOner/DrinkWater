import {View, Text } from "react-native";

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
        <View>
            <Text>
                {item.type} - {item.volume} ml - {String(item.date.getHours()).padStart(2, '0')}:{String(item.date.getMinutes()).padStart(2, '0')}
            </Text>
        </View>
    )
}

export default DisplayElement