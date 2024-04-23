import { hotelTypes } from "../config/hotel-options-config";

type StarRatingProps = {
    selectedHotelTypes: string[];
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const HotelRatingFilter = ({selectedHotelTypes, onChange}: StarRatingProps) => {
  return (
    <div className="border-b border-slate-300 pb-5">
        <div className="text-md font-semibold mb-2"> Rating</div>
        {hotelTypes.map((hotelType)=> (
            <label className="flex items-center space-x-2">
                <input 
                    type="checkbox"
                    className="rounded"
                    value={hotelType}
                    onChange={onChange}
                    checked={selectedHotelTypes.includes(hotelType)}
                />
                <span>{hotelType} Stars</span>
            </label>
        ))}
    </div>
  )
}

export default HotelRatingFilter;