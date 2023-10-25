/*import { View, Text, TouchableOpacity, Image, TextInput, ScrollView } from 'react-native'
import React from 'react'
import { themeColors } from '../theme'
import { SafeAreaView } from 'react-native-safe-area-context'
import {ArrowLeftIcon} from 'react-native-heroicons/solid';
import { useNavigation } from '@react-navigation/native';
import MyHeader from '../components/MyHeader';

// subscribe for more videos like this :)
export default function Profile() {
    const navigation = useNavigation();
  return (
    <View className="flex-1 bg-white" style={{backgroundColor: themeColors.bg}}>
         <MyHeader
        Sidebar
        right="more-vertical"
        title="Profile"
        optionalBtn="shopping-cart"
        onRightPress={() => console.log('right')}
      />


    <ScrollView>
      <SafeAreaView className="flex mb-32">
    
   
        <View className="flex-row justify-center">
            <Image source={require('../assets/images/avatar.png')} 
                style={{width: 165, height: 150, marginTop: 10}} />
        </View>
        <View className="flex-row">
        <TouchableOpacity  onPress={()=> navigation.navigate('MyProfile')}
                className="py-3 bg-amber-500 rounded-xl"  style={{marginLeft:40, marginTop:40, width: 180}}
            >
                <Text className="font-xl font-bold text-center text-black"  >
                    Edit Profile 
                </Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={()=> navigation.navigate('UploadPortfolio')}
                className="py-3 bg-amber-500 rounded-xl"  style={{marginLeft:30, marginTop:40, width: 180}}
            >
                <Text className="font-xl font-bold text-center text-black">
                   Create Portfolio
                </Text>
            </TouchableOpacity>
        </View>

        <View className="flex-1 bg-white px-8 pt-8"
        style={{borderTopLeftRadius: 50, borderTopRightRadius: 50}}
      >
        <View className="form space-y-2">
            
        <TouchableOpacity
                className="py-3 bg-gray-300 mt-12" style={{ marginTop:10, marginBottom:20, height: 60}}
            >
                <Text className="font-4xl font-bold text-center text-black" style={{fontSize:24}}>
                    View more options
                </Text>
            </TouchableOpacity>

        <TouchableOpacity  onPress={()=> navigation.navigate('Portfolio')}
                className="py-3 bg-amber-500 rounded-xl" style={{marginTop: 10, height: 60}}
            >
                <Text className="font-xl  text-center text-black" style={{fontSize:18}}>
                View Portfolio 
                </Text>
            </TouchableOpacity>
           
           <TouchableOpacity onPress={()=> navigation.navigate('CreateInventory')}
                className="py-3 bg-amber-500 rounded-xl" style={{marginTop:40, height: 60}}
            >
                <Text className="font-xl text-center text-black" style={{fontSize:18}}>
                   Create Inventory
                </Text>
            </TouchableOpacity>
         
         <TouchableOpacity onPress={()=> navigation.navigate('CreateStore')}
                className="py-3 bg-amber-500 rounded-xl" style={{marginTop:40, height: 60}}
            >
                <Text className="font-xl text-center text-black" style={{fontSize:18}}>
                Create Store 
                </Text>
            </TouchableOpacity>
           
           <TouchableOpacity onPress={()=> navigation.navigate('OrderTracking')}
                className="py-3 bg-amber-500 rounded-xl" style={{marginTop:40, height: 60}}
            >
                <Text className="font-xl text-center text-black" style={{fontSize:18}}>
                Order Tracking 
                </Text>
            </TouchableOpacity>
           
        
            
           
        </View>
       
      
       
      </View>

      </SafeAreaView>
     
      </ScrollView>
    </View>
  )
}*/

import React from 'react';
import {View, Text, TouchableOpacity, Image, ScrollView, TextInput} from 'react-native';
import {COLOURS} from '../components/items';
import FontAwesome from 'react-native-vector-icons/FontAwesome5';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';
import MyHeader from '../components/MyHeader';
import { color } from 'react-native-reanimated';


