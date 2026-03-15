import { View, Text, TouchableOpacity, Image } from "react-native";
import styles from "./UndoButton.style";
import { DrinkRecord } from "@/types";

interface UndoButtonProps {
    records: DrinkRecord[];
    onUndo: () => void;
}

function UndoButton({ records, onUndo }: UndoButtonProps) {
    if (records.length === 0) return null;

    return (
        <TouchableOpacity onPress={onUndo} activeOpacity={0.4}>
            <View style={styles.darkShadow}>
                <View style={styles.lightShadow}>
                    <View style={styles.buttonContent}>
                        <Image
                            source={require("../../assets/images/undo.png")}
                            style={{ width: 20, height: 20, marginRight: 5 }}
                        />
                        <Text style={styles.text}>UNDO</Text>
                    </View>
                </View>
            </View>
        </TouchableOpacity>
    );
}

export default UndoButton;
