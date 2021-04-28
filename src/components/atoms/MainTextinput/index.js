import { faUser } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import React, { useState } from 'react'
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native'
import { Blue } from '../MainColor'

const MainTextinput = (props) => {

    // For ICON
    const [prevIcon, setPrevIcon] = useState(props.icon)
    const [icon,setIcon] = useState(props.icon)
    const [iconColor, setIconColor] = useState('#999')
    const [iconClicked, setIconClicked] = useState(false)
    const [isPassword, setIsPassword] = useState(props.password ?? false)
    const iconClick = () => {
        if(iconClicked === false){
            setIconColor(Blue); 
            setIconClicked(true); 
            setIcon(props.iconChange ?? icon)
            if(props.password){
                setIsPassword(false)
            }
        }else{
            setIconColor('#999')
            setIconClicked(false)
            setIcon(prevIcon)
            if(props.password){
                setIsPassword(true)
            }
        }
    }

    return (
        <View style={[styles.container, props.containerStyle]}>
            <TextInput onKeyPress={props.onKeyPress} onChangeText={props.onChangeText} secureTextEntry={isPassword} style={[styles.TextInput]} placeholder={props.placeholder ?? 'Your placeholder ..'}></TextInput>
            {icon && 
                <TouchableOpacity onPress={()=>{ props.iconClickable && iconClick()}} style={[styles.icon]}>
                    <FontAwesomeIcon  color={iconColor} icon={ icon } size={20}/>
                </TouchableOpacity>
            }
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        position:'relative',
    },
    TextInput:{
        borderWidth:1,
        borderColor:'#ccc',
        height:50,
        borderRadius:5,
        paddingLeft:10,
        paddingRight:10,
        fontSize:12,
        backgroundColor:'#eee'
    },
    icon:{
        position:'absolute',
        right:5,
        top:5,
        color:'#ccc',
        width:40,
        height:40,
        justifyContent:'center',
        alignItems:'center',
    }
})

export default MainTextinput