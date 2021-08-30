import React, { Component } from "react";
import {
  Text,
  View,
  ScrollView,
  Image,
  TouchableOpacity,
  Button,
  Alert,
  Animated,
  TextInput,
} from "react-native";
import { Entypo } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";

const Home = ({ navigation }) => {
  return (
    <ScrollView
      style={{
        backgroundColor: "#00ABA9",
        flex: 1,
        //borderWidth: 2,
        //borderBottomWidth: 10,
        borderBottomColor: "#1BE0CE",
      }}
    >
      <Image
        source={{
          uri: "https://i.pinimg.com/originals/67/32/a1/6732a1f5ad60cf677959bdb06a6632eb.gif",
        }}
        style={{ height: 440, width: 517, bottom: 10, right: 40 }}
      />
      <View style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-end",
        paddingHorizontal: 10,
        top: -70
      }}>
        
      <TouchableOpacity
        onPress={() => navigation.navigate("Jeux")}
        style={{
          borderColor: "#1BE0CE",
          backgroundColor: "#52FFF5",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          width: 225,
          height: 60,
          //top: 5,
          //left: 90,
          marginBottom: 10,
          borderRadius: 20,
          borderTopRightRadius: 1,
          borderWidth: 5,
        }}
      >
        <Ionicons
          name="ios-game-controller"
          size={24}
          color="black"
          style={{ right: 75, bottom: -13 }}
        />
        <Text style={{ fontSize: 17, top: -12 }}>ابدا اللعب</Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => navigation.navigate("Ajout")}
        style={{
          borderColor: "#1BE0CE",
          backgroundColor: "#52FFF5",
          alignItems: "center",
          justifyContent: "center",
          width: 225,
          height: 60,
          //top: 25,
          //left: 90,
          marginBottom: 10,
          borderRadius: 20,
          borderTopRightRadius: 1,
          borderWidth: 5,
        }}
      >
        <Entypo
          name="help"
          size={28}
          color="black"
          style={{ right: 75, bottom: -13 }}
        />
        <Text style={{ fontSize: 17, top: -15 }}>اقترح سؤال</Text>
      </TouchableOpacity>
      
      <TouchableOpacity
        onPress={() => navigation.navigate("Coran")}
        style={{
          borderColor: "#1BE0CE",
          backgroundColor: "#52FFF5",
          alignItems: "center",
          justifyContent: "center",
          width: 225,
          height: 60,
          //top: 45,
          //left: 90,
          marginBottom: 10,
          borderRadius: 20,
          borderTopRightRadius: 1,
          borderWidth: 5,
        }}
      >
        <Feather
          name="book-open"
          size={26}
          color="black"
          style={{ right: 74, bottom: -12 }}
        />
        <Text style={{ fontSize: 17, right: -8, top: -15 }}>
          كتب و قصص شيقة
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => navigation.navigate("Paramètre")}
        style={{
          borderColor: "#1BE0CE",
          backgroundColor: "#52FFF5",
          alignItems: "center",
          justifyContent: "center",
          width: 225,
          height: 60,
          //top: 65,
          //left: 90,
          marginBottom: 10,
          borderRadius: 20,
          borderTopRightRadius: 1,
          borderWidth: 5,
        }}
      >
        <Entypo
          name="cog"
          size={28}
          color="black"
          style={{ right: 75, bottom: -10 }}
        />
        <Text style={{ fontSize: 17, bottom: 15 }}>الاعدادات</Text>
      </TouchableOpacity>

      </View>
    </ScrollView>
  );
};

export default Home;
