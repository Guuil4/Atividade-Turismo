import { StatusBar } from "expo-status-bar";
import { Text, View } from "react-native";
import TouristComponent from "./src/components/TuriLocal";
import { styles } from "./src/styles/stylesheets";
import Img from "./src/components/ImgComponent";

export default function App() {
  return (
    <View style={styles.container}>
      <TouristComponent styles={styles.tourist} text="Bayside Marketplace" />
      <TouristComponent
        styles={styles.adress}
        text="Localização: Downtown Miami, FL"
      />
      <TouristComponent
        styles={styles.desc}
        text="Criado em 1987, o Bayside Marketplace é um famoso ponto turístico em Miami. Oferece uma variedade de lojas, restaurantes e entretenimento à beira-mar, tornando-se um destino popular para moradores e turistas."
      />

      <Img img={require("./src/assets/images/Miami.jpg")} />
    </View>
  );
}
