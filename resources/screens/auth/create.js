import { View, Text, ScrollView, StyleSheet, Pressable, TouchableOpacity } from "react-native";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setProgressValue } from "../../redux/action";

// components
import LogoRight from "../../components/logo-right";
import CAProgressBar from "../../components/create-account-prgress-bar";
import ArrorBackIcon from "../../components/arrow-back-icon";
import StepTwo from "../../components/create-account/step-two";
import StepOne from "../../components/create-account/step-one";

// styles
import { layoutStyles } from "../../styles/layout";

// utilities
import { brandcolors, colors } from "../../utilities/colors";
import { icons } from "../../utilities/icons";
import StepThree from "../../components/create-account/step-three";
import IconGeneralF from "../../components/icon-general-f";
import BackDrop from "../../components/backdrop";
import CheckGreenRound from "../../components/check_green_round";

const CreateAccount = ({ navigation }) => {

    const { progressvalue, greencheck } = useSelector(state=>state.appReducer);
    const dispatch = useDispatch()

    handleArrowback = () => {
        if(progressvalue === 2) {
            dispatch(setProgressValue(1))
        }
        if(progressvalue === 3) {
            dispatch(setProgressValue(2))
        }
    }

    const doneNavFunc = () => {
        navigation.replace("TabsScreen")
    }

    return (
        <>
        
            {greencheck ? <BackDrop /> : null}

            {greencheck ? <>
                <CheckGreenRound 
                    doneFunc={doneNavFunc}
                />
            </> : null}

            <View style={[layoutStyles.generalFrame, layoutStyles.generalHPad, { paddingTop: 40 }]}>


                {progressvalue === 2 || progressvalue === 3 ? 
                    <IconGeneralF 
                        boxstyle={{ width: 24, height: 24 }}
                        iconstyle={{ width: 7, height: 16 }}
                        iconsrc={icons.dark.angle_left}
                        ripplecolor={brandcolors.ripple}
                        iconfunc={handleArrowback} 
                    /> 
                : null}
                <ScrollView style={styles.content} contentContainerStyle={{ flexGrow: 1 }} showsVerticalScrollIndicator={false}>
                    <View style={{ marginBottom: 40, flex: 1, marginTop: 50 }}>  
                        <CAProgressBar 
                            progressValue={progressvalue}
                        />

                        {progressvalue === 1 ?
                            <StepOne /> 
                        : null}

                        {progressvalue === 2 ? 
                            <StepTwo />
                        : null}

                        {progressvalue === 3 ?
                            <StepThree />
                        : null}
                    </View>

                    
                </ScrollView>

            </View>

        
        
        </>
    );
}
 
const styles = StyleSheet.create({
    content: {
        flex: 1,
        position: 'relative',
    },
})


export default CreateAccount;