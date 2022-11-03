import { Button, Card, List } from "react-native-paper";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  ImageBackground,
  ScrollView,
  Dimensions
} from "react-native";
import * as React from "react";
import { useNavigation } from "@react-navigation/native";
import SubCategory from "./Services/services/subCategorybyCategory";

export default function QuizCategory() {
  const navigation = useNavigation();
  const [subCat, setSubCat] = React.useState([]);
  const [loading, setloading] = React.useState();
  const move = (value) => {
    navigation.navigate("PalmistQuiz", { val: value });
  };
  const [expanded, setExpanded] = React.useState(true);
  React.useEffect(() => {
    getcate();

    // byCategory
  }, []);
  const getcate = async () => {
    try {
      const subCats = {};
      setloading(true);

      let result = await SubCategory.getSubCategory();
      result.subcategory.forEach((element) => {
        if (subCats[element.categoryId.name]) {
          subCats[element.categoryId.name].push(element);
        } else {
          subCats[element.categoryId.name] = [element];
        }
      });

      setSubCat(subCats);

      setloading(false);
    } catch (e) {
      alert(e.error);
    }
  };
  const handlePress = () => setExpanded(!expanded);
  var width = Dimensions.get("window").width;
  var height = Dimensions.get("window").height;
  return (
    <ScrollView>
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
            backgroundColor: "#f8ecec",
          }}
        >
          {Object.entries(subCat).map(([k, v]) => (
            <List.Section
              title={k}
              titleStyle={{ fontSize: 24, fontWeight: "bold" }}
            >
              <List.Accordion
                title={k}
                left={(props) => <List.Icon {...props} icon="flare" />}
              >
                {v.map((value) => (
                  <>
                    <List.Item
                      title={value.name}
                      right={(props) => (
                        <Button mode="outlined" onPress={() => move(value)}>
                          Take Quiz
                        </Button>
                      )}
                    />
                  </>
                ))}
              </List.Accordion>
            </List.Section>
          ))}
        </Card>
      </View>
    </ScrollView>
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
