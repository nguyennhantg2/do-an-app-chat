import React from "react";
import { StyleSheet, View, Text, TextInput } from "react-native";

export default class InputTextField extends React.Component {
  render() {

    const {style, title, isSecure, onChangeText } = this.props

    return (
      <View style={style}>
        <Text style={styles.inputTitle}>{title}</Text>
        <TextInput
          secureTextEntry={isSecure}
          style={styles.input}
          onChangeText={(value) => onChangeText(value, title.toLowerCase())}
        />
        <View style={{ borderBottomColor: "#D8D8D8", borderBottomWidth: 1 }} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  inputTitle: {
    color: "#ABB4BD",
    fontSize: 14
  },
  input: {
    paddingVertical: 12,
    color: "#1D2029",
    fontSize: 14,
  }
});