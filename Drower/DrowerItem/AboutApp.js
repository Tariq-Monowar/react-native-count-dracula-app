import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  ScrollView,
} from "react-native";
import React, { useEffect, useState } from "react";
import * as Font from "expo-font";

const AboutApp = () => {
  const [fontLoaded, setFontLoaded] = useState(false);

  useEffect(() => {
    async function loadFont() {
      await Font.loadAsync({
        kalpurush: require("../../assets/font/kalpurush.ttf"),
      });
      setFontLoaded(true);
    }
    loadFont();
  }, []);
  return (
    <ImageBackground
      source={require("../../assets/background_image_desc.png")}
      style={styles.app_bg}
    >
      {fontLoaded && (
        <ScrollView style={styles.book_Writer}>
          <Text style={[styles.book_Writer_Desc, { fontFamily: "kalpurush" }]}>
            {`ট্রান্সিলভানিয়ার অভিজাত এক ব্যক্তি বাড়ি কিনতে চান লন্ডনে। সেই সংক্রান্ত কাজে সেখানে পাঠানো হলো তরুণ জোনাথন হারকারকে। কিন্তু যাত্রাপথেই সে বুঝতে পারলো কিছু একটা ঠিক নেই। কাউন্ট ড্রাকুলার নাম শুনে কেন ভয় পাচ্ছে ওই অঞ্চলের মানুষজন? সবই কি ইউরোপের পিছিয়ে থাকা একটা অঞ্চলের মানুষের কুসংস্কার? নাকি আসলেই অদ্ভুত কিছু রয়েছে? পুরো অঞ্চলকে গ্রাস করে আছে একটি অতিপ্রাকৃত ছায়া! কিছু বোঝার আগেই ফাঁদে জড়িয়ে পড়লো জোনাথন। ইংল্যান্ডে কি আর ফেরা হবে তার?\n\n ওদিকে জোনাথনের প্রেমিকা মিনা ম্যুরে, তার বান্ধবী লুসি ওয়েস্টেনরা, ডাক্তার সেওয়ার্ড, আর্থার হোমউড, আমেরিকান পর্যটক কুইন্সি পি. মরিস, ভ্যান হেলসিং... সবাই নিজের অজান্তেই জড়িয়ে পড়লো এক ভয়ানক জালে। সেই অতিপ্রাকৃত ছায়া উঠে এসেছে ইংল্যান্ডের বুকে। রক্তপিশাচদেরকে কি থামাতে পারবে ওরা?\n\nজানতে পড়ুন ব্রাম স্টোকারের কালজয়ী উপন্যাস 'ড্রাকুলা'।\n\n পৃথিবীর সবচেয়ে সফলতম পিশাচ কাহিনির প্রথম পূর্ণাঙ্গ বাংলা অনুবাদ।`}
          </Text>
        </ScrollView>
      )}
    </ImageBackground>
  );
};

export default AboutApp;

const styles = StyleSheet.create({
  app_bg: {
    display: "flex",
    height: "100%",
    width: "100%",
  },
  book_Writer_Desc: {
    fontSize: 22,
    lineHeight: 30,
    marginHorizontal: 10,
    marginTop: 18,
    marginBottom: 40,
  },
});
