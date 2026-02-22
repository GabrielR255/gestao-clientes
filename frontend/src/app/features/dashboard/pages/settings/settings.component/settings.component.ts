import { Component, inject } from '@angular/core';
import { SidebarNav } from '../../../components/sidebarnav/sidebar-nav/sidebar-nav';
import { ReactiveFormsModule,Validators,FormBuilder } from '@angular/forms';
import { UserseditService } from '../../../../services/service-editusers/editusers/usersedit.service';
import { Editusers } from '../../../../../core/models/editusersmodel/editusers';
import { Router } from '@angular/router';

@Component({
  selector: 'app-settings',
  standalone:true,
  imports: [SidebarNav, ReactiveFormsModule],
  templateUrl: './settings.component.html',
  styleUrl: './settings.component.css',
})
export class SettingsComponent {


private fb = inject(FormBuilder)
private editService = inject(UserseditService)
private router = inject(Router)

  feedbackedit: { tipo: 'sucesso' | 'erro', texto: string } | null = null;
  estaCarregando = false;


formconfig = this.fb.group({
    name: ['', [Validators.required, Validators.minLength(3)]],
    email: ['', [Validators.required]],
    password: ['', [Validators.required, Validators.minLength(6)]],
})


  

submit():void{

if(this.formconfig.invalid){
  this.formconfig.markAllAsTouched()
  return
}

console.log(this.formconfig.value)


  this.feedbackedit = null;
    this.estaCarregando = true;

const editusersdate = this.formconfig.value as Editusers

this.editService.usersedit(editusersdate).subscribe({
next: (res) => {

          setTimeout(() => {
          this.router.navigate(['/dashboard']); 
        }, 3000);
      },
      error: (err) => {
       console.error(err)
      }
})



}

}
