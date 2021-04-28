import React, { useState } from 'react'
import {Text, StyleSheet, View, Image} from 'react-native'
import { faEye, faEyeSlash, faLock, faUser } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import MainTextinput from '../../components/atoms/MainTextinput'
import MainButton from '../../components/atoms/MainButton'
import { useEffect } from 'react'
import axios from 'axios'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { TouchableOpacity } from 'react-native-gesture-handler'


// Ini adalah Fragment Login
const Login = ({navigation}) => {
    // For Button
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [parcable, setParcable] = useState();

    // Send API
    const sendLogin = async () => {
        // let data = {
        //     email : email, // diambil dari state diatas
        //     password: password // diambil dari state diatas
        // }

        navigation.navigate('Home')
    }

    return (
        <>
            <View style={styles.container}>
                {/* App Logo */}
                <TouchableOpacity  style={styles.containerLogo}>
                    <Image  style={styles.logo} source={require('../../assets/images/Instagram-word.png')} />
                </TouchableOpacity>

                {/* Login */}
                <MainTextinput 
                    onChangeText={
                        (value) => 
                            {
                                setEmail(value); 
                            }
                        } 
                    placeholder={'Phone number, email or username'} 
                />

                {/* Password */}
                <MainTextinput containerStyle={{marginTop:20}} 
                    onChangeText={(value) => 
                        {
                            setPassword(value); 
                            
                        }
                    }
                    placeholder={'Password'} password icon={faEye} iconChange={faEyeSlash} iconClickable 
                />
                <MainButton onPress={() => {sendLogin()}}  containerStyle={{marginTop:20, borderRadius:5}} fade={email.length && password.length ? false : true} touchable={email.length && password.length ? true : false}  title={'Login'} />

                {/* Forgot Account */}
                <View style={{flexDirection:'row', alignItems:'center', justifyContent:'center', marginTop:20}}>
                    <Text style={styles.textNotClickable}>{!parcable ? 'Forgot your login details?' : parcable }</Text>
                    <Text style={styles.textWithLink}>Get help logging in.</Text>
                </View>
            </View>

            <View style={styles.footer}>
                <Text style={styles.textNotClickable}>Don't have an account?</Text>
                <Text style={styles.textWithLink}>Sign up.</Text>
            </View>
        </>
    )
}

const styles = StyleSheet.create({
    container:{
        width:'100%',
        flex:1,
        paddingLeft:20,
        paddingRight:20,
    },
    footer:{
        width:'100%',
        height:60,
        borderTopWidth:1,
        borderTopColor:'#ddd',
        alignItems:'center',
        justifyContent:'center',
        flexDirection:'row'
    },
    containerLogo:{
        width:'100%',
        height:100,
        marginTop:200,
        alignItems:'center',
        padding:0,
    },
    logo:{
        width:'50%',
        height:undefined,
        flex:1,
        resizeMode:'contain'
    },
    textNotClickable:{
        color:'#666',
        fontSize:11,
    },
    textWithLink:{
        fontSize:11,
        marginLeft:3
    }
})

export default Login