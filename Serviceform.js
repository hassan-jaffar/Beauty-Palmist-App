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
import AsyncStorage from "@react-native-async-storage/async-storage";
import DropDownPicker from "react-native-dropdown-picker";
import * as ImagePicker from "expo-image-picker";
import { ErrorMessage, Formik } from "formik";
import * as Yup from "yup";
import * as React from "react";
import SubCategory from "./Services/services/subCategorybyCategory";

export default function Serviceform() {
  const navigation = useNavigation();
  const [isSwitchOn, setIsSwitchOn] = React.useState(false);
  const [open, setOpen] = React.useState(false);
  const [value, setValue] = React.useState([]);
  const [detail, setDetail] = React.useState();
  const [image, setImage] = React.useState(null);
  const [cat, setCat] = React.useState([]);
  const [opens, setOpens] = React.useState(false);
  const [valuess, setValuess] = React.useState([]);
  const [item, setItem] = React.useState([]);
  const [initial, setInitial] = React.useState({
    ServiceName: "",
    ServiceCategory: "",
    ServiceCode: "",
    ServiceDescription: "",
    Price: "",
    address: "",
    flexRadioDefault: "",
  });
  React.useEffect(() => {
    if (true) {
      fetching();
    }
  }, []);
  const fetching = async () => {
    const userinfo = JSON.parse(await AsyncStorage.getItem("userinfo"));
    SubCategory.getSubCategoryByCategory(userinfo.categoryId?._id).then(
      (val) => {
        setCat(val.subcategory);
        setItem(
          val.subcategory.map((val) => ({ label: val.name, value: val._id }))
        );
        setInitial({
          ...initial,
          ServiceCode: Math.floor(
            Math.random() * 1000 + 10 + Math.random() * 100 + 1
          ),
        });
      }
    );
  };
  const [items, setItems] = React.useState([
    { label: "Luxury", value: "Luxury" },

    { label: "Affordable", value: "Affordable" },
    { label: "LowCost", value: "LowCost" },
  ]);

  const move = () => {
    navigation.navigate("BusinessLogin");
  };
  const onToggleSwitch = () => setIsSwitchOn(!isSwitchOn);
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

  const handleFormSubmit = (values) => {
    try {
      if (true) {
        navigation.navigate("PalmistQuiz", {
          values: values,
          image: image,
          sub: valuess,
          price: value,
        });
      }
      // navigate("/");
    } catch (e) {
      error(e.error);
    }
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
            ADD SERVICE
          </Text>
          <Formik
            enableReinitialize={true}
            initialValues={initial}
            validationSchema={Yup.object().shape({
              ServiceName: Yup.string().required("ServiceName is Required"),

              ServiceCode: Yup.string().required("Service Code is required"),
              ServiceDescription: Yup.string().required(
                "Service Description is required"
              ),
              Price: Yup.number()
                .min(1, "Price must be greater then 0")

                .required("Please enter a valid number"),
            })}
            onSubmit={handleFormSubmit}
          >
            {({ handleChange, handleBlur, handleSubmit, values }) => (
              <View>
                <TextInput
                  placeholder="Service Name"
                  style={styles.Textfields}
                  onChangeText={handleChange("ServiceName")}
                  onBlur={handleBlur("ServiceName")}
                  value={values.ServiceName}
                ></TextInput>
                <View style={{ marginBottom: 100 }}>
                  <Text style={{ fontWeight: "bold", color: "#9c8cbc" }}>
                    Select your Category
                  </Text>
                  <DropDownPicker
                    open={opens}
                    value={valuess}
                    items={item}
                    setOpen={setOpens}
                    setValue={setValuess}
                    setItems={setItem}
                    theme="DARK"
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
                <View style={{ marginBottom: 150 }}>
                  <Text style={{ fontWeight: "bold", color: "#9c8cbc" }}>
                    Select your Service Type in terms of Price Range
                  </Text>
                  <DropDownPicker
                    open={open}
                    value={value}
                    items={items}
                    setOpen={setOpen}
                    setValue={setValue}
                    setItems={setItems}
                    theme="DARK"
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
                  placeholder="Service Code"
                  style={styles.Textfields}
                  onChangeText={handleChange("ServiceCode")}
                  onBlur={handleBlur("ServiceCode")}
                  value={values.ServiceCode}
                ></TextInput>
                <TextInput
                  placeholder="Price (PKR)"
                  style={styles.Textfields}
                  onChangeText={handleChange("Price")}
                  onBlur={handleBlur("Price")}
                  value={values.Price}
                ></TextInput>

                <View>
                  <Button
                    style={{
                      marginBottom: 20,
                      backgroundColor: "#FF69B4",
                    }}
                    mode="contained"
                    onPress={pickImage}
                  >
                    Pick an ServiceImage
                  </Button>

                  {/* {image && <Image source={{ uri: image }} style={{ width: 200, height: 200 }} />} */}
                </View>

                <TextInput
                  placeholder="Enter your service description"
                  style={styles.AboutTextfield}
                  onChangeText={handleChange("ServiceDescription")}
                  onBlur={handleBlur("ServiceDescription")}
                  value={values.ServiceDescription}
                ></TextInput>
                <Button
                  style={{ marginBottom: 20, backgroundColor: "#FF69B4" }}
                  mode="contained"
                  onPress={() => handleSubmit()}
                >
                  Submit
                </Button>
              </View>
            )}
          </Formik>
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
