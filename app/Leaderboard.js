import React, {useState, useEffect, useCallback} from 'react';
import {Text, View, StyleSheet, TouchableOpacity, FlatList, RefreshControl} from 'react-native';
import axios from 'axios'

import ScrollingBackground from './ScrollingBackground';
import {colors, quotes, styles, typos} from './styles';

export async function getLeaderboard() {
  try {
    const response = await axios.post('https://dungeonride.herokuapp.com/api/getLeaderboard');
    return response.data.leaderboard;
  } catch (e) {
    console.log(e.toString());
    return [{username: '', score: -1, position: 0}];
  }
}

export function listItem(name, score, position) {
  var best = 1 <= position && position <= 3;
  var overflow = score > 999999;

  var color = best ? colors[position-1] : 'white';
  var quote = best ? quotes[position-1] : '';

  var cTypos = StyleSheet.create({
    name: {fontSize: 20},
    pos: {fontSize: 50, fontWeight: 'bold', color: color},
    quote: {fontSize: 15, color: color},
    score: {fontSize: 30, fontWeight: 'bold'},
  });

  if (score === -1) return (
    <View style={styles.card}>
      <Text style={[typos.font, cTypos.score]}>Unable to reach network. Try again later.</Text>
    </View>
  );

  return (
    <TouchableOpacity>
      <View animation='fadeInUpBig' style={styles.card}>
        <View style={styles.user}>
          <Text style={[typos.font, cTypos.pos]}>{position}</Text>
          <View style={{marginLeft: 10}}>
            <Text style={[typos.font, cTypos.name]}>{name}</Text>
            {!best ? <View/> : <Text style={[typos.font, cTypos.quote]}>{quote}</Text>}
          </View>
        </View>
        <View style={styles.score}>
          <Text style={[typos.font, cTypos.score]}>{overflow ? 999999 : score}{!overflow ? '' : '+'}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
}

export default function Leaderboard() {
  const [data, setData] = useState([]);
  const [refreshing, setRefreshing] = useState(false);
  const getData = async () => {
    setRefreshing(true);
    setData(await getLeaderboard());
    setRefreshing(false);
  }

  const onRefresh = useCallback(getData, []);
  useEffect(() => {getData();}, []);

  return (
    <View style={styles.page}>
      <ScrollingBackground
        style={{}}
        speed={10}
        direction={'left'}
        images={[require('./assets/dungeon.jpg')]}
      />

      <View style={styles.body}>
        <Text style={[typos.font, typos.title]}>Dungeon Run</Text>
        <Text style={[typos.font, typos.subtitle]}>Leaderboard</Text>
        <FlatList
          style={styles.list}
          refreshControl = {<RefreshControl refreshing={refreshing} onRefresh={onRefresh}/>}
          keyExtractor = {(item) => item.username}
          data = {data}
          renderItem={({item}) => listItem(item.username, item.score, item.position)}
        />
      </View>
    </View>
  );
}