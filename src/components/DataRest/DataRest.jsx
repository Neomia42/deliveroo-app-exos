import "./DataRest.css";
import { useState, useEffect } from "react";
import axios from "axios";
// import RestoInfos from "../components/RestoInfos";
import CategoriesMenu from "../CategoriesMenu/CategoriesMenu";
import { Audio } from "react-loader-spinner";
import Header from "../Header/Header";

const DataRest = () => {
  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(
        "https://site--backend-deliveroo--jmytcnlt7m5p.code.run/"
      );
      //   console.log(response.data);
      setData(response.data);
      setIsLoading(false);
    };

    fetchData();
  }, []);

  return isLoading ? (
    <div className="loader-container">
      <Audio
        height="30"
        width="80"
        radius="9"
        color="#00BFFF"
        ariaLabel="loading"
        wrapperStyle
        wrapperClass
      />
      {""}
      <p>En cours de chargement...</p>
    </div>
  ) : (
    <>
      {/* {console.log("Data:", data)} */}

      <Header
        name={data.restaurant.name}
        description={data.restaurant.description}
        img={data.restaurant.picture}
      />

      <CategoriesMenu categories={data.categories} />
    </>
  );
};

export default DataRest;
