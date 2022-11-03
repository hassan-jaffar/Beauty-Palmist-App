import { Avatar, Button, Card, Appbar, Paragraph } from "react-native-paper";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Drawer,
  ImageBackground,
  Image,
  SafeAreaView,
  Dimensions
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import Category from "./Services/services/CategoryServices";
import React from "react";
import SubCategory from "./Services/services/subCategorybyCategory";

export default function ServiceCategory({ route }) {
  console.log(route.params.val, 2);
  console.log(333);
  const navigation = useNavigation();
  const move = (val) => {
    navigation.navigate("ServiceListings", { val: val });
  };
  const [subCat, setSubCat] = React.useState([]);
  const [loading, setloading] = React.useState(false);
  React.useEffect(() => {
    getcate();

    // byCategory
  }, [route.params.val._id]);
  const getcate = async () => {
    try {
      setloading(true);
      let result = await SubCategory.getSubCategoryByCategory(
        route.params.val._id
      );

      setSubCat(result.subcategory);
      setloading(false);
    } catch (e) {
      error(e.error);
    }
  };
  var width = Dimensions.get("window").width;
  var height = Dimesions.get("window").height;
  return (
    <SafeAreaView>
      <View
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          height: height,
          backgroundColor: "#fff4f4",
        }}
      >
        <ImageBackground
          source={
            {uri: "https://static.wixstatic.com/media/11c705_d25335dd907d40e295d469d81fdcb2f3~mv2.jpg/v1/fill/w_980,h_206,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/11c705_d25335dd907d40e295d469d81fdcb2f3~mv2.https://static.wixstatic.com/media/cf2555312b624ba3899a966093f39c62.jpg/v1/fill/w_1349,h_608,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/cf2555312b624ba3899a966093f39c62.jpg"}
          }
          style={{
            width: width,
            height: 80,
            margin: 30,
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Text
              style={{
                fontSize: 24,
                fontWeight: "bold",
                backgroundColor: "white",
                padding: 10,
              }}
            >
              Selected Category Services
            </Text>
          </View>
        </ImageBackground>
        {subCat.length > 0 ? (
          subCat.map((val) => (
            <Card
              style={{
                padding: 40,
                borderRadius: 2,
                width: 0.9*width,
                borderColor: "#6804ec",
                borderWidth: 8,
                marginBottom: 20,
              }}
            >
              <View
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Image
                  source={{uri: `http://localhost:3000/${val.image}`}}
                  style={{ width: width, height: 200 }}
                ></Image>
                <Text
                  style={{
                    fontSize: 24,
                    fontWeight: "bold",
                    marginBottom: 20,
                    marginTop: 20,
                  }}
                >
                  {val.name}
                </Text>
                <Text
                  style={{
                    fontSize: 20,
                    marginBottom: 20,
                    fontStyle: "italic",
                  }}
                >
                  {val.detail}
                </Text>
                <Button
                  mode="outlined"
                  onPress={() => move(val)}
                  style={{ borderRadius: 20, width: 0.75 * width, borderWidth: 3 }}
                >
                  View
                </Button>
              </View>
            </Card>
          ))
        ) : (
          <Text>Loading</Text>
        )}
      </View>
    </SafeAreaView>
  );
}
