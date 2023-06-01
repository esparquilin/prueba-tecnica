//Libraries//
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { BankData } from "./Interfaces/Interfaces";
import { Platform, useColorScheme } from "react-native";

//Screens//
import Home from "./Screens/Home";
import Bank from "./Screens/Bank";

import { StatusBar } from "expo-status-bar";
import { colors } from "./utils/colors";

export type RootStackParams = {
  Home: JSX.Element;
  Bank: { bankData: BankData };
};

const Stack = createNativeStackNavigator<RootStackParams>();

export default function App() {
  const scheme = useColorScheme();
  const SO = Platform.OS === "android" ? colors.android : colors.iphone;

  return (
    <>
      <StatusBar style="auto" />
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerStyle: {
              backgroundColor: scheme === "dark" ? SO.dark : SO.light,
            },
            contentStyle: {
              backgroundColor:
                scheme === "dark" ? SO.backgroundDark : SO.backgroundLight,
            },
          }}
        >
          <Stack.Screen
            name="Home"
            component={Home}
            options={{
              title: `${
                Platform.OS === "android"
                  ? "BankApp para Android"
                  : "BankApp para iPhone"
              }`,
            }}
          />
          <Stack.Screen
            name="Bank"
            component={Bank}
            options={{
              title: "Datos del banco",
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}
