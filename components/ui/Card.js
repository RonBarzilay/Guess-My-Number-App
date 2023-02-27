import { View, StyleSheet, useWindowDimensions } from "react-native";
import Colors from "../../constants/colors";

export default function Card({ children }) {
  const { width, height } = useWindowDimensions();
  const cardMarginHorizontal = height < 380 ? 0 : 36;
  const cardMarginTop = height < 380 ? 0 : 36;
  const cardPadding = height < 380 ? 0 : 16;

  return (
    <View
      style={[
        styles.card,
        {
          marginHorizontal: cardMarginHorizontal,
          marginTop: cardMarginTop,
          padding: cardPadding,
        },
      ]}
    >
      {children}
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    // Button loc = justifyContent
    justifyContent: "center",
    // Button width = alignItems
    alignItems: "center",
    // device edges / safe area
    // marginTop: deviceWidth < 380 ? 18 : 36,
    // marginHorizontal: 24,
    backgroundColor: Colors.primary800,
    borderRadius: 8,
    elevation: 4,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    shadowOpacity: 0.75,
  },
});
