import React, { useState, useEffect} from 'react';
import { FlatList, SafeAreaView, StyleSheet, Text, View, RefreshControl} from 'react-native';
import ListItems from './components/listItems';
import {getMarkedData} from './services/CryptoService';


const App = () => {

  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchMarkedData = async () => {
      const marketData = await getMarkedData();
      setData(marketData);
    }
    fetchMarkedData();
  },[])

  return (
      <SafeAreaView>
        <View style={styles.titleView}>
          <Text style ={styles.LargeTitle}>Top Score Leaderboard</Text>
        </View>
        <View style={styles.divider}/>

        <FlatList
          refreshControl = {<RefreshControl/>}
          keyExtractor = {(item) => item.username}
          data = {data} //SAMPLE_DATA can be used too
          renderItem={({item}) => (
            <ListItems 
              name={item.username} 
              score={item.score} 
              position= {item.position} 
            />
          )}
        />
      </SafeAreaView>
  );
}
export default App;


//Style
const styles = StyleSheet.create({

  Image:{
    height: 30,
    width: 30,
  },

  Button:{
    alignSelf:'flex-end'
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
