import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { CompetencesdtoService } from '../../services/competencesdto.service';
import { Competencesdto} from '../../modeles/competencesdto';

@Component({
  selector: 'app-competencesdto',
  templateUrl: './competencesdto.component.html',
  styleUrl: './competencesdto.component.css'
})
export class CompetencesdtoComponent implements OnInit {
  cpts!:Competencesdto[];
  comadd:Competencesdto=new Competencesdto
  updateCep:Competencesdto=new Competencesdto
  @ViewChild('closeModalBtn') closeModalBtn!: ElementRef;
  @ViewChild('editModalBtn') editModalBtn!: ElementRef;
  
  constructor(private servcpt:CompetencesdtoService) { }
  ngOnInit(): void {
   this.getcptlist()
  }
  getcptlist() {
    this.servcpt.getcpList().subscribe({
      next: (data) => {
        this.cpts = data;
        
      },
      error: console.log,
    });
  }
  addcpt() {
    this.servcpt.addcpt(this.comadd).subscribe({
      next: (data) => {
        console.log(data);
        this.closeModalBtn.nativeElement.click(); // Close the modal
        this.getcptlist(); // Refresh the department list
      },
      error: console.log,
    });
  }
  deletecp(id: number) {
    this.servcpt.delcpt(id).subscribe({
      next: (data) => {
       
        this.getcptlist();
      },
      error: console.log,
    });
  }
  updatecpt() {
    this.servcpt.updatecpt(this.updateCep).subscribe({
      next: (data) => {
        this.editModalBtn.nativeElement.click(); // Close edit modal
        this.getcptlist(); // Refresh the department list after update
      },
      error: console.error,
    });
  }
  allocatecpt(item:Competencesdto){
    this.updateCep = item;
  }
}
