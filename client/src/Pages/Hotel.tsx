import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Header from "../Components/Header";
import Navbar from "../Components/Navbar";
import "../Styles/Hotel.css";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";

const Hotel = () => {
  const photos = [
    {
      src: "https://images.unsplash.com/photo-1522798514-97ceb8c4f1c8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80",
    },
    {
      src: "https://images.unsplash.com/photo-1582719508461-905c673771fd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1025&q=80",
    },
    {
      src: "https://images.unsplash.com/photo-1445019980597-93fa8acb246c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1174&q=80",
    },
    {
      src: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    },
    {
      src: "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    },
    {
      src: "https://images.unsplash.com/photo-1615460549969-36fa19521a4f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80",
    },
  ];
  return (
    <div>
      <Navbar />
      <Header type="list" />
      <div className="hotelContainer">
        <div className="hotelWrapper">
          <h1 className="hotelTitle">Grand Hotel</h1>
          <div className="hotelAddress">
            <FontAwesomeIcon icon={faLocationDot} />
            <span> %6, Eko Hotel and Suite Driveway</span>
          </div>
          <span className="hotelDistance">
            Excellent location - 500m from center
          </span>
          <span className="hotelPriceHighlight">
            Book a stay over $150 at this hotel and get a free taxi ride from
            airport
          </span>
          <div className="hotelImg">
            {photos.map((photo) => (
              <div className="hotelImgWrapper">
                <img src={photo.src} alt="Image" className="hotelImg" />
              </div>
            ))}
          </div>
          <div className="hotelDetails">
            <div className="hotelDetailText">
              <h1 className="hotelTitle">Stay in the heart of Lagos</h1>
              <p className="hotelDesc">
                Eko Hotels & Suites is the most preferred hotel in West Africa,
                and it is all about the right mix! Located in the heart of
                Victoria Island, we offer our clients a perfect blend of
                business & leisure amenities with dining and recreational
                options delicately infused in one amazing space. We crown all
                these with services that meet the highest international
                standards. Overlooking the new Eko Atlantic City and Atlantic
                Ocean, it is just a 10-minute drive to the City Centre and only
                45minutes away from the Airport. Our hotels are designed for
                your comfort and convenience. Your security is our primary
                concern and you will find our customer care second to none.
              </p>
            </div>
            <div className="hotelDetailPrice">
              <h1>Perfect for a 9-night stay.</h1>
              <span>
                Overlooking the Eko Atlantic City and Ocean, it is just a
                10-minute drive to the City Centre and only 45minutes away from
                the Airport.
              </span>
              <h2>
                <b>$945</b> (9 nights)
              </h2>
              <button>Reserve or Book Now</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hotel;
