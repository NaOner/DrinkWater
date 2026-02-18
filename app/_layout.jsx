import {StatusBar, StyleSheet} from "react-native";
import { Tabs } from "expo-router";

export default function RootLayout() {
  return (
      <Tabs>
        <StatusBar value="auto"/>
  </Tabs>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#1CB0F6"
  }

})
