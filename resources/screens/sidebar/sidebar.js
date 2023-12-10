import { Text, View ,
    StyleSheet,
    Image,
    TouchableOpacity,
    Pressable,
    ScrollView
} from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { layoutStyles } from "../../styles/layout";
import { brandcolors, colors } from "../../utilities/colors";
import { icons } from "../../utilities/icons";
import { images } from "../../utilities/images";
import ButtonOne from "../../components/custom-buttons/one";
import ButtonTwo from "../../components/custom-buttons/two";
import ArrowIcon from "../../components/arror-icon";
import ToggleIcon from "../../components/toggle-icon";
import { setCurrency, setHideAssets, setFaceId } from "../../redux/action";
import IconGeneral from "../../components/icon-general";
import { currency } from "../../utilities/currency";
import { useState } from "react";
import ToggleIconNF from "../../components/toggle-icon-nf";
import ArrowIconNF from "../../components/arrow-icon-nf";
import IconGeneralF from "../../components/icon-general-f";
import { textStyles } from "../../styles/text-styles";

const SideBar = ({ navigation }) => {

    const dispatch = useDispatch()

    const { hideassets, currencyvalue, faceid } = useSelector(state => state.appReducer)

    const [currencymodal, setCurrencymodal] = useState(null)


    const handleHideassets = () => {
        if(hideassets) {
            dispatch(setHideAssets(null))
        } else {
            dispatch(setHideAssets(true))
        }
    }

    const handleCurrencyModal = () => {
        if(!currencymodal) {
            setCurrencymodal(true)
        } else {
            setCurrencymodal(null)
        }
    }

    const handleCurrency = (value) => {
        dispatch(setCurrency(value))
        handleCurrencyModal()
    }

    const handleFaceID = () => {
        if(!faceid) {
            dispatch(setFaceId(true))
        } else {
            dispatch(setFaceId(null))
        }
    }

    return (
        <>
        

            <View style={[layoutStyles.generalFrame, layoutStyles.generalHPad, layoutStyles.generalTopPad]}>

                <View style={[layoutStyles.mgb_16]}>
                    <IconGeneralF 
                        boxstyle={{ width: 24, height: 24 }}
                        iconstyle={{ width: 6, height: 12 }}
                        iconsrc={icons.dark.angle_left}
                        iconfunc={() => navigation.goBack()}
                    />
                </View>

                <ScrollView style={[layoutStyles.relative_position, { flex: 1 }]} showsVerticalScrollIndicator={false}>

                    <View style={[layoutStyles.mgb_24]}>
                        <Text style={[layoutStyles.mgb_16, textStyles.reg14, {color: brandcolors.grey[500]}]}>Security</Text>

                        <View style={[styles.side_bar_box]}>
                            <TouchableOpacity style={[styles.side_bar_box_item, layoutStyles.align_center_justify_space_btwn, layoutStyles.mgb_16]}
                                onPress={() => navigation.navigate('Show Seed Phrase')}
                            >
                                <Text style={[textStyles.reg16, { color: brandcolors.grey[800] }]}>Show Secret Phrase</Text>
                                <View style={[layoutStyles.gap_10, layoutStyles.row_align_center]}>
                                    <IconGeneral 
                                        boxstyle={{ width: 24, height: 24 }}
                                        iconstyle={{ width: 7, height: 16, transform: [{rotate: '180deg'}] }}
                                        iconsrc={icons.dark.angle_left}
                                    />
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity style={[styles.side_bar_box_item, layoutStyles.align_center_justify_space_btwn, layoutStyles.mgb_16]}
                                onPress={() => navigation.navigate('Change Password')}
                            >
                                <Text style={[textStyles.reg16, { color: brandcolors.grey[800] }]}>Change Password</Text>
                                <View style={[layoutStyles.gap_10, layoutStyles.row_align_center]}>
                                    <IconGeneral 
                                        boxstyle={{ width: 24, height: 24 }}
                                        iconstyle={{ width: 7, height: 16, transform: [{rotate: '180deg'}] }}
                                        iconsrc={icons.dark.angle_left}
                                    />
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity style={[styles.side_bar_box_item, layoutStyles.align_center_justify_space_btwn, layoutStyles.mgb_16]}
                                onPress={handleFaceID}
                            >
                                <Text style={[textStyles.reg16, { color: brandcolors.grey[800] }]}>Enable FaceID</Text>
                                <View style={[layoutStyles.gap_10, layoutStyles.row_align_center]}>
                                    <ToggleIconNF 
                                        active={faceid}
                                    />
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity style={[styles.side_bar_box_item_nb, layoutStyles.align_center_justify_space_btwn]}
                                onPress={() => navigation.navigate('Choose Kyc')}
                            >
                                <Text style={[textStyles.reg16, { color: brandcolors.grey[800] }]}>Verification Status</Text>
                                <View style={[layoutStyles.gap_8, layoutStyles.row_align_center]}>
                                    <Text style={[textStyles.reg14, {color: brandcolors.grey[800]}]}>Unverified</Text>
                                    <IconGeneral 
                                        boxstyle={{ width: 24, height: 24 }}
                                        iconstyle={{ width: 7, height: 16, transform: [{rotate: '180deg'}] }}
                                        iconsrc={icons.dark.angle_left}
                                    />
                                </View>
                            </TouchableOpacity>
                        </View>
                    </View>


                    <View style={[layoutStyles.mgb_24]}>
                        <Text style={[layoutStyles.l1_m, layoutStyles.mgb_10]}>Personaliztion</Text>

                        <View style={[styles.side_bar_box, { zIndex: 999 }]}>

                            {/* label with modal starts */}
                            <View style={[ {zIndex: 999}]}>
                                <TouchableOpacity style={[styles.side_bar_box_item, layoutStyles.align_center_justify_space_btwn, layoutStyles.mgb_16]}
                                    onPress={handleCurrencyModal}
                                >
                                    <Text style={[textStyles.reg16, { color: brandcolors.grey[800] }]}>Currency</Text>
                                    <View style={[layoutStyles.gap_8, layoutStyles.row_align_center]}>
                                        <Text style={[textStyles.reg14, { color: brandcolors.grey[800] }]}>{currencyvalue.ticker}</Text>
                                        <IconGeneral 
                                            boxstyle={{ width: 24, height: 24 }}
                                            iconstyle={{ width: 7, height: 16, transform: [{rotate: '180deg'}] }}
                                            iconsrc={icons.dark.angle_left}
                                    />
                                    </View>
                                </TouchableOpacity>

                                <View style={[layoutStyles.relative_position, { zIndex: 999 }]}>
                                    {currencymodal ? 
                                        <View style={[styles.side_bar_box_modal]}>
                                            <View 
                                                style={[
                                                    layoutStyles.row_align_center, layoutStyles.gap_6, { padding: 10, borderBottomWidth: 1, borderBlockColor: colors.neutrals.white }
                                                ]}
                                            >
                                                <IconGeneral 
                                                    boxstyle={{ width: 14, height: 14 }}
                                                    iconstyle={{ width: 9, height: 7 }}
                                                    iconsrc={icons.check_light}
                                                />
                                                <Text style={[layoutStyles.l3_m_light]}>Select Currency</Text>
                                            </View>

                                            <View style={[ {paddingHorizontal: 30}]}>
                                                {currency ? 
                                                    currency.map((item, index) => (
                                                    <Pressable style={[index === 3 ? styles.modal_no_bottom_border : styles.modal_bottom_border, {paddingVertical: 10,}]}
                                                        key={item.value}
                                                        android_ripple={{color: 'rgba(248, 159, 27, .5)'}}
                                                        onPress={() => handleCurrency(item)}
                                                    >
                                                        <Text 
                                                            style={[
                                                                layoutStyles.l4_sb_light, 
                                                                {color: currencyvalue.value === item.value ? colors.brand.brand3 : colors.neutrals.white}
                                                            ]}
                                                        >
                                                            {item.label} {`[${item.ticker}]`}
                                                        </Text>
                                                    </Pressable>
                                                    ))
                                                : null}
                                            </View>
                                        </View>
                                    : null}
                                </View>
                            </View>
                            {/* label with modal ends */}

                            <TouchableOpacity style={[styles.side_bar_box_item_nb, layoutStyles.align_center_justify_space_btwn,]}>
                                <Text style={[textStyles.reg16, { color: brandcolors.grey[800] }]}>Theme</Text>
                                <View style={[layoutStyles.gap_8, layoutStyles.row_align_center]}>
                                    <Text style={[textStyles.reg14, { color: brandcolors.grey[800] }]}>Light</Text>
                                    <IconGeneral 
                                        boxstyle={{ width: 24, height: 24 }}
                                        iconstyle={{ width: 7, height: 16, transform: [{rotate: '180deg'}] }}
                                        iconsrc={icons.dark.angle_left}
                                    />
                                </View>
                            </TouchableOpacity>
                        </View>
                    </View>

                                    
                    <View style={[layoutStyles.mgb_24]}>
                        <Text style={[layoutStyles.l1_m, layoutStyles.mgb_10]}>Resources</Text>

                        <View style={[styles.side_bar_box, layoutStyles.mgb_20]}>
                            <TouchableOpacity style={[styles.side_bar_box_item, layoutStyles.align_center_justify_space_btwn, layoutStyles.mgb_16]}>
                                <View style={[layoutStyles.gap_8, layoutStyles.row_align_center]}>
                                    <IconGeneral 
                                        boxstyle={{ width: 24, height: 24 }}
                                        iconstyle={{ width: 20, height: 20, }}
                                        iconsrc={icons.dark.faq}
                                    />
                                    <Text style={[textStyles.reg16, {color: brandcolors.grey[800]}]}>FAQs</Text>
                                </View>
                                <View></View>
                            </TouchableOpacity>
                            <TouchableOpacity style={[styles.side_bar_box_item, layoutStyles.align_center_justify_space_btwn, layoutStyles.mgb_16]}>
                                <View style={[layoutStyles.gap_8, layoutStyles.row_align_center]}>
                                    <IconGeneral 
                                        boxstyle={{ width: 24, height: 24 }}
                                        iconstyle={{ width: 20, height: 20, }}
                                        iconsrc={icons.dark.pp}
                                    />
                                    <Text style={[textStyles.reg16, {color: brandcolors.grey[800]}]}>Privacy Policy</Text>
                                </View>
                                <View></View>
                            </TouchableOpacity>
                            <TouchableOpacity style={[styles.side_bar_box_item, layoutStyles.align_center_justify_space_btwn, layoutStyles.mgb_16]}>
                                <View style={[layoutStyles.gap_8, layoutStyles.row_align_center]}>
                                    <IconGeneral 
                                        boxstyle={{ width: 24, height: 24 }}
                                        iconstyle={{ width: 20, height: 20, }}
                                        iconsrc={icons.dark.support}
                                    />
                                    <Text style={[textStyles.reg16, {color: brandcolors.grey[800]}]}>Support</Text>
                                </View>
                                <View></View>
                            </TouchableOpacity>
                            <TouchableOpacity style={[styles.side_bar_box_item_nb, layoutStyles.align_center_justify_space_btwn]}>
                                <View style={[layoutStyles.gap_8, layoutStyles.row_align_center]}>
                                    <IconGeneral 
                                        boxstyle={{ width: 24, height: 24 }}
                                        iconstyle={{ width: 20, height: 20, }}
                                        iconsrc={icons.dark.socials}
                                    />
                                    <Text style={[textStyles.reg16, {color: brandcolors.grey[800]}]}>Social Media</Text>
                                </View>
                                <View></View>
                            </TouchableOpacity>
                        </View>
                    </View>

                    <View style={[layoutStyles.just_center, layoutStyles.mgb_16]}>
                        <TouchableOpacity style={[layoutStyles.row_align_center, layoutStyles.gap_14]}>
                            <IconGeneral 
                                boxstyle={{ width: 24, height: 24 }}
                                iconstyle={{ width: 19, height: 19, }}
                                iconsrc={icons.logout_red}
                            />
                            <Text style={[textStyles.reg16, {color: brandcolors.oth.red_2}]}>Logout</Text>
                        </TouchableOpacity>
                    </View>

                </ScrollView>


            </View>


        
        </> 
    );
}



