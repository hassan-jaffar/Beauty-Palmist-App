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
import Category from "./Services/services/CategoryServices";
import React from "react";

export default function ServiceSelect() {
  const navigation = useNavigation();
  const [cat, setCat] = React.useState([]);
  const move = (val) => {
    navigation.navigate("ServiceCategory", { val: val });
  };
  React.useEffect(() => {
    getcate();
  }, []);
  const getcate = async () => {
    try {
      let result = await Category.getCategory();
      console.log(result.category);
      setCat(result.category);
    } catch (e) {
      error(e.error);
    }
  };
  var width = Dimensions.get("window").width;
  var height = Dimensions.get("window").height;
  return (
    <SafeAreaView>
      {cat.length > 0 && (
        <ImageBackground
          style={{ width: width, height: height }}
          source={
            {uri: "https://static.wixstatic.com/media/nsplsh_c7567a7e7bf34da784e174828d5c9298~mv2.jpg/v1/fill/w_1349,h_608,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/nsplsh_c7567a7e7bf34da784e174828d5c9298~mv2.jpg"}
          }
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
            <Text
              style={{
                fontWeight: "bold",
                textAlign: "center",
                marginBottom: 20,
                fontSize: 24,
                marginTop: 40,
              }}
            >
              Services
            </Text>
            <Card
              style={{
                padding: 40,
                borderRadius: 20,
                width: 0.9*width,
                marginBottom: 20,
              }}
            >
              <View
                style={{
                  borderColor: "#301934",
                  borderWidth: 2,
                  padding: 10,
                }}
              >
                <Image
                  source={
                    {uri: "https://static.wixstatic.com/media/11c705_2daa24ccb82842eba93a8b3228f78247~mv2.jpg/v1/crop/x_0,y_23,w_250,h_158/fill/w_219,h_221,al_c,lg_1,q_80,enc_auto/beauty-luxury-woman-face-hair-spa-logo-design-spa-decoration-yoga_151157-1033_edited_edite.jpg"}
                  }
                  style={{ width: width, height: 200 }}
                ></Image>
              </View>
              <View
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "center",
                }}
              >
                <Button
                  style={{
                    marginTop: -20,
                    width: 0.6*width,
                    borderColor: "#301934",
                    borderWidth: 2,
                    backgroundColor: "#FFFFFF",
                  }}
                  mode="outlined"
                  color="#301934"
                  onPress={() => move(cat[3])}
                >
                  {cat[3]?.name}
                </Button>
              </View>
            </Card>
            <Card
              style={{
                padding: 40,
                borderRadius: 20,
                width: 0.9*width,
                marginBottom: 20,
              }}
            >
              <View
                style={{
                  borderColor: "#301934",
                  borderWidth: 2,
                  padding: 10,
                }}
              >
                <Image
                  source={
                    {uri: "https://static.wixstatic.com/media/11c705_0aa9d7ac0170465c848cca578c83dd3e~mv2.jpg/v1/crop/x_0,y_7,w_163,h_123/fill/w_171,h_172,al_c,lg_1,q_80,enc_auto/il_340x270_edited_edited.jpg"}
                  }
                  style={{ width: width, height: 200 }}
                ></Image>
              </View>
              <View
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "center",
                }}
              >
                <Button
                  style={{
                    marginTop: -20,
                    width: 0.6*width,
                    borderColor: "#301934",
                    borderWidth: 2,
                    backgroundColor: "#FFFFFF",
                  }}
                  mode="outlined"
                  color="#301934"
                  onPress={() => move(cat[0])}
                >
                  {cat[0]?.name}
                </Button>
              </View>
            </Card>
            <Card
              style={{
                padding: 40,
                borderRadius: 20,
                width: 0.9*width,
                marginBottom: 20,
              }}
            >
              <View
                style={{
                  borderColor: "#301934",
                  borderWidth: 2,
                  padding: 10,
                }}
              >
                <Image
                  source={
                    {uri: "https://static.wixstatic.com/media/11c705_1548f1aefba247fc992468a89f4262fc~mv2.jpg/v1/crop/x_102,y_0,w_795,h_955/fill/w_250,h_252,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/healthy-life-woman-logo-template-vector-27254670_edited.jpg"}
                  }
                  style={{ width: width, height: 200 }}
                ></Image>
              </View>
              <View
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "center",
                }}
              >
                <Button
                  style={{
                    marginTop: -20,
                    width: 0.6*width,
                    borderColor: "#301934",
                    borderWidth: 2,
                    backgroundColor: "#FFFFFF",
                  }}
                  mode="outlined"
                  color="#301934"
                  onPress={() => move(cat[2])}
                >
                  {cat[2]?.name}
                </Button>
              </View>
            </Card>
            <Card
              style={{
                padding: 40,
                borderRadius: 20,
                width: 0.9*width,
                marginBottom: 20,
              }}
            >
              <View
                style={{
                  borderColor: "#301934",
                  borderWidth: 2,
                  padding: 10,
                }}
              >
                <Image
                  source={
                    {uri: "https://static.wixstatic.com/media/11c705_70a81883a825483abe3571260cdd51b6~mv2.jpg/v1/crop/x_0,y_14,w_500,h_471/fill/w_250,h_252,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/attachment_66970956.jpg"}
                  }
                  style={{ width: width, height: 200 }}
                ></Image>
              </View>
              <View
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "center",
                }}
              >
                <Button
                  style={{
                    marginTop: -20,
                    width: 0.6*width,
                    borderColor: "#301934",
                    borderWidth: 2,
                    backgroundColor: "#FFFFFF",
                  }}
                  mode="outlined"
                  color="#301934"
                  onPress={() => move(cat[1])}
                >
                  {cat[1]?.name}
                </Button>
              </View>
            </Card>
          </View>
        </ImageBackground>
      )}
    </SafeAreaView>
  );
}