const Profile = ({route, navigation}) => {


  return (
  <ScrollView>
    <View
      style={{
        width: '100%',
        height: '100%',
        backgroundColor: COLOURS.white,
        flexDirection: 'column',
      
        
      }}>
      <MyHeader
    Sidebar
    title= 'Profile'
    right="more-vertical"
    optionalBtn="shopping-cart"
    onRightPress={() => console.log('right')}
  />
      <View
          style={{
            marginTop: 10,
            width: 150,
            height: 150,
            alignItems: 'center',
            marginLeft:170,
            borderWidth:  2,
            borderColor: COLOURS.lightGray,
            borderBottomLeftRadius:200,
            borderBottomRightRadius:200,
            borderTopLeftRadius:200,
            borderTopRightRadius:200

          }}>
          <Image
            source={require('../assets/images/avatar.png')} 
            style={{
              width: '60%',
              height: '90%',
              resizeMode: 'contain',
            }}
          />

             <View
              style={{
                width: 50,
                height: 50,
                backgroundColor: COLOURS.lightGray,
                borderTopRightRadius: 100,
                borderBottomLeftRadius: 100,
                borderTopLeftRadius: 100,
                borderBottomRightRadius:100,
                justifyContent: 'center',
                alignItems: 'center',
                position: 'absolute',
                bottom: 90,
                top:110, 
                right: 10, 
                marginLeft: 400
              }}>
              <Entypo
                name="camera"
                style={{fontSize: 18, color: COLOURS.black}}
              />
            </View>
        </View>


  
        <View style={{paddingHorizontal: 20}}>
        <View style={{paddingVertical: 20}}>
            <Text
              style={{
                fontSize: 16,
                color: COLOURS.black,
                opacity: 0.6
              
              }}>
              Name
            </Text>
            <TextInput
              style={{
                fontSize: 20,
                borderBottomWidth: 2,
                width: 440,
                height: 50,
                borderColor: COLOURS.lightGray,
                color: COLOURS.black,
                fontWeight: '600',
                opacity: 0.8
              }}>
              Rimsha Shabbir
            </TextInput>
          </View>

           <View style={{paddingVertical: 20}}>
            <Text
              style={{
                fontSize: 16,
                color: COLOURS.black,
                opacity: 0.6
              
              }}>
              Email  </Text>
            <TextInput
              style={{
                
                fontSize: 20,
                borderBottomWidth: 2,
                width: 440,
                height: 50,
                borderColor: COLOURS.lightGray,
                color: COLOURS.black,
                fontWeight: '600',
                opacity: 0.8
              }}>
              rimsha@gmail.com
            </TextInput>
          </View>

          <View style={{paddingVertical: 20}}>
            <Text
              style={{
                fontSize: 16,
                color: COLOURS.black,
                opacity: 0.6
              
              }}>
              Contact Number
            </Text>
            <TextInput
              style={{
               
                fontSize: 20,
                borderBottomWidth: 2,
                width: 440,
                height: 50,
                borderColor: COLOURS.lightGray,
                color: COLOURS.black,
                fontWeight: '600',
                opacity: 0.8
              }}>
              81289128908 
            </TextInput>
          </View>

          <View style={{paddingVertical: 20}}>
            <Text
              style={{
                fontSize: 16,
                color: COLOURS.black,
                opacity: 0.6
              
              }}>
              Address
            </Text>
            <TextInput
              style={{
            
                fontSize: 20,
                borderBottomWidth: 2,
                width: 440,
                height: 50,
                borderColor: COLOURS.lightGray,
                color: COLOURS.black,
                fontWeight: '600',
                opacity: 0.8
              }}>
              Rawalpindi, Pakistan 
            </TextInput>
          </View>
          

        </View>

   
     
      <View
        style={{
          position: 'relative',
          width: '100%',
          bottom: 0,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={{
            width: 450,
            height: 50,
            backgroundColor: COLOURS.accent, 
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'row',
            marginTop:20,
            marginBottom: 90
          }}>
          <Text
            style={{
              fontSize: 16,
              fontWeight: 'bold',
              color: COLOURS.black,
              letterSpacing: 1,
              marginRight: 10,
            }}>
            Save Changes
          </Text>
        
        </TouchableOpacity>
      </View>
    </View>
    </ScrollView>
  );
};

export default Profile;
