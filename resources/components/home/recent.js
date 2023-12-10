import { Text, View, 
    Image,    
    StyleSheet,
    FlatList,
    Pressable
} from "react-native";
import { layoutStyles } from "../../styles/layout";
import { icons } from "../../utilities/icons";
import { colors } from "../../utilities/colors";
import { testHistory } from "../../utilities/test-history";
import { useState } from "react";
import BackDrop from "../backdrop";
import { useDispatch } from "react-redux";
import { setTmphistory } from "../../redux/action";

const Recent = () => {

    const dispatch = useDispatch()

    return ( 
        <View style={styles.recent_pad}>



            <View style={[layoutStyles.align_center_justify_space_btwn, layoutStyles.mgb_24]}>
                <Text style={[layoutStyles.a1_m]}>History</Text>
                <View style={[layoutStyles.gap_5, layoutStyles.row_align_center]}>
                    <Text style={[layoutStyles.b1_m]}>All</Text>
                    <Image 
                        source={icons.angle_down_active}
                        style={[layoutStyles.icon_10, { height: 5 }]}
                    />
                </View>
            </View>


            <View>
                {testHistory ? 
                       testHistory.map((item) => (
                            <View style={[styles.recent_item, layoutStyles.align_center_justify_space_btwn]} key={item.time}>
                                <View style={[layoutStyles.row_align_center, layoutStyles.gap_10]}>
                                    <View style={[styles.recent_icon_box]}>
                                        <Image 
                                            source={item.logo}
                                            style={{ width: 15, height: 15 }}
                                            resizeMode="contain"
                                        />
                                    </View>
                                    <View>
                                        <Text style={[layoutStyles.a2_r]}>{item.title}</Text>
                                        <Text style={[layoutStyles.l1_r]}>Apr27</Text>
                                    </View>
                                </View>
                                <View style={[layoutStyles.row_align_center, layoutStyles.gap_20]}>
                                    <Text style={[layoutStyles.a1_p]}>{item.amount} {item.tokenticker}</Text>
                                    <View style={[styles.recent_item_line]}></View>
                                    <Pressable style={[styles.showmore_box]}
                                        android_ripple={{ color: 'rgba(0, 0, 0, 0.3)' }}
                                        hitSlop={{ bottom: 15, left: 30, right: 30, top: 15 }}
                                        onPress={() => dispatch(setTmphistory(item))}
                                    >
                                        <View style={[styles.showmore_item]}></View>
                                        <View style={[styles.showmore_item]}></View>
                                        <View style={[styles.showmore_item]}></View>
                                    </Pressable>
                                </View>
                            </View>
                       ))
                : null}
            </View>


        </View>
    );
}


const styles = StyleSheet.create({
    recent_pad: {
        paddingHorizontal: 20,
        width: '100%',
        marginBottom: 50,
    },
    recent_item: {
        marginBottom: 20,
        paddingHorizontal: 10,
        paddingVertical: 10,
        borderWidth: .5,
        borderColor: colors.neutrals.neu3,
        borderRadius: 8
    },
    recent_icon_box: {
        width: 30,
        height: 30,
        borderWidth: .5,
        borderRadius: 4,
        borderColor: colors.neutrals.neu3,
        backgroundColor: colors.neutrals.neu2,
        justifyContent: 'center',
        alignItems: 'center',
    },
    recent_item_line: {
        width: 1,
        height: 40,
        backgroundColor: colors.neutrals.neu5,
    },
    showmore_box: {
        gap: 3,
        paddingRight: 10,
    },
    showmore_item: {
        width: 5,
        height: 5,
        borderRadius: 50,
        backgroundColor: colors.brand.brand3,
    },
})

 
export default Recent;