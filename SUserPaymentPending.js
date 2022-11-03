import {
  Button,
  Card,
  List,
  Searchbar,
  Modal,
  Portal,
  Provider,
} from "react-native-paper";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  ImageBackground,
  SafeAreaView,
  Dimensions
} from "react-native";
import moment from "moment";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from "@react-navigation/native";
import * as ImagePicker from "expo-image-picker";
import * as React from "react";
import bookingServices from "./Services/services/booking";

export default function SUserPaymentPending() {
  const navigation = useNavigation();
  const [searchQuery, setSearchQuery] = React.useState("");
  const onChangeSearch = (query) => setSearchQuery(query);
  const [val, setval] = React.useState({});
  const [service, setServices] = React.useState([]);
  const [visible, setVisible] = React.useState(false);
  const [opens, setOpens] = React.useState(false);
  const [valuess, setValuess] = React.useState([]);
  const [image, setImage] = React.useState(null);
  const [images, setImages] = React.useState();
  const [pay, setpay] = React.useState();
  const [item, setItem] = React.useState([]);
  const showModal = () => setVisible(true);
  const hideModal = () => setVisible(false);
  const containerStyle = { backgroundColor: "white", padding: 20 };
  const updateBookings = async (id, value) => {
    await bookingServices.updatebooking(id, {
      status: value,
      canceledBy: "Owner",
    });

    alert(`Booking Booked`);
  };
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
    }
  };

  React.useEffect(() => {
    booking();
  }, [pay]);
  const booking = async () => {
    const user = await AsyncStorage.getItem("user");
    const userInfo = JSON.parse(user);
    bookingServices.getBooking(userInfo.id).then((val) => {
      console.log(val);

      setServices(val.Booking.filter((val) => val.status == 1));
      console.log(formatDate("May 11th 14"));
    });
  };

  function formatDate(date) {
    let main = date.replace("th", "");
    var d = new Date(main),
      month = "" + (d.getMonth() + 1),
      day = "" + d.getDate(),
      year = d.getFullYear();

    if (month.length < 2) month = "0" + month;
    if (day.length < 2) day = "0" + day;

    return [year, month, day].join("-");
  }
  const updateBooking = async (id) => {
    await bookingServices.updatebooking(id, {
      status: "3",
      canceledBy: "Client",
    });
    setServices(service.filter((val) => val._id != id));

    alert("Booking canceled");
  };
  const payment = async (id) => {
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
    const formData = new FormData();

    formData.append("payment", blob);

    const config = {
      headers: {
        "content-type": "multipart/form-data",
      },
    };
    await bookingServices
      .updateBookingPayment(formData, id, config)
      .then((val) => {
        alert("Payment done");
        setpay({ ...val });
      });
  };
  const move = () => {
    navigation.navigate("Business Dashboard");
  };
  const view = (val) => {
    setval(val);
    showModal();
  };
  var width = Dimensions.get("window").width;
  var height = Dimensions.get("window").height;
  return (
    <Provider>
      <SafeAreaView style={{}}>
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
              width: width,
              marginTop: 30,
              marginBottom: 30,
            }}
          >
            <List.Section>
              <List.Subheader>Payment Pending Bookings</List.Subheader>
              {service.map((val) => (
                <View>
                  <List.Item
                    left={() => (
                      <View>
                        <Text>{val?.ServiceId?.name}</Text>
                        <Text>{val.OwnerId?.name}</Text>
                        <Text style={{ fontSize: 12 }}>
                          {" "}
                          Date:{val.Date}{" "}
                        </Text>
                        <Text style={{ fontSize: 12 }}>
                          Time: {val.Time}
                        </Text>
                        <Text style={{ fontSize: 12 }}>
                          {" "}
                          Price {val.Price}
                        </Text>
                        <Text style={{ fontSize: 12 }}>
                          id: {val._id.substr(1, 5)}
                        </Text>
                      </View>
                    )}
                    right={() => (
                      <View>
                        <Button
                          mode="contained"
                          style={{
                            marginBottom: 5,
                            backgroundColor: "#FF69B4",
                          }}
                          onPress={() => view(val)}
                        >
                          View
                        </Button>
                        <Button
                          mode="contained"
                          style={{ backgroundColor: "#FF69B4" }}
                          onPress={() => updateBooking(val._id)}
                        >
                          Cancel
                        </Button>

                        <View>
                          <Button
                            style={{
                              marginTop: 20,
                              backgroundColor: "#FF69B4",
                            }}
                            mode="contained"
                            onPress={() => updateBookings(val._id, 4)}
                          >
                            Approve Payment
                          </Button>
                        </View>
                      </View>
                    )}
                  />
                </View>
              ))}
            </List.Section>

            <Portal>
              <Modal
                visible={visible}
                onDismiss={hideModal}
                contentContainerStyle={containerStyle}
              >
                <Text>Detail:</Text>
                <Text>name:{val.UserId?.name}</Text>
                <Text>email:{val.UserId?.email}</Text>
                <Text>Price:{val.Price}</Text>
                <Text>Building:{val.Building}</Text>
                <Text>Address:{val.Address}</Text>
                <Text>City:{val.City}</Text>
                <Text>Message:{val.Message}</Text>
              </Modal>
            </Portal>
          </Card>
        </View>
      </SafeAreaView>
    </Provider>
  );
}
