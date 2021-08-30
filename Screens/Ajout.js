import React, { Component } from "react";
import {
  Text,
  StyleSheet,
  View,
  Image,
  Alert,
  TouchableOpacity,
  Button,
  Animated,
  TextInput,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";

const Ajout = ({ navigation }) => {
  return (
    <View
      style={{
        backgroundColor: "#00ABA9",
        flex: 1,
        borderWidth: 2,
        paddingBottom: 100,
      }}
    >
      <TextInput
        style={
          (styles.input,
          {
            height: 200,
            paddingVertical: 10,
            backgroundColor: "white",
            borderBottomWidth: 2,
            paddingRight: 4,
            paddingLeft: 3,
            fontSize: 22,
          })
        }
        multiline={true}
        placeholder="اكتب هنا السؤال المراد اضافته الى اللعبة:"
      />

      <View style={{ bottom: -200 }}>
        <TouchableOpacity
          onPress={() =>
            Alert.alert(
              "تم ارسال الاقتراح بنجاح، سيتم دراسته من قبل الفريق حتى يتم اضافته"
            )
          }
          style={{
            
            width: 120,
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "white",
            top: 200,
            height: 50,
            borderRadius: 80,
            borderWidth: 5,
            left: 135,
            top: -120,
            borderTopRightRadius: 0,
          }}
        >
          <Text style={{ fontSize: 17, color: "black", textAlign: "center" }}>
            ارسال
          </Text>
        </TouchableOpacity>
      </View>

      <View style={{ bottom: -257 }}>
        <TouchableOpacity
          onPress={() => navigation.navigate("الرئيسية")}
          style={{
            width: 320,
            backgroundColor: "#52FFF5",
            top: 213,
            height: 50,
            borderTopLeftRadius: 80,
            borderTopRightRadius: 80,
            borderWidth: 5,
            left: 40,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <AntDesign
            name="home"
            size={24}
            color="black"
            style={{ right: 115, bottom: -13 }}
          />
          <Text
            style={{
              fontSize: 17,
              color: "black",
              textAlign: "center",
              top: -10,
            }}
          >
            العودة الى الصفحة الرئيسية
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Ajout;

const styles = StyleSheet.create({
  input: {
    width: "100%",
    height: 44,
    backgroundColor: "red",
    borderRadius: 6,
    paddingHorizontal: 10,
  },
});