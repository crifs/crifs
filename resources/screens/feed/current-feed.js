import { useEffect } from "react";
import { Text, View, 
    StyleSheet,
    Image,
    ScrollView
} from "react-native";
import { useSelector } from "react-redux";
import { layoutStyles } from "../../styles/layout";
import IconGeneralF from "../../components/icon-general-f";
import { icons } from "../../utilities/icons";
import { brandcolors } from "../../utilities/colors";
import { textStyles } from "../../styles/text-styles";

const CurrentFeed = ({ navigation }) => {

    const { currentfeed } = useSelector(state => state.appReducer)


    useEffect(() => {
        checkCurrentfeed()
    }, [])

    const checkCurrentfeed = () => {
        if(!currentfeed) {
            navigation.goBack()
        }
    }


    return (
        <>
        
        
            <View style={[layoutStyles.generalFrame, layoutStyles.generalHPad, layoutStyles.generalTopPad]}>
                
                <View style={[layoutStyles.mgb_16]}>
                    <IconGeneralF 
                        boxstyle={{ width: 24, height: 24 }}
                        iconstyle={{ width: 6, height: 12 }}
                        iconsrc={icons.dark.angle_left}
                        ripplecolor={{ color: brandcolors.ripple }}
                        iconfunc={() => navigation.goBack()}
                    />
                </View>

                <ScrollView style={{ flex: 1 }} showsVerticalScrollIndicator={false}>
                    {currentfeed ? <>
                        <View style={[layoutStyles.mgb_8, { width: '100%', height: 164 }]}>
                            <Image 
                                source={currentfeed.img}
                                style={{ width: '100%', height: '100%', borderRadius: 8, }}
                            />
                        </View>

                        <Text style={[textStyles.bold14, layoutStyles.mgb_8, {color: brandcolors.grey[800]}]}>{currentfeed.headline}</Text>

                        <View style={[layoutStyles.mgb_13]}>
                            <Text style={[textStyles.reg12, {color: brandcolors.sec[500]}]}>{currentfeed.author}</Text>
                            <Text style={[textStyles.reg12, {color: brandcolors.grey[800]}]}>{currentfeed.link}</Text>
                        </View>
                        
                        <Text style={[textStyles.reg14, { color: brandcolors.grey[500] }]}>{currentfeed.body}</Text>
                    </> : null}
                </ScrollView>

            </View>

        
        
        </> 
    );
}
 
export default CurrentFeed;