import { useLocation } from "react-router-dom";
import Header from "../Components/Header";
import Navbar from "../Components/Navbar";
import "../Styles/List.css";
import { useState } from "react";
import { format } from "date-fns";

const List = () => {
  const location = useLocation();
  const [destination, setDestination] = useState(location.state.destination);
  const [date, setDate] = useState(location.state.date);
  const [options, setOptions] = useState(location.state.options);
  return (
    <div>
      <Navbar />
      <Header type="list" />
      <div className="listContainer">
        <div className="listWrapper">
          <div className="listSearch">
            <h1 className="isTitle">Search</h1>
            <div className="listItem">
              <label> Destination</label>
              <input type="text" placeholder={destination} />
              <span>
                {`${format(date[0].startDate, "dd/MM/yy")}`} to{" "}
                {`${format(date[0].endDate, "dd/MM/yy")}`}
              </span>
            </div>
            <label>Check-in-date</label>
          </div>
          <div className="listResult"></div>
        </div>
      </div>
    </div>
  );
};

export default List;
