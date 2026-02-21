import {TouchableOpacity, View, StyleSheet} from "react-native";
import {Image} from "expo-image";
import szklanka_wody_200ml from "../assets/images/Szklanka_wody.png";


export default function Drink({onWaterCreate, ...props }) {

    return  <View style={styles.drinks}>
        <TouchableOpacity onPress={()=> {
            onWaterCreate("woda", 200)
        }}>
            <Image style={styles.szklanka_wody} source={szklanka_wody_200ml}/>
        </TouchableOpacity>
    </View>
}


const styles = StyleSheet.create({
    szklanka_wody: {
        width: 200,
        height: 150,
    },
    drinks: {
        justifyContent: "center",
        alignItems: "center",
        padding: 10,
        width: "100%",
        height: "30%",
    }
})