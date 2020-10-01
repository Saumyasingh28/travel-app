import React, { Component } from 'react';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import RootNavigator from './routes/index';
import SplashScreen from 'react-native-splash-screen';
import { setNavigator } from './utils/navigation';

class App extends Component {
  componentDidMount() {
    SplashScreen.hide();
  }
  render() {
    return (
      <NavigationContainer>
        <RootNavigator ref={(nav) => setNavigator(nav)} />
      </NavigationContainer>
    );
  }
}

export default App;
