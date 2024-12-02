import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from "react-native-vector-icons/AntDesign"

import {iconSizes} from '../constants/dimensions';
import { useNavigation } from '@react-navigation/native';

const Header = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container} >
      <TouchableOpacity onPress={()=>{navigation.goBack();}} >
      <Ionicons name={"arrow-back" }size={iconSizes.md} />
      </TouchableOpacity>
      <TouchableOpacity>
      <AntDesign name={"hearto" }size={iconSizes.md} />
      </TouchableOpacity>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
    container:{
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
    }
});