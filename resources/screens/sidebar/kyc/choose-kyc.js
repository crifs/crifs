import { ScrollView, Text, View, StyleSheet, Pressable, TouchableOpacity } from "react-native";
import { layoutStyles } from "../../../styles/layout";
import IconGeneralF from "../../../components/icon-general-f";
import IconGeneral from "../../../components/icon-general";
import { icons } from "../../../utilities/icons";
import { brandcolors } from "../../../utilities/colors";
import { textStyles } from "../../../styles/text-styles";





const ChooseKYC = ({ navigation }) => {
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
                    <Text style={[textStyles.bold18, { color: brandcolors.pry[500] }]}>Link KYC</Text>
                    <View></View>
                </View>

                <ScrollView style={[layoutStyles.relative_position, { flex: 1 }]} showsVerticalScrollIndicator={false}>
                    
                    <View>
                        <TouchableOpacity style={[layoutStyles.flexCenter, layoutStyles.mgb_24, styles.item_box]}
                            onPress={() => navigation.navigate('Choose ID')}
                        >
                            <View style={[layoutStyles.flex_row, layoutStyles.gap_8]}>
                                <IconGeneral 
                                    boxstyle={{ width: 24, height: 24 }}
                                    iconstyle={{ width: 18, height: 20 }}
                                    iconsrc={icons.dark.person}
                                />
                                <Text style={[textStyles.reg14, {color: brandcolors.grey[800]}]}>Verify your Identity</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity style={[layoutStyles.flexCenter, styles.item_box]}>
                            <View style={[layoutStyles.flex_row, layoutStyles.gap_8]}>
                                <IconGeneral 
                                    boxstyle={{ width: 24, height: 24 }}
                                    iconstyle={{ width: 16, height: 20 }}
                                    iconsrc={icons.dark.track}
                                />
                                <Text style={[textStyles.reg14, {color: brandcolors.grey[800]}]}>Verify your Address</Text>
                            </View>
                        </TouchableOpacity>
                    </View>

                </ScrollView>


            </View>
        
        
        
        </>
    );
}


const styles = StyleSheet.create({
    item_box: {
        backgroundColor: brandcolors.grey[50],
        borderRadius: 8,
        height: 56,
        paddingHorizontal: 16,
    },
})

 
export default ChooseKYC;