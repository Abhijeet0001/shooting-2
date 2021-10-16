import React from 'React'
import { View,Text,StyleSheet,Platform,StatusBar,Image,Dimensions } from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons'
import * as Font from 'expo-font'
import AppLoading from 'expo-app-loading'
import {RFValue} from 'react-native-responsive-fontsize'
import { SafeAreaView } from 'react-native'
let customfonts ={
    "Bubblegum-Sans":require("../assets/BubblegumSans-Regular.ttf")
} 
export default class HomeScreen extends React.Component{
    constructor(){
        super()
        this.state={fontsloaded:false}
    }
    async _loadfont(){
        await Font.loadAsync(customfonts)
        this.setState({fontsloaded:true})
    }
    componentDidMount(){
        this._loadfont()
    }
    render(){
        if(!this.state.fontsloaded){
            return(
                <AppLoading></AppLoading>
            )
        }
        else{return(
            <View style={styles.container}> 
            <SafeAreaView style={styles.droidSafeArea}/> 
            <View style={styles.appTitle}> 
            <View style={styles.appIcon}>
                <Image source={require("../assets/cover-2.jpg")} style={styles.Image}/> 
                <View style={styles.appTitleTextContainer}>
                    <Text style={styles.appTitleText}> Alphabet Shooter</Text></View></View></View> </View>
        )}
    }
}
const styles = StyleSheet.create({ container: { flex: 1, backgroundColor: "#15193c" }, droidSafeArea: { marginTop: Platform.OS === "android" ? StatusBar.currentHeight : RFValue(35) }, appTitle: { flex: 0.07, flexDirection: "row" }, appIcon: { flex: 0.3, justifyContent: "center", alignItems: "center" }, iconImage: { width: "100%", height: "100%", resizeMode: "contain" }, appTitleTextContainer: { flex: 0.7, justifyContent: "center", alignItems:'center' }, appTitleText: { color: "white", fontSize: RFValue(28), fontFamily: "Bubblegum-Sans", marginLeft:1000}
,dataContainer: { flexDirection: "row", padding: RFValue(20) }, titleTextContainer: { flex: 0.8 }})