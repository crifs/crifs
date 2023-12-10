import { View, Text, 
    Image,
    TouchableOpacity,
    StyleSheet,
    ImageBackground,
    Pressable
} from "react-native";
import { layoutStyles } from "../../styles/layout";
import { images } from "../../utilities/images";
import { icons } from "../../utilities/icons";
import { brandcolors, colors } from "../../utilities/colors";
import Swiper from "react-native-swiper";
import { useState } from "react";
import { chartdays } from "../../utilities/chart-day";
import { textStyles } from "../../styles/text-styles";
import { tokens } from "../../utilities/test-tokens";
import { setFiatasset, setCryptoasset } from "../../redux/action";
import { useDispatch } from "react-redux";




const PortFolio = ({ navigation }) => {

    const dispatch = useDispatch()

    const [viewdet, setViewdet] = useState(null)
    const [chartday, setChartday] = useState('1d')


    const handleViewdet = () => {
        if(!viewdet) {
            setViewdet(true)
        } else {
            setViewdet(null)
        }
    }

    const handleFiatNav = (value) => {
        if(value) {
            if(value.type === 'crypto') {
                dispatch(setCryptoasset(value))
                navigation.navigate('Crypto Action')
            } else if (value.type === 'fiat') {
                dispatch(setFiatasset(value))
                navigation.navigate('Fiat Action')
            }
        }
    }

    return ( 
        <View>


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

            {tokens ? 
                tokens.map((token) => (
                    <Pressable style={[layoutStyles.align_center_justify_space_btwn, styles.token_box]} key={token.ticker}
                        android_ripple={{ color: brandcolors.ripple }}
                        onPress={() => handleFiatNav(token)}
                    >
                        <View style={[layoutStyles.gap_10, layoutStyles.row_align_center]}>
                            <View style={[styles.token_logo_box]}>
                                <Image 
                                    source={token.logo}
                                    style={{ width: 24, height: 24 }}
                                    resizeMode="contain"
                                />
                            </View>
                            <View>
                                <Text style={[layoutStyles.bp_2_dc]}>{token.ticker}</Text>
                                <Text style={[layoutStyles.l1_r]}>{token.name}</Text>
                            </View>
                        </View>

                        <View>
                            <Text style={[layoutStyles.bp_2]}>{token.amount}</Text>
                            <Text style={[layoutStyles.l1_m]}>$ {token.amount_in_bucks}</Text>
                        </View>
                    </Pressable>
                ))
            : null}



        </View>
    );
}

const styles = StyleSheet.create({
    top_port: {
        backgroundColor: colors.neutrals.white,
        elevation: 15,
        zIndex: 44,
    },
    top_port_pad: {
        paddingHorizontal: 20,
    },
    plus_box: {
        width: 30,
        height: 30,
        borderRadius: 50,
        backgroundColor: colors.btn.btnbg,
        justifyContent: 'center',
        alignItems: 'center',
    },
    ltd_box: {
        backgroundColor: colors.neutrals.neu2,
        borderColor: colors.brand.brand2,
        borderWidth: 1.4,
        borderRadius: 3,
        width: 24,
        height: 24,
        justifyContent: 'center',
        alignItems: 'center',
    },
    swiper_container: {
        paddingHorizontal: 30,
        paddingTop: 40,
        height: 200, 
        position: 'relative'
    },
    swipe_box: {
        width: '100%',
        height: 140,
        borderRadius: 10,
        resizeMode: 'cover',
        borderRadius: 10,
        overflow: 'hidden',
        padding: 10,
    },
    swipe_head_active: {
        fontWeight: '700',
        fontSize: 16,
        color: colors.brand.brand3,
        marginBottom: 10,
    },
    swipe_head_active_2: {
        fontWeight: '700',
        fontSize: 16,
        color: colors.brand.brand2,
        marginBottom: 10,
    },
    swipe_body_medium: {
        fontWeight: '500',
        fontSize: 12,
        color: colors.neutrals.neu2,
        letterSpacing: 1,
        marginBottom: 10,
    },
    swipe_action: {
        fontWeight: '700',
        fontSize: 14,
        color: colors.neutrals.neu2,
    },
    chart_container: {
        // paddingHorizontal: 20,
    },
    chart_box: {
        width: '100%',
        backgroundColor: brandcolors.grey[50],
        padding: 16,
        borderRadius: 16,
    },
    pie_chart_box: {
        width: 200,
        height: 200,
        borderRadius: 100,
        backgroundColor: colors.brand.brand3
    },
    bar: {
        backgroundColor: colors.neutrals.neu8,
        width: '100%',
        height: 30,
        borderRadius: 5,
        paddingLeft: 40,
        paddingRight: 10,
        // paddingVertical: 3,
        position: 'relative'
    },
    bar_progress: {
        position: 'absolute',
        top: 0,
        left: 0,
        height: '100%',
        borderTopLeftRadius: 5,
        borderBottomLeftRadius: 5
    },
    chart_day_box: {
        borderWidth: .5,
        borderColor: colors.neutrals.neu9,
        paddingHorizontal: 4,
        paddingVertical: 3,
    },
    day_box: {
        width: '19%',
        height: 18,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    token_box: {
        paddingVertical: 8,
    },
    token_logo_box: {
        backgroundColor: colors.neutrals.neu2,
        width: 40,
        height: 40,
        borderRadius: 8,
        justifyContent: 'center',
        alignItems: 'center',
    },
})
 
export default PortFolio;