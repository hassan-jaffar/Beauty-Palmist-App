import { Avatar, Button, Card, Title, Paragraph } from "react-native-paper";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  ImageBackground,
  Image,
  SafeAreaView,
  Dimensions
} from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function Choosesignuptype() {
  const navigation = useNavigation();

  const move = () => {
    navigation.navigate("BusinessSignup");
  };
  const moves = () => {
    navigation.navigate("ClientSignup");
  };
  var width = Dimensions.get("window").width;
  var height = Dimensions.get("window").height;
  return (
    <SafeAreaView style={{ height: height }}>
      <ImageBackground
        source={
          {uri: "https://static.wixstatic.com/media/11c705_7c51905d50334bd3b43b2565c50e8258~mv2.png/v1/fill/w_1016,h_505,al_c,q_90,enc_auto/11c705_7c51905d50334bd3b43b2565c50e8258~mv2.png"}
        }
        style={{ height: height, width: width }}
      >
        <View
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            height: height,
          }}
        >
          <Text style={{ textAlign: "center", color: "", fontSize: 30 }}>
            SIGN UP
          </Text>
          <Card
            style={{
              padding: 20,
              borderRadius: 20,
              width: 0.9*width,
              marginBottom: 30,
            }}
          >
            <Image
              source={
                {uri: "https://csspoint101.com/wp-content/uploads/2020/10/Data-Analyst.gif"}
              }
              style={{ width: width, height: 200 }}
            ></Image>
            <Button
              style={{
                marginBottom: 30,
                backgroundColor: "#FF69B4",
                marginTop: 20,
              }}
              mode="contained"
              onPress={() => moves()}
            >
              Client Signup
            </Button>
          </Card>
          <Card style={{ padding: 20, borderRadius: 20, width: 0.9 * width }}>
            <Image
              source={
                {uri: "https://s3.ap-south-1.amazonaws.com/gyanrays.com/assets/corporate1.gif"}
              }
              style={{ width: width, height: 200 }}
            ></Image>
            <Button
              style={{
                marginBottom: 30,
                backgroundColor: "#FF69B4",
                marginTop: 20,
              }}
              mode="contained"
              onPress={() => move()}
            >
              Business Signup
            </Button>
          </Card>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
}
