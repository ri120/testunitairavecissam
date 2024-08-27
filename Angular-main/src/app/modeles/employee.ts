
import { Adresse } from "./adresse";
import { Competencesdto } from "./competencesdto";
import { Departementdto } from "./departementdto";
import { LabelValu } from "./label-valu";

export class Employee {
    id!:number;
    fullname!:string;
    img!:string;
    age!:number;
    dateRecrutement!:Date;
    iddept!:number;
    addrdto:Adresse = new Adresse;
    compts!:Competencesdto[]


}

