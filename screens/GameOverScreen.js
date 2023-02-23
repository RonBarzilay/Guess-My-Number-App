import { View, Image, StyleSheet, Text, Dimensions } from "react-native";
import PrimaryButton from "../components/ui/PrimaryButton";
import Title from "../components/ui/Title";
import Colors from "../constants/colors";

export default function GameOverScreen({ rounds, userNumber, onStartNewGame }) {
  return (
    <View style={styles.rootContainer}>
      <Title style={styles.titleStyle}>Game is Over !</Title>
      <View style={styles.imageContainer}>
        <Image
          style={styles.image}
          source={require("../assets/images/success.png")}
        />
      </View>
      <Text style={styles.summaryText}>
        Your phone needed <Text style={styles.highlight}>{rounds}</Text> rounds
        to guess the number <Text style={styles.highlight}>{userNumber}</Text>.
      </Text>
      <PrimaryButton onPress={onStartNewGame}>Start New Game</PrimaryButton>
    </View>
  );
}

const deviceWidth = Dimensions.get("window").width;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    marginVertical: 30,
    padding: 24,
    flexDirection: "column",
    // Verically - Cross axis
    alignContent: "center",
    // Horizontally - Main axis
    alignItems: "center",
  },
  imageContainer: {
    width: deviceWidth < 380 ? 100 : 200,
    height: deviceWidth < 380 ? 100 : 200,
    borderRadius: deviceWidth < 380 ? 100 : 200,
    borderWidth: 3,
    margin: 36,
    borderColor: Colors.primary800,
    overflow: "hidden",
  },
  image: {
    width: "100%",
    height: "100%",
    textAlign: "center",
  },
  summaryText: {
    fontSize: 24,
    fontFamily: "open-sans",
    textAlign: "center",
    marginBottom: 24,
  },
  highlight: {
    fontFamily: "open-sans-bold",
    color: Colors.primary500,
  },
  titleStyle: {
    borderColor: "transparent",
  },
});
