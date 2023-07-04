import "react-native-gesture-handler";
import React from "react";
import { StyleSheet, Text, View, StatusBar } from "react-native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import CountDracula1 from "./Drower/CountDracula1";
import CustomDrawer from "./Drower/CustomDrawer";
import DetalseData from "./Component/DetalseData";
import BookWriter from "./Drower/DrowerItem/BookWriter";
import AboutApp from "./Drower/DrowerItem/AboutApp";
import CountDracula2 from "./Drower/CountDracula2";

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator drawerContent={(props) => <CustomDrawer {...props} />}>
      <Drawer.Screen
        name="CountDracula1"
        component={CountDracula1}
        options={{
          title: "ড্রাকুলা ব্রাম স্টোকার পর্ব ১",
          headerTitle: "কাউন্ট ড্রাকুলা",
          headerTitleAlign: "center",
          headerTintColor: "#fff",
          headerStyle: {
            backgroundColor: "#476f78",
          },
          drawerActiveBackgroundColor: "#74d0b2",
          drawerInactiveBackgroundColor: "#476f78",
          drawerActiveTintColor: "#fff", // Change the active color here
          drawerInactiveTintColor: "#ffff",
          drawerItemStyle: {
            marginVertical: 5,
            borderRadius: 8,
            backgroundColor: "#476f78",
          },
          drawerLabelStyle: {
            fontSize: 17,
            marginLeft: 10,
            fontWeight: "normal",
          },
        }}
      />

      <Drawer.Screen
        name="CountDracula2"
        component={CountDracula2}
        options={{
          title: "ড্রাকুলা ব্রাম স্টোকার পর্ব ২",
          headerTitle: "কাউন্ট ড্রাকুলা পর্ব ২",
          headerTitleAlign: "center",
          headerTintColor: "#fff",
          headerStyle: {
            backgroundColor: "#476f78",
          },
          drawerActiveBackgroundColor: "#74d0b2",
          drawerInactiveBackgroundColor: "#476f78",
          drawerActiveTintColor: "#fff", // Change the active color here
          drawerInactiveTintColor: "#ffff",
          drawerItemStyle: {
            marginVertical: 5,
            borderRadius: 8,
            backgroundColor: "#476f78",
          },
          drawerLabelStyle: {
            fontSize: 17,
            marginLeft: 10,
            fontWeight: "normal",
          },
        }}
      />
    </Drawer.Navigator>
  );
};

export default function App({ params, route }) {
  const Stack = createNativeStackNavigator();

  return (
    <>
      <StatusBar
        translucent={true}
        barStyle="dark-content"
        backgroundColor={"transparent"}
      />
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="DrawerNavigator"
            component={DrawerNavigator}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="DetalseData"
            component={DetalseData}
            options={({ route }) => ({
              headerTitle: route.params.selector,
              headerTitleAlign: "center",
              headerTintColor: "#fff",
              headerStyle: {
                backgroundColor: "#476f78",
              },
            })}
          />
          <Stack.Screen
            name="BookWriter"
            component={BookWriter}
            options={({ route }) => ({
              headerTitle: "Book Writer",
              headerTitleAlign: "center",
              headerTintColor: "#fff",
              headerStyle: {
                backgroundColor: "#2b5d58eb",
              },
            })}
          />
          <Stack.Screen
            name="AboutApp"
            component={AboutApp}
            options={({ route }) => ({
              headerTitle: "About App",
              headerTitleAlign: "center",
              headerTintColor: "#fff",
              headerStyle: {
                backgroundColor: "#2b5d58eb",
              },
            })}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({});
