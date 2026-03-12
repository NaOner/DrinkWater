# DrinkWater

Mobilna aplikacja do śledzenia dziennego spożycia wody i innych napojów, zbudowana w React Native z użyciem Expo.

## Funkcje

- **Śledzenie nawodnienia** — rejestruj wypite napoje (woda, herbata, kawa) wraz z objętością i godziną
- **Licznik dzienny** — wizualny podgląd aktualnego spożycia względem dziennego limitu (2500 ml)
- **Wybór napoju** — możliwość wyboru rodzaju napoju przed dodaniem wpisu
- **Cofanie** — przycisk undo do usunięcia ostatnio dodanego wpisu
- **Dzienny raport** — osobny ekran z historią wszystkich wpisów z danego dnia
- **Persystencja danych** — dane zapisywane lokalnie na urządzeniu przez AsyncStorage

## Ekrany

- **Main** — główny ekran z licznikiem, wyborem napoju i przyciskiem dodawania
- **Daily Report** — historia dziennych wpisów z ikoną napoju, objętością i godziną

## Technologie

- [React Native](https://reactnative.dev/)
- [Expo](https://expo.dev/)
- [expo-linear-gradient](https://docs.expo.dev/versions/latest/sdk/linear-gradient/)
- [expo-router](https://expo.github.io/router/)
- [@react-native-async-storage/async-storage](https://react-native-async-storage.github.io/async-storage/)
- TypeScript

## Uruchomienie

```bash
npm install
npx expo start
```
