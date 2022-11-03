import { Avatar, Button, Card, Title, Paragraph } from "react-native-paper";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  ImageBackground,
  Dimensions
} from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function CalenderMethodConfirmation() {
  const navigation = useNavigation();

  const movess = () => {
    navigation.navigate("Cancelled Bookings");
  };
  var width = Dimensions.get("window").width;
  var height = Dimensions.get("window").height;
  return (
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
      <Card style={{ padding: 40, borderRadius: 20, width: 0.9*width }}>
        <Text
          style={{
            fontWeight: "bold",
            textAlign: "center",
            marginBottom: 30,
            fontSize: 24,
          }}
        >
          Great! You're Booked
        </Text>
        <Text
          style={{
            textAlign: "center",
            marginBottom: 30,
            fontSize: 16,
          }}
        >
          Confirmation Email is on its way
        </Text>
        <Button
          style={{ marginBottom: 30, backgroundColor: "#FF69B4" }}
          mode="contained"
          onPress={() => movess()}
        >
          Go to Bookings
        </Button>
      </Card>
    </View>
  );
}
