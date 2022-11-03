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
//import { Rating, AirbnbRating } from "react-native-ratings";
import { useNavigation } from "@react-navigation/native";
import * as React from "react";
import moment from "moment";
import AsyncStorage from "@react-native-async-storage/async-storage";
import bookingServices from "./Services/services/booking";

export default function UserHistory() {
  const navigation = useNavigation();
  const get = (vals) => {
    console.log(review.some((val) => val.ServiceId == vals));
    return review.some((val) => val.BookId == vals);
  };
  const [searchQuery, setSearchQuery] = React.useState("");
  const [visible, setVisible] = React.useState(false);
  const [val, setval] = React.useState({});
  const showModal = () => setVisible(true);
  const hideModal = () => setVisible(false);
  const showModal2 = () => setVisible2(true);
  const [visible2, setVisible2] = React.useState(false);
  const hideModal2 = () => setVisible2(false);
  const [comment, setComment] = React.useState("");
  const [rating, setRating] = React.useState(0);
  const containerStyle = { backgroundColor: "white", padding: 20 };
  const onChangeSearch = (query) => setSearchQuery(query);

  const [service, setServices] = React.useState([]);

  const [review, setReview] = React.useState([]);

  React.useEffect(() => {
    booking();
  }, []);

  const booking = async () => {
    const user = await AsyncStorage.getItem("user");
    const userInfo = JSON.parse(user);
    bookingServices.getBooking(userInfo.id).then((val) => {
      console.log(val);
      setServices(
        val.Booking.filter(
          (val) =>
            val.status == 4 &&
            moment(formatDate(val.Date))
              .startOf("day")
              .fromNow()
              .includes("ago")
        )
      );
      console.log(formatDate("May 11th 14"));
    });
  };
  const ratingpress = async () => {
    const user = await AsyncStorage.getItem("user");
    const userInfo = JSON.parse(user);
    bookingServices
      .createReview({
        comment: comment,
        rating: rating,

        ServiceId: val.ServiceId._id,
        BookId: val._id,
        UserId: userInfo._id,
      })
      .then((val) => {
        alert("Feedback added");
        hideModal2();
      });
  };
  React.useEffect(() => {
    if (service.length > 0) {
      console.log(service);
      bookingServices.getReviews().then((val) => {
        setReview(val.Reviews);
      });
    }
  }, [service]);
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
  const ratingCompleted = (rating) => {
    console.log("Rating is: " + rating);
    setRating(rating);
  };

  const move = () => {
    navigation.navigate("Business Dashboard");
  };
  const view = (val) => {
    setval(val);
    showModal();
  };
  const view2 = (val) => {
    setval(val);
    showModal2();
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
              width: 0.9*width,
              marginTop: 30,
              marginBottom: 30,
            }}
          >
            <List.Section>
              <List.Subheader>History Bookings</List.Subheader>
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
                        {!get(val?._id) && (
                          <Button
                            mode="contained"
                            style={{
                              marginBottom: 5,
                              backgroundColor: "#FF69B4",
                            }}
                            onPress={() => view2(val)}
                          >
                            Feedback
                          </Button>
                        )}
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

            <Portal>
              <Modal
                visible={visible2}
                onDismiss={hideModal2}
                contentContainerStyle={containerStyle}
              >
                <Rating
                  type="heart"
                  ratingCount={5}
                  imageSize={60}
                  showRating
                  onFinishRating={ratingCompleted}
                />
                <TextInput
                  value={comment}
                  placeholder="comment"
                  onChangeText={(text) => setComment(text)}
                  style={styles.AboutTextfield}
                ></TextInput>
                <Button
                  mode="contained"
                  style={{
                    marginBottom: "5px",
                    backgroundColor: "#FF69B4",
                  }}
                  onPress={() => ratingpress(val)}
                >
                  Submit
                </Button>
              </Modal>
            </Portal>
          </Card>
        </View>
      </SafeAreaView>
    </Provider>
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
  AboutTextfield: {
    height: 200,
    borderRadius: 20,
    borderColor: "grey",
    padding: 10,
    marginBottom: 20,
  },
  Textfields: {
    borderRadius: 20,
    borderColor: "grey",
    padding: 10,
    marginBottom: 20,
  },
});
