import { Component } from '@angular/core';

@Component({
  selector: 'app-toggle',
  templateUrl: './toggle.component.html',
  styleUrl: './toggle.component.css'
})
export class ToggleComponent {
show : boolean= false
para= ['']
paragraph:string=''
  toggle(){
    this.para.push(this.paragraph)
return this.show = !this.show
  }

 
}
