import { ScrollView, Text, View, StyleSheet, TouchableOpacity } from "react-native";
import { textStyles } from "../../styles/text-styles";
import IconGeneralF from "../../components/icon-general-f";
import { layoutStyles } from "../../styles/layout";
import { icons } from "../../utilities/icons";
import { brandcolors } from "../../utilities/colors";
import InputCont from "../../components/input-container";
import { useState } from "react";
import ButtonOne from "../../components/custom-buttons/one";
import IconGeneral from "../../components/icon-general";

const ShowSeePhrase = ({ navigation }) => {


    const [password, setPassword] = useState(null)
    const [showpassword, setShowPassword] = useState(null)
    const [errorstate, setErrorstate] = useState(null)
    const [showphrase, setShowprase] = useState(null)


    const handleShowPassword = () => {
        if(!showpassword) {
            setShowPassword(true)
        } else {
            setShowPassword(null)
        }
    }

    const handleShowphrase = () => {
        if(!password) {
            setErrorstate('Enter your password to proceed')
        } else {
            setShowprase(true)
        }
    }

    return ( 
        <>
        
        
            <View style={[layoutStyles.generalFrame, layoutStyles.generalHPad, layoutStyles.generalTopPad]}>

                <View style={[layoutStyles.align_center_justify_space_btwn, layoutStyles.mgb_46]}>
                    <IconGeneralF 
                        boxstyle={{ width: 24, height: 24 }}
                        iconstyle={{ width: 6, height: 12 }}
                        iconsrc={icons.dark.angle_left}
                        ripplecolor={brandcolors.ripple}
                        iconfunc={() => navigation.goBack()}
                    />
                    <Text style={[textStyles.bold18, { color: brandcolors.pry[500] }]}>Show Seed Phrase</Text>
                    <View></View>
                </View>

                <ScrollView style={[layoutStyles.relative_position, { flex: 1 }]} showsVerticalScrollIndicator={false}>

                    {!showphrase ? <>
                        <Text style={[layoutStyles.mgb_40, textStyles.reg14, {color: brandcolors.pry[500]}]}>
                            Your Secret Phrase gives full access to your wallet, funds and account. Enter your password to reveal.
                        </Text>

                        <View style={[layoutStyles.mgb_40]}>
                            <InputCont 
                                labelText={'Password'}
                                placeholder={'Enter your password'}
                                iconRight={true}
                                iconSrc={showpassword ? icons.eye_slash : icons.eye}
                                iconFunc={handleShowPassword}
                                stEntry={showpassword ? false : true}
                                changeFunc={(value) => setPassword(value)}
                                inputValue={password}
                                boxStyles={layoutStyles.mgb_8}
                            />
                            {errorstate ? 
                                <Text style={[layoutStyles.e1_m, { marginTop: 5 }]}>{errorstate}</Text>
                            : null}
                        </View>

                        <ButtonOne 
                            btnText={'Show secret phrase'}
                            status={false}
                            buttonPress={handleShowphrase}
                        />
                    </> : null}

                    {showphrase ? <>

                        <View style={[styles.manual_box, layoutStyles.mgb_40, {paddingVertical: 24, paddingHorizontal: 25}]}>
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
                        </View>

                        <ButtonOne 
                            btnText={'Done'}
                            status={false}
                            buttonPress={() => navigation.goBack()}
                        />
                    </> : null}

                </ScrollView>

            </View>
        
        
        
        </>
    );
}


const styles = StyleSheet.create({
    manual_box: {
        maxWidth: '100%',
        backgroundColor: brandcolors.grey[100],
        // padding: 16,
        borderRadius: 16,
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
})



export default ShowSeePhrase;