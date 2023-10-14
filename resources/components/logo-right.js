import { StyleSheet, Image } from "react-native";
import { images } from "../utilities/images";




const LogoRight = ({ logoStyles }) => {
    return (
        <Image 
            source={images.logo}
            style={[styles.logo, logoStyles]}
        />
    );
}

const styles = StyleSheet.create({
    logo: {
        width: '26%',
        height: '12%',
        alignSelf: 'flex-end',
        resizeMode: 'contain'
    },
})
 
export default LogoRight;