import { useState } from "react";
import { Text, View, 
    StyleSheet,
    Pressable,
    TextInput,
    TouchableOpacity,
    Modal
} from "react-native";
import { layoutStyles } from "../../styles/layout";
import { textStyles } from "../../styles/text-styles";
import { brandcolors } from "../../utilities/colors";
import { icons } from "../../utilities/icons";
import IconGeneralF from "../../components/icon-general-f";
import IconGeneral from "../../components/icon-general";
import { ScrollView } from "react-native-gesture-handler";
import ButtonOne from "../../components/custom-buttons/one";
import BackDrop from "../../components/backdrop";
import { modalStyles } from "../../styles/modals";





const AddInvest = ({ navigation }) => {

    const [investmodal, setInvestmodal] = useState(false)



    const handleNext = () => {
        setInvestmodal(true)
    }


    const setAlltoNull = () => {
        setInvestmodal(false)
    }


    return ( 
        <>
        
        
        
            <View style={[layoutStyles.generalFrame, layoutStyles.generalTopPad, layoutStyles.generalHPad]}>
                

                <View style={[layoutStyles.align_center_justify_space_btwn, layoutStyles.mgb_24]}>
                    <IconGeneralF 
                        boxstyle={{ width: 24, height: 24 }}
                        ripplecolor={brandcolors.ripple}
                        iconsrc={icons.dark.angle_left}
                        iconstyle={{ width: 7, height: 16 }}
                        iconfunc={() => navigation.goBack()}
                    />

                    <Text style={[textStyles.bold18, {color: brandcolors.pry[500]}]}>Add Invest</Text>
                    <View></View>
                </View>

                <ScrollView style={{ flex: 1,}} contentContainerStyle={{ flex: 1 }}>
                    <Text style={[textStyles.reg14, layoutStyles.mgb_27, { color: brandcolors.grey[500] }]}>
                        Select the asset you want to inves6, type amount below and choose invest period
                    </Text>

                    <View style={[layoutStyles.mgb_26]}>
                        <Text style={[layoutStyles.mgb_8, textStyles.reg14, {color: brandcolors.grey[800]}]}>Select Asset</Text>
                        <View style={[styles.input_box, layoutStyles.justify_center]}>
                            <Pressable style={[layoutStyles.align_center_justify_space_btwn, {width: '100%'}]}
                                android_ripple={{ color: brandcolors.ripple }}
                                hitSlop={{ top: 10, bottom: 10 }}
                            >
                                <Text style={[textStyles.reg16, {color: brandcolors.grey[800]}]}>Tap to select asset</Text>
                                <IconGeneral 
                                   boxstyle={{ width: 24, height: 24 }}
                                   iconstyle={{ width: 7, height: 16, transform: [{rotate: '270deg'}] }} 
                                   iconsrc={icons.dark.angle_left}
                                />
                            </Pressable>
                        </View>
                    </View>

                    <View style={[layoutStyles.mgb_40]}>
                        <Text style={[layoutStyles.mgb_8, textStyles.reg14, {color: brandcolors.grey[800]}]}>Amount</Text>
                        <View style={[layoutStyles.mgb_8, styles.input_box, layoutStyles.align_center_justify_space_btwn]}>
                            <TextInput 
                                placeholder="Enter Amount"
                                placeholderTextColor={brandcolors.grey[500]}
                                keyboardType="numeric"
                                style={[textStyles.reg16, { color: brandcolors.grey[800], width: '80%', }]}
                            />
                            <TouchableOpacity>
                                <Text style={[textStyles.reg14, {color: brandcolors.sec[500]}]}>Max</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={[layoutStyles.row_flex_end]}>
                            <Text style={[textStyles.reg12, { color: brandcolors.grey[500] }]}>Available: 0</Text>
                        </View>
                    </View>

                    <View>
                        <View style={[layoutStyles.mgb_8]}>
                            <Text style={[layoutStyles.mgb_4, textStyles.reg14, {color: brandcolors.grey[800]}]}>Select Asset</Text>
                            <Text style={[textStyles.reg12, {color: brandcolors.grey[500]}]}>
                                For how long do you want to invest this asset?
                            </Text>
                        </View>

                        <View style={[styles.note_box]}>
                            <Text style={[textStyles.reg12, {color: brandcolors.grey[800]}]}>Note</Text>
                            <Text style={[textStyles.reg12, {color: brandcolors.grey[500]}]}>
                                When the invest period you chose is over we will automatically end your invest, then you can claim when you want.
                            </Text>
                        </View>
                    </View>

                    <View style={[layoutStyles.flex_end,]}>
                        <ButtonOne 
                            btnText={'Next'}
                            buttonStyles={layoutStyles.mgb_48}
                            status={false}
                            buttonPress={handleNext}
                        />
                    </View>
                </ScrollView>


            </View>


            <Modal
                visible={investmodal}
                transparent={true}
                onRequestClose={setAlltoNull}
                animationType='slide'
                hardwareAccelerated={true}
            >
                <BackDrop dropPress={setAlltoNull} />
                <View style={modalStyles.modal_container}>
                    <View style={[modalStyles.uninvest_modal_box]}>
                        <View style={[layoutStyles.align_center_justify_space_btwn, layoutStyles.mgb_15]}>
                            <View></View>
                            <Text style={[textStyles.bold16, {color: brandcolors.grey[800]}]}>Invest</Text>
                            <IconGeneralF 
                                boxstyle={{ width: 24, height: 24 }}
                                iconstyle={{ width: 8, height: 8 }}
                                ripplecolor={{ color: brandcolors.ripple }}
                                iconsrc={icons.dark.cancel}
                                iconfunc={() => setInvestmodal(false)}
                            />
                        </View>

                        <View style={[layoutStyles.mgb_18]}>
                            <View style={[modalStyles.uninvest_item, layoutStyles.align_center_justify_space_btwn, layoutStyles.mgb_8]}>
                                <Text style={[textStyles.reg12, {color: brandcolors.grey[500]}]}>Commission</Text>
                                <Text style={[textStyles.reg14, {color: brandcolors.grey[800]}]}>2.5%</Text>
                            </View>
                            <View style={[modalStyles.uninvest_item, layoutStyles.align_center_justify_space_btwn, layoutStyles.mgb_8]}>
                                <Text style={[textStyles.reg12, {color: brandcolors.grey[500]}]}>Asset invested</Text>
                                <Text style={[textStyles.reg14, {color: brandcolors.grey[800]}]}>Bitcoin BTC</Text>
                            </View>
                            <View style={[modalStyles.uninvest_item, layoutStyles.align_center_justify_space_btwn, layoutStyles.mgb_8]}>
                                <Text style={[textStyles.reg12, {color: brandcolors.grey[500]}]}>Amount invested</Text>
                                <Text style={[textStyles.reg14, {color: brandcolors.grey[800]}]}>0.21</Text>
                            </View>
                            <View style={[modalStyles.uninvest_item, layoutStyles.align_center_justify_space_btwn, layoutStyles.mgb_8]}>
                                <Text style={[textStyles.reg12, {color: brandcolors.grey[500]}]}>Duration</Text>
                                <Text style={[textStyles.reg14, {color: brandcolors.grey[800]}]}>3 months</Text>
                            </View>
                            <View style={[modalStyles.uninvest_item, layoutStyles.align_center_justify_space_btwn, layoutStyles.mgb_8]}>
                                <Text style={[textStyles.reg12, {color: brandcolors.grey[500]}]}>Gas fee</Text>
                                <Text style={[textStyles.reg14, {color: brandcolors.grey[800]}]}>0.0002</Text>
                            </View>
                            <View style={[modalStyles.uninvest_item_nb, layoutStyles.align_center_justify_space_btwn]}>
                                <View style={[layoutStyles.justify_center, layoutStyles.gap_8]}>
                                    <Text style={[textStyles.reg12, {color: brandcolors.grey[500]}]}>Descrption</Text>
                                    <IconGeneral 
                                        boxstyle={{ width: 16, height: 16 }}
                                        iconstyle={{ width: 13, height: 13 }}
                                        iconsrc={icons.dark.info}
                                    />
                                </View>
                                <Text style={[textStyles.reg14, {color: brandcolors.grey[800]}]}></Text>
                            </View>
                        </View>

                        <ButtonOne 
                            btnText={'Invest'}
                            status={false}
                        />
                    </View>
                </View>
            </Modal>
        
        
        
        </>
    );
}



const styles = StyleSheet.create({
    input_box: {
        width: '100%',
        height: 48,
        borderRadius: 8,
        borderWidth: 1,
        borderColor: brandcolors.grey[500],
        padding: 8,
    },
    note_box: {
        width: '100%',
        backgroundColor: brandcolors.grey[50],
        padding: 16,
        borderRadius: 16,
    },

})


 
export default AddInvest;