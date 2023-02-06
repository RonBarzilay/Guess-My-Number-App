import { View, Text, StyleSheet } from "react-native";

function GameScreen() {
  return (
    <View style={styles.container}>
      <Text>Opponent's Guess</Text>
      <View>
        <Text>Higer or lower?</Text>+ -
      </View>
      <View>results</View>
    </View>
  );
}

export default GameScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 12,
  },
});
