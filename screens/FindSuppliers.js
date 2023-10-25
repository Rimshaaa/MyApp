import React, { useState } from "react";
import {
  View,
  Text,
  ScrollView,
  Image,
  TouchableOpacity,
  FlatList,
} from "react-native";
import { Categories, COLOURS } from "../components/items2";
import MyHeader2 from "../components/MyHeader2";


const FindSuppliers = ({ navigation }) => {
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
            height: 40,
            justifyContent: "space-evenly",
            alignItems: "center",
            backgroundColor:
            currentSelected == index ? COLOURS.resprimary : COLOURS.white,
            borderRadius: 20,
            margin: 10,
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
        onPress={() =>
          navigation.push("SupplierProfiles", {
            name: data.name,
            price: data.price,
            image: data.image,
            ID: data.ID,
            Qty: data.Qty,
            rating: data.rating,
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
                  Rating: 
                  {data.rating}
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
        <MyHeader2
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
                marginBottom: 10
              }}
            >
              Supplier Categories
            </Text>
        
          </View>

          <FlatList
            horizontal={true}
            data={Categories}
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
            Suppliers List
          </Text>
          {Categories[currentSelected].items.map(renderItems)}
        </View>
      </ScrollView>
     
    </View>
  );
};

export default FindSuppliers;
