import { Text, View, StyleSheet, Image } from "react-native";
import { icons } from "../utilities/icons";
import { layoutStyles } from "../styles/layout";
import { brandcolors, colors } from "../utilities/colors";
import ButtonOne from "./custom-buttons/one";
import IconGeneral from "./icon-general";
import { textStyles } from "../styles/text-styles";

const CheckGreenRound = ({ doneFunc }) => {
    return ( 
        <View style={styles.content}>
            <View style={[styles.green_check_modal_box]}>
                <View style={[layoutStyles.align_center]}>
                    <IconGeneral 
                        boxstyle={[layoutStyles.mgb_24, { width: 120, height: 120, }]}
                        iconstyle={{ width: 100, height: 100 }}
                        iconsrc={icons.mark_green_round}
                    />
                    <View style={[layoutStyles.mgb_24]}>
                        <Text style={[textStyles.bold20, layoutStyles.mgb_8, layoutStyles.text_align_center, {color: brandcolors.oth.green_2}]}>
                            Awesome
                        </Text>
                        <Text style={[textStyles.reg14, layoutStyles.text_align_center, {color: brandcolors.grey[800]}]}>
                            You’ve successfully registered and protected your wallet. Remember to keep your Seed Phrase safe.
                        </Text>
                    </View>
                </View>

                <ButtonOne 
                    btnText={'Go to home'}
                    status={false}
                    buttonPress={doneFunc}
                />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    content: {
        flex: 1,
        zIndex: 999,
        paddingHorizontal: 16,
        position: 'absolute',
        top: 0,
        left: 0,
        display: 'flex',
        justifyContent: 'center',
        width: '100%',
        height: '100%'
    },
    green_check_modal_box: {
        backgroundColor: brandcolors.white,
        width: '100%',
        borderRadius: 16,
        padding: 16,
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