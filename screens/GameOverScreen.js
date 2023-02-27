import {
  View,
  Image,
  StyleSheet,
  Text,
  useWindowDimensions,
  ScrollView,
} from "react-native";
import PrimaryButton from "../components/ui/PrimaryButton";
import Title from "../components/ui/Title";
import Colors from "../constants/colors";

export default function GameOverScreen({ rounds, userNumber, onStartNewGame }) {
  const { width, height } = useWindowDimensions();
  const imageContWidth = width < 150 ? 100 : 140;
  const imageContHeight = width < 150 ? 100 : 140;
  const imageContRadius = width < 150 ? 100 : 140;
  const marginCont = height < 380 ? 30 : 75; // 380 is good height for iPhone
  const paddingRootCont = height < 380 ? 0 : 10;

  return (
    <ScrollView style={styles.screen}>
      <View style={[styles.rootContainer, { padding: paddingRootCont }]}>
        <Title style={styles.titleStyle}>Game is Over !</Title>
        <View
          style={[
            styles.imageContainer,
            {
              width: imageContWidth,
              height: imageContHeight,
              borderRadius: imageContRadius,
              margin: marginCont,
            },
          ]}
        >
          <Image
            style={styles.image}
            source={require("../assets/images/success.png")}
          />
        </View>
        <Text style={styles.summaryText}>
          Your phone needed <Text style={styles.highlight}>{rounds}</Text>{" "}
          rounds to guess the number{" "}
          <Text style={styles.highlight}>{userNumber}</Text>.
        </Text>
        <PrimaryButton onPress={onStartNewGame}>Start New Game</PrimaryButton>
      </View>
    </ScrollView>
  );
}
const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  rootContainer: {
    flex: 1,
    marginVertical: 0,
    // padding: 0,
    flexDirection: "column",
    // Verically - Cross axis
    alignContent: "center",
    // Horizontally - Main axis
    alignItems: "center",
  },
  imageContainer: {
    // width: deviceWidth < 150 ? 100 : 140,
    // height: deviceWidth < 150 ? 100 : 140,
    // borderRadius: deviceWidth < 150 ? 100 : 140,
    // margin: 45,
    borderWidth: 3,
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
    marginBottom: 10,
  },
  highlight: {
    fontFamily: "open-sans-bold",
    color: Colors.primary500,
  },
  titleStyle: {
    borderColor: "transparent",
  },
});
