import { useEffect, useState } from "react";

import { ScrollView, Text, StyleSheet } from "react-native";
import BankList from "../Components/Banks/BankList";

import LoadingScreen from "../Components/ScreenLoader/LoadingScreen";
import { BankData } from "../Interfaces/Interfaces";

const Home = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [bankData, setBankData] = useState([]);

  const [newDataBase, setNewDataBase] = useState("");
  const [dataIsFromDB, setDataIsFromDB] = useState(false);

  useEffect(() => {
    const getBankData = async () => {
      try {
        setIsLoading(true);

        const response = await fetch(
          "https://dev.obtenmas.com/catom/api/challenge/banks" //This must be an env variable
        );
        const responseData = await response.json();

        setBankData(responseData);
        setIsLoading(false);

        const postBankData = async (bankData: any) => {
          try {
            const post = await fetch(
              "https://ejemplo-4103a-default-rtdb.firebaseio.com/.json", //New database
              {
                method: "POST",
                body: JSON.stringify(bankData),
                headers: {
                  "Content-Type": "application/json",
                },
              }
            );
            const responsePost = await post.json();
            setNewDataBase(responsePost.name);
          } catch (error) {
            console.log(error);
          }
        };

        postBankData(responseData);
        setDataIsFromDB(true);
      } catch (error) {
        console.log(error);
      }
    };

    if (!dataIsFromDB) {
      getBankData();
    }

    const getBankDataFromNewDB = async () => {
      try {
        const response = await fetch(
          `https://ejemplo-4103a-default-rtdb.firebaseio.com/${newDataBase}/.json`
        );
        const responseData = await response.json();

        setBankData(responseData);
        setIsLoading(false);
      } catch (error) {
        console.log(error);
      }
    };

    if (newDataBase !== "") {
      getBankDataFromNewDB();
    }
  }, [dataIsFromDB, newDataBase]);

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
