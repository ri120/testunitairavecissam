import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Competencesdto  } from '../modeles/competencesdto';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class CompetencesdtoService {
  baseurlcp :string = environment.baseurl +"/competence"
    constructor(private http:HttpClient) { }
    getcpList(): Observable<Competencesdto[]> {
      return this.http.get<Competencesdto[]>(`${this.baseurlcp}/listerr`)
      .pipe(
        map((response:any) => response as Competencesdto[])
      );  
      
    }
    addcpt(cpt:Competencesdto):Observable<Competencesdto> {
      return this.http.post<Competencesdto>(`${this.baseurlcp}/ajout-comp`,cpt)
      .pipe(
        map((response:any) => response as Competencesdto)
      );  
  
  }
  updatecpt(cpt:Competencesdto):Observable<Competencesdto> {
   
    return this.http.post<Competencesdto>(`${this.baseurlcp}/update-comp`,cpt)
    .pipe(
      map((response:any) => response as Competencesdto)
    );  
}
delcpt(id: any): Observable<any> {
  return this.http.delete(`${this.baseurlcp}/delete/${id}`);
}
}