// import { Rating } from "../Rating";
import { ButtonCTA } from "../ButtonCTA";
import { ItemProps } from "./types";
import { NavigateFunction, useNavigate } from "react-router-dom";

export const Item: React.FC<ItemProps> = ({ 
  id, 
  itemName,
  price,
  itemDescription,
  promoterName,
  itemURL,
  dispatch,
  added

}): JSX.Element => {
  const navigate: NavigateFunction = useNavigate()
  const handleNavigate = () => {
    dispatch({
      type: "MOVING",
      payload: {current: `/products/${itemName}`, history: window.location.pathname}
    })
    setTimeout(() => {
      window.scrollTo(0, 0)
    }, 0)
    navigate(`/products/${itemName}`)
  }

  return(
    <div className="Item">
      <div className="Item__thumbnail" onClick={handleNavigate}>
        <img src={itemURL} alt={itemName} />
      </div>

      <div className="Item__body">
        <h2 onClick={handleNavigate}>{itemName}</h2>
        <span>ZAR{price}</span>
        <span className="Item__category">{itemDescription}</span>
      </div>

      <div className="Item__footer">{promoterName}
        <ButtonCTA ItemId={id} dispatch={dispatch}/>
      </div>
    </div>
  )
}