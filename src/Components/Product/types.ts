import { ActionType } from "../../globalTypes";

export interface ProductProps{
    itemName: string;
  price: number;
  quantity: number;
  itemURL: string;
  dispatch: React.Dispatch<ActionType>;
  id: number,
}