import { Text, View, 
    StyleSheet,
    ScrollView,
    Image,
    Pressable
} from "react-native";
import { layoutStyles } from "../../styles/layout";
import IconGeneralF from "../../components/icon-general-f";
import { icons } from "../../utilities/icons";
import { textStyles } from "../../styles/text-styles";
import { brandcolors } from "../../utilities/colors";
import { testHistory } from "../../utilities/test-history";
import { colors } from "../../utilities/colors";
import formatDistanceToNow from 'date-fns/formatDistanceToNow'
import formatDistance from "date-fns/formatDistance";
import { useState } from "react";
import BackDrop from "../../components/backdrop";
import { modalStyles } from "../../styles/modals";




const History = ({ navigation }) => {


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
                


                <View style={[layoutStyles.align_center_justify_space_btwn, layoutStyles.mgb_24]}>
                    <IconGeneralF 
                        boxstyle={{ width: 24, height: 24 }}
                        iconstyle={{ width: 6, height: 12 }}
                        iconsrc={icons.dark.angle_left}
                        iconfunc={() => navigation.goBack()}
                    />
                    <Text style={[textStyles.bold18, { color: brandcolors.black }]}>History</Text>
                    <View></View>
                </View>

                <ScrollView style={{ flex: 1 }}>

                    {testHistory ? 
                        testHistory.map((item) => (
                            <Pressable style={[styles.recent_item, layoutStyles.align_center_justify_space_btwn]} 
                                key={item.time}
                                android_ripple={{ color: brandcolors.ripple }}
                                onPress={() => setHistorymodal(item)}
                            >
                                <View style={[layoutStyles.row_align_center, layoutStyles.gap_10]}>
                                    <View style={[styles.recent_icon_box]}>
                                        <Image 
                                            source={item.logo}
                                            style={{ width: 24, height: 24 }}
                                            resizeMode="contain"
                                        />
                                    </View>
                                    <View>
                                        <Text style={[textStyles.reg16, { color: brandcolors.grey[800] }]}>{item.title}</Text>
                                        <Text style={[textStyles.reg14, { color: brandcolors.grey[500] }]}>
                                            {formatDistanceToNow(new Date(item.time), { addSuffix: true })}
                                        </Text>
                                    </View>
                                </View>
                                <View style={[]}>
                                    <Text style={[textStyles.reg16, { color: brandcolors.grey[800] }]}>{item.amount} {item.tokenticker}</Text>
                                </View>
                            </Pressable>
                        ))
                    : null}

                </ScrollView>
                

            </View>


            {historymodal ? 
                <View style={[modalStyles.tmp_recent_modal]}> 
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
                                <Text style={[textStyles.reg12, { color: brandcolors.grey[800] }]}>From</Text>
                                <Text style={[textStyles.reg12, layoutStyles.text_align_right, { color: brandcolors.grey[800] }]}>0X3728...32G5</Text>
                            </View>
                            <View style={[layoutStyles.align_center_justify_space_btwn, {paddingVertical: 8}]}>
                                <Text style={[textStyles.reg12, { color: brandcolors.grey[800] }]}>To</Text>
                                <Text style={[textStyles.reg12, layoutStyles.text_align_right, { color: brandcolors.grey[800] }]}>0X3728...32G5</Text>
                            </View>
                        </View>

                        <View style={[modalStyles.tmp_recent_border_box]}>
                            <View style={[layoutStyles.align_center_justify_space_btwn, layoutStyles.mgb_15]}>
                                <Text style={[textStyles.reg12, { color: brandcolors.grey[800] }]}>Amount</Text>
                                <Text style={[textStyles.bold12, layoutStyles.text_align_right, { color: brandcolors.grey[800] }]}>0.13 ETH</Text>
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
    recent_item: {
        marginBottom: 16,
        paddingVertical: 8,
    },
    recent_icon_box: {
        width: 40,
        height: 40,
        borderRadius: 8,
        backgroundColor: colors.neutrals.neu2,
        justifyContent: 'center',
        alignItems: 'center',
    },
})



 
export default History;