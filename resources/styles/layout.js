import { StyleSheet } from "react-native";
import { colors } from "../utilities/colors";


export const layoutStyles = StyleSheet.create({

    scroll_view: {
        paddingHorizontal: '5%',
    },
    flex_one_default: {
        flex: 1,
        paddingHorizontal: '5%',
        position: 'relative',
        // paddingBottom: 10,
        // justifyContent: 'flex-start'
        // backgroundColor: 'red',
    },
    flex_one_center: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: '5%',
    },
    flex_end: {
        flex: 1,
        justifyContent: 'flex-end',
        // backgroundColor: 'yellow'
        // backgroundColor: 'yellow'
    },
    flex_row: {
        display: 'flex',
        flexDirection: 'row',
    },
    justify_center: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
    },
    align_center: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
    },
    justify_space_btwn: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    align_center_justify_space_btwn: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    flex_align_center: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
    },
    flex_wrap: {
        flexWrap: 'wrap',
    },
    align_center: {
        alignItems: 'center',
    },

    gap_3: {
        gap: 3,
    },
    gap_8: {
        gap: 8,
    },
    gap_10: {
        gap: 10,
    },
    relative_position: {
        position: 'relative',
    },


    brand_header: {
        fontSize: 20,
        fontWeight: '600',
        color: colors.brand.brand1,
    },
    b1_r: {
        fontSize: 14,
        fontWeight: '400',
        color: colors.neutrals.neu3,
    },
    b1_m: {
        fontSize: 14,
        fontWeight: '500',
        color: colors.neutrals.neu4,
    },
    b1_sb: {
        fontSize: 14,
        fontWeight: '600',
        color: colors.neutrals.neu4,
    },
    l1_r: {
        fontWeight: '400',
        fontSize: 12,
        color: colors.neutrals.neu3,
    },
    l1_m: {
        fontWeight: '500',
        fontSize: 12,
        color: colors.neutrals.neu3,
    },
    e1_m: {
        fontWeight: '400',
        fontSize: 14,
        color: '#ed4337',
    },
    l2_r: {
        fontWeight: '400',
        fontSize: 8,
        color: colors.neutrals.new3
    },
    l3_r: {
        fontWeight: '400',
        fontSize: 10,
        color: colors.neutrals.new3
    },

    text_align_center: {
        textAlign: 'center'
    },

    // mgbs
    mgb_10: {
        marginBottom: 10
    },
    mgb_20: {
        marginBottom: 20
    },
    mgb_30: {
        marginBottom: 30
    },

    //mgls
    mgl: {
        marginLeft: 5,
    },
})

