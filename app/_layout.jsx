import { StyleSheet, Text, View } from "react-native";
import React, { useEffect } from "react";
import { Redirect, Stack, Tabs, router } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import { UserContext } from "../UserContext";

const _layout = () => {
  
  return (
    <UserContext>
      <Stack>
        <Stack.Screen name="index" options={{ headerShown: false }}/>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen name="(auth)" options={{ headerShown: false }} />
      </Stack>
    </UserContext>
  );
};

export default _layout;

const styles = StyleSheet.create({});
