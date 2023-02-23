import { Text, StyleSheet } from "react-native";

import Colors from "../../constants/colors";

export default function InstructionsText({ children, style }) {
  return <Text style={[styles.instructionsText, style]}>{children}</Text>;
}

const styles = StyleSheet.create({
  instructionsText: {
    fontFamily: "open-sans",
    color: Colors.accent500,
    fontSize: 20,
  },
});
