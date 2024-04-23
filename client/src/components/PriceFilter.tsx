type FilterProps = {
    selectedPrice?: number,
    onChange : (value? : number) => void;
}

const PriceFilter = ({onChange, selectedPrice}: FilterProps) => {
  return (
    <div>
        <h4 className="font-semibold text-sm mb-2">Price Filter</h4>
        <select
        className="w-full rounded-md p-2 border"
            value={selectedPrice}
            onChange={(event)=>onChange(event.target.value ? parseInt(event.target.value ): undefined)}
        >
            <option>Select Max Price</option>
            {[50, 100, 150, 200, 250, 300, 350, 400, 450, 500].map((price)=> (
                <option value={price} key={price}>{price}</option>
            ))}
        </select>
    </div>
  )
}

export default PriceFilter