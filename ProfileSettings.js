import { Avatar, Button, Card, Checkbox, Switch } from "react-native-paper";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Drawer,
  SafeAreaView,
  Dimensions
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import * as React from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import bussnessServices from "./Services/services/bussnessuser";

export default function ProfileSettings() {
  const navigation = useNavigation();
  const [isSwitchOn, setIsSwitchOn] = React.useState(false);
  const [name, setName] = React.useState();
  const [about, setAbout] = React.useState();
  const [bussnessstatus, setbussnessStatus] = React.useState();
  const [address, setAddress] = React.useState();
  const [profile, setProfile] = React.useState({});
  const [user, setUser] = React.useState({});
  const category = [
    "Beauty Service",
    "Skin Treatment",
    "Hair Treatment",
    "Salon Product",
    "Other",
  ];
  const paymentpercent = [
    "Full Payment",
    "50% Advance Payment",
    "25% Advance Payment",
    "Add custom payment%",
  ];
  const move = () => {
    navigation.navigate("BusinessLogin");
  };
  React.useEffect(() => {
    userData();
  }, []);
  const aC = () => {
    bussnessServices
      .updateUsers(profile._id, {
        address,
        bussnessname: name,

        accountNo: "no",

        bussnessstatus: bussnessstatus,

        about: about,
      })

      .then(async () => {
        const userInfos = await AsyncStorage.setItem(
          "userinfo",
          JSON.stringify({
            ...profile,
            address,
            bussnessname: name,
            accountNo,
            bussnessstatus,
            about,
          })
        );

        alert("Profile  updated");
      });
  };
  const userData = async () => {
    const userInfos = await AsyncStorage.getItem("userinfo");
    const user = await AsyncStorage.getItem("user");
    setProfile(JSON.parse(userInfos));
    const userInfo = JSON.parse(userInfos);
    setName(userInfo.bussnessname);
    setAbout(userInfo.about);
    setbussnessStatus(userInfo.bussnessstatus);
    setAddress(userInfo.address);
    setUser(JSON.parse(user));
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
        <Card
          style={{
            padding: 40,
            borderRadius: 20,
            width: 0.9*width,
            marginTop: 70,
            marginBottom: 70,
          }}
        >
          <Text
            style={{
              fontWeight: "bold",
              textAlign: "center",
              marginBottom: 20,
              fontSize: 24,
            }}
          >
            Profile Settings
          </Text>
          <TextInput
            placeholder="companyname"
            value={name}
            onChangeText={(text) => setName(text)}
            style={styles.Textfields}
          ></TextInput>
          <TextInput
            value={address}
            onChangeText={(text) => setAddress(text)}
            placeholder="Location/Address"
            style={styles.Textfields}
          ></TextInput>
          <TextInput
            placeholder="email"
            editable={false}
            value={user.email}
            style={styles.Textfields}
          ></TextInput>
          <TextInput
            readOnly
            value={profile?.categoryId?.name}
            editable={false}
            placeholder="Category Name"
            style={styles.Textfields}
          ></TextInput>
          <TextInput
            onChangeText={(text) => setbussnessStatus(text)}
            value={bussnessstatus}
            placeholder="status"
            style={styles.Textfields}
          ></TextInput>
          <TextInput
            value={user.name}
            placeholder="name"
            editable={false}
            style={styles.Textfields}
          ></TextInput>
          <TextInput
            value={about}
            placeholder="about"
            onChangeText={(text) => setAbout(text)}
            style={styles.AboutTextfield}
          ></TextInput>
          <View></View>

          <Button
            style={{ marginBottom: 20, backgroundColor: "#FF69B4" }}
            mode="contained"
            onPress={() => aC()}
          >
            Submit
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
