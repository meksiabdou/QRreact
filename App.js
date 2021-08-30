import React from "react";
import {
  StyleShiit,
  Text,
  View,
} from "react-native";

//import {SQLite} from "expo";
import Home from "./Screens/Home";
import Ajout from "./Screens/Ajout";
import Coran from "./Screens/Coran";
import JeuxV2 from "./Screens/JeuxV2";
import Phist from "./Screens/Phist";
import Dhist from "./Screens/Dhist";
import Thist from "./Screens/Thist";
import Qhist from "./Screens/Qhist";
import Chist from "./Screens/Chist";
import Shist from "./Screens/Shist";
import Paramètre from "./Screens/Paramètre";
import Connecter from "./Screens/Connecter";
import Histoires from "./Screens/Histoires";
import Enregistrer from "./Screens/Enregistrer";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const Stack = createStackNavigator();
const tab = createBottomTabNavigator();

export default function app() {
  return (
    <View
      style={{
        flex: 1,
      }}
    >
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">

          <Stack.Screen
            name="الرئيسية"
            component={Home}
            options={{
              headerTintColor: "white",
              headerTitleAlign: "center",
              headerStyle: { backgroundColor: "#65E6DF", height: 80 },
            }}
          />

          <Stack.Screen
            name="Jeux"
            component={JeuxV2}
            options={{
              title: "الاسئلة",
              headerTintColor: "white",
              headerTitleAlign: "center",
              headerStyle: { backgroundColor: "#65E6DF", height: 80 },
            }}
          />

          <Stack.Screen
            name="Ajout"
            component={Ajout}
            options={{
              title: "اقتراح السؤال",
              headerTintColor: "white",
              headerTitleAlign: "center",
              headerStyle: { backgroundColor: "#65E6DF", height: 80 },
            }}
          />

          <Stack.Screen
            name="Paramètre"
            component={Paramètre}
            options={{
              title: "الاعدادات",
              headerTintColor: "white",
              headerTitleAlign: "center",
              headerStyle: { backgroundColor: "#65E6DF", height: 80 },
            }}
          />

          <Stack.Screen
            name="Coran"
            component={Coran}
            options={{
              title: "اقرأ",
              headerTintColor: "white",
              headerTitleAlign: "center",
              headerStyle: { backgroundColor: "#65E6DF", height: 80 },
            }}
          />

          <Stack.Screen
            name="Enregistrer"
            component={Enregistrer}
            options={{
              title: "إنشاء حساب",
              headerTintColor: "white",
              headerTitleAlign: "center",
              headerStyle: { backgroundColor: "#65E6DF", height: 80 },
            }}
          />

          <Stack.Screen
            name="Connecter"
            component={Connecter}
            options={{
              title: "تسجيل الدخول",
              headerTintColor: "white",
              headerTitleAlign: "center",
              headerStyle: { backgroundColor: "#65E6DF", height: 80 },
            }}
          />

          <Stack.Screen
            name="Histoires"
            component={Histoires}
            options={{
              title: "قصص نبوية",
              headerTintColor: "white",
              headerTitleAlign: "center",
              headerStyle: { backgroundColor: "#65E6DF", height: 80 },
            }}
          />

          <Stack.Screen
            name="Phist"
            component={Phist}
            options={{
              title: "قصة سيدنا آدم عليه السلام",
              headerTintColor: "white",
              headerTitleAlign: "center",
              headerStyle: { backgroundColor: "#65E6DF", height: 80 },
            }}
          />

          <Stack.Screen
            name="Dhist"
            component={Dhist}
            options={{
              title: "قصة سيدنا نوح عليه السلام ",
              headerTintColor: "white",
              headerTitleAlign: "center",
              headerStyle: { backgroundColor: "#65E6DF", height: 80 },
            }}
          />

          <Stack.Screen
            name="Thist"
            component={Thist}
            options={{
              title: "قصة سيدنا هود عليه السلام",
              headerTintColor: "white",
              headerTitleAlign: "center",
              headerStyle: { backgroundColor: "#65E6DF", height: 80 },
            }}
          />

          <Stack.Screen
            name="Qhist"
            component={Qhist}
            options={{
              title: "قصة سيدنا صالح عليه السلام",
              headerTintColor: "white",
              headerTitleAlign: "center",
              headerStyle: { backgroundColor: "#65E6DF", height: 80 },
            }}
          />

          <Stack.Screen
            name="Chist"
            component={Chist}
            options={{
              title: "قصة سيدنا يونس عليه السلام",
              headerTintColor: "white",
              headerTitleAlign: "center",
              headerStyle: { backgroundColor: "#65E6DF", height: 80 },
            }}
          />

          <Stack.Screen
            name="Shist"
            component={Shist}
            options={{
              title: "قصة النبي محمد صلى الله عليه وسلم",
              headerTintColor: "white",
              headerTitleAlign: "center",
              headerStyle: { backgroundColor: "#65E6DF", height: 80 },
            }}
          />

          
        </Stack.Navigator>
      </NavigationContainer>
    </View>
  );
}