import { Text, TouchableOpacity, StyleSheet } from "react-native";
import { colors } from "../utilities/colors";

const ButtonOne = ({ buttonPress, btnText, buttonStyles, status }) => {
    return (
        <TouchableOpacity
            style={[styles.btn_box, buttonStyles]}
            onPress={buttonPress}
            disabled={status}
        >
            <Text style={styles.btn_text}>{btnText}</Text>
        </TouchableOpacity>
    );
}


const styles = StyleSheet.create({
    btn_box: {
        backgroundColor: colors.btn.btnbg,
        justifyContent: 'center',
        alignItems: 'center',
        // height: '6%',
        height: 50,
        width: '100%',
        borderRadius: 5,
    },
    btn_text: {
        color: colors.btn.btncolor,
        fontSize: 16,
        fontWeight: '700',
        textTransform: 'capitalize',
    },
})
 
export default ButtonOne;