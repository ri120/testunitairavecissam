import { Component, ElementRef, ViewChild } from '@angular/core';
import { EmployeeService } from '../../services/employee.service';
import { Employee } from '../../modeles/employee';
import { LabelValu } from '../../modeles/label-valu';
import { DepartementService } from '../../services/departement.service';
import { Departementdto } from '../../modeles/departementdto';
import { Adresse } from '../../modeles/adresse';
import { MultiSelect } from 'primeng/multiselect';
import { Employeelist } from '../../modeles/employeelist';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrl: './employee.component.css'
})
export class EmployeeComponent {
  imgUrl:string | ArrayBuffer = 'assets/add.png'
  //| ArrayBuffer = 'assets/img/avatar.png'
  file!: File;

  empl!:Employee[];
  addemp:Employee=new Employee();
  updateemp:Employee=new Employee
  labelValu!:LabelValu[];
  dpts!:Departementdto[];
  empll!:Employeelist[];
  keyvalue!:string;
datesatart!:Date;
dateend!:Date;

 
  @ViewChild('closeModalBtn') closeModalBtn!: ElementRef;
  @ViewChild('editModalBtn') editModalBtn!: ElementRef;

  constructor(private servemp:EmployeeService ,private servdpt:DepartementService) { }
  ngOnInit(): void {
    this.addemp.addrdto=new Adresse();
  
   this.getdptlist()
   this.getvalcolist()
   this.getempliste()
  }
  
 
  async getvalcolist() {
    
    console.log("GET VALCO LIST");
   this.servemp.getServiceseListDto().subscribe({
      next: (data) => {
        console.log("label value servemp"+data);
        this.labelValu = data;
        
      },
      error: console.log,
    });
  }
  async addempl() {
     this.servemp.addemp(this.addemp).subscribe({
      next: (data) => {
        this.closeModalBtn.nativeElement.click(); 
        this.getempliste();
        this.servemp.uploadartImage(data.id, this.file).subscribe(
          val =>  {} , error => { alert('oups')} , () => {

          });

      },
      error: console.log,
    });
  }
  deleteemp(id: number) {
    this.servemp. delemp(id).subscribe({
      next: (data) => {
       
        this.getempliste();
        this.getvalcolist();
      },
      error: console.log,
    });
  }
  updateem() {
    console.log(this.updateemp)
    this.servemp.updatemp(this.updateemp).subscribe({
      next: (data) => {
        this.editModalBtn.nativeElement.click(); 
        this.getempliste(); 
        this.servemp.uploadartImage(data.id, this.file).subscribe(
          val =>  {} , error => { alert('oups')} , () => {

          });
      },
      error: console.error,
    });
  }
  allocateemp(item:Employeelist){
    this.updateemp.id = item.id;
    this.updateemp.age = item.age;

    this.updateemp.addrdto = item.addresse;
    this.updateemp.fullname = item.fullname;
    this.updateemp.img = item.img;
    this.updateemp.dateRecrutement = item.dateRecrutement;
    this.updateemp.iddept = item.departement.id;

    
    console.log("this emp = "+JSON.stringify(this.updateemp));
    console.log("given emp = "+JSON.stringify(item))
  }
  getdptlist() {
    this.servdpt.getList().subscribe({
      next: (data) => {
        this.dpts = data;
      
      },
      error: console.log,
    });
  }
   getempliste() {
 
    this.servemp.getemListe().subscribe({
      next: (data) => {
   
        this.empll = data;
       
        console.log(this.empll)
      },
      error: console.log,
    });
  }

  onFileInput(files: FileList | null): void {
    // alert("1" + JSON.stringify(files))
    if (files) {
      //  alert("2" + JSON.stringify(files))
      this.file = files.item(0) as File;
      if (this.file) {
        const fileReader = new FileReader();
        fileReader.readAsDataURL(this.file);
        fileReader.onload = (event) => {
          if (fileReader.result) {
            this.imgUrl = fileReader.result;
          }
        };
      }
    }
  }
  changeSource(event: any) {
    event.target.src = "assets/add.png";
 
}
findbyname() {
 
  this.servemp.findembyName(this.keyvalue).subscribe({
    next: (data) => {
 
      this.empll = data;
    
      console.log(this.empll)
    },
    error: console.log,
  });
}
findbydate() {
 console.log(this.datesatart,this.dateend)
  this.servemp.findByDate(this.datesatart,this.dateend).subscribe({
    next: (data) => {
 
      this.empll = data;
    console.log(this.datesatart,this.dateend)
      console.log(this.empll)
    },
    error: console.log,
  });
}


}