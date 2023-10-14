import { View, Text, StyleSheet, Image, Pressable, TouchableOpacity, KeyboardAvoidingView, ScrollView } from "react-native";
import { useState } from "react";

// styles
import { layoutStyles } from "../../styles/layout";

// media
import { icons } from "../../utilities/icons";

// components
import ButtonOne from "../../components/button-one";
import LogoRight from "../../components/logo-right";
import { colors } from "../../utilities/colors";
import InputCont from "../../components/input-container";


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
        <View style={layoutStyles.flex_one_default}>
            <View style={styles.content}>
                {/* <ScrollView style={{ flex: 1, width: '100%', height: '100%', backgroundColor: 'red' }}> */}
                    <LogoRight 
                        logoStyles={{ marginBottom: 10 }}
                    />

                    <View style={styles.welcome_box}>
                        <Text style={[layoutStyles.brand_header, {marginBottom: 20}]}>Welcome Back</Text>
                        <Text style={[layoutStyles.b1_r, { marginBottom: 30 }]}>
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
                        />
                        {errorstate ? 
                            <Text style={[layoutStyles.e1_m, { marginTop: 5 }]}>{errorstate}</Text>
                        : null}
                        <Text style={[layoutStyles.l1_m, { marginTop: 20 }]}>Forgot Password?</Text>
                    </View>

                    <View style={layoutStyles.flex_end}>
                        <View style={[layoutStyles.flex_row, {marginBottom: 20, justifyContent: 'space-between',}]}>
                            <ButtonOne 
                                btnText={'login'}
                                buttonStyles={{ width: '82%' }}
                                buttonPress={handleSubmit}
                            />
                            <TouchableOpacity style={{ width: '13.5%' }}>
                                <Image 
                                    source={icons.open_scan}
                                    style={styles.open_scan_icn}
                                />
                            </TouchableOpacity>
                        </View>
                        <Pressable style={[layoutStyles.flex_row, { alignItems: 'center' }]} onPress={() => navigation.navigate("Create Account")}>
                            <Text style={layoutStyles.l1_m}>Don't have an account yet? </Text>
                            <Text style={[layoutStyles.b1_sb, { color: colors.brand.brand1 }]}>Create</Text>
                        </Pressable>
                    </View>

                {/* </ScrollView> */}
            </View>
        </View>
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
        width: '100%',
        height: 50,
        resizeMode: 'contain'
    },
})

export default LoginAuth;