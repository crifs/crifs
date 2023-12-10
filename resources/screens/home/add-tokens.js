import { Text, View, 
    StyleSheet,
    TextInput,
    Image
} from "react-native";
import { layoutStyles } from "../../styles/layout";
import { textStyles } from "../../styles/text-styles";
import { brandcolors, colors } from "../../utilities/colors";
import { TouchableOpacity } from "react-native-gesture-handler";
import IconGeneral from "../../components/icon-general";
import { useState } from "react";
import { icons } from "../../utilities/icons";
import { tokens } from "../../utilities/test-tokens";
import ToggleIcon from "../../components/toggle-icon";

const AddTokens = ({ navigation }) => {

    const [searchicn, setSearchicn] = useState(true)
    const [searchvalue, setSearch] = useState(null)

    return ( 
        <View style={[layoutStyles.generalFrame, layoutStyles.generalHPad,]}>
            

            <View style={[layoutStyles.align_center_justify_space_btwn, layoutStyles.mgb_24, layoutStyles.generalTopPad]}>
                <View></View>
                <Text style={[textStyles.bold18, { color: brandcolors.black }]}>Tokens</Text>
                <TouchableOpacity 
                    onPress={() => navigation.goBack()}
                >
                    <Text style={[textStyles.bold16, { color: brandcolors.sec[500] }]}>Done</Text>
                </TouchableOpacity>
            </View>

            <View style={[layoutStyles.mgb_24, layoutStyles.row_align_center, layoutStyles.gap_11, styles.search_box]}>
                <View style={[ { width: 24, height: 24 }]}>
                    {!searchvalue && searchicn ? 
                        <IconGeneral 
                            boxstyle={{ width: 24, height: 24 }}
                            iconsrc={icons.dark.search}
                            iconstyle={{ width: 20, height: 20 }}
                        />
                    : null}
                </View>
                <TextInput 
                    placeholder="Search"
                    placeholderTextColor={brandcolors.grey[500]}
                    style={[styles.search_input, textStyles.reg16]}
                    onChangeText={(value) => setSearch(value)}
                    onFocus={() => setSearchicn(null)}
                    onBlur={() => setSearchicn(true)}
                />
            </View>

            <View style={[]}>
                {tokens ? 
                    tokens.map((token) => (
                        <View style={[layoutStyles.align_center_justify_space_btwn, styles.token_box]} key={token.ticker}>
                            <View style={[layoutStyles.gap_10, layoutStyles.row_align_center]}>
                                <View style={[styles.token_logo_box]}>
                                    <Image 
                                        source={token.logo}
                                        style={{ width: 24, height: 24 }}
                                        resizeMode="contain"
                                    />
                                </View>
                                <View>
                                    <Text style={[layoutStyles.bp_2_dc]}>{token.ticker}</Text>
                                    <Text style={[layoutStyles.l1_r]}>{token.name}</Text>
                                </View>
                            </View>

                            <View>
                                <ToggleIcon 
                                    active={true}
                                />
                            </View>
                        </View>
                    ))
                : null}
            </View>


        </View>
    );
}


const styles = StyleSheet.create({
    search_box: {
        width: '100%',
        height: 48,
        paddingHorizontal: 8,
        borderRadius: 8,
        borderWidth: 1,
        borderColor: brandcolors.grey[500]
    },
    search_input: {
        color: brandcolors.grey[800],
        flex: 1,
        // width: '70%'
    },
    token_box: {
        paddingVertical: 8,
    },
    token_logo_box: {
        backgroundColor: colors.neutrals.neu2,
        width: 40,
        height: 40,
        borderRadius: 8,
        justifyContent: 'center',
        alignItems: 'center',
    },
})

 
export default AddTokens;