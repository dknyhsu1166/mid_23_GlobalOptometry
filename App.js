import React from 'react';
import { Platform } from "react-native";
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { GluestackUIProvider } from "@gluestack-ui/themed";
import { config } from "@gluestack-ui/config";
import 'react-native-gesture-handler';
import { View, Text, useColorScheme } from 'react-native';
import store from "./src/redux/store";
import { Provider } from "react-redux";
import { useEffect } from 'react';
//import * as Updates from 'expo-updates';

import Navigation from './src/navigation';

export default function App() {
  {/*
  async function onFetchUpdateAsync() {
    try {
      const update = await Updates.checkForUpdateAsync();

      if (update.isAvailable) {
        await Updates.fetchUpdateAsync();
        await Updates.reloadAsync();
      }
    } catch (error) {
      // You can also add an alert() to see the error message in case of an error when fetching updates.
      alert(`Error fetching latest Expo update: ${error}`);
    }
  }
  useEffect(() => {
    onFetchUpdateAsync() 
  },[])
*/}
  return (
    <Provider store={store}>
    <SafeAreaProvider>
      <GluestackUIProvider config={config}>

          <Navigation />

      </GluestackUIProvider>
      </SafeAreaProvider>
    </Provider>
  );
}

