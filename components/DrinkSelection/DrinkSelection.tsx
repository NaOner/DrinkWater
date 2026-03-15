import styles, { activeColor } from "./DrinkSelection.style";
import {Text, TouchableOpacity, View} from "react-native";

interface props {
    selected: string,
    onSelect: (selected: string) => void
}

function DrinkSelection({selected, onSelect}: props) {


    return (
        <View style={styles.elementsToSelect}>

            <TouchableOpacity style={[styles.element, selected === "Tea" && styles.elementActive]} onPress={() => onSelect("Tea")}>
                <Text style={[styles.text, selected === "Tea" && styles.textActive]}>
                    Tea
                </Text>
            </TouchableOpacity>

            <TouchableOpacity style={[styles.element, selected === "Water" && styles.elementActive]} onPress={() => onSelect("Water")}>
                <Text style={[styles.text, selected === "Water" && styles.textActive]}>
                    Water
                </Text>
            </TouchableOpacity>

            <TouchableOpacity style={[styles.element, selected === "Coffee" && styles.elementActive]} onPress={() => onSelect("Coffee")}>
                <Text style={[styles.text, selected === "Coffee" && styles.textActive]}>
                    Coffee
                </Text>
            </TouchableOpacity>

        </View>

    )
}

export default DrinkSelection