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
import { colors } from "../../utilities/colors";
import ButtonOne from "../button-one";


const StepThree = ({ navigationFunc }) => {

    const [greenCheck, setGreenCheck] = useState(null)

    const handleSeedConfirmation = () => {
        setGreenCheck(true)
    }

    return ( 
        <View style={styles.content}>

            {!greenCheck ? <>
                <Text style={[layoutStyles.brand_header, {marginBottom: 20}]}>Confirm Seed Phrase</Text>
                <Text style={[layoutStyles.l1_r, layoutStyles.mgb_20]}>
                    Select each word in the other it was presented to you
                </Text>

                <View style={[styles.manual_box, layoutStyles.mgb_10]}>
                    <View style={[layoutStyles.justify_space_btwn, layoutStyles.flex_wrap]}>
                        <View style={[layoutStyles.justify_center, layoutStyles.mgb_20, layoutStyles.gap_10]}>
                            <Text style={[layoutStyles.l1_r]}>1</Text>
                            <View style={[styles.seed_phrase_box]}>
                                <Text style={styles.seed_text}></Text>
                            </View>
                        </View>
                        <View style={[layoutStyles.justify_center, layoutStyles.mgb_20, layoutStyles.gap_10]}>
                            <Text style={[layoutStyles.l1_r]}>2</Text>
                            <View style={[styles.seed_phrase_box]}>
                                <Text style={styles.seed_text}></Text>
                            </View>
                        </View>
                        <View style={[layoutStyles.justify_center, layoutStyles.mgb_20, layoutStyles.gap_10]}>
                            <Text style={[layoutStyles.l1_r]}>3</Text>
                            <View style={[styles.seed_phrase_box]}>
                                <Text style={styles.seed_text}></Text>
                            </View>
                        </View>
                        <View style={[layoutStyles.justify_center, layoutStyles.mgb_20, layoutStyles.gap_10]}>
                            <Text style={[layoutStyles.l1_r]}>4</Text>
                            <View style={[styles.seed_phrase_box]}>
                                <Text style={styles.seed_text}></Text>
                            </View>
                        </View>
                        <View style={[layoutStyles.justify_center, layoutStyles.mgb_20, layoutStyles.gap_10]}>
                            <Text style={[layoutStyles.l1_r]}>5</Text>
                            <View style={[styles.seed_phrase_box]}>
                                <Text style={styles.seed_text}></Text>
                            </View>
                        </View>
                        <View style={[layoutStyles.justify_center, layoutStyles.mgb_20, layoutStyles.gap_10]}>
                            <Text style={[layoutStyles.l1_r]}>6</Text>
                            <View style={[styles.seed_phrase_box]}>
                                <Text style={styles.seed_text}></Text>
                            </View>
                        </View>
                        <View style={[layoutStyles.justify_center, layoutStyles.mgb_20, layoutStyles.gap_10]}>
                            <Text style={[layoutStyles.l1_r]}>7</Text>
                            <View style={[styles.seed_phrase_box]}>
                                <Text style={styles.seed_text}></Text>
                            </View>
                        </View>
                        <View style={[layoutStyles.justify_center, layoutStyles.mgb_20, layoutStyles.gap_10]}>
                            <Text style={[layoutStyles.l1_r]}>8</Text>
                            <View style={[styles.seed_phrase_box]}>
                                <Text style={styles.seed_text}></Text>
                            </View>
                        </View>
                        <View style={[layoutStyles.justify_center, layoutStyles.mgb_20, layoutStyles.gap_10]}>
                            <Text style={[layoutStyles.l1_r]}>9</Text>
                            <View style={[styles.seed_phrase_box]}>
                                <Text style={styles.seed_text}></Text>
                            </View>
                        </View>
                        <View style={[layoutStyles.justify_center, layoutStyles.mgb_20, layoutStyles.gap_10]}>
                            <Text style={[layoutStyles.l1_r]}>10</Text>
                            <View style={[styles.seed_phrase_box]}>
                                <Text style={styles.seed_text}></Text>
                            </View>
                        </View>
                        <View style={[layoutStyles.justify_center, layoutStyles.mgb_20, layoutStyles.gap_10]}>
                            <Text style={[layoutStyles.l1_r]}>11</Text>
                            <View style={[styles.seed_phrase_box]}>
                                <Text style={styles.seed_text}></Text>
                            </View>
                        </View>
                        <View style={[layoutStyles.justify_center, layoutStyles.mgb_20, layoutStyles.gap_10]}>
                            <Text style={[layoutStyles.l1_r]}>12</Text>
                            <View style={[styles.seed_phrase_box]}>
                                <Text style={styles.seed_text}></Text>
                            </View>
                        </View>
                    </View>
                </View>

                <View style={[layoutStyles.justify_space_btwn, layoutStyles.flex_wrap]}>
                    <View style={[styles.seed_phrase_box, layoutStyles.mgb_10, { borderColor: colors.btn.btncolor }]}>
                        <Text style={[styles.seed_text]}>vessel</Text>
                    </View>
                    <View style={[styles.seed_phrase_box, layoutStyles.mgb_10, { borderColor: colors.btn.btncolor }]}>
                        <Text style={[styles.seed_text]}>stage</Text>
                    </View>
                    <View style={[styles.seed_phrase_box, layoutStyles.mgb_10, { borderColor: colors.btn.btncolor }]}>
                        <Text style={[styles.seed_text]}>stamp</Text>
                    </View>
                    <View style={[styles.seed_phrase_box, layoutStyles.mgb_10, { borderColor: colors.btn.btncolor }]}>
                        <Text style={[styles.seed_text]}>snakers</Text>
                    </View>
                    <View style={[styles.seed_phrase_box, layoutStyles.mgb_10, { borderColor: colors.btn.btncolor }]}>
                        <Text style={[styles.seed_text]}>hurt</Text>
                    </View>
                    <View style={[styles.seed_phrase_box, layoutStyles.mgb_10, { borderColor: colors.btn.btncolor }]}>
                        <Text style={[styles.seed_text]}>study</Text>
                    </View>
                    <View style={[styles.seed_phrase_box, layoutStyles.mgb_10, { borderColor: colors.btn.btncolor }]}>
                        <Text style={[styles.seed_text]}>chair</Text>
                    </View>
                    <View style={[styles.seed_phrase_box, layoutStyles.mgb_10, { borderColor: colors.btn.btncolor }]}>
                        <Text style={[styles.seed_text]}>wield</Text>
                    </View>
                    <View style={[styles.seed_phrase_box, layoutStyles.mgb_10, { borderColor: colors.btn.btncolor }]}>
                        <Text style={[styles.seed_text]}>tree</Text>
                    </View>
                    <View style={[styles.seed_phrase_box, layoutStyles.mgb_10, { borderColor: colors.btn.btncolor }]}>
                        <Text style={[styles.seed_text]}>regret</Text>
                    </View>
                    <View style={[styles.seed_phrase_box, layoutStyles.mgb_10, { borderColor: colors.btn.btncolor }]}>
                        <Text style={[styles.seed_text]}>stone</Text>
                    </View>
                    <View style={[styles.seed_phrase_box, layoutStyles.mgb_10, { borderColor: colors.btn.btncolor }]}>
                        <Text style={[styles.seed_text]}>worth</Text>
                    </View>
                </View>

                <View style={styles.test_end}>
                    <ButtonOne 
                        btnText={'Confirm'}
                        buttonPress={handleSeedConfirmation}
                    />
                </View>
            </> : null}

            {greenCheck ? <>
                <CheckGreenRound 
                    doneFunc={navigationFunc}
                />
            </> : null}
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
        width: 100,
        paddingVertical: 3,
        borderRadius: 4,
        borderWidth: 1,
        borderColor: colors.btn.btnbg
    },
    seed_text: {
        fontSize: 12,
        fontWeight: '400',
        color: '#000000',
        textAlign: 'center',
    },
    manual_box: {
        maxWidth: '100%',
        backgroundColor: colors.neutrals.neu2,
        paddingVertical: 20, 
        paddingHorizontal: 35,
        borderRadius: 10,
        borderWidth: .2,
        borderColor: colors.neutrals.neu3
    },
})
 
export default StepThree;