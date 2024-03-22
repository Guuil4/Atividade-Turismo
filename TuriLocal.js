import { View, Text } from "react-native";

export default function TouristComponent({ text, styles }) {
  return (
    <View>
      <Text style={styles}>{text}</Text>
    </View>
  );
}
