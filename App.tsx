import {StatusBar} from "expo-status-bar";
import {SafeAreaView, ScrollView, StyleSheet} from "react-native";
import Home from "./src/screens/home";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      {/*<ScrollView>*/}
        <StatusBar style="auto"/>
        <Home/>
      {/*</ScrollView>*/}

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
