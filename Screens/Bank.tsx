import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";

import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParams } from "../App";

type Props = NativeStackScreenProps<RootStackParams, "Bank">;

const Bank: React.FC<Props> = ({ route }) => {
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image
          source={{ uri: route.params.bankData.url }}
          style={styles.image}
        />
      </View>
      <Text style={styles.bankName}>{route.params.bankData.bankName}</Text>
      <Text style={styles.description}>
        {route.params.bankData.description}
      </Text>
      <View style={styles.textContainer}>
        <Text style={styles.age}>
          {route.params.bankData.age} años en servicio
        </Text>
        <Text style={styles.lorem}>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rerum
          molestias iusto cum inventore iure repellendus, ea libero dicta
          laudantium id molestiae consequatur explicabo quidem error ipsa
          doloremque nemo. Neque, officia
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 16,
  },
  imageContainer: {
    overflow: "hidden",
    flexDirection: "row",
    justifyContent: "center",
    alignContent: "center",
  },
  image: {
    borderRadius: 120,
    padding: 12,
    resizeMode: "contain",
    width: 200,
    height: 200,
  },
  bankName: {
    marginTop: 12,
    fontSize: 24,
    textAlign: "center",
    fontWeight: "600",
  },
  description: {
    fontSize: 12,
    textAlign: "center",
  },
  textContainer: {
    marginVertical: 24,
  },
  age: {
    marginBottom: 12,
  },
  lorem: {},
});

export default Bank;
