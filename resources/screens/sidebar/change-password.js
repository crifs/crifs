import { ScrollView, Text, View } from "react-native";
import { layoutStyles } from "../../styles/layout";
import IconGeneralF from "../../components/icon-general-f";
import IconGeneral from "../../components/icon-general";
import { icons } from "../../utilities/icons";
import { textStyles } from "../../styles/text-styles";
import { brandcolors } from "../../utilities/colors";
import { useState } from "react";
import InputCont from "../../components/input-container";
import ButtonOne from "../../components/custom-buttons/one";








const ChangePassword = ({ navigation }) => {

    const [password, setPassword] = useState(null)
    const [showpassword, setShowPassword] = useState(null)
    const [showcpassword, setShowcPassword] = useState(null)
    const [confirmpass, setConfirmpass] = useState(null)
    const [errorstate, setErrorstate] = useState(null)


    const handleShowPassword = () => {
        if(!showpassword) {
            setShowPassword(true)
        } else {
            setShowPassword(null)
        }
    }
    const handleCShowPassword = () => {
        if(!showcpassword) {
            setShowcPassword(true)
        } else {
            setShowcPassword(null)
        }
    }

    const handleReset = () => {

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
                    <Text style={[textStyles.bold18, { color: brandcolors.pry[500] }]}>Change Password</Text>
                    <View></View>
                </View>

                <ScrollView style={[layoutStyles.relative_position, { flex: 1 }]} showsVerticalScrollIndicator={false}>

                    <View style={[layoutStyles.mgb_40]}>
                        <InputCont 
                            labelText={'Password'}
                            placeholder={'Enter your password'}
                            iconRight={true}
                            iconSrc={showpassword ? icons.eye_slash : icons.eye}
                            iconFunc={handleShowPassword}
                            stEntry={showpassword ? false : true}
                            changeFunc={(value) => setPassword(value)}
                            inputValue={password}
                            boxStyles={layoutStyles.mgb_16}
                        />
                        <InputCont 
                            labelText={"Confirm password"}
                            placeholder={"Retype password"}
                            iconRight={true}
                            iconSrc={showcpassword ? icons.eye_slash : icons.eye}
                            iconFunc={handleCShowPassword}
                            stEntry={showcpassword ? false : true}
                            changeFunc={(value) => setConfirmpass(value)}
                            inputValue={confirmpass}
                            boxStyles={layoutStyles.mgb_8}
                        />
                        {errorstate ? 
                            <Text style={[layoutStyles.e1_m, { marginTop: 5 }]}>{errorstate}</Text>
                        : null}
                    </View>

                    <ButtonOne 
                        btnText={'Reset Password'}
                        status={false}
                    />

                </ScrollView>

            </View>


        </>
    );
}
 
export default ChangePassword;