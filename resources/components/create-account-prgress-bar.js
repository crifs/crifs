import { View, Text, StyleSheet } from "react-native";
import { colors } from "../utilities/colors";
import { layoutStyles } from "../styles/layout";

const CAProgressBar = ({ progressValue }) => {
    return ( 
        <View style={styles.content}>
            <View style={{ position: 'relative' }}>
                <View style={[styles.progress_no_box, progressValue === 1 || progressValue === 2 || progressValue === 3 ? styles.progress_box_active : {}]}>
                    <Text style={[styles.progress_text, progressValue === 1 || progressValue === 2 || progressValue === 3 ? styles.progress_text_active : {}]}>1</Text>
                </View>
                <View style={{ position: 'absolute', width: 72, top: 22, left: -17 }}>
                    <Text style={[layoutStyles.l2_r, {color: progressValue === 1 || progressValue === 2 || progressValue === 3 ? colors.btn.btnbg : colors.neutrals.neu3}]}>Create password</Text>
                </View>
            </View>
            <View style={[styles.progress_line, progressValue === 2 || progressValue === 3 ? styles.progress_line_active : {}]}></View>
            <View style={{ position: 'relative' }}>
                <View style={[styles.progress_no_box, progressValue === 2 || progressValue === 3 ? styles.progress_box_active : {}]}>
                    <Text style={[styles.progress_text, progressValue === 2 || progressValue === 3 ? styles.progress_text_active : {}]}>2</Text>
                </View>
                <View style={{ position: 'absolute', width: 72, top: 22, left: -14 }}>
                    <Text style={[layoutStyles.l2_r, {color: progressValue === 2 || progressValue === 3 ? colors.btn.btnbg : colors.neutrals.neu3}]}>Secure wallet</Text>
                </View>
            </View>
            <View style={[styles.progress_line, progressValue === 3 ? styles.progress_line_active : {}]}></View>
            <View style={{ position: 'relative' }}>
                <View style={[styles.progress_no_box, progressValue === 3 ? styles.progress_box_active : {}]}>
                    <Text style={[styles.progress_text, progressValue === 3 ? styles.progress_text_active : {}]}>3</Text>
                </View>
                <View style={{ position: 'absolute', width: 72, top: 22, left: -22 }}>
                    <Text style={[layoutStyles.l2_r, {color: progressValue === 3 ? colors.btn.btnbg : colors.neutrals.neu3, textAlign: 'center'}]}>Confirm Seed Phrase</Text>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    content: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 50,
    },
    progress_no_box: {
        width: 20,
        height: 20,
        borderRadius: 50,
        borderWidth: 2,
        borderColor: colors.neutrals.neu3,
        backgroundColor: colors.neutrals.neu1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    progress_text: {
        color: colors.neutrals.neu3,
        fontWeight: '600',
        fontSize: 12,
        lineHeight: 15
    },
    progress_line: {
        width: '26%',
        height: 2,
        backgroundColor: colors.neutrals.neu3
    },
    progress_box_active: {
        backgroundColor: colors.btn.btnbg,
        borderColor: colors.btn.btnbg,
    },
    progress_text_active: {
        color: colors.btn.btncolor
    },
    progress_line_active: {
        backgroundColor: colors.btn.btnbg,
    },

})
 
export default CAProgressBar;