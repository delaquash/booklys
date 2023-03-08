import "../Styles/SearchItem.css";

const SearchItem = () => {
  return (
    <div className="searchItem">
      <img
        src="https://cf.bstatic.com/xdata/images/city/max500/957801.webp?k=a969e39bcd40cdcc21786ba92826063e3cb09bf307bcfeac2aa392b838e9b7a5&o="
        alt=""
        className="sImg"
      />
      <div className="iDesc">
        <h1 className="siTitle">Tower Street Apartment</h1>
        <span className="siDistance">500m from center</span>
        <span className="siTaxiOp">Free airport taxi</span>
        <span className="siSubtitle">
          Studio Apartment with Air Conditioning
        </span>
        <span className="siFeatures">
          Entire Studio-1 bathroom-21m Full bed
        </span>
        <span className="siCancelOp">Free Cancellation</span>
        <span className="isCanOpSubtitle">
          You can cancel later, so take this great offer today
        </span>
      </div>
      <div className="siDetails">
        <div className="siRatings">
          <span>Excellent</span>
          <button>8.9</button>
        </div>
        <div className="siDetails">
          <span className="siPrice">$120</span>
          <span className="siTaxiOp">Include taxes and fee</span>
          <button className="siCheckButton">Check Availabilty</button>
        </div>
      </div>
    </div>
  );
};

export default SearchItem;
