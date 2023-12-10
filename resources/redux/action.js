export const SET_USER = 'SET_USER';
export const SET_PROGRESS_VALUE = 'SET_PROGRESS_VALUE';
export const SET_ASSETS_MODAL = 'SET_ASSETS_MODAL';
export const SET_ASSETS_CAT = 'SET_ASSETS_CAT';
export const SET_HIDE_ASSETS = 'SET_HIDE_ASSETS';
export const SET_CURRENCY = 'SET_CURRENCY';
export const SET_FACEID = 'SET_FACEID';
export const SET_FIAT_ASSET = 'SET_FIAT_ASSET';
export const SET_CRYPTO_ASSET = 'SET_CRYPTO_ASSET';
export const SET_NETWORK_CHOICE = 'SET_NETWORK_CHOICE';
export const SET_ASSET_CHOICE = 'SET_ASSET_CHOICE';
export const SET_BRIDGE_FROM_NETWORK = 'SET_BRIDGE_FROM_NETWORK';
export const SET_BRIDGE_FROM_ASSET = 'SET_BRIDGE_FROM_ASSET';
export const SET_BRIDGE_TO_NETWORK = 'SET_BRIDGE_TO_NETWORK';
export const SET_BRIDGE_TO_ASSET = 'SET_BRIDGE_TO_ASSET';
export const SET_CURRENT_FEED = 'SET_CURRENT_FEED';
export const SET_GREEN_CHECK = 'SET_GREEN_CHECK';
export const SET_ID_CHOICE = 'SET_ID_CHOICE';


export const setUser = user => dispatch => {
    dispatch({
        type: SET_USER,
        payload: user,
    });
};

export const setProgressValue = progressvalue => dispatch => {
    dispatch({
        type: SET_PROGRESS_VALUE,
        payload: progressvalue,
    });
};

export const setAssetsModal = assetsmodal => dispatch => {
    dispatch({
        type: SET_ASSETS_MODAL,
        payload: assetsmodal,
    });
};

export const setAssetsCat = assetcat => dispatch => {
    dispatch({
        type: SET_ASSETS_CAT,
        payload: assetcat,
    });
};

export const setHideAssets = hideassets => dispatch => {
    dispatch({
        type: SET_HIDE_ASSETS,
        payload: hideassets,
    });
};

export const setCurrency = currencyvalue => dispatch => {
    dispatch({
        type: SET_CURRENCY,
        payload: currencyvalue,
    });
};

export const setFaceId = faceid => dispatch => {
    dispatch({
        type: SET_FACEID,
        payload: faceid,
    });
};

export const setFiatasset = fiatasset => dispatch => {
    dispatch({
        type: SET_FIAT_ASSET,
        payload: fiatasset,
    });
};

export const setCryptoasset = cryptoasset => dispatch => {
    dispatch({
        type: SET_CRYPTO_ASSET,
        payload: cryptoasset,
    });
};

export const setNetworkChoice = networkchoice => dispatch => {
    dispatch({
        type: SET_NETWORK_CHOICE,
        payload: networkchoice,
    });
};

export const setAssetChoice = assetchoice => dispatch => {
    dispatch({
        type: SET_ASSET_CHOICE,
        payload: assetchoice,
    });
};

export const setBridgeFromNetwork = bridgefromnetwork => dispatch => {
    dispatch({
        type: SET_BRIDGE_FROM_NETWORK,
        payload: bridgefromnetwork,
    });
};

export const setBridgeFromAsset = bridgefromasset => dispatch => {
    dispatch({
        type: SET_BRIDGE_FROM_ASSET,
        payload: bridgefromasset,
    });
};

export const setBridgeToNetwork = bridgetonetwork => dispatch => {
    dispatch({
        type: SET_BRIDGE_TO_NETWORK,
        payload: bridgetonetwork,
    });
};

export const setBridgeToAsset = bridgetoasset => dispatch => {
    dispatch({
        type: SET_BRIDGE_TO_ASSET,
        payload: bridgetoasset,
    });
};

export const setCurrentfeed = currentfeed => dispatch => {
    dispatch({
        type: SET_CURRENT_FEED,
        payload: currentfeed,
    });
};

export const setGreencheck = greencheck => dispatch => {
    dispatch({
        type: SET_GREEN_CHECK,
        payload: greencheck,
    });
};

export const setIDChoice = idchoice => dispatch => {
    dispatch({
        type: SET_ID_CHOICE,
        payload: idchoice,
    });
};