import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Provider } from 'react-redux';
import { Store } from './resources/redux/store';

// _-_pages_-_

// auth
import LoginAuth from './resources/screens/auth/login';
import CreateAccount from './resources/screens/auth/create';

import { BottomTabs } from './resources/components/navs/bottomtab';

// home
import AddTokens from './resources/screens/home/add-tokens';
import CryptoAction from './resources/screens/home/crypto-action';
import BuyCrypto from './resources/screens/home/buy-crypto';
import SellCrypto from './resources/screens/home/sell-crypto';
import FiatAction from './resources/screens/home/fiat-action';
import History from './resources/screens/home/history';
import SideBar from './resources/screens/sidebar/sidebar';
import EditProfile from './resources/screens/sidebar/edit-profile';
// import IDVerification from './resources/screens/sidebar/kyc/idverification';

// bridge
import BridgeHsitory from './resources/screens/bridge/history';
import BridgeNetwork from './resources/screens/bridge/network';
import BridgeAsset from './resources/screens/bridge/asset';
import CurrentFeed from './resources/screens/feed/current-feed';
import InvestItem from './resources/screens/invest/invest-item';
import AddInvest from './resources/screens/invest/add-invest';
import Splash from './resources/screens/splash/splash';
import ChangePassword from './resources/screens/sidebar/change-password';
import ShowSeePhrase from './resources/screens/sidebar/show-seed-phrase';
import ChooseKYC from './resources/screens/sidebar/kyc/choose-kyc';
import ChooseID from './resources/screens/sidebar/kyc/choose-id';
import SelectCard from './resources/screens/home/select-card';
import LinkCard from './resources/screens/home/link-card';





const RootStack = createStackNavigator()




export default function App() {
  return (
    <Provider store={Store}>
      <NavigationContainer>
        <RootStack.Navigator>

        <RootStack.Screen 
              name='Splash'
              component={Splash}
              options={{
                headerShown: false,
              }}
            />

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
              name='TabsScreen'
              component={BottomTabs}
              options={{
                headerShown: false,
                // animationTypeForReplace: 'push'
              }}
            />

            <RootStack.Screen 
              name='AddTokens'
              component={AddTokens}
              options={{
                headerShown: false,
              }}
            />

            <RootStack.Screen 
              name='History'
              component={History}
              options={{
                headerShown: false,
              }}
            />

            <RootStack.Screen 
              name='Crypto Action'
              component={CryptoAction}
              options={{
                headerShown: false,
              }}
            />

            <RootStack.Screen 
              name='Buy Crypto'
              component={BuyCrypto}
              options={{
                headerShown: false,
              }}
            />

            <RootStack.Screen 
              name='Sell Crypto'
              component={SellCrypto}
              options={{
                headerShown: false,
              }}
            />

            <RootStack.Screen 
              name='Fiat Action'
              component={FiatAction}
              options={{
                headerShown: false,
              }}
            />

            <RootStack.Screen 
              name='Select Card'
              component={SelectCard}
              options={{
                headerShown: false,
              }}
            />

            <RootStack.Screen 
              name='Link Card'
              component={LinkCard}
              options={{
                headerShown: false,
              }}
            />

            <RootStack.Screen 
              name='SideBar'
              component={SideBar}
              options={{
                headerShown: false,
                // animationTypeForReplace: 'push'
              }}
            />

            <RootStack.Screen 
              name='Change Password'
              component={ChangePassword}
              options={{
                headerShown: false,
                // animationTypeForReplace: 'push'
              }}
            />

            <RootStack.Screen 
              name='Show Seed Phrase'
              component={ShowSeePhrase}
              options={{
                headerShown: false,
                // animationTypeForReplace: 'push'
              }}
            />
            
            <RootStack.Screen 
              name='EditProfile'
              component={EditProfile}
              options={{
                headerShown: false,
              }}
            />

            <RootStack.Screen 
              name='Choose Kyc'
              component={ChooseKYC}
              options={{
                headerShown: false,
              }}
            />

            <RootStack.Screen 
              name='Choose ID'
              component={ChooseID}
              options={{
                headerShown: false,
              }}
            />

            <RootStack.Screen 
              name='Bridge History'
              component={BridgeHsitory}
              options={{
                headerShown: false,
              }}
            />

            <RootStack.Screen 
              name='Bridge Network'
              component={BridgeNetwork}
              options={{
                headerShown: false,
              }}
            />

            <RootStack.Screen 
              name='Bridge Asset'
              component={BridgeAsset}
              options={{
                headerShown: false,
              }}
            />

            <RootStack.Screen 
              name='Current Feed'
              component={CurrentFeed}
              options={{
                headerShown: false,
              }}
            />

            <RootStack.Screen 
              name='Invest Item'
              component={InvestItem}
              options={{
                headerShown: false,
              }}
            />

            <RootStack.Screen 
              name='Add Invest'
              component={AddInvest}
              options={{
                headerShown: false,
              }}
            />

        </RootStack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}