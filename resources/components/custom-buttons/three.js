// this custom button does not take 100% width and has a transparent background but a border around it 
//  _-_-_ that's the major difference between it and button two

import { Text, TouchableOpacity, StyleSheet } from "react-native";
import { colors } from "../../utilities/colors";

const ButtonThree = ({ buttonPress, btnText, buttonStyles, status }) => {
    return (
        <TouchableOpacity
            style={[styles.btn_box, buttonStyles]}
            onPress={buttonPress}
            // disabled={status}
        >
            <Text style={styles.btn_text}>{btnText}</Text>
        </TouchableOpacity>
    );
}


const styles = StyleSheet.create({
    btn_box: {
        // backgroundColor: colors.btn.btnbg,
        // justifyContent: 'center',
        // alignItems: 'center',
        // height: 50,
        // width: '100%',
        paddingHorizontal: 14,
        paddingVertical: 6,
        borderRadius: 8,
        borderWidth: .5,
        borderColor: colors.btn.btnborder,
    },
    btn_text: {
        color: colors.btn.btnbg,
        fontSize: 16,
        fontWeight: '700',
        textTransform: 'capitalize',
    },
})
 
export default ButtonThree;