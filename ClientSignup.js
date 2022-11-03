import { Avatar, Button, Card, Title, Paragraph } from "react-native-paper";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Drawer,
  ImageBackground,
  Dimensions
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { ErrorMessage, Formik } from "formik";
import * as Yup from "yup";
import axios from "axios";
import UerServices from "./Services/services/UserServices";
export default function ClientSignup() {
  const navigation = useNavigation();
  const move = () => {
    navigation.navigate("ClientLogin");
  };

  const handleSubmit = async () => {
    try {
      const data = await UerServices.Register(
        values.name,
        values.email,
        values.password,
        values.confirmPassword,
        values.phoneNo
      ).then(() => {
        navigation.navigate("ClientLogin");
      });
    } catch (e) {
      alert(e.error);
    }
  };
  const phoneRegex = RegExp(/^((\+92)?)(3)([0-9]{2})((-?)|( ?))([0-9]{7})$/gm);
  var width = Dimensions.get("window").width;
  var height = Dimensions.get("window").height;
    return (
    <ImageBackground
      source={
        {uri: "https://static.wixstatic.com/media/11062b_39eb5581b30f41099a77bce7636c50f6~mv2.jpg/v1/fill/w_1349,h_622,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/11062b_39eb5581b30f41099a77bce7636c50f6~mv2.jpg"}
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
        <Card style={{ padding: 40, borderRadius: 20, width: 0.9*width }}>
          <Text
            style={{
              fontWeight: "bold",
              textAlign: "center",
              marginBottom: 20,
              fontSize: 24,
            }}
          >
            Client Signup
          </Text>
          <Text
            style={{
              fontWeight: "bold",
              textAlign: "start",
              marginBottom: 20,
              fontSize: 20,
            }}
          >
            Create an Account
          </Text>
          <Formik
            initialValues={{
              name: "",
              email: "",
              password: "",
              phoneNo: "+92",
              confirmPassword: "",
            }}
            validationSchema={Yup.object().shape({
              name: Yup.string()
                .required("Name is Required")
                .min(3, "Name must be 3 characters long")
                .max(20, "Name must me smaller than 20 characters"),
              email: Yup.string()
                .email("Invalid email address format")
                .required("Email is required"),
              password: Yup.string()

                .required("Please Enter your Password")
                .matches(
                  /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
                  "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character"
                ),
              phoneNo: Yup.string()
                .matches(phoneRegex, "Invalid Phone Number (Ex:+923xxxxxxxxx)")
                .required("Phone Number is required"),
              confirmPassword: Yup.string().test(
                "Passwords-Match",
                "Passwords must match",
                function (value) {
                  return this.parent.password === value;
                }
              ),
            })}
            onSubmit={handleSubmit}
          >
            {({ handleChange, handleBlur, handleSubmit, values }) => (
              <View>
                <TextInput
                  placeholder="Username"
                  style={styles.Textfields}
                ></TextInput>
                <TextInput
                  placeholder="Email"
                  style={styles.Textfields}
                ></TextInput>
                <TextInput
                  placeholder="Password"
                  style={styles.Textfields}
                ></TextInput>
                <TextInput
                  placeholder="Confirm Password"
                  style={styles.Textfields}
                ></TextInput>
                <Button
                  style={{ marginBottom: 20, backgroundColor: "#FF69B4" }}
                  mode="contained"
                  onPress={() => handleSubmit()}
                >
                  Signup
                </Button>
                <Button
                  style={{ marginBottom: 20, backgroundColor: "#FF69B4" }}
                  mode="contained"
                >
                  Cancel
                </Button>
              </View>
            )}
          </Formik>
        </Card>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  Textfields: {
    borderRadius: 20,
    borderColor: "grey",
    padding: 10,
    marginBottom: 20,
  },
});
