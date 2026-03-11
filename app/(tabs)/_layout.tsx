import {Tabs} from "expo-router";


export default function TabLayout() {
    return (
        <Tabs screenOptions={{
            headerShown: false,
            tabBarStyle: {
                backgroundColor: "white",
                borderRadius: 200,
            },
            tabBarActiveTintColor: "black",
            tabBarInactiveTintColor: "grey",
        }
        }>
            <Tabs.Screen name="MainPage" options={{title: "HOME"}}/>
            <Tabs.Screen name="DailyReport" options={{title: "DAILY REPORT"}}/>
        </Tabs>
    )
}

