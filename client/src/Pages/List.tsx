import axios from "axios";
import { format } from "date-fns";
import { useEffect, useState } from "react";
import { DateRange } from "react-date-range";
import { useLocation } from "react-router-dom";
import Header from "../Components/Header";
import Navbar from "../Components/Navbar";
import SearchItem from "../Components/SearchItem";
import "../Styles/List.css";

// interface IData {
//   id?: string;
//   name: string;
//   address: string;
//   city: string;
//   cheapestPrice: number;
//   desc: string;
//   featured: boolean;
//   photos?: string[];
//   rating: number;
//   rooms: string[];
//   title: string;
//   type: string;
//   distance: string;
//   price?: number;
//   maxPeople?: number;
//   roomNumbers?: number;
// }
const List = () => {
  const location = useLocation();
  const [destination, setDestination] = useState(location.state.destination);
  const [date, setDate] = useState(location.state.date);
  const [openDate, setOpenDate] = useState(false);
  const [data, setData] = useState<string[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  const [options, setOptions] = useState(location.state.options);

  const URL = `http://localhost:5000/api/v1/hotel?city=${destination}`;

  useEffect(() => {
    const resList = async () => {
      const { data } = await axios.get(URL);
      setData(data);
      console.log(data);
    };
  }, []);
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
            </div>
            <div className="listItem">
              <label>Check-in-date</label>
              <span onClick={() => setOpenDate(!openDate)}>
                {`${format(date[0].startDate, "dd/MM/yy")}`} to{" "}
                {`${format(date[0].endDate, "dd/MM/yy")}`}
              </span>
              {openDate && (
                <DateRange
                  ranges={date}
                  minDate={new Date()}
                  onChange={(item) => setDate([item.selection])}
                />
              )}
            </div>
            <div className="listItem">
              <label>Options</label>
              <div className="listOptions">
                <div className="ListOptionItem">
                  <span className="isOptionText">
                    Min Price <small>per night</small>
                  </span>
                  <input type="number" className="ListOptionInput" />
                </div>
                <div className="ListOptionItem">
                  <span className="isOptionText">
                    Min Price <small>per night</small>
                  </span>
                  <input type="number" className="ListOptionInput" />
                </div>
                <div className="ListOptionItem">
                  <span className="isOptionText">
                    Max Price <small>per night</small>
                  </span>
                  <input type="number" className="ListOptionInput" />
                </div>
                <div className="ListOptionItem">
                  <span className="isOptionText">Adult</span>
                  <input
                    min={1}
                    type="number"
                    className="ListOptionInput"
                    placeholder={options.adult}
                  />
                </div>
                <div className="ListOptionItem">
                  <span className="isOptionText">Children</span>
                  <input
                    min={0}
                    type="number"
                    className="ListOptionInput"
                    placeholder={options.children}
                  />
                </div>
                <div className="ListOptionItem">
                  <span className="isOptionText">Room</span>
                  <input
                    min={1}
                    type="number"
                    className="ListOptionInput"
                    placeholder={options.room}
                  />
                </div>
              </div>
            </div>
            <button>Search</button>
          </div>
          <div className="listResult">
            {loading ? (
              "Loading"
            ) : (
              <>
                {data.map((item) => (
                  <SearchItem
                    item={item}
                     key={item.id}
                  />
                ))}
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default List;
