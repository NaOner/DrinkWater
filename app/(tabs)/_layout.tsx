import { StyleSheet } from "react-native";
import { Tabs } from "expo-router";

export default function RootLayout() {
  return (
      <>
          <Tabs screenOptions={{
              headerShown: false,
              tabBarStyle: {
                  backgroundColor: "#eae9e9",
                  borderTopWidth: 2,
                  borderTopColor: "#000000"
              }}
          }>
              <Tabs.Screen name="dailyReport" options={{title: "Daily Report"}}/>
              <Tabs.Screen name="index" options={{tabBarIcon: () => null}}/>
          </Tabs>
      </>

  );
}