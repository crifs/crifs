import { View, StyleSheet, Image } from "react-native";




const IconGeneral = ({ boxstyle, iconstyle, iconsrc }) => {
    return ( 
        <View style={[styles.box, boxstyle]}>
            <Image 
                source={iconsrc}
                style={[iconstyle]}
                resizeMode="contain"
            />
        </View>
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

 
export default IconGeneral;