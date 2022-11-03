import { Avatar, Button, Card, Title, RadioButton } from "react-native-paper";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  ImageBackground,
  SafeAreaView,
  Dimensions
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import * as React from "react";
import quizAnswer from "./Services/services/quizAnswer";
import quizs from "./Services/services/quiz";
import beautyService from "./Services/services/Servicesbeauty";
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function PalmistQuiz({ route }) {
  const [value, setValue] = React.useState("first");
  const val = route.params.val;
  const all=route.params;
  console.log(all);
  const [ans, setAns] = React.useState([]);

  const [quiz, setQuiz] = React.useState([]);
  const [loading, setloading] = React.useState(false);

  React.useEffect(() => {
  

    getcate();
     

    // byCategory
  }, []);
  const getcate = async () => {
    try {
       const user= JSON.parse(await AsyncStorage.getItem("user"));
      setloading(true);
      let result = await quizs.getQuiz(user?.role === "bussness" ?all.sub:val._id);

      setQuiz(result.quiz);
      setloading(false);
    } catch (e) {
      alert(e.error);
      setloading(false);
    }
  };
  const navigation = useNavigation();

  const move = async() => {
    const user= JSON.parse(await AsyncStorage.getItem("user"));
    const userinfo= JSON.parse(await AsyncStorage.getItem("userinfo"));
    if (user?.role === "bussness") {
        const formData = new FormData();

        formData.append("name", all.values.ServiceName);

        formData.append("categoryId", userinfo.categoryId?._id);
        formData.append("subCategoryId",  all.sub);
        formData.append("userid", user.id);
        formData.append("serviceCode",  all.values.ServiceCode);
        formData.append("detail", all.values.ServiceDescription);
        formData.append("Price", all.values.Price);
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
            xhr.open("GET", all.image, true);
            xhr.send(null);
          });
        formData.append("image",blob);
        formData.append("ServiceType",all.price);
        formData.append("BussnesId",userinfo._id);
        formData.append("address",userinfo.address);

        const config = {
          headers: {
            "content-type": "multipart/form-data",
          },
        };
        beautyService.addBussness(formData, config).then((val) => {
          quizAnswer
            .createAnswer({
              Answer: ans,
              ServiceId: val.userServices._id,

              SubCategoryId:  all.sub,
            })
            .then((value) => {
              alert("Service is added");
              navigation.navigate("Business Dashboard");
            });
        });
      } else {
    navigation.navigate("ServiceListings",{ans,check:true,val:route.params.val});
      }
  };
  const save = (name, value) => {
    if (ans.findIndex((val) => val.name === name) === -1) {
      setAns([...ans, { [name]: value, name: name, answer: value }]);
    } else {
      setAns(
        ans.map((valu) =>
          valu.name == name ? { ...valu, [name]: value, answer: value } : valu
        )
      );
    }
  };
  var width = Dimensions.get("window").width;
  var height = Dimensions.gete("window"),height;

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
        <ImageBackground
          source={
            {uri: "https://static.wixstatic.com/media/11c705_d25335dd907d40e295d469d81fdcb2f3~mv2.jpg/v1/fill/w_980,h_206,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/11c705_d25335dd907d40e295d469d81fdcb2f3~mv2.jpg"}
          }
          style={{
            width: width,
            height: 80,
            margin: 30,
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Text
              style={{
                fontSize: 24,
                fontWeight: "bold",
                backgroundColor: "white",
                padding: 10,
              }}
            >
              Palmist Quiz
            </Text>
          </View>
        </ImageBackground>
        <Card
          style={{
            padding: 40,
            borderRadius: 20,
            width: 0.9*width,
            marginBottom: 30,
          }}
        >
          {quiz.map((value, index) => (
            <View>
              <Text
                style={{
                  fontSize: 20,
                  fontWeight: "bold",
                  marginBottom: 12,
                }}
              >
                {value.Question}
              </Text>
              <RadioButton.Group
              value={ans.length<1?value.Answer1:ans.find((val)=>val.name==value.Question).answer }
              onValueChange={newValue => save(value.Question, newValue)}
                
              
                style={{ marginBottom: 20 }}
              >
                <View style={{ display: "flex", flexDirection: "row" }}>
                  <RadioButton
                    value={value.Answer1}
                
                  />
                  <Text style={{ fontSize: 20 }}> {value.Answer1}</Text>
                </View>
                <View style={{ display: "flex", flexDirection: "row" }}>
                  <RadioButton
                    value={value.Answer2}
                   
                  />
                  <Text style={{ fontSize: 20 }}> {value.Answer2}</Text>
                </View>
                <View style={{ display: "flex", flexDirection: "row" }}>
                  <RadioButton
                    value={value.Answer3}
                 
                  />
                  <Text style={{ fontSize: 20 }}> {value.Answer3}</Text>
                </View>
              </RadioButton.Group>
            </View>
          ))}

          <Button
            mode="contained"
            style={{ marginTop: 20, backgroundColor: "#FF69B4" }}
            onPress={() => move()}
          >
            {all.sub ? "Submit" : " View Recommendations"}
        
          </Button>
        </Card>
      </View>
    </SafeAreaView>
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
