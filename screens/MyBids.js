/*import { View, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useNavigation } from '@react-navigation/native';
import { themeColors } from '../theme';
import { Bid } from '../constants';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { TextInput } from 'react-native';
import MyHeader from '../components/MyHeader';
import Bids from '../components/Bids';

  
export default function MyContracts(props) {
    const navigation = useNavigation();
    const [activeCategory, setActiveCategory] = useState('Oranges');

  return (
    <View className="flex-1 bg-white" style={{backgroundColor: themeColors.bg}}>
    <MyHeader
    back
    onPressBack={() => navigation.goBack()}
    title= 'My Bids'
    right="more-vertical"
    optionalBtn="shopping-cart"
    onRightPress={() => console.log('right')}
    
  />


    <SafeAreaView className="flex-1 flex justify-between bg-white">
            <View className="flex-row justify-start mx-5">
        </View>


        <View className="cart mx-5 flex-1">
        
        <View style={{height: 60, 
        marginTop: 35, 
        marginBottom: 35,
        paddingTop: 10, 
        paddingBottom: 10, 
        paddingLeft: 15, 
        backgroundColor: '#F5F5F7', 
        borderRadius: 30, 
        alignContent: 'center', 
        flexDirection: 'row', }}
        >
    <Icon name="search"  size={30}/>
    <TextInput style={{fontSize:18, color: "#616888", marginLeft: 5}} placeholder='Search for anything'/>
   </View>



   <View>
    {
     Bid.map((item,index)=> <Bids con={item} key={index} />)
    }
    </View>



  
            
 </View>
 </SafeAreaView> 
 </View>   
  )
}*/


import React, { useState } from "react";
import {
  View,
  Text,
  ScrollView,
  Image,
  TouchableOpacity,
  FlatList,
} from "react-native";
import { Bids, COLOURS } from "../components/items";
import MyHeader from "../components/MyHeader";



const MyBids = ({ navigation }) => {
  const [currentSelected, setCurrentSelected] = useState([0]);

  const renderCategories = ({ item, index }) => {
    return (
      <TouchableOpacity
        activeOpacity={0.9}
        onPress={() => setCurrentSelected(index)}
      >
        <View
          style={{
            width: 140,
            height: 50,
            justifyContent: "space-evenly",
            alignItems: "center",
            backgroundColor:
            currentSelected == index ? COLOURS.accent : COLOURS.white,
            borderRadius: 20,
            margin: 10,
            marginLeft:10,
            elevation: 5,
          }}
        >
         
          <Text
            style={{
              fontSize: 16,
              color: COLOURS.black,
              fontWeight: "600",
            }}
          >
            {item.name}
          </Text>
         
        </View>
      </TouchableOpacity>
    );
  };

  const renderItems = (data, index) => {
    return (
      <TouchableOpacity
        key={index}
        activeOpacity={0.9}
        style={{
          width: "100%",
          height: 150,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <View
          style={{
            width: "90%",
            height: 120,
            backgroundColor: COLOURS.white,
            borderRadius: 10,
            elevation: 4,
            position: "relative",
            padding: 15,
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <View style={{}}>
            <View className="flex-row">
              <View style={{ width: 70, height: 70, marginRight: -45 }}>
                <Image
                  source={data.image}
                  style={{
                    marginTop: 20,
                    width: "100%",
                    height: "100%",
                    resizeMode: "contain",
                  }}
                />
              </View>

              <View className="flex">
                <Text
                  style={{
                    fontSize: 20,
                    color: COLOURS.black,
                    fontWeight: "bold",
                    paddingTop: 10,
                    marginLeft: 100,
                  }}
                >
                  {data.name}
                </Text>
                <Text
                  style={{
                    fontSize: 18,
                    color: COLOURS.black,
                    opacity: 0.5,
                    marginLeft: 100,
                  }}
                >
                  {" "}
                  ID:
                  {data.ID}
                </Text>
              
               
              </View>

          
            </View>
          </View>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <View
      style={{
        width: "100%",
        height: "100%",
        backgroundColor: COLOURS.white,
      }}
    >
      <ScrollView showsVerticalScrollIndicator={false}>
        <View
          style={{
            width: "100%",
            height: "100%",
            backgroundColor: COLOURS.white,
            position: "relative",
          }}
        >
          <MyHeader
            Sidebar
            title="Bids"
            right="more-vertical"
            optionalBtn="shopping-cart"
            onRightPress={() => console.log("right")}
          />

        

          <FlatList className="mt-10"
            horizontal={true}
            data={Bids}
            renderItem={renderCategories}
            showsHorizontalScrollIndicator={false}
          />
      
          {Bids[currentSelected].details.map(renderItems)}
        </View>
      </ScrollView>
     
    </View>
  );
};

export default MyBids;

