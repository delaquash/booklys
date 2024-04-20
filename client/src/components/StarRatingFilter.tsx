type StarRatingProps = {
    SelectedStars: string[];
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const StarRatingFilter = ({SelectedStars, onChange}: StarRatingProps) => {
  return (
    <div className="border-b border-slate-300 pb-5">
        <div className="text-md font-semibold mb-2">Property Rating</div>
        {["5", "4", "3", "2", "1"].map((star)=> (
            <label className="flex items-center space-x-2">
                <input 
                    type="checkbox"
                    className="rounded"
                    value={star}
                    onChange={onChange}
                    checked={SelectedStars.includes(star)}
                />
                <span>{star} Stars</span>
            </label>
        ))}
    </div>
  )
}

export default StarRatingFilter;