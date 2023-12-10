import { Text, View, 
    StyleSheet,
    TextInput,
    ScrollView,
    TouchableOpacity
} from "react-native";
import { layoutStyles } from "../../styles/layout";
import { icons } from "../../utilities/icons";
import IconGeneralF from "../../components/icon-general-f";
import { textStyles } from "../../styles/text-styles";
import { brandcolors } from "../../utilities/colors";
import { useEffect, useState } from "react";
import IconGeneral from "../../components/icon-general";
import { tokens } from "../../utilities/test-tokens";
import { useSelector, useDispatch } from "react-redux";
import { setBridgeFromAsset, setBridgeToAsset } from "../../redux/action";

const BridgeAsset = ({ navigation }) => {

    const { assetchoice, bridgefromasset, bridgetoasset } = useSelector(state => state.appReducer)
    const dispatch = useDispatch()

    const [searchicon, setSearchicon] = useState(true)
    const [searchvalue, setSearchvalue] = useState('')
    const [searched, setSearched] = useState(null)

    useEffect(() => {
        if(!assetchoice) {
            navigation.goBack()
        }
    }, [])

    useEffect(() => {
        if(searchvalue !== '' && tokens) {
            let item = tokens.filter(e => {
                return (e.name).toLowerCase().includes(searchvalue.toLowerCase())
            })
            setSearched(item) 
        }
    }, [searchvalue])

    const handleDispatch = (item) => {
        if(assetchoice === 'from') {
            dispatch(setBridgeFromAsset(item))
        } 
        if (assetchoice === 'to') {
            dispatch(setBridgeToAsset(item))
        }
    }


    return (
        <>
        
            <View style={[layoutStyles.generalFrame, layoutStyles.generalTopPad, layoutStyles.generalHPad]}>
                
                <View style={[layoutStyles.align_center_justify_space_btwn, layoutStyles.mgb_24]}>
                    <IconGeneralF 
                        boxstyle={{ width: 24, height: 24 }}
                        iconstyle={{ width: 20, height: 20 }}
                        ripplecolor={{ color: brandcolors.ripple }}
                        iconsrc={icons.dark.angle_left}
                        iconfunc={() => navigation.goBack()}
                    />
                    <Text style={[textStyles.bold18, {color: brandcolors.grey[800]}]}>Select Asset</Text>
                    <View></View>
                </View>

                <View style={[layoutStyles.mgb_16, styles.searchinput, layoutStyles.gap_8, layoutStyles.row_align_center]}>
                    {searchicon ? <IconGeneral 
                        boxstyle={{ width: 24, height: 24 }}
                        iconstyle={{ width: 20, height: 20 }}
                        iconsrc={icons.dark.search}
                    /> : null}
                    <TextInput 
                        placeholder="Search"
                        placeholderTextColor={brandcolors.grey[500]}
                        style={[textStyles.reg16, {color: brandcolors.grey[800], width: '90%',}]}
                        onChangeText={(value) => setSearchvalue(value)}
                        onFocus={() => setSearchicon(null)}
                        onBlur={() => setSearchicon(true)}
                    />
                </View>

                <ScrollView style={{ flex: 1 }} showsVerticalScrollIndicator={false}>
                    {searchvalue.length === 0 ? 
                        <View style={[layoutStyles.mgb_24]}>
                            {tokens ? 
                                tokens.map((item, index) => (
                                    <TouchableOpacity 
                                        key={item.ticker}
                                        style={[
                                            layoutStyles.align_center_justify_space_btwn, styles.network_item,
                                            {
                                                // backgroundColor: bridgeasset ? bridgeasset.name === item.name ? 
                                                // brandcolors.pry[500] : brandcolors.grey[50] : brandcolors.grey[50],
                                                marginBottom: index !== ((tokens.length) - 1) ? 16 : 0
                                            }
                                        ]}
                                        onPress={() => handleDispatch(item)}
                                    >
                                        <View style={[layoutStyles.row_align_center, layoutStyles.gap_8,]}>
                                            <View style={[styles.icon_box, layoutStyles.just_center]}>
                                                <IconGeneral 
                                                    boxstyle={{ width: 18, height: 18 }}
                                                    iconstyle={{ width: 14, height: 14 }}
                                                    iconsrc={item.logo}
                                                />
                                            </View>
                                            <Text>{item.name}</Text>
                                        </View>

                                        {bridgefromasset || bridgetoasset ? 
                                            (assetchoice === 'from' && (bridgefromasset ? bridgefromasset.name === item.name : null)) || 
                                            (assetchoice === 'to' && (bridgetoasset ? bridgetoasset.name === item.name : null)) ? 
                                            <IconGeneral 
                                                boxstyle={{ width: 24, height: 24 }}
                                                iconstyle={{ width: 14, height: 11 }}
                                                iconsrc={icons.active.check}
                                            />
                                        : null : null}
                                    </TouchableOpacity>
                                ))
                            : null}
                        </View> 
                    : null}
 
                    {searchvalue.length !== 0 ?    
                        <View>
                            {searched ? 
                                searched.map((item, index) => (
                                    <TouchableOpacity 
                                        key={item.ticker}
                                        style={[
                                            layoutStyles.align_center_justify_space_btwn, styles.network_item,
                                            {
                                                // backgroundColor: bridgeasset ? bridgeasset.name === item.name ? 
                                                // brandcolors.pry[500] : brandcolors.grey[50] : brandcolors.grey[50],
                                                marginBottom: index !== ((tokens.length) - 1) ? 16 : 0
                                            }
                                        ]}
                                        onPress={() => handleDispatch(item)}
                                    >
                                        <View style={[layoutStyles.row_align_center, layoutStyles.gap_8,]}>
                                            <View style={[styles.icon_box, layoutStyles.just_center]}>
                                                <IconGeneral 
                                                    boxstyle={{ width: 18, height: 18 }}
                                                    iconstyle={{ width: 14, height: 14 }}
                                                    iconsrc={item.logo}
                                                />
                                            </View>
                                            <Text>{item.name}</Text>
                                        </View>

                                        {bridgefromasset || bridgetoasset ? 
                                            (assetchoice === 'from' && (bridgefromasset ? bridgefromasset.name === item.name : null)) || 
                                            (assetchoice === 'to' && (bridgetoasset ? bridgetoasset.name === item.name : null)) ? 
                                            <IconGeneral 
                                                boxstyle={{ width: 24, height: 24 }}
                                                iconstyle={{ width: 14, height: 11 }}
                                                iconsrc={icons.active.check}
                                            />
                                        : null : null}
                                    </TouchableOpacity>
                                ))
                            : null}
                        </View>
                    : null}


                </ScrollView>

            </View>




        
        </> 
    );
}


const styles = StyleSheet.create({
    searchinput: {
        width: '100%',
        height: 48,
        borderRadius: 8,
        borderWidth: 1,
        borderColor: brandcolors.grey[500],
        padding: 8,
    },
    network_item: {
        width: '100%',
        height: 48,
        backgroundColor: brandcolors.grey[50],
        borderRadius: 8,
        paddingHorizontal: 8,
        paddingVertical: 12,
    },
    icon_box: {
        backgroundColor: brandcolors.white,
        width: 24,
        height: 24,
        borderRadius: 4,
        borderWidth: .5,
        borderColor: brandcolors.pry[500],
    },
})

 
export default BridgeAsset;