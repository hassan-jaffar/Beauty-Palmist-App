import { Button, Card, Appbar, ProgressBar } from "react-native-paper";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Image,
  Linking,
  Dimensions
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import * as React from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import bookingServices from "./Services/services/booking";
import bussnessServices from "./Services/services/bussnessuser";
("");

export default function ServiceDetailPage({ route }) {
  const navigation = useNavigation();
  const [user, setUser] = React.useState({});
  const [review, setReview] = React.useState([]);
  const [mode, setmode] = React.useState({});
  const val = route.params.val;
  const move = () => {
    navigation.navigate("Calender Method", { val, val });
  };
  React.useEffect(() => {
    fetch();
  }, []);
  const fetch = async () => {
    const user = JSON.parse(await AsyncStorage.getItem("user"));
    setUser(user);
  };
  React.useEffect(() => {
    bookingServices.getReview(val._id).then((val) => {
      setReview(val.Reviews);
    });
  }, []);
  React.useEffect(() => {
    bussnessServices.viewMode(val?.userid._id).then((value) => {
      console.log(value);
      setmode(value.mode);
    });
  }, []);
  const next = () => {
    Linking.openURL(
      mode.WhatsApp
        ? "http://api.whatsapp.com/send?phone=" + mode.WhatsApp
        : "https://" + mode.Website
    );
  };
  const nexts = () => {
    navigation.navigate("CProfile", { val: val });
  };

  const average = () => {
    return (
      review.reduce((acc, cuurent) => acc + cuurent.rating, 0) / review.length
    );
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
        <Image source={{uri: `http://192.168.1.14:3000/${val.image}`}} />
        <Text
          style={{ fontSize: 28, fontWeight: "bold", marginBottom: 10 }}
        >
          {val?.name}
        </Text>
        <Text
          style={{ fontSize: 20, fontWeight: "bold", marginBottom: 10 }}
        >
          {val?.BussnesId.bussnessname}
        </Text>
        <Text style={{ textAlign: "justify", marginBottom: 10 }}>
          {val?.detail}
        </Text>
        {user.role != "bussness" && (
          <View>
            <Button icon={"star"} color="#ffa534">
              {average() ? average() : 0} Average Rating
            </Button>
            <Text style={{ textAlign: "center", marginBottom: 20 }}>
              (Based on {review.length} Reviews)
            </Text>
            {((!mode?.ManualBased && !mode?.LinkBased) ||
              mode?.ManualBased) && (
              <Button
                style={{ marginBottom: 20, backgroundColor: "#FF69B4" }}
                mode="contained"
                onPress={() => move(val)}
              >
                Book Now (Manual)!
              </Button>
            )}
            {mode?.LinkBased && (
              <Button
                onPress={() => next()}
                style={{ marginBottom: 20, backgroundColor: "#FF69B4" }}
                mode="contained"
              >
                Book Now (Website or WhatsApp)!
              </Button>
            )}
            <Button
              onPress={() => nexts()}
              style={{ marginBottom: 20, backgroundColor: "#FF69B4" }}
              mode="contained"
            >
              View Profile
            </Button>
          </View>
        )}
      </Card>
    </View>
  );
}
