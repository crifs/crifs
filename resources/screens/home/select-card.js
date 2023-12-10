import { Pressable, ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { layoutStyles } from "../../styles/layout";
import { textStyles } from "../../styles/text-styles";
import { brandcolors } from "../../utilities/colors";
import IconGeneralF from "../../components/icon-general-f";
import IconGeneral from "../../components/icon-general";
import { icons } from "../../utilities/icons";
import ButtonOne from "../../components/custom-buttons/one";

const SelectCard = ({ navigation }) => {



    return ( 
        <>
        
        
            <View style={[layoutStyles.generalFrame, layoutStyles.generalTopPad, layoutStyles.generalHPad]}>


                <View style={[layoutStyles.align_center_justify_space_btwn, layoutStyles.mgb_24]}>
                    <IconGeneralF 
                        boxstyle={{ width: 24, height: 24 }}
                        iconstyle={{ width: 7, height: 16 }}
                        ripplecolor={brandcolors.ripple}
                        iconsrc={icons.dark.angle_left}
                        iconfunc={() => navigation.goBack()}
                    />
                    <Text style={[textStyles.bold18, {color: brandcolors.pry[500]}]}>Select a card</Text>
                    <View></View>
                </View>

                <ScrollView style={{ flex: 1 }} showsVerticalScrollIndicator={false}>

                    <>
                        <Text style={[layoutStyles.text_align_center, textStyles.reg14, layoutStyles.mgb_32, {color: brandcolors.grey[800]}]}>
                            You have no cards yet, add a card to get started.
                        </Text>

                        <TouchableOpacity style={[layoutStyles.just_center, styles.add_card_box]}
                            onPress={() => navigation.navigate('Link Card')}
                        >
                            <View style={[layoutStyles.justify_center, layoutStyles.gap_5]}>
                                <IconGeneral 
                                    boxstyle={{ width: 16, height: 16 }}
                                    iconstyle={{ width: 11, height: 11 }}
                                    iconsrc={icons.plus_pry_400}
                                />
                                <Text style={[textStyles.reg12, {color: brandcolors.pry[400]}]}>Add a Card</Text>
                            </View>
                        </TouchableOpacity>
                    </>

                    <View style={[layoutStyles.mgb_40]}></View>

                    <>
                        <ScrollView horizontal={true} style={[layoutStyles.mgb_56, { flex: 1, }]} showsHorizontalScrollIndicator={false}>
                            <View style={[styles.card_box]}>
                                <View>
                                    <View style={[layoutStyles.justify_center, layoutStyles.mgb_8, layoutStyles.gap_8]}>
                                        <Text style={[textStyles.bold14, {color: brandcolors.grey[100]}]}>Master Card</Text>
                                        <Text style={[textStyles.bold14, {color: brandcolors.grey[100]}]}>**** 1234</Text>
                                    </View>
                                    <Text style={[textStyles.bold12, layoutStyles.text_align_right, {color: brandcolors.grey[100]}]}>Exp: 03/24</Text>
                                </View>
                            </View>

                            <View style={[styles.card_box]}></View>
                        </ScrollView>
                        <ButtonOne 
                            btnText={'Add a new card'}
                            status={false}
                            buttonPress={() => navigation.navigate('Link Card')}
                        />
                    </>

                </ScrollView>

            </View>
        
        
        
        </>
    );
}


const styles = StyleSheet.create({
    add_card_box: {
        width: '100%',
        height: 184,
        borderStyle: 'dashed',
        borderWidth: 1,
        borderColor: brandcolors.pry[400],
        borderRadius: 8,
    },
    card_box: {
        width: 300,
        height: 184,
        borderRadius: 8,
        backgroundColor: brandcolors.pry[400],
        padding: 24,
        justifyContent: 'flex-end',
        alignItems: 'flex-start',
        marginRight: 24,
    },
})


export default SelectCard;