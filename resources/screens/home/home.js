import { Text, View, 
    StyleSheet, Image,
    Modal,
    Pressable,
    TouchableOpacity
} from "react-native";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setAssetsModal, setAssetsCat, setTmphistory } from "../../redux/action";


// hooks  ---- (imports all your web2 or web3 func for calling requests here)


// components
import ButtonTwo from "../../components/custom-buttons/two";
import ButtonThree from "../../components/custom-buttons/three";

// utilities
import { images } from "../../utilities/images";
import { icons } from "../../utilities/icons";
import { brandcolors, colors } from "../../utilities/colors";


// styles
import { layoutStyles } from "../../styles/layout";
import AssetsComponent from "../../components/home/assets";
import BackDrop from "../../components/backdrop";
import { modalStyles } from "../../styles/modals";
import { assetsCategories } from "../../utilities/assets-cat";
import PortFolio from "../../components/home/portfolio";
import { ScrollView } from "react-native-gesture-handler";
import Recent from "../../components/home/recent";
import IconGeneralF from "../../components/icon-general-f";
import { textStyles } from "../../styles/text-styles";
import IconGeneral from "../../components/icon-general";
import { chartdays } from "../../utilities/chart-day";


const HomePage = ({ navigation }) => {

    const dispatch = useDispatch()

    const { assetsmodal, assetcat, tmphistory } = useSelector(state => state.appReducer)
    const [portfolio, setPortfolio] = useState(null)
    const [recent, setRecent] = useState(null)
    const [viewdet, setViewdet] = useState(null)
    const [chartday, setChartday] = useState(chartdays[0].value)
    const [completekyc, setCompletekyc] = useState(true)

    const setAlltoNull = () => {
        dispatch(setTmphistory(null))
    }

    const handleViewDet = () => {
        if(viewdet) {
            setViewdet(null)
        } else {
            setViewdet(true)
        }
    }

    return ( 
        <View style={[styles.body, layoutStyles.generalHPad]}>
            
            <View style={[layoutStyles.align_center_justify_space_btwn, layoutStyles.mgb_16, layoutStyles.generalTopPad]}>
                <IconGeneralF 
                    boxstyle={{ width: 24, height: 24 }}
                    ripplecolor={brandcolors.ripple}
                    iconsrc={icons.dark.side_bar}
                    iconstyle={{ width: 22, height: 22 }}
                    iconfunc={() => navigation.navigate('SideBar')}
                />

                <IconGeneralF 
                    boxstyle={{ width: 24, height: 24 }}
                    ripplecolor={brandcolors.ripple}
                    iconsrc={icons.dark.history}
                    iconstyle={{ width: 20, height: 20 }}
                    iconfunc={() => navigation.navigate('History')}
                />
            </View>

            <ScrollView style={{ flex: 1 }} showsVerticalScrollIndicator={false}>


                <View style={[!completekyc ? layoutStyles.mgb_24 : null, styles.balance_box]}>
                    {!portfolio ? 
                        <View style={[layoutStyles.align_center_justify_space_btwn]}>
                            <View>
                                <Text style={[textStyles.reg14, layoutStyles.mgb_7, { color: brandcolors.white }]}>
                                    Wallet Balance
                                </Text>
                                <View style={[layoutStyles.gap_8, layoutStyles.row_align_center]}>
                                    <Text style={[textStyles.bold18, { color: brandcolors.white }]}>$ 7,655.32</Text>
                                    <IconGeneralF 
                                        boxstyle={{ width: 24, height: 24 }}
                                        ripplecolor={brandcolors.ripple}
                                        iconsrc={icons.light.eye_slash}
                                        iconstyle={{ width: 24, height: 24 }}
                                        // iconfunc={() => navigation.navigate('SideBar')}
                                    />
                                </View>
                            </View>
                            <IconGeneralF 
                                boxstyle={{ width: 24, height: 24 }}
                                ripplecolor={brandcolors.ripple_light}
                                iconsrc={icons.light.plus}
                                iconstyle={{ width: 12, height: 12 }}
                                iconfunc={() => navigation.navigate('AddTokens')}
                            />
                        </View>
                    : null}

                    {portfolio ? 
                        <>
                            <View style={[layoutStyles.align_center_justify_space_btwn, layoutStyles.mgb_16]}>
                                <View>
                                    <Text style={[textStyles.reg14, layoutStyles.mgb_7, { color: brandcolors.white }]}>
                                        Wallet Balance
                                    </Text>
                                    <View style={[layoutStyles.gap_8, layoutStyles.row_align_center]}>
                                        <Text style={[textStyles.bold18, { color: brandcolors.white }]}>$ 7,655.32</Text>
                                        <IconGeneralF 
                                            boxstyle={{ width: 24, height: 24 }}
                                            ripplecolor={brandcolors.ripple}
                                            iconsrc={icons.light.eye_slash}
                                            iconstyle={{ width: 24, height: 24 }}
                                            // iconfunc={() => navigation.navigate('SideBar')}
                                        />
                                    </View>
                                </View>
                                <IconGeneralF 
                                    boxstyle={{ width: 24, height: 24 }}
                                    ripplecolor={brandcolors.ripple_light}
                                    iconsrc={icons.light.plus}
                                    iconstyle={{ width: 12, height: 12 }}
                                    iconfunc={() => navigation.navigate('AddTokens')}
                                />
                            </View>

                            <View style={[layoutStyles.align_center_justify_space_btwn, layoutStyles.mgb_16]}>
                                <View>
                                    <Text style={[textStyles.reg10, { color: brandcolors.grey[[500]] }]}>Available Balance</Text>
                                    <Text style={[textStyles.reg12, { color: brandcolors.white }]}>$ 2,317.12</Text>
                                </View>
                                <View>
                                    <Text style={[textStyles.reg10, { color: brandcolors.grey[[500]] }]}>Invested Amount</Text>
                                    <Text style={[textStyles.reg12, { color: brandcolors.white }]}>$5,338.2</Text>
                                </View>
                            </View>

                            <View style={[layoutStyles.row_flex_end, layoutStyles.mgb_16]}>
                                <Pressable style={[layoutStyles.row_align_center, layoutStyles.gap_6]}
                                    android_ripple={{ color: brandcolors.ripple_light }}
                                    hitSlop={{ top: 20, bottom: 20, left: 20 ,right: 20, }}
                                    onPress={handleViewDet}
                                >
                                    <Text style={[textStyles.reg12, { color: brandcolors.white }]}>View Details</Text>
                                    <IconGeneral 
                                        boxstyle={{ width: 13, height: 13 }}
                                        iconstyle={{ width: 9, height: 4, transform: [{ rotate: viewdet ? '180deg' : '0deg' }] }}
                                        iconsrc={icons.light.angle_down}
                                    />
                                </Pressable>
                            </View>

                            {viewdet ?
                                <>
                                    <View style={[styles.chart_days_box, layoutStyles.align_center_justify_space_btwn, layoutStyles.mgb_24]}>
                                        {chartdays ? 
                                            chartdays.map((item) => (
                                                <TouchableOpacity style={[styles.chart_day_item, layoutStyles.just_center]}
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

                                    <View>
                                        <Image 
                                            source={images.line_demo}
                                            style={{ width: '100%', height: 201 }}
                                            resizeMode="contain"
                                        />
                                    </View>
                                </>
                            : null}
                        </>
                    : null}
                </View>

                {completekyc ? <View style={[layoutStyles.mgb_16, layoutStyles.mgt_16, layoutStyles.flexCenter, styles.complete_kyc_box]}>
                    <View style={[layoutStyles.flex_row, layoutStyles.gap_8]}>
                        <IconGeneral 
                            boxstyle={{ width: 16, height: 16 }}
                            iconstyle={{ width: 13, height: 13 }}
                            iconsrc={icons.dark.info_pry_500}
                        />
                        <Text style={[textStyles.reg12, {color: brandcolors.pry[500]}]}>Complete your KYC</Text>
                    </View>
                </View> : null}

                <View style={[styles.wallet_port_box]}>
                    <Pressable
                        android_ripple={{ color: brandcolors.ripple }}
                        style={{ width: '50%' }}
                        onPress={() => setPortfolio(null)}
                        >
                        <Text style={[
                                textStyles.reg16, layoutStyles.mgb_8, layoutStyles.text_align_center, 
                                { color: !portfolio ? brandcolors.pry[500] : brandcolors.grey[500] }
                            ]}
                        >
                            Wallet
                        </Text>
                        <View style={[!portfolio ? styles.wallet_port_line_active : styles.wallet_port_line]}></View>
                    </Pressable>
                    <Pressable
                        android_ripple={{ color: brandcolors.ripple }}
                        style={{ width: '50%' }}
                        onPress={() => setPortfolio(true)}
                    >
                        <Text style={[
                                textStyles.reg16, layoutStyles.mgb_8, layoutStyles.text_align_center,
                                { color: portfolio ? brandcolors.pry[500] : brandcolors.grey[500] }
                            ]}
                        >
                            PortFolio
                        </Text>
                        <View style={[portfolio ? styles.wallet_port_line_active : styles.wallet_port_line]}></View>
                    </Pressable>
                </View>


                {portfolio ? <>
                    <View style={[layoutStyles.pdt_24]}></View>
                    <View style={[styles.chart_box, layoutStyles.mgb_16]}>
                        <View style={[layoutStyles.justify_center, layoutStyles.mgb_24]}>
                            {/* <View style={styles.pie_chart_box}></View> */}
                            <Image 
                                source={images.pie_demo}
                                style={{ width: 145, height: 145 }}
                            />
                        </View>

                        <View style={[layoutStyles.align_center_justify_space_btwn]}>
                            <View style={[layoutStyles.row_align_center, layoutStyles.gap_8]}>
                                <View style={[ { width: 24, height: 24, backgroundColor: brandcolors.oth.blue, borderRadius: 4 }]}></View>
                                <Text style={[textStyles.reg14, { color: brandcolors.black }]}>Fiat</Text>
                            </View>
                            <View>
                                <Text style={[textStyles.reg14, layoutStyles.text_align_right, { color: brandcolors.grey[800] }]}>$1,913.75</Text>
                                <Text style={[textStyles.reg12, layoutStyles.text_align_right, { color: brandcolors.oth.green }]}>+0.23%</Text>
                            </View>
                        </View>
                        <View style={[layoutStyles.align_center_justify_space_btwn]}>
                            <View style={[layoutStyles.row_align_center, layoutStyles.gap_8]}>
                                <View style={[ { width: 24, height: 24, backgroundColor: brandcolors.oth.green, borderRadius: 4 }]}></View>
                                <Text style={[textStyles.reg14, { color: brandcolors.black }]}>Crypto</Text>
                            </View>
                            <View>
                                <Text style={[textStyles.reg14, layoutStyles.text_align_right, { color: brandcolors.grey[800] }]}>$5,741.57</Text>
                                <Text style={[textStyles.reg12, layoutStyles.text_align_right, { color: brandcolors.oth.green }]}>+0.06%</Text>
                            </View>
                        </View>
                    </View>

                    <View style={[layoutStyles.mgb_8, layoutStyles.align_center_justify_space_btwn]}>
                        <Text style={[textStyles.reg16, { color: brandcolors.grey[800] }]}>Assets</Text>
                        <Text style={[textStyles.reg16, { color: brandcolors.grey[800] }]}>Holdings</Text>
                    </View>    
                </> : null}


                <View style={[styles.assets_container]}>
                    {!portfolio ? <View style={[layoutStyles.pdt_24]}></View> : null}
                    <AssetsComponent navigation={navigation} />
                </View>    
                {/* {!portfolio ? 
                    <View style={[styles.assets_container]}>
                        <View style={[layoutStyles.pdt_24]}></View>
                        <AssetsComponent navigation={navigation} />
                    </View>    
                : null} */}

                {/* {portfolio ? 
                    <View style={[styles.port_container, layoutStyles.pdt_24]}>
                        <PortFolio navigation={navigation} />
                    </View>
                : null} */}
                

            </ScrollView>
        </View>
    );
}
 

const styles = StyleSheet.create({
    body: {
        flex: 1,
        // backgroundColor: 'red',
        backgroundColor: brandcolors.bg,
        position: 'relative',
    },
    btn_unactive: {
        backgroundColor: colors.neutrals.white,
        borderColor: colors.btn.btnborder,
    },
    btn_unactive_text: {
        color: colors.btn.btnbg,
    },
    recent_box: {
        width: 36,
        height: 36,
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: .5,
        borderColor: colors.btn.btnborder,
        borderRadius: 50,
    },
    recent_box_active: {
        width: 36,
        height: 36,
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: .5,
        borderColor: colors.brand.brand3,
        backgroundColor: colors.brand.brand3,
        borderRadius: 50,
    },
    top_box_elevation: {
        backgroundColor: colors.neutrals.white,
        paddingTop: 10,
        paddingHorizontal: 20,
        elevation: 15,
        zIndex: 55,
    },
    assets_container: {
        // paddingTop: 40,
        // paddingHorizontal: 20,
    },
    port_container: {
        paddingTop: 20,
        // backgroundColor: colors.neutrals.white,
        // paddingHorizontal: 20,
    },
    recent_container: {
        paddingTop: 40,
    },
    balance_box: {
        backgroundColor: brandcolors.pry[500],
        paddingVertical: 32,
        paddingHorizontal: 16,
        borderRadius: 16,
    },
    wallet_port_box: {
        paddingHorizontal: 7,
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        // alignItems: 'center',
    },
    wallet_port_line: {
        backgroundColor: brandcolors.grey[500],
        width: '100%',
        height: 1,
        borderRadius: 1,
    },
    wallet_port_line_active: {
        backgroundColor: brandcolors.pry[500],
        width: '100%',
        height: 4,
        borderRadius: 4,
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
    },
    complete_kyc_box: {
        backgroundColor: brandcolors.oth.flex_1,
        width: '100%',
        height: 32,
        paddingHorizontal: 8,
        borderRadius: 8,
    },
})


export default HomePage;