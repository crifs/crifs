import { Text, View, 
    StyleSheet,
    Pressable,
} from "react-native";
import { layoutStyles } from "../../styles/layout";
import IconGeneralF from "../../components/icon-general-f";
import { icons } from "../../utilities/icons";
import { brandcolors, colors } from "../../utilities/colors";
import { textStyles } from "../../styles/text-styles";
import IconGeneral from "../../components/icon-general";
import BackDrop from "../../components/backdrop";
import { modalStyles } from "../../styles/modals";
import { useState } from "react";


const BridgeHsitory = ({ navigation }) => {

    const [historymodal, setHistorymodal] = useState(null)

    const setAlltoNull = () => {
        setHistorymodal(null)
    }

    return ( 
        <>

            {historymodal ? 
                <BackDrop 
                    dropPress={setAlltoNull}
                />
            : null}

            <View style={[layoutStyles.generalFrame, layoutStyles.generalHPad, layoutStyles.generalTopPad]}>
                
                <View style={[layoutStyles.align_center_justify_space_btwn, layoutStyles.mgb_31]}>
                    <IconGeneralF 
                        boxstyle={{ width: 24, height: 24 }}
                        iconstyle={{ width: 20, height: 20 }}
                        ripplecolor={{ color: brandcolors.ripple }}
                        iconsrc={icons.dark.angle_left}
                        iconfunc={() => navigation.goBack()}
                    />
                    <Text style={[textStyles.bold18, {color: brandcolors.grey[800]}]}>Bridge History</Text>
                    <View></View>
                </View>

                <View>
                    <Pressable style={[layoutStyles.align_center_justify_space_btwn, layoutStyles.mgb_16, styles.history_item,]}
                        android_ripple={{ color: brandcolors.ripple }}
                        onPress={() => setHistorymodal(true)}
                    >
                        <View style={[layoutStyles.row_align_center, layoutStyles.gap_8]}>
                            <View style={[layoutStyles.just_center, styles.icon_box]}>
                                <IconGeneral 
                                    boxstyle={{ width: 24, hieght: 24 }}
                                    iconstyle={{ width: 20, height: 14 }}
                                    iconsrc={icons.active.bridge}
                                />
                            </View>
                            <View style={[layoutStyles.gap_40, layoutStyles.row_align_center]}>
                                <View>
                                    <Text style={[layoutStyles.mgb_4, textStyles.reg16, {color: brandcolors.grey[800]}]}>Ethereum</Text>
                                    <Text style={[textStyles.reg14, {color: brandcolors.grey[800]}]}>USDT</Text>
                                </View>
                                <View>
                                    <Text style={[layoutStyles.mgb_4, textStyles.reg16, {color: brandcolors.grey[800]}]}>Polygon</Text>
                                    <Text style={[textStyles.reg14, {color: brandcolors.grey[800]}]}>USDT</Text>
                                </View>
                            </View>
                        </View>
                        <View>
                            <Text style={[textStyles.reg16, layoutStyles.mgb_4, {color: brandcolors.grey[500]}]}>12.07</Text>
                            <Text style={[textStyles.reg16, {color: brandcolors.grey[500]}]}>27 Aug</Text>
                        </View>
                    </Pressable>
                </View>

            </View>

            {historymodal ? 
                <View style={[modalStyles.bridge_recent_modal]}> 
                    <View style={[modalStyles.tmp_recent_modal_inner]}>
                        <View style={[layoutStyles.mgb_16]}>
                            <Text style={[layoutStyles.text_align_center, textStyles.bold14, { color: brandcolors.grey[800] }]}>
                                Sent ETH
                            </Text>
                        </View>

                        
                        <View style={[modalStyles.tmp_recent_line_box]}>
                            <View style={[layoutStyles.align_center_justify_space_btwn, layoutStyles.mgb_9, {paddingVertical: 8}]}>
                                <Text style={[textStyles.reg12, { color: brandcolors.grey[800] }]}>Status</Text>
                                <Text style={[textStyles.reg12, layoutStyles.text_align_right, { color: brandcolors.grey[800] }]}>Confirmed</Text>
                            </View>
                            <View style={[layoutStyles.align_center_justify_space_btwn, layoutStyles.mgb_9, {paddingVertical: 8}]}>
                                <Text style={[textStyles.reg12, { color: brandcolors.grey[800] }]}>Date</Text>
                                <Text style={[textStyles.reg12, layoutStyles.text_align_right, { color: brandcolors.grey[800] }]}>27 April, 2023</Text>
                            </View>
                            <View style={[layoutStyles.align_center_justify_space_btwn, {paddingVertical: 8}]}>
                                <Text style={[textStyles.reg12, { color: brandcolors.grey[800] }]}>Time</Text>
                                <Text style={[textStyles.reg12, layoutStyles.text_align_right, { color: brandcolors.grey[800] }]}>11:43am</Text>
                            </View>
                        </View>

                        <View style={[modalStyles.tmp_recent_line_box]}>
                            <View style={[layoutStyles.align_center_justify_space_btwn, layoutStyles.mgb_9, {paddingVertical: 8}]}>
                                <Text style={[textStyles.reg12, { color: brandcolors.grey[800] }]}>Bridged From</Text>
                                <View>
                                    <Text style={[textStyles.reg12, layoutStyles.text_align_right, layoutStyles.mgb_4, { color: brandcolors.grey[800] }]}>
                                        Ethereum
                                    </Text>
                                    <Text style={[textStyles.reg12, layoutStyles.text_align_right, { color: brandcolors.grey[500] }]}>USDT</Text>
                                </View>
                            </View>
                            <View style={[layoutStyles.align_center_justify_space_btwn, {paddingVertical: 8}]}>
                                <Text style={[textStyles.reg12, { color: brandcolors.grey[800] }]}>Bridged To</Text>
                                <View>
                                    <Text style={[textStyles.reg12, layoutStyles.text_align_right, { color: brandcolors.grey[800] }]}>Polygon</Text>
                                    <Text style={[textStyles.reg12, layoutStyles.text_align_right, { color: brandcolors.grey[500] }]}>USDT</Text>
                                </View>
                            </View>
                        </View>

                        <View style={[modalStyles.tmp_recent_border_box]}>
                            <View style={[layoutStyles.align_center_justify_space_btwn, layoutStyles.mgb_15]}>
                                <Text style={[textStyles.reg12, { color: brandcolors.grey[800] }]}>Bridged Amount</Text>
                                <Text style={[textStyles.bold12, layoutStyles.text_align_right, { color: brandcolors.grey[800] }]}>0.13 ETH</Text>
                            </View>
                            <View style={[layoutStyles.justify_space_btwn, layoutStyles.mgb_15]}>
                                <Text style={[textStyles.reg12, { color: brandcolors.grey[800] }]}>Amount Received</Text>
                                <View>
                                    <Text style={[textStyles.bold12, layoutStyles.text_align_right, layoutStyles.mgb_4, { color: brandcolors.grey[800] }]}>
                                        0.098 Matic
                                    </Text>
                                    <Text style={[textStyles.reg12, layoutStyles.text_align_right, { color: brandcolors.grey[800] }]}>$163.97</Text>
                                </View>
                            </View>
                            <View style={[layoutStyles.align_center_justify_space_btwn, layoutStyles.mgb_15]}>
                                <Text style={[textStyles.reg12, { color: brandcolors.grey[800] }]}>Estimated network fee</Text>
                                <Text style={[textStyles.bold12, layoutStyles.text_align_right, { color: brandcolors.grey[800] }]}>0.00013 ETH</Text>
                            </View>
                            <View style={[layoutStyles.align_center_justify_space_btwn]}>
                                <Text style={[textStyles.reg12, { color: brandcolors.grey[800] }]}>Total amount</Text>
                                <View>
                                    <Text style={[textStyles.bold12, { color: brandcolors.grey[800] }]}>0.13013 ETH</Text>
                                    <Text style={[textStyles.reg12, layoutStyles.text_align_right, { color: brandcolors.grey[500] }]}>$203.06</Text>
                                </View>
                            </View>
                        </View>
                        
                    </View>
                </View>
            : null}


        </>
    );
}


const styles = StyleSheet.create({
    icon_box: {
        width: 40,
        height: 40,
        backgroundColor: colors.neutrals.neu2,
        borderRadius: 8,
    },
    history_item: {
        paddingVertical: 8,
        height: 56,
    },
})


export default BridgeHsitory;