import { View, Text, Image } from "react-native";
import { styles } from "../styles/stylesheets";

export default function Img({ img }) {
  return <Image style={styles.img} source={img} />;
}
