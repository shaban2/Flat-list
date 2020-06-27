import React from "react";
import { StyleSheet, View } from "react-native";
import FindApi from "./screens/Find";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
  },
});

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <FindApi />
      </View>
    );
  }
}
