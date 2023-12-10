import { Text, View, 
    StyleSheet,
    Image,
    ScrollView
} from "react-native";
import { layoutStyles } from "../../styles/layout";
import { textStyles } from "../../styles/text-styles";
import { brandcolors } from "../../utilities/colors";
import { feeds } from "../../utilities/test-feeds";
import { useDispatch } from "react-redux";
import { setCurrentfeed } from "../../redux/action";
import { TouchableOpacity } from "react-native-gesture-handler";

const Feeds = ({ navigation }) => {


    const dispatch = useDispatch()



    const dispatchCurrentNews = (value) => {
        dispatch(setCurrentfeed(value))
        navigation.navigate('Current Feed')
    }


    return ( 
        <>
        

            <View style={[layoutStyles.generalFrame, layoutStyles.generalHPad, layoutStyles.generalTopPad]}>
                

                <View style={[layoutStyles.just_center, layoutStyles.mgb_24]}>
                    <Text style={[textStyles.bold18, {color: brandcolors.grey[800]}]}>News Feed</Text>
                </View>

                <ScrollView style={{ flex: 1 }} showsVerticalScrollIndicator={false}>
                    <View style={[layoutStyles.mgb_30]}>
                        {feeds ? 
                            feeds.map((item, index) => (
                                <TouchableOpacity 
                                    key={item.body}
                                    style={[
                                        styles.item_box, layoutStyles.align_center_justify_space_btwn,
                                        index === ((feeds.length) - 1) ? null : layoutStyles.mgb_16
                                    ]}
                                    onPress={() => dispatchCurrentNews(item)}
                                >
                                    <View style={[styles.item_half]}>
                                        <Text 
                                            numberOfLines={3}
                                            style={[textStyles.bold14, { color: brandcolors.grey[800] }]}
                                        >
                                            {item.headline}
                                        </Text>
                                        <View style={[layoutStyles.flex_end,]}>
                                            <Text style={[textStyles.reg12, { color: brandcolors.grey[800] }]}>{item.author}</Text>
                                            <Text style={[textStyles.reg12, { color: brandcolors.sec[500] }]}>{item.link}</Text>
                                        </View>
                                    </View>
                                    <View style={[styles.item_half]}>
                                        <Image 
                                            source={item.img}
                                            style={{ width: '100%', height: '100%', borderRadius: 8 }}
                                            // resizeMode="contain"
                                        />
                                    </View>
                                </TouchableOpacity>
                            ))
                        : null}
                    </View>
                </ScrollView>


            </View>
        
        
        </>
    );
}


const styles = StyleSheet.create({
    item_box: {
        width: '100%',
        height: 152,
        borderRadius: 16,
        backgroundColor: brandcolors.grey[50],
        padding: 16
    },
    item_half: {
        width: '50%'
    },
})

 
export default Feeds;