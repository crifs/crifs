import { StyleSheet } from "react-native";
import { brandcolors, colors } from "../utilities/colors";


export const modalStyles = StyleSheet.create({
    modal_container: {
        flex: 1,
        // backgroundColor: 'red',
        justifyContent: 'flex-end',
        alignItems: 'center',
        // paddingHorizontal: 16,
        position: 'relative',
        // paddingBottom: 80,
    },
    asset_cat_box: {
        backgroundColor: colors.neutrals.neu1,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        position: 'relative',
        zIndex: 99,
        width: '100%',
    },
    asset_cat_head: {
        justifyContent: 'center',
        alignItems: 'center',
        height: 50,
        borderBottomColor: colors.btn.btnborder,
        borderBottomWidth: .5,
        marginBottom: 10,
    },
    cat_body: {
        width: '100%',
        // paddingHorizontal: 20,
    },
    cat_box: {
        paddingVertical: 10,
        borderBottomWidth: .5,
        borderBottomColor: colors.btn.btnborder,
        width: '100%',
        paddingHorizontal: 20,
    },
    cat_logo_box: {
        backgroundColor: colors.neutrals.neu2,
        borderWidth: .5,
        borderColor: colors.btn.btnbg,
        width: 30,
        height: 30,
        borderRadius: 4,
        justifyContent: 'center',
        alignItems: 'center',
    },
    cat_check_box: {
        width: 18,
        height: 18,
        borderRadius: 50,
        backgroundColor: colors.oth.green_check,
        justifyContent: 'center',
        alignItems: 'center',
    },
    
    tmp_recent_modal: {
        width: '100%',
        position: 'absolute',
        top: '25%',
        left: 0,
        zIndex: 999,
        paddingHorizontal: 16,
    },
    bridge_recent_modal: {
        width: '100%',
        position: 'absolute',
        top: '17%',
        left: 0,
        zIndex: 999,
        paddingHorizontal: 16,
    },
    tmp_recent_modal_inner: {
        width: '100%',
        backgroundColor: brandcolors.bg,
        borderRadius: 16,
        // zIndex: 999,
        paddingHorizontal: 16,
        paddingVertical: 16,
    },
    tmp_recent_top: {
        // height: 50,
        // justifyContent: 'center',
        // width: '100%',
        // backgroundColor: colors.neutrals.white,
        // marginBottom: 20,
        // borderTopRightRadius: 20,
        // borderTopLeftRadius: 20,
    },
    tmp_recent_bottom: {
        // paddingHorizontal: 20,
    },
    tmp_recent_line_box: {
        paddingBottom: 16,
        borderBottomWidth: 1,
        borderBottomColor: brandcolors.grey[200],
        marginBottom: 16
    },
    tmp_recent_border_box: {
        padding: 16,
        borderRadius: 8,
        backgroundColor: brandcolors.grey[50],
    },
    tmpr_border_box_line_box: {
        paddingVertical: 10,
        borderBottomWidth: .5,
        borderBottomColor: colors.neutrals.neu5,
    },
    
    
    
    // bllue modal
    blue_modal_box: {
        // position: 'absolute',
        // top: 90,
        // right: 0,
        backgroundColor: colors.btn.btnbg,
        width: 310,
        // height: 250,
        paddingBottom: 12,
        borderRadius: 6,
        // zIndex: 99,
    },
    blue_modal_bottom_border: {
        borderBottomWidth: 1, 
        borderBottomColor: colors.neutrals.white,
    },
    blue_modal_no_bottom_border: {
        borderBottomWidth: 0, 
        borderBottomColor: '',
    },

    // swap modal
    swap_box: {
        backgroundColor: brandcolors.bg,
        borderTopLeftRadius: 16,
        borderTopRightRadius: 16,
        position: 'relative',
        zIndex: 99,
        width: '100%',
        paddingHorizontal: 16,
        paddingVertical: 24,
    },
    swap_input_box: {
        borderWidth: 1,
        borderColor: brandcolors.grey[500],
        width: '100%',
        height: 52,
        borderRadius: 16,
        paddingHorizontal: 8,
    },
    swap_asset_icon_box: {
        width: 20,
        height: 20,
        borderRadius: 4,
        borderWidth: .5,
        borderColor: brandcolors.pry[500],
        backgroundColor: colors.neutrals.neu2
    },
    swap_review_item: {
        paddingVertical: 8,
        borderBottomWidth: 1,
        borderBottomColor: brandcolors.grey[800]
    },
    swap_review_item_nb: {
        
    },
    

    // show more action modal
    more_action_modal_box: {
        backgroundColor: brandcolors.bg,
        borderTopLeftRadius: 16,
        borderTopRightRadius: 16,
        position: 'relative',
        zIndex: 99,
        width: '100%',
        padding: 16,
    },
    more_action_modal_btn: {
        backgroundColor: brandcolors.pry[500],
        borderRadius: 8,
        height: 56,
        paddingHorizontal: 8,
        paddingVertical: 16,
    },
    
    
    // coins modal
    coins_modal_box: {
        backgroundColor: brandcolors.bg,
        borderTopLeftRadius: 16,
        borderTopRightRadius: 16,
        position: 'relative',
        zIndex: 99,
        width: '100%',
        padding: 16,
        height: 400,
    },
    
    // payment method modal
    pm_modal_box: {
        backgroundColor: brandcolors.bg,
        borderTopLeftRadius: 16,
        borderTopRightRadius: 16,
        position: 'relative',
        zIndex: 99,
        width: '100%',
        padding: 16,
        // height: 400,
    },
    pm_modal_item: {
        backgroundColor: brandcolors.grey[50],
        height: 67,
        paddingHorizontal: 8,
        borderRadius: 8,
    },
    
    // deposit modal
    deposit_modal_box: {
        backgroundColor: brandcolors.bg,
        borderTopLeftRadius: 16,
        borderTopRightRadius: 16,
        position: 'relative',
        zIndex: 99,
        width: '100%',
        paddingHorizontal: 16,
        paddingTop: 16,
        paddingBottom: 24,
    },

    // send modal
    send_modal_item: {
        borderWidth: 1,
        borderColor: brandcolors.grey[500],
        width: '100%',
        height: 52,
        borderRadius: 16,
        paddingHorizontal: 8,
    },
    modal_line: {
        marginVertical: 8,
        backgroundColor: brandcolors.grey[200],
        width: '100%',
        height: 1,
    },
    
    // crypto swap modal
    ss_select: {
        borderWidth: 1,
        borderColor: brandcolors.grey[500],
        width: '100%',
        height: 42,
        borderRadius: 16,
        paddingHorizontal: 8,
    },
    ss_select_item: {
        width: '17%',
        height: 40,
        borderRadius: 6,
    },
    ss_select_custom: {
        paddingHorizontal: 10,
        height: 40,
        borderRadius: 6,
    },
    ss_value_item: {
        height: 49,
        paddingHorizontal: 8,
        borderRadius: 16,
    },


    // uninvest
    uninvest_modal_box: {
        backgroundColor: brandcolors.bg,
        borderTopLeftRadius: 16,
        borderTopRightRadius: 16,
        position: 'relative',
        zIndex: 99,
        width: '100%',
        padding: 16,
    },
    uninvest_modal_btn: {
        width: '45%',
        height: 48,
        borderRadius: 8,
        backgroundColor: brandcolors.pry[500],
    },
    uninvest_modal_btn_nb: {
        width: '45%',
        height: 48,
        borderRadius: 8,
        borderWidth: 1,
        borderColor: brandcolors.pry[500],
    },
    uninvest_item: {
        height: 33,
        borderBottomColor: brandcolors.grey[100],
        borderBottomWidth: 1,
    },
    uninvest_item_nb: {
        height: 33,
    },
})

