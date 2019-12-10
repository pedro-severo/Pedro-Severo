import { Dish } from "./dish";
import { SaltyDish } from "./saltydish";
import { Dessert } from "./dessert";

export const feijoada: SaltyDish = new SaltyDish(25, 5, ["feijão", "carne de porco", "laranja"], 60);
export const feijaoTropeiro: SaltyDish = new SaltyDish(25, 7, ["feijão", "farinha", "ovo", "torresmo"], 40);
export const pudim: Dessert = new Dessert(5, 10, ["leite", "leite condensado", "açucar"], 40, 20); 
export const mousseDeMaracuja: Dessert = new Dessert(5, 10, ["leite", "maracuja", "açucar"], 30, 20);

export const menu: Dish[] = [feijoada, feijaoTropeiro, pudim, mousseDeMaracuja];

console.log(menu);