import { hotelFacilities } from "../config/hotel-options-config";

type FacilityRatingProps = {
    selectedHotelFacility: string[];
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const FacilityRatingFilter = ({selectedHotelFacility, onChange}: FacilityRatingProps) => {
  return (
    <div className="border-b border-slate-300 pb-5">
        <div className="text-md font-semibold mb-2">Facility Rating</div>
        {hotelFacilities.map((hotelFacility)=> (
            <label key={hotelFacility} className="flex items-center space-x-2">
                <input 
                    type="checkbox"
                    className="rounded"
                    value={hotelFacility}
                    onChange={onChange}
                    checked={selectedHotelFacility.includes(hotelFacility)}
                />
                <span>{hotelFacility} Stars</span>
            </label>
        ))}
    </div>
  )
}

export default FacilityRatingFilter;