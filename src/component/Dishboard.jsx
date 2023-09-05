import axios from "axios";
import { useState } from "react";
// import { toastErrorNotify } from "../helper/ToastNotify";
import { useEffect } from "react";
import Cards from "./Cards";

const Dishboard = () => {
  const [cardsData, setCardsData] = useState([]);
  const cardsDataApi = async () => {
    try {
      const { data } = await axios.get(
        "https://33438.fullstack.clarusway.com/api/blogs/"
      );
      setCardsData(data);
    } catch (error) {
      console.log(error);
      alert("axios hatalı");
    }
  };
  useEffect(() => {
    cardsDataApi();
  }, []);
  return <Cards cardsData={cardsData} />;
};

export default Dishboard;
