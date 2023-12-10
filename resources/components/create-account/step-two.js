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
import ButtonOne from '../custom-buttons/one';

// styles
import { layoutStyles } from '../../styles/layout';
import { brandcolors, colors } from '../../utilities/colors';
import { icons } from '../../utilities/icons';
import { textStyles } from '../../styles/text-styles';
import IconGeneral from '../icon-general';

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
                    <Text style={[textStyles.bold20, layoutStyles.mgb_24, {color: brandcolors.sec[500]}]}>Secure your wallet</Text>

                    <View style={[styles.manual_box, layoutStyles.mgb_16, {paddingVertical: !showseedphrase ? 16 : 24, paddingHorizontal: !showseedphrase ? 16 : 25}]}>
                        <View style={[layoutStyles.mgb_24]}>
                            <Text style={[textStyles.bold16, layoutStyles.mgb_8, { color: brandcolors.grey[800] }]}>Manual</Text>
                            <Text style={[textStyles.reg12, { color: brandcolors.grey[500] }]}>
                                Please read this manual carefully to protect your digital assets effectively.
                            </Text>
                        </View>
                        <View style={[layoutStyles.mgb_24]}>
                            <Text style={[textStyles.bold16, layoutStyles.mgb_8, { color: brandcolors.grey[800] }]}>What is a Seed Phrase?</Text>
                            <Text style={[textStyles.reg12, { color: brandcolors.grey[500] }]}>
                                Your seed phrase is a crucial component in accessing and recovering your cryptocurrency wallets and accounts.
                            </Text>
                        </View>
                        <View style={[layoutStyles.mgb_24]}>
                            <Text style={[textStyles.bold16, layoutStyles.mgb_8, { color: brandcolors.grey[800] }]}>Dos and Don'ts</Text>
                            <View style={[layoutStyles.flex_row, layoutStyles.gap_5,]}>
                                <View style={[styles.list_dot]}></View>
                                <Text style={[textStyles.reg12, { color: brandcolors.grey[500] }]}>
                                    Do memorize your seed phrase if possible, but always keep a written copy as a backup.
                                </Text>
                            </View>
                            <View style={[layoutStyles.flex_row, layoutStyles.gap_5]}>
                                <View style={[styles.list_dot]}></View>
                                <Text style={[textStyles.reg12, { color: brandcolors.grey[500] }]}>
                                    Do Not store your seed phrase digitally, especially on cloud storage or email accounts.
                                </Text>
                            </View>
                            <View style={[layoutStyles.flex_row, layoutStyles.gap_5]}>
                                <View style={[styles.list_dot]}></View>
                                <Text style={[textStyles.reg12, { color: brandcolors.grey[500] }]}>
                                    Do Not share your seed phrase with anyone, even if they claim to be from customer support or a trustworthy entity.
                                </Text>
                            </View>
                        </View>
                        <View >
                            <Text style={[textStyles.bold16, layoutStyles.mgb_8, { color: brandcolors.grey[800] }]}>Conclusion</Text>
                            <Text style={[textStyles.reg12, { color: brandcolors.grey[500] }]}>
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
                    <View style={[layoutStyles.mgb_24]}>
                        <Text style={[textStyles.bold20, layoutStyles.mgb_8, {color: brandcolors.sec[500]}]}>Write down your seed phrase</Text>
                        <Text style={[textStyles.reg14, {color: brandcolors.grey[800]}]}>
                            Create multiple backups of your seed phrase. If possible, make two or 
                            more copies and store them in different secure locations. This ensures 
                            that you have a backup in case one copy is lost or damaged.
                        </Text>
                    </View>

                    <View style={[styles.manual_box, layoutStyles.mgb_40, 
                        {paddingVertical: !showseedphrase ? 16 : 24, paddingHorizontal: !showseedphrase ? 16 : 25}]}
                    >
                        {!showseedphrase ? <View style={[layoutStyles.alignCenter]}>
                            <View style={[layoutStyles.mgb_24, { width: 242 }]}>
                                <View style={[layoutStyles.align_center]}>
                                    <IconGeneral 
                                        boxstyle={[layoutStyles.mgb_8, { width: 24, height: 24 }]}
                                        iconstyle={{ width: 20, height: 20 }}
                                        iconsrc={icons.dark.eye_slash}
                                    />
                                </View>
                                <Text style={[textStyles.bold16, layoutStyles.text_align_center, layoutStyles.mgb_8, { color: brandcolors.grey[800] }]}>
                                    Tap the button below to reveal your seed phrase
                                </Text>
                                <Text style={[textStyles.reg12, layoutStyles.text_align_center, { color: brandcolors.grey[500] }]}>
                                    Please ensure you're alone
                                </Text>
                            </View>
                            <ButtonOne 
                                btnText={'View'}
                                status={false}
                                buttonPress={() => {
                                    setShowseedphrase(true)
                                    setBtndisable(null)
                                }}
                            />
                        </View> : null}

                        {showseedphrase ? 
                            <>
                                <View style={[layoutStyles.justify_space_btwn, layoutStyles.flex_wrap]}>
                                    <View style={[layoutStyles.justify_center, layoutStyles.mgb_20, layoutStyles.gap_10]}>
                                        <Text style={[textStyles.reg16, {color: brandcolors.grey[500]}]}>1</Text>
                                        <View style={[styles.seed_phrase_box]}>
                                            <Text style={[textStyles.reg16, { color: brandcolors.pry[500], textAlign: 'center' }]}>stage</Text>
                                        </View>
                                    </View>
                                    <View style={[layoutStyles.justify_center, layoutStyles.mgb_20, layoutStyles.gap_10]}>
                                        <Text style={[textStyles.reg16, {color: brandcolors.grey[500]}]}>7</Text>
                                        <View style={[styles.seed_phrase_box]}>
                                            <Text style={[textStyles.reg16, { color: brandcolors.pry[500], textAlign: 'center' }]}>express</Text>
                                        </View>
                                    </View>
                                    <View style={[layoutStyles.justify_center, layoutStyles.mgb_20, layoutStyles.gap_10]}>
                                        <Text style={[textStyles.reg16, {color: brandcolors.grey[500]}]}>2</Text>
                                        <View style={[styles.seed_phrase_box]}>
                                            <Text style={[textStyles.reg16, { color: brandcolors.pry[500], textAlign: 'center' }]}>two</Text>
                                        </View>
                                    </View>
                                    <View style={[layoutStyles.justify_center, layoutStyles.mgb_20, layoutStyles.gap_10]}>
                                        <Text style={[textStyles.reg16, {color: brandcolors.grey[500]}]}>8</Text>
                                        <View style={[styles.seed_phrase_box]}>
                                            <Text style={[textStyles.reg16, { color: brandcolors.pry[500], textAlign: 'center' }]}>diagram</Text>
                                        </View>
                                    </View>
                                    <View style={[layoutStyles.justify_center, layoutStyles.mgb_20, layoutStyles.gap_10]}>
                                        <Text style={[textStyles.reg16, {color: brandcolors.grey[500]}]}>3</Text>
                                        <View style={[styles.seed_phrase_box]}>
                                            <Text style={[textStyles.reg16, { color: brandcolors.pry[500], textAlign: 'center' }]}>guitar</Text>
                                        </View>
                                    </View>
                                    <View style={[layoutStyles.justify_center, layoutStyles.mgb_20, layoutStyles.gap_10]}>
                                        <Text style={[textStyles.reg16, {color: brandcolors.grey[500]}]}>9</Text>
                                        <View style={[styles.seed_phrase_box]}>
                                            <Text style={[textStyles.reg16, { color: brandcolors.pry[500], textAlign: 'center' }]}>dress</Text>
                                        </View>
                                    </View>
                                    <View style={[layoutStyles.justify_center, layoutStyles.mgb_20, layoutStyles.gap_10]}>
                                        <Text style={[textStyles.reg16, {color: brandcolors.grey[500]}]}>4</Text>
                                        <View style={[styles.seed_phrase_box]}>
                                            <Text style={[textStyles.reg16, { color: brandcolors.pry[500], textAlign: 'center' }]}>water</Text>
                                        </View>
                                    </View>
                                    <View style={[layoutStyles.justify_center, layoutStyles.mgb_20, layoutStyles.gap_10]}>
                                        <Text style={[textStyles.reg16, {color: brandcolors.grey[500]}]}>10</Text>
                                        <View style={[styles.seed_phrase_box]}>
                                            <Text style={[textStyles.reg16, { color: brandcolors.pry[500], textAlign: 'center' }]}>ocean</Text>
                                        </View>
                                    </View>
                                    <View style={[layoutStyles.justify_center, layoutStyles.mgb_20, layoutStyles.gap_10]}>
                                        <Text style={[textStyles.reg16, {color: brandcolors.grey[500]}]}>5</Text>
                                        <View style={[styles.seed_phrase_box]}>
                                            <Text style={[textStyles.reg16, { color: brandcolors.pry[500], textAlign: 'center' }]}>lab</Text>
                                        </View>
                                    </View>
                                    <View style={[layoutStyles.justify_center, layoutStyles.mgb_20, layoutStyles.gap_10]}>
                                        <Text style={[textStyles.reg16, {color: brandcolors.grey[500]}]}>11</Text>
                                        <View style={[styles.seed_phrase_box]}>
                                            <Text style={[textStyles.reg16, { color: brandcolors.pry[500], textAlign: 'center' }]}>bridge</Text>
                                        </View>
                                    </View>
                                    <View style={[layoutStyles.justify_center, layoutStyles.mgb_20, layoutStyles.gap_10]}>
                                        <Text style={[textStyles.reg16, {color: brandcolors.grey[500]}]}>6</Text>
                                        <View style={[styles.seed_phrase_box]}>
                                            <Text style={[textStyles.reg16, { color: brandcolors.pry[500], textAlign: 'center' }]}>helmet</Text>
                                        </View>
                                    </View>
                                    <View style={[layoutStyles.justify_center, layoutStyles.mgb_20, layoutStyles.gap_10]}>
                                        <Text style={[textStyles.reg16, {color: brandcolors.grey[500]}]}>12</Text>
                                        <View style={[styles.seed_phrase_box]}>
                                            <Text style={[textStyles.reg16, { color: brandcolors.pry[500], textAlign: 'center' }]}>stamp</Text>
                                        </View>
                                    </View>
                                </View>
                                <View style={[layoutStyles.alignCenter]}>
                                    <TouchableOpacity style={[layoutStyles.flex_row, layoutStyles.gap_8]}>
                                        <IconGeneral 
                                            boxstyle={{ width: 24, height: 24 }}
                                            iconstyle={{ width: 20, height: 20 }}
                                            iconsrc={icons.dark.copy}
                                        />
                                        <Text style={[textStyles.reg16, {color: brandcolors.pry[500]}]}>Copy</Text>
                                    </TouchableOpacity>
                                </View>
                            </>
                        : null}
                    </View>
                </>
            : null}

            <ButtonOne 
                btnText={'Next'}
                buttonPress={handleProgress}
                status={btndisable ? true : false}
            />

        </View>
    );
}
 
const styles = StyleSheet.create({
    content: {
        flex: 1,
    },
    manual_box: {
        maxWidth: '100%',
        backgroundColor: brandcolors.grey[100],
        // padding: 16,
        borderRadius: 16,
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
    list_dot: {
        width: 4,
        height: 4,
        borderRadius: 50,
        backgroundColor: brandcolors.grey[500],
        marginTop: 7,
    },
})

export default StepTwo;