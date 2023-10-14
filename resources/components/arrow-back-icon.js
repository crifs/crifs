import { Image, TouchableOpacity, StyleSheet, Pressable } from "react-native";
import { icons } from "../utilities/icons";

const ArrorBackIcon = ({ arrowFunc }) => {
    return ( 
        <Pressable hitSlop={{ top: 50, bottom: 50, left: 50, right: 50 }} style={styles.demo} onPress={arrowFunc}>
            <Image 
                source={icons.arrow_back_icon}
                style={styles.icon_size}
            />
        </Pressable>
     );
}

const styles = StyleSheet.create({
    icon_size: {
        width: '100%',
        height: '100%',
        resizeMode: 'contain',
        // alignSelf: 'flex-start',
    },
    demo: {
        // backgroundColor: 'red',
        width: 8,
        height: 13,
        position: 'absolute',
        left: '5%',
        top: '5.5%',
    }
})

export default ArrorBackIcon;