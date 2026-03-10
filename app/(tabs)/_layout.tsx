import {Tabs} from "expo-router";


export default function TabLayout() {
    return (
        <Tabs screenOptions={{
            headerShown: false,
            tabBarStyle: {
                backgroundColor: "#eae9e9",
                borderTopWidth: 2,
                borderTopColor: "#000000"
            }}
        }>
            <Tabs.Screen name="MainPage" options={{title: "HOME"}}/>
            <Tabs.Screen name="DailyReport" options={{title: "DAILY REPORT"}}/>
        </Tabs>
    )
}

