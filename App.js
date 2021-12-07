import React from 'react';
import {useFonts} from 'expo-font';
import AppLoading from 'expo-app-loading';

import Leaderboard from './app/Leaderboard';

export default function App() {
  var [fontsLoaded] = useFonts({
    'Sancreek': require('./app/assets/fonts/Sancreek-Regular.ttf'),
  });

  if (!fontsLoaded) return <AppLoading/>;
  else return <Leaderboard/>;
}