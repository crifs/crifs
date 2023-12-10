import { 
    Text, 
    View, 
    StyleSheet,
} from "react-native";
import { useState } from "react";

// components
import CheckGreenRound from "../check_green_round";

// styles
import { layoutStyles } from "../../styles/layout";

// utilities
import { brandcolors, colors } from "../../utilities/colors";
import ButtonOne from "../custom-buttons/one";
import { textStyles } from "../../styles/text-styles";
import BackDrop from "../backdrop";
import { setGreencheck } from "../../redux/action";
import { useDispatch, useSelector } from "react-redux";


const StepThree = () => {

    const { greencheck } = useSelector(state=>state.appReducer)
    const dispatch = useDispatch()


    const handleSeedConfirmation = () => {
        dispatch(setGreencheck(true))
    }

    return ( 
        <View style={styles.content}>
            <>
                <Text style={[layoutStyles.brand_header, {marginBottom: 20}]}>Confirm Seed Phrase</Text>
                <Text style={[layoutStyles.l1_r, layoutStyles.mgb_20]}>
                    Select each word in the other it was presented to you
                </Text>

                <View style={[styles.manual_box, layoutStyles.mgb_10]}>
                    <View style={[layoutStyles.justify_space_btwn, layoutStyles.flex_wrap]}>
                        <View style={[layoutStyles.justify_center, layoutStyles.mgb_20, layoutStyles.gap_10]}>
                            <Text style={[layoutStyles.l1_r]}>1</Text>
                            <View style={[styles.seed_phrase_box]}>
                                <Text style={[textStyles.reg16, { color: brandcolors.pry[500], textAlign: 'center' }]}></Text>
                            </View>
                        </View>
                        <View style={[layoutStyles.justify_center, layoutStyles.mgb_20, layoutStyles.gap_10]}>
                            <Text style={[layoutStyles.l1_r]}>7</Text>
                            <View style={[styles.seed_phrase_box]}>
                                <Text style={[textStyles.reg16, { color: brandcolors.pry[500], textAlign: 'center' }]}></Text>
                            </View>
                        </View>
                        <View style={[layoutStyles.justify_center, layoutStyles.mgb_20, layoutStyles.gap_10]}>
                            <Text style={[layoutStyles.l1_r]}>2</Text>
                            <View style={[styles.seed_phrase_box]}>
                                <Text style={[textStyles.reg16, { color: brandcolors.pry[500], textAlign: 'center' }]}></Text>
                            </View>
                        </View>
                        <View style={[layoutStyles.justify_center, layoutStyles.mgb_20, layoutStyles.gap_10]}>
                            <Text style={[layoutStyles.l1_r]}>8</Text>
                            <View style={[styles.seed_phrase_box]}>
                                <Text style={[textStyles.reg16, { color: brandcolors.pry[500], textAlign: 'center' }]}></Text>
                            </View>
                        </View>
                        <View style={[layoutStyles.justify_center, layoutStyles.mgb_20, layoutStyles.gap_10]}>
                            <Text style={[layoutStyles.l1_r]}>3</Text>
                            <View style={[styles.seed_phrase_box]}>
                                <Text style={[textStyles.reg16, { color: brandcolors.pry[500], textAlign: 'center' }]}></Text>
                            </View>
                        </View>
                        <View style={[layoutStyles.justify_center, layoutStyles.mgb_20, layoutStyles.gap_10]}>
                            <Text style={[layoutStyles.l1_r]}>9</Text>
                            <View style={[styles.seed_phrase_box]}>
                                <Text style={[textStyles.reg16, { color: brandcolors.pry[500], textAlign: 'center' }]}></Text>
                            </View>
                        </View>
                        <View style={[layoutStyles.justify_center, layoutStyles.mgb_20, layoutStyles.gap_10]}>
                            <Text style={[layoutStyles.l1_r]}>4</Text>
                            <View style={[styles.seed_phrase_box]}>
                                <Text style={[textStyles.reg16, { color: brandcolors.pry[500], textAlign: 'center' }]}></Text>
                            </View>
                        </View>
                        <View style={[layoutStyles.justify_center, layoutStyles.mgb_20, layoutStyles.gap_10]}>
                            <Text style={[layoutStyles.l1_r]}>10</Text>
                            <View style={[styles.seed_phrase_box]}>
                                <Text style={[textStyles.reg16, { color: brandcolors.pry[500], textAlign: 'center' }]}></Text>
                            </View>
                        </View>
                        <View style={[layoutStyles.justify_center, layoutStyles.mgb_20, layoutStyles.gap_10]}>
                            <Text style={[layoutStyles.l1_r]}>5</Text>
                            <View style={[styles.seed_phrase_box]}>
                                <Text style={[textStyles.reg16, { color: brandcolors.pry[500], textAlign: 'center' }]}></Text>
                            </View>
                        </View>
                        <View style={[layoutStyles.justify_center, layoutStyles.mgb_20, layoutStyles.gap_10]}>
                            <Text style={[layoutStyles.l1_r]}>11</Text>
                            <View style={[styles.seed_phrase_box]}>
                                <Text style={[textStyles.reg16, { color: brandcolors.pry[500], textAlign: 'center' }]}></Text>
                            </View>
                        </View>
                        <View style={[layoutStyles.justify_center, layoutStyles.mgb_20, layoutStyles.gap_10]}>
                            <Text style={[layoutStyles.l1_r]}>6</Text>
                            <View style={[styles.seed_phrase_box]}>
                                <Text style={[textStyles.reg16, { color: brandcolors.pry[500], textAlign: 'center' }]}></Text>
                            </View>
                        </View>
                        <View style={[layoutStyles.justify_center, layoutStyles.mgb_20, layoutStyles.gap_10]}>
                            <Text style={[layoutStyles.l1_r]}>12</Text>
                            <View style={[styles.seed_phrase_box]}>
                                <Text style={[textStyles.reg16, { color: brandcolors.pry[500], textAlign: 'center' }]}></Text>
                            </View>
                        </View>
                    </View>
                </View>

                <View style={styles.test_end}>
                    <ButtonOne 
                        btnText={'Confirm'}
                        status={false}
                        buttonPress={handleSeedConfirmation}
                    />
                </View>
            </>
        </View>
    );
}


const styles = StyleSheet.create({
    content: {
        flex: 1,
    },
    test_end: {
        justifyContent: 'flex-end',
        flex: 1,
    },
    seed_phrase_box: {
        width: 112,
        height: 32,
        borderRadius: 8,
        borderWidth: 1,
        borderColor: brandcolors.pry[500],
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    manual_box: {
        maxWidth: '100%',
        backgroundColor: brandcolors.grey[100],
        paddingVertical: 20, 
        paddingHorizontal: 35,
        borderRadius: 16,
    },
})
 
export default StepThree;