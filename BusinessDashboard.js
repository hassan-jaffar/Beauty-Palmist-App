import { Avatar, Button, Card, Checkbox, Paragraph } from "react-native-paper";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Drawer,
  SafeAreaView,
  Image,
  Dimensions,
  ScrollView,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import React from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function BusinessDashboard() {
  const navigation = useNavigation();
  const [detail, setdetails] = React.useState({ name: "Name" });

  const move = () => {
    navigation.navigate("Manage Services");
  };
  const moves = () => {
    navigation.navigate("Profile Settings");
  };
  const movess = () => {
    navigation.navigate("Booking Options");
  };
  React.useEffect(() => {
    fetch();
  }, []);
  const fetch = async () => {
    const user = await AsyncStorage.getItem("user");
    const users = JSON.stringify(user);
    setdetails(users);
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
          backgroundColor: "#ffe4e4",
        }}
      >
        <ScrollView>
          {/* <Text style={{ textAlign: "center", color: "", fontSize: 30 }}>
            Name:{detail.name}
          </Text> */}
          <Card
            style={{
              padding: 40,
              borderRadius: 20,
              width: 0.9 * width,
              marginBottom: 30,
              marginTop: 30,
            }}
          >
            <Image
              source={require("./assets/booking.gif")}
              style={{ width: width/1.4, height: 300 }}
            ></Image>
            <Text
              style={{
                fontWeight: "bold",
                fontSize: 24,
                marginBottom: 10,
              }}
            >
              Bookings
            </Text>
            <Text
              style={{
                fontWeight: "bold",
                fontSize: 16,
                marginBottom: 10,
              }}
            >
              View Booking Schedules and Requests
            </Text>
            <Button
              mode="contained"
              style={{ backgroundColor: "#FF69B4" }}
              onPress={() => movess()}
            >
              Manage
            </Button>
          </Card>
          <Card
            style={{
              padding: 40,
              borderRadius: 20,
              width: 0.9 * width,
              marginBottom: 30,
            }}
          >
            <View style={{ display: "flex", flexDirection: "column" }}>
              <Image
                source={require("./assets/service.gif")}
                style={{ width: width/1.4, height: 300 }}
              ></Image>
              <Text
                style={{
                  fontWeight: "bold",
                  fontSize: 24,
                  marginBottom: 10,
                }}
              >
                Services
              </Text>
              <Text
                style={{
                  fontWeight: "bold",
                  fontSize: 16,
                  marginBottom: 10,
                }}
              >
                View and Update your services
              </Text>
              <Button
                mode="contained"
                style={{ backgroundColor: "#FF69B4" }}
                onPress={() => move()}
              >
                Manage
              </Button>
            </View>
          </Card>
          <Card
            style={{
              padding: 40,
              borderRadius: 20,
              width: 0.9 * width,
              marginBottom: 70,
            }}
          >
            <View style={{ display: "flex", flexDirection: "column" }}>
              <Image
                source={require("./assets/settings.gif")}
                style={{ width: width/1.4, height: 300 }}
              ></Image>
              <Text
                style={{
                  fontWeight: "bold",
                  fontSize: 24,
                  marginBottom: 10,
                }}
              >
                Profile Settings
              </Text>
              <Text
                style={{
                  fontWeight: "bold",
                  fontSize: 16,
                  marginBottom: 10,
                }}
              >
                Keep your Profile Information Up to Date
              </Text>
              <Button
                mode="contained"
                style={{ backgroundColor: "#FF69B4" }}
                onPress={() => moves()}
              >
                Manage
              </Button>
            </View>
          </Card>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  Textfields: {
    borderRadius: 20,
    borderColor: "grey",
    padding: 10,
    marginBottom: 20,
  },
  AboutTextfield: {
    height: 200,
    borderRadius: 20,
    borderColor: "grey",
    padding: 10,
    marginBottom: 20,
  },
});
