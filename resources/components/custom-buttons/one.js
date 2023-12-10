// this custom button takes 100% width _-_-_ that's the major difference between it and button two

import { Text, TouchableOpacity, StyleSheet, Image, View } from "react-native";
import { brandcolors, colors } from "../../utilities/colors";
import { textStyles } from "../../styles/text-styles";
import { layoutStyles } from "../../styles/layout";

const ButtonOne = ({ buttonPress, btnText, buttonStyles, txtStyles, status, iconstatus, gapvalue, iconbox, iconstyle, iconsrc }) => {
    return (
        <TouchableOpacity
            style={[
                styles.btn_box, buttonStyles, 
                { 
                    gap: iconstatus ? gapvalue : 0 ,
                    backgroundColor: status === false ? brandcolors.pry[500] : brandcolors.grey[100],
                }
            ]}
            onPress={buttonPress}
            disabled={status}
        >
            {iconstatus ? 
                <View style={[layoutStyles.just_center, iconbox]}>
                    <Image
                        style={[iconstyle]} 
                        source={iconsrc}
                    />
                </View>
            : null}
            <Text style={[textStyles.bold16, txtStyles, { color: status === false ? brandcolors.sec[500] : brandcolors.grey[500] }]}>
                {btnText}
            </Text>
        </TouchableOpacity>
    );
}


const styles = StyleSheet.create({
    btn_box: {
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        // height: '6%',
        height: 48,
        width: '100%',
        borderRadius: 8,
    },
    btn_text: {
        // color: brandcolors.sec[500],
        // fontSize: 16,
        // fontWeight: '700',
        // textTransform: 'capitalize',
    },
})
 
export default ButtonOne;