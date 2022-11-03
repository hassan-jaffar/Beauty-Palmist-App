import { Avatar, Button, Card, Appbar, Searchbar } from "react-native-paper";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Drawer,
  ImageBackground,
  SafeAreaView,
  Dimensions
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import * as React from "react";
import beautyService from "./Services/services/Servicesbeauty";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function ServiceList() {
  const [searchQuery, setSearchQuery] = React.useState("");
  const onChangeSearch = (query) => setSearchQuery(query);

  const navigation = useNavigation();
  const move = (val) => {
    navigation.navigate("ServiceDetailPage", { val: val });
  };
  const moves = (val) => {
    navigation.navigate("EditServiceform", { val: val });
  };
  const serviceformr = () => {
    navigation.navigate("Add Service Form");
  };

  const [subCat, setService] = React.useState([]);
  const itemsPerPage = 6;
  const [ori, setOri] = React.useState([]);
  const [loading, setloading] = React.useState(false);
  const [currentItems, setCurrentItems] = React.useState([]);
  const [pageCount, setPageCount] = React.useState(0);

  // Here we use item offsets; we could also use page offsets
  // following the API or data you're working with.
  const [itemOffset, setItemOffset] = React.useState(0);
  React.useEffect(() => {
    getcate();

    // byCategory
  }, []);
  const find = (value) => {
    setService(
      ori.filter((fil) => fil.name.toUpperCase().includes(value.toUpperCase()))
    );
    setSearchQuery(value);
  };
  const remove = (id) => {
    beautyService
      .remServices(id)
      .then((value) => {
        setOri(ori.filter((rem) => rem._id != id));
        setService(ori.filter((rem) => rem._id != id));
        alert("Delete Successfully");
      })
      .catch((e) => {
        alert("Cannot be deleted at that Time");
      });
  };
  const getcate = async () => {
    try {
      const user = await AsyncStorage.getItem("user");
      const data = JSON.parse(user);
      console.log(data);
      let result = await beautyService.ServiceUser(data.id);

      setService(result.userServices);
      setOri(result.userServices);
    } catch (e) {
      alert(e.error);
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
          backgroundColor: "#fff4f4",
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
              Manage Services
            </Text>
          </View>
        </ImageBackground>
        <Searchbar
          placeholder="Search Service"
          onChangeText={find}
          value={searchQuery}
        />
        <View style={{ alignSelf: "flex-end" }}>
          <Button
            mode="contained"
            style={{ backgroundColor: "#FF69B4", margin: 30 }}
            onPress={() => serviceformr()}
          >
            New Service
          </Button>
        </View>
        {subCat.map((ori, index) => (
          <Card
            style={{
              padding: 20,
              borderRadius: 2,
              width: 0.9*width,
              borderColor: "#6804ec",
              borderWidth: 2,
              marginBottom: 20,
            }}
          >
            <View
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Text
                style={{
                  fontSize: 24,
                  fontWeight: "bold",
                  fontStyle: "italic",
                  marginBottom: 20,
                }}
              >
                {ori?.name}
              </Text>

              <Button
                mode="outlined"
                style={{ marginTop: 20 }}
                onPress={() => move(ori)}
              >
                View Service
              </Button>
              <Button
                mode="outlined"
                style={{ marginTop: 20 }}
                onPress={() => moves(ori)}
              >
                Edit Service
              </Button>
              <Button
                mode="outlined"
                style={{ marginTop: 20 }}
                onPress={() => remove(ori._id)}
              >
                Delete Service
              </Button>
            </View>
          </Card>
        ))}
      </View>
    </SafeAreaView>
  );
}
