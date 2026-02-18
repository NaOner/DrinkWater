import {StyleSheet, TextInput, View} from "react-native";

import Spacer from "../components/Spacer"
import ThemedText from  "../components/ThemedText"
import ThemedButton from "../components/ThemedButton";

import Drip from "../assets/images/Drip.png"
import {Image} from "expo-image";



export default function Index() {

    const dailyRequirement = "2500"

    const water = "0000"

    return (
          <View style={styles.container}>

              <Image source={Drip} style={{width: 200, height: 200}}/>

              <Spacer height={100}/>
              <ThemedButton style={{borderRadius:200}}>Dodaj</ThemedButton>

              <Spacer/>

          </View>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: "#DCF2F5"
    },
    input: {
        fontSize: 20,
        color: '#004D40',
        fontWeight: 'bold',
        textAlign: "center",
        borderRadius: 20,
        borderColor: "#1CB0F6",
        borderWidth: 2,
        width: 300,
        height: 50,
    },
})
