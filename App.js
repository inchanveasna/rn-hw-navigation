import React, { Component } from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Login from './App/Components/Login';
import Home from './App/Components/Home';
import MovieDetail from './App/Components/MovieDetail';
import Profile from './App/Components/Profile';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Draft from './App/Components/Draft';
import Public from './App/Components/Public';
import Unlisted from './App/Components/Unlisted';
import { TouchableOpacity, Text } from 'react-native'
import ModalScreen from './App/Components/ModalScreen';
import { Icon, View } from 'native-base';
import Topic from './App/Components/Topic';
import People from './App/Components/People';


const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();
const Tab = createMaterialTopTabNavigator();


const MyRootStack = () => {
  return (
    <Stack.Navigator mode='modal'>
      <Stack.Screen name="Home" component={MyMainStack} options={{ headerShown: false }} />
      <Stack.Screen name="Modal" component={ModalScreen} options={{ headerShown: true }} />
    </Stack.Navigator>
  )
}


const MyMainStack = () => {
  return (
    <Stack.Navigator initialRouteName="Login">
      <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
      <Stack.Screen name="Home" component={MyDrawer} options={{ headerShown: false, title: 'Hey App' }} />
      <Stack.Screen name="Movie" component={MovieDetail} options={{ title: 'Movie' }} />
    </Stack.Navigator>
  )
}


const MyDrawer = () => {
  return (
    <Drawer.Navigator initialRouteName="Home" >
      <Drawer.Screen name="Home" component={Home} options={{
        headerShown: true, title: 'Hey App',
        headerRight: () => (<HeaderRightOfHome />)
      }} />

      <Drawer.Screen name="Profile" component={Profile} options={{ headerShown: true, title: 'Profile', drawerLabel: 'Profile' }} />
      <Drawer.Screen name="Interest" component={MyTabsInterest} options={{ headerShown: true, title: 'Interest', drawerLabel: 'Interest' }} />
      <Drawer.Screen name="Modal" component={ModalScreen} options={{ headerShown: false, title: 'Become a Member', drawerLabel: 'Become a Member' }} />
      <Drawer.Screen name="Story" component={MyTabsStory} options={{
        headerShown: true, title: 'Stories', drawerLabel: 'Stories',
        headerRight: () => ( <HeaderRightOfStory/> )
      }} />
    </Drawer.Navigator>
  );
}

const MyTabsInterest = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Topic" component={Topic} />
      <Tab.Screen name="People" component={People} />
      <Tab.Screen name="Publications" component={Publications} />
    </Tab.Navigator>
  );
}


const MyTabsStory = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Draft" component={Draft} />
      <Tab.Screen name="Public" component={Public} />
      <Tab.Screen name="Unlisted" component={Unlisted} />
    </Tab.Navigator>
  );
}

const Publications = () => {
  return (
    <View>
      <Text>
        Publications
    </Text>
    </View>
  )
}

const HeaderRightOfHome = () => {
  return (
    <View style={{ paddingRight: 8, flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
      <TouchableOpacity style={{ padding: 4 }} onPress={() => alert('Search')}>
        <Icon name='ios-search' />
      </TouchableOpacity>
      <TouchableOpacity style={{ padding: 4 }} onPress={() => alert('Bookmark')}>
        <Icon name='ios-bookmark' style={{ fontSize: 20 }} />
      </TouchableOpacity>
    </View>
  )
}

const HeaderRightOfStory = () => {
  return (
    <View style={{ paddingRight: 8, flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
      <TouchableOpacity style={{ padding: 4 }} onPress={() => alert('Add')}>
        <Icon name='ios-add' />
      </TouchableOpacity>
    </View>
  )
}


App = () => {
  return (
    <NavigationContainer>
      <MyRootStack />
    </NavigationContainer>
  )
}

export default App



