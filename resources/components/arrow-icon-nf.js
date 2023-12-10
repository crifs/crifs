import { View, Image } from "react-native";
import { layoutStyles } from "../styles/layout";
import { icons } from "../utilities/icons";


const ArrowIconNF = ({ boxstyle, imagestyle }) => {
    return ( 
        <View style={[layoutStyles.align_center_justify_center, boxstyle]}>
            <Image 
                source={icons.arrow_back_icon}
                style={imagestyle}
            />
        </View>
    );
}
 
export default ArrowIconNF;