import { useEffect, useState } from "react";
import { Text, View, 
    StyleSheet,
    Image,
    TouchableOpacity,
    Pressable,
    ScrollView,
    Modal,
    TextInput
} from "react-native";
import { useSelector } from "react-redux";
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
import formatDistanceToNow from 'date-fns/formatDistanceToNow'
import BackDrop from "../../components/backdrop";
import ButtonOne from "../../components/custom-buttons/one";






const FiatAction = ({ navigation }) => {

    const { fiatasset } = useSelector(state => state.appReducer)

    const [viewchart, setViewchart] = useState(null)
    const [chartday, setChartday] = useState(chartdays[0].value)
    const [historymodal, setHistorymodal] = useState(null)
    const [swapmodal, setSwapmodal] = useState(false)
    const [swapreview, setSwapreview] = useState(null)

    const [defaultswap, setDefaultswap] = useState(true)
    const [swapFrom, setSwapfrom] = useState(null)
    const [swapTo, setSwapto] = useState(null)
    const [selectedAsset, setSelectedasset] = useState(null)
    const [swapFromvalue, setSwapfromvalue] = useState(null)
    const [swapTovalue, setSwaptovalue] = useState(null)


    useEffect(() => {
        checkFiatasset()
    }, [])

    const checkFiatasset = () => {
        if(!fiatasset) {
            navigation.navigate('TabsScreen')
        } else {
            setDefaultSwapsValue()
        }
    }

    const setDefaultSwapsValue = () => {
        if(fiatasset) {
            setSwapfrom(fiatasset)
        }
        setSwapto(selectedAsset)
    }

    const handleViewchart = () => {
        if(!viewchart) {
            setViewchart(true)
        } else {
            setViewchart(null)
        }
    }

    const setAlltoNull = () => {
        setHistorymodal(null)
    }

    const handleSwap = () => {
        setSwapmodal(false)
        setSwapreview(null)
    }

    const handleDefaultposition = () => {
        if(defaultswap) {
            setDefaultswap(false)
            setSwapfrom(selectedAsset)
            setSwapto(fiatasset)
        } else {
            setDefaultswap(true)
            setSwapfrom(fiatasset)
            setSwapto(selectedAsset)
        }
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


            <View style={[layoutStyles.generalFrame, layoutStyles.generalTopPad, layoutStyles.generalHPad]}>
                <View style={[layoutStyles.mgb_24]}>
                    <IconGeneralF 
                        boxstyle={{ width: 24, height: 24 }}
                        iconstyle={{ width: 7, height: 16 }}
                        ripplecolor={brandcolors.ripple}
                        iconsrc={icons.dark.angle_left}
                        iconfunc={() => navigation.goBack()}
                    />
                </View>

                <ScrollView style={{ flex: 1 }} showsVerticalScrollIndicator={false}>
                    
                    <View style={[layoutStyles.mgb_24, layoutStyles.gap_8, layoutStyles.row_align_center]}>
                        <View style={[styles.token_logo_box, layoutStyles.just_center]}>
                            {fiatasset ? 
                                <Image 
                                    source={fiatasset.logo}
                                    style={{ width: 20, height: 20 }}
                                    resizeMode="contain"
                                /> 
                            : null}
                        </View>
                        <View>
                            <Text style={[textStyles.bold16, layoutStyles.mgb_8, { color: brandcolors.grey[800] }]}>{fiatasset ? fiatasset.ticker : null}</Text>
                            <View style={[layoutStyles.gap_8, layoutStyles.row_align_center]}>
                                <Text style={[textStyles.reg14, { color: brandcolors.grey[800] }]}>{fiatasset ? fiatasset.amount : null}</Text>
                                <Text style={[textStyles.reg14, { color: brandcolors.grey[500] }]}>$ {fiatasset ? fiatasset.amount_in_bucks : null}</Text>
                            </View>
                        </View>
                    </View>

                    <View style={[layoutStyles.align_center_justify_space_btwn, layoutStyles.mgb_48]}>
                        <TouchableOpacity style={[styles.action_btn, layoutStyles.just_center]}
                            onPress={() => navigation.navigate('Select Card')}
                        >
                            <IconGeneral 
                                boxstyle={{ width: 16, height: 16, marginBottom: 4 }}
                                iconstyle={{ width: 13, height: 12 }}
                                iconsrc={icons.light.deposit}
                            />
                            <Text style={[textStyles.bold12, { color: brandcolors.white }]}>Deposit</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={[styles.action_btn, layoutStyles.just_center]}
                            onPress={() => setSwapmodal(true)}
                        >
                            <IconGeneral 
                                boxstyle={{ width: 16, height: 16, marginBottom: 4 }}
                                iconstyle={{ width: 11, height: 11 }}
                                iconsrc={icons.light.swap}
                            />
                            <Text style={[textStyles.bold12, { color: brandcolors.white }]}>Swap</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={[styles.action_btn, layoutStyles.just_center]}>
                            <IconGeneral 
                                boxstyle={{ width: 16, height: 16, marginBottom: 4 }}
                                iconstyle={{ width: 13, height: 12 }}
                                iconsrc={icons.light.withdraw}
                            />
                            <Text style={[textStyles.bold12, { color: brandcolors.white }]}>Withdraw</Text>
                        </TouchableOpacity>
                    </View>

                    <View style={[layoutStyles.mgb_40]}>
                        <View style={[layoutStyles.mgb_16, layoutStyles.align_center_justify_space_btwn]}>
                            <Text style={[textStyles.bold16, { color: brandcolors.grey[800] }]}>EUR ~$0.918</Text>
                            <Pressable style={[layoutStyles.row_align_center, layoutStyles.gap_3]}
                                android_ripple={{ color: brandcolors.ripple }}
                                onPress={handleViewchart}
                            >
                                <Text style={[textStyles.reg16, { color: brandcolors.oth.green }]}>$4.36 (+0.2%)</Text>
                                <IconGeneral 
                                    boxstyle={{ width: 16, height: 16 }}
                                    iconstyle={{ width: 11, height: 5 }}
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
            </View>

            <Modal
                visible={swapmodal}
                transparent={true}
                onRequestClose={()=>setSwapmodal(false)}
                animationType='slide'
                hardwareAccelerated={true}
            >
                <BackDrop dropPress={() => setSwapmodal(false)} />
                <View style={modalStyles.modal_container}>
                    <View style={modalStyles.swap_box}>


                        {!swapreview ? 
                            <>  
                                <View style={[layoutStyles.mgb_24, layoutStyles.align_center_justify_space_btwn]}>
                                    <View></View>
                                    <Text style={[textStyles.bold14, { color: brandcolors.grey[800] }]}>Swap</Text>
                                    <IconGeneralF 
                                        boxstyle={{ width: 34, height: 24 }}
                                        iconstyle={{ width: 8, height: 8 }}
                                        ripplecolor={{ color: brandcolors.ripple }}
                                        iconsrc={icons.dark.cancel}
                                        iconfunc={() => setSwapmodal(false)}
                                    />
                                </View>

                                <View style={[layoutStyles.mgb_24]}>
                                    <View style={[layoutStyles.mgb_8, layoutStyles.align_center_justify_space_btwn]}>
                                        <Text style={[textStyles.reg14, { color: brandcolors.grey[500] }]}>Asset</Text>
                                        <Text style={[textStyles.reg14, { color: brandcolors.grey[500] }]}>Amount</Text>
                                    </View>
                                    <View style={[layoutStyles.mgb_8, modalStyles.swap_input_box, layoutStyles.align_center_justify_space_btwn]}>
                                        {defaultswap ? 
                                            <View style={[layoutStyles.row_align_center, layoutStyles.gap_8]}>
                                                <View style={[layoutStyles.just_center, modalStyles.swap_asset_icon_box]}>
                                                    {fiatasset ? <IconGeneral 
                                                        boxstyle={{ width: 16, height: 16 }}
                                                        iconstyle={{ width: 13, height: 13 }}
                                                        iconsrc={fiatasset.logo}
                                                    /> : null}
                                                </View>
                                                <Text style={[textStyles.reg14, { color: brandcolors.grey[800] }]}>{fiatasset ? fiatasset.ticker : null}</Text>
                                            </View>
                                        : 
                                            <Pressable style={[layoutStyles.row_align_center, layoutStyles.gap_8]}
                                                android_ripple={{ color: brandcolors.ripple }}
                                            >
                                                <IconGeneral 
                                                    boxstyle={{ width: 16, height: 16 }}
                                                    iconstyle={{ width: 11, height: 5 }}
                                                    iconsrc={icons.dark.angle_down}
                                                />
                                                <Text style={[textStyles.reg14, { color: brandcolors.grey[800] }]}>Select Fiat</Text>
                                            </Pressable>
                                        }

                                        <View style={[layoutStyles.row_align_center, layoutStyles.gap_8]}>
                                            <TextInput 
                                                placeholder="0.00"
                                                placeholderTextColor={brandcolors.grey[800]}
                                                style={[textStyles.reg14, {color: brandcolors.grey[800]}]}
                                            />
                                            <TouchableOpacity>
                                                <Text style={[textStyles.reg14, {color: brandcolors.sec[500]}]}>Max</Text>
                                            </TouchableOpacity>
                                        </View>
                                    </View>
                                    <View style={[layoutStyles.align_center_justify_space_btwn]}>
                                        <Text style={[textStyles.reg14, { color: brandcolors.grey[500] }]}>Balance</Text>
                                        <Text style={[textStyles.reg14, { color: brandcolors.grey[800] }]}>$244.95</Text>
                                    </View>
                                </View>

                                <View style={[layoutStyles.just_center, layoutStyles.mgb_24]}>
                                    <IconGeneralF 
                                        boxstyle={{ width: 24, height: 24 }}
                                        iconstyle={{ width: 14, height: 14 }}
                                        iconsrc={icons.active.swap}
                                        ripplecolor={{ color: brandcolors.ripple }}
                                        iconfunc={handleDefaultposition}
                                    />
                                </View>

                                <View style={[layoutStyles.mgb_24]}>
                                    <View style={[layoutStyles.mgb_8, layoutStyles.align_center_justify_space_btwn]}>
                                        <Text style={[textStyles.reg14, { color: brandcolors.grey[500] }]}>Asset</Text>
                                        <Text style={[textStyles.reg14, { color: brandcolors.grey[500] }]}>Est. Receive</Text>
                                    </View>
                                    <View style={[layoutStyles.mgb_8, modalStyles.swap_input_box, layoutStyles.align_center_justify_space_btwn]}>
                                        {!defaultswap ? 
                                            <View style={[layoutStyles.row_align_center, layoutStyles.gap_8]}>
                                                <View style={[layoutStyles.just_center, modalStyles.swap_asset_icon_box]}>
                                                    {fiatasset ? <IconGeneral 
                                                        boxstyle={{ width: 16, height: 16 }}
                                                        iconstyle={{ width: 13, height: 13 }}
                                                        iconsrc={fiatasset.logo}
                                                    /> : null}
                                                </View>
                                                <Text style={[textStyles.reg14, { color: brandcolors.grey[800] }]}>{fiatasset ? fiatasset.ticker : null}</Text>
                                            </View>
                                        : 
                                            <Pressable style={[layoutStyles.row_align_center, layoutStyles.gap_8]}
                                                android_ripple={{ color: brandcolors.ripple }}
                                            >
                                                <IconGeneral 
                                                    boxstyle={{ width: 16, height: 16 }}
                                                    iconstyle={{ width: 11, height: 5 }}
                                                    iconsrc={icons.dark.angle_down}
                                                />
                                                <Text style={[textStyles.reg14, { color: brandcolors.grey[800] }]}>Select Fiat</Text>
                                            </Pressable>
                                        }

                                        <Text style={[textStyles.reg14, {color: brandcolors.grey[800]}]}>0</Text>
                                    </View>
                                    <Text style={[textStyles.reg14, { color: brandcolors.grey[500] }]}>Spread 32</Text>
                                </View>

                                <ButtonOne 
                                    btnText={'Proceed'}
                                    status={false}
                                    buttonPress={() => setSwapreview(true)}
                                />
                            </>
                        : null}

                        {swapreview ? 
                            <>
                                <View style={[layoutStyles.align_center_justify_space_btwn, layoutStyles.mgb_15]}>
                                    <IconGeneralF 
                                        boxstyle={{ width: 24, height: 24 }}
                                        iconstyle={{ width: 7, height: 16 }}
                                        iconsrc={icons.dark.angle_left}
                                        ripplecolor={{ color: brandcolors.ripple }}
                                        iconfunc={() => setSwapreview(null)}
                                        />
                                    <Text style={[textStyles.bold16, { color: brandcolors.grey[800] }]}>Swap Review</Text>
                                    <IconGeneralF 
                                        boxstyle={{ width: 24, height: 24 }}
                                        iconstyle={{ width: 8, height: 8 }}
                                        iconsrc={icons.dark.cancel}
                                        ripplecolor={{ color: brandcolors.ripple }}
                                        iconfunc={() => {
                                            setSwapmodal(false)
                                            setSwapreview(null)
                                        }}
                                    />
                                </View>

                                <View style={[layoutStyles.mgb_18]}>
                                    <View style={[layoutStyles.align_center_justify_space_btwn, modalStyles.swap_review_item, layoutStyles.mgb_8]}>
                                        <Text style={[textStyles.reg12, {color: brandcolors.grey[500]}]}>Est. receive</Text>
                                        <Text style={[textStyles.bold14, {color: brandcolors.grey[800]}]}>
                                            40 {fiatasset ? fiatasset.ticker : null}
                                        </Text>
                                    </View>
                                    <View style={[layoutStyles.align_center_justify_space_btwn, modalStyles.swap_review_item, layoutStyles.mgb_8]}>
                                        <View style={[layoutStyles.row_align_center, layoutStyles.gap_8]}>
                                            <Text style={[textStyles.reg12, {color: brandcolors.grey[500]}]}>Spread</Text>
                                            <IconGeneral 
                                                boxstyle={{ width: 16, height: 16 }}
                                                iconstyle={{ width: 13, height: 13 }}
                                                iconsrc={icons.dark.info}
                                            />
                                        </View>
                                        <Text style={[textStyles.reg14, {color: brandcolors.grey[800]}]}>32</Text>
                                    </View>
                                    <View style={[layoutStyles.align_center_justify_space_btwn]}>
                                        <View>
                                            <Text style={[textStyles.reg14, layoutStyles.mgb_8, { color: brandcolors.grey[800] }]}>EUR</Text>
                                            <Text style={[textStyles.reg12, { color: brandcolors.grey[500] }]}>Euro</Text>
                                        </View>
                                        <IconGeneral 
                                            boxstyle={{ width: 24, height: 24 }}
                                            iconstyle={{ width: 16, height: 10 }}
                                            iconsrc={icons.dark.arrow_right}
                                        />
                                        <View>
                                            <Text 
                                                style={[
                                                    textStyles.reg14, layoutStyles.mgb_8, layoutStyles.text_align_right, { color: brandcolors.grey[800] }
                                                ]}
                                            >
                                                NGN
                                            </Text>
                                            <Text style={[textStyles.reg12, layoutStyles.text_align_right, { color: brandcolors.grey[500] }]}>Nigerian Naira</Text>
                                        </View>
                                    </View>
                                </View>

                                <ButtonOne 
                                    btnText={'Swap'}
                                    status={false}
                                    buttonPress={handleSwap}
                                />
                            </>
                        : null}


                    </View>
                </View>
            </Modal>
        </> 
    );
}

const styles = StyleSheet.create({
    token_logo_box: {
        width: 40,
        height: 40,
        borderRadius: 8,
        borderWidth: .5,
        borderColor: brandcolors.pry[500],
        backgroundColor: colors.neutrals.neu2,
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
 
export default FiatAction;