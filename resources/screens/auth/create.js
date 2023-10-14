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
import { colors } from "../../utilities/colors";
import { icons } from "../../utilities/icons";
import StepThree from "../../components/create-account/step-three";

const CreateAccount = ({ navigation }) => {

    const { progressvalue } = useSelector(state=>state.appReducer);
    const dispatch = useDispatch()

    handleArrowback = () => {
        if(progressvalue === 2) {
            dispatch(setProgressValue(1))
        }
        if(progressvalue === 3) {
            dispatch(setProgressValue(2))
        }
    }

    return (
        <View style={layoutStyles.flex_one_default}>
            <ScrollView style={styles.content} contentContainerStyle={{ flexGrow: 1 }}>
                <View style={{ marginBottom: 40, flex: 1, }}>                    
                    {progressvalue === 2 || progressvalue === 3 ? <ArrorBackIcon arrowFunc={handleArrowback} /> : null}
                    <LogoRight 
                        logoStyles={{ marginBottom: 10 }}
                    />

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
                        <StepThree
                            navigationFunc={() => navigation.navigate("Home")}
                        />
                    : null}
                </View>

                
            </ScrollView>
        </View>
    );
}
 
const styles = StyleSheet.create({
    content: {
        // backgroundColor: 'red',
        flex: 1,
        marginTop: 25,
        // marginBottom: 40,
        position: 'relative',
    },
})


export default CreateAccount;