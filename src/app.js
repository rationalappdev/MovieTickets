import React, { Component } from 'react';
import { Navigation } from 'react-native-navigation';
import Movies from './Movies';
import Confirmation from './Confirmation';

Navigation.registerComponent('Movies.Confirmation', () => Confirmation);
Navigation.registerComponent('Movies.Main', () => Movies);

Navigation.startSingleScreenApp({
  screen: {
    screen: 'Movies.Main', // unique ID registered with Navigation.registerScreen 
    navigatorStyle: {
      navBarHidden: true
    }, // override the navigator style for the screen, see "Styling the navigator" below (optional)
    navigatorButtons: {} // override the nav buttons for the screen, see "Adding buttons to the navigator" below (optional)
  },
  passProps: {}, // simple serializable object that will pass as props to all top screens (optional)
  animationType: 'slide-up'
});


