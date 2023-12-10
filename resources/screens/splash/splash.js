import { Text, View, Image, StyleSheet } from "react-native";
import { images } from "../../utilities/images";
import { brandcolors } from "../../utilities/colors";
import { useEffect, useState } from "react";

const Splash = ({ navigation }) => {


    const [authstatus, setAuth] = useState(null)
    const [obstatus, setObstatus] = useState(null)
    const [checkdone, setCheck] = useState(null)


    useEffect(() => {
        checkUser()
    }, [])
    
    useEffect(() => {
        afterCheck()
    }, [checkdone])

    const afterCheck = () => {
        if(checkdone) {
            setTimeout(() => {
                navigation.replace('Login Auth')
            }, 2500)
        }
    }

    const checkUser = () => {
        setAuth(true)
        setCheck(true)
    }

    return ( 
        <View style={[styles.gif_frame]}>
            {checkdone ? <Image
                source={images.splash_gif_2}
                style={styles.gif}
            /> : null}
        </View>
    );
}

const styles = StyleSheet.create({
    gif_frame: {
        flex: 1,
        backgroundColor: brandcolors.white,
    },
    gif: {
        width: '100%',
        height: '100%',
        resizeMode: 'contain',
    }
})
 
export default Splash;