import { StyleSheet } from "react-native";

// Ten kolor to dół Twojego gradientu z poprzedniego kroku
const BUTTON_BG = "white";

const styles = StyleSheet.create({
    // 1. Zewnętrzny kontener: rzuca ciemny cień w prawy dół
    darkShadow: {
        backgroundColor: BUTTON_BG,
        borderRadius: 50,
        shadowColor: "#b8ceda", // Ciemniejszy odcień tła
        shadowOffset: { width: 5, height: 5 },
        shadowOpacity: 1,
        shadowRadius: 8,
        elevation: 6, // Prosty cień dla Androida
    },

    // 2. Wewnętrzny kontener: rzuca jasny cień w lewą górę
    lightShadow: {
        backgroundColor: BUTTON_BG,
        borderRadius: 50,
        shadowColor: "#ffffff", // Czysta biel
        shadowOffset: { width: -5, height: -5 },
        shadowOpacity: 0.5,
        shadowRadius: 8,
    },

    // 3. Właściwy kształt i zawartość przycisku
    buttonContent: {
        backgroundColor: BUTTON_BG,
        borderRadius: 50,
        paddingVertical: 14,
        paddingHorizontal: 36,
        alignItems: "center",
        justifyContent: "center",
    },

    text: {
        fontSize: 16,
        fontWeight: "bold",
        color: "black",
        textTransform: "uppercase",
        letterSpacing: 1,
    },
});

export default styles;
