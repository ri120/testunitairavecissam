import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { DepartementService } from '../../services/departement.service';
import { Departementdto } from '../../modeles/departementdto';

@Component({
  selector: 'app-gestioncomponent',
  templateUrl: './gestioncomponent.component.html',
  styleUrls: ['./gestioncomponent.component.css']
})
export class GestioncomponentComponent implements OnInit {
  dpts!: Departementdto[];
  depadd: Departementdto = new Departementdto();
  depedit: Departementdto = new Departementdto();
  updateDep: Departementdto | any = new Departementdto();
  showAlert: boolean = false; // Add a flag to control the alert visibility

  @ViewChild('closeModalBtn') closeModalBtn!: ElementRef;
  @ViewChild('editModalBtn') editModalBtn!: ElementRef;

  constructor(private servdpt: DepartementService) { }

  ngOnInit(): void {
    this.updateDep.id = 0;
    this.updateDep.responsable = "";
    this.updateDep.nom = "";
    this.getdptlist();
  }

  getdptlist() {
    this.servdpt.getList().subscribe({
      next: (data) => {
        this.dpts = data;
        console.log("departements =", JSON.stringify(this.dpts));
      },
      error: console.log,
    });
  }

  adddept() {
    this.servdpt.adddept(this.depadd).subscribe({
      next: (data) => {
        console.log(data);
        this.showAlert = true; // Show the success alert
        setTimeout(() => this.showAlert = false, 5000); // Hide the alert after 5 seconds
        this.closeModalBtn.nativeElement.click(); // Close the modal
        this.getdptlist(); // Refresh the department list
      },
      error: console.log,
    });
  }

  deletedp(id: number) {
    this.servdpt.deldep(id).subscribe({
      next: (data) => {
       
        this.getdptlist();
      },
      error: console.log,
    });
  }

  editdept() {
    this.servdpt.updatedpt(this.updateDep).subscribe({
      next: (data) => {
    
        this.showAlert=true;  
        setTimeout(() => this.showAlert = false, 5000);
        this.editModalBtn.nativeElement.click(); // Close edit modal
        this.getdptlist(); // Refresh the department list after update
      },
      error: console.error,
    });
  }

  allocateDep(item: Departementdto) {
    this.updateDep = item;
  }
}
