import { Component, EventEmitter, Input,Output } from '@angular/core';
import { CommonModule } from '@angular/common'; 
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

  //@Input() childtitle!:string//You can use the non-null assertion operator ! to tell TypeScript that you are sure this property will be assigned before it is used.
  // @Input() d2!:any
  @Output() customeve =new EventEmitter()

  message:string="passed to parent"
  today:string="today we did bowling"
  location:string=""

  passtoParent(){
    this.customeve.emit(this.location)
    console.log("header clicked")
  }
  
updatemessage(e:any){
  this.message=e.target.value
}


myFun(e:any){
    this.location=e.target.value
}

// below is part2 method #3
power:string="gum-gum"


}
