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
  Switch,
  RadioButton,
} from "react-native";
import { useState } from "react";
import { AntDesign } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";

const Paramètre = ({ navigation }) => {
  const [isSwitchEnable, setSwitch] = React.useState(false);
  const [isSwitchEnable2, setSwitch2] = React.useState(false);

  return (
    <View
      style={{
        backgroundColor: "#00ABA9",
        flex: 1,
        borderWidth: 2,
        paddingBottom: 100,
      }}
    >
      <View
        style={{
          borderColor:"#1BE0CE",
          backgroundColor: "#52FFF5",
          top: 190,
          height: 65,
          fontSize: 500,
          width: 290,
          left: 60,
          borderWidth: 5,
          borderRadius: 20,
        }}
      >
        <Switch
          value={isSwitchEnable2}
          onValueChange={(value) => setSwitch2(value)}
          trackColor={{ true: "#0BF412", false: "red" }}
          style={{ right: 203, top: 15 }}
        />
        <Ionicons
          name="ios-notifications-off-circle-sharp"
          size={24}
          color="black"
          style={{ left: 10, top: -10 }}
        />
        <Ionicons
          name="ios-notifications-circle"
          size={24}
          color="black"
          style={{ right: -80, top: -35 }}
        />
        <Text style={{ fontSize: 23, right: 15, top: -65 }}>
          تفعيل التنبيهات
        </Text>
      </View>

      <View
        style={{
          borderColor:"#1BE0CE",
          backgroundColor: "#52FFF5",
          top: 210,
          height: 65,
          fontSize: 500,
          width: 290,
          left: 60,
          borderWidth: 5,
          borderRadius: 20,
        }}
      >
        <Switch
          value={isSwitchEnable}
          onValueChange={(value) => setSwitch(value)}
          trackColor={{ true: "#0BF412", false: "red" }}
          style={{ right: 203, top: 15 }}
        />

        <Entypo
          name="sound-mute"
          size={24}
          color="black"
          style={{ left: 10, top: -11 }}
        />
        <Entypo
          name="sound"
          size={24}
          color="black"
          style={{ right: -80, top: -38 }}
        />
        <Text style={{ fontSize: 22, right: 12, top: -68 }}> تفعيل الصوت</Text>
      </View>

      <View style={{ top: 140 }}>
        <TouchableOpacity
          onPress={() => Alert.alert("حاليا توجد باللغة العربية فقط.")}
          style={{
            width: 320,
            top: 130,
            borderColor:"#1BE0CE",
            backgroundColor: "#52FFF5",
            height: 65,
            borderRadius: 20,
            borderWidth: 5,
            left: 60,
            width: 290,
            fontSize: 500,
            top: 90,
          }}
        >
          <FontAwesome5
            name="language"
            size={35}
            color="black"
            style={{ left: 30, top: 12 }}
          />
          <Text style={{ fontSize: 24, right: 17, top: -25 }}>
            تغيير اللغة{" "}
          </Text>
        </TouchableOpacity>
      </View>

      <View style={{}}>
        <TouchableOpacity
          onPress={() => navigation.navigate("Connecter")}
          style={{
            width: 320,
            top: 250,
            borderColor:"#1BE0CE",
            backgroundColor: "#52FFF5",
            height: 65,
            borderRadius: 20,
            borderWidth: 5,
            left: 60,
            width: 290,
            fontSize: 500,
          }}
        >
          <AntDesign
            name="star"
            size={24}
            color="black"
            style={{ left: 10, top: 15 }}
          />
          <AntDesign
            name="star"
            size={24}
            color="black"
            style={{ left: 33, top: -9.5 }}
          />
          <AntDesign
            name="star"
            size={24}
            color="black"
            style={{ left: 56, top: -33.5 }}
          />
          <AntDesign
            name="star"
            size={24}
            color="black"
            style={{ left: 79, top: -58 }}
          />
          <FontAwesome
            name="star-half-o"
            size={24}
            color="black"
            style={{ left: 103, top: -81.56 }}
          />
          <Text style={{ fontSize: 22, right: 15, top: -114 }}>
            تقييم التطبيق{" "}
          </Text>
        </TouchableOpacity>
      </View>

      <View style={{ bottom: -257 }}>
        <TouchableOpacity
          onPress={() => navigation.navigate("الرئيسية")}
          style={{
            width: 320,
            backgroundColor: "#52FFF5",
            top: 205,
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

export default Paramètre;

const styles = StyleSheet.create({
  radioView: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 4,
    marginTop: 2,
  },
});


















