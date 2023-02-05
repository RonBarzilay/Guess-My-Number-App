import { View, Text, Pressable, StyleSheet } from "react-native";

function PrimaryButton({ children }) {
  function buttonPressHandler() {
    console.log("aaa");
  }

  return (
    <Pressable onPress={p} android_ripple={{ color: "#640233" }}>
      <View style={styles.buttonContainer}>
        <Text style={styles.buttonTexts}>{children}</Text>
      </View>
    </Pressable>
  );
}

export default PrimaryButton;

const styles = StyleSheet.create({
  buttonContainer: {
    backgroundColor: "#72063c",
    borderRadius: 28,
    paddingVertical: 8,
    paddingHorizontal: 16,
    margin: 4,
    elevation: 2,
  },
  buttonText: {
    color: "white",
    textAlign: "center",
  },
});
