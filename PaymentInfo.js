import {
  Avatar,
  Button,
  Card,
  Title,
  RadioButton,
  Divider,
} from "react-native-paper";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  ImageBackground,
  SafeAreaView,
  Dimensions
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import * as React from "react";

export default function PaymentInfo() {
  const navigation = useNavigation();
  const moves = () => {
    navigation.navigate("Confirmation Message");
  };
  const [value, setValue] = React.useState("CreditCard");
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
        <Card
          style={{
            padding: 40,
            borderRadius: 20,
            width: 0.9*width,
            marginTop: 20,
            marginBottom: 20,
          }}
        >
          <Text
            style={{
              fontWeight: "bold",
              textAlign: "center",
              marginBottom: 30,
              fontSize: 24,
            }}
          >
            Payment Information
          </Text>

          <Card
            style={{
              padding: 40,
              borderRadius: 20,
              width: width,
              backgroundColor: "#f8ecec",
              marginBottom: 20,
              marginTop: 20,
            }}
          >
            <TextInput
              placeholder="Card Number"
              style={styles.Textfields}
            ></TextInput>
            <TextInput
              placeholder="Card Holder Name"
              style={styles.Textfields}
            ></TextInput>
            <TextInput
              placeholder="Expiry Date"
              style={styles.Textfields}
            ></TextInput>
          </Card>
          <Card
            style={{
              padding: 40,
              borderRadius: 20,
              width: width,
              backgroundColor: "#f8ecec",
              marginBottom: 20,
            }}
          >
            <Text
              style={{
                fontSize: 22,
                fontWeight: "bold",
                marginBottom: 10,
              }}
            >
              Protein Treatment - Dr Fazeela Abbasi
            </Text>
            <Text
              style={{
                fontSize: 18,
                marginBottom: 5,
                marginTop: 5,
              }}
            >
              1 hr | PKR 7000
            </Text>
            <Divider />
            <Text style={{ fontSize: 18, marginBottom: 5 }}>
              5 April 2022, 11:30 PM
            </Text>
          </Card>
          <Button
            style={{ marginBottom: 30, backgroundColor: "#FF69B4" }}
            mode="contained"
            onPress={() => moves()}
          >
            Book it!
          </Button>
        </Card>
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
