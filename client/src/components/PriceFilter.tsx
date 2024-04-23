type FilterProps = {
    selectedPrice?: number,
    onChange : (value? : number) => void;
}

const PriceFilter = ({onChange, selectedPrice}: FilterProps) => {
  return (
    <div>PriceFilter</div>
  )
}

export default PriceFilter