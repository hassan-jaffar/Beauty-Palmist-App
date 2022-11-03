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

export default function CProfile({ route }) {
  const navigation = useNavigation();

  const val = route.params.val;
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
            Profile
          </Text>
          <Text style={styles.Textfields}>Id:{val._id}</Text>

          <Text style={styles.Textfields}>
            Bussness Name:{val.BussnesId.bussnessname}
          </Text>
          <Text style={styles.Textfields}>Email:{val.userid.email}</Text>
          <Text style={styles.Textfields}>Phone:{val.userid.phoneNo}</Text>
          <Text style={styles.Textfields}>address:{val.BussnesId.address}</Text>
          <Text style={styles.Textfields}>
            bussnessstatus:{val.BussnesId.bussnessstatus}
          </Text>
          <Text style={styles.Textfields}>About:{val.BussnesId.about}</Text>
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
