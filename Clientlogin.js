import {
  Avatar,
  Button,
  Card,
  Title,
  Paragraph,
} from "react-native-paper";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Dimensions,
  ImageBackground,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { ErrorMessage, Formik } from "formik";
import * as Yup from "yup";
import axios from "axios";

export default function Clientlogin() {
  const navigation = useNavigation();

  const move = () => {
    navigation.navigate("Home");
  };
  const handleFormSubmit = (values) => {
    console.log(values);

    axios
      .post("http://192.168.1.14:3000/api/users/login", {
        email: values.email,
        password: values.password,
      })
      .then(async (data) => {
        console.log(data);
        if (data.data.role != "bussness") {
          if (data.data.active != false) {
            navigation.navigate("Home");
            await AsyncStorage.setItem("Token", data.data.token);
            const user = JSON.stringify(data.data);
            await AsyncStorage.setItem("user", user);

            alert("Login successfully!");
          } else {
            alert("Please verify your email for login");
          }
        } else {
          alert(
            "You are not registered as a Client please login through Business Login"
          );
        }
      })
      .catch((e) => {
        alert(e.response.data.error);
      });
  };
  const moves = () => {
    navigation.navigate("Choosesignuptype");
  };
  var width = Dimensions.get("window").width;
  var height = Dimensions.get("window").height;
  return (
    <ImageBackground
      source={
        {uri: "https://static.wixstatic.com/media/nsplsh_37357850484551426d7641~mv2_d_4447_6670_s_4_2.jpg/v1/fill/w_1349,h_620,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/nsplsh_37357850484551426d7641~mv2_d_4447_6670_s_4_2.jpg"}
      }
      style={{ height: height, width: width }}
    >
      <View
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          height: height,
        }}
      >
        <Card style={{ padding: 40, borderRadius: 20, width: 0.9 * width }}>
          <Text
            style={{
              fontWeight: "bold",
              textAlign: "center",
              marginBottom: 20,
              fontSize: 24,
            }}
          >
            Client Login
          </Text>

          <Text
            style={{
              fontWeight: "bold",
              textAlign: "center",
              marginBottom: 20,
              fontSize: 20,
            }}
          >
            Login with email
          </Text>
          <Formik
            validationSchema={Yup.object().shape({
              email: Yup.string()
                .email("Invalid email address format")
                .required("Email is required"),
              password: Yup.string().required("Password is required"),
            })}
            onSubmit={handleFormSubmit}
            initialValues={{
              email: "vegestad@nproxi.com",
              password: "Minahil123@",
            }}
          >
            {({ handleChange, handleBlur, handleSubmit, values }) => (
              <View>
                <TextInput
                  placeholder="Email"
                  style={styles.Textfields}
                  onChangeText={handleChange("email")}
                  onBlur={handleBlur("email")}
                  value={values.email}
                ></TextInput>
                <ErrorMessage name="email" />
                <TextInput
                  placeholder="Password"
                  style={styles.Textfields}
                  value={values.password}
                  onChangeText={handleChange("password")}
                  onBlur={handleBlur("password")}
                ></TextInput>
                <ErrorMessage name="password" />

                <Button
                  style={{ marginBottom: 20, backgroundColor: "#FF69B4" }}
                  mode="contained"
                  onPress={() => handleSubmit()}
                >
                  Login
                </Button>
              </View>
            )}
          </Formik>
          <Text style={{ textAlign: "center", marginBottom: 10 }}>
            Don't have an account?
          </Text>
          <Button color="grey" onPress={() => moves()}>
            Sign Up
          </Button>
        </Card>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  socialbuttonfb: {
    borderRadius: 20,
    backgroundColor: "#4267B2",
    marginBottom: 20,
  },
  socialbuttontw: {
    borderRadius: 20,
    backgroundColor: "#1DA1F2",
    marginBottom: 20,
  },
  Textfields: {
    borderRadius: 20,
    borderColor: "grey",
    padding: 10,
    marginBottom: 20,
  },
});
