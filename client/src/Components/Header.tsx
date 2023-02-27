import { useState } from "react";
import {
  faBed,
  faCab,
  faCalendarDays,
  faPerson,
  faPlane,
  faTaxi,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { DateRange } from "react-date-range";
import "react-date-range/dist/styles.css"; // main css file
import "react-date-range/dist/theme/default.css"; // theme css file
import "../Styles/Header.css";
import { format } from "date-fns";

export interface Range {
  startDate: Date | undefined;
  endDate: Date | undefined;
  key: string;
}
export interface RangeKeyDict {
  [key: string]: Range;
}

const Header = () => {
  const [openDate, setOpenDate] = useState(false);
  const [date, setDate] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);
  return (
    <div className="header">
      <div className="headerContainer">
        <div className="headerList">
          <div className="headerListItem active">
            <FontAwesomeIcon icon={faBed} />
            <span>Stays</span>
          </div>
          <div className="headerListItem">
            <FontAwesomeIcon icon={faPlane} />
            <span>Flights</span>
          </div>
          <div className="headerListItem">
            <FontAwesomeIcon icon={faCab} />
            <span>Car Rentals</span>
          </div>
          <div className="headerListItem">
            <FontAwesomeIcon icon={faBed} />
            <span>Attractions</span>
          </div>
          <div className="headerListItem">
            <FontAwesomeIcon icon={faTaxi} />
            <span>Airport taxis</span>
          </div>
        </div>
        <h1 className="headerTitle">A lifetime of discount? Its a genius.</h1>
        <p className="headerDesc">
          Get rewarded for your travels and unlock instant savings of 10% or
          more with a free booking from <strong>Delabookings</strong>
        </p>
        <button className="headerBtn">Sign In / Register</button>
        <div className="headerSearch">
          <div className="headerSearchItem">
            <FontAwesomeIcon icon={faBed} className="headerIcon" />
            <input
              type="text"
              placeholder="Where are you going..."
              className="headerSearchInput"
            />
          </div>
          <div className="headerSearchItem">
            <FontAwesomeIcon icon={faCalendarDays} className="headerIcon" />
            <span
              className="headerSearchText"
              onClick={() => setOpenDate(!openDate)}
            >
              {`${format(date[0].startDate, "dd/MM/yy")}`} to{" "}
              {`${format(date[0].endDate, "dd/MM/yy")}`}
            </span>
            {openDate && (
              <DateRange
                editableDateInputs={true}
                onChange={(item) => setDate([item.selection])}
                moveRangeOnFirstSelection={false}
                ranges={date}
                className="date"
              />
            )}
          </div>
          <div className="headerSearchItem">
            <FontAwesomeIcon icon={faPerson} className="headerIcon" />
            <span className="headerSearchText">2 Adult 2 Children 1 Room</span>
          </div>
          <div className="headerSearchItem">
            <div className="headerBtn">Search</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
