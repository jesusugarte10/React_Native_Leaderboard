import { StatusBar } from 'expo-status-bar';
import React, {useRef, useState, useEffect, useMemo} from 'react';
import { FlatList, SafeAreaView, StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';
import ListItems from '../components/listItems';
import Chart from '../components/Chart';
import{BottomSheetModal, BottomSheetModalProvider} from '@gorhom/bottom-sheet';
import {getMarkedData} from '../services/CryptoService';

const SecondScreen = ({navigation}) => {

  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchMarkedData = async () => {
      const marketData = await getMarkedData();
      setData(marketData);
    }
    fetchMarkedData();
  },[])

  //Use ListHeader if I want the Title to move 
  const[selectedCoinData, setSelectedCoinData] = useState(null);

  const bottomSheetModalRef = useRef(null);
  const snapPoints = useMemo(() => ['45%'], []); //I can have the 25% active If I want
  //The percentage means what percentage of the screen is covered

  const openModal = (item) => {
    setSelectedCoinData(item);
    bottomSheetModalRef.current.present();
  }

  const openAdd =() =>{
    bottomSheetModalRef.current.present();
  }

  return (
    <BottomSheetModalProvider>
      <SafeAreaView style={styles.container}>
        <View style={styles.titleView}>
          <Text style ={styles.LargeTitle}>My Market</Text>
          <TouchableOpacity style={styles.Button} onPress={()=>openAdd()}>
              <Image style={styles.Image} source={require("../assets/addImage.png")}/>
            </TouchableOpacity>
        </View>
        <StatusBar style="auto" />
        <View style={styles.divider}/>


        <FlatList
          keyExtractor = {(item) => item.id}
          data = {data} //SAMPLE_DATA can be used too
          renderItem={({item}) => (
            <ListItems 
              name={item.name} 
              symbol={item.symbol} 
              currentPrice={item.current_price} 
              priceChangePercentage7d={item.price_change_percentage_7d_in_currency} 
              logoUrl={item.image}
              onPress={() => openModal(item)}
            />
          )}
        />
      </SafeAreaView>

      {/*Pup Up Window Section */}
      <BottomSheetModal
        ref={bottomSheetModalRef}
        index={0}
        snapPoints={snapPoints}
        style={styles.bottomeSheet}
      >


        { selectedCoinData ? ( 
        <Chart 
          currentPrice={selectedCoinData.current_price}
          logoUrl={selectedCoinData.image}
          name={selectedCoinData.name}
          symbol={selectedCoinData.symbol}
          priceChangePercentage7d={selectedCoinData.price_change_percentage_7d_in_currency}
          sparkline={selectedCoinData.sparkline_in_7d.price}
        />
        )
        : null}
      
      </BottomSheetModal>
    </BottomSheetModalProvider>
  );
}
export default SecondScreen;


//Style
const styles = StyleSheet.create({

  Image:{
    height: 30,
    width: 30,
  },

  Button:{
    marginHorizontal :160
  },

  container: {
    flex: 1,
    backgroundColor: '#fff',
  },

  divider:{
    height: StyleSheet.hairlineWidth,
    backgroundColor: "black",
    marginHorizontal: 16,
    marginTop: 16,
  },

  titleView:{
    marginTop: 10,
    flexDirection:'row',
  },

  LargeTitle:{
    fontSize: 24,
    fontWeight: "bold",
    paddingHorizontal:30,
  },

  bottomeSheet:{
    shadowColor: "black",
    shadowOffset:{
      width:0,
      height:-4,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
});
