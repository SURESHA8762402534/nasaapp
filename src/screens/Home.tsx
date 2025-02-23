/** @format */

import { Snackbar } from "@material-ui/core";
import { Close } from "@material-ui/icons";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import axios from "axios";
import React, { FC, useState } from "react";
import {
  ActivityIndicator,
  Alert,
  Button,
  SafeAreaView,
  TextInput,
  View,
} from "react-native";
import { styles } from "../styles/screens";
import { KEY } from "../types/screens";

const Home: FC = () => {
  const [text, setText] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);
  const [state, setState] = React.useState<any>({
    vertical: "center",
    horizontal: "center",
  });
  const { vertical, horizontal, open } = state;

  const action = <Close onClick={() => setError(false)} />;

  const navigation = useNavigation<NativeStackNavigationProp<any>>();

  const getRandomAsteroid = () => {
    setLoading(true);
    axios
      .get("https://api.nasa.gov/neo/rest/v1/neo/browse?api_key=DEMO_KEY")
      .then((res) => {
        const randomNumber = Math.floor(
          Math.random() * res.data.near_earth_objects.length
        );
        getdetailes(res.data.near_earth_objects[randomNumber].id);
      })
      .catch(() => {
        Alert.alert("Error", "Something Went wrong", [
          {
            text: "ok",
          },
        ]);
      })
      .finally(() => setLoading(false));
  };

  const getdetailes = async (id: any) => {
    setLoading(true);
    axios
      .get(`https://api.nasa.gov/neo/rest/v1/neo/${id}?api_key=${KEY}`)
      .then((res) => {
        navigation.navigate("`", { data: res.data });
      })
      .catch(() => {
        setError(true);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <SafeAreaView testID="home" style={styles.container}>
      <Snackbar
        anchorOrigin={{ vertical, horizontal }}
        open={error}
        onClose={() => setError(false)}
        message="Wrong Id"
        key={vertical + horizontal}
        action={action}
        autoHideDuration={2000}
      />
      <View style={styles.inputcontainer}>
        <TextInput
          testID="input"
          placeholder="Enter Asteroid ID"
          placeholderTextColor={"grey"}
          onChangeText={(text) => setText(text)}
          style={styles.input}
        />

        <View style={styles.btn}>
          <Button
            testID="btn"
            disabled={text.length == 0}
            title="Submit"
            onPress={() => {
              getdetailes(text);
            }}
            color="orange"
          />
        </View>
      </View>
      <View>
        {loading ? (
          <View style={styles.load}>
            <ActivityIndicator color={"blue"} size={20} />
          </View>
        ) : (
          <View style={styles.buttonsRow}>
            <Button
              testID="random"
              disabled={loading}
              title="Random Asteroid"
              onPress={() => {
                getRandomAsteroid();
              }}
              color="orange"
            />
          </View>
        )}
      </View>
    </SafeAreaView>
  );
};

export default Home;
