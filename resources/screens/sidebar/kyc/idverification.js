import { Text, View, 
    StyleSheet,
    Image,
    Pressable,
    ScrollView,
    TextInput
} from "react-native";
import { useState } from "react";
import { colors } from "../../utilities/colors";
import { layoutStyles } from "../../styles/layout";
import ArrowIcon from "../../components/arror-icon";
import AngleIcon from "../../components/angle-icon";
import { modalStyles } from "../../styles/modals";
import IconGeneral from "../../components/icon-general";
import { icons } from "../../utilities/icons";
import { images } from "../../utilities/images";
import { c_codes } from "../../utilities/c-codes";

const IDVerification = ({ navigation }) => {


    const [gender, setGender] = useState(null)
    const [dateofbirth, setDob] = useState(null)
    const [countrycode, setCcode] = useState({
        flag: require('./../../../media/images/naija_flag.png'),
        value: '+234'
    })
    const [phonenumber, setPhonenumber] = useState(null)
    const [country, setCountry] = useState(null)
    const [vchaneel, setVchannel] = useState(null)
    
    // modals state
    const [gendermodal, setGendermodal] = useState(null)
    const [codesmodal, setCodesmodal] = useState(null)



    const genders = [
        { value: 'male', label: 'Male' },
        { value: 'female', label: 'Female' },
        { value: 'na', label: 'God Knows' },
    ]

    const handleGendermodal = () => {
        if(!gendermodal) {
            setGendermodal(true)
        } else {
            setGendermodal(null)
        }
    }

    const handleCodesmodal = () => {
        if(!codesmodal) {
            setCodesmodal(true)
        } else {
            setCodesmodal(null)
        }
    }

    const handleGenderSelect = (value) => {
        setGender(value)
        handleGendermodal()
    }

    const handleCodeSelect = (value) => {
        setCcode(value)
        handleCodesmodal()
    }

    return ( 
        <View style={[styles.id_v_container, styles.h_pad_20,]}>
            

            <View style={[layoutStyles.gap_36, layoutStyles.row_align_center, layoutStyles.mgb_50]}>
                <ArrowIcon 
                    ripplecolor={'rgba(0, 0, 0, 0.3)'}
                    boxstyle={{ width: 30, height: 30 }}
                    imagestyle={{ width: 8, height: 13 }}
                    arrowfunc={() => navigation.goBack()}
                />

                <Text style={[layoutStyles.st_dark]}>Account Verification</Text>
            </View>


            <ScrollView style={[ { flex: 1, backgroundColor: 'red' }]}>


                <Text style={[layoutStyles.b1_r, layoutStyles.mgb_40]}>Fill in the required personal information.</Text>

                <View style={[layoutStyles.mgb_30]}>

                    <Text style={[layoutStyles.mgb_10, layoutStyles.l1_m_dark]}>Gender</Text>
                    <View style={[styles.input_select_box]}>
                        <View style={[layoutStyles.align_center_justify_space_btwn]}>
                            <Text style={[gender ? layoutStyles.b1_m : layoutStyles.b1_r]}>{gender ? gender.label : 'Select Gender'}</Text>
                            <View style={[layoutStyles.gap_6, layoutStyles.row_align_center]}>
                                <View style={[styles.input_select_line]}></View>
                                <AngleIcon 
                                    ripplecolor={'rgba(0, 0, 0, 0.3)'}
                                    boxstyle={{ width: 24, height: 24 }}
                                    imagestyle={{ width: 10, height: 5 }}
                                    arrowfunc={() => handleGendermodal()}
                                />
                            </View>
                        </View>
                    </View>
                    <View style={[layoutStyles.relative_position, { zIndex: 999 }]}>
                        {gendermodal ? 
                            <View style={[ {position: 'absolute',}]}>
                                <View style={[modalStyles.blue_modal_box]}>
                                    <View 
                                        style={[
                                            layoutStyles.row_align_center, layoutStyles.gap_6, 
                                            { padding: 10, borderBottomWidth: 1, borderBlockColor: colors.neutrals.white }
                                        ]}
                                    >
                                        <IconGeneral 
                                            boxstyle={{ width: 14, height: 14 }}
                                            iconstyle={{ width: 9, height: 7 }}
                                            iconsrc={icons.check_light}
                                        />
                                        <Text style={[layoutStyles.l3_m_light]}>Select Gender</Text>
                                    </View>

                                    <View style={[ {paddingHorizontal: 30}]}>
                                        {genders ? 
                                            genders.map((item, index) => (
                                            <Pressable style={[
                                                index === 2 ? modalStyles.blue_modal_no_bottom_border : modalStyles.blue_modal_bottom_border, {paddingVertical: 10,}
                                            ]}
                                                key={item.value}
                                                android_ripple={{color: 'rgba(248, 159, 27, .5)'}}
                                                onPress={() => handleGenderSelect(item)}
                                            >
                                                <Text 
                                                    style={[
                                                        layoutStyles.l4_sb_light, 
                                                        {
                                                            color: gender ? gender.value === item.value ? 
                                                            colors.brand.brand3 : colors.neutrals.white : colors.neutrals.white
                                                        }
                                                    ]}
                                                >
                                                    {item.label}
                                                </Text>
                                            </Pressable>
                                            ))
                                        : null}
                                    </View>
                                </View>
                            </View>
                        : null}
                    </View>

                </View>

                <View style={[layoutStyles.mgb_30]}>
                    <Text style={[layoutStyles.mgb_10, layoutStyles.l1_m_dark]}>Date of Birth</Text>
                    <View style={[styles.input_select_box]}>
                        <View style={[layoutStyles.align_center_justify_space_btwn]}>
                            <Text style={[dateofbirth ? layoutStyles.b1_m : layoutStyles.b1_r]}>
                                {dateofbirth ? dateofbirth : 'Select Date of Birth'}
                            </Text>
                            <View style={[layoutStyles.gap_6, layoutStyles.row_align_center]}>
                                <View style={[styles.input_select_line]}></View>
                                <AngleIcon 
                                    ripplecolor={'rgba(0, 0, 0, 0.3)'}
                                    boxstyle={{ width: 24, height: 24 }}
                                    imagestyle={{ width: 10, height: 5 }}
                                    // arrowfunc={() => handleGendermodal()}
                                />
                            </View>
                        </View>
                    </View>
                </View>

                <View style={[layoutStyles.mgb_30, { backgroundColor: 'yellow' }]}>

                    <Text style={[layoutStyles.mgb_10, layoutStyles.l1_m_dark]}>Phone Number</Text>
                    <View style={[styles.input_select_box]}>
                        <View style={[layoutStyles.row_align_center, layoutStyles.gap_5]}>
                            <View style={[layoutStyles.gap_5, layoutStyles.row_align_center]}>
                                <AngleIcon 
                                    ripplecolor={'rgba(0, 0, 0, 0.3)'}
                                    boxstyle={{ width: 24, height: 24 }}
                                    imagestyle={{ width: 10, height: 5 }}
                                    arrowfunc={() => handleCodesmodal()}
                                />
                                <View style={[layoutStyles.gap_10, layoutStyles.row_align_center]}>
                                    <Image 
                                        source={countrycode.flag}
                                        style={{ width: 20, height: 20 }}
                                    />
                                    <Text style={[layoutStyles.b1_m]}>{countrycode.value}</Text>
                                </View>
                                <View style={[styles.input_select_line]}></View>
                            </View>

                            <TextInput 
                                style={styles.input_zero_opacity}
                                placeholder="Enter your phone number"
                                placeholderTextColor={colors.neutrals.neu3}
                                onChangeText={(value) => setPhonenumber(value)}
                                value={phonenumber ? phonenumber : null}
                                keyboardType="numeric"
                            />
                        </View>
                    </View>

                    <View style={[layoutStyles.relative_position, { zIndex: 999 }]}>
                        {codesmodal ? 
                            <View style={[ {position: 'absolute', flex: 1}]}>
                                <View style={[modalStyles.blue_modal_box]}>
                                    <View 
                                        style={[
                                            layoutStyles.row_align_center, layoutStyles.gap_6, 
                                            { padding: 10, borderBottomWidth: 1, borderBlockColor: colors.neutrals.white }
                                        ]}
                                    >
                                        <IconGeneral 
                                            boxstyle={{ width: 14, height: 14 }}
                                            iconstyle={{ width: 9, height: 7 }}
                                            iconsrc={icons.check_light}
                                        />
                                        <Text style={[layoutStyles.l3_m_light]}>Select Country Code</Text>
                                    </View>

                                    <View style={[ {paddingHorizontal: 30, backgroundColor: 'pink'}]}>
                                        {c_codes ? 
                                            c_codes.map((item, index) => (
                                            <Pressable style={[
                                                index === (c_codes.length) ? modalStyles.blue_modal_no_bottom_border : modalStyles.blue_modal_bottom_border, 
                                                {paddingVertical: 10,}
                                            ]}
                                                key={item.value}
                                                android_ripple={{color: 'rgba(248, 159, 27, .5)'}}
                                                onPress={() => handleCodeSelect(item)}
                                            >
                                                <Text 
                                                    style={[
                                                        layoutStyles.l4_sb_light, 
                                                        {
                                                            color: countrycode.value === item.value ? colors.brand.brand3 : colors.neutrals.white 
                                                        }
                                                    ]}
                                                >
                                                    {item.value}
                                                </Text>
                                            </Pressable>
                                            ))
                                        : null}
                                    </View>
                                </View>
                            </View>
                        : null}
                    </View>

                    <View style={{ width: 100, height: 1000, backgroundColor: 'wheat' }}></View>

                </View>


            </ScrollView>







        </View>
    );
}


const styles = StyleSheet.create({
    id_v_container: {
        paddingTop: 45,
        backgroundColor: colors.neutrals.neu1,
        flex: 1,
    },
    h_pad_20: {
        paddingHorizontal: 20,
    },
    input_select_box: {
        height: 40,
        borderRadius: 6,
        backgroundColor: colors.neutrals.neu2,
        borderColor: colors.neutrals.neu3,
        borderWidth: .5,
        justifyContent: 'center',
        paddingHorizontal: 10,
    },
    input_select_line: {
        height: 26,
        width: 1,
        backgroundColor: colors.neutrals.neu3,
    },
})


export default IDVerification;