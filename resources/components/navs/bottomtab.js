import React from 'react';
import {
    View,
    Image,
    StyleSheet,
} from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

// utilities
import { icons } from './../../utilities/icons'
import { brandcolors, colors } from './../../utilities/colors'

// screens
import HomePage from '../../screens/home/home';
import Bridge from '../../screens/bridge/bridge';
import Feeds from '../../screens/feed/feed';
import Invest from '../../screens/invest/invest';


// create bottom bar instance
const BottomTab = createBottomTabNavigator();

export function BottomTabs() {

    return(
        <BottomTab.Navigator
            screenOptions={
                ({ route }) => ({
                    tabBarIcon: ({focused, size, color})=>{
                        let tabImgSrc;
                        if (route.name === 'Home') {
                            tabImgSrc = focused ? icons.active.home : icons.dark.home;
                        } else if (route.name === 'Bridge') {
                            tabImgSrc = focused ? icons.active.bridge : icons.dark.bridge;
                        } else if(route.name === 'Feed') {
                            tabImgSrc = focused ? icons.active.feeds : icons.dark.feeds;
                        } else if(route.name === 'Invest') {
                            tabImgSrc = focused ? icons.active.invest : icons.dark.invest;
                        }
                        return(
                            <View style={styles.img_box}>
                                <Image 
                                    source={tabImgSrc}
                                    style={
                                        route.name === 'Home' ? styles.size_20 : 
                                        route.name === 'Bridge' ? styles.b_size :  
                                        route.name === 'Feed' ? styles.f_size : styles.i_size
                                    }
                                />
                            </View>
                        )
                    },
                    tabBarLabelStyle: { fontSize: 10, paddingBottom: 17,},
                    tabBarIconStyle: { marginTop: 17, },
                    tabBarActiveTintColor: colors.brand.brand3,
                    tabBarInactiveTintColor: colors.neutrals.neu5,
                    tabBarStyle: { height: 80, backgroundColor: brandcolors.bg, }
                })
            }
        >

            <BottomTab.Screen name='Home' component={HomePage} options={{headerShown:false,}} />
            <BottomTab.Screen name='Bridge' component={Bridge} options={{headerShown:false,}} />
            <BottomTab.Screen name='Feed' component={Feeds} options={{headerShown:false,}} />
            <BottomTab.Screen name='Invest' component={Invest} options={{headerShown:false,}} />

        </BottomTab.Navigator>
    )
}


const styles = StyleSheet.create({
    img_box: {
        width: 24,
        height: 24,
        // marginRight: 10,
    },
    size_20: {
        width: 20,
        height: 20,
        resizeMode: 'contain',
    },
    b_size: {
        width: 20,
        height: 14,
        resizeMode: 'contain',
    },
    f_size: {
        width: 22,
        height: 19,
        resizeMode: 'contain',
    },
    i_size: {
        width: 20,
        height: 18,
        resizeMode: 'contain',
    },
})