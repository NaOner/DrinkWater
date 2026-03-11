import {View, Text, TouchableOpacity, Image} from "react-native";
import styles from "./UndoButton.style";


interface element {
    type: string,
    volume: number,
    date: Date,
}

interface UndoButtonProps {
    data: element[],
    onPress: (data: element[]) => void
}



function UndoButton({ data, onPress}: UndoButtonProps) {
    return (
        <TouchableOpacity onPress={() => { onPress(data) }} activeOpacity={0.4} style={{}}>
            <View style={styles.darkShadow}>
                <View style={styles.lightShadow}>
                    <View style={styles.buttonContent}>
                        <Image source={require("../../assets/images/undo.png")} style={{ width: 20, height: 20, marginRight: 5 }}/>
                        <Text style={styles.text}>UNDO</Text>
                    </View>
                </View>
            </View>
        </TouchableOpacity>
    )
}

export default UndoButton

