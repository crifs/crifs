import { StyleSheet, Image, Pressable } from "react-native";




const IconGeneralF = ({ boxstyle, iconstyle, iconsrc, ripplecolor, iconfunc }) => {
    return ( 
        <Pressable 
            style={[styles.box, boxstyle]}
            hitSlop={{ top: 20, bottom: 20, left: 20 ,right: 20, }}
            android_ripple={{ color: ripplecolor, radius: 50 }}
            onPress={iconfunc}
        >
            <Image 
                source={iconsrc}
                style={[iconstyle]}
                resizeMode="contain"
            />
        </Pressable>
    );
}


const styles = StyleSheet.create({
    box: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        // width: ,
        // height: ,
    },
    icon: {
        // width: ,
        // height: ,
    },
})

 
export default IconGeneralF;