import { Image, Text, View,
    StyleSheet,
    Pressable,
} from "react-native";
import { layoutStyles } from "../../styles/layout";
import { brandcolors, colors } from "../../utilities/colors";
import { tokens } from "../../utilities/test-tokens";
import { setAssetsModal, setCryptoasset, setFiatasset } from "../../redux/action";
import { useDispatch, useSelector } from "react-redux";


const AssetsComponent = ({ navigation }) => {

    const dispatch = useDispatch()

    const { assetcat } = useSelector(state => state.appReducer)


    const handleCryptonav = (value) => {
        if(value) {
            if(value.type === 'crypto') {
                dispatch(setCryptoasset(value))
                navigation.navigate('Crypto Action')
            } else if (value.type === 'fiat') {
                dispatch(setFiatasset(value))
                navigation.navigate('Fiat Action')
            }
        }
    }

    return ( 
        <View>

            {tokens ? 
                tokens.map((token) => (
                    <Pressable style={[layoutStyles.align_center_justify_space_btwn, styles.token_box]} key={token.ticker}
                        android_ripple={{ color: brandcolors.ripple }}
                        onPress={() => handleCryptonav(token)}
                    >
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
                    </Pressable>
                ))
            : null}

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

 
export default AssetsComponent;