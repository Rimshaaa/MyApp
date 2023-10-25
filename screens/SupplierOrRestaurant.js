import { View, Text, Image, TouchableOpacity, ImageBackground } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { themeColors } from '../theme'
import { useNavigation } from '@react-navigation/native'

export default function WelcomeScreen() {
    const navigation = useNavigation();
  return (
    <SafeAreaView className="flex-1" style={{backgroundColor: themeColors.bg}}>
        <View className="flex-row justify-center mt-48">
                <Image source={require("../assets/images/logo4.png")}
                    style={{width: 400, height: 250}} />
            </View>

    
        
            <View className="flex space-y-4" style={{marginBottom:90}}>
            <Text 
                className=" text-purple-500 text-2xl text-center"style={{marginTop:150}}>
              Getting Started!
            </Text>
                <TouchableOpacity
                    onPress={()=> navigation.navigate('ResWelcomeScreen')}
                    className="py-3 bg-amber-500  mx-7"style={{  borderRadius: 90, width:350, marginLeft:70}}>
                        <Text 
               className="text-xl  text-center text-black">
                            Restaurant
                        </Text>
                </TouchableOpacity>

                <TouchableOpacity
                    onPress={()=> navigation.navigate('Welcome')}
                    className="py-3 bg-amber-500 mx-7" style={{ borderRadius: 90, width:350, marginLeft:70}}>
                        <Text 
                            className="text-xl text-center text-black"
                        >
                            Supplier
                        </Text>
                </TouchableOpacity>
            </View>

 </SafeAreaView>   

  )
}