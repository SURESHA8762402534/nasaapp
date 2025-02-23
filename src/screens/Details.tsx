/** @format */

import axios from "axios";
import { ArrowBack, Navigation } from "@material-ui/icons";
import React, { FC, useCallback, useEffect, useState } from "react";
import {
  ActivityIndicator,
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { styles } from "../styles/screens";

import { detailsProp } from "../types/screens";

const Details: FC<detailsProp> = (props) => {
  const data = props.route.params.data;

  return (
    <SafeAreaView
      testID="details"
      style={{
        width: "100%",
        flex: 1,
        // backgroundColor: "#f6f1eb",
        padding: 10,
        // justifyContent: "center",
        alignItems: "center",
        marginTop: "10%",
      }}
    >
      <View
        style={{
          marginBottom: 30,
        }}
      >
        <Text
          style={{
            fontSize: 22,
            fontWeight: "700",
            color: "#18315f",
            textDecorationLine: "underline",
            textTransform: "uppercase",
          }}
        >
          Asteroid Details
        </Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.txt}>Name: {data?.name}</Text>
        <Text style={styles.txt}>Nasa JPl URL: {data?.nasa_jpl_url}</Text>
        <Text style={styles.txt}>
          Is potentially hazardous:
          {data?.is_potentially_hazardous_asteroid ? "yes" : "no"}
        </Text>
      </View>
    </SafeAreaView>
  );
};

export default Details;
