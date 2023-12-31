import { View, Text, Image, ScrollView, TouchableOpacity, TextInput, FlatList } from 'react-native'
import React, { useEffect, useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import {themeColors} from '../theme';
import * as Icon from "react-native-feather";
import { StatusBar } from 'expo-status-bar';
import { categories2, coffeeItems, theme } from '../constants';
import Carousel from 'react-native-snap-carousel';
import CoffeeCard from '../components/coffeeCard';
import { BellIcon, MagnifyingGlassIcon } from 'react-native-heroicons/outline'
import { MapPinIcon } from 'react-native-heroicons/solid'
import MyHeader2 from '../components/MyHeader2';
import { useNavigation } from '@react-navigation/native'
import Colors from '../constants/Colors';



export default function RestaurantDashboard() {
  const [activeCategory, setActiveCategory] = useState(1);
  const navigation = useNavigation();

  return (
    <View className="flex-1 bg-white">
      
      <StatusBar />

      <Image 
        source={require('../assets/images/bgpic.jpg')} 
        style={{height: 200}} 
        className="w-full absolute -top-5 opacity-10" />

        <MyHeader2
        right="more-vertical"
        optionalBtn="shopping-cart"
        onRightPress={() => console.log('right')}
      />
      <SafeAreaView className="flex-1">
      
      <View className= "flex items-center">

      <Text style={{fontSize: 24, fontWeight: 'bold'}}></Text>
      </View>

        {/* search bar */}
        <View className="mx-5 shadow">
          <View className="flex-row items-center rounded-full p-1 bg-[#e6e6e6]">
            <TextInput placeholder='Search Suppliers' className="p-4 flex-1 font-semibold text-gray-700" />
            <TouchableOpacity 
              className="rounded-full p-2" 
              style={{backgroundColor: themeColors.resbg}}>
              <MagnifyingGlassIcon size="25" strokeWidth={2} color="white" />
            </TouchableOpacity>
          </View>
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
                onPress={()=> setActiveCategory(item.id) & navigation.navigate('FruitList')} 
                style={{backgroundColor: isActive? themeColors.resbg: 'rgba(0,0,0,0.07)'}} 
                className="p-4 px-5 mr-2 rounded-full shadow">
                  <Text className={"font-semibold " + activeTextClass}>{item.title}</Text>
                </TouchableOpacity>
              )

              }
              if(item.id === 2) {
                return (
                  <TouchableOpacity 
                  onPress={()=> setActiveCategory(item.id) & navigation.navigate('VegList')} 
                  style={{backgroundColor: isActive? themeColors.resbg: 'rgba(0,0,0,0.07)'}} 
                  className="p-4 px-5 mr-2 rounded-full shadow">
                    <Text className={"font-semibold " + activeTextClass}>{item.title}</Text>
                  </TouchableOpacity>
                )
                
                }

                if(item.id === 3) {
                  return (
                    <TouchableOpacity 
                    onPress={()=> setActiveCategory(item.id) & navigation.navigate('MeatList')} 
                    style={{backgroundColor: isActive? themeColors.resbg: 'rgba(0,0,0,0.07)'}} 
                    className="p-4 px-5 mr-2 rounded-full shadow">
                      <Text className={"font-semibold " + activeTextClass}>{item.title}</Text>
                    </TouchableOpacity>
                  )
                  
                  }

                  if(item.id === 4) {
                    return (
                      <TouchableOpacity 
                      onPress={()=> setActiveCategory(item.id) & navigation.navigate('SeaFoodList')} 
                      style={{backgroundColor: isActive? themeColors.resbg: 'rgba(0,0,0,0.07)'}} 
                      className="p-4 px-5 mr-2 rounded-full shadow">
                        <Text className={"font-semibold " + activeTextClass}>{item.title}</Text>
                      </TouchableOpacity>
                    )
                    
                    }

                    if(item.id === 5) {
                      return (
                        <TouchableOpacity 
                        onPress={()=> setActiveCategory(item.id) & navigation.navigate('SpicesList')} 
                        style={{backgroundColor: isActive? themeColors.resbg: 'rgba(0,0,0,0.07)'}} 
                        className="p-4 px-5 mr-2 rounded-full shadow">
                          <Text className={"font-semibold " + activeTextClass}>{item.title}</Text>
                        </TouchableOpacity>
                      )
                      
                      }

                      if(item.id === 6) {
                        return (
                          <TouchableOpacity 
                          onPress={()=> setActiveCategory(item.id) & navigation.navigate('DairyProductList')} 
                          style={{backgroundColor: isActive? themeColors.resbg: 'rgba(0,0,0,0.07)'}} 
                          className="p-4 px-5 mr-2 rounded-full shadow">
                            <Text className={"font-semibold " + activeTextClass}>{item.title}</Text>
                          </TouchableOpacity>
                        )
                        
                        }
            }}
          />
        </View>
          */}

          {/* category cards
        <View className="mt-11 py-2">
          <Carousel  style = {{backgroundColor: themeColors.resbg}}         
            containerCustomStyle={{overflow: 'visible'}}
            data={coffeeItems}
            renderItem={({item})=> <CoffeeCard item={item}/>}
            firstItem={1}
            loop={true}
            inactiveSlideScale={0.77}
            inactiveSlideOpacity={0.75}
            sliderWidth={400}
            itemWidth={260}
            slideStyle={{display: 'flex', alignItems: 'center', marginTop:40}}
            
          />
        </View>
 */}

<View > 
<TouchableOpacity onPress={()=> navigation.navigate('GenerateRequest')}>
<View className="flex-row items-center p-3 mb-2 mt-20 bg-purple-500" style={{ height: 200, width: 460,  marginLeft: 10, borderRadius:40, borderWidth: 1}}>

<Image source={require('../assets/images/supplier.png')} style={{width: 180, height: 180}} />
<View>
<Text style={{fontSize: 28, marginLeft:30 ,marginBottom:10, marginTop:20, fontWeight: 'bold', color: Colors.black}}>Find Supplier</Text>

</View>
</View>
</TouchableOpacity>

<TouchableOpacity  onPress={()=> navigation.navigate('FindSuppliers')}>
<View className="flex-row items-center p-3 mb-2 mx-2 ml-14 bg-purple-500 " style={{ height: 200, width: 460,  marginLeft: 10, borderRadius:40, borderWidth: 1}}>
<Image source={require('../assets/images/explore.png')} style={{width: 160, height: 150}} />
<View>
<Text style={{fontSize: 28, marginLeft:30, marginBottom:10, marginTop:20, fontWeight: 'bold', color: Colors.black}}>Direct Purchase</Text>
     
</View>
</View>
</TouchableOpacity>
</View> 
    </SafeAreaView>
    </View>


  )

}
