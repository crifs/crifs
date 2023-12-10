import { Pressable, StyleSheet } from "react-native";

const BackDrop = ({ dropPress }) => {
    return ( 
        <Pressable style={styles.backdrop} onPress={dropPress}>
            
        </Pressable>
    );
}


const styles = StyleSheet.create({
    backdrop: {
        flex: 1,
        width: '100%',
        height: '100%',
        position: 'absolute',
        top: 0,
        left: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.8)',
        zIndex: 99
    }
})

 
export default BackDrop;