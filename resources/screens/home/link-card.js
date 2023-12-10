import { ScrollView, Text, View } from "react-native";
import { layoutStyles } from "../../styles/layout";
import IconGeneralF from "../../components/icon-general-f";
import IconGeneral from "../../components/icon-general";
import { icons } from "../../utilities/icons";
import { brandcolors } from "../../utilities/colors";
import { textStyles } from "../../styles/text-styles";
import InputCont from "../../components/input-container";
import { useEffect, useState } from "react";
import ButtonOne from "../../components/custom-buttons/one";






const LinkCard = ({ navigation }) => {


    const [cardnumber, setCardnumber] = useState(null)
    const [expirydate, setExpirydate] = useState('')
    const [cvv, setCvv] = useState(null)
    const [cardpin, setCardpin] = useState(null)
    const [errorstate, setErrorstate] = useState(null)


    useEffect(() => {
        if(expirydate.length === 2 && !expirydate.includes("/")) {
            setExpirydate(expirydate + '/')
        }
    }, [expirydate])

    const handleAdd = () => {
        if(!cardnumber || expirydate.length < 0 || !cvv || !cardpin) {
            setErrorstate('Please enter complete card details to add card')
        }
    }

    return ( 
        <>
        
        
            <View style={[layoutStyles.generalFrame, layoutStyles.generalTopPad, layoutStyles.generalHPad]}>


                <View style={[layoutStyles.align_center_justify_space_btwn, layoutStyles.mgb_24]}>
                    <IconGeneralF 
                        boxstyle={{ width: 24, height: 24 }}
                        iconstyle={{ width: 7, height: 16 }}
                        ripplecolor={brandcolors.ripple}
                        iconsrc={icons.dark.angle_left}
                        iconfunc={() => navigation.goBack()}
                    />
                    <Text style={[textStyles.bold18, {color: brandcolors.pry[500]}]}>Link a card</Text>
                    <View></View>
                </View>

                <ScrollView style={{ flex: 1 }} showsVerticalScrollIndicator={false}>

                    <View style={[layoutStyles.mgb_40]}>
                        <InputCont 
                            boxStyles={{ marginBottom: 24 }}
                            labelText={'Enter card number'}
                            placeholder={'e.g 1234 5678 9012 3456'}
                            keyboard={'numeric'}
                            changeFunc={(value) => setCardnumber(value)}
                        />
                        <InputCont 
                            boxStyles={{ marginBottom: 24 }}
                            labelText={'Expiry date'}
                            placeholder={'e.g 02/25'}
                            keyboard={'numeric'}
                            inputValue={expirydate}
                            changeFunc={(value) => setExpirydate(value)}
                        />
                        <InputCont 
                            boxStyles={{ marginBottom: 24 }}
                            labelText={'CVV'}
                            placeholder={'e.g 123'}
                            keyboard={'numeric'}
                            changeFunc={(value) => setCvv(value)}
                        />
                        <InputCont 
                            labelText={'Card pin'}
                            placeholder={'e.g 1234'}
                            keyboard={'numeric'}
                            changeFunc={(value) => setCardpin(value)}
                        />
                        {errorstate ? 
                            <Text style={[layoutStyles.e1_m, { marginTop: 10 }]}>{errorstate}</Text>
                        : null}
                    </View>

                    <ButtonOne 
                        btnText={'Add Card'}
                        status={false}
                        buttonPress={handleAdd}
                    />

                </ScrollView>
            

            </View>
        
        
        
        </>
    );
}
 
export default LinkCard;