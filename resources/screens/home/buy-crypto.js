import { useEffect, useState } from "react";
import { Text, View, 
    StyleSheet,
    TouchableOpacity,
    Pressable,
    TextInput,
    Modal,
    ScrollView,
} from "react-native";
import { layoutStyles } from "../../styles/layout";
import { icons } from "../../utilities/icons";
import { brandcolors, colors } from "../../utilities/colors";
import { images } from "../../utilities/images";
import IconGeneralF from "../../components/icon-general-f";
import { textStyles } from "../../styles/text-styles";
import { modalStyles } from "../../styles/modals";
import { useSelector } from "react-redux";
import IconGeneral from "../../components/icon-general";
import ButtonOne from "../../components/custom-buttons/one";
import BackDrop from "../../components/backdrop";
import { testCoins } from "../../utilities/test-coins";



const BuyCrypto = ({ navigation }) => {

    
    const { cryptoasset } = useSelector(state => state.appReducer)

    const [coinsmodal, setCoinsmodal] = useState(false)
    const [popularcoin, setPopcoin] = useState(null)
    const [currentcoin, setCurrentcoin] = useState(null)
    const [pmmodal, setPmmodal] = useState(false)


    useEffect(() => {
        checkCryptoasset()
        handlePopcoin()
    }, [])

    const checkCryptoasset = () => {
        if(!cryptoasset) {
            navigation.navigate('TabsScreen')
        }
    }

    const handlePopcoin = () => {
        if(testCoins) {
            var pop = testCoins.filter(coin => coin.popular === true)
            setPopcoin(pop)
            setCurrentcoin(testCoins[0])
        }
    }

    const pickCoin = (value) => {
        setCurrentcoin(value)
        setCoinsmodal(false)
    }



    return ( 
        <>


            <View style={[layoutStyles.generalFrame, layoutStyles.generalHPad, layoutStyles.generalTopPad]}>
                

                <View style={[layoutStyles.mgb_97, layoutStyles.align_center_justify_space_btwn]}>
                    <IconGeneralF 
                        boxstyle={{ width: 24, height: 24 }}
                        iconstyle={{ width: 7, height: 16 }}
                        ripplecolor={brandcolors.ripple}
                        iconsrc={icons.dark.angle_left}
                        iconfunc={() => navigation.goBack()}
                    />
                    <Text style={[textStyles.bold18, {color: brandcolors.pry[500]}]}>Buy {cryptoasset ? cryptoasset.name : null}</Text>
                    <Pressable style={[layoutStyles.just_center, styles.coin_select_btn]}
                        android_ripple={{ color: brandcolors.ripple }}
                        onPress={() => setCoinsmodal(true)}
                    >
                        <Text style={[textStyles.reg14, {color: brandcolors.grey[500]}]}>{currentcoin ? currentcoin.ticker : null}</Text>
                    </Pressable>
                </View>

                <View style={[layoutStyles.just_center, layoutStyles.mgb_97]}>
                    <View style={[layoutStyles.row_align_center, layoutStyles.mgb_4]}>
                        <Text style={[textStyles.bold26, { color: brandcolors.pry[500] }]}>{currentcoin ? currentcoin.sign : null}</Text>
                        <TextInput 
                            placeholder="0.00"
                            placeholderTextColor={brandcolors.grey[800]}
                            style={[textStyles.bold26, { color: brandcolors.pry[500] }]}
                            keyboardType="numeric"
                        />
                    </View>
                    <View style={[layoutStyles.row_align_center]}>
                        <IconGeneral 
                            boxstyle={{ width: 17, height: 17 }}
                            iconstyle={{ width: 13, height: 9 }}
                            iconsrc={icons.light.est}
                        />
                        <Text style={[textStyles.reg14, {color: brandcolors.grey[500]}]}>0.00340 {cryptoasset ? cryptoasset.ticker : null}</Text>
                    </View>
                </View>

                <Pressable style={[layoutStyles.align_center_justify_space_btwn, styles.payment_select_btn]}
                    android_ripple={{ color: brandcolors.ripple }}
                    onPress={() => setPmmodal(true)}
                >
                    <View>
                        <Text style={[layoutStyles.mgb_4, textStyles.reg16, {color: brandcolors.grey[800]}]}>
                            MoonPay
                        </Text>
                        <Text style={[layoutStyles.mgb_4, textStyles.reg14, {color: brandcolors.grey[500]}]}>
                            Third party provider
                        </Text>
                    </View>

                    <View style={[layoutStyles.row_align_center, layoutStyles.gap_5]}>
                        <Text style={[textStyles.reg14, {color: brandcolors.sec[500]}]}>Best rate</Text>
                        <IconGeneral 
                            boxstyle={{ width: 24, height: 24 }}
                            iconstyle={{ width: 7, height: 16, transform: [{rotate: '180deg'}] }}
                            iconsrc={icons.dark.angle_left}
                        />
                    </View>
                </Pressable>

                <View style={[layoutStyles.flex_end,]}>
                    <ButtonOne 
                        btnText={`Buy ${cryptoasset ? cryptoasset.ticker : null}`}
                        buttonStyles={layoutStyles.mgb_24}
                        status={false}
                    />
                </View>


            </View>

            <Modal
                visible={coinsmodal}
                transparent={true}
                onRequestClose={()=>setCoinsmodal(false)}
                animationType="slide"
                hardwareAccelerated={true}
            >
                <BackDrop dropPress={() => setCoinsmodal(false)} />
                <View style={[modalStyles.modal_container]}>
                    <View style={[modalStyles.coins_modal_box]}>

                        <View style={[layoutStyles.row_flex_end, layoutStyles.mgb_24]}>
                            <IconGeneralF 
                                boxstyle={{ width: 24, height: 24 }}
                                iconstyle={{ width: 9, height: 9 }}
                                iconsrc={icons.dark.cancel}
                                ripplecolor={{ color: brandcolors.ripple }}
                                iconfunc={() => setCoinsmodal(false)}
                            />
                        </View>

                        <ScrollView showsVerticalScrollIndicator={false}>
                            <View style={[layoutStyles.mgb_16]}>
                                <Text style={[layoutStyles.mgb_16, textStyles.reg12, {color: brandcolors.grey[500]}]}>Popular</Text>
                                <View>
                                    {popularcoin ? 
                                        popularcoin.map((item, index) => (
                                            <Pressable
                                                key={item.ticker} 
                                                style={[
                                                    layoutStyles.align_center_justify_space_btwn, 
                                                    index !== ((popularcoin.length) - 1) ? layoutStyles.mgb_16 : null,
                                                    { height: 24 }
                                                ]}
                                                android_ripple={{ color: brandcolors.ripple }}
                                                onPress={() => pickCoin(item)}
                                            >
                                                <Text style={[textStyles.reg14, {color: brandcolors.grey[800]}]}>
                                                    {item.ticker} - {item.name}
                                                </Text>
                                                {currentcoin ? 
                                                    currentcoin.name === item.name ? 
                                                        <IconGeneral 
                                                            boxstyle={{ width: 24, height: 24 }}
                                                            iconstyle={{ width: 14, height: 11 }}
                                                            iconsrc={icons.active.check}
                                                        />
                                                    : null
                                                : null}
                                            </Pressable>
                                        ))
                                    : null}
                                </View>
                            </View>

                            <View style={[layoutStyles.mgb_16]}>
                                <Text style={[layoutStyles.mgb_16, textStyles.reg12, {color: brandcolors.grey[500]}]}>All</Text>
                                <View>
                                    {testCoins ? 
                                        testCoins.map((item, index) => (
                                            <Pressable
                                                key={item.ticker} 
                                                style={[
                                                    layoutStyles.align_center_justify_space_btwn, 
                                                    index !== ((testCoins.length) - 1) ? layoutStyles.mgb_16 : null,
                                                    { height: 24 }
                                                ]}
                                                android_ripple={{ color: brandcolors.ripple }}
                                                onPress={() => pickCoin(item)}
                                            >
                                                <Text style={[textStyles.reg14, {color: brandcolors.grey[800]}]}>
                                                    {item.ticker} - {item.name}
                                                </Text>
                                                {currentcoin ? 
                                                    currentcoin.name === item.name ? 
                                                        <IconGeneral 
                                                            boxstyle={{ width: 24, height: 24 }}
                                                            iconstyle={{ width: 14, height: 11 }}
                                                            iconsrc={icons.active.check}
                                                        />
                                                    : null
                                                : null}
                                            </Pressable>
                                        ))
                                    : null}
                                </View>
                            </View>
                        </ScrollView>

                    </View>
                </View>

            </Modal>

            <Modal
                visible={pmmodal}
                transparent={true}
                onRequestClose={()=>setPmmodal(false)}
                animationType="slide"
                hardwareAccelerated={true}
            >
                <BackDrop dropPress={() => setPmmodal(false)} />
                <View style={[modalStyles.modal_container]}>
                    <View style={[modalStyles.pm_modal_box]}>

                        <View style={[layoutStyles.row_flex_end, layoutStyles.mgb_24]}>
                            <IconGeneralF 
                                boxstyle={{ width: 24, height: 24 }}
                                iconstyle={{ width: 9, height: 9 }}
                                iconsrc={icons.dark.cancel}
                                ripplecolor={{ color: brandcolors.ripple }}
                                iconfunc={() => setPmmodal(false)}
                            />
                        </View>
                        
                        <View style={[layoutStyles.mgb_16]}>
                            <Text style={[textStyles.reg16, layoutStyles.mgb_8, { color: brandcolors.grey[500] }]}>Card payment</Text>
                            <View>
                                <View style={[layoutStyles.align_center_justify_space_btwn, layoutStyles.mgb_8, modalStyles.pm_modal_item]}>
                                    <Text style={[textStyles.reg16, { color: brandcolors.grey[800] }]}>MoonPay</Text>
                                    <Text style={[textStyles.reg16, { color: brandcolors.grey[800] }]}>
                                        0.00567 {cryptoasset ? cryptoasset.ticker : null}
                                    </Text>
                                </View>
                                <View style={[layoutStyles.align_center_justify_space_btwn, layoutStyles.mgb_8, modalStyles.pm_modal_item]}>
                                    <Text style={[textStyles.reg16, { color: brandcolors.grey[800] }]}>Mercuryo</Text>
                                    <Text style={[textStyles.reg16, { color: brandcolors.grey[800] }]}>
                                        0.00567 {cryptoasset ? cryptoasset.ticker : null}
                                    </Text>
                                </View>
                                <View style={[layoutStyles.align_center_justify_space_btwn, modalStyles.pm_modal_item]}>
                                    <Text style={[textStyles.reg16, { color: brandcolors.grey[800] }]}>Ramp</Text>
                                    <Text style={[textStyles.reg16, { color: brandcolors.grey[800] }]}>
                                        0.00567 {cryptoasset ? cryptoasset.ticker : null}
                                    </Text>
                                </View>
                            </View>
                        </View>

                    </View>
                </View>

            </Modal>

        </>
    );
}


const styles  = StyleSheet.create({
    coin_select_btn: {
        width: 46,
        height: 25,
        borderRadius: 4,
        backgroundColor: brandcolors.grey[50],
    },
    payment_select_btn: {
        backgroundColor: brandcolors.grey[50],
        height: 72,
        borderRadius: 8,
        paddingHorizontal: 8,
    },

})

 
export default BuyCrypto;