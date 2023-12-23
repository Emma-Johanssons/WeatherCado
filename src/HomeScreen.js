import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  TextInput,
  StyleSheet,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

const HomeScreen = ({ route }) => {
  const { errorMessage } = route.params || {};
  const [text, setText] = useState("");
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      {errorMessage ? (
        <React.Fragment>
          <Image
            source={require("../assets/familywalk2.gif")}
            style={{ width: 300, height: 300, marginTop: 60, marginLeft: 30 }}
          />
          <Text style={styles.errorText}>{errorMessage}</Text>
        </React.Fragment>
      ) : (
        <Image
          source={require("../assets/familywalk2.gif")}
          style={{ width: 300, height: 300, marginTop: 60, marginLeft: 30 }}
        />
      )}

      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          value={text}
          placeholder="Find a city"
          onChangeText={(text) => setText(text)}
        />
        <TouchableOpacity
          style={styles.searchButton}
          onPress={() => {
            if (text !== "") {
              navigation.navigate("Weather", { city: text });
              setText("");
            }
          }}
        >
          <Text style={styles.buttonText}>Search Weather</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgb(210,248,210)",
    alignItems: "center",
    justifyContent: "space-around",
  },
  title: {
    textAlign: "center",
    color: "rgb(160,82,45)",
    fontSize: 50,
    fontWeight: "bold",
    margin: 20,
  },
  inputContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  input: {
    fontSize: 20,
    borderStyle: "solid",
    borderColor: "rgb(136 19 55)",
    borderWidth: 2,
    padding: 8,
    paddingLeft: 8,
    paddingRight: 8,
    textAlign: "center",
    backgroundColor: "rgb(160,82,45)",
    borderRadius: 20,
    width: 200,
    marginBottom: 20,
  },
  searchButton: {
    borderStyle: "solid",
    borderColor: "rgb(136 19 55)",
    borderWidth: 2,
    padding: 10,
    paddingLeft: 10,
    paddingRight: 10,
    backgroundColor: "rgb(160,82,45)",
    borderRadius: 20,
    width: 150,
  },
  buttonText: {
    textAlign: "center",
    fontWeight: "bold",
  },
  errorText: {
    color: "rgb(160,82,45)",
    fontSize: 18,
    fontWeight: "bold",
  },
});

export default HomeScreen;
