import React, { Component } from "react";

import {
  Text,
  View,
  Image,
  TouchableOpacity,
  Button,
  Alert,
  TextInput,
} from "react-native";
//import axios from "axios";
import { Entypo } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
//import { useState } from "react/cjs/react.development";
export default class Enregistrer extends Component {
  constructor(props) {
    super(props);
    this.state = { Nom: "Meksi", Maison: "22 rue", Adresse: "meksiabdou@gmail.com", Mdps: "10203040" };
  }
  InsertRecord = () => {
    var Nom = this.state.Nom;
    var Maison = this.state.Maison;
    var Adresse = this.state.Adresse;
    var Mdps = this.state.Mdps;

    if (
      Nom.length == 0 ||
      Maison.length == 0 ||
      Adresse.length == 0 ||
      Mdps.length == 0
    ) {
      Alert.alert("خطأ في الببانات . يرجى التحقق.");
    } else {
      var InsertAPIURL = "http://192.168.1.100:3090/auth/register";
      var headers = {
        Accept: "application/json",
        "Content-Type": "application/json",
        "token" : "AxlGuQ7nQ2k2Y0N2uvOfvzVMQ7nBNQTQuuVMlG",
      };
      var Data = {
        fullname: Nom,
        address: Maison,
        email: Adresse,
        password: Mdps,
      };

      fetch(InsertAPIURL, {
        method: "POST",
        headers: headers,
        body: JSON.stringify(Data),
      })
        .then((Response) => Response.json())
        .then((Response) => {
          console.log(Response);
          if(Response.status) {
            Alert.alert("تنبيه", "تم إنشاء الحساب بنجاح")
          }else {
            Alert.alert("تنبيه", "خطأ لم يكتمل تسجيل الحساب الجديد");
          }
          //Alert.alert(Response[0].Message);
        })
        .catch((error) => {
          Alert.alert("خطأ" + error?.toString());
        });
    }
  };

  render() {
    return (
      <View
        style={{
          backgroundColor: "#009999",
          flex: 1,
          borderWidth: 2,
          borderBottomWidth: 10,
          borderBottomColor: "#696969",
        }}
      >
        <View
          style={{
            flex: 1,
            alignItems: "center",
            marginVertical: -20,
          }}
        >
          <TextInput
            style={{
              width: 370,
              height: 50,
              paddingVertical: 10,
              backgroundColor: "white",
              borderWidth: 2,
              paddingRight: 40,
              paddingLeft: 3,
              fontSize: 16,
              top: 100,
              borderRadius: 10,
              marginVertical: 10,
            }}
            multiline={true}
            placeholder="إسم المستخدم:"
            onChangeText={(Nom) => this.setState({ Nom })}
          />
          <View>
            <FontAwesome
              name="user-o"
              size={24}
              color="black"
              style={{ left: 161, top: 51 }}
            />
          </View>

          <TextInput
            style={{
              width: 370,
              height: 50,
              paddingVertical: 10,
              backgroundColor: "white",
              borderWidth: 2,
              paddingRight: 40,
              paddingLeft: 3,
              fontSize: 16,
              top: 100,
              borderRadius: 10,
              marginVertical: -10,
            }}
            multiline={true}
            placeholder="العنوان:"
            onChangeText={(Maison) => this.setState({ Maison })}
          />
          <View>
            <Entypo
              name="address"
              size={24}
              color="black"
              style={{ left: 161, top: 72 }}
            />
          </View>

          <TextInput
            style={{
              width: 370,
              height: 50,
              paddingVertical: 10,
              backgroundColor: "white",
              borderWidth: 2,
              paddingRight: 40,
              paddingLeft: 3,
              fontSize: 16,
              top: 100,
              borderRadius: 10,
              marginVertical: 10,
            }}
            placeholder="البريد الالكتروني:"
            onChangeText={(Adresse) => this.setState({ Adresse })}
          />
          <View>
            <MaterialIcons
              name="mail-outline"
              size={24}
              color="black"
              style={{ left: 161, top: 48 }}
            />
          </View>

          <TextInput
            style={{
              width: 370,
              height: 50,
              paddingVertical: 10,
              backgroundColor: "white",
              borderWidth: 2,
              paddingRight: 40,
              paddingLeft: 3,
              fontSize: 16,
              top: 100,
              borderRadius: 10,
              marginVertical: -10,
            }}
            secureTextEntry={true}
            placeholder="كلمة السر:"
            onChangeText={(Mdps) => this.setState({ Mdps })}
          />
          <View>
            <Feather
              name="lock"
              size={24}
              color="black"
              style={{ left: 161, top: 68 }}
            />
          </View>
          <TouchableOpacity
            onPress={this.InsertRecord}
            style={{
              alignItems: "center",
              justifyContent: "center",
              width: 225,
              height: 60,
              paddingVertical: 10,
              backgroundColor: "white",
              borderWidth: 2,
              paddingRight: 40,
              paddingLeft: 3,
              fontSize: 16,
              top: 90,
              borderRadius: 10,
              marginVertical: 20,
              backgroundColor: "#99ffcc",
            }}
          >
            <MaterialIcons
              name="done-all"
              size={28}
              color="black"
              style={{ top: 14, right: 40 }}
            />
            <Text style={{ fontSize: 21, bottom: 15, left: 19 }}>إشتراك</Text>
          </TouchableOpacity>
          <Text style={{ top: 200 }}>----أو يمكنك الاشتراك عن طريق----</Text>

          <View style={{ right: 90 }}>
            <TouchableOpacity
              onPress={() => Alert.alert("عذرا لم نتمكن من الاتصال بالشبكة.")}
              style={{
                alignItems: "center",
                justifyContent: "center",
                width: 150,
                height: 40,
                paddingVertical: 10,
                backgroundColor: "white",
                borderWidth: 2,
                paddingRight: 40,
                paddingLeft: 3,
                fontSize: 16,
                top: 50,
                borderRadius: 10,
                marginVertical: 176,
                backgroundColor: "#99ffcc",
              }}
            >
              <Text style={{ left: 30, fontSize: 18 }}>Facebook</Text>
            </TouchableOpacity>

            <FontAwesome
              name="facebook-square"
              size={24}
              color="blue"
              style={{ left: 10, bottom: 157 }}
            />

            <View style={{ left: 180 }}>
              <TouchableOpacity
                style={{
                  alignItems: "center",
                  justifyContent: "center",
                  width: 150,
                  height: 40,
                  paddingVertical: 10,
                  backgroundColor: "white",
                  borderWidth: 2,
                  paddingRight: 40,
                  paddingLeft: 3,
                  fontSize: 16,
                  bottom: 53,
                  borderRadius: 10,
                  marginVertical: -138,
                  backgroundColor: "#99ffcc",
                }}
              >
                <Text style={{ left: 20, top: -0.5, fontSize: 18 }}>
                  Google
                </Text>
              </TouchableOpacity>

              <FontAwesome
                name="google"
                size={24}
                color="black"
                style={{ left: 10, bottom: -54 }}
              />
            </View>
          </View>
        </View>
      </View>
    );
  }
}
