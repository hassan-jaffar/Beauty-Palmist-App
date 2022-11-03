import { Avatar, Button, Card, Title, Divider } from "react-native-paper";
import { StyleSheet, Text, View, TextInput, Dimensions } from "react-native";
import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import DropDownPicker from "react-native-dropdown-picker";
//import { SafeAreaView } from "react-native-web";

import DatePicker from "sassy-datepicker";
import moment from "moment";

export default function CalenderMethod({ route }) {
  var val = route.params.val;
  const navigation = useNavigation();
  const [date, setDate] = useState(new Date());
  const [open, setOpen] = useState(false);
  const [value, setdats] = useState(new Date());
  const [values, setValue] = useState();
  const [timer, changeTime] = useState("No Select");
  const [book, setBook] = React.useState([]);

  const [time, setTime] = React.useState([
    { label: "10:00 am", value: "10:00 am" },
    { label: "11:00 am", value: "11:00 am" },
    { label: "12:00 pm", value: "12:00 pm" },
    { label: "1:00 pm", value: "1:00 pm" },
    { label: "2:00 pm", value: "2:00 pm" },
    { label: "3:00 pm", value: "3:00 pm" },
    { label: "4:00 pm", value: "4:00 pm" },
    { label: "5:00 pm", value: "5:00 pm" },
    { label: "6:00 pm", value: "6:00 pm" },

    { label: "7:00 pm", value: "7:00 pm" },
    { label: "8:00 pm", value: "8:00 pm" },
    { label: "9:00 pm", value: "9:00 pm" },
    { label: "10:00 pm", value: "10:00 pm" },
    { label: "11:00 pm", value: "11:00 am" },
    { label: "12:00 am", value: "12:00 am" },
    { label: "1:00 am", value: "1:00 am" },
    { label: "2:00 am", value: "2:00 am" },
    { label: "3:00 am", value: "3:00 am" },
    { label: "4:00 am", value: "4:00 am" },
    { label: "5:00 am", value: "5:00 am" },
    { label: "6:00 am", value: "6:00 am" },
    { label: "7:00 am", value: "7:00 am" },
    { label: "8:00 am", value: "8:00 am" },
    { label: "9:00 am", value: "9:00 am" },
  ]);
  const [oriTime, setOriTime] = React.useState([
    "10:00 am",
    "11:00 am",
    "12:00 pm",
    "1:00 pm",
    "2:00 pm",
    "3:00 pm",
    "4:00 pm",
    "5:00 pm",
    "6:00 pm",
    "7:00 pm",
  ]);
  const [ori, setOri] = React.useState([]);
  const setdates = (e) => {
    setBook(
      ori
        .filter(
          (val) =>
            val.Date.toString() == moment(e).format("Do MMM YYYY").toString() &&
            val.status == 4
        )
        .map((val) => val.Time)
    );
    setdats(e);
  };
  console.log(book);
  const saveTime = (t) => {
    changeTime(t);
  };
  // React.useEffect(() => {
  //   setTime(oriTime.filter((val) => !book.includes(val)));
  // }, [values]);
  React.useEffect(() => {
    // bookingServices.serviceBookings("1").then((val) => {
    //   setBook(val.Booking);
    //   setOri(val.Booking);
    // });
  }, []);
  const move = () => {
    navigation.navigate("Add details", {
      val: val,
      date: moment(value).format("Do MMM YYYY"),
      values,
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
            marginTop: 30,
            marginBottom: 30,
          }}
        >
          <Text
            style={{
              fontWeight: "bold",
              textAlign: "center",
              marginBottom: 30,
              fontSize: 24,
            }}
          ></Text>
          <Text
            style={{
              marginBottom: 10,
              fontSize: 18,
              fontWeight: "bold",
            }}
          >
            Checkout our availability and book the date and time that works for
            you
          </Text>
          <Text style={{ marginBottom: 10, fontSize: 18 }}>
            Select available date and time
          </Text>
          <Divider />
          <DatePicker
            onChange={setdates}
            selected={value}
            minDate={new Date(Date.now() - 86400000)}
          />

          {/* {time.length > 0 &&
                    time.map((val, index) => (
                
                       <Button mode='contained' style={{ backgroundColor: '#FF69B4', marginBottom: '20px' }}   onPress={() => saveTime(val)}>     {val}</Button>
                     
                  
                 
                    ))} */}
          <View style={{ marginBottom: 200 }}>
            <Text style={{ fontWeight: "bold", color: "#9c8cbc" }}>
              Select your Service Time
            </Text>
            <DropDownPicker
              open={open}
              value={values}
              items={time}
              setOpen={setOpen}
              setValue={setValue}
              setItems={setTime}
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
              {val.name}
            </Text>
            <Text style={{ fontSize: 18, marginBottom: 5 }}>
              {moment(value).format("Do MMM YYYY")} {values}
            </Text>

            <Text style={{ fontSize: 18, marginBottom: 5 }}>1 hr</Text>
            <Text style={{ fontSize: 18, marginBottom: 5 }}>
              Rs, {val.Price}
            </Text>
          </Card>
          <Button
            style={{ marginBottom: 30, backgroundColor: "#FF69B4" }}
            mode="contained"
            onPress={() => move()}
          >
            Next
          </Button>
        </Card>
      </View>
    </SafeAreaView>
  );
}
