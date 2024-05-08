import { StyleSheet, Text, View, Image, Pressable } from "react-native";
import React, { useContext, useState, useEffect } from "react";
// import { UserCompType } from "../UserCompContext";
import { UserType } from "../UserContext";
import { decode } from "base-64";
import axios from "axios";

const UserComp = ({ item }) => {
  const { userId, setUserId } = useContext(UserType);
  
  const [requestSent, setRequestSent] = useState(false);
  const sendFollow = async (currentUserCompId, selectedUserCompId) => {
    const data = {
      currentUserCompId : currentUserCompId,
      selectedUserCompId : selectedUserCompId
    }
    try {
      const response = await fetch("http://192.168.29.251:3000/follow", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ currentUserCompId, selectedUserCompId }),
      });

      if (response.ok) {
        setRequestSent(true);
      } 
    } catch (error) {
      console.log("error message", error);
    }
  };

  const handleUnfollow = async (targetId) => {
    try {
      const response = await fetch("http://192.168.29.251:3000/Users/unfollow", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          loggedInUserId: userId,
          targetUserId: targetId,
        }),
      });

      if(response.ok){
          setRequestSent(false);
          console.log("unfollowed successfully")
      }
    } catch (error) {
      console.log("Error", error);
    }
  };
  // useEffect(() => {
  //   // Reset the requestSent state whenever the UserCompId or item prop changes
  //   setRequestSent(false);
  // }, [UserCompId, item]);
  return (
    <View>
      <View style={{ flexDirection: "row", alignItems: "center", gap: 10 }}>
        <Image
          style={{
            width: 40,
            height: 40,
            borderRadius: 20,
            resizeMode: "contain",
          }}
          source={{
            uri: "https://cdn-icons-png.flaticon.com/128/149/149071.png",
          }}
        />

        <Text style={{ fontSize: 15, fontWeight: "500", flex: 1 }}>
          {item?.name}
        </Text>

        {requestSent || item?.followers?.includes(userId) ? (
          <Pressable
            onPress={() => handleUnfollow(item?._id)}
            style={{
              borderColor: "#D0D0D0",
              borderWidth: 1,
              padding: 10,
              marginLeft: 10,
              width: 100,
              borderRadius: 8,
            }}
          >
            <Text
              style={{ textAlign: "center", fontSize: 15, fontWeight: "bold" }}
            >
              Following
            </Text>
          </Pressable>
        ) : (
          <Pressable
            onPress={() => sendFollow(userId, item._id)}
            style={{
              borderColor: "#D0D0D0",
              borderWidth: 1,
              padding: 10,
              marginLeft: 10,
              width: 100,
              borderRadius: 8,
            }}
          >
            <Text
              style={{ textAlign: "center", fontSize: 15, fontWeight: "bold" }}
            >
              Follow
            </Text>
          </Pressable>
        )}
      </View>
    </View>
  );
};

export default UserComp;

const styles = StyleSheet.create({});
