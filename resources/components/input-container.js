import { View, TextInput, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import { layoutStyles } from "../styles/layout";
import { brandcolors, colors } from "../utilities/colors";
import { textStyles } from "../styles/text-styles";
import IconGeneralF from "./icon-general-f";



const InputCont = ({ boxStyles, labelText, placeholder, keyboard, changeFunc, iconRight, iconSrc, iconFunc, stEntry, inputValue }) => {
    return ( 
        <View style={[styles.input_box, boxStyles]}>
            <Text style={[textStyles.reg14, layoutStyles.mgb_8, {color: brandcolors.grey[800]}]}>{labelText}</Text>
            <View style={{ position: 'relative' }}>
                {iconRight  === true ? 
                    <IconGeneralF 
                        boxstyle={[styles.icon_right_box, { width: 24, height: 24, }]}
                        iconstyle={{ width: 20, height: 20 }}
                        iconsrc={iconSrc}
                        ripplecolor={brandcolors.ripple}
                        iconfunc={iconFunc}
                    />
                : null}
                <TextInput 
                    placeholder={placeholder}
                    keyboardType={keyboard}
                    onChangeText={changeFunc}
                    style={[styles.input, textStyles.reg16]}
                    placeholderTextColor={brandcolors.grey[500]}
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
        // backgroundColor: 'yellow'
    },
    input: {
        width: '100%',
        color: brandcolors.grey[800],
        backgroundColor: brandcolors.bg,
        borderColor: brandcolors.grey[500],
        borderWidth: 1,
        borderRadius: 8,
        padding: 8,
        position: 'relative',
    },
    icon_right_box: {
        // backgroundColor: 'red',
        position: 'absolute',
        top: 11,
        right: 8,
        zIndex: 999,
    },
})

 
export default InputCont;