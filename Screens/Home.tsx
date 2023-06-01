import { useEffect, useState } from "react";

import { ScrollView, Text, StyleSheet } from "react-native";
import BankList from "../Components/Banks/BankList";

import LoadingScreen from "../Components/ScreenLoader/LoadingScreen";

const Home = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [bankData, setBankData] = useState([]);

  useEffect(() => {
    setIsLoading(true);
    const getBankData = async () => {
      const response = await fetch(
        "https://dev.obtenmas.com/catom/api/challenge/banks" //This must be an env variable
      );
      const responseData = await response.json();

      setBankData(responseData);
      setIsLoading(false);
    };

    getBankData();
  }, []);

  if (isLoading) {
    return <LoadingScreen />;
  }

  return (
    <ScrollView style={styles.container}>
      <Text> Escoge el banco de tu preferecia para ver más detalles</Text>
      <BankList bankData={bankData} />
    </ScrollView>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    margin: 16,
  },
});
