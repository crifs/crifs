import { View, TextInput, Text, StyleSheet, Image } from "react-native";
import { layoutStyles } from "../styles/layout";
import { colors } from "../utilities/colors";
import { TouchableOpacity } from "react-native-gesture-handler";



const InputCont = ({ labelText, placeholder, changeFunc, iconRight, iconSrc, iconFunc, stEntry, inputValue }) => {
    return ( 
        <View style={styles.input_box}>
            <Text style={[layoutStyles.b1_m, {marginBottom: 10}]}>{labelText}</Text>
            <View style={{ position: 'relative' }}>
                {iconRight  === true ? 
                    <TouchableOpacity 
                        style={styles.icon_right_box}
                        onPress={iconFunc}
                    >
                        <Image 
                            source={iconSrc}
                            style={styles.icon_right}
                            /> 
                    </TouchableOpacity>
                : null}
                <TextInput 
                    placeholder={placeholder}
                    onChangeText={changeFunc}
                    style={styles.input}
                    placeholderTextColor={colors.neutrals.neu3}
                    secureTextEntry={stEntry}
                    value={inputValue}
                />
            </View>
        </View>
    );
}


const styles = StyleSheet.create({
    input_box: {
        position: 'relative',
    },
    input: {
        backgroundColor: colors.neutrals.neu2,
        borderColor: colors.neutrals.neu3,
        borderWidth: .5,
        borderRadius: 5,
        width: '100%',
        paddingVertical: 11,
        paddingLeft: 10,
        fontSize: 12,
        fontWeight: '400',
        color : colors.neutrals.neu6,
        position: 'relative',
    },
    icon_right_box: {
        // width: '20%',
        // backgroundColor: 'red',
        // height: '',
        position: 'absolute',
        // bottom: 30,
        // right: 30,
        // zIndex: 999
    },
    icon_right: {
        width: 15,
        height: 10,
        // resizeMode: 'contain',
    },
})

 
export default InputCont;