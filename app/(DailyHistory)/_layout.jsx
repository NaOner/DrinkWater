import {StatusBar, StyleSheet} from "react-native";
import {Stack, Tabs} from "expo-router";

export default function AllHistoryLayout() {
    return (
        <>
            <StatusBar value="auto"/>
            <Stack
                screenOptions={{ headerShown: false, animation: "none" }}
            />
        </>
    )
}
