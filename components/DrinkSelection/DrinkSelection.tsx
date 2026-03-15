import styles from "./DrinkSelection.style";
import {Text, TouchableOpacity, View} from "react-native";
import {DrinkType, DRINK_TYPE_ENUM} from "@/types/drink";

interface DrinkSelectionProps {
    selectedType: DrinkType,
    onTypeSelect: (type: DrinkType) => void
}

const DRINK_TYPES = Object.values(DRINK_TYPE_ENUM);

function DrinkSelection({selectedType, onTypeSelect}: DrinkSelectionProps) {
    return (
        <View style={styles.elementsToSelect}>
            {DRINK_TYPES.map((type) => (
                <TouchableOpacity
                    key={type}
                    style={[styles.element, selectedType === type && styles.elementActive]}
                    onPress={() => onTypeSelect(type)}
                >
                    <Text style={[styles.text, selectedType === type && styles.textActive]}>
                        {type}
                    </Text>
                </TouchableOpacity>
            ))}
        </View>
    )
}

export default DrinkSelection