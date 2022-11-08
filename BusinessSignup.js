import { Avatar, Button, Card, Checkbox, Paragraph } from "react-native-paper";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Drawer,
  SafeAreaView,
  ImageBackground,
  Dimensions,
  ScrollView,
  LogBox
} from "react-native";

import DropDownPicker from "react-native-dropdown-picker";
import { useNavigation } from "@react-navigation/native";
import * as ImagePicker from "expo-image-picker";
import React, { useEffect } from "react";
import * as Yup from "yup";
import { ErrorMessage, Formik } from "formik";
import Category from "./Services/services/CategoryServices";
import UerServices from "./Services/services/UserServices";
import bussnessServices from "./Services/services/bussnessuser";



export default function BusinessSignup() {
  const navigation = useNavigation();
  const [image, setImage] = React.useState(null);
  const [cat, setcat] = React.useState([]);
  const [open, setOpen] = React.useState(false);
  const [value, setValue] = React.useState([]);
  const [detail, setDetail] = React.useState();
  console.log(value);
  const [items, setItems] = React.useState([
    { label: "Registered", value: "Registered" },

    { label: "Small Business", value: "Small Business" },
  ]);

  const [opens, setOpens] = React.useState(false);
  const [valuess, setValuess] = React.useState([]);
  const [images, setImages] = React.useState();
  const [item, setItem] = React.useState([]);
  useEffect(() => {
    LogBox.ignoreLogs(['VirtualizedLists should never be nested']);
}, [])
  // const move = () => {
  //   navigation.navigate("BusinessLogin");
  // };
  const phoneRegex = RegExp(
    /^((\+92)?(0092)?(92)?(0)?)(3)([0-9]{2})((-?)|( ?))([0-9]{7})$/gm
  );

  const move = async (values) => {
    try {
      UerServices.Register(
        values.name,
        values.email,
        values.password,
        values.confirmPassword,
        values.phoneNo,
        "bussness",
        0
      )
        .then(async (data) => {
          const formData = new FormData();
          console.log(detail);
          formData.append("address", values.address);
          formData.append("categoryId", valuess);
          formData.append("userId", data.id);
          formData.append("bussnessstatus", value);
          formData.append("bussnessname", values.bussnessName);
          formData.append("accountLink", values.account);
          const blob = await new Promise((resolve, reject) => {
            const xhr = new XMLHttpRequest();
            xhr.onload = function () {
              resolve(xhr.response);
            };
            xhr.onerror = function (e) {
              console.log(e);
              reject(new TypeError("Network request failed"));
            };
            xhr.responseType = "blob";
            xhr.open("GET", image, true);
            xhr.send(null);
          });
          const cnics = await new Promise((resolve, reject) => {
            const xhr = new XMLHttpRequest();
            xhr.onload = function () {
              resolve(xhr.response);
            };
            xhr.onerror = function (e) {
              console.log(e);
              reject(new TypeError("Network request failed"));
            };
            xhr.responseType = "blob";
            xhr.open("GET", images, true);
            xhr.send(null);
          });
          images;
          console.log(blob);
          formData.append("cnic", blob);

          formData.append("cnic", cnics);

          formData.append("about", values.about);
          const config = {
            headers: {
              "content-type": "multipart/form-data",
            },
          };

          bussnessServices.addBussness(formData, config).then(() => {
            alert(
              "Your Account is Registered you can Login when your application is Approved"
            );

            navigation.navigate("BusinessLogin");
            UerServices.logout();
          });
        })
        .catch((e) => {
          alert(e.error);
        });
    } catch (e) {
      // navigate("/");
      alert(e.error);
    }
  };
  React.useEffect(() => {
    Category.getCategory().then((val) => {
      setcat(val.category);
      setItem(val.category.map((val) => ({ label: val.name, value: val._id })));
    });
  }, []);
  const [init, setInitial] = React.useState({
    name: "",
    email: "",
    password: "",
    phoneNo: "+92",
    confirmPassword: "",
    address: "",
    bussnessName: "",

    account: "",
    about: "",
  });
  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.cancelled) {
      setImage(result.uri);
      setDetail(result.uri.substring(result.uri.lastIndexOf(".") + 1));
    }
  };

  const pickImages = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.cancelled) {
      setImages(result.uri);
    }
  };
  var width = Dimensions.get("window").width;
  var height = Dimensions.get("window").height*1.1;
  return (
    <SafeAreaView>
      <ImageBackground
        source={{
          uri: "https://static.wixstatic.com/media/11062b_39eb5581b30f41099a77bce7636c50f6~mv2.jpg/v1/fill/w_1349,h_978,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/11062b_39eb5581b30f41099a77bce7636c50f6~mv2.jpg",
        }}
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
          <Card
            style={{
              padding: 40,
              borderRadius: 20,
              height: height/1.3,
              width: 0.9 * width,
              marginTop: 70,
              marginBottom: 70,
            }}
          >
          <ScrollView>
            <Text
              style={{
                fontWeight: "bold",
                textAlign: "center",
                marginBottom: 20,
                fontSize: 24,
              }}
            >
              Business Signup
            </Text>
            <Formik
              initialValues={init}
              onSubmit={move}
              enableReinitialize={true}
              validationSchema={Yup.object().shape({
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
                  .matches(
                    phoneRegex,
                    "Invalid Phone Number (Ex:+923xxxxxxxxx)"
                  )
                  .required("Phone Number is Required"),

                confirmPassword: Yup.string().test(
                  "Passwords-match",
                  "Passwords must match",
                  function (value) {
                    return this.parent.password === value;
                  }
                ),

                name: Yup.string()
                  .required()
                  .min(3, "Owner Name must be 3 character long")
                  .max(20, "Owner Name must be smaller then 20 characters"),
                about: Yup.string()
                  .min(25, "Please enter atleast 25 charcater")
                  .required("About is Required"),
                address: Yup.string().required("Address is Required"),

                bussnessName: Yup.string().required(
                  "Businesss Name is Required"
                ),
              })}
            >
              {({ handleChange, handleBlur, handleSubmit, values }) => (
                <View>
                  <TextInput
                    onChangeText={handleChange("bussnessName")}
                    onBlur={handleBlur("bussnessName")}
                    value={values.bussnessName}
                    placeholder="Company/Business Name"
                    style={styles.Textfields}
                  ></TextInput>
                  <ErrorMessage name="bussnessName" />
                  <TextInput
                    onChangeText={handleChange("address")}
                    onBlur={handleBlur("address")}
                    value={values.address}
                    placeholder="Location/Address"
                    style={styles.Textfields}
                  ></TextInput>
                  <ErrorMessage name="address" />
                  <TextInput
                    onChangeText={handleChange("email")}
                    onBlur={handleBlur("email")}
                    value={values.email}
                    placeholder="Email"
                    style={styles.Textfields}
                  ></TextInput>
                  <ErrorMessage name="email" />
                  <View style={{ marginBottom: 10 }}>
                    <DropDownPicker
                      open={opens}
                      value={valuess}
                      items={item}
                      setOpen={setOpens}
                      setValue={setValuess}
                      setItems={setItem}
                      theme="LIGHT"
                      mode="BADGE"
                      badgeDotColors={[
                        "#e76f51",
                        "#00b4d8",
                        "#e9c46a",
                        "#e76f51",
                        "#8ac926",
                        "#00b4d8",
                        "#e9c46a",
                      ]}
                    />
                    {/* <Text style={{ fontWeight: "bold", color: "#9c8cbc" }}>
                      Select Your Service Category
                    </Text>
                    <Checkbox.Item label="Salon" status="unchecked" />
                    <Checkbox.Item label="Aesthetics" status="unchecked" />
                    <Checkbox.Item label="Fitness" status="checked" />
                    <Checkbox.Item label="Photography" status="unchecked" /> */}
                  </View>

                  {/* <View style={{ marginBottom: "20px" }}>
                    <Text style={{ fontWeight: "bold", color: "#9c8cbc" }}>
                      What is your business status?
                    </Text>
                    <Checkbox.Item label="Registered" status="checked" />
                    <Checkbox.Item label="Small Business" status="unchecked" />
                    <Checkbox.Item label="Home based" status="unchecked" />
                  </View> */}
                  <View>
                    <Button
                      style={{
                        marginBottom: 20,
                        backgroundColor: "#FF69B4",
                      }}
                      mode="contained"
                      onPress={pickImage}
                    >
                      Pick an Cnic
                    </Button>
                    {/* {image && <Image source={{ uri: image }} style={{ width: 200, height: 200 }} />} */}
                  </View>
                  <View>
                    <Button
                      style={{
                        marginBottom: 20,
                        backgroundColor: "#FF69B4",
                      }}
                      mode="contained"
                      onPress={pickImages}
                    >
                      Pick an logo
                    </Button>
                    {/* {image && <Image source={{ uri: image }} style={{ width: 200, height: 200 }} />} */}
                  </View>
                  <View style={{ marginBottom: 10 }}>
                    <DropDownPicker
                      open={open}
                      value={value}
                      items={items}
                      setOpen={setOpen}
                      setValue={setValue}
                      setItems={setItems}
                      theme="LIGHT"
                      mode="BADGE"
                      badgeDotColors={[
                        "#e76f51",
                        "#00b4d8",
                        "#e9c46a",
                        "#e76f51",
                        "#8ac926",
                        "#00b4d8",
                        "#e9c46a",
                      ]}
                    />
                  </View>
                  <TextInput
                    onChangeText={handleChange("password")}
                    onBlur={handleBlur("password")}
                    value={values.password}
                    placeholder="Password"
                    style={styles.Textfields}
                  ></TextInput>
                  <ErrorMessage name="password" />
                  <TextInput
                    onChangeText={handleChange("confirmPassword")}
                    onBlur={handleBlur("confirmPassword")}
                    value={values.confirmPassword}
                    placeholder="Confirm Password"
                    style={styles.Textfields}
                  ></TextInput>
                  <ErrorMessage name="confirmPassword" />
                  <TextInput
                    onChangeText={handleChange("phoneNo")}
                    onBlur={handleBlur("phoneNo")}
                    value={values.phoneNo}
                    placeholder="Phone No"
                    style={styles.Textfields}
                  ></TextInput>
                  <ErrorMessage name="phoneNo" />
                  <TextInput
                    onChangeText={handleChange("name")}
                    onBlur={handleBlur("name")}
                    value={values.name}
                    placeholder="Name"
                    style={styles.Textfields}
                  ></TextInput>
                  <ErrorMessage name="name" />
                  <TextInput
                    onChangeText={handleChange("about")}
                    onBlur={handleBlur("about")}
                    value={values.about}
                    placeholder="Give description about your services, experience and achievements"
                    style={styles.AboutTextfield}
                  ></TextInput>
                  <ErrorMessage name="about" />

                  <Button
                    style={{ marginBottom: 20, backgroundColor: "#FF69B4" }}
                    mode="contained"
                    onPress={() => handleSubmit()}
                  >
                    Signup
                  </Button>
                </View>
              )}
            </Formik>
            </ScrollView>
          </Card>
        </View>
      </ImageBackground>
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
