import { useState } from "react";
import { TextInput, View, StyleSheet, Alert } from "react-native";
import Card from "../components/ui/Card";
import InstructionsText from "../components/ui/InstructionsText";
import PrimaryButton from "../components/ui/PrimaryButton";
import Title from "../components/ui/Title";

import Colors from "../constants/colors";

// React Component
function StartGameScreen({ onPickNumber }) {
  const [enteredNumber, setEnteredNumber] = useState("");

  function numberInputHandler(enteredText) {
    setEnteredNumber(enteredText);
  }

  function resetInputHandler() {
    setEnteredNumber("");
  }

  function confirmInputHandler() {
    // chosenNumber == enteredNumber an int
    const chosenNumber = parseInt(enteredNumber);

    // is not a number = isNaN
    if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) {
      Alert.alert("Invalid number", "Only numbers between 1-99 are allowed", [
        { text: "Okay", style: "destructive", onPress: resetInputHandler },
      ]);
      return;
    }
    onPickNumber(enteredNumber);
  }

  return (
    <View style={styles.titleContainer}>
      <Title style={styles.titleStyle}>Guess My Number</Title>
      <Card>
        <InstructionsText>Enter a Number</InstructionsText>
        {/* value from text input is always a string */}
        <TextInput
          style={styles.numberInput}
          maxLength={2}
          keyboardType="number-pad"
          autoCapitalize="none"
          autoCorrect={false}
          value={enteredNumber}
          onChangeText={numberInputHandler}
        />
        <View style={styles.buttonsContainer}>
          <View style={styles.buttonContainer}>
            <PrimaryButton onPress={resetInputHandler}>Reset</PrimaryButton>
          </View>
          <View style={styles.buttonContainer}>
            <PrimaryButton onPress={confirmInputHandler}>Confirm</PrimaryButton>
          </View>
        </View>
      </Card>
    </View>
  );
}

export default StartGameScreen;

const styles = StyleSheet.create({
  numberInput: {
    height: 50,
    width: 50,
    fontSize: 32,
    fontWeight: "bold",
    textAlign: "center",
    color: Colors.accent500,
    // Divider = borderBottomWidth + borderBottomColor
    borderBottomWidth: 2,
    borderBottomColor: Colors.accent500,
    paddingVertical: 8,
  },
  buttonsContainer: {
    flexDirection: "row",
    paddingTop: 20,
  },
  buttonContainer: {
    flex: 1,
  },
  titleContainer: {
    flex: 1,
    marginTop: 100,
    alignItems: "center",
  },
  titleStyle: {
    borderColor: "transparent",
  },
});
