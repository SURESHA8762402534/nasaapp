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
    <SafeAreaView testID="details" style={styles.container}>
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
