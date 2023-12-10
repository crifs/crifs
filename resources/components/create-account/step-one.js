import { Text, View, StyleSheet, TouchableOpacity, } from 'react-native'
import { useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { setProgressValue } from '../../redux/action';

// components
import InputCont from '../input-container';
import ButtonOne from '../custom-buttons/one';

// styles
import { layoutStyles } from '../../styles/layout';

// utilities
import { brandcolors, colors } from "../../utilities/colors";
import { icons } from "../../utilities/icons";
import { textStyles } from '../../styles/text-styles';


const StepOne = () => {

    const { progressvalue } = useSelector(state=>state.appReducer);
    const dispatch = useDispatch()
    const [password, setPassword] = useState(null)
    const [showpassword, setShowPassword] = useState(null)
    const [showcpassword, setShowcPassword] = useState(null)
    const [confirmpass, setConfirmpass] = useState(null)
    const [biometricstatus, setBiometrics] = useState(null)
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

    const handleBiometricToggle = () => {
        if(!biometricstatus) {
            setBiometrics(true) 
        } else {
            setBiometrics(null)
        }
    }

    const handleProgress = () => {
        if(!password || !confirmpass) {
            setErrorstate('Create a password to proceed')
        } else {
            if(password !== confirmpass) {
                setErrorstate("Passwords don't match")
            } else {
                setErrorstate(null)
                dispatch(setProgressValue(2))
            }
        }
    }



    return ( 
        <View style={styles.content}>

            <View style={[layoutStyles.mgb_44]}>
                <Text style={[textStyles.bold20, layoutStyles.mgb_8, {color: brandcolors.sec[500]}]}>Create a password</Text>
                <Text style={[textStyles.reg14, { color: brandcolors.grey[800] }]}>Start your journey by creating a password</Text>
            </View>

            <View style={[layoutStyles.mgb_40]}>
                <InputCont 
                    labelText={"Password"}
                    placeholder={"Set a password"}
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


            {/* <View style={[layoutStyles.align_center_justify_space_btwn, { marginTop: 20 }]}>
                <Text style={[layoutStyles.l1_m, {color: colors.neutrals.neu4}]}>Unlock with Biometrics</Text>
                <TouchableOpacity 
                    style={[styles.toggle_item, { backgroundColor: biometricstatus ? colors.btn.btnbg : colors.neutrals.neu3, }]} 
                    onPress={handleBiometricToggle}
                >
                    <View style={[styles.toggle_item_inner, { backgroundColor: biometricstatus ? colors.btn.btncolor : colors.neutrals.white, alignSelf: biometricstatus ? 'flex-end' : 'flex-start' }]}></View>
                </TouchableOpacity>
            </View> */}

            <View style={[]}>
                <ButtonOne 
                    btnText={'Next'}
                    status={false}
                    buttonPress={handleProgress}
                />
            </View>

        </View>
    );
}


const styles = StyleSheet.create({
    content: {
        flex: 1,
    },
    toggle_item: {
        width: '7%',
        height: 16,
        borderRadius: 10,
        backgroundColor: colors.neutrals.neu3,
        display: 'flex',
        justifyContent: 'center',
        paddingHorizontal: 1,
    },
    toggle_item_inner: {
        width: '60%',
        height: 14,
        borderRadius: 50,
        backgroundColor: colors.neutrals.white,
        alignSelf: 'flex-start',
    },
    test_end: {
        justifyContent: 'flex-end',
        flex: 1,
    },
})
 
export default StepOne;