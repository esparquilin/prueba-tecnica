import {
  View,
  Image,
  Text,
  Pressable,
  StyleSheet,
  useColorScheme,
} from "react-native";

import { useNavigation } from "@react-navigation/native";
import type { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParams } from "../../App";

import { BankData } from "../../Interfaces/Interfaces";

import { itemColors } from "../../utils/colors";

const BankItem = ({ item }: { item: BankData }) => {
  const scheme = useColorScheme();

  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParams>>();

  return (
    <Pressable
      onPress={() => {
        navigation.navigate("Bank", {
          bankData: item,
        });
      }}
    >
      <View
        style={[
          styles.container,
          {
            backgroundColor:
              scheme === "dark"
                ? itemColors.cardDarkTheme
                : itemColors.cardLightTheme,
          },
        ]}
      >
        <View>
          <Image
            style={{
              height: 50,
              width: 50,
              resizeMode: "contain",
            }}
            source={{ uri: item.url }}
          />
        </View>

        <View style={styles.textContainer}>
          <Text
            style={[
              styles.bankName,
              {
                color:
                  scheme === "dark"
                    ? itemColors.textDarkTheme
                    : itemColors.textLightTheme,
              },
            ]}
          >
            {item.bankName}
          </Text>
          <Text
            style={[
              styles.phrase,
              {
                color:
                  scheme === "dark"
                    ? itemColors.textDarkTheme
                    : itemColors.textLightTheme,
              },
            ]}
          >
            {item.description}
          </Text>
        </View>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    gap: 16,
    marginVertical: 6,
    paddingBottom: 12,
    borderTopLeftRadius: 12,
    borderBottomRightRadius: 12,
    overflow: "hidden",
    alignItems: "center",
  },
  textContainer: {
    flex: 1,
  },
  bankName: {
    fontSize: 16,
    fontWeight: "500",
  },
  phrase: {
    fontSize: 12,
  },
});

export default BankItem;
