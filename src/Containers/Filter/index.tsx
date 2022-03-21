import React, { useContext } from "react";
import { FilterProps } from "./types";
import { ButtonCategory } from "../../Components/ButtonCategory";
import { Ctx } from "../../Context";

export const Filter: React.FC<FilterProps> = ({ dispatch, isInHeader }): JSX.Element => {
  const state = useContext(Ctx)
  const { categories, filterAt, searching } = state
  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    dispatch({ type: "FILTER", payload: e.target.value })
  }

  return(
    <section className="Filter">
      <select defaultValue={searching ? "All items" : filterAt} className="Filter__dropdown" onChange={handleChange}>
        {categories.map(promoterName => (
          <option value={promoterName} key={promoterName}>
            {promoterName}
          </option>
        ))}
      </select>

      {categories.map(promoterName => (
        <ButtonCategory 
          key={promoterName}
          content={promoterName}
          dispatch={dispatch}
          to={isInHeader ? "/" : ""}
        />
      ))}
    </section>
  )
}