import Featured from "../Components/Featured";
import Header from "../Components/Header";
import Navbar from "../Components/Navbar";
import "../Styles/Home.css";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Header type={""} />
      <div className="homeContainer">
        <Featured />
        <h1 className="homeTitle">Browse by property Type</h1>
      </div>
    </div>
  );
};

export default Home;
