import { Component, OnInit, Input, ContentChild, AfterContentInit} from '@angular/core';
import { NgModel, FormControlName } from '@angular/forms';

@Component({
  selector: 'mt-input-container',
  templateUrl: './input.component.html'
})
export class InputComponent implements OnInit, AfterContentInit {

  @Input() input: any
  @Input() label: string
  @Input() errorMessage: string

  constructor() { }

  @ContentChild(NgModel) model: NgModel //diretiva para form_template
  @ContentChild(FormControlName) control : FormControlName //diretiva para form_react

  ngOnInit() {
  }

  ngAfterContentInit(): void {
      this.input =  this.control
      if(this.input ===undefined){
        throw new Error('Esse componente precisa ser usado com diretiva NgModel ou FormControlName')
      }
  }

  hasSucess():boolean{
    return this.input.valid && (this.input.dirty || this.input.touched)
  }

  hasError():boolean{
    return this.input.invalid && (this.input.dirty || this.input.touched)
  }
}
