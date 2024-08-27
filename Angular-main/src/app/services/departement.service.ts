import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Departementdto } from '../modeles/departementdto';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DepartementService {
  baseurlemp :string = environment.baseurl +"/departement"
// baseurlemp :string ="http://localhost:8080/api/v1/employee"
  constructor(private http:HttpClient) { }
  getList(): Observable<Departementdto[]> {
    return this.http.get<Departementdto[]>(`${this.baseurlemp}/lister`)
    .pipe(
      map((response:any) => response as Departementdto[])
    );  
    
  }
  adddept(dpt:Departementdto):Observable<Departementdto> {
    return this.http.post<Departementdto>(`${this.baseurlemp}/savedep`,dpt)
    .pipe(
      map((response:any) => response as Departementdto)
    );  

}

updatedpt(dpt:Departementdto):Observable<Departementdto> {
  console.log("department from service:"+JSON.stringify(dpt));
  return this.http.post<Departementdto>(`${this.baseurlemp}/updatedep`,dpt)
  .pipe(
    map((response:any) => response as Departementdto)
  );  

}
findbyid(id: number): Observable<Departementdto> {
  return this.http.get<Departementdto>(`${this.baseurlemp}/findbyid/${id}`);
}

deldep(id: any): Observable<any> {
  return this.http.delete(`${this.baseurlemp}/deletdep/${id}`);
}


}
