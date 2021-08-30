import React, { Component } from "react";
import {
  Text,
  View,
  Image,
  TouchableOpacity,
  Button,
  Alert,
  ImageBackground,
} from "react-native";
import { Feather } from '@expo/vector-icons'; 


import * as OpenAnything from "react-native-openanything";


const Coran = ({ navigation }) => {

  return (
    <ImageBackground source={{
      uri: "https://lh4.googleusercontent.com/proxy/F6OAqthpiZWe5SSgZGIoRg1aTwkApvvthfiBexPKw6nzqSVfeEZgb8__2ULjnnXQ6sOFcNT_OYli5Jm773MN5b9jVaqyyo8YS_xI=s0-d",
    }} style={{flex:1,alignItems:'center',justifyContent:'center', }}>
    
      <TouchableOpacity
          onPress={() => OpenAnything.Pdf("http://islamicbook.ws/quran/quran.pdf")}
          style={{
            width: 350,
            backgroundColor: "#52FFF5",
            top: 250,
            height: 60,
            borderTopLeftRadius: 80,
            borderTopRightRadius: 80,
            borderWidth: 5,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Feather 
            name="book-open"
            size={24}
            color="black"
            style={{ right: 72, bottom: -12 }}
          />
          <Text
            style={{
              fontSize: 17,
              color: "black",
              textAlign: "center",
              top: -15,
            }}
          >
          القران الكريم  
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
        onPress={() => navigation.navigate("Histoires")}
          style={{
            width: 350,
            backgroundColor: "#52FFF5",
            top: 260,
            height: 60,
            borderBottomLeftRadius: 80,
            borderBottomRightRadius: 80,
            borderWidth: 5,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Feather 
            name="book-open"
            size={24}
            color="black"
            style={{ right: 72, bottom: -12 }}
          />
          <Text
            style={{
              fontSize: 17,
              color: "black",
              textAlign: "center",
              top: -15,
            }}
          >
          قصص الانبياء  
          </Text>
        </TouchableOpacity>
    
    
   

   
    
    </ImageBackground>
    
  );
};

export default Coran;













