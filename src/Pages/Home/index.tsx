import React from "react";
import { Filter } from "../../Containers/Filter";
import { Item } from "../../Components/Item";
import { Skeleton } from "../../Containers/Skeleton";
import { ActionType, PageProps } from "../../globalTypes";

export const Home: React.FC<PageProps> = ({ state, dispatch, ctx }): JSX.Element => {

  const renderContent = (): JSX.Element => {
    if(state.filteredItems.length){
      return(
        <React.Fragment>
          <Filter 
            dispatch={dispatch as React.Dispatch<ActionType>}
          />
            <h3 className="h3">Feshion</h3>
          <section className="Home__items gradient__bg">
            {state.filteredItems.map(item => (
              <Item 
                key={item.id}
                id={item.id}
                itemName={item.itemName}    
                price={item.price}
                itemDescription={item.itemDescription}
                promoterName={item.promoterName}
                itemURL={item.itemURL}
                dispatch={dispatch as React.Dispatch<ActionType>}
                added={item.added as boolean}
              />
            ))}
          </section>
        </React.Fragment>
      )
    }else{
      if(state.searching){
        return(
          <React.Fragment>
            <Filter
              dispatch={dispatch as React.Dispatch<ActionType>}
            />
            <span className="Home__no-found">No items found</span>
          </React.Fragment>
        )
      }else{
        return(<Skeleton />)
      }
    }
  }

  return(
    <section className="Home">
      {state.error ? (
        <h2>Oops, seems like there was an error. Try later</h2>
      ) : (
        renderContent()
      )}

    </section>
  )
}