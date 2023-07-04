import { StyleSheet, Text, View, ImageBackground, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import * as Font from 'expo-font';

const BookWriter = () => {
  
  const [fontLoaded, setFontLoaded] = useState(false);

  useEffect(() => {
    async function loadFont() {
      await Font.loadAsync({
        'kalpurush': require('../../assets/font/kalpurush.ttf')
      });
      setFontLoaded(true);
    }
    loadFont();
  }, []);
  return (
    <ImageBackground 
    source={require('../../assets/background_image_desc.png')}
    style={styles.app_bg}
    >
      {
        fontLoaded &&
        <ScrollView style={styles.book_Writer}>
          <Text style={[styles.book_Writer_name, { fontFamily: 'kalpurush' }]}>ব্রাম স্টোকার</Text>
          <Text style={[styles.book_Writer_Desc, { fontFamily: 'kalpurush' }]}>আব্রাহাম ব্রাম স্টোকার (৮ নভেম্বর ১৮৪৭ – ২০ এপ্রিল ১৯১২) আইরিশ উপন্যাসিক এবং গল্পকার। সারা বিশ্বের সাহিত্যপ্রেমী মানুষ তাকে চেনে ড্রাকুলা স্রষ্টা হিসেবে।  ১৮৯৭ সালে প্রকাশিত হয় তার পিশাচ কাহিনী ‘ড্রাকুলা’। মজার ব্যাপার হলো, কাহিনীর প্রধান চরিত্র ড্রাকুলা প্রকৃতপক্ষে একজন খলনায়ক। রক্তচোষা সাহিত্য ছাড়িয়ে স্টোকারের খলনায়ক এখন সাহিত্য জগতের কিংবদন্তি হয়ে আছে। পরবর্তী সময়ে ড্রাকুলাকে নিয়ে অনেক চলচ্চিত্র ও টিভি সিরিজ নির্মাণ করা হয়। তবে ব্রাম স্টোকারের কাহিনী সেগুলোয় অনুসরণ করা হয়নি। কাউন্ট ড্রাকুলা অনেক সাহিত্যবোদ্ধা ও পাঠকের কাছে পিশাচকাহিনীর সেরা চরিত্র। ভয়ঙ্কর অথচ রোমান্টিক এই চরিত্রের মোহে আজও অনেক পাঠক আবিষ্ট। এ কারণে ড্রাকুলা সর্বাধিক পঠিত বইগুলোর একটি। ৬৪ বছর বয়সে ১৯১২ সালে ব্রাম স্টোকার মৃত্যুবরণ করেন।</Text>
        </ScrollView>
      }
    </ImageBackground>
  )
}

export default BookWriter

const styles = StyleSheet.create({
  app_bg:{
    display: 'flex',
    height: "100%",
    width: "100%",
  },
  book_Writer_name:{
    textAlign: 'center',
    fontSize: 25,
    marginTop: 15,
    marginBottom: 20,
    fontWeight: "bold"
  },
  book_Writer_Desc:{
    fontSize: 20,
    lineHeight: 30,
    marginHorizontal: 10,
    marginBottom: 40
  }

})