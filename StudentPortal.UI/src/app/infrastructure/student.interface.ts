import { Address } from "./address.interface";
import {Gender} from "./gender.interface";
export interface student {
  id:number;
  name:string,
  birthdate:Date,
  email:string,
  contact:string,
  profileImage:string,
  genderId:number,
  address:Address,
  gender:Gender
}
