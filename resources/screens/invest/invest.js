import { ScrollView, Text, 
    View, 
    StyleSheet,
    Pressable,
    TouchableOpacity,
    Image,
} from "react-native";
import { layoutStyles } from "../../styles/layout";
import IconGeneralF from "../../components/icon-general-f";
import { brandcolors, colors } from "../../utilities/colors";
import { icons } from "../../utilities/icons";
import IconGeneral from "../../components/icon-general";
import { images } from "../../utilities/images";
import { useState } from "react";
import { chartdays } from "../../utilities/chart-day";
import { textStyles } from "../../styles/text-styles";

const Invest = ({ navigation }) => {


    const [viewdet, setViewdet] = useState(null)
    const [chartday, setChartday] = useState(chartdays[0].value)


    const handleViewDet = () => {
        if(viewdet) {
            setViewdet(null)
        } else {
            setViewdet(true)
        }
    }


    return (
        <>

            <View style={[layoutStyles.generalFrame, layoutStyles.generalHPad, layoutStyles.generalTopPad]}>
                
                <View style={[layoutStyles.align_center_justify_space_btwn, layoutStyles.mgb_24]}>
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
                        // iconfunc={() => navigation.navigate('History')}
                    />
                </View>

                <ScrollView style={{ flex: 1 }} showsVerticalScrollIndicator={false}>

                    <View style={[layoutStyles.mgb_24, styles.balance_box]}>
                        <View style={[layoutStyles.align_center_justify_space_btwn, layoutStyles.mgb_16]}>
                            <View>
                                <Text style={[textStyles.reg14, layoutStyles.mgb_7, { color: brandcolors.white }]}>
                                    Total Balance
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
                            <Pressable style={[layoutStyles.row_align_center, layoutStyles.gap_8]}
                                android_ripple={{ color: brandcolors.ripple_active }}
                                onPress={() => navigation.navigate('Add Invest')}
                            >
                                <IconGeneral 
                                    boxstyle={{ width: 24, height: 24 }}
                                    iconsrc={icons.active.plus}
                                    iconstyle={{ width: 12, height: 12 }}
                                />
                                <Text style={[textStyles.reg10, {color: brandcolors.sec[500]}]}>Invest</Text>
                            </Pressable>
                        </View>

                        <View style={[layoutStyles.align_center_justify_space_btwn, layoutStyles.mgb_16]}>
                            <View>
                                <Text style={[textStyles.reg10, { color: brandcolors.grey[[500]] }]}>Invested</Text>
                                <Text style={[textStyles.reg12, { color: brandcolors.white }]}>$ 2,317.12</Text>
                            </View>
                            <View>
                                <Text style={[textStyles.reg10, { color: brandcolors.grey[[500]] }]}>Rewards</Text>
                                <View style={[layoutStyles.row_align_center, layoutStyles.gap_4]}>
                                    <Text style={[textStyles.reg12, layoutStyles.text_align_right, { color: brandcolors.white }]}>$5,338.2</Text>
                                    <Pressable android_ripple={{ color: brandcolors.ripple_active }}>
                                        <Text style={[textStyles.reg10, {color: brandcolors.sec[500]}]}>Claim</Text>
                                    </Pressable>
                                </View>
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
                    </View>

                    <View>
                        <View style={[layoutStyles.align_center_justify_space_btwn, layoutStyles.mgb_8]}>
                            <View style={[styles.invest_width_33]}>
                                <Text style={[textStyles.reg14, {color: brandcolors.grey[800]}]}>Asset</Text>
                            </View>
                            <View style={[styles.invest_width_33]}>
                                <Text style={[textStyles.reg14, layoutStyles.text_align_center, {color: brandcolors.grey[800]}]}>Asset Value</Text>
                            </View>
                            <View style={[styles.invest_width_33]}>
                                <Text style={[textStyles.reg14, layoutStyles.text_align_right, {color: brandcolors.grey[800]}]}>Invest Value</Text>
                            </View>
                        </View>

                        <View>
                            <Pressable style={[styles.asset_invest_item, layoutStyles.align_center_justify_space_btwn, layoutStyles.mgb_16]}
                                android_ripple={{ color: brandcolors.ripple }}
                                onPress={() => navigation.navigate('Invest Item')}
                            >
                                <View style={[layoutStyles.row_align_center, layoutStyles.gap_8, styles.invest_width_33]}>
                                    <View style={[layoutStyles.just_center, styles.icon_box]}>
                                        <IconGeneral 
                                            boxstyle={{ width: 18, height: 18, }}
                                            iconstyle={{ width: 15, height: 15 }}
                                            iconsrc={images.btc_logo}
                                        />
                                    </View>
                                    <View>
                                        <Text style={[textStyles.bold14, {color: brandcolors.grey[800]}]}>Bitcoin</Text>
                                        <Text style={[textStyles.reg14, {color: brandcolors.grey[500]}]}>BTC</Text>
                                    </View>
                                </View>

                                <View style={[styles.invest_width_33]}>
                                    <Text style={[textStyles.bold14, layoutStyles.text_align_center, {color: brandcolors.grey[800]}]}>$ 29,005.44</Text>
                                    <Text style={[textStyles.reg14, layoutStyles.text_align_center, {color: brandcolors.oth.red}]}>-0.74%(24h)</Text>
                                </View>

                                <View style={[styles.invest_width_33]}>
                                    <Text style={[textStyles.bold14, layoutStyles.text_align_right, {color: brandcolors.grey[800]}]}>0.00998 BTC</Text>
                                    <Text style={[textStyles.reg14, layoutStyles.text_align_right, {color: brandcolors.grey[500]}]}>$ 1835.45</Text>
                                </View>
                            </Pressable>
                        </View>
                    </View>

                </ScrollView>
                
            </View>



        </> 
    );
}


const styles = StyleSheet.create({
    balance_box: {
        backgroundColor: brandcolors.pry[500],
        paddingVertical: 32,
        paddingHorizontal: 16,
        borderRadius: 16,
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
    asset_invest_item: {
        paddingVertical: 8,
    },
    icon_box: {
        width: 40,
        height: 40,
        backgroundColor: colors.neutrals.neu2,
        borderRadius: 8,
    },
    invest_width_33: {
        width: '33.33%'
    },
})


export default Invest;