import { useEffect, useState } from "react";
import { Text, View, 
    StyleSheet,
    ScrollView,
    Image,
    TouchableOpacity,
    Pressable,
    Modal,
    TextInput,
    ToastAndroid
} from "react-native";
import { useSelector } from "react-redux";
import { layoutStyles } from "../../styles/layout";
import IconGeneralF from "../../components/icon-general-f";
import { brandcolors, colors } from "../../utilities/colors";
import { icons } from "../../utilities/icons";
import { textStyles } from "../../styles/text-styles";
import IconGeneral from "../../components/icon-general";
import { chartdays } from "../../utilities/chart-day";
import { images } from "../../utilities/images";
import { testHistory } from "../../utilities/test-history";
import formatDistanceToNow from 'date-fns/formatDistanceToNow'
import { modalStyles } from "../../styles/modals";
import BackDrop from "../../components/backdrop";
import ButtonOne from "../../components/custom-buttons/one";
import { swapslippage } from "../../utilities/test-slippage";



const CryptoAction = ({ navigation }) => {


    const { cryptoasset } = useSelector(state => state.appReducer)

    const [viewchart, setViewchart] = useState(null)
    const [chartday, setChartday] = useState(chartdays[0].value)
    const [historymodal, setHistorymodal] = useState(null)
    const [showmore, setShowmore] = useState(false)
    const [depositmodal, setDepositmodal] = useState(false)
    const [sendmodal, setSendmodal] = useState(false)
    const [swapmodal, setSwapmodal] = useState(false)
    const [swapreview, setSwapreview] = useState(null)
    const [sendpreview, setSendpreview] = useState(null)
    const [swapsettings, setSwapsettings] = useState(null)
    const [current_s, setCurrent_s] = useState(swapslippage[0])

    const [defaultswap, setDefaultswap] = useState(true)
    const [swapFrom, setSwapfrom] = useState(null)
    const [swapTo, setSwapto] = useState(null)
    const [selectedAsset, setSelectedasset] = useState(null)
    const [swapFromvalue, setSwapfromvalue] = useState(null)
    const [swapTovalue, setSwaptovalue] = useState(null)

    useEffect(() => {
        checkCryptoasset()
    }, [])

    const checkCryptoasset = () => {
        if(!cryptoasset) {
            navigation.navigate('TabsScreen')
        } else {
            setDefaultSwapsValue()
        }
    }

    const setDefaultSwapsValue = () => {
        if(cryptoasset) {
            setSwapfrom(cryptoasset)
        }
        setSwapto(selectedAsset)
    }

    const setAlltoNull = () => {
        setHistorymodal(null)
        setShowmore(false)
        setSwapmodal(false)
        setSendmodal(false)
        setDepositmodal(false)
        setSwapreview(null)
        setSendpreview(null)
        setSwapsettings(null)
    }

    const handleCopy = () => {
        setDepositmodal(false)
        ToastAndroid.show('Address copied', ToastAndroid.SHORT);
    }

    const handleDefaultposition = () => {
        if(defaultswap) {
            setDefaultswap(false)
            setSwapfrom(selectedAsset)
            setSwapto(cryptoasset)
        } else {
            setDefaultswap(true)
            setSwapfrom(cryptoasset)
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
                            {cryptoasset ? 
                                <Image 
                                    source={cryptoasset.logo}
                                    style={{ width: 20, height: 20 }}
                                    resizeMode="contain"
                                /> 
                            : null}
                        </View>
                        <View>
                            <Text style={[textStyles.bold16, layoutStyles.mgb_8, { color: brandcolors.grey[800] }]}>
                                {cryptoasset ? cryptoasset.ticker : null}
                            </Text>
                            <View style={[layoutStyles.gap_8, layoutStyles.row_align_center]}>
                                <Text style={[textStyles.reg14, { color: brandcolors.grey[800] }]}>{cryptoasset ? cryptoasset.amount : null}</Text>
                                <Text style={[textStyles.reg14, { color: brandcolors.grey[500] }]}>$ {cryptoasset ? cryptoasset.amount_in_bucks : null}</Text>
                            </View>
                        </View>
                    </View>

                    <View style={[layoutStyles.align_center_justify_space_btwn, layoutStyles.mgb_48]}>
                        <TouchableOpacity style={[styles.action_btn, layoutStyles.just_center]}
                            onPress={() => setDepositmodal(true)}
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
                        <TouchableOpacity style={[styles.action_btn, layoutStyles.just_center]}
                            onPress={() => setSendmodal(true)}
                        >
                            <IconGeneral 
                                boxstyle={{ width: 16, height: 16, marginBottom: 4 }}
                                iconstyle={{ width: 13, height: 12 }}
                                iconsrc={icons.light.withdraw}
                            />
                            <Text style={[textStyles.bold12, { color: brandcolors.white }]}>Withdraw</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={[styles.action_btn_b, layoutStyles.just_center]}
                            onPress={() => setShowmore(true)}
                        >
                            <IconGeneral 
                                boxstyle={{ width: 16, height: 16, marginBottom: 4 }}
                                iconstyle={{ width: 12, height: 2 }}
                                iconsrc={icons.dark.more}
                            />
                            <Text style={[textStyles.bold12, { color: brandcolors.pry[500] }]}>More</Text>
                        </TouchableOpacity>
                    </View>

                    <View style={[layoutStyles.mgb_40]}>
                        <View style={[layoutStyles.mgb_16, layoutStyles.align_center_justify_space_btwn]}>
                            <Text style={[textStyles.bold16, { color: brandcolors.grey[800] }]}>EUR ~$0.918</Text>
                            <View style={[layoutStyles.row_align_center, layoutStyles.gap_3]}>
                                <Text style={[textStyles.reg16, { color: brandcolors.oth.green }]}>$4.36 (+0.2%)</Text>
                                <IconGeneral 
                                    boxstyle={{ width: 16, height: 16 }}
                                    iconstyle={{ width: 11, height: 5 }}
                                    iconsrc={icons.angle_up_green}
                                />
                            </View>
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

            {/* showmore_-_modal_-_begins */}
            <Modal
                visible={showmore}
                transparent={true}
                onRequestClose={setAlltoNull}
                animationType='slide'
                hardwareAccelerated={true}
            >
                <BackDrop dropPress={setAlltoNull} />
                <View style={[modalStyles.modal_container]}>
                    <View style={[modalStyles.more_action_modal_box]}>
                        <View style={[layoutStyles.align_center_justify_space_btwn, layoutStyles.mgb_15]}>
                            <View></View>
                            <Text style={[textStyles.reg16, {color: brandcolors.grey[800]}]}>More</Text>
                            <IconGeneralF 
                                boxstyle={{ width: 24, height: 24 }}
                                iconstyle={{ width: 8, height: 8 }}
                                ripplecolor={{ color: brandcolors.ripple }}
                                iconsrc={icons.dark.cancel}
                                iconfunc={() => setShowmore(false)}
                            />
                        </View>

                        <TouchableOpacity style={[layoutStyles.align_center_justify_space_btwn, modalStyles.more_action_modal_btn, layoutStyles.mgb_16]}
                            onPress={() => {
                                setShowmore(false)
                                navigation.navigate('Buy Crypto')
                            }}
                        >
                            <View style={[layoutStyles.row_align_center, layoutStyles.gap_8]}>
                                <IconGeneral 
                                    boxstyle={{ width: 24, height: 24 }}
                                    iconstyle={{ width: 14, height: 14 }}
                                    iconsrc={icons.light.buy}
                                    />
                                <Text style={[textStyles.reg16, {color: brandcolors.white}]}>Buy</Text>
                            </View>
                            <IconGeneral 
                                boxstyle={{ width: 24, height: 24 }}
                                iconstyle={{ width: 14, height: 14 }}
                                iconsrc={icons.light.angle_right}
                            />
                        </TouchableOpacity>
                        <TouchableOpacity style={[layoutStyles.align_center_justify_space_btwn, modalStyles.more_action_modal_btn]}
                            onPress={() => {
                                setShowmore(false)
                                navigation.navigate('Sell Crypto')
                            }}
                        >
                            <View style={[layoutStyles.row_align_center, layoutStyles.gap_8]}>
                                <IconGeneral 
                                    boxstyle={{ width: 24, height: 24 }}
                                    iconstyle={{ width: 14, height: 14 }}
                                    iconsrc={icons.light.sell}
                                    />
                                <Text style={[textStyles.reg16, {color: brandcolors.white}]}>Sell</Text>
                            </View>
                            <IconGeneral 
                                boxstyle={{ width: 24, height: 24 }}
                                iconstyle={{ width: 14, height: 14 }}
                                iconsrc={icons.light.angle_right}
                            />
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>
            {/* showmore_-_modal_-_ends */}

            {/* deposit_-_modal_-_begins */}
            <Modal
                visible={depositmodal}
                transparent={true}
                onRequestClose={setAlltoNull}
                animationType="slide"
                hardwareAccelerated={true}
            >
                <BackDrop dropPress={setAlltoNull} />
                <View style={[modalStyles.modal_container]}>
                    <View style={[modalStyles.deposit_modal_box]}>
                
                        <View style={[layoutStyles.align_center_justify_space_btwn, layoutStyles.mgb_24]}>
                            <View></View>
                            <Text style={[textStyles.bold14, {color: brandcolors.grey[800]}]}>Deposit</Text>
                            <IconGeneralF 
                                boxstyle={{ width: 24, height: 24 }}
                                iconstyle={{ width: 9, height: 9 }}
                                iconsrc={icons.dark.cancel}
                                ripplecolor={{ color: brandcolors.ripple }}
                                iconfunc={() => setDepositmodal(false)}
                            />
                        </View>

                        <View style={[layoutStyles.just_center, layoutStyles.mgb_24]}>
                            <IconGeneral 
                                boxstyle={{ width: 215, height: 215 }}
                                iconstyle={{ width: 183, height: 183 }}
                                iconsrc={images.wallet_scan}
                            />
                        </View>

                        <View style={[layoutStyles.just_center, layoutStyles.mgb_24]}>
                            <Text style={[[layoutStyles.mgb_8, textStyles.reg14, {color: brandcolors.grey[500]}]]}>Wallet Address</Text>
                            <Text style={[[layoutStyles.mgb_8, textStyles.reg16, layoutStyles.text_align_center, {color: brandcolors.grey[800]}]]}>
                                0X372832GvNa87264R61c0e2j1g6iRE1Hn9j9l8FA90
                            </Text>
                            <Text style={[[textStyles.reg12, layoutStyles.text_align_center, {color: brandcolors.grey[500]}]]}>
                                This address will work for all ERC-20 tokens on the Ethereum network
                            </Text>
                        </View>

                        <ButtonOne 
                            btnText={'Copy Address'}
                            iconstatus={true}
                            gapvalue={8}
                            iconbox={{ width: 24, height: 24 }}
                            iconstyle={{ width: 20, height: 20 }}
                            iconsrc={icons.active.copy}
                            buttonPress={handleCopy}
                            status={false}
                        />

                    </View>
                </View>
            </Modal>
            {/* deposit_-_modal_-_ends */}

            {/* send_-_modal_-_begins */}
            <Modal
                visible={sendmodal}
                transparent={true}
                onRequestClose={setAlltoNull}
                animationType="slide"
                hardwareAccelerated={true}
            >
                <BackDrop dropPress={setAlltoNull} />
                <View style={[modalStyles.modal_container]}>
                    <View style={[modalStyles.deposit_modal_box]}>
                
                        {!sendpreview ?
                            <>
                                <View style={[layoutStyles.align_center_justify_space_btwn, layoutStyles.mgb_24]}>
                                    <View></View>
                                    <Text style={[textStyles.bold14, {color: brandcolors.grey[800]}]}>Send</Text>
                                    <IconGeneralF 
                                        boxstyle={{ width: 24, height: 24 }}
                                        iconstyle={{ width: 9, height: 9 }}
                                        iconsrc={icons.dark.cancel}
                                        ripplecolor={{ color: brandcolors.ripple }}
                                        iconfunc={() => setSendmodal(false)}
                                    />
                                </View>

                                <View style={[layoutStyles.mgb_24]}>
                                    <Text style={[textStyles.reg14, layoutStyles.mgb_8, {color: brandcolors.grey[500]}]}>To</Text>

                                    <View style={[layoutStyles.align_center_justify_space_btwn, modalStyles.send_modal_item]}>
                                        <TextInput 
                                            placeholder="Enter public address (0x), or ENS"
                                            placeholderTextColor={brandcolors.grey[500]}
                                            style={[textStyles.reg14, {color: brandcolors.grey[800], width: '80%'}]}
                                        />
                                        <IconGeneral 
                                            boxstyle={{ width: 24, height: 24 }}
                                            iconstyle={{ width: 20, height: 20 }}
                                            iconsrc={icons.dark.wallet_scan}
                                        />
                                    </View>
                                </View>

                                <View style={[layoutStyles.mgb_24]}>
                                    <Text style={[textStyles.reg14, layoutStyles.mgb_8, {color: brandcolors.grey[500]}]}>Amount</Text>

                                    <View style={[layoutStyles.align_center_justify_space_btwn, modalStyles.send_modal_item, layoutStyles.mgb_8]}>
                                        <TextInput 
                                            placeholder="Enter amount to be sent"
                                            placeholderTextColor={brandcolors.grey[500]}
                                            style={[textStyles.reg14, {color: brandcolors.grey[800], width: '80%'}]}
                                        />
                                        <Text style={[textStyles.reg14, {color: brandcolors.sec[500]}]}>Max</Text>
                                    </View>

                                    <View style={[layoutStyles.justify_space_btwn]}>
                                        <Text style={[textStyles.reg14, {color: brandcolors.grey[500]}]}>Balance</Text>
                                        <View>
                                            <Text style={[textStyles.reg14, layoutStyles.mgb_4, {color: brandcolors.grey[800]}]}>
                                                0.013 {cryptoasset ? cryptoasset.ticker : null}
                                            </Text>
                                            <Text style={[textStyles.reg12, layoutStyles.text_align_right, {color: brandcolors.grey[800]}]}>$244.95</Text>
                                        </View>
                                    </View>
                                </View>

                                <ButtonOne 
                                    btnText={'Next'}
                                    buttonPress={() => setSendpreview(true)}
                                    status={false}
                                />
                            </>
                        : null}

                        {sendpreview ? 
                            <>
                                <View style={[layoutStyles.align_center_justify_space_btwn, layoutStyles.mgb_21]}>
                                    <IconGeneralF 
                                        boxstyle={{ width: 24, height: 24 }}
                                        iconstyle={{ width: 7, height: 16 }}
                                        iconsrc={icons.dark.angle_left}
                                        ripplecolor={{ color: brandcolors.ripple }}
                                        iconfunc={() => setSendpreview(null)}
                                    />
                                    <Text style={[textStyles.bold14, {color: brandcolors.grey[800]}]}>Preview</Text>
                                    <IconGeneralF 
                                        boxstyle={{ width: 24, height: 24 }}
                                        iconstyle={{ width: 9, height: 9 }}
                                        iconsrc={icons.dark.cancel}
                                        ripplecolor={{ color: brandcolors.ripple }}
                                        iconfunc={setAlltoNull}
                                    />
                                </View>

                                <View style={[layoutStyles.mgb_24]}>
                                    <View style={[layoutStyles.align_center_justify_space_btwn, {paddingVertical: 8}]}>
                                        <Text style={[textStyles.reg12, {color: brandcolors.grey[500]}]}>Asset</Text>
                                        <Text style={[textStyles.reg14, {color: brandcolors.grey[800]}]}>
                                            {cryptoasset ? cryptoasset.name : null} {cryptoasset ? cryptoasset.ticker : null}
                                        </Text>
                                    </View>
                                    <View style={[modalStyles.modal_line]}></View>
                                    <View style={[layoutStyles.align_center_justify_space_btwn, {paddingVertical: 8}]}>
                                        <Text style={[textStyles.reg12, {color: brandcolors.grey[500]}]}>To</Text>
                                        <Text style={[textStyles.reg14, {color: brandcolors.grey[800]}]}>
                                            0x67442...u7F6R21
                                        </Text>
                                    </View>
                                </View>

                                <View style={[layoutStyles.mgb_24]}>
                                    <View style={[layoutStyles.justify_space_btwn]}>
                                        <View style={[layoutStyles.row_align_center, layoutStyles.gap_8]}>
                                            <Text style={[textStyles.reg12, {color: brandcolors.grey[500]}]}>Network Fee</Text>
                                            <IconGeneral 
                                                boxstyle={{ width: 16, height: 16 }}
                                                iconstyle={{ width: 13, height: 13 }}
                                                iconsrc={icons.dark.info}
                                            />
                                        </View>
                                        <View>
                                            <Text style={[textStyles.reg14, layoutStyles.mgb_4, {color: brandcolors.grey[800]}]}>
                                                0.00025654654 {cryptoasset ? cryptoasset.ticker : null}
                                            </Text>
                                            <Text style={[textStyles.reg12, layoutStyles.text_align_right, {color: brandcolors.grey[800]}]}>($0.48)</Text>
                                        </View>
                                    </View>
                                    <View style={[modalStyles.modal_line]}></View>
                                    <View style={[layoutStyles.align_center_justify_space_btwn, {paddingVertical: 8}]}>
                                        <Text style={[textStyles.reg12, {color: brandcolors.grey[500]}]}>Max Total:</Text>
                                        <Text style={[textStyles.bold14, {color: brandcolors.grey[800]}]}>
                                            $245.43
                                        </Text>
                                    </View>
                                </View>

                                <ButtonOne 
                                    btnText={'Send'}
                                    buttonPress={setAlltoNull}
                                    status={false}
                                />
                            </>
                        : null}

                    </View>
                </View>
            </Modal>
            {/* send_-_modal_-_ends */}

             {/* swap_-_modal_-_begins */}
             <Modal
                visible={swapmodal}
                transparent={true}
                onRequestClose={setAlltoNull}
                animationType="slide"
                hardwareAccelerated={true}
            >
                <BackDrop dropPress={setAlltoNull} />
                <View style={[modalStyles.modal_container]}>
                    <View style={[modalStyles.deposit_modal_box]}>
                            
                        {!swapreview && !swapsettings ? 
                            <>
                                <View style={[layoutStyles.align_center_justify_space_btwn, layoutStyles.mgb_24]}>
                                    <IconGeneralF 
                                        boxstyle={{ width: 24, height: 24 }}
                                        iconstyle={{ width: 24, height: 24 }}
                                        iconsrc={icons.dark.swap_modal}
                                        ripplecolor={{ color: brandcolors.ripple }}
                                        iconfunc={() => setSwapsettings(true)}
                                    />
                                    <Text style={[textStyles.bold14, {color: brandcolors.grey[800]}]}>Swap</Text>
                                    <IconGeneralF 
                                        boxstyle={{ width: 24, height: 24 }}
                                        iconstyle={{ width: 9, height: 9 }}
                                        iconsrc={icons.dark.cancel}
                                        ripplecolor={{ color: brandcolors.ripple }}
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
                                                    {cryptoasset ? <IconGeneral 
                                                        boxstyle={{ width: 16, height: 16 }}
                                                        iconstyle={{ width: 13, height: 13 }}
                                                        iconsrc={cryptoasset.logo}
                                                    /> : null}
                                                </View>
                                                <Text style={[textStyles.reg14, { color: brandcolors.grey[800] }]}>
                                                    {cryptoasset ? cryptoasset.ticker : null}
                                                </Text>
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
                                                <Text style={[textStyles.reg14, { color: brandcolors.grey[800] }]}>Select Asset</Text>
                                            </Pressable>
                                        }

                                        <View style={[layoutStyles.row_align_center, layoutStyles.gap_8]}>
                                            {/* <Text style={[textStyles.reg14, {color: brandcolors.grey[800]}]}>0.068</Text> */}
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
                                        <View>
                                            <Text style={[textStyles.reg14, { color: brandcolors.grey[800] }]}>
                                                0.13 {cryptoasset ? cryptoasset.ticker : null}
                                            </Text>
                                            <Text style={[textStyles.reg12, layoutStyles.text_align_right, { color: brandcolors.grey[800] }]}>$244.95</Text>
                                        </View>
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
                                                    {cryptoasset ? <IconGeneral 
                                                        boxstyle={{ width: 16, height: 16 }}
                                                        iconstyle={{ width: 13, height: 13 }}
                                                        iconsrc={cryptoasset.logo}
                                                    /> : null}
                                                </View>
                                                <Text style={[textStyles.reg14, { color: brandcolors.grey[800] }]}>
                                                    {cryptoasset ? cryptoasset.ticker : null}
                                                </Text>
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
                                                <Text style={[textStyles.reg14, { color: brandcolors.grey[800] }]}>Select Asset</Text>
                                            </Pressable>
                                        }

                                        <Text style={[textStyles.reg14, {color: brandcolors.grey[800]}]}>0</Text>
                                    </View>
                                    <View style={[layoutStyles.align_center_justify_space_btwn]}>
                                        <Text style={[textStyles.reg14, { color: brandcolors.grey[500] }]}>Max slippage {current_s.sp}</Text>
                                        <Text style={[textStyles.reg14, { color: brandcolors.grey[800] }]}>Network fee = 0.0002</Text>
                                    </View>
                                </View>

                                <ButtonOne 
                                    btnText={'Next'}
                                    buttonPress={() => setSwapreview(true)}
                                    status={false}
                                />
                            </>
                        : null}

                        {swapsettings && !swapreview ? 
                            <>
                                <View style={[layoutStyles.align_center_justify_space_btwn, layoutStyles.mgb_20]}>
                                    <IconGeneralF 
                                        boxstyle={{ width: 24, height: 24 }}
                                        iconstyle={{ width: 7, height: 16 }}
                                        iconsrc={icons.dark.angle_left}
                                        ripplecolor={{ color: brandcolors.ripple }}
                                        iconfunc={() => setSwapsettings(null)}
                                    />
                                    <Text style={[textStyles.bold14, {color: brandcolors.grey[800]}]}>Swap settings</Text>
                                    <View></View>
                                </View>  

                                <View style={[layoutStyles.mgb_24]}>
                                    <Text style={[textStyles.reg14, layoutStyles.mgb_8, {color: brandcolors.grey[500]}]}>Slippage tolerance</Text>
                                    <View style={[layoutStyles.align_center_justify_space_btwn, modalStyles.ss_select]}>
                                        {swapslippage ? 
                                            swapslippage.map((e, index) => (
                                                <Pressable 
                                                    key={e.sp}
                                                    style={[
                                                        layoutStyles.just_center,
                                                        index !== ((swapslippage.length) - 1) ? modalStyles.ss_select_item : modalStyles.ss_select_custom,
                                                        {backgroundColor: current_s.sp === e.sp ? brandcolors.pry[500] : brandcolors.bg }
                                                    ]}
                                                    android_ripple={{ color: brandcolors.ripple }}
                                                    onPress={() => setCurrent_s(e)}
                                                >
                                                    <Text 
                                                        style={[
                                                            textStyles.reg16, {color: current_s.sp === e.sp ? brandcolors.white : brandcolors.pry[500]}
                                                        ]}
                                                    >
                                                        {e.sp}
                                                    </Text>
                                                </Pressable>
                                            ))
                                        : null}
                                    </View>
                                </View>

                                <View>
                                    <Text style={[textStyles.reg14, layoutStyles.mgb_8, {color: brandcolors.grey[500]}]}>Slippage tolerance</Text>

                                    <View>
                                        <View 
                                            style={[
                                                layoutStyles.align_center_justify_space_btwn, modalStyles.ss_value_item, layoutStyles.mgb_16,
                                                {backgroundColor: brandcolors.grey[50]}
                                            ]}
                                        >
                                            <Text 
                                                style={[textStyles.reg14, {color: brandcolors.grey[800]}]}
                                            >
                                                Fast
                                            </Text>
                                            <Text 
                                                style={[textStyles.reg14, {color: brandcolors.grey[800]}]}
                                            >
                                                0.0002 - 0.0005 {cryptoasset ? cryptoasset.ticker : null}
                                            </Text>
                                        </View>
                                        <View 
                                            style={[
                                                layoutStyles.align_center_justify_space_btwn, modalStyles.ss_value_item, layoutStyles.mgb_16,
                                                {backgroundColor: brandcolors.grey[50]}
                                            ]}
                                        >
                                            <Text 
                                                style={[textStyles.reg14, {color: brandcolors.grey[800]}]}
                                            >
                                                Medium
                                            </Text>
                                            <Text 
                                                style={[textStyles.reg14, {color: brandcolors.grey[800]}]}
                                            >
                                                0.0002 - 0.0005 {cryptoasset ? cryptoasset.ticker : null}
                                            </Text>
                                        </View>
                                        <View 
                                            style={[
                                                layoutStyles.align_center_justify_space_btwn, modalStyles.ss_value_item, layoutStyles.mgb_16,
                                                {backgroundColor: brandcolors.pry[500]}
                                            ]}
                                        >
                                            <Text 
                                                style={[
                                                    textStyles.reg14, 
                                                    {color: brandcolors.white}
                                                ]}
                                            >
                                                Low
                                            </Text>
                                            <Text 
                                                style={[
                                                    textStyles.reg14, 
                                                    {color: brandcolors.white}
                                                ]}
                                            >
                                                0.0002 - 0.0005 {cryptoasset ? cryptoasset.ticker : null}
                                            </Text>
                                        </View>
                                        <View 
                                            style={[
                                                layoutStyles.align_center_justify_space_btwn, modalStyles.ss_value_item,
                                                {backgroundColor: brandcolors.grey[50]}
                                            ]}
                                        >
                                            <Text 
                                                style={[textStyles.reg14, {color: brandcolors.grey[800]}]}
                                            >
                                                Custom
                                            </Text>
                                            <Text 
                                                style={[textStyles.reg14, {color: brandcolors.grey[800]}]}
                                            >
                                                0.0002 - 0.0005 {cryptoasset ? cryptoasset.ticker : null}
                                            </Text>
                                        </View>
                                    </View> 
                                </View>
                            </>
                        : null}

                        {swapreview && !swapsettings ?
                            <>
                                <View style={[layoutStyles.align_center_justify_space_btwn, layoutStyles.mgb_15]}>
                                    <IconGeneralF 
                                        boxstyle={{ width: 24, height: 24 }}
                                        iconstyle={{ width: 7, height: 16 }}
                                        iconsrc={icons.dark.angle_left}
                                        ripplecolor={{ color: brandcolors.ripple }}
                                        iconfunc={() => setSwapreview(null)}
                                    />
                                    <Text style={[textStyles.bold14, {color: brandcolors.grey[800]}]}>Swap review</Text>
                                    <IconGeneralF 
                                        boxstyle={{ width: 24, height: 24 }}
                                        iconstyle={{ width: 7, height: 16 }}
                                        iconsrc={icons.dark.cancel}
                                        ripplecolor={{ color: brandcolors.ripple }}
                                        iconfunc={setAlltoNull}
                                    />
                                </View>

                                <View style={[layoutStyles.mgb_18]}>
                                    <View style={[layoutStyles.align_center_justify_space_btwn, modalStyles.swap_review_item, layoutStyles.mgb_8]}>
                                        <Text style={[textStyles.reg12, {color: brandcolors.grey[500]}]}>Est. receive</Text>
                                        <Text style={[textStyles.bold14, {color: brandcolors.grey[800]}]}>
                                            126.03 USDT
                                        </Text>
                                    </View>
                                    <View style={[layoutStyles.align_center_justify_space_btwn, modalStyles.swap_review_item, layoutStyles.mgb_8]}>
                                        <View style={[layoutStyles.row_align_center, layoutStyles.gap_8]}>
                                            <Text style={[textStyles.reg12, {color: brandcolors.grey[500]}]}>Slippage</Text>
                                            <IconGeneral 
                                                boxstyle={{ width: 16, height: 16 }}
                                                iconstyle={{ width: 13, height: 13 }}
                                                iconsrc={icons.dark.info}
                                            />
                                        </View>
                                        <Text style={[textStyles.reg14, {color: brandcolors.grey[800]}]}>{current_s.sp}</Text>
                                    </View>
                                    <View style={[layoutStyles.justify_space_btwn, modalStyles.swap_review_item_nb ]}>
                                        <View style={[layoutStyles.row_align_center, layoutStyles.gap_8]}>
                                            <Text style={[textStyles.reg12, {color: brandcolors.grey[500]}]}>Network Fee</Text>
                                            <IconGeneral 
                                                boxstyle={{ width: 16, height: 16 }}
                                                iconstyle={{ width: 13, height: 13 }}
                                                iconsrc={icons.dark.info}
                                            />
                                        </View>
                                        <View>
                                            <Text 
                                                style={[textStyles.reg14, layoutStyles.mgb_4, layoutStyles.text_align_right, {color: brandcolors.grey[800]}]}
                                            >
                                                0.0002
                                            </Text>
                                            <Text style={[textStyles.reg14, layoutStyles.text_align_right, {color: brandcolors.grey[800]}]}>$0.37</Text>
                                        </View>
                                    </View>
                                </View>

                                <ButtonOne 
                                    btnText={'Swap'}
                                    buttonPress={setAlltoNull}
                                    status={false}
                                />
                            </>
                        : null}

                    </View>
                </View>
            </Modal>
            {/* swap_-_modal_-_ends */}

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
    action_btn_b: {
        borderColor: brandcolors.pry[500],
        borderWidth: 1,
        width: '12%',
        height: 51,
        borderRadius: 8,
        padding: 5,
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


export default CryptoAction;