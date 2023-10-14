import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Provider } from 'react-redux';
import { Store } from './resources/redux/store';

// pages
import LoginAuth from './resources/screens/auth/login';
import CreateAccount from './resources/screens/auth/create';
import HomePage from './resources/screens/home/home';





const RootStack = createStackNavigator()




export default function App() {
  return (
    <Provider store={Store}>
      <NavigationContainer>
        <RootStack.Navigator>

        <RootStack.Screen 
              name='Login Auth'
              component={LoginAuth}
              options={{
                headerShown: false,
              }}
            />

            <RootStack.Screen 
              name='Create Account'
              component={CreateAccount}
              options={{
                headerShown: false,
              }}
            />

            <RootStack.Screen 
              name='Home'
              component={HomePage}
              options={{
                headerShown: false,
              }}
            />

        </RootStack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}