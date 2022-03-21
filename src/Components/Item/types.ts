import React from "react";
import { ActionType } from "../../globalTypes";

export interface ItemProps{
  id: number;
  itemName: string;
  price: number;
  itemDescription: string;
  promoterName: string;
  itemURL: string;
  dispatch: React.Dispatch<ActionType>
  added: boolean
}