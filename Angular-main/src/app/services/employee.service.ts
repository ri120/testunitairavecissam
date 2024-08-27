import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { map, Observable } from 'rxjs';
import { HttpClient, HttpEvent, HttpParams, HttpRequest } from '@angular/common/http';
import { Employee } from '../modeles/employee';
import { LabelValu } from '../modeles/label-valu';
import { Employeelist } from '../modeles/employeelist';
import { formatDate } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  
  baseurlemp :string = environment.baseurl +"/employe"
  // baseurlemp :string ="http://localhost:8080/api/v1/employee"
    constructor(private http:HttpClient) { }
    getemList(): Observable<Employee[]> {
      return this.http.get<Employee[]>(`${this.baseurlemp}/lister`)
      .pipe(
        map((response:any) => response as Employee[])
      );  
      
    }
    addemp(emp:Employee):Observable<Employee> {
      return this.http.post<Employee>(`${this.baseurlemp}/saveemp`,emp)
      .pipe(
        map((response:any) => response as Employee)
      );  
  
  }
  
  updatemp(emp:Employee):Observable<Employee> {
    console.log("department from service:"+JSON.stringify(emp));
    return this.http.post<Employee>(`${this.baseurlemp}/updateemp`,emp)
    .pipe(
      map((response:any) => response as Employee)
    );  
  
  }
    
  updateempp(emp:Employee):Observable<Employee> {
    console.log("department from service:"+JSON.stringify(emp));
    return this.http.post<Employee>(`${this.baseurlemp}/updateemp`,emp)
    .pipe(
      map((response:any) => response as Employee)
    );  
  
  }
  findbyid(id: number): Observable<Employee> {
    return this.http.get<Employee>(`${this.baseurlemp}/findbyid/${id}`);
  }
  
  delemp(id: any): Observable<any> {
    return this.http.delete(`${this.baseurlemp}/deleteemp/${id}`);
  }
  getServiceseListDto(): Observable<LabelValu[]> {
    return this.http.get<LabelValu[]>(`http://localhost:8090/api/v1/competence/listerServicesdto`)
    .pipe(
      map((response:any) => response as LabelValu[])
    );
  }
  getemListe(): Observable<Employeelist[]> {
    return this.http.get<Employeelist[]>(`${this.baseurlemp}/listallemp`)
    .pipe(
      map((response:any) => response as Employeelist[])
    );  
    
  }
  uploadartImage(id:number,image:File): Observable<HttpEvent<{}>> {
    const formData:FormData=new FormData();
    formData.append(`image`,image)
    let url=this.baseurlemp+"/uploadImage/"+id;
    const req=new HttpRequest('POST',url,formData,{reportProgress:true,responseType:'text'})
    return this.http.request(req);
  }

  findembyid(id: number): Observable<Employeelist> {
    return this.http.get<Employeelist>(`${this.baseurlemp}/findbyid/${id}`);
  }
  findembyName(key: string): Observable<Employeelist[]> {
    return this.http.get<Employeelist[]>(`${this.baseurlemp}/lister/${key}`);
  }
 /* findembyDate(startDate:Date, endDate:Date): Observable<Employeelist[]> {
    return this.http.get<Employeelist[]>(`${this.baseurlemp}/findbydate`);
  }*/
    findByDate(startDate: Date, endDate: Date): Observable<Employeelist[]> {
      const formattedStartDate = formatDate(startDate, 'yyyy-MM-dd', 'en-US');
      const formattedEndDate = formatDate(endDate, 'yyyy-MM-dd', 'en-US');
  
      const params = new HttpParams()
        .set('startDate', formattedStartDate)
        .set('endDate', formattedEndDate);
  
      return this.http.get<Employeelist[]>(`${this.baseurlemp}/findbydate`, { params });
    }
}
