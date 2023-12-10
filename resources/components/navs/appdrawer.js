

import React from 'react';
import { 
    Text,
    View,
    StyleSheet,
    Image,
} from 'react-native';
import { createDrawerNavigator, DrawerContentScrollView, DrawerItem, DrawerItemList } from '@react-navigation/drawer';

// components
import { BottomTabs } from './bottomtab';

// utilities
import { colors } from '../../utilities/colors';
import { icons } from '../../utilities/icons';
import { images } from '../../utilities/images';

// screens
import EditProfile from '../../screens/profile/edit-profile';
import ChangePass from '../../screens/profile/change-password';
import IDVerification from '../../screens/oths/idverification';

const DrawerTab = createDrawerNavigator();

export function AppDrawer() {

    // function homeHeaderTitle() {
    //     return (
    //         <View style={styles.title_cont}>
    //             <Text style={styles.username_title}>{user.userName}</Text>
    //             <Text style={styles.todo_title}>Todo(s)</Text>
    //         </View>
    //     )
    // }

    return(
        <View>
            <DrawerItem 
                label = {()=>(
                    <View style={styles.user_label_item}>
                        <View style={styles.img_box}>
                            <Image 
                                style={styles.img}
                                source={images.user_dp_1}
                            />
                        </View>
                        <View style={styles.user_label_box}>
                            <Text style={styles.user_name}>Steph Curry</Text>
                            <Text style={styles.user_email}>Edit Profile</Text>
                        </View>
                    </View>
                )}  
            />
            <DrawerContentScrollView>
                <DrawerTab.Navigator
                    screenOptions={
                        ({ route }) => ({
                            drawerInactiveTintColor: '#999',
                            drawerActiveTintColor: 'coral',
                            drawerLabelStyle: { fontSize: 17, fontWeight: 'bold', },
                            drawerItemStyle: { width: '100%' },
                            drawerStyle: { paddingTop: 50, margin: 0, },
                            // drawerContentStyle: { backgroundColor: 'green' },
                            drawerContentContainerStyle: {  },
                            swipeEdgeWidth: 100,
                            headerStyle: { backgroundColor: '#eee', height: 70, },
                            headerTitleAlign: 'center',
                            headerTitleStyle: { fontSize: 22, color: '#555'},
                        })
                    }
                    // drawerContent={ItemDrawer}
                    >
                    <DrawerTab.Screen name='TabScreen' component={BottomTabs} 
                        options={{
                            title: 'Tab Screen',
                            drawerLabel: 'Bottom Tabs',
                        }}
                    />
                    <DrawerTab.Screen 
                        name='ChangePassword' 
                        component={ChangePass} 
                        options={{
                            headerShown: false,
                        }}
                    />
                    <DrawerTab.Screen 
                        name='IDVerification' 
                        component={IDVerification} 
                        options={{
                            headerShown: false,
                        }}
                    />            
                </DrawerTab.Navigator>
                <DrawerItem 
                    label={()=>(
                        <View>
                            <Text>Send feedback</Text>
                        </View>
                    )}
                    onPress={()=>{ Linking.openURL('https://kahmahpro.web.app') }}
                />
                <DrawerItem 
                    label={()=>(
                        <View>
                            <Text>Update app</Text>
                        </View>
                    )}
                    onPress={()=>{ Linking.openURL('https://kahmahpro.web.app') }}
                />
                <DrawerItem 
                    label={()=>(
                        <View>
                            <Text>Terms of service</Text>
                        </View>
                    )}
                    onPress={()=>{ Linking.openURL('https://kahmahpro.web.app') }}
                />
            </DrawerContentScrollView>
        </View>
      
    )
  }


  const styles = StyleSheet.create({
    title_cont: {
        flexDirection: 'row',
    },
    username_title: {
        fontSize: 22,
        color: '#666',
        fontWeight: 'bold',
    },
    todo_title: {
        fontSize: 22,
        color: '#555',
    },
    user_label_item: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 20,
    },
    img_box: {
        width: 90,
        height: 90,
        marginRight: 10,
    },
    img: {
        width: '100%',
        height: '100%',
        resizeMode: 'stretch',
    },
    user_name: {
        fontWeight: 'bold',
        fontSize: 25,
        color: '#333',
        marginBottom: 0,
    },
    user_email: {
        fontSize: 15,
        color: '#555',
    },
    justify_space_btw: {
        justifyContent: 'space-between',
    },
  })