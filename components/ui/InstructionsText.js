import { Text, StyleSheet } from "react-native";

import Colors from "../../constants/colors";

export default function InstructionsText({ children, style }) {
  return <Text style={[styles.instructionsText, style]}>{children}</Text>;
}

const styles = StyleSheet.create({
  instructionsText: {
    color: Colors.accent500,
    fontSize: 20,
  },
});
