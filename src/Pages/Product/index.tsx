import { useParams } from "react-router-dom"
import { ButtonCTA } from "../../Components/ButtonCTA"
import { ItemInterface, PageProps } from "../../globalTypes"

export const Product: React.FC<PageProps> = ({ state, dispatch }): JSX.Element => {
  const { title } = useParams()
  const { items } = state
  const item: ItemInterface = items.find(index => index.itemName.trim() === title?.trim()) as ItemInterface

  // useEffect(() => {
  //   window.scrollTo(0, 0)
  // }, [searching])

  return(
    <section className="Detail">
      <article className="Detail__thumbnail">
        <img src={item.itemURL} alt="" />
      </article>

      <article className="Detail__info">
        <div className="Detail__info--header">
          <h2>{item.itemName}</h2>
          <ButtonCTA
            ItemId={item.id}
            dispatch={dispatch}
            added={item.added}
          />
        </div>

        <div className="Detail__info--meta">
          <span className="Detail__price">ZAR{item.price}</span>
        </div>

        <p className="Detail__info--description">
          {item.itemDescription}
        </p>
      </article>
    </section>
  )
}