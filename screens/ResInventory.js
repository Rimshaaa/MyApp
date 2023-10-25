/*import { View, Text, TouchableOpacity, Image, ScrollView, FlatList } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useNavigation } from '@react-navigation/native';
import { themeColors } from '../theme';
import VegCardCart from '../components/VegCardCart';
import { veg } from '../constants';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { TextInput } from 'react-native';
import MyHeader2 from '../components/MyHeader2';
import { categories3} from '../constants';
import Colors from '../constants/Colors';
import { BellIcon, MagnifyingGlassIcon } from 'react-native-heroicons/outline'


  
export default function ResInventory(props) {
    const navigation = useNavigation();
    const [activeCategory, setActiveCategory] = useState(1);

  return (
    <View className="flex-1 bg-white" style={{backgroundColor: Colors.primary}}>
    <MyHeader2
    Sidebar
    title= 'Inventory'
    right="more-vertical"
    optionalBtn="shopping-cart"
    onRightPress={() => console.log('right')}
  />


    <SafeAreaView className="flex-1 flex justify-between bg-white">
            <View className="flex-row justify-start mx-5">
        </View>


 <View className="px-5 mt-6">

<FlatList 
  horizontal
  showsHorizontalScrollIndicator={false}

  data={categories3}
  keyExtractor={item=> item.id}
  className="overflow-visible"
  renderItem={({item})=>{
    isActive = item.id==activeCategory;
    let activeTextClass = isActive? 'text-white': 'text-gray-700';
    if(item.id === 1) {
    return (
      <TouchableOpacity 
      onPress={()=> setActiveCategory(item.id)} 
      style={{backgroundColor: isActive?  Colors.resprimary: 'rgba(0,0,0,0.07)'}} 
      className="p-4 px-5 mr-2 rounded-full shadow">
        <Text className={"font-semibold " + activeTextClass}>{item.title}</Text>
      </TouchableOpacity>
    )

    }
    if(item.id === 2) {
      return (
        <TouchableOpacity 
        onPress={()=> setActiveCategory(item.id)} 
        style={{backgroundColor: isActive? Colors.resprimary: 'rgba(0,0,0,0.07)'}} 
        className="p-4 px-5 mr-2 rounded-full shadow">
          <Text className={"font-semibold " + activeTextClass}>{item.title}</Text>
        </TouchableOpacity>
      )
      
      }

      if(item.id === 3) {
        return (
          <TouchableOpacity 
          onPress={()=> setActiveCategory(item.id)} 
          style={{backgroundColor: isActive? Colors.resprimary: 'rgba(0,0,0,0.07)'}} 
          className="p-4 px-5 mr-2 rounded-full shadow">
            <Text className={"font-semibold " + activeTextClass}>{item.title}</Text>
          </TouchableOpacity>
        )
        
        }

        if(item.id === 4) {
          return (
            <TouchableOpacity 
            onPress={()=> setActiveCategory(item.id)} 
            style={{backgroundColor: isActive? Colors.resprimary: 'rgba(0,0,0,0.07)'}} 
            className="p-4 px-5 mr-2 rounded-full shadow">
              <Text className={"font-semibold " + activeTextClass}>{item.title}</Text>
            </TouchableOpacity>
          )
          
          }

 
  }}
/>
</View>

        <View className="cart mx-5 flex-1">
        
      
       <View className=" mt-10 mb-10 shadow">
          <View className="flex-row items-center rounded-full p-1 bg-[#e6e6e6]">
            <TextInput placeholder='Search items' className="p-4 flex-1 font-semibold text-gray-700" />
            <TouchableOpacity 
              className="rounded-full p-2" 
              style={{backgroundColor: themeColors.resbg}}>
              <MagnifyingGlassIcon size="25" strokeWidth={2} color="white" />
            </TouchableOpacity>
          </View>
        </View>


<ScrollView>
    <View className="mb-32">
    {
     veg.map((item,index)=>  <VegCardCart veg={item} key={index} />)
    }
    </View>
    </ScrollView>           
 </View>
 </SafeAreaView> 
 </View>   
  )
}

*/

