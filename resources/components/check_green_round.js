import { Text, View, StyleSheet, Image } from "react-native";
import { icons } from "../utilities/icons";
import { layoutStyles } from "../styles/layout";
import { colors } from "../utilities/colors";
import ButtonOne from "./button-one";

const CheckGreenRound = ({ doneFunc }) => {
    return ( 
        <View style={styles.content}>
            <View style={[layoutStyles.align_center]}>
                <Image 
                    source={icons.mark_green_round}
                    style={[layoutStyles.mgb_30, styles.check_icon]}
                />
                <Text style={[styles.green_text, layoutStyles.mgb_20]}>Awesome</Text>
                <Text style={[layoutStyles.l1_r, layoutStyles.text_align_center]}>
                    You’ve successfully registered and protected your wallet. Remember to keep your Seed Phrase safe.
                </Text>
            </View>

            <View style={styles.test_end}>
                <ButtonOne 
                    btnText={'Done'}
                    buttonPress={doneFunc}
                />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    content: {
        flex: 1,
    },
    green_text: {
        color: colors.oth.green_check,
        fontWeight: '600',
        fontSize: 16,
    },
    test_end: {
        justifyContent: 'flex-end',
        flex: 1,
    },
    check_icon: {
        width: 100,
        height: 100
    },
})
 
export default CheckGreenRound;