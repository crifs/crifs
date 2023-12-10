import { useEffect, useReducer, useState } from "react";
import { Text, 
    View, 
    StyleSheet,
    Image,
    TextInput,
    ScrollView,
    Pressable,
} from "react-native";
import { layoutStyles } from "../../styles/layout";
import { textStyles } from "../../styles/text-styles";
import { brandcolors, colors } from "../../utilities/colors";
import IconGeneralF from "../../components/icon-general-f";
import { icons } from "../../utilities/icons";
import { images } from "../../utilities/images";
import IconGeneral from "../../components/icon-general";
import ButtonOne from "../../components/custom-buttons/one";
import { useSelector, useDispatch } from "react-redux";
import { setAssetChoice, setNetworkChoice } from "../../redux/action";



const Bridge = ({ navigation }) => {

    const { networkchoice, assetchoice, bridgefromnetwork, bridgefromasset, bridgetonetwork, bridgetoasset } = useSelector(state => state.appReducer)
    const dispatch = useDispatch()
    const [updateFlag, setUpdateFlag] = useState(false)

    const [complete, setComplete] = useState(false)
    const [topamount, setTopamount] = useState(null)
    const [bottomamount, setBottomamount] = useState(null)
    const [preview, setPreview] = useState(null)

    const [defaultbridge, setDefaultbridge] = useState(true)
    const [bridgeFromNetwork, setBridgefromnetwork] = useState(null)
    const [bridgeFromAsset, setBridgefromasset] = useState(null)
    const [bridgeToNetwork, setBridgetoNetwork] = useState(null)
    const [bridgeToAsset, setBridgetoAsset] = useState(null)


    useEffect(() => {
        var bridge_one = bridgefromnetwork
        setBridgefromnetwork(bridge_one)

        var asset_one = bridgefromasset
        setBridgefromasset(asset_one)

        var bridge_two = bridgetonetwork
        setBridgetoNetwork(bridge_two)

        var asset_two = bridgetoasset
        setBridgetoAsset(asset_two)

    }, [bridgefromnetwork, bridgefromasset, bridgetonetwork, bridgetoasset])

    useEffect(() => {
        checkComplete()
    }, [bridgeFromNetwork, bridgeFromAsset, bridgeToNetwork, bridgeToAsset, topamount, bottomamount])

    const checkComplete = () => {
        if(bridgeFromNetwork && bridgeFromAsset && bridgeToNetwork && bridgeToAsset && topamount && bottomamount) {
            setComplete(true)
        }
    }

    const handleConfirm = () => {
        if(bridgeFromNetwork && bridgeFromAsset && bridgeToNetwork && bridgeToAsset && topamount && bottomamount) {
            setPreview(true)
        }
    }

    const handleNetworkchoice = (value) => {
        dispatch(setNetworkChoice(value))
        navigation.navigate('Bridge Network')
    }
    const handleAssetchoice = (value) => {
        dispatch(setAssetChoice(value))
        navigation.navigate('Bridge Asset')
    }

    const handleDefault = () => {
        if (defaultbridge) {
            setDefaultbridge(null)
            setBridgefromnetwork(bridgetonetwork)
            setBridgefromasset(bridgetoasset)
            setBridgetoNetwork(bridgefromnetwork)
            setBridgetoAsset(bridgefromasset)
        } else {
            setDefaultbridge(true)
            setBridgefromnetwork(bridgefromnetwork)
            setBridgefromasset(bridgefromasset)
            setBridgetoNetwork(bridgetonetwork)
            setBridgetoAsset(bridgetoasset)
        }
    }

    // useEffect(() => {
    //     if(defaultbridge) {

    //     }
    //     if(!defaultbridge) {

    //     }
    // }, [defaultbridge])


    return ( 
        <>

        
            <View style={[layoutStyles.generalFrame, layoutStyles.generalTopPad, layoutStyles.generalHPad]}>
                
                <View style={[layoutStyles.align_center_justify_space_btwn, layoutStyles.mgb_24]}>
                    {preview ? <IconGeneralF 
                        boxstyle={{ width: 24, height: 24 }}
                        iconstyle={{ width: 20, height: 20 }}
                        ripplecolor={{ color: brandcolors.ripple }}
                        iconsrc={icons.dark.angle_left}
                        iconfunc={() => setPreview(null)}
                    /> : null}
                    {!preview ? <View></View> : null}
                    <Text style={[textStyles.bold18, {color: brandcolors.grey[800]}]}>{!preview ? 'Bridge Assets' : 'Preview'}</Text>
                    {!preview ? <IconGeneralF 
                        boxstyle={{ width: 24, height: 24 }}
                        iconstyle={{ width: 20, height: 20 }}
                        ripplecolor={{ color: brandcolors.ripple }}
                        iconsrc={icons.dark.history}
                        iconfunc={() => navigation.navigate('Bridge History')}
                    /> : null}
                    {preview ? <View></View> : null}
                </View>

                <ScrollView style={{ flex: 1, }} contentContainerStyle={{ flexGrow: 1 }} showsVerticalScrollIndicator={false}>
                    {!preview ? 
                        <>
                            <View style={[styles.bridge_container]}>
                                <View style={[layoutStyles.mgb_24, styles.bridge_box]}>
                                    <View style={[layoutStyles.mgb_24]}>
                                        <View style={[layoutStyles.align_center_justify_space_btwn, layoutStyles.mgb_8]}>
                                            <Text style={[textStyles.reg14, {color: brandcolors.grey[500]}]}>Network</Text>
                                            <Text style={[textStyles.reg14, {color: brandcolors.grey[500]}]}>Asset</Text>
                                        </View>

                                        <View style={[layoutStyles.flex_row]}>
                                            <View style={[styles.bridge_div, layoutStyles.row_align_center, styles.radius_left]}>
                                                <Pressable style={[layoutStyles.gap_8, layoutStyles.row_align_center]}
                                                    android_ripple={{ color: brandcolors.ripple }}
                                                    hitSlop={{ bottom: 20, top: 20, right: 20 }}
                                                    onPress={() => handleNetworkchoice('from')}
                                                >
                                                    <View style={[styles.icon_box, layoutStyles.just_center]}>
                                                        {bridgeFromNetwork ? <IconGeneral 
                                                            boxstyle={{ width: 16, height: 16 }}
                                                            iconstyle={{ width: 15, height: 13 }}
                                                            iconsrc={bridgeFromNetwork.logo}
                                                        /> : null}
                                                    </View>
                                                    <Text style={[textStyles.reg14, {color: bridgeFromNetwork ? brandcolors.grey[800] : brandcolors.grey[500]}]}>
                                                            {bridgeFromNetwork ? bridgeFromNetwork.name : 'Select network'}
                                                    </Text>
                                                </Pressable>
                                            </View>
                                            <View style={[styles.bridge_div, layoutStyles.row_align_center, styles.radius_right,]}>
                                                <View style={[layoutStyles.flex_row, layoutStyles.flex_end,]}>
                                                    <Pressable style={[layoutStyles.gap_8, layoutStyles.row_align_center]}
                                                        android_ripple={{ color: brandcolors.ripple }}
                                                        hitSlop={{ bottom: 20, top: 20 }}
                                                        onPress={() => handleAssetchoice('from')}
                                                    >
                                                        <Text style={[textStyles.reg14, {color: bridgeFromAsset ? brandcolors.grey[800] : brandcolors.grey[500]}]}>
                                                            {bridgeFromAsset ? bridgeFromAsset.name : 'Select asset'}
                                                        </Text>
                                                        <View style={[styles.icon_box, layoutStyles.just_center]}>
                                                            {bridgeFromAsset ? <IconGeneral 
                                                                boxstyle={{ width: 16, height: 16 }}
                                                                iconstyle={{ width: 15, height: 13 }}
                                                                iconsrc={bridgeFromAsset.logo}
                                                            /> : null}
                                                        </View>
                                                    </Pressable>
                                                </View>
                                            </View>
                                        </View>
                                    </View>

                                    <View>
                                        <Text style={[textStyles.reg14, layoutStyles.mgb_8, {color: brandcolors.grey[500]}]}>Amount</Text>

                                        <View style={[layoutStyles.align_center_justify_space_btwn, layoutStyles.mgb_8, styles.bridge_input]}>
                                            <TextInput 
                                                placeholder="Enter amount"
                                                placeholderTextColor={brandcolors.grey[500]}
                                                style={[textStyles.reg14, {color: brandcolors.grey[800], width: '70%',}]}
                                                keyboardType="numeric"
                                                onChangeText={(value) => setTopamount(value)}
                                            />
                                            <Text style={[textStyles.reg14, {color: brandcolors.sec[500]}]}>Max</Text>
                                        </View>

                                        <Text style={[textStyles.reg14, {color: brandcolors.grey[800]}]}>Balance: 0.0098</Text>
                                    </View>
                                </View>

                                <View style={[layoutStyles.mgb_24, layoutStyles.just_center]}>
                                    <IconGeneralF 
                                        boxstyle={{ width: 24, height: 24 }}
                                        iconstyle={{ width: 14, height: 14 }}
                                        ripplecolor={{color: brandcolors.ripple}}
                                        iconsrc={icons.active.swap}
                                        iconfunc={handleDefault}
                                    />
                                </View>

                                <View style={[styles.bridge_box, layoutStyles.mgb_38]}>
                                    <View style={[layoutStyles.mgb_24]}>
                                        <View style={[layoutStyles.align_center_justify_space_btwn, layoutStyles.mgb_8]}>
                                            <Text style={[textStyles.reg14, {color: brandcolors.grey[500]}]}>Network</Text>
                                            <Text style={[textStyles.reg14, {color: brandcolors.grey[500]}]}>Asset</Text>
                                        </View>

                                        <View style={[layoutStyles.flex_row]}>
                                            <View style={[styles.bridge_div, layoutStyles.row_align_center, styles.radius_left]}>
                                                <Pressable style={[layoutStyles.gap_8, layoutStyles.row_align_center]}
                                                    android_ripple={{ color: brandcolors.ripple }}
                                                    hitSlop={{ bottom: 20, top: 20, right: 20 }}
                                                    onPress={() => handleNetworkchoice('to')}
                                                >
                                                    <View style={[styles.icon_box, layoutStyles.just_center]}>
                                                        {bridgeToNetwork ? <IconGeneral 
                                                            boxstyle={{ width: 16, height: 16 }}
                                                            iconstyle={{ width: 15, height: 13 }}
                                                            iconsrc={bridgeToNetwork.logo}
                                                        /> : null}
                                                    </View>
                                                    <Text style={[textStyles.reg14, {color: bridgeToNetwork ? brandcolors.grey[800] : brandcolors.grey[500]}]}>
                                                        {bridgeToNetwork ? bridgeToNetwork.name : 'Select network'}
                                                    </Text>
                                                </Pressable>
                                            </View>
                                            <View style={[styles.bridge_div, layoutStyles.row_align_center, styles.radius_right,]}>
                                                <View style={[layoutStyles.flex_row, layoutStyles.flex_end,]}>
                                                    <Pressable style={[layoutStyles.gap_8, layoutStyles.row_align_center]}
                                                        android_ripple={{ color: brandcolors.ripple }}
                                                        hitSlop={{ bottom: 20, top: 20 }}
                                                        onPress={() => handleAssetchoice('to')}
                                                    >
                                                        <Text style={[textStyles.reg14, {color: bridgeToAsset ? brandcolors.grey[800] : brandcolors.grey[500]}]}>
                                                            {bridgeToAsset ? bridgeToAsset.name : 'Select asset'}
                                                        </Text>
                                                        <View style={[styles.icon_box, layoutStyles.just_center]}>
                                                            {bridgeToAsset ? <IconGeneral 
                                                                boxstyle={{ width: 16, height: 16 }}
                                                                iconstyle={{ width: 15, height: 13 }}
                                                                iconsrc={bridgeToAsset.logo}
                                                            /> : null}
                                                        </View>
                                                    </Pressable>
                                                </View>
                                            </View>
                                        </View>
                                    </View>

                                    <View>
                                        <Text style={[textStyles.reg14, layoutStyles.mgb_8, {color: brandcolors.grey[500]}]}>Amount</Text>
                                        <TextInput 
                                            placeholder="Enter Amount"
                                            placeholderTextColor={brandcolors.grey[500]}
                                            style={[textStyles.reg14, styles.bridge_input, layoutStyles.mgb_8, {color: brandcolors.grey[800]}]}
                                            keyboardType="numeric"
                                            onChangeText={(value) => setBottomamount(value)}
                                        />
                                        <Text style={[textStyles.reg14, {color: brandcolors.grey[800]}]}>Balance 0.0098</Text>
                                    </View>
                                </View>
                            </View>
                        </>
                    : null}

                    {preview ? 
                        <>
                            <View>

                                <View style={[layoutStyles.mgb_16]}>
                                    <Text style={[layoutStyles.mgb_8, textStyles.reg16, {color: brandcolors.grey[500]}]}>Bridge From</Text>
                                    <View style={[styles.bridge_preview_box]}>
                                        <View style={[layoutStyles.align_center_justify_space_btwn]}>
                                            <Text style={[textStyles.reg14, {color: brandcolors.grey[800]}]}>Network:</Text>
                                            <Text style={[textStyles.reg14, {color: brandcolors.grey[800]}]}>Ethereum</Text>
                                        </View>
                                        <View style={[styles.preview_line]}></View>
                                        <View style={[layoutStyles.align_center_justify_space_btwn]}>
                                            <Text style={[textStyles.reg14, {color: brandcolors.grey[800]}]}>Asset:</Text>
                                            <Text style={[textStyles.reg14, {color: brandcolors.grey[800]}]}>USDT</Text>
                                        </View>
                                        <View style={[styles.preview_line]}></View>
                                        <View style={[layoutStyles.align_center_justify_space_btwn]}>
                                            <Text style={[textStyles.reg14, {color: brandcolors.grey[800]}]}>Amount:</Text>
                                            <View>
                                                <Text style={[textStyles.reg14, {color: brandcolors.grey[800]}]}>0.098</Text>
                                                <Text style={[textStyles.reg12, {color: brandcolors.grey[800]}]}>$135.7</Text>
                                            </View>
                                        </View>
                                    </View>
                                </View>


                                <View style={[layoutStyles.mgb_16, layoutStyles.just_center]}>
                                    <IconGeneral 
                                        boxstyle={{ width: 24, height: 24 }}
                                        iconstyle={{ width: 16, height: 10, transform: [{rotate: '90deg'}] }}
                                        iconsrc={icons.dark.arrow_right}
                                    />
                                </View>

                                <View style={[layoutStyles.mgb_16]}>
                                    <Text style={[layoutStyles.mgb_8, textStyles.reg16, {color: brandcolors.grey[500]}]}>Bridge to</Text>
                                    <View style={[styles.bridge_preview_box]}>
                                        <View style={[layoutStyles.align_center_justify_space_btwn]}>
                                            <Text style={[textStyles.reg14, {color: brandcolors.grey[800]}]}>Network:</Text>
                                            <Text style={[textStyles.reg14, {color: brandcolors.grey[800]}]}>Ethereum</Text>
                                        </View>
                                        <View style={[styles.preview_line]}></View>
                                        <View style={[layoutStyles.align_center_justify_space_btwn]}>
                                            <Text style={[textStyles.reg14, {color: brandcolors.grey[800]}]}>Asset:</Text>
                                            <Text style={[textStyles.reg14, {color: brandcolors.grey[800]}]}>Matic</Text>
                                        </View>
                                        <View style={[styles.preview_line]}></View>
                                        <View style={[layoutStyles.align_center_justify_space_btwn]}>
                                            <Text style={[textStyles.reg14, {color: brandcolors.grey[800]}]}>Amount:</Text>
                                            <View>
                                                <Text style={[textStyles.reg14, {color: brandcolors.grey[800]}]}>0.098</Text>
                                                <Text style={[textStyles.reg12, {color: brandcolors.grey[800]}]}>$135.7</Text>
                                            </View>
                                        </View>
                                    </View>
                                </View>

                                <View style={[layoutStyles.mgb_16]}>
                                    <Text style={[layoutStyles.mgb_8, textStyles.reg16, {color: brandcolors.grey[500]}]}>Quote</Text>
                                    <View style={[styles.bridge_preview_box]}>
                                        <View style={[layoutStyles.align_center_justify_space_btwn]}>
                                            <Text style={[textStyles.reg14, {color: brandcolors.grey[800]}]}>Est. Time</Text>
                                            <Text style={[textStyles.reg14, {color: brandcolors.grey[800]}]}>Ethereum</Text>
                                        </View>
                                        <View style={[styles.preview_line]}></View>
                                        <View style={[layoutStyles.align_center_justify_space_btwn]}>
                                            <View style={[layoutStyles.row_align_center, layoutStyles.gap_8]}>
                                                <Text style={[textStyles.reg14, {color: brandcolors.grey[800]}]}>Slippage</Text>
                                                <IconGeneral 
                                                    boxstyle={{ width: 16, height: 16 }}
                                                    iconstyle={{ width: 13, height: 13 }}
                                                    iconsrc={icons.dark.info}
                                                />
                                            </View>
                                            <Text style={[textStyles.reg14, {color: brandcolors.grey[800]}]}>Matic</Text>
                                        </View>
                                        <View style={[styles.preview_line]}></View>
                                        <View style={[layoutStyles.align_center_justify_space_btwn]}>
                                            <View style={[layoutStyles.row_align_center, layoutStyles.gap_8]}>
                                                <Text style={[textStyles.reg14, {color: brandcolors.grey[800]}]}>Network fee</Text>
                                                <IconGeneral 
                                                    boxstyle={{ width: 16, height: 16 }}
                                                    iconstyle={{ width: 13, height: 13 }}
                                                    iconsrc={icons.dark.info}
                                                />
                                            </View>
                                            <View>
                                                <Text style={[textStyles.reg14, {color: brandcolors.grey[800]}]}>0.098</Text>
                                                <Text style={[textStyles.reg12, {color: brandcolors.grey[800]}]}>$135.7</Text>
                                            </View>
                                        </View>
                                    </View>
                                </View>

                            </View>
                        </>
                    : null}

                    <View style={[layoutStyles.flex_end]}>
                        <ButtonOne 
                            btnText={!preview ? 'Confirm' : 'Bridge'}
                            buttonStyles={{ marginBottom: 23, }}
                            status={complete ? false : true}
                            buttonPress={() => {
                                if(!preview) {
                                    handleConfirm()
                                }
                            }}
                        />
                    </View>
                </ScrollView>

            </View>
        


        </>
    );
}


const styles = StyleSheet.create({
    bridge_container: {
        width: '100%',
    },
    bridge_box: {
        width: '100%',
        borderRadius: 16,
        borderWidth: 1,
        borderColor: brandcolors.grey[500],
        padding: 16,
    },
    bridge_div: {
        width: '50%',
        height: 52,
        borderWidth: 1,
        borderColor: brandcolors.grey[500],
        paddingHorizontal: 8,
    },
    radius_left: {
        borderTopLeftRadius: 16,
        borderBottomLeftRadius: 16,
    },
    radius_right: {
        borderTopRightRadius: 16,
        borderBottomRightRadius: 16,
    },
    icon_box: {
        backgroundColor: colors.neutrals.neu2,
        borderRadius: 4,
        width: 20,
        height: 20,
        borderWidth: .5,
        borderColor: brandcolors.pry[500],
    },
    bridge_input: {
        width: '100%',
        height: 52,
        borderRadius: 16,
        borderWidth: 1,
        borderColor: brandcolors.grey[500],
        paddingHorizontal: 8,
    },
    bridge_preview_box: {
        padding: 16,
    },
    preview_line: {
        marginVertical: 16,
        width: '100%',
        height: 1,
        backgroundColor: brandcolors.grey[200],
    },
})

 
export default Bridge;