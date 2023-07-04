import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ImageBackground,
} from "react-native";
import React, { useState, useEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import * as Font from "expo-font";
import {
  BannerAd,
  BannerAdSize,
  InterstitialAd,
  MaxAdContentRating,
} from "react-native-google-mobile-ads";

import bookDataList from "../Component/db/book_Data1";

const CountDracula2 = () => {
  const navigation = useNavigation();
  const [bookData, setBookData] = useState(bookDataList);

  const [fontLoaded, setFontLoaded] = useState(false);

  const adUnitId = "ca-app-pub-2105686220682378/8694296243";
  const interstitial = InterstitialAd.createForAdRequest(adUnitId, {
    requestNonPersonalizedAdsOnly: true,
    keywords: ["fashion", "clothing"],
    maxAdContentRating: MaxAdContentRating.G,
    tagForChildDirectedTreatment: true, // Set child-directed targeting
  });

  useEffect(() => {
    async function loadFont() {
      await Font.loadAsync({
        solimanLifi: require("../assets/font/SolaimanLipi_22-02-2012.ttf"),
      });
      setFontLoaded(true);
    }
    loadFont();
  }, []);

  const handleTouchableOpacityPress = async (
    desciption,
    selector,
    writer,
    title
  ) => {
    try {
      await interstitial.load();
      await interstitial.show();
      navigation.navigate("DetalseData", {
        desciption,
        selector,
        writer,
        title,
      });
    } catch (error) {
      console.log("Interstitial ad error:", error);
      navigation.navigate("DetalseData", {
        desciption,
        selector,
        writer,
        title,
      });
    }
  };

  return (
    <ImageBackground
      source={require("../assets/background_image.png")}
      style={styles.app_bg}
    >
      <ScrollView>
        <View style={styles.Container}>
          {bookData.map((chapter) => {
            const { title, writer, desciption, selector, id } = chapter;
            return (
              <TouchableOpacity
                key={id}
                style={styles.chapterName}
                onPress={() =>
                  handleTouchableOpacityPress(
                    desciption,
                    selector,
                    writer,
                    title
                  )
                }
              >
                <Text
                  style={[
                    styles.chapterText,
                    fontLoaded && { fontFamily: "solimanLifi" },
                  ]}
                >
                  {title}
                </Text>
              </TouchableOpacity>
            );
          })}
        </View>
        <Text style={styles.grs}></Text>
        <BannerAd
          unitId="ca-app-pub-2105686220682378/8068292475"
          size={BannerAdSize.ANCHORED_ADAPTIVE_BANNER}
          requestOptions={{
            requestNonPersonalizedAdsOnly: true,
            tagForChildDirectedTreatment: true, // Set child-directed targeting
          }}
        />
      </ScrollView>
    </ImageBackground>
  );
};

export default CountDracula2;

const styles = StyleSheet.create({
  app_bg: {
    display: "flex",
    height: "100%",
    width: "100%",
  },
  Container: {
    width: "100%",
    marginTop: 15,
  },
  chapterName: {
    backgroundColor: "#476f78",
    borderRadius: 10,
    margin: 10,
  },
  chapterText: {
    fontSize: 22,
    padding: 10,
    color: "#fff",
  },
  grs: {
    marginVertical: 5,
  },
});
