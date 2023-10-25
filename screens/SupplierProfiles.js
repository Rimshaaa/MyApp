import React, {useState} from 'react';
  import {View, Text, Image, TextInput, FlatList, TouchableOpacity, } from 'react-native';
//import {COLOURS} from '../components/items2';
import MyHeader2 from '../components/MyHeader2';
import {Categories, COLOURS} from '../components/items';
import FontAwesome from 'react-native-vector-icons/FontAwesome5';
import Entypo from 'react-native-vector-icons/Entypo';


const SupplierProfiles = ({route, navigation}) => {
  const {
    name,
    price,
    image,
    rating,
    Qty,
    ID,
  } = route.params;
  const [currentSelected, setCurrentSelected] = useState([0]);


  const renderItems = (data, index) => {
    return (
      <View className="flex-row"   style={{numColumns: 2}}>
      <TouchableOpacity
        key={index}
        activeOpacity={0.9}
        
        style={{
          width: '100%',
          height: 150,
          marginLeft: 10,
          justifyContent: 'space-between',
          alignItems: 'center',

          
        }}
        onPress={() =>
          navigation.push('DetailsScreen', {
            name: data.name,
            price: data.price,
            image: data.image,
            ID: data.ID,
            Qty: data.Qty,
            navigation: navigation,
          })
        }>
        <View
          style={{
            width: '50%',
            height: 140,
            backgroundColor: COLOURS.lightGray,
            borderRadius: 10,
            elevation: 4,
            position: 'relative',
            padding: 15,
            //flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
           
            
          }}>
     

          <View style={{width: 70, height: 70, }}>
            <Image
              source={data.image}
              style={{
                marginTop: 0,
                width: '90%',
                height: '90%',
                resizeMode: 'contain',
              }}
            />
          </View>

        
          <View className="flex" style={{}}>
      
          <Text
              style={{
                fontSize: 20,
                color: COLOURS.black,
              }}> 
              {data.name}
            </Text>

            <Text
              style={{
                fontSize: 18,
                color: COLOURS.black,
              }}> Rs  
              {data.price}
            </Text>
            </View>
        
 
        </View>
      </TouchableOpacity>
      </View>  
    );
  };


  return (
    <View
      style={{
        width: '100%',
        height: '100%',
        backgroundColor: COLOURS.white,
        flexDirection: 'column',   
      }}>

    <MyHeader2
        title= 'Supplier Profile'
        right="more-vertical"
        optionalBtn="shopping-cart"
        onRightPress={() => console.log('right')}
      />

     <View
      style={{
        width: '100%',
        height: '20%',
        backgroundColor: COLOURS.lightGray,
        flexDirection: 'column',  
      }}>
       <View className="flex-row">
      <View
          style={{
            marginTop: 10,
            width: 200,
            height: 200,
            alignItems: 'center',
       
          }}>
          <Image
            source={image}
            style={{
              width: '70%',
              height: '70%',
              resizeMode: 'contain',
            }}
          />
        </View>

        <View
        style={{
          flexDirection: 'row',
          width: '100%',
          alignItems: 'center',
        }}>
        <View style={{paddingHorizontal: 0, marginBottom:40}}>
        <View className= "flex-row" style={{paddingVertical: 0}}>
        <Text
              style={{
                fontSize: 20,
                color: COLOURS.black,
                opacity: 0.8
              }}>
              Name:
            </Text>
            <TextInput
              style={{
                paddingHorizontal: 10,
                fontSize: 20,
                color: COLOURS.black,
                fontWeight: '600',
                opacity: 0.6
              }}>
              {name} 
            </TextInput>
          </View>

           <View className= "flex-row" style={{paddingVertical: 0}}>
            <Text
              style={{
                fontSize: 20,
                color: COLOURS.black,
                opacity: 0.8
              }}>
              ID:
            </Text>
            <TextInput
              style={{
                paddingHorizontal: 10,
                fontSize: 20,
                color: COLOURS.black,
                fontWeight: '600',
                opacity: 0.6
              }}>
              {ID} 
            </TextInput>
          </View>

          <View className= "flex-row" style={{paddingVertical: 0}}>
            <Text
              style={{
                fontSize: 20,
                color: COLOURS.black,
                opacity: 0.8
              }}>
              Rating:
            </Text>
            <TextInput
              style={{
                paddingHorizontal: 10,
                fontSize: 20,
                color: COLOURS.black,
                fontWeight: '600',
                opacity: 0.6
              }}>
              {rating} 
            </TextInput>
          </View>

          <View className= "flex-row" style={{paddingVertical: 0}}>
            <Text
              style={{
                fontSize: 20,
                color: COLOURS.black,
                opacity: 0.8
              }}>
              Total Orders: 
            </Text>
            <TextInput
              style={{
                paddingHorizontal: 10,
                fontSize: 20,
                color: COLOURS.black,
                fontWeight: '600',
                opacity: 0.6
              }}>
              {ID} 
            </TextInput>
          </View>
         </View>
       </View>
    </View> 

</View>

<View>
<View className="bg-purple-500  items-centre" style={{color: COLOURS.resprimary, height:50}}>
<Text style={{fontSize: 24, marginLeft:190, color: COLOURS.black, marginTop:10}}>My Store</Text>
</View> 

         
</View>

            <Text
            style={{
              paddingTop: 20,
              paddingHorizontal: 20,
              fontSize: 22,
              fontWeight: '700',
              color: COLOURS.black,
            }}>
            Items
          </Text>

          {Categories[currentSelected].items.map(renderItems)}

</View>
  );
};

export default SupplierProfiles;