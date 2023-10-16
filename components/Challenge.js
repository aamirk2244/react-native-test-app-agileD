import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

export default function Challenge() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>hellow world aamir </Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "purple",
    alignItems: "center",
    justifyContent: "center",
  },

  text: {
    color: "#ffff",
  },
});
