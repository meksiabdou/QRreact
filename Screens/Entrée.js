import React, { Component } from "react";
import { StyleSheet, Text, View, Image, Dimensions } from "react-native";

const Width = Dimensions.get("window").width;

const Entrée = () => {
  return (
    <View style={styles.container}>
      <Image
        source={{
          uri: "https://lh4.googleusercontent.com/proxy/F6OAqthpiZWe5SSgZGIoRg1aTwkApvvthfiBexPKw6nzqSVfeEZgb8__2ULjnnXQ6sOFcNT_OYli5Jm773MN5b9jVaqyyo8YS_xI=s0-d",
        }}
        style={{ height: 620, width: 500, bottom: 10, left: 10 }}
      />

      <Text style={styles.nv}>
        قوله تعالى : ( إِنَّا نَحْنُ نَزَّلْنَا الذِّكْرَ وَإِنَّا لَهُ
        لَحَافِظُونَ ) الحجر/9.{" "}
      </Text>
    </View>
  );
};

export default Entrée;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
  },

  nv: {
    fontSize: 40,
    color: "#E39A1B",
    //backgroundColor: '#A49B99',
    top: -15,
  },
});