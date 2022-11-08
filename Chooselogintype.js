import { Avatar, Button, Card, Title, Paragraph } from "react-native-paper";
import {
  SafeAreaView,
  Text,
  View,
  TextInput,
  ImageBackground,
  Image,
  Dimensions,
  ScrollView,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function Chooselogintype() {
  const navigation = useNavigation();

  const move = () => {
    navigation.navigate('Clientlogin')
  }
  const moves = () => {
    navigation.navigate('BusinessLogin')
  }
  var width = Dimensions.get("window").width;
  var height = Dimensions.get("window").height * 1.1;
  return (
    <SafeAreaView>
      <ScrollView>
        <ImageBackground
          source={{
            uri: "https://static.wixstatic.com/media/11c705_7c51905d50334bd3b43b2565c50e8258~mv2.png/v1/fill/w_1016,h_505,al_c,q_90,enc_auto/11c705_7c51905d50334bd3b43b2565c50e8258~mv2.png",
          }}
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
          
            <Card
              style={{
                padding: 20,
                borderRadius: 20,
                width: 0.9 * width,
                marginBottom: 30,
              }}
            >
              <Image
                source={{
                  uri: "https://csspoint101.com/wp-content/uploads/2020/10/team.gif",
                }}
                style={{ width: width*0.8, height: 200 }}
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
                Client Login
              </Button>
            </Card>
            <Card style={{ padding: 20, borderRadius: 20, width: 0.9 * width }}>
              <Image
                source={{
                  uri: "https://csspoint101.com/wp-content/uploads/2020/10/Data-Vis.gif",
                }}
                style={{ width: width*0.8, height: 200 }}
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
                Business Login
              </Button>
            </Card>
          </View>
        </ImageBackground>
      </ScrollView>
    </SafeAreaView>
  );
}