/*import { View, Text, TouchableOpacity, Image, ScrollView, FlatList } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { ChevronLeftIcon, Bars3CenterLeftIcon, ShoppingCartIcon } from 'react-native-heroicons/solid'
import { useNavigation } from '@react-navigation/native';
import { themeColors } from '../theme';
import StarRating from 'react-native-star-rating';
import FruitCardCart from '../components/FruitCardCart';
import { cartItems, featuredFruits } from '../constants';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { TextInput } from 'react-native';
import MyHeader from '../components/MyHeader';
import { categories2} from '../constants';
import Colors from '../constants/Colors';


  
export default function SupplierInventory(props) {
    const navigation = useNavigation();
    const [activeCategory, setActiveCategory] = useState(1);

  return (
    <View className="flex-1 bg-white" style={{backgroundColor: Colors.primary}}>
    <MyHeader
    Sidebar
    title= 'Inventory'
    right="more-vertical"
    optionalBtn="shopping-cart"
    onRightPress={() => console.log('right')}
  />


    <SafeAreaView className="flex-1 flex justify-between bg-white">
            <View className="flex-row justify-start mx-5">
        </View>

 {/* categories 
 <View className="px-5 mt-6">

<FlatList 
  horizontal
  showsHorizontalScrollIndicator={false}

  data={categories2}
  keyExtractor={item=> item.id}
  className="overflow-visible"
  renderItem={({item})=>{
    isActive = item.id==activeCategory;
    let activeTextClass = isActive? 'text-white': 'text-gray-700';
    if(item.id === 1) {
    return (
      <TouchableOpacity 
      onPress={()=> setActiveCategory(item.id)} 
      style={{backgroundColor: isActive?  Colors.primary: 'rgba(0,0,0,0.07)'}} 
      className="p-4 px-5 mr-2 rounded-full shadow">
        <Text className={"font-semibold " + activeTextClass}>{item.title}</Text>
      </TouchableOpacity>
    )

    }
    if(item.id === 2) {
      return (
        <TouchableOpacity 
        onPress={()=> setActiveCategory(item.id)} 
        style={{backgroundColor: isActive? themeColors.bg1: 'rgba(0,0,0,0.07)'}} 
        className="p-4 px-5 mr-2 rounded-full shadow">
          <Text className={"font-semibold " + activeTextClass}>{item.title}</Text>
        </TouchableOpacity>
      )
      
      }

      if(item.id === 3) {
        return (
          <TouchableOpacity 
          onPress={()=> setActiveCategory(item.id)} 
          style={{backgroundColor: isActive? themeColors.bg1: 'rgba(0,0,0,0.07)'}} 
          className="p-4 px-5 mr-2 rounded-full shadow">
            <Text className={"font-semibold " + activeTextClass}>{item.title}</Text>
          </TouchableOpacity>
        )
        
        }

        if(item.id === 4) {
          return (
            <TouchableOpacity 
            onPress={()=> setActiveCategory(item.id)} 
            style={{backgroundColor: isActive? themeColors.bg1: 'rgba(0,0,0,0.07)'}} 
            className="p-4 px-5 mr-2 rounded-full shadow">
              <Text className={"font-semibold " + activeTextClass}>{item.title}</Text>
            </TouchableOpacity>
          )
          
          }

          if(item.id === 5) {
            return (
              <TouchableOpacity 
              onPress={()=> setActiveCategory(item.id)} 
              style={{backgroundColor: isActive? themeColors.bg1: 'rgba(0,0,0,0.07)'}} 
              className="p-4 px-5 mr-2 rounded-full shadow">
                <Text className={"font-semibold " + activeTextClass}>{item.title}</Text>
              </TouchableOpacity>
            )
            
            }
  }}
/>
</View>

        <View className="cart mx-5 flex-1">
        
        <View style={{height: 60, 
        marginTop: 35, 
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



    <View >
    {
     cartItems.map((item,index)=>  <FruitCardCart fruit={item} key={index} />)
    }
    </View>
               
 </View>
 </SafeAreaView> 
 </View>   
  )
}

*/

import React, { useState } from "react";
import {
  View,
  Text,
  ScrollView,
  StatusBar,
  Image,
  TouchableOpacity,
  TextInput,
  FlatList,
} from "react-native";
import { InventoryItems, COLOURS } from "../components/items2";
import MyHeader2 from "../components/MyHeader2";
import FontAwesome from "react-native-vector-icons/FontAwesome5";
import Entypo from "react-native-vector-icons/Entypo";

const ResInventory = ({ navigation }) => {
  const [currentSelected, setCurrentSelected] = useState([0]);

  const renderCategories = ({ item, index }) => {
    return (
      <TouchableOpacity
        activeOpacity={0.9}
        onPress={() => setCurrentSelected(index)}
      >
        <View
          style={{
            width: 120,
            height: 180,
            justifyContent: "space-evenly",
            alignItems: "center",
            backgroundColor:
              currentSelected == index ? COLOURS.resprimary : COLOURS.white,
            borderRadius: 20,
            margin: 10,
            elevation: 5,
          }}
        >
          <View style={{ width: 60, height: 60 }}>
            <Image
              source={item.image}
              style={{
                width: "100%",
                height: "100%",
                resizeMode: "center",
              }}
            />
          </View>
          <Text
            style={{
              fontSize: 16,
              color: COLOURS.black,
              fontWeight: "600",
            }}
          >
            {item.name}
          </Text>
          <View
            style={{
              width: 30,
              height: 30,
              borderRadius: 100,
              backgroundColor:
                currentSelected == index ? COLOURS.white : COLOURS.resprimary,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <FontAwesome
              name="angle-right"
              style={{
                fontSize: 12,
                color: currentSelected == index ? COLOURS.black : COLOURS.white,
              }}
            />
          </View>
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
        onPress={() =>
          navigation.push("details", {
            name: data.name,
            price: data.price,
            image: data.image,
            size: data.size,
            ID: data.ID,
            Qty: data.Qty,
            crust: data.crust,
            delivery: data.delivery,
            ingredients: data.ingredients,
            isTopOfTheWeek: data.isTopOfTheWeek,
            navigation: navigation,
          })
        }
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
                <Text
                  style={{
                    fontSize: 18,
                    color: COLOURS.black,
                    opacity: 0.5,
                    marginLeft: 100,
                  }}
                >
                  {" "}
                  Qty:
                  {data.Qty}
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
                  Price:
                  {data.price}
                </Text>
              </View>

              <View
                style={{
                  marginLeft: 30,
                  marginTop: 20,
                }}
              >
                <Entypo
                  name="dots-three-vertical"
                  style={{ fontSize: 18, color: COLOURS.black, marginLeft: 80 }}
                />
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
        <MyHeader2
        title= 'Inventory'
        right="more-vertical"
        optionalBtn="shopping-cart"
        onRightPress={() => console.log('right')}
      />

          <View className="flex-row">
            <Text
              style={{
                paddingTop: 20,
                paddingHorizontal: 20,
                fontSize: 18,
                fontWeight: "700",
                color: COLOURS.black,
                letterSpacing: 1,
              }}
            >
              Categories
            </Text>
            <TouchableOpacity
              onPress={() => navigation.navigate("ResAddCategory")}
              style={{
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Text
                style={{
                  paddingTop: 20,
                  paddingHorizontal: 20,
                  fontSize: 14,
                  fontWeight: "100",
                  color: COLOURS.black,
                  letterSpacing: 1,
                  color: COLOURS.resprimary,
                  marginLeft: 150,
                  
                }}
              >
                Add more categories
              </Text>
            </TouchableOpacity>
          </View>

          <FlatList
            horizontal={true}
            data={InventoryItems}
            renderItem={renderCategories}
            showsHorizontalScrollIndicator={false}
          />
          <Text
            style={{
              paddingTop: 20,
              paddingHorizontal: 20,
              fontSize: 18,
              fontWeight: "700",
              color: COLOURS.black,
            }}
          >
            Items
          </Text>
          {InventoryItems[currentSelected].items.map(renderItems)}
        </View>
      </ScrollView>
      <TouchableOpacity
        onPress={() => navigation.navigate("ResAddInventoryItems")}
        style={{
          width: 50,
          height: 50,
          backgroundColor: COLOURS.resprimary,
          borderTopRightRadius: 20,
          borderBottomLeftRadius: 20,
          borderTopLeftRadius: 20,
          borderBottomRightRadius: 20,
          justifyContent: "center",
          alignItems: "center",
          position: "absolute",
          bottom: 90,
          right: 20,
          marginLeft: 400,
        }}
      >
        <Entypo name="plus" style={{ fontSize: 18, color: COLOURS.black }} />
      </TouchableOpacity>
    </View>
  );
};

export default ResInventory;
