import { Avatar, Button, Card, Appbar, Searchbar } from "react-native-paper";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Drawer,
  ImageBackground,
  SafeAreaView,
  Dimensions
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import * as React from "react";
//import { ScrollView } from "react-native-web";

export default function Recommendations() {
  const [searchQuery, setSearchQuery] = React.useState("");
  const onChangeSearch = (query) => setSearchQuery(query);

  const navigation = useNavigation();
  const move = () => {
    navigation.navigate("ServiceDetailPage");
  };
  var width = Dimensions.get("window").width;
  var height = Dimensions.get("window").height;
  return (
    <SafeAreaView>
      <ScrollView>
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
              {uri: "https://static.wixstatic.com/media/11c705_d25335dd907d40e295d469d81fdcb2f3~mv2.jpg/v1/fill/w_980,h_206,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/11c705_d25335dd907d40e295d469d81fdcb2f3~mv2.jpg"}
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
                Palmist Recommendations
              </Text>
            </View>
          </ImageBackground>
          <Searchbar
            placeholder="Search"
            onChangeText={onChangeSearch}
            value={searchQuery}
            style={{ marginBottom: 20 }}
          />
          <Card
            style={{
              padding: 40,
              borderRadius: 2,
              width: 0.9 * width,
              borderColor: "#6804ec",
              borderWidth: 2,
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
              <Text
                style={{
                  fontSize: 24,
                  fontWeight: "bold",
                  fontStyle: "italic",
                  marginBottom: 20,
                }}
              >
                Hair Protein Treatment
              </Text>
              <Text style={{ fontSize: 20, marginBottom: 20 }}>
                / Aira's Aesthetics Services
              </Text>
              <Text style={{ fontSize: 20, marginBottom: 20 }}>
                the most powerful, non-invasive skin resurfacing treatments
                available today. It combines cleansing, exfoliation, extraction,
                hydration and antioxidant protection that removes........
              </Text>
              <Text
                style={{ fontSize: 18, marginBottom: 20, color: "red" }}
              >
                Suitable For: Dry Hair . Split Ends{" "}
              </Text>
              <Text
                style={{
                  color: "#ffa534",
                  fontWeight: "bold",
                  fontSize: 18,
                }}
              >
                Rating: 3.0
              </Text>
              <Text
                style={{ color: "grey", fontWeight: "bold", fontSize: 18}}
              >
                150 Product Rating
              </Text>
              <Button
                mode="outlined"
                style={{ marginTop: 20 }}
                onPress={() => move()}
              >
                View Service
              </Button>
            </View>
          </Card>
          <Card
            style={{
              padding: 40,
              borderRadius: 2,
              width: 0.9 * width,
              borderColor: "#6804ec",
              borderWidth: 2,
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
              <Text
                style={{
                  fontSize: 24,
                  fontWeight: "bold",
                  fontStyle: "italic",
                  marginBottom: 20,
                }}
              >
                Hair Protein Treatment
              </Text>
              <Text style={{ fontSize: 20, marginBottom: 20 }}>
                / Aira's Aesthetics Services
              </Text>
              <Text style={{ fontSize: 20, marginBottom: 20 }}>
                the most powerful, non-invasive skin resurfacing treatments
                available today. It combines cleansing, exfoliation, extraction,
                hydration and antioxidant protection that removes........
              </Text>
              <Text
                style={{ fontSize: 18, marginBottom: 20, color: "red" }}
              >
                Suitable For: Dry Hair . Split Ends{" "}
              </Text>
              <Text
                style={{
                  color: "#ffa534",
                  fontWeight: "bold",
                  fontSize: 18,
                }}
              >
                Rating: 3.0
              </Text>
              <Text
                style={{ color: "grey", fontWeight: "bold", fontSize: 18 }}
              >
                150 Product Rating
              </Text>
              <Button
                mode="outlined"
                style={{ marginTop: 20 }}
                onPress={() => move()}
              >
                View Service
              </Button>
            </View>
          </Card>
          <Card
            style={{
              padding: 40,
              borderRadius: 2,
              width: 0.9*width,
              borderColor: "#6804ec",
              borderWidth: 2,
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
              <Text
                style={{
                  fontSize: 24,
                  fontWeight: "bold",
                  fontStyle: "italic",
                  marginBottom: 20,
                }}
              >
                Hair Protein Treatment
              </Text>
              <Text style={{ fontSize: 20, marginBottom: 20 }}>
                / Aira's Aesthetics Services
              </Text>
              <Text style={{ fontSize: 20, marginBottom: 20 }}>
                the most powerful, non-invasive skin resurfacing treatments
                available today. It combines cleansing, exfoliation, extraction,
                hydration and antioxidant protection that removes........
              </Text>
              <Text
                style={{ fontSize: 18, marginBottom: 20, color: "red" }}
              >
                Suitable For: Dry Hair . Split Ends{" "}
              </Text>
              <Text
                style={{
                  color: "#ffa534",
                  fontWeight: "bold",
                  fontSize: 18,
                }}
              >
                Rating: 3.0
              </Text>
              <Text
                style={{ color: "grey", fontWeight: "bold", fontSize: 18 }}
              >
                150 Product Rating
              </Text>
              <Button
                mode="outlined"
                style={{ marginTop: 20 }}
                onPress={() => move()}
              >
                View Service
              </Button>
            </View>
          </Card>
          <Card
            style={{
              padding: 40,
              borderRadius: 2,
              width: 0.9*width,
              borderColor: "#6804ec",
              borderWidth: 2,
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
              <Text
                style={{
                  fontSize: 24,
                  fontWeight: "bold",
                  fontStyle: "italic",
                  marginBottom: 20,
                }}
              >
                Hair Protein Treatment
              </Text>
              <Text style={{ fontSize: 20, marginBottom: 20 }}>
                / Aira's Aesthetics Services
              </Text>
              <Text style={{ fontSize: 20, marginBottom: 20 }}>
                the most powerful, non-invasive skin resurfacing treatments
                available today. It combines cleansing, exfoliation, extraction,
                hydration and antioxidant protection that removes........
              </Text>
              <Text
                style={{ fontSize: 18, marginBottom: 20, color: "red" }}
              >
                Suitable For: Dry Hair . Split Ends
              </Text>
              <Text
                style={{
                  color: "#ffa534",
                  fontWeight: "bold",
                  fontSize: 18,
                }}
              >
                Rating: 3.0
              </Text>
              <Text
                style={{ color: "grey", fontWeight: "bold", fontSize: 18 }}
              >
                150 Product Rating
              </Text>
              <Button
                mode="outlined"
                style={{ marginTop: 20}}
                onPress={() => move()}
              >
                View Service
              </Button>
            </View>
          </Card>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
