import { Component, OnInit } from '@angular/core';
import { Fornecedor } from '../fornecedor.model';
import { FornecedorService } from '../fornecedor.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-fornecedor-create',
  templateUrl: './fornecedor-create.component.html',
  styleUrls: ['./fornecedor-create.component.css']
})
export class FornecedorCreateComponent implements OnInit {
 
   fornecedor: Fornecedor = {
     forNomeFantasia: '',
     forCnpj: '',
     forRazaoSocial: '',
     endRua: '',
     endNumero: '',
     endCidade: '',
     endCep: '',
     endEstado: '',
     conCelular: '',
     conTelefoneComercial: '',
     conEmail: ''
   }
 
   //importando productService
   constructor(private fornecedorService: FornecedorService,
     private router: Router) { }
   
   ngOnInit(): void {
     
   }
 
   createFornecedor(): void {
     this.fornecedorService.create(this.fornecedor).subscribe(() => {
       this.fornecedorService.showMessage('Fornecedor criado!')
       this.router.navigate(['/fornecedores'])
     })
   }
 
   cancel(): void {
     this.router.navigate(['/fornecedores'])
   }  
 }
