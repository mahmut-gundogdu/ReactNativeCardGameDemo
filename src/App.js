import React from 'react';
import 'react-native-gesture-handler';
import {TouchableWithoutFeedback, StyleSheet} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import MechanicsScreen from './screens/Mechanics/MechanicsScreen';

import CardListScreen from './screens/Cards/CardListScreen';
import SearchScreen from './screens/Search/SearchScreen';
import {Icon} from 'native-base';

const Stack = createStackNavigator();
const App = () => {

  return (
    <>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Mechanics" component={MechanicsScreen}/>
          <Stack.Screen
            name="Cards"
            component={CardListScreen}
            options={({navigation}) => ({
              headerRight: () => (
                <TouchableWithoutFeedback
                  onPress={() => navigation.navigate('Search')}
                  title="Info"
                  color="#fff">
                  <Icon name={'search'} style={styles.icon}/>
                </TouchableWithoutFeedback>
              ),
            })}
          />
          <Stack.Screen name="Search" component={SearchScreen}/>
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
};
const styles = StyleSheet.create({
  icon: {paddingRight: 10},
});

export default App;
