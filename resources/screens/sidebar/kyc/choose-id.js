import { ScrollView, Text, View, StyleSheet, TouchableOpacity } from "react-native";
import { layoutStyles } from "../../../styles/layout";
import IconGeneralF from "../../../components/icon-general-f";
import IconGeneral from "../../../components/icon-general";
import { icons } from "../../../utilities/icons";
import { brandcolors } from "../../../utilities/colors";
import { textStyles } from "../../../styles/text-styles";
import { useDispatch, useSelector } from "react-redux";
import { setIDChoice } from "../../../redux/action";








const ChooseID = ({ navigation }) => {

    const { idchoice } = useSelector(state => state.appReducer)
    const dispatch = useDispatch()


    const ids = [
        {
            value: 'ip',
            label: 'International Passport'
        },
        {
            value: 'ninslip',
            label: 'NIN Slip'
        },
        {
            value: 'dl',
            label: 'Drivers Licence'
        },
        {
            value: 'nic',
            label: 'National ID Card'
        },
    ]

    const handleChooseIdentity = (value) => {
        dispatch(setIDChoice(value))
    }

    return ( 
        <>
        

            <View style={[layoutStyles.generalFrame, layoutStyles.generalHPad, layoutStyles.generalTopPad]}>


                <View style={[layoutStyles.align_center_justify_space_btwn, layoutStyles.mgb_46]}>
                    <IconGeneralF 
                        boxstyle={{ width: 24, height: 24 }}
                        iconstyle={{ width: 6, height: 12 }}
                        iconsrc={icons.dark.angle_left}
                        ripplecolor={brandcolors.ripple}
                        iconfunc={() => navigation.goBack()}
                    />
                    <Text style={[textStyles.bold18, { color: brandcolors.pry[500] }]}>Choose Identity</Text>
                    <View></View>
                </View>

                <ScrollView style={[layoutStyles.relative_position, { flex: 1 }]} showsVerticalScrollIndicator={false}>

                    <View>
                        {ids.map((item, index) => (
                            <TouchableOpacity 
                                key={item.value}
                                style={[
                                    layoutStyles.align_center_justify_space_btwn, styles.item_box, 
                                    {
                                        backgroundColor: idchoice ? idchoice.value === item.value ? brandcolors.grey[50] : brandcolors.bg : brandcolors.bg, 
                                        marginBottom: ((ids.length) - 1) === index ? 0 : 16,
                                    }
                                ]}
                                onPress={() => handleChooseIdentity(item)}
                            >
                                <Text style={[textStyles.reg16, {color: brandcolors.grey[800]}]}>{item.label}</Text>
                                {idchoice ? idchoice.value === item.value ? <IconGeneral 
                                    boxstyle={{ width: 24, height: 24 }}
                                    iconstyle={{ width: 14, height: 11 }}
                                    iconsrc={icons.check_green}
                                /> : null : null}
                            </TouchableOpacity>
                        ))}
                    </View>

                </ScrollView>


            </View>
        
        
        
        
        </>
        
    );
}


const styles = StyleSheet.create({
    item_box: {
        height: 40,
        borderRadius: 8,
        paddingHorizontal: 8,
    },
})


export default ChooseID;