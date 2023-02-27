import {
  View,
  Text,
  StyleSheet,
  useWindowDimensions,
  Platform,
} from "react-native";

function Title({ children, style }) {
  const { width, height } = useWindowDimensions();
  const margin = width < 380 ? 24 : 0;

  return (
    <View style={styles.container}>
      <Text style={[styles.title, { margin: margin }, style]}>{children}</Text>
    </View>
  );
}

export default Title;

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
  },
  title: {
    fontSize: 24,
    fontFamily: "open-sans-bold",
    color: "white",
    textAlign: "center",
    borderRadius: 8,
    alignItems: "center",
    width: 300,
    padding: 15,
    // borderWidth: Platform.select({ ios: 0, android: 2, macos: 5, web: 3 }),
    // Or ,
    borderWidth: 2,
    borderColor: "white",
  },
});
