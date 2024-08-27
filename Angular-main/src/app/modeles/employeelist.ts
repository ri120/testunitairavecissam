import { Adresse } from "./adresse";
import { Competencesdto } from "./competencesdto";
import { Departementdto } from "./departementdto";
import { LabelValu } from "./label-valu";

export class Employeelist {
    id!:number;
    fullname!:string;
    img!:string;
    age!:number;
    dateRecrutement!:Date;
    departement!:Departementdto;
    addresse!:Adresse ;
    competencs!:Competencesdto[];
}
