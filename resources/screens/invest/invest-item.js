import { useState } from "react";
import { Text, View, 
    StyleSheet,
    TouchableOpacity,
    ScrollView,
    Pressable,
    Image,
    Modal,
} from "react-native";
import { layoutStyles } from "../../styles/layout";
import IconGeneralF from "../../components/icon-general-f";
import { icons } from "../../utilities/icons";
import { brandcolors, colors } from "../../utilities/colors";
import { textStyles } from "../../styles/text-styles";
import IconGeneral from "../../components/icon-general";
import { images } from "../../utilities/images";
import { chartdays } from "../../utilities/chart-day";
import { testHistory } from "../../utilities/test-history";
import { modalStyles } from "../../styles/modals";
import { formatDistanceToNow } from "date-fns";
import BackDrop from "../../components/backdrop";

const InvestItem = ({ navigation }) => {

    const [historymodal, setHistorymodal] = useState(null)
    const [viewchart, setViewchart] = useState(null)
    const [chartday, setChartday] = useState(chartdays[0].value)
    const [uninvestmodal, setUninvestmodal] = useState(false)

    const handleViewchart = () => {
        if(!viewchart) {
            setViewchart(true)
        } else {
            setViewchart(null)
        }
    }

    const setAlltoNull = () => {
        setHistorymodal(null)
        setUninvestmodal(false)
    }

    return ( 
        <>
        

            {historymodal ? 
                <BackDrop dropPress={setAlltoNull} />
            : null}

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

            <View style={[layoutStyles.generalFrame, layoutStyles.generalHPad, layoutStyles.generalTopPad]}>
                
                <View style={[layoutStyles.mgb_16]}>
                    <IconGeneralF 
                        boxstyle={{ width: 24, height: 24 }}
                        ripplecolor={brandcolors.ripple}
                        iconsrc={icons.dark.angle_left}
                        iconstyle={{ width: 7, height: 16 }}
                        iconfunc={() => navigation.goBack()}
                    />
                </View>

                <ScrollView showsVerticalScrollIndicator={false}>
                    <View style={[layoutStyles.mgb_38]}>
                        <View style={[layoutStyles.mgb_24, layoutStyles.align_center_justify_space_btwn]}>
                            <View>
                                <Text style={[layoutStyles.mgb_8, textStyles.reg14, {color: brandcolors.oth.grey}]}>Amount Invested</Text>
                                <View style={[layoutStyles.row_align_center, layoutStyles.gap_8]}>
                                    <View style={[styles.icon_box, layoutStyles.just_center]}>
                                        <IconGeneral 
                                            boxstyle={{ width: 16, height: 16 }}
                                            iconstyle={{ width: 13, height: 13 }}
                                            iconsrc={images.btc_i}
                                        />
                                    </View>
                                    <Text style={[textStyles.bold18, {color: brandcolors.grey[800]}]}>0.21 BTC</Text>
                                    <Text style={[textStyles.reg14, {color: brandcolors.grey[500]}]}>$732.69</Text>
                                </View>
                            </View>

                            <Pressable style={[layoutStyles.row_align_center, layoutStyles.gap_8]}
                                android_ripple={{ color: brandcolors.ripple_active }}
                                onPress={() => setUninvestmodal(true)}
                            >
                                <View style={[layoutStyles.flexCenter, {width: 24, height: 24}]}>
                                    <View style={{width: 16, height: 1.5, backgroundColor: brandcolors.sec[500]}}></View>
                                </View>
                                <Text style={[textStyles.reg10, {color: brandcolors.sec[500]}]}>Uninvest</Text>
                            </Pressable>
                        </View>

                        <View style={[layoutStyles.mgb_24, layoutStyles.align_center_justify_space_btwn]}>
                            <View>
                                <Text style={[textStyles.reg12, layoutStyles.mgb_8, {color: brandcolors.oth.grey}]}>Amount Invested</Text>
                                <View style={[layoutStyles.row_align_center, layoutStyles.gap_8]}>
                                    <Text style={[textStyles.bold14, {color: brandcolors.grey[800]}]}>0.39 BTC</Text>
                                    <Text style={[textStyles.reg12, {color: brandcolors.grey[500]}]}>$732.69</Text>
                                </View>
                            </View>
                            <View>
                                <Text style={[textStyles.reg12, layoutStyles.mgb_8, layoutStyles.text_align_right, {color: brandcolors.oth.grey}]}>Reward</Text>
                                <View style={[layoutStyles.row_align_center, layoutStyles.gap_8]}>
                                    <Text style={[textStyles.bold14, {color: brandcolors.grey[800]}]}>0.39 BTC</Text>
                                    <Text style={[textStyles.reg12, {color: brandcolors.grey[500]}]}>$732.69</Text>
                                </View>
                            </View>
                        </View>

                        <View style={[layoutStyles.align_center_justify_space_btwn]}>
                            <TouchableOpacity style={[layoutStyles.just_center, styles.action_btn]}>
                                <IconGeneral 
                                    boxstyle={{ width: 16, height: 16, marginBottom: 4 }}
                                    iconstyle={{ width: 13, height: 12 }}
                                    iconsrc={icons.light.bridge_light_r}
                                />
                                <Text style={[textStyles.bold12, { color: brandcolors.white }]}>Bridge</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={[layoutStyles.just_center, styles.action_btn]}>
                                <IconGeneral 
                                    boxstyle={{ width: 16, height: 16, marginBottom: 4 }}
                                    iconstyle={{ width: 13, height: 12 }}
                                    iconsrc={icons.light.swap}
                                />
                                <Text style={[textStyles.bold12, { color: brandcolors.white }]}>Swap</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={[layoutStyles.just_center, styles.action_btn]}>
                                <IconGeneral 
                                    boxstyle={{ width: 16, height: 16, marginBottom: 4 }}
                                    iconstyle={{ width: 13, height: 12 }}
                                    iconsrc={icons.light.deposit}
                                />
                                <Text style={[textStyles.bold12, { color: brandcolors.white }]}>Claim</Text>
                            </TouchableOpacity>
                        </View>
                    </View>

                    <View style={[layoutStyles.mgb_32]}>
                        <View style={[layoutStyles.mgb_16, layoutStyles.align_center_justify_space_btwn]}>
                            <Text style={[textStyles.bold16, { color: brandcolors.grey[800] }]}>EUR ~$0.918</Text>
                            <Pressable style={[layoutStyles.row_align_center, layoutStyles.gap_3]}
                                android_ripple={{ color: brandcolors.ripple }}
                                onPress={handleViewchart}
                            >
                                <Text style={[textStyles.reg16, { color: brandcolors.oth.green }]}>$4.36 (+0.2%)</Text>
                                <IconGeneral 
                                    boxstyle={{ width: 16, height: 16 }}
                                    iconstyle={{ width: 11, height: 5, }}
                                    iconsrc={icons.angle_up_green}
                                />
                            </Pressable>
                        </View>

                        <View>
                            <View style={[styles.chart_days_box, layoutStyles.align_center_justify_space_btwn, layoutStyles.mgb_24]}>
                                {chartdays ? 
                                    chartdays.map((item) => (
                                        <TouchableOpacity 
                                            style={[
                                                styles.chart_day_item, layoutStyles.just_center,
                                                {backgroundColor: chartday === item.value ? brandcolors.pry[500] : brandcolors.bg}
                                            ]}
                                            key={item.value}
                                            onPress={() => setChartday(item.value)}
                                        >
                                            <Text style={[
                                                    textStyles.bold12, { color: chartday !== item.value ? brandcolors.grey[500] : brandcolors.sec[500] }
                                                ]}
                                            >
                                                {item.label}
                                            </Text>
                                        </TouchableOpacity>
                                    ))
                                : null}
                            </View>
                            <Image 
                                source={images.line_demo_2}
                                style={{ width: '100%', height: 201 }}
                            />
                        </View>
                    </View>

                    <View>
                        <Text style={[textStyles.reg16, layoutStyles.mgb_8, { color: brandcolors.grey[800] }]}>Transactions</Text>

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
                    </View>
                </ScrollView>


                <Modal
                    visible={uninvestmodal}
                    transparent={true}
                    onRequestClose={setAlltoNull}
                    animationType='slide'
                    hardwareAccelerated={true}
                >
                    <BackDrop dropPress={setAlltoNull} />
                    <View style={[modalStyles.modal_container]}>
                        <View style={[modalStyles.uninvest_modal_box]}>
                            <Text style={[textStyles.bold16, layoutStyles.mgb_18, layoutStyles.text_align_center, {color: brandcolors.grey[800]}]}>
                                Uninvest
                            </Text>
                            <Text style={[textStyles.reg16, layoutStyles.mgb_18, layoutStyles.text_align_center, {color: brandcolors.grey[500]}]}>
                                Are you sure you want to uninvest your funds?
                            </Text>

                            <View style={[layoutStyles.align_center_justify_space_btwn]}>
                                <TouchableOpacity style={[modalStyles.uninvest_modal_btn_nb, layoutStyles.just_center]}>
                                    <Text style={[textStyles.bold16, {color: brandcolors.pry[500]}]}>Yes</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={[modalStyles.uninvest_modal_btn, layoutStyles.just_center]}>
                                    <Text style={[textStyles.bold16, {color: brandcolors.white}]}>No</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                </Modal>



            </View>
        
        
        
        
        </>
    );
}


const styles = StyleSheet.create({
    icon_box: {
        backgroundColor: colors.neutrals.neu2,
        width: 24,
        height: 24,
        borderRadius: 4,
        borderWidth: .5,
        borderColor: brandcolors.pry[500],
    },
    action_btn: {
        backgroundColor: brandcolors.pry[500],
        width: '28%',
        height: 51,
        borderRadius: 8,
        padding: 8,
    },
    chart_days_box: {
        width: '100%',
        height: 28,
        borderRadius: 16,
        borderWidth: 1,
        borderColor: brandcolors.grey[200],
        paddingVertical: 4,
        paddingHorizontal: 8,
    },
    chart_day_item: {
        width: '15%',
        height: 20,
        // backgroundColor: 'red',
        // alignItems: 'center',
        borderRadius: 10,
    },
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

 
export default InvestItem;