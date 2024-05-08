import { StyleSheet, Text, Touchable, View } from "react-native";
import React, { useEffect } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Link, Redirect, router } from "expo-router";

const index = () => {
  return (
    <SafeAreaView style={{justifyContent:"center", alignItems:"center", flex:1}}>
      {/* <Text>index</Text> */}
      <Link href={"/SignIn"}>
        <Text style={{fontSize:50, color:"blue"}}>Sign In</Text>
      </Link>
    </SafeAreaView>
  );
};

export default index;

const styles = StyleSheet.create({});
