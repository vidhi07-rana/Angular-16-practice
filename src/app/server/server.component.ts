import { Component } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styles:[`
    
      .Online{
        color: white
      }
    `]

})
export class ServerComponent {
severid:number=10;
serverStatus:string= "Offline "

constructor(){
  this.serverStatus = Math.random() < 0.5 ? 'Online' : 'Offline' 
}

getServerStatus(){
 
  return this.serverStatus
}
getColor(){
 return  this.serverStatus === 'Online'? 'green': 'red'
}
}
