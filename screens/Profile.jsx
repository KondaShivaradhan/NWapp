import React, { useEffect, useState } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import MainScreen from './MainScreen';
import TopNav from "./components/TopNav";
import BottomNav from "./components/BottomNav";
const Profile = ({ navigation, type, Udata, rewData }) => {
    const Ud = Udata
    console.log('in Profile Page');
    console.log(Udata);
    const Rdata = rewData
    function Captilizer(str) {
        return str.charAt(0).toUpperCase() + str.slice(1)
    }
    function ArraySeperation() {
        const array = Parser('areaOfInterest').split(',');
        // console.log(Parser('areaOfInterest'));
        console.log('array is ');
        console.log(array);
        setaoi(array)
    }
    function Parser(field) {
        // console.log(JSON.parse(Ud)[field]);
        // (type=='reviewer')?Rdata:Ud
        if (type == 'reviewer') {
            return `${(Rdata)[field]}`
        }
        else {
            return `${JSON.parse(Ud)[field]}`

        }
    }
    // ArraySeperation()
    const [aoi, setaoi] = useState([]);

    useEffect(() => {
       ArraySeperation()
    }, []);
  return (
    <>
          <TopNav navigation={navigation}></TopNav>
    <View style={styles.container}>
      <View style={styles.header}>
        <Image
          source={{ uri: "https://cdn4.iconfinder.com/data/icons/green-shopper/1068/user.png" }}
          style={styles.profileImage}
        />
        <Text style={styles.name}>{Captilizer(Parser('firstName'))} {Captilizer(Parser('lastName'))}</Text>
        {/* <Text style={styles.username}>@{type}</Text> */}
        <View style={{ flexDirection: 'column', justifyContent: 'center',alignItems:'center', gap: 5, padding: 10 }}>
                 <View style={styles.role}>
                     <Text style={{ textAlign: 'center' }}>{(Captilizer(type))}</Text>
                 </View>
           </View>
      </View>
      <View style={styles.detailsContainer}>
       
        <View style={styles.detailItem}>
          <Text style={styles.detailLabel}>Email</Text>
          <Text style={styles.detailValue}>{Parser('email')}</Text>
        </View>
        
        <View style={styles.detailItem}>
          <Text style={styles.detailLabel}>Phone Number</Text>
          <Text style={styles.detailValue}>999999999</Text>
        </View>
        <View style={styles.detailItem}>
          <Text style={styles.detailLabel}>Areas of Interest</Text>
          <View style={{flexDirection:'row',flexWrap:'wrap',}}>
          {aoi.map((item, index) => (
        <Text style={styles.box} key={index}>{item}</Text>
      ))}
            </View>
        </View>
      </View>
    </View>
    <BottomNav navigation={navigation} type={type}></BottomNav>

    </>

  );
};

const styles = StyleSheet.create({
    box:{
backgroundColor:'green',
margin:5,
padding:5,
paddingHorizontal:15,
borderRadius:20,
color:'white',
},
  container: {
    flex: 1,

    backgroundColor: '#f5f5f5',
  },
  role: {
            borderWidth: 1,
            borderRadius: 20,
            paddingVertical: 3,
            borderColor: 'gold',
            maxWidth: 140,
            minWidth: 140,
            elevation: 2,
            backgroundColor: 'gold'
        },
  header: {
    alignItems: 'center',
    paddingVertical: 32,
    backgroundColor: '#fff',
  },
  profileImage: {
    width: 120,
    height: 120,
    borderRadius: 60,
    marginBottom: 16,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  username: {
    fontSize: 16,
    color: '#888',
    marginBottom: 16,
  },
  detailsContainer: {
    paddingHorizontal: 16,
    backgroundColor: '#fff',
    marginTop: -16,
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
    flex: 1,
  },
  detailItem: {
    marginBottom: 24,
  },
  detailLabel: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  detailValue: {
    fontSize: 16,
  },

});

export default Profile;

// import { StyleSheet, Text, View } from "react-native";
// import MainScreen from './MainScreen';
// import TopNav from "./components/TopNav";
// import BottomNav from "./components/BottomNav";
// import { Image } from "@rneui/themed";
// import Fieldset from "./components/FieldSet";
// import { TextInput } from "react-native-gesture-handler";
// export default function Profile({ navigation, type, Udata, rewData }) {
//     const Ud = Udata
//     console.log('in Profile Page');
//     console.log(Udata);
//     const Rdata = rewData

//     function Captilizer(str) {
//         return str.charAt(0).toUpperCase() + str.slice(1)
//     }
//     function Parser(field) {
//         // console.log(JSON.parse(Ud)[field]);
//         // (type=='reviewer')?Rdata:Ud
//         if (type == 'reviewer') {
//             return `${(Rdata)[field]}`

//         }
//         else {
//             return `${JSON.parse(Ud)[field]}`

//         }
//     }
//     return (
//         <>

//             <TopNav navigation={navigation}></TopNav>
//             <View style={{ justifyContent: 'center', alignItems: 'center', marginVertical: 7, }}>
//                 <Image source={{ uri: "https://cdn4.iconfinder.com/data/icons/green-shopper/1068/user.png" }} style={{ width: 150, height: 150 }} ></Image>
//             </View>
            
//             <View style={{ flexDirection: 'column', justifyContent: 'center',alignItems:'center', gap: 5, padding: 10 }}>
//                 <View style={styles.role}>
//                     <Text style={{ textAlign: 'center' }}>{(Captilizer(type))}</Text>
//                 </View>
//                 <View style={styles.container}>
//             </View>
//                
//             </View>
//             <BottomNav navigation={navigation} type={type}></BottomNav>
//         </>
//     )
// }

// const styles = StyleSheet.create({
//     box: {
//         padding: 10,
//         borderWidth: 1,
//         borderColor: 'black',
//         borderRadius: 10,

//     },
//     container: {
//         flexGrow: 1,
//         padding:16
//         // paddingVertical: 10
//         // paddingHorizontal: 10,
//     },
//     darkContainer: {
//         backgroundColor: '#000000',
//     },
//     switchContainer: {
//         flexDirection: 'row',
//         alignItems: 'center',
//         justifyContent: 'space-between',
//         marginBottom: 10,
//         paddingHorizontal: 10,
//     },
//     switchText: {
//         fontSize: 16,
//         fontWeight: 'bold',
//         color: 'black',
//     },
//     drawerItem: {
//         fontSize: 16,
//         fontWeight: 'bold',
//         // marginBottom: 10,
//         color: '#000000',
//     },
//     role: {
//         borderWidth: 1,
//         borderRadius: 20,
//         paddingVertical: 3,
//         borderColor: 'gold',
//         maxWidth: 140,
//         minWidth: 140,
//         elevation: 2,
//         backgroundColor: 'gold'
//     },
//     drawerItemL: {
//         fontSize: 16,
//         fontWeight: 'bold',
//         backgroundColor: 'red',
//         marginBottom: 10,
//         color: 'white',
//     },
// });