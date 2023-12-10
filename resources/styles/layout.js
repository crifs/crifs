import { StyleSheet } from "react-native";
import { brandcolors, colors } from "../utilities/colors";


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
    row_align_center: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
    },
    row_flex_end: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-end',
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
    align_center_justify_center: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
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
    just_center: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    flexCenter: {
        display: 'flex',
        justifyContent: 'center'
    },
    alignEnd: {
        display: 'flex',
        alignItems: 'flex-end'
    },
    alignCenter: {
        display: 'flex',
        alignItems: 'center'
    },

    generalFrame: {
        backgroundColor: brandcolors.bg,
        // backgroundColor: 'red',
        flex: 1
    },
    generalTopPad: {
        paddingTop: 50
    },
    generalHPad: {
        paddingHorizontal: 16,
    },
    border_radius_8: {
        borderRadius: 8,
    },

    gap_5: {
        gap: 5,
    },
    gap_14: {
        gap: 14
    },
    gap_36: {
        gap: 36,
    },
    gap_3: {
        gap: 3,
    },
    gap_6: {
        gap: 6,
    },
    gap_7: {
        gap: 7,
    },
    gap_8: {
        gap: 8,
    },
    gap_10: {
        gap: 10,
    },
    gap_11: {
        gap: 11,
    },
    gap_20: {
        gap: 20,
    },
    gap_40: {
        gap: 40,
    },
    gap_4: {
        gap: 4,
    },

    // pdts
    pdt_24: {
        paddingTop: 24
    },

    // mgts
    mgt_16: {
        marginTop: 16,
    },
    mgt_24: {
        marginTop: 24,
    },

    // mgbs
    mgb_5: {
        marginBottom: 5
    },
    mgb_56: {
        marginBottom: 56
    },
    mgb_26: {
        marginBottom: 26
    },
    mgb_46: {
        marginBottom: 46
    },
    mgb_64: {
        marginBottom: 64
    },
    mgb_27: {
        marginBottom: 27
    },
    mgb_32: {
        marginBottom: 32
    },
    mgb_13: {
        marginBottom: 13
    },
    mgb_31: {
        marginBottom: 31
    },
    mgb_38: {
        marginBottom: 38
    },
    mgb_21: {
        marginBottom: 21
    },
    mgb_4: {
        marginBottom: 4
    },
    mgb_97: {
        marginBottom: 97
    },
    mgb_18: {
        marginBottom: 18
    },
    mgb_48: {
        marginBottom: 48
    },
    mgb_9: {
        marginBottom: 9
    },
    mgb_7: {
        marginBottom: 7
    },
    mgb_8: {
        marginBottom: 8
    },
    mgb_16: {
        marginBottom: 16
    },
    mgb_50: {
        marginBottom: 50
    },
    mgb_10: {
        marginBottom: 10
    },
    mgb_15: {
        marginBottom: 15
    },
    mgb_19: {
        marginBottom: 19
    },
    mgb_20: {
        marginBottom: 20
    },
    mgb_24: {
        marginBottom: 24
    },
    mgb_30: {
        marginBottom: 30
    },
    mgb_40: {
        marginBottom: 40
    },
    mgb_42: {
        marginBottom: 42
    },
    mgb_44: {
        marginBottom: 44
    },
    mgb_55: {
        marginBottom: 55
    },

    //mgls
    mgl: {
        marginLeft: 5,
    },




    relative_position: {
        position: 'relative',
    },


    brand_header: {
        fontSize: 20,
        fontWeight: '600',
        color: colors.brand.brand1,
    },
    a1_m: {
        fontSize: 16,
        fontWeight: '500',
        color: colors.neutrals.black,
    },
    a1_p: {
        fontSize: 15,
        fontWeight: '500',
        color: colors.neutrals.black,
    },
    a2_r: {
        fontSize: 14,
        fontWeight: '400',
        color: colors.neutrals.black,
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
    b1_m_dc: {
        fontSize: 14,
        fontWeight: '500',
        color: colors.neutrals.neu3,
    },
    b1_sb: {
        fontSize: 14,
        fontWeight: '600',
        color: colors.neutrals.neu4,
    },
    b1_l: {
        fontSize: 14,
        fontWeight: '400',
        color: colors.neutrals.neu3,
    },
    l1_r: {
        fontWeight: '400',
        fontSize: 12,
        color: colors.neutrals.neu3,
    },
    l1_r_dark: {
        fontWeight: '400',
        fontSize: 12,
        color: colors.neutrals.black,
    },
    l1_r_green: {
        fontWeight: '400',
        fontSize: 12,
        color: colors.oth.green_check,
    },
    l1_m: {
        fontWeight: '500',
        fontSize: 12,
        color: colors.neutrals.neu3,
    },
    l1_m_dark: {
        fontWeight: '500',
        fontSize: 12,
        color: colors.neutrals.black,
    },
    e1_m: {
        fontWeight: '400',
        fontSize: 14,
        color: '#ed4337',
    },
    l2_r: {
        fontWeight: '400',
        fontSize: 8,
        color: colors.neutrals.neu3
    },
    l3_r: {
        fontWeight: '400',
        fontSize: 10,
        color: colors.neutrals.neu3
    },
    l3_r_dark: {
        fontWeight: '400',
        fontSize: 10,
        color: colors.neutrals.black
    },
    l3_m: {
        fontWeight: '500',
        fontSize: 10,
        color: colors.neutrals.neu7
    },
    l3_m_dark: {
        fontWeight: '500',
        fontSize: 10,
        color: colors.neutrals.black
    },
    l3_m_dc: {
        fontWeight: '500',
        fontSize: 10,
        color: colors.neutrals.neu8,
        letterSpacing: 2,
    },
    l3_m_light: {
        fontWeight: '500',
        fontSize: 10,
        color: colors.neutrals.neu2,
    },
    l4_sb_light: {
        fontWeight: '600',
        fontSize: 12,
        color: colors.neutrals.neu2,
    },

    st_dark: {
        fontWeight: '600',
        fontSize: 16,
        color: colors.neutrals.black,
    },
    bp_1: {
        fontWeight: '600',
        fontSize: 18,
        color: colors.neutrals.neu4,
    },
    bp_2: {
        fontWeight: '600',
        fontSize: 16,
        color: colors.neutrals.neu4,
    },
    bp_2_sb: {
        fontWeight: '500',
        fontSize: 16,
        color: colors.neutrals.neu4,
    },
    bp_2_dark: {
        fontWeight: '500',
        fontSize: 16,
        color: colors.neutrals.black,
    },
    bp_2_dc: {
        fontWeight: '500',
        fontSize: 16,
        color: colors.neutrals.neu6,
    },
    bp_3: {
        fontWeight: '600',
        fontSize: 14,
        color: colors.neutrals.neu4,
    },
    bp_4: {
        fontWeight: '600',
        fontSize: 10,
        color: colors.neutrals.white,
    },
    bp_5: {
        fontWeight: '600',
        fontSize: 8,
        color: colors.neutrals.white,
    },
    chart_green_text: {
        fontWeight: '500',
        fontSize: 8,
        color: colors.oth.green_check,
    },
    chart_green_text_s: {
        fontWeight: '500',
        fontSize: 12,
        color: colors.oth.green_check,
    },
    
    text_align_center: {
        textAlign: 'center'
    },
    text_align_left: {
        textAlign: 'left'
    },
    text_align_right: {
        textAlign: 'right'
    },

    icon_10: {
        width: 10
    },
    icon_12: {
        width: 12
    },
    icon_25: {
        width: 25
    },
    icon_30: {
        width: 30
    },
    icon_20: {
        width: 20
    },
    icon_14: {
        width: 14
    },
    icon_15: {
        width: 15
    },
    icon_18: {
        width: 18
    },
    icon_11: {
        width: 11
    },
    icon_17: {
        width: 17
    },
    icon_19: {
        width: 19
    },

    logo_general: {
        width: 100,
        height: 100
    },
    img_100: {
        width: '100%'
    },
})

