import { Avatar, Button, Card, Checkbox, Divider } from "react-native-paper";
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
import React from "react";
import { ErrorMessage, Formik } from "formik";
import beautyService from "./Services/services/Servicesbeauty";
import bussnessServices from "./Services/services/bussnessuser";
import AsyncStorage from "@react-native-async-storage/async-storage";
import bookingServices from "./Services/services/booking";

export default function AddCalenderMethodDetails({ route }) {
  const navigation = useNavigation();
  const [user, setUser] = React.useState();

  const val = route.params;
  const move = () => {
    navigation.navigate("Payment Information");
  };
  React.useEffect(() => {
    savedata();
  }, []);
  const [init, setInit] = React.useState({
    name: "",
    email: "",
    phoneno: "",
    Message: "",
    state: "",
    city: "",
    building: "",
    address: "",
  });
  const savedata = async () => {
    const user = await AsyncStorage.getItem("user");
    const userInfo = JSON.parse(user);
    console.log(userInfo);
    setInit({
      ...init,
      name: userInfo.name,
      email: userInfo.email,
      phoneno: userInfo.phoneNo,
    });
  };

  const handleFormSubmit = async (values) => {
    const user = await AsyncStorage.getItem("user");
    const userInfo = JSON.parse(user);
    bookingServices
      .addBooking({
        NumberClients: 1,
        Price: val.val.Price,
        Address: values.address,

        Building: values.building,
        City: values.city,
        State: values.state,
        Message: values.message,
        Date: val.date,
        Time: val.timer,

        ServiceId: val.val._id,
        UserId: userInfo.id,
        OwnerId: val.val.userid._id,
      })
      .then((val) => {
        // bussnessServices.createextra({...extra,address:values.address}).then(() => {
        //   Swal.fire("Booking Request has been sent").then((val) => {
        //     navigation("/MyBooking");
        //   });
        alert("Booking Request has been sent");

        // });
      });
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
            Fill out your details
          </Text>
          <Formik
            initialValues={init}
            onSubmit={handleFormSubmit}
            enableReinitialize={true}
          >
            {({ handleChange, handleBlur, handleSubmit, values }) => (
              <View>
                <TextInput
                  placeholder="Name"
                  style={styles.Textfields}
                  value={values.name}
                  onChangeText={handleChange("name")}
                  onBlur={handleBlur("name")}
                />
                <TextInput
                  placeholder="Contact Number"
                  style={styles.Textfields}
                  value={values.phoneno}
                  onChangeText={handleChange("phoneno")}
                  onBlur={handleBlur("phoneno")}
                />
                <TextInput
                  placeholder="Email"
                  style={styles.Textfields}
                  value={values.email}
                  onChangeText={handleChange("email")}
                  onBlur={handleBlur("email")}
                />
                {/* <TextInput placeholder='Number Of Clients' style={styles.Textfields}  keyboardType='numeric'    onChangeText={handleChange("password")}
              onBlur={handleBlur("password")}/> */}
                <TextInput
                  placeholder="Address"
                  style={styles.Textfields}
                  onChangeText={handleChange("address")}
                  onBlur={handleBlur("address")}
                />

                <TextInput
                  placeholder="Building/Floor"
                  style={styles.Textfields}
                  onChangeText={handleChange("building")}
                  onBlur={handleBlur("building")}
                />
                <TextInput
                  placeholder="City"
                  style={styles.Textfields}
                  onChangeText={handleChange("city")}
                  onBlur={handleBlur("city")}
                />
                <TextInput
                  placeholder="State"
                  style={styles.Textfields}
                  onChangeText={handleChange("state")}
                  onBlur={handleBlur("state")}
                />
                <TextInput
                  placeholder="Add a message"
                  style={styles.AboutTextfield}
                  onChangeText={handleChange("Message")}
                  onBlur={handleBlur("Message")}
                />

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
                    Booking Summary
                  </Text>
                  <Divider />
                  <Text
                    style={{
                      fontSize: 18,
                      marginBottom: 5,
                      marginTop: 5,
                    }}
                  >
                    {val.val.name}
                  </Text>
                  <Text style={{ fontSize: 18, marginBottom: 5 }}>
                    {val.date}, {val.time}
                  </Text>

                  <Text style={{ fontSize: 18, marginBottom: 5 }}>
                    1 hr
                  </Text>
                  <Text
                    style={{
                      fontSize: 18,
                      fontWeight: "bold",
                      marginBottom: 5,
                    }}
                  >
                    Payment Details
                  </Text>
                  <View
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      justifyContent: "space-between",
                    }}
                  >
                    <Text style={{ fontSize: 18, marginBottom: 5 }}>
                      Total
                    </Text>
                    <Text style={{ fontSize: 18, marginBottom: 5 }}>
                      Rs {val.val.Price}
                    </Text>
                  </View>
                </Card>

                <Button
                  style={{ marginBottom: 20, backgroundColor: "#FF69B4" }}
                  mode="contained"
                  onPress={() => handleSubmit()}
                >
                  Pay Now
                </Button>
              </View>
            )}
          </Formik>{" "}
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
