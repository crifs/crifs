import { View, StyleSheet } from "react-native";
import { brandcolors, colors } from "../utilities/colors";






const ToggleIconNF = ({ active }) => {
    return ( 
        <View 
            style={[styles.toggle_item, { backgroundColor: !active ? colors.neutrals.neu3 : brandcolors.pry[500] }]} 
        >
            <View style={[styles.toggle_item_inner, { alignSelf: !active ? 'flex-start' : 'flex-end' }]}></View>
        </View>
    );
}


const styles = StyleSheet.create({
    toggle_item: {
        width: 40,
        height: 24,
        borderRadius: 20,
        // backgroundColor: colors.neutrals.neu3,
        display: 'flex',
        justifyContent: 'center',
        paddingHorizontal: 2,
    },
    toggle_item_inner: {
        width: '50%',
        height: 20,
        borderRadius: 50,
        backgroundColor: colors.neutrals.white,
        // alignSelf: 'flex-start',
    },
})

 
export default ToggleIconNF;