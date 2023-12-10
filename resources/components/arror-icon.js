import { Pressable, Image } from "react-native";
import { layoutStyles } from "../styles/layout";
import { icons } from "../utilities/icons";


const ArrowIcon = ({ ripplecolor, arrowfunc, boxstyle, imagestyle }) => {
    return ( 
        <Pressable 
            hitSlop={{ top: 20, bottom: 20, left: 20 ,right: 20, }}
            android_ripple={{ color: ripplecolor, radius: 50 }}
            onPress={arrowfunc}
            style={[layoutStyles.align_center_justify_center, boxstyle]}
        >
            <Image 
                source={icons.arrow_back_icon}
                style={imagestyle}
            />
        </Pressable>
    );
}
 
export default ArrowIcon;