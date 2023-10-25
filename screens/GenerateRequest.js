import { ImageBackground, View, Text, StatusBar, TouchableOpacity, Image, SafeAreaView, TextInput,  Button, Alert, ScrollView } from 'react-native';
import React, { useState } from 'react'
import { useNavigation } from '@react-navigation/native';
import { themeColors } from '../theme';
import * as Icon from "react-native-feather";
import { request } from '../constants';
import MyHeader2 from '../components/MyHeader2';
import { MagnifyingGlassIcon } from 'react-native-heroicons/outline'
import DropDownPicker from 'react-native-dropdown-picker';
import Slider from 'react-native-slider';
import { Animated } from 'react-native';



export default function GenerateRequest() {
  const navigation = useNavigation();
  const [minPrice, setMinPrice] = useState(0); // Initial minimum price
  const [maxPrice, setMaxPrice] = useState(1000); // Initial maximum price
  //const [minPrice] = useState(new Animated.Value(0));
  //const [maxPrice] = useState(new Animated.Value(1000));


  return (
  <View className="flex-1">
 
   <MyHeader2
    title= 'Request Generation'
    right="more-vertical"
    optionalBtn="shopping-cart"
    onRightPress={() => console.log('right')}
  />
 <ScrollView>
 <ImageBackground source={require('../assets/images/map.png')} style={{height: 500, width: 480}}>
  
    {/* search bar */}
    <View className="mx-5 mt-5 shadow">
          <View className="flex-row items-center rounded-full p-1 bg-[#e6e6e6]">
            <TextInput placeholder='Search Suppliers' className="p-4 flex-1 font-semibold text-gray-700" />
            <TouchableOpacity 
              className="rounded-full p-2" 
              style={{backgroundColor: themeColors.resbg}}>
              <MagnifyingGlassIcon size="25" strokeWidth={2} color="white" />
            </TouchableOpacity>
          </View>
        </View>
</ImageBackground>
<View className="flex-1 bg-white px-8 pt-8" style={{borderTopLeftRadius: 50, borderTopRightRadius: 50}} >
  <View className="mb-32">
  
            <DropDownPicker
           items={[
           { label: 'Category 1', value: 'category1' },
           { label: 'Category 2', value: 'category2' },
           { label: 'Category 3', value: 'category3' },
            // Add more categories as needed
            ]}
          placeholder="Select Category"
          containerStyle={{ height: 40 }}
          style={{ backgroundColor: '#e6e6e6', borderWidth: 0 }}
          dropDownStyle={{ backgroundColor: '#e6e6e6' }}
          onChangeItem={(item) => {
    // Handle the selected category here
    console.log(item.value); // You can store the selected category value in a state variable
  }}
/>

          <DropDownPicker
           items={[
           { label: 'Category 1', value: 'category1' },
           { label: 'Category 2', value: 'category2' },
           { label: 'Category 3', value: 'category3' },
            // Add more categories as needed
            ]}
          placeholder="Select Item"
          containerStyle={{ height: 40 }}
          style={{ backgroundColor: '#e6e6e6', borderWidth: 0, marginTop:20, marginBottom:20 }}
          dropDownStyle={{ backgroundColor: '#e6e6e6' }}
          onChangeItem={(item) => {
    // Handle the selected category here
    console.log(item.value); // You can store the selected category value in a state variable
  }}
/>
  {/* Enter price 
  <Text className="text-gray-700 ml-1">Select Price Range</Text>
  <View style={{ flex: 1, marginLeft: 10, marginRight: 10 }}>
    <Slider
      value={[minPrice, maxPrice]}
      onValueChange={(values) => {
        setMinPrice(values[0]);
        setMaxPrice(values[1]);
      }}
      step={1} // You can adjust the step as needed
      minimumValue={0} // Minimum possible price
      maximumValue={1000} // Maximum possible price
    />
    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
      <Text>{minPrice}</Text>
      <Text>{maxPrice}</Text>
    </View>
  </View>
*/}
           <Text className="text-black ml-1" style={{marginTop:50, fontSize:16}}>Enter price</Text>
            <TextInput 
                className="p-2 bg-gray-100 text-black rounded-2xl"
                //value="john snow"
                placeholder='Enter price'  style={{ backgroundColor: '#e6e6e6', borderWidth: 0, marginTop:10, marginBottom:20 }}
            />
           <Text className="text-black ml-1" style={{marginTop:10, fontSize:16}}>Enter Details</Text>
            <TextInput 
                numberOfLines={7}
                className="p-2 bg-gray-100 text-black rounded-2xl"
                  style={{ backgroundColor: '#e6e6e6', borderWidth: 0, marginTop:10, marginBottom:20 }}
            />
       
            <TouchableOpacity onPress={()=> navigation.navigate('SupplierBidRequest')}
                className="py-3 bg-purple-500 rounded-full"
            >
                <Text className="font-xl font-bold text-xl text-center text-black">
                  Place Order
                </Text>
            </TouchableOpacity>
            <TouchableOpacity
                className="py-3 bg-gray-300 rounded-full"
            >
                <Text className="font-xl font-bold text-xl text-center text-black">
                    Cancel
                </Text>
            </TouchableOpacity>
        </View>
      </View>
    </ScrollView> 
  </View>
  )
}