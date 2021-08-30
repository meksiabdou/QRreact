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
  ImageBackground,
  ScrollView,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";

const Histoires = ({ navigation }) => {
  return (
    <View style={{
      flex:1,
      justifyContent:"center",
      alignContent:"center",
      justifyContent:"center",
      backgroundColor: "#3E9DD1",
    }}>
    <ScrollView>
     <View style={{height:500,}}>
      <Image source={{ uri: "https://cdn.salla.sa/gddyj/O1I690EVF4E09B4p1Fr36kWo45obvsr9KaI1Jo3Y.jpg",
    }}
            style={{
              
                backgroundColor: "#F5F492",
                flex: 1,
                alignItems: "center",
                justifyContent: "center",
                height:100,
            }}>
      </Image>
      </View>
    
    
     
     <View style={{paddingBottom:5,left:50,paddingTop:10}}>
      <TouchableOpacity
      onPress={() => navigation.navigate("Phist")}
        style={{
          borderColor:"#52FFF5",
          backgroundColor: "#33B5FA",
          alignItems: "center",
          justifyContent: "center",
          width: 300,
          height: 70,
          borderRadius: 80,
          borderWidth: 5,
          borderTopRightRadius:0,
          borderBottomRightRadius:0,
        }}
       >
        <Text style={{ fontSize: 17 }}>قصة سيدنا آدم عليه السلام</Text>
        </TouchableOpacity>
        </View>
        <View style={{paddingBottom:5,left:50}}>
        <TouchableOpacity
        onPress={() => navigation.navigate("Dhist")}
        style={{
          borderColor:"#52FFF5",
          backgroundColor: "#33B5FA",
          alignItems: "center",
          justifyContent: "center",
          width: 300,
          height: 70,
          borderRadius: 80,
          borderWidth: 5,
          borderTopRightRadius:0,
          borderBottomRightRadius:0,
        }}
       >
        <Text style={{ fontSize: 17 }}>قصة سيدنا نوح عليه السلام
        </Text>
        </TouchableOpacity>
        </View>

        <View style={{paddingBottom:5,left:50}}>
        <TouchableOpacity
        onPress={() => navigation.navigate("Thist")}
        style={{
          borderColor:"#52FFF5",
          backgroundColor: "#33B5FA",
          alignItems: "center",
          justifyContent: "center",
          width: 300,
          height: 70,
          borderRadius: 80,
          borderWidth: 5,
          borderTopRightRadius:0,
          borderBottomRightRadius:0,
        }}
       >
        <Text style={{ fontSize: 17 }}>قصة سيدنا هود عليه السلام</Text>
        </TouchableOpacity>
        </View>

        <View style={{paddingBottom:5,left:50}}>
        <TouchableOpacity
        onPress={() => navigation.navigate("Qhist")}
        style={{
          borderColor:"#52FFF5",
          backgroundColor: "#33B5FA",
          alignItems: "center",
          justifyContent: "center",
          width: 300,
          height: 70,
          borderRadius: 80,
          borderWidth: 5,
          borderTopRightRadius:0,
          borderBottomRightRadius:0,
        }}
       >
        <Text style={{ fontSize: 17 }}>قصة سيدنا صالح عليه السلام</Text>
        </TouchableOpacity>
        </View>

        <View style={{paddingBottom:5,left:50}}>
        <TouchableOpacity
        onPress={() => navigation.navigate("Chist")}
        style={{
          borderColor:"#52FFF5",
          backgroundColor: "#33B5FA",
          alignItems: "center",
          justifyContent: "center",
          width: 300,
          height: 70,
          borderRadius: 80,
          borderWidth: 5,
          borderTopRightRadius:0,
          borderBottomRightRadius:0,
        }}
       >
        <Text style={{ fontSize: 17 }}>قصة سيدنا يونس عليه السلام
        </Text>
        </TouchableOpacity>
        </View>

        <View style={{paddingBottom:5,left:50}}>
        <TouchableOpacity
        onPress={() => navigation.navigate("Shist")}
        style={{
          borderColor:"#52FFF5",
          backgroundColor: "#33B5FA",
          alignItems: "center",
          justifyContent: "center",
          width: 300,
          height: 70,
          borderRadius: 80,
          borderWidth: 5,
          borderTopRightRadius:0,
          borderBottomRightRadius:0,
        }}
       >
        <Text style={{ fontSize: 17 }}>قصة النبي محمد صلى الله عليه وسلم
        </Text>
        </TouchableOpacity>
        </View>


        
        </ScrollView>
        <View style={{ bottom: 162.5, }}>
          <TouchableOpacity
            onPress={() => navigation.navigate("الرئيسية")}
            style={{
              width: 320,
              backgroundColor: "#52FFF5",
              top: 163.5,
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
                top: -11,
              }}
            >
              العودة الى الصفحة الرئيسية
            </Text>
          </TouchableOpacity>
        </View>
      
    </View>
  );

    };
export default Histoires;

