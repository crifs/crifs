import { View, Text, StyleSheet } from "react-native";
import { brandcolors, colors } from "../utilities/colors";
import { layoutStyles } from "../styles/layout";
import { textStyles } from "../styles/text-styles";

const CAProgressBar = ({ progressValue }) => {
    return ( 
        <View style={styles.content}>


            <View style={{ position: 'relative' }}>
                <View style={[styles.progress_no_box, progressValue === 1 || progressValue === 2 || progressValue === 3 ? styles.progress_box_active : {}]}>
                    <Text 
                        style={[
                            textStyles.bold16, 
                            {color: progressValue === 1 || progressValue === 2 || progressValue === 3 ? brandcolors.sec[500] : brandcolors.grey[500] } 
                        ]}
                    >
                        1
                    </Text>
                </View>
                <View style={{ position: 'absolute', width: 72, top: 25, left: -23 }}>
                    <Text 
                        style={[
                            textStyles.reg10, 
                            {color: progressValue === 1 || progressValue === 2 || progressValue === 3 ? brandcolors.pry[500] : brandcolors.grey[500], 
                            textAlign: 'center'}
                        ]}
                    >
                        Create password
                    </Text>
                </View>
            </View>

            <View style={[styles.progress_line, progressValue === 2 || progressValue === 3 ? styles.progress_line_active : {}]}></View>

            <View style={{ position: 'relative' }}>
                <View style={[styles.progress_no_box, progressValue === 2 || progressValue === 3 ? styles.progress_box_active : {}]}>
                    <Text 
                        style={[
                            textStyles.bold16, 
                            {color: progressValue === 2 || progressValue === 3 ? brandcolors.sec[500] : brandcolors.grey[500]}
                        ]}
                    >
                        2
                    </Text>
                </View>
                <View style={{ position: 'absolute', width: 72, top: 25, left: -14 }}>
                    <Text 
                        style={[
                            textStyles.reg10, 
                            {color: progressValue === 2 || progressValue === 3 ? brandcolors.pry[500] : brandcolors.grey[500]}
                        ]}
                    >
                        Secure wallet
                    </Text>
                </View>
            </View>

            <View style={[styles.progress_line, progressValue === 3 ? styles.progress_line_active : {}]}></View>

            <View style={{ position: 'relative' }}>
                <View style={[styles.progress_no_box, progressValue === 3 ? styles.progress_box_active : {}]}>
                    <Text 
                        style={[
                            textStyles.bold16, 
                            {color: progressValue === 3 ? brandcolors.sec[500] : brandcolors.grey[500]}
                        ]}
                    >
                        3
                    </Text>
                </View>
                <View style={{ position: 'absolute', width: 72, top: 25, left: -22 }}>
                    <Text 
                        style={[
                            textStyles.reg10, {color: progressValue === 3 ? brandcolors.sec[500] : brandcolors.grey[500], textAlign: 'center'}
                        ]}
                    >
                        Confirm Seed Phrase
                    </Text>
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
        width: 24,
        height: 24,
        borderRadius: 50,
        borderWidth: 1,
        borderColor: brandcolors.grey[500],
        backgroundColor: brandcolors.bg,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    progress_line: {
        width: '26%',
        height: 1,
        backgroundColor: colors.neutrals.neu3
    },
    progress_box_active: {
        backgroundColor: brandcolors.pry[500],
        borderColor: brandcolors.pry[500],
    },
    progress_line_active: {
        backgroundColor: brandcolors.pry[500],
    },

})
 
export default CAProgressBar;