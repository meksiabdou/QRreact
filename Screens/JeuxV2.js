import { useNavigation } from "@react-navigation/core";
import React, { useState } from "react";
import { Text, View, FlatList,Alert, TouchableOpacity } from "react-native";
//import PDF from 'react-native-pdf';
import { AntDesign } from "@expo/vector-icons";


export default function JeuxV2() {
  const navigation = useNavigation();
  
  const QustionHolder = [
    {
      qustion: " ما هو الكتاب المنزل على  سيدنا محمد -صلى الله عليه وسلم؟",
      proposition: [
        {
          answer: "  التوراة",
          isCorrect: false,
          
        },
        {
          answer: "القرآن الكريم",
          isCorrect: true,
        },
        {
          answer: "الزبور",
          isCorrect: false,
        },
        {
          answer: "الإنجيل",
          isCorrect: false,
        },
      ],
    },
    {
      qustion: " متى ولد الرسول صلى الله عليه وسلم؟",
      proposition: [
        {
          answer: "  يوم السبت، الثاني عشر من شهر ربيعٍ الأول ",
          isCorrect: false,
          
        },
        {
          answer: "يوم الاحد، الثاني عشر من شهر ربيعٍ الأول",
          isCorrect: false,
        },
        {
          answer: "يوم الإثنين، الثاني عشر من شهر ربيعٍ الأول",
          isCorrect: true,
        },
        {
          answer: "يوم اثلاثاء، الثاني عشر من شهر ربيعٍ الأول",
          isCorrect: false,
        },
      ],
    },
    {
      qustion: " أين ولد الرسول صلى الله عليه وسلم؟",
      proposition: [
        {
          answer: " بمكّة المكرمة",
          isCorrect: true,
          
        },
        {
          answer: "بالمدينة المنورة",
          isCorrect: false,
        },
        {
          answer: "الشام",
          isCorrect: false,
        },
        {
          answer: "القدس",
          isCorrect: false,
        },
      ],
    },
    {
      qustion: "ما اسم والد الرسول صلى الله عليه وسلم؟",
      proposition: [
        {
          answer: " عبدُ الله بن عبد المُطلب",
          isCorrect: true,
          
        },
        {
          answer: "عبد المطلب بن هاشم",
          isCorrect: false,
        },
        {
          answer: "حمزة بن عبد المطلب",
          isCorrect: false,
        },
        {
          answer: "أبو طالب بن عبد المطلب",
          isCorrect: false,
        },
      ],
    },
    {
      qustion: "من هي ام الرسول صلى الله عليه وسلم؟",
      proposition: [
        {
          answer: " عائشة بنت أبي بكر",
          isCorrect: false,
          
        },
        {
          answer: "حليمة السعدية  ",
          isCorrect: false,
        },
        {
          answer: "خديجة بنت خويلد",
          isCorrect: false,
        },
        {
          answer: "آمنة بنت وهب  ",
          isCorrect: true,
        },
      ],
    },
    {
      qustion: "من هي ام الرسول صلى الله عليه وسلم من الرضاعة؟",
      proposition: [
        {
          answer: " عائشة بنت أبي بكر",
          isCorrect: false,
          
        },
        {
          answer: "حليمة السعدية  ",
          isCorrect: true,
        },
        {
          answer: "خديجة بنت خويلد",
          isCorrect: false,
        },
        {
          answer: "آمنة بنت وهب  ",
          isCorrect: false,
        },
      ],
    },
    {
      qustion: "متى توفي الرسول صلى الله عليه وسلم؟",
      proposition: [
        {
          answer: "  الاحد الثاني عشر من ربيع الأوّل",
          isCorrect: false,
          
        },
        {
          answer: " الاثنين الثاني عشر من ربيع الأوّل ",
          isCorrect: true,
        },
        {
          answer: "الثلاثاء الثاني عشر من ربيع الأوّل ",
          isCorrect: false,
        },
        {
          answer: " الاربعاء الثاني عشر من ربيع الأوّل",
          isCorrect: false,
        },
      ],
    },
    {
      qustion: "كم كان عمر الرسول صلى الله عليه وسلم حين توفيت أمه ؟",
      proposition: [
        {
          answer: " 3 سنوات",
          isCorrect: false,
          
        },
        {
          answer: "4 سنوات ",
          isCorrect: false,
        },
        {
          answer: "5 سنوات",
          isCorrect: false,
        },
        {
          answer: "6 سنوات ",
          isCorrect: true,
        },
      ],
    },
    {
      qustion: "كم كان عمر الرسول صلى الله عليه وسلم عندما نزل عليه الوحي ؟",
      proposition: [
        {
          answer: " أربعين سنة",
          isCorrect: true,
          
        },
        {
          answer: "خمسة وأربعين سنة ",
          isCorrect: false,
        },
        {
          answer: "خمسين سنة",
          isCorrect: false,
        },
        {
          answer: "ستين سنة ",
          isCorrect: false,
        },
      ],
    },
    
    {
      qustion: "اين توفي الرسول صلى الله عليه وسلم ؟",
      proposition: [
        {
          answer: " القدس",
          isCorrect: false,
          
        },
        {
          answer: "الشام ",
          isCorrect: false,
        },
        {
          answer: "بمكّة المكرمة",
          isCorrect: false,
        },
        {
          answer: "المدينة المنورة",
          isCorrect: true,
        },
      ],
    },
    {
      qustion: " كم عدد سور القرآن الكريم؟",
      proposition: [
        {
          answer: "  114  سورة",
          isCorrect: true,
          
        },
        {
          answer: "115  سورة",
          isCorrect: false,
        },
        {
          answer: "120  سورة",
          isCorrect: false,
        },
        {
          answer: "200  سورة",
          isCorrect: false,
        },
      ],
    },
    {
      qustion: " ما هي أول آية نزلت في القرآن الكريم؟",
      proposition: [
        {
          answer: "  سبح اسم ربك الأعلى سورة الأعلى",
          isCorrect: false,
          
        },
        {
          answer: "اقرأ باسم ربك الذي خلق سورة العلق",
          isCorrect: true,
        },
        {
          answer: "الحمدلله رب العالمين سورة الفاتحة",
          isCorrect: false,
        },
        {
          answer: "إذا جاء نصر الله والفتح سورة النصر",
          isCorrect: false,
        },
      ],
    },
    {
      qustion: " في أي سورة توجد آية الكرسي؟",
      proposition: [
        {
          answer: "   سورة الملك",
          isCorrect: false,
          
        },
        {
          answer: " سورة يس",
          isCorrect: false,
        },
        {
          answer: "  سورة الكهف",
          isCorrect: false,
        },
        {
          answer: " سورة البقرة",
          isCorrect: true,
        },
      ],
    },
    {
      qustion: " ما اسم أقصر سورة في القرآن الكريم؟",
      proposition: [
        {
          answer: "   سورة الفلق",
          isCorrect: false,
          
        },
        {
          answer: " سورة الناس",
          isCorrect: false,
        },
        {
          answer: " سورة الفيل",
          isCorrect: false,
        },
        {
          answer: " سورة الكوثر",
          isCorrect: true,
        },
      ],
    },
    {
      qustion: " كم استغرق نزول القرآن الكريم؟",
      proposition: [
        {
          answer: " 12 سنة ",
          isCorrect: false,
          
        },
        {
          answer: "15 سنة",
          isCorrect: false,
        },
        {
          answer: "18 سنة",
          isCorrect: false,
        },
        {
          answer: "سنة23 ",
          isCorrect: true,
        },
      ],
    },
    {
      qustion: " ما اسم البلد الذي ذكر في القرآن الكريم؟",
      proposition: [
        {
          answer: "  العراق",
          isCorrect: false,
          
        },
        {
          answer: "مصر",
          isCorrect: true,
        },
        {
          answer: "اليمن",
          isCorrect: false,
        },
        {
          answer: "فلسطين",
          isCorrect: false,
        },
      ],
    },
    {
      qustion: " من هو أكثر نبي ذكر اسمه في القرآن الكريم؟",
      proposition: [
        {
          answer: " موسى عليه السلام",
          isCorrect: true,
          
        },
        {
          answer: "ابراهيم عليه السلام",
          isCorrect: false,
        },
        {
          answer: " نوح عليه السلام",
          isCorrect: false,
        },
        {
          answer: " عيسى عليه السلام",
          isCorrect: false,
        },
      ],
    },
    {
      qustion: " ما هي السورة التي لم تبدأ ببسم الله الرحمن الرحيم؟",
      proposition: [
        {
          answer: " سورة النور",
          isCorrect: false,
          
        },
        {
          answer: " سورة الرعد",
          isCorrect: false,
        },
        {
          answer: " سورة التوبة",
          isCorrect: true,
        },
        {
          answer: "  سورة النحل",
          isCorrect: false,
        },
      ],
    },

    {
      qustion: " سورة من القرآن تخلو تمامًا من حرف الراء، وتنتهي كافة آياتها بحرف الدال، فأي سورةٍ تكون؟",
      proposition: [
        {
          answer: "سورة الأعلى",
          isCorrect: false,
        },
        {
          answer: "سورة الإخلاص",
          isCorrect: true,
        },
        {
          answer: "سورة الحج",
          isCorrect: false,
        },
        {
          answer: "سورة الحشر",
          isCorrect: false,
        },
      ],
    },

    {
      qustion: " كم عدد أجزاء القرآن الكريم؟",
      proposition: [
        {
          answer: "10 أجزاء",
          isCorrect: false,
        },
        {
          answer: "20 أجزاء",
          isCorrect: false,
        },
        {
          answer: "30 أجزاء",
          isCorrect: true,
        },
        {
          answer: "40 أجزاء",
          isCorrect: false,
        },
      ],
    },

    
  ];

  const [currentQustion, setcurrentQustion] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [counter,setCounter] = useState(0);


  function MoveToNextQustion() {
    console.log(QustionHolder.length);
    console.log({ currentQustion });

    if (QustionHolder.length != currentQustion + 1) {
      setcurrentQustion(currentQustion + 1);
    } else {
      navigation.goBack();
      
    }
  }
  return (
    <View
      style={{
        backgroundColor: "#00ABA9",
        flex: 1,
        padding: 5,
        borderWidth: 2 
      }}
    >
    <View style={{ backgroundColor: "#00ABA9", flex: 1, }}>
      <TouchableOpacity
        style={{
          backgroundColor: "#52FFF5",
          alignItems: "center",
          justifyContent: "center",
          width: 320,
          height: 50,
          top: -6,
          left: 40,
          borderBottomLeftRadius: 80,
          borderBottomRightRadius: 80,borderWidth: 5,
        }}
      >
        <Text style={{ fontSize: 17, }}>المستوى :{currentQustion+1}</Text>
      </TouchableOpacity>
    </View>
      <View
        style={{
          backgroundColor: "white",
          alignItems: "center",
          padding: 65,
          margin: -8,
          marginTop:-70,
          borderWidth:3,
          borderRightWidth:5,
          borderLeftWidth:5
          
        }}
      >
        <Text style={{ fontSize: 20, color: "black", opacity: 20,marginTop:-40 }}>
        السؤال يقول: {QustionHolder[currentQustion]?.qustion}
        </Text>
      </View>

      <FlatList
        data={QustionHolder[currentQustion]?.proposition}
        keyExtractor={(item) => item.answer}
        renderItem={({ item }) => {
          return (
            <View
              style={{
                alignItems: "center",
                height:85,
                
                
              }}
            >
              <TouchableOpacity
                onPress={() => {
                  if (item.isCorrect) {
                    alert(" إجابةصحيحة,أحسنت  ");
                    setCounter(counter + 1);
                    // move to next qustion :
                  } else {
                    alert("اجابة خاطئة,ركز اكثر ");
                  }
                  MoveToNextQustion();
                }}
                style={{
                  backgroundColor: "white",
                  alignItems: "center",
                  justifyContent: "center",
                  width: 225,
                  height: 60,
                  borderRadius: 20,
                  borderTopRightRadius: 1,
                  borderWidth: 5,
                  marginVertical: 5,
                  top:21.5
                }}
              >
                <Text style={{ fontSize: 17 }}> {item.answer} </Text>
              </TouchableOpacity>
            </View>
          );
        }}
      />
      <View style={{ bottom: 158 }}>
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
}

// import React, { Component } from "react";
// import {
//   Text,
//   View,
//   Image,
//   TouchableOpacity,
//   Button,
//   Alert,
//   Animated,
//   FlatList,
// } from "react-native";
// import { AntDesign } from "@expo/vector-icons";

// const Jeux = ({ navigation }) => {

//   return (
//     <View style={{ backgroundColor: "#00ABA9", flex: 1, borderWidth: 2 }}>

//       <TouchableOpacity
//         style={{
//           backgroundColor: "#1BE0CE",
//           alignItems: "center",
//           justifyContent: "center",
//           width: 320,
//           height: 50,
//           top: -4,
//           left: 40,
//           borderBottomLeftRadius: 80,
//           borderBottomRightRadius: 80,
//           borderWidth: 5,
//         }}
//       >
//         <Text style={{ fontSize: 17 }}>المستوى :01</Text>
//       </TouchableOpacity>

//       <View style={{ top: 30, height: 200, backgroundColor: "white" }}>
//         <Text style={{ fontSize: 20, color: "black", opacity: 20, right: 5 }}>
//           ما هي هذه السورة؟
//         </Text>
//         <Text style={{ fontSize: 20, color: "blue", opacity: 20, right: 5 }}>
//           بِسْمِ اللَّهِ الرَّحْمَنِ الرَّحِيمِ (1)
//         </Text>
//         <Text style={{ fontSize: 20, color: "black", opacity: 20, right: 5 }}>
//           الْحَمْدُ لِلَّهِ رَبِّ الْعَالَمِينَ (2) الرَّحْمَنِ الرَّحِيمِ (3)
//           مَالِكِ يَوْمِ الدِّينِ (4) إِيَّاكَ نَعْبُدُ وَإِيَّاكَ نَسْتَعِينُ
//           (5) اهْدِنَا الصِّرَاطَ الْمُسْتَقِيمَ (6) صِرَاطَ الَّذِينَ
//           أَنْعَمْتَ عَلَيْهِمْ غَيْرِ الْمَغْضُوبِ عَلَيْهِمْ وَلَا
//           الضَّالِّينَ (7)
//         </Text>
//       </View>

//       <View>
//         <TouchableOpacity
//           style={{
//             backgroundColor: "white",
//             alignItems: "center",
//             justifyContent: "center",
//             width: 225,
//             height: 60,
//             top: 80,
//             left: 90,
//             borderRadius: 20,
//             borderTopRightRadius: 1,
//             borderWidth: 5,
//           }}
//         >
//           <Text style={{ fontSize: 17 }}>سورة الملك</Text>
//         </TouchableOpacity>

//         <TouchableOpacity
//           style={{
//             backgroundColor: "white",
//             alignItems: "center",
//             justifyContent: "center",
//             width: 225,
//             height: 60,
//             top: 100,
//             left: 90,
//             borderRadius: 20,
//             borderTopRightRadius: 1,
//             borderWidth: 5,
//           }}
//         >
//           <Text style={{ fontSize: 17 }}>سورة البقرة</Text>
//         </TouchableOpacity>

//         <TouchableOpacity
//           style={{
//             backgroundColor: "white",
//             alignItems: "center",
//             justifyContent: "center",
//             width: 225,
//             height: 60,
//             top: 120,
//             left: 90,
//             borderRadius: 20,
//             borderTopRightRadius: 1,
//             borderWidth: 5,
//           }}
//         >
//           <Text style={{ fontSize: 17 }}>سورة الكهف</Text>
//         </TouchableOpacity>

//         <TouchableOpacity
//           style={{
//             backgroundColor: "white",
//             alignItems: "center",
//             justifyContent: "center",
//             width: 225,
//             height: 60,
//             top: 140,
//             left: 90,
//             borderRadius: 20,
//             borderTopRightRadius: 1,
//             borderWidth: 5,
//           }}
//         >
//           <Text style={{ fontSize: 17 }}>سورة الفاتحة</Text>
//         </TouchableOpacity>
//       </View>
      // <View style={{ bottom: -68 }}>
      //   <TouchableOpacity
      //     onPress={() => navigation.navigate("الرئيسية")}
      //     style={{
      //       width: 320,
      //       backgroundColor: "#1BE0CE",
      //       top: 163.5,
      //       height: 50,
      //       borderTopLeftRadius: 80,
      //       borderTopRightRadius: 80,
      //       borderWidth: 5,
      //       left: 40,
      //       alignItems: "center",
      //       justifyContent: "center",
      //     }}
      //   >
          // <AntDesign
          //   name="home"
          //   size={24}
          //   color="black"
          //   style={{ right: 115, bottom: -13 }}
          // />
      //     <Text
      //       style={{
      //         fontSize: 17,
      //         color: "black",
      //         textAlign: "center",
      //         top: -10,
      //       }}
      //     >
      //       العودة الى الصفحة الرئيسية
      //     </Text>
      //   </TouchableOpacity>
      // </View>
//     </View>
//   );
// };

// export default JeuxV2;
