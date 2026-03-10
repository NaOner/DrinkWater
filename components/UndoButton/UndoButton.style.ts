import { StyleSheet } from "react-native";

const BACKGROUND_COLOR = '#dbe6f3'; // Ten sam kolor co tło ekranu aplikacji!

const styles = StyleSheet.create({
    pressableArea: {
        // Zapobiega ucinaniu cieni
        padding: 10,
    },
    darkShadow: {
        backgroundColor: BACKGROUND_COLOR,
        borderRadius: 50,
        // Cień dla iOS
        shadowColor: '#c1ccd8', // Ciemniejszy odcień tła
        shadowOffset: { width: 6, height: 6 },
        shadowOpacity: 1,
        shadowRadius: 10,
        // Cień dla Androida (niestety mniej precyzyjny przy neomorfizmie)
        elevation: 8,
    },
    lightShadow: {
        backgroundColor: BACKGROUND_COLOR,
        borderRadius: 50,
        // Cień dla iOS
        shadowColor: '#ffffff', // Biały / bardzo jasny odcień tła
        shadowOffset: { width: -6, height: -6 },
        shadowOpacity: 1,
        shadowRadius: 10,
    },
    buttonContent: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: BACKGROUND_COLOR,
        borderRadius: 50,
        paddingVertical: 14,
        paddingHorizontal: 32,
        gap: 8, // Działa w nowszych wersjach React Native
    },
    text: {
        fontFamily: 'System', // Zmień na swój font
        fontSize: 16,
        fontWeight: '700',
        color: '#2b4a6f',
        textTransform: 'uppercase',
        letterSpacing: 0.5,
        marginLeft: 8, // Fallback dla starszych RN bez wsparcia 'gap'
    },
    // Style aktywowane podczas dotyku (wciśnięcia)
    shadowHidden: {
        shadowOpacity: 0,
        elevation: 0,
    },
    buttonPressed: {
        // Delikatne przyciemnienie i przesunięcie, symulujące wciśnięcie do środka
        backgroundColor: '#d2deec',
        transform: [{ scale: 0.98 }],
    }
});

export default styles