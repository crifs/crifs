import { Text, View, 
    StyleSheet,
    Image
} from "react-native";
import { colors } from "../../utilities/colors";
import { layoutStyles } from "../../styles/layout";
import ArrowIcon from "../../components/arror-icon";
import { images } from "../../utilities/images";
import { icons } from "../../utilities/icons";
import ArrowIconNF from "../../components/arrow-icon-nf";

const EditProfile = ({ navigation }) => {
    return ( 
        <View style={[styles.ed_container]}>


            <View style={[layoutStyles.align_center_justify_space_btwn, layoutStyles.mgb_15, styles.top_most]}>
                <ArrowIcon 
                    ripplecolor={'rgba(0, 0, 0, 0.3)'}
                    boxstyle={{ width: 30, height: 30 }}
                    imagestyle={{ width: 8, height: 13 }}
                    arrowfunc={() => navigation.goBack()}
                />

                <Image 
                    source={images.logo}
                    style={[layoutStyles.logo_general]}
                />
            </View>

            <View style={[styles.border_box, layoutStyles.just_center, layoutStyles.mgb_20]}>
                <Image 
                    source={images.user_dp_1}
                    style={[layoutStyles.mgb_10, { width: 100, height: 100, }]}
                />
                <Text style={[layoutStyles.l1_r]}>Tap to change photo</Text>
            </View>

            <View style={[layoutStyles.mgb_40, styles.border_box]}>
                <View style={[styles.padding_box]}>
                    <Text style={[layoutStyles.mgb_10, layoutStyles.l1_r]}>
                        The name and details on your ID will automatically appear here, therefore it can not be changed.
                    </Text>
                    <View style={[styles.item_border_bottom, layoutStyles.align_center_justify_space_btwn, { paddingTop: 10 }]}>
                        <Text style={[layoutStyles.b1_l]}>First Name</Text>
                        <Text style={[layoutStyles.b1_m_dc]}>Muhammad</Text>
                    </View>
                    <View style={[styles.item_border_bottom, layoutStyles.align_center_justify_space_btwn, { paddingTop: 10 }]}>
                        <Text style={[layoutStyles.b1_l]}>Last Name</Text>
                        <Text style={[layoutStyles.b1_m_dc]}>Kamaldeen</Text>
                    </View>
                    <View style={[layoutStyles.align_center_justify_space_btwn, { paddingTop: 10 }]}>
                        <Text style={[layoutStyles.b1_l]}>Date of Birth</Text>
                        <Text style={[layoutStyles.b1_m_dc]}>30th Sep, 1996</Text>
                    </View>
                </View>
            </View>

            <View style={[styles.padding_box]}>
                <Text style={[layoutStyles.mgb_10, layoutStyles.b1_m_dc]}>Conatact Information</Text>
                <View style={[styles.item_border_bottom, layoutStyles.align_center_justify_space_btwn, { paddingTop: 12 }]}>
                    <Text style={[layoutStyles.b1_l]}>Phone Number</Text>
                    <View style={[layoutStyles.row_align_center, layoutStyles.gap_10]}>
                        <Text style={[layoutStyles.l1_m_dark]}>+2348128824432</Text>
                        <ArrowIconNF 
                            boxstyle={{ width: 24, height: 24 }}
                            imagestyle={{ width: 6, height: 10, transform: [{rotate: '180deg'}] }}
                        />
                    </View>
                </View>
                <View style={[styles.item_border_bottom, layoutStyles.align_center_justify_space_btwn, { paddingTop: 12 }]}>
                    <Text style={[layoutStyles.b1_l]}>Email Address</Text>
                    <View style={[layoutStyles.row_align_center, layoutStyles.gap_10]}>
                        <Text style={[layoutStyles.l1_m_dark]}>ebodaniyantomi*****</Text>
                        <ArrowIconNF 
                            boxstyle={{ width: 24, height: 24 }}
                            imagestyle={{ width: 6, height: 10, transform: [{rotate: '180deg'}] }}
                        />
                    </View>
                </View>
            </View>


            

        </View>
    );
}



const styles = StyleSheet.create({
    ed_container: {
        flex: 1,
        paddingTop: 10,
        backgroundColor: colors.neutrals.neu1
    },
    top_most: {
        width: '100%',
        paddingRight: 7,
        paddingLeft: 20,
    },
    border_box: {
        paddingBottom: 20,
        borderBottomColor: colors.neutrals.neu3,
        borderBottomWidth: .5,
        width: '100%'
    },
    padding_box: {
        paddingHorizontal: 20,
    },
    item_border_bottom: {
        borderBottomColor: colors.neutrals.neu3,
        borderBottomWidth: .5,
        paddingBottom: 10,
    },
})


 
export default EditProfile;