import { 
    SET_USER, SET_PROGRESS_VALUE, SET_ASSETS_MODAL, SET_ASSETS_CAT, SET_HIDE_ASSETS, SET_CURRENCY, SET_FACEID, SET_FIAT_ASSET, SET_CRYPTO_ASSET, 
    SET_NETWORK_CHOICE, SET_ASSET_CHOICE, SET_BRIDGE_FROM_NETWORK, SET_BRIDGE_FROM_ASSET, SET_BRIDGE_TO_NETWORK, SET_BRIDGE_TO_ASSET, 
    SET_CURRENT_FEED, SET_GREEN_CHECK, SET_ID_CHOICE, 
} from './action';

const initialState = {
    user: null,
    progressvalue: 1,
    assetsmodal: false,
    assetcat: 'all_assets',
    hideassets: null,
    currencyvalue: {
        label: 'United States Dollar',
        ticker: 'USD',
        value: 'usdollar'
    },
    faceid: null,
    fiatasset: null,
    cryptoasset: null,
    networkchoice: null,
    assetchoice: null,
    bridgefromnetwork: null,
    bridgefromasset: null,
    bridgetonetwork: null,
    bridgetoasset: null,
    currentfeed: null,
    greencheck: null,
    idchoice: null

}

function appReducer(state = initialState, action) {
    switch (action.type) {
        case SET_USER:
            return {...state, user: action.payload};
        case SET_PROGRESS_VALUE: 
            return {...state, progressvalue: action.payload};
        case SET_ASSETS_MODAL: 
            return {...state, assetsmodal: action.payload};
        case SET_ASSETS_CAT: 
            return {...state, assetcat: action.payload};
        case SET_HIDE_ASSETS: 
            return {...state, hideassets: action.payload};
        case SET_CURRENCY: 
            return {...state, currencyvalue: action.payload};
        case SET_FACEID: 
            return {...state, faceid: action.payload};
        case SET_FIAT_ASSET: 
            return {...state, fiatasset: action.payload};
        case SET_CRYPTO_ASSET: 
            return {...state, cryptoasset: action.payload};
        case SET_NETWORK_CHOICE: 
            return {...state, networkchoice: action.payload};
        case SET_ASSET_CHOICE: 
            return {...state, assetchoice: action.payload};
        case SET_BRIDGE_FROM_NETWORK: 
            return {...state, bridgefromnetwork: action.payload};
        case SET_BRIDGE_FROM_ASSET: 
            return {...state, bridgefromasset: action.payload};
        case SET_BRIDGE_TO_NETWORK: 
            return {...state, bridgetonetwork: action.payload};
        case SET_BRIDGE_TO_ASSET: 
            return {...state, bridgetoasset: action.payload};
        case SET_CURRENT_FEED: 
            return {...state, currentfeed: action.payload};
        case SET_GREEN_CHECK: 
            return {...state, greencheck: action.payload};
        case SET_ID_CHOICE: 
            return {...state, idchoice: action.payload};
        default:
            return state;
    }
}

export default appReducer;