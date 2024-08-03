import React from 'react'
import {  View } from 'react-native'
import HaberList from './HaberList'

import { StyleSheet, SafeAreaView, ScrollView, StatusBar, Pressable } from 'react-native'


import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HaberDetay from './HaberDetay';
import KategoriCard from '../Components/KategoriCard'



import Icon from 'react-native-vector-icons/FontAwesome';
import IconFontisto from 'react-native-vector-icons/Fontisto';
import IconMaterial from 'react-native-vector-icons/MaterialIcons';
import IconFA5 from 'react-native-vector-icons/FontAwesome5';
import IconEntypo from 'react-native-vector-icons/Entypo';
import IconMaterialCom from 'react-native-vector-icons/MaterialCommunityIcons';



const Stack = createNativeStackNavigator();

function HaberKategoriIcerikleri({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
      <View style={styles.container2}>
      <View style={styles.view}>
        <Pressable style={styles.press} onPress={() => {navigation.navigate('Haber Listesi', {haberBilgisi: 'Gündem'});}}><KategoriCard  renk={['red', 'blue']} isim="Gündem" gorsel={<Icon name="newspaper-o" size={100} color="white"/>} /></Pressable>
        <Pressable style={styles.press} onPress={() => {navigation.navigate('Haber Listesi', {haberBilgisi: 'Türkiye'});}}><KategoriCard  renk={['red', '#FF6347']} isim="Türkiye"  /></Pressable>
      </View>
      <View style={styles.view}>
        <Pressable style={styles.press} onPress={() => {navigation.navigate('Haber Listesi', {haberBilgisi: 'Dünya'});}}><KategoriCard renk={['#00008B', '#87CEFA']} isim="Dünya" gorsel={<IconFontisto name="world" size={100} color="white"/>} /></Pressable>
        <Pressable style={styles.press} onPress={() => {navigation.navigate('Haber Listesi', {haberBilgisi: 'Siyaset'});}}><KategoriCard renk={['#32CD32', '#FFFF00']} isim="Siyaset" gorsel={<Icon name="balance-scale" size={100} color="white"/>} /></Pressable>
      </View>
      <View style={styles.view}>
        <Pressable style={styles.press} onPress={() => {navigation.navigate('Haber Listesi', {haberBilgisi: 'Ekonomi'});}}><KategoriCard renk={['#FF4500', '#FFA500']} isim="Ekonomi" gorsel={<Icon name="money" size={100} color="white"/>} /></Pressable>
        <Pressable style={styles.press} onPress={() => {navigation.navigate('Haber Listesi', {haberBilgisi: 'Spor'});}}><KategoriCard renk={['#40E0D0', '#1E90FF']} isim="Spor" gorsel={<IconMaterial name="sports-handball" size={100} color="white"/>} /></Pressable>
      </View>
      <View style={styles.view}>
        <Pressable style={styles.press} onPress={() => {navigation.navigate('Haber Listesi', {haberBilgisi: 'Sağlık'});}}><KategoriCard renk={['#8A2BE2', '#FF7F50']} isim="Sağlık" gorsel={<IconFA5 name="heartbeat" size={100} color="white"/>} /></Pressable>
        <Pressable style={styles.press} onPress={() => {navigation.navigate('Haber Listesi', {haberBilgisi: 'Teknoloji'});}}><KategoriCard renk={['#00BFFF', '#32CD32']} isim="Teknoloji" gorsel={<IconEntypo name="tablet-mobile-combo" size={100} color="white"/>} /></Pressable>
      </View>
      <View style={styles.view}>
        <Pressable style={styles.press} onPress={() => {navigation.navigate('Haber Listesi', {haberBilgisi: 'Eğitim'});}}><KategoriCard renk={['#8B4513', 'yellow']} isim="Eğitim" gorsel={<IconMaterialCom name="book-education" size={100} color="white"/>} /></Pressable>
        <Pressable style={styles.press} onPress={() => {navigation.navigate('Haber Listesi', {haberBilgisi: 'Kültür-Sanat'});}}><KategoriCard renk={['#FF69B4', '#FFD700']} isim="Kültür-Sanat" gorsel={<IconMaterialCom name="drama-masks" size={100} color="white"/>} /></Pressable>
      </View>
      </View>
      </ScrollView>

    </SafeAreaView>
  )
}

/*
      <Button
        title="Spor Haberleri"

        onPress={() => {navigation.navigate('HaberListParent', {haberBilgisi: 'Spor'});}}
      />
*/


function HaberKategorileri() {
  return (
    <NavigationContainer independent={true}>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="HaberKategorileri" component={HaberKategoriIcerikleri} />
        <Stack.Screen options={{headerShown:true}} name="Haber Listesi" component={DetailsScreen} />
        <Stack.Screen name="HaberList" component={HaberList} />
        <Stack.Screen options={{headerShown:true}} name="Haber Detayı" component={HaberDetay} />
      </Stack.Navigator>
    </NavigationContainer>

  )
}



function DetailsScreen({ route, navigation }) {
  /* 2. Get the param */
  const { haberBilgisi } = route.params;
  return (

    <HaberList kategori={JSON.stringify(haberBilgisi)} />

  );
}


export default HaberKategorileri


const styles = StyleSheet.create({
  container: {
    paddingTop: StatusBar.currentHeight,
    width:"100%",

    //alignItems:"center"
    //justifyContent:"center",
  },
  container2:{
    borderColor:"red",
    //borderWidth:1,
    alignItems:"center"
    
  }
  ,
  view:{
    flexDirection:"row",
    height:"auto",
    width:"100%",
    justifyContent:"center",
    alignItems:"center",
    borderColor:"green",
    //borderWidth:1,
  },
  press:{
  height:"auto",
  width:"100%",
  flex:10,
  margin:2,
  borderColor:"pink",
  //borderWidth:2,
  alignItems:"center"
  },
})