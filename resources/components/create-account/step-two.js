import { 
    View, 
    Text, 
    Image, 
    StyleSheet, 
    TouchableOpacity,
} from 'react-native'
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setProgressValue } from '../../redux/action';

// components 
import ButtonOne from '../button-one';

// styles
import { layoutStyles } from '../../styles/layout';
import { colors } from '../../utilities/colors';
import { icons } from '../../utilities/icons';

const StepTwo = () => {

    const [showspbox, setShowspbox] = useState(null)
    const [btndisable, setBtndisable] = useState(null)
    const [showseedphrase, setShowseedphrase] = useState(null)

    const dispatch = useDispatch()

    const handleProgress = () => {
        if(!showspbox) {
            setShowspbox(true)
            setBtndisable(true)
        }
        if(showseedphrase) {
            dispatch(setProgressValue(3))
        }
    }

    return ( 
        <View style={styles.content}>
            {!showspbox ?
                <>
                    <Text style={[layoutStyles.brand_header, {marginBottom: 20}]}>Create a password</Text>

                    <View style={[styles.manual_box, {paddingVertical: !showseedphrase ? 15 : 20, paddingHorizontal: !showseedphrase ? 15 : 35}]}>
                        <View style={[layoutStyles.mgb_20]}>
                            <Text style={[layoutStyles.b1_sb, layoutStyles.mgb_10]}>Manual</Text>
                            <Text style={layoutStyles.l1_r}>Please read this manual carefully to protect your digital assets effectively.</Text>
                        </View>
                        <View style={[layoutStyles.mgb_20]}>
                            <Text style={[layoutStyles.b1_sb, layoutStyles.mgb_10]}>What is a Seed Phrase?</Text>
                            <Text style={layoutStyles.l1_r}>
                                Your seed phrase is a crucial component in accessing and recovering your cryptocurrency wallets and accounts.
                            </Text>
                        </View>
                        <View style={[layoutStyles.mgb_20]}>
                            <Text style={[layoutStyles.b1_sb, layoutStyles.mgb_10]}>Dos and Don'ts</Text>
                            <View style={[layoutStyles.flex_align_center, layoutStyles.gap_3]}>
                                <Text style={[{ fontSize: 20, color: colors.neutrals.neu3, fontWeight: '700' }]}>.</Text>
                                <Text style={[layoutStyles.l1_r, layoutStyles.mgl]}>
                                    Do memorize your seed phrase if possible, but always keep a written copy as a backup.
                                </Text>
                            </View>
                            <View style={[layoutStyles.flex_align_center, layoutStyles.gap_3]}>
                                <Text style={[{ fontSize: 20, color: colors.neutrals.neu3, fontWeight: '700' }]}>.</Text>
                                <Text style={[layoutStyles.l1_r, layoutStyles.mgl]}>
                                    Do Not store your seed phrase digitally, especially on cloud storage or email accounts.
                                </Text>
                            </View>
                            <View style={[layoutStyles.flex_align_center, layoutStyles.gap_3]}>
                                <Text style={[{ fontSize: 20, color: colors.neutrals.neu3, fontWeight: '700' }]}>.</Text>
                                <Text style={[layoutStyles.l1_r, layoutStyles.mgl]}>
                                    Do Not share your seed phrase with anyone, even if they claim to be from customer support or a trustworthy entity.
                                </Text>
                            </View>
                        </View>
                        <View >
                            <Text style={[layoutStyles.b1_sb, layoutStyles.mgb_10]}>Conclusion</Text>
                            <Text style={layoutStyles.l1_r}>
                                Your seed phrase is your ticket to accessing and recovering your cryptocurrency assets. 
                                Treat it with the utmost care and safeguard it diligently. Following the guidelines in 
                                this manual will help you maintain control over your funds and protect your investments from potential threats.
                            </Text>
                        </View>
                    </View>
                </> 
            : null}

            {showspbox ? 
                <>
                    <Text style={[layoutStyles.brand_header, {marginBottom: 20}]}>Write down your seed phrase</Text>
                    <Text style={[layoutStyles.l1_r, layoutStyles.mgb_20]}>
                        Create multiple backups of your seed phrase. If possible, make two or 
                        more copies and store them in different secure locations. This ensures 
                        that you have a backup in case one copy is lost or damaged.
                    </Text>

                    <View style={[styles.manual_box, {paddingVertical: !showseedphrase ? 15 : 20, paddingHorizontal: !showseedphrase ? 15 : 35}]}>
                        {!showseedphrase ? <View>
                            <View style={[layoutStyles.align_center]}>
                                <Image 
                                    source={icons.eye_slash_modal}
                                    style={[layoutStyles.mgb_20, {width: 40, height: 40}]}
                                />
                            </View>
                            <Text style={[layoutStyles.b1_sb, layoutStyles.text_align_center, layoutStyles.mgb_20]}>
                                Tap the button below to reveal your Seed Phrase
                            </Text>
                            <Text style={[layoutStyles.l1_r, layoutStyles.mgb_20, layoutStyles.text_align_center]}>
                                Please ensure you're alone
                            </Text>
                            <ButtonOne 
                                btnText={'View'}
                                buttonPress={() => {
                                    setShowseedphrase(true)
                                    setBtndisable(null)
                                }}
                            />
                        </View> : null}

                        {showseedphrase ? 
                            <View style={[layoutStyles.relative_position]}>
                                <View style={[layoutStyles.justify_space_btwn, layoutStyles.flex_wrap]}>
                                    <View style={[layoutStyles.justify_center, layoutStyles.mgb_20, layoutStyles.gap_10]}>
                                        <Text style={[layoutStyles.l1_r]}>1</Text>
                                        <View style={[styles.seed_phrase_box]}>
                                            <Text style={styles.seed_text}>stage</Text>
                                        </View>
                                    </View>
                                    <View style={[layoutStyles.justify_center, layoutStyles.mgb_20, layoutStyles.gap_10]}>
                                        <Text style={[layoutStyles.l1_r]}>2</Text>
                                        <View style={[styles.seed_phrase_box]}>
                                            <Text style={styles.seed_text}>express</Text>
                                        </View>
                                    </View>
                                    <View style={[layoutStyles.justify_center, layoutStyles.mgb_20, layoutStyles.gap_10]}>
                                        <Text style={[layoutStyles.l1_r]}>3</Text>
                                        <View style={[styles.seed_phrase_box]}>
                                            <Text style={styles.seed_text}>two</Text>
                                        </View>
                                    </View>
                                    <View style={[layoutStyles.justify_center, layoutStyles.mgb_20, layoutStyles.gap_10]}>
                                        <Text style={[layoutStyles.l1_r]}>4</Text>
                                        <View style={[styles.seed_phrase_box]}>
                                            <Text style={styles.seed_text}>diagram</Text>
                                        </View>
                                    </View>
                                    <View style={[layoutStyles.justify_center, layoutStyles.mgb_20, layoutStyles.gap_10]}>
                                        <Text style={[layoutStyles.l1_r]}>5</Text>
                                        <View style={[styles.seed_phrase_box]}>
                                            <Text style={styles.seed_text}>guitar</Text>
                                        </View>
                                    </View>
                                    <View style={[layoutStyles.justify_center, layoutStyles.mgb_20, layoutStyles.gap_10]}>
                                        <Text style={[layoutStyles.l1_r]}>6</Text>
                                        <View style={[styles.seed_phrase_box]}>
                                            <Text style={styles.seed_text}>dress</Text>
                                        </View>
                                    </View>
                                    <View style={[layoutStyles.justify_center, layoutStyles.mgb_20, layoutStyles.gap_10]}>
                                        <Text style={[layoutStyles.l1_r]}>7</Text>
                                        <View style={[styles.seed_phrase_box]}>
                                            <Text style={styles.seed_text}>water</Text>
                                        </View>
                                    </View>
                                    <View style={[layoutStyles.justify_center, layoutStyles.mgb_20, layoutStyles.gap_10]}>
                                        <Text style={[layoutStyles.l1_r]}>8</Text>
                                        <View style={[styles.seed_phrase_box]}>
                                            <Text style={styles.seed_text}>ocean</Text>
                                        </View>
                                    </View>
                                    <View style={[layoutStyles.justify_center, layoutStyles.mgb_20, layoutStyles.gap_10]}>
                                        <Text style={[layoutStyles.l1_r]}>9</Text>
                                        <View style={[styles.seed_phrase_box]}>
                                            <Text style={styles.seed_text}>lab</Text>
                                        </View>
                                    </View>
                                    <View style={[layoutStyles.justify_center, layoutStyles.mgb_20, layoutStyles.gap_10]}>
                                        <Text style={[layoutStyles.l1_r]}>10</Text>
                                        <View style={[styles.seed_phrase_box]}>
                                            <Text style={styles.seed_text}>bridge</Text>
                                        </View>
                                    </View>
                                    <View style={[layoutStyles.justify_center, layoutStyles.mgb_20, layoutStyles.gap_10]}>
                                        <Text style={[layoutStyles.l1_r]}>11</Text>
                                        <View style={[styles.seed_phrase_box]}>
                                            <Text style={styles.seed_text}>helmet</Text>
                                        </View>
                                    </View>
                                    <View style={[layoutStyles.justify_center, layoutStyles.mgb_20, layoutStyles.gap_10]}>
                                        <Text style={[layoutStyles.l1_r]}>12</Text>
                                        <View style={[styles.seed_phrase_box]}>
                                            <Text style={styles.seed_text}>stamp</Text>
                                        </View>
                                    </View>
                                </View>
                                <TouchableOpacity style={styles.copy_btn}>
                                    <View style={[layoutStyles.justify_center, layoutStyles.gap_8]}>
                                        <Image 
                                            source={icons.copy}
                                            style={{ width: 12, height: 12 }}
                                        />
                                        <Text style={styles.copy_btn_text}>Copy</Text>
                                    </View>
                                </TouchableOpacity>
                            </View> 
                        : null}
                    </View>
                </>
            : null}

            <View style={styles.test_end}>
                <ButtonOne 
                    btnText={'Next'}
                    buttonPress={handleProgress}
                    status={btndisable ? true : false}
                    buttonStyles={{opacity: btndisable ? .5 : 1}}
                />
            </View>
        </View>
    );
}
 
const styles = StyleSheet.create({
    content: {
        flex: 1,
    },
    manual_box: {
        maxWidth: '100%',
        backgroundColor: colors.neutrals.neu2,
        borderRadius: 10,
        borderWidth: .2,
        borderColor: colors.neutrals.neu3
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
    copy_btn: {
        backgroundColor: colors.btn.btnbg,
        width: 100,
        paddingVertical: 8,
        borderRadius: 6,
        // display: 'flex',
        // alignItems: 'center',
        // justifyContent: 'center',
        position: 'absolute',
        bottom: -30,
        left: '37%'
    },
    copy_btn_text: {
        color: colors.btn.btncolor,
        fontWeight: '500',
        fontSize: 12,
    }
})

export default StepTwo;