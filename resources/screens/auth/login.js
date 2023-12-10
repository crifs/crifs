import { View, Text, StyleSheet, Image, Pressable, TouchableOpacity, KeyboardAvoidingView, ScrollView } from "react-native";
import { useState } from "react";

// styles
import { layoutStyles } from "../../styles/layout";

// media
import { icons } from "../../utilities/icons";

// components
import ButtonOne from "../../components/custom-buttons/one";
import LogoRight from "../../components/logo-right";
import { brandcolors, colors } from "../../utilities/colors";
import InputCont from "../../components/input-container";
import { textStyles } from "../../styles/text-styles";


const LoginAuth = ({ navigation }) => {

    const [showpassword, setShowPassword] = useState(null)
    const [password, setPassword] = useState(null)
    const [errorstate, setErrorstate] = useState(null)

    const handleShowPassword = () => {
        if(!showpassword) {
            setShowPassword(true)
        } else {
            setShowPassword(null)
        }
    }

    const setAllToNull = () => {
        setShowPassword(null)
        setPassword(null)
    }

    const handleSubmit = () => {
        if(!password) {
            setErrorstate('Enter your password to proceed')
        } else {
            setErrorstate(null)
            // setAllToNull()
            // navigation.navigate("Wallet Auth")

        }
    }

    return (
        <>
        
            <View style={[layoutStyles.generalFrame, layoutStyles.generalHPad, layoutStyles.flexCenter, ]}>

                <View>


                    <Text style={[textStyles.bold20, layoutStyles.mgb_16, {color: brandcolors.sec[500]}]}>Welcome Back</Text>
                    <Text style={[textStyles.reg14, layoutStyles.mgb_24, { color: brandcolors.grey[800] }]}>
                        Login to securely access your account to explore investment options, 
                        track portfolio performance, and stay updated with market trends.
                    </Text>

                    <InputCont 
                        labelText={'Password'}
                        placeholder={'Enter your password'}
                        iconRight={true}
                        iconSrc={showpassword ? icons.eye_slash : icons.eye}
                        iconFunc={handleShowPassword}
                        stEntry={showpassword ? false : true}
                        changeFunc={(value) => setPassword(value)}
                        inputValue={password}
                        boxStyles={layoutStyles.mgb_8}
                    />

                    {errorstate ? 
                        <Text style={[layoutStyles.e1_m, { marginTop: 5 }]}>{errorstate}</Text>
                    : null}

                    <View style={[layoutStyles.alignEnd, layoutStyles.mgb_48]}>
                        <Text style={[textStyles.reg14, { color: brandcolors.grey[800] }]}>Forgot Password?</Text>
                    </View>

                    <View style={[layoutStyles.mgb_64]}>
                        <ButtonOne 
                            btnText={'Login'}
                            status={false}
                            buttonPress={handleSubmit}
                            buttonStyles={[layoutStyles.mgb_10]}
                        />
                        <Pressable style={[layoutStyles.flex_row, { alignItems: 'center' }]} onPress={() => navigation.replace("Create Account")}>
                            <Text style={layoutStyles.l1_m}>Don't have an account yet? </Text>
                            <Text style={[layoutStyles.b1_sb, { color: colors.brand.brand1 }]}>Create</Text>
                        </Pressable>
                    </View>

                    <TouchableOpacity style={[layoutStyles.alignCenter]}>
                        <Image 
                            source={icons.open_scan}
                            style={styles.open_scan_icn}
                            resizeMode="contain"
                        />
                    </TouchableOpacity>


                </View>

            </View>

        </>
    );
}

const styles = StyleSheet.create({
    content: {
        // backgroundColor: 'red',
        flex: 1,
        marginTop: '2%',
        marginBottom: '5%',
        position: 'relative',
        // justifyContent: 'flex-start',
    },
    open_scan_icn: {
        width: 33,
        height: 33,
    },
})

export default LoginAuth;