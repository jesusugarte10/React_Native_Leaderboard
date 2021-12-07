import React from 'react';
import {StyleSheet} from 'react-native';

const colors = ['gold', 'silver', 'brown'];
const quotes = ['The Big Boss', 'Never Say Never', 'Almost There'];

const typos = StyleSheet.create({
  font: {fontFamily: 'Sancreek', color: '#fff'},
  title: {fontSize: 50, marginBottom: 10},
  subtitle: {fontSize: 20, marginBottom: 45},
});

const styles = StyleSheet.create({
  body: {
    paddingTop: 60,
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: '100%',
  },
  card: {
    paddingHorizontal:20,
    marginBottom: 30,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  list: {width: '100%'},
  page: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  score: {alignItems: 'flex-end'},
  user: {flexDirection: 'row', alignItems: 'center'},
});

export {colors, quotes, typos, styles};