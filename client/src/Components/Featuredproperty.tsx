import useFetch from "../Hooks/useFetch";
import "../Styles/FeaturedProperty.css";

interface IData {

}

const Featuredproperty = () => {
  const { data, error, loading } = useFetch(
    "http://localhost:5000/api/v1/hotel?featured=false&limit=2"
  );
  
  return (
    <div className="fp">
      {loading ? (
        "Loading"
      ) : (
        <>
          {data.map((item) => {
            console.log(item);
            <div className="fpitem">
              <img
                className="fpImg"
                src="https://cf.bstatic.com/xdata/images/city/max500/957801.webp?k=a969e39bcd40cdcc21786ba92826063e3cb09bf307bcfeac2aa392b838e9b7a5&o="
                alt=""
              />
              <span className="fpName">{item}</span>
              <span className="fpCity">Nigeria</span>
              <span className="fpPrice">Starting price is 12000usd</span>
              <div className="fpRating">
                <button>8.9</button>
                <span>Excellent</span>
              </div>
            </div>;
          })}
        </>
      )}
    </div>
  );
};

export default Featuredproperty;
