import { View, Text, Image, StyleSheet } from "react-native";
import { layoutStyles } from "../../styles/layout";
import { colors } from "../../utilities/colors";



const Token = ({token}) => {
    return ( 
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
                <Text style={[layoutStyles.bp_2]}>{token.amount}</Text>
                <Text style={[layoutStyles.l1_m]}>$ {token.amount_in_bucks}</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
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
 
export default Token;