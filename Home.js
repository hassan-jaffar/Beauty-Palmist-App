import { Avatar, Button, Card, Appbar, Searchbar } from "react-native-paper";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Drawer,
  ImageBackground,
  SafeAreaView,
  Image,
  Dimensions
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import * as React from "react";

export default function Home() {
  const navigation = useNavigation();

  const move = () => {
    navigation.navigate("Choose Service");
  };
  const moves = () => {
    navigation.navigate("QuizCategory");
  };
  const movess = () => {
    navigation.navigate("Your Bookings");
  };
  const mov = () => {
    navigation.navigate("Trending");
  };
  var width = Dimensions.get("window").width;
  var height = Dimensions.get("window").height;
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
            {uri: "https://static.wixstatic.com/media/nsplsh_ec163b8588f6459ebbe1d10fb1ca9641~mv2.jpg/v1/fill/w_1349,h_560,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/nsplsh_ec163b8588f6459ebbe1d10fb1ca9641~mv2.jpg"}
          }
          style={{ width: width, height: height }}
        >
          <Text
            style={{
              fontSize: 44,
              fontWeight: "bold",
              marginTop: 30,
              marginLeft: 20,
              textAlign: "left",
              color: "#FF69B4",
            }}
          >
            Explore,
          </Text>
          <Text
            style={{
              fontSize: 44,
              fontWeight: "bold",
              marginTop: -10,
              marginLeft: 20,
              textAlign: "left",
            }}
          >
            Beauty Palmist
          </Text>
          <View style={{ marginTop: 20, padding: 30 }}>
            <Card
              style={{
                padding: 40,
                borderRadius: 20,
                width: width,
                marginBottom: 30,
              }}
            >
              <Image
                source={{uri: require("./assets/service.gif")}}
                style={{ width: width, height: 300 }}
              ></Image>
              <Button
                mode="contained"
                style={{ backgroundColor: "#FF69B4" }}
                onPress={() => {
                  move();
                }}
              >
                Services
              </Button>
            </Card>
            <Card
              style={{
                padding: 40,
                borderRadius: 20,
                width: width,
                marginBottom: 30,
              }}
            >
              <Image
                source={{uri: require("./assets/quiz.gif")}}
                style={{ width: width, height: 300 }}
              ></Image>
              <Button
                mode="contained"
                textColor="black"
                style={{ backgroundColor: "#FF69B4" }}
                onPress={() => {
                  moves();
                }}
              >
                Palmist Quiz
              </Button>
            </Card>
            <Card
              style={{ padding: 40, borderRadius: 20, width: width }}
            >
              <Image
                source={{uri: require("./assets/booking.gif")}}
                style={{ width: width, height: 300 }}
              ></Image>
              <Button
                mode="contained"
                textColor="black"
                style={{ backgroundColor: "#FF69B4" }}
                onPress={() => {
                  movess();
                }}
              >
                Your Bookings
              </Button>
            </Card>
            <Card
              style={{
                padding: 40,
                borderRadius: 20,
                width: width,
                marginBottom: 30,
              }}
            >
              <Image
                source={{uri: require("./assets/trending.gif")}}
                style={{ width: width, height: 300 }}
              ></Image>
              <Button
                mode="contained"
                style={{ backgroundColor: "#FF69B4" }}
                onPress={() => {
                  mov();
                }}
              >
                Trending
              </Button>
            </Card>
          </View>
        </ImageBackground>
      </View>
    </SafeAreaView>
  );
}