const styles = StyleSheet.create({
    side_bar_contaoner: {
        flex: 1,
        backgroundColor: colors.neutrals.neu1,
        paddingTop: 10,
    },
    top_most: {
        width: '100%',
        paddingRight: 7,
        paddingLeft: 20,
    },
    dp_info_box: {
        marginBottom: 20,
        paddingBottom: 20,
        borderBottomWidth: .5,
        borderBottomColor: colors.neutrals.neu3,
        paddingHorizontal: 20,
    },
    side_bar_nav_box: {
        width: '100%',
        paddingHorizontal: 20,
    },
    side_bar_box: {
        backgroundColor: brandcolors.grey[50],
        borderRadius: 16,
        padding: 16,
    },
    side_bar_box_item: {
        paddingVertical: 8,
        borderBottomWidth: .5,
        borderBottomColor: brandcolors.grey[200]
    },
    side_bar_box_item_nb: {
        paddingVertical: 8,
    },
    side_bar_box_modal: {
        position: 'absolute',
        // top: 90,
        right: 0,
        backgroundColor: colors.btn.btnbg,
        width: 310,
        // height: 250,
        paddingBottom: 12,
        borderRadius: 6,
        zIndex: 99,
    },
    modal_bottom_border: {
        borderBottomWidth: 1, 
        borderBottomColor: colors.neutrals.white,
    },
    modal_no_bottom_border: {
        borderBottomWidth: 0, 
        borderBottomColor: '',
    },
})


export default SideBar;