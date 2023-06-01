import React from "react";
import { View, FlatList, StyleSheet } from "react-native";

import BankItem from "./BankItem";

import { BankListProps, BankData } from "../../Interfaces/Interfaces";

const BankList: React.FunctionComponent<BankListProps> = ({ bankData }) => {
  return (
    <View style={styles.container}>
      <FlatList
        scrollEnabled={false}
        data={bankData}
        keyExtractor={(item) => item.bankName}
        renderItem={({ item }: { item: BankData }) => {
          return <BankItem item={item} />;
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 24,
  },
});

export default BankList;
