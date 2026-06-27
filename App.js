//APP.JS
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/HomeScreen';
import DetailsScreen from './screens/DetailsScreen';
import ProfileScreen from './screens/ProfileScreen';
import MiinfoScreen from './screens/MiinfoScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home" 
          component={HomeScreen} 
          options={{ title:'Pantalla de incio' }}
          />
        <Stack.Screen
          name="Detail"
          component={DetailsScreen} 
          options={({ route }) => ({ title: route.params.title || 'Detalle' })}
          />
        <Stack.Screen
          name="Profile"
          component={ProfileScreen} 
          options={{ title: 'Perfil de Usuario' }}
          />
        <Stack.Screen
          name="Miinfo"
          component={MiinfoScreen} 
          options={{ title: 'Mi Información' }}
          />
      </Stack.Navigator>
    </NavigationContainer>
  );
}