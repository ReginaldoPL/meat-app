import { Component, OnInit, Input, ContentChild, AfterContentInit } from '@angular/core';
import {NgModel, FormControlName} from '@angular/forms'

@Component({
  selector: 'mt-input-container',
  templateUrl: './input.component.html'
})
export class InputComponent implements OnInit, AfterContentInit {

  //pra receber valor
  @Input() label: string
  @Input() errorMessage: string
  input: any

  //pra aceitar receber filhos do tipo Model
  @ContentChild(NgModel) model: NgModel
  @ContentChild(FormControlName) control: FormControlName

  constructor() { }

  ngOnInit() {
  }

  ngAfterContentInit(){
    this.input = this.model || this.control
    if(this.input === undefined){
      throw new Error('Esse Componente precisa ser usado com uma diretiva ngModel ou FormcontrolName')
    }

  }
  hasSuccess():boolean{
    return this.input.valid && (this.input.dirty || this.input.touched)
  }
  hasError():boolean{
    return this.input.invalid && (this.input.dirty || this.input.touched)
  }

}
