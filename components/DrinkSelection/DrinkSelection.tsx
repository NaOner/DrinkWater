import styles, { activeColor } from "./DrinkSelection.style";
import {Text, TouchableOpacity, View} from "react-native";

interface props {
    selected: string,
    setSelected: (selected: string) => void
}

function DrinkSelection({selected, setSelected}: props) {


    return (
        <View style={styles.elementsToSelect}>

            <TouchableOpacity style={[styles.element, selected === "Tea" && styles.elementActive]} onPress={() => setSelected("Tea")}>
                <Text style={[styles.text, selected === "Tea" && styles.textActive]}>
                    Tea
                </Text>
            </TouchableOpacity>

            <TouchableOpacity style={[styles.element, selected === "Water" && styles.elementActive]} onPress={() => setSelected("Water")}>
                <Text style={[styles.text, selected === "Water" && styles.textActive]}>
                    Water
                </Text>
            </TouchableOpacity>

            <TouchableOpacity style={[styles.element, selected === "Coffee" && styles.elementActive]} onPress={() => setSelected("Coffee")}>
                <Text style={[styles.text, selected === "Coffee" && styles.textActive]}>
                    Coffee
                </Text>
            </TouchableOpacity>

        </View>

    )
}

export default DrinkSelection