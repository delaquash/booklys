import Featured from "../Components/Featured";
import Featuredproperty from "../Components/Featuredproperty";
import Header from "../Components/Header";
import MailList from "../Components/MailList";
import Navbar from "../Components/Navbar";
import PropertyList from "../Components/PropertyList";
import "../Styles/Home.css";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Header type={""} />
      <div className="homeContainer">
        <Featured />
        <h1 className="homeTitle">Browse by property Type</h1>
        <PropertyList />
        <h1 className="homeTitle">Home guest love.</h1>
        <Featuredproperty />
        <MailList />
      </div>
    </div>
  );
};

export default Home;
