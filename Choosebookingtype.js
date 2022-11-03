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

export default function Choosebookingtype() {
  const navigation = useNavigation();

  const move = () => {
    navigation.navigate("Upcoming Bookings");
  };
  const moves = () => {
    navigation.navigate("History");
  };
  const movess = () => {
    navigation.navigate("Cancelled Bookings");
  };
  const movesss = () => {
    navigation.navigate("SUserPaymentPending");
  };
  const movessss = () => {
    navigation.navigate("SUserRequestPending");
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
          Booking Schedule
        </Text>
        <Button
          style={{ marginBottom: 30, backgroundColor: "#FF69B4" }}
          mode="contained"
          onPress={() => move()}
        >
          Upcoming Bookings
        </Button>
        <Button
          style={{ marginBottom: 30, backgroundColor: "#FF69B4" }}
          mode="contained"
          onPress={() => moves()}
        >
          History
        </Button>
        <Button
          style={{ marginBottom: 30, backgroundColor: "#FF69B4" }}
          mode="contained"
          onPress={() => movesss()}
        >
          Payment Pending
        </Button>
        <Button
          style={{ marginBottom: 30, backgroundColor: "#FF69B4" }}
          mode="contained"
          onPress={() => movessss()}
        >
          Request Pending
        </Button>
        <Button
          style={{ marginBottom: 30, backgroundColor: "#FF69B4" }}
          mode="contained"
          onPress={() => moves()}
        >
          History
        </Button>

        <Button
          style={{ marginBottom: 30, backgroundColor: "#FF69B4" }}
          mode="contained"
          onPress={() => movess()}
        >
          Cancelled Bookings
        </Button>
      </Card>
    </View>
  );
}
