import { Component, OnInit } from '@angular/core';

@Component({
  // selector: '[app-servers]',
  selector: '.app-servers',
  // selector: 'app-servers',
  // template: `
  //   <app-server></app-server>
  //   <app-server></app-server>`,
  templateUrl:'./servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
allowServer = true
serverCreateStatus = 'No server was created'
serverName=''
username=''
servers = ['TestServer']
severCreate=false
  constructor() {
    setTimeout(() => {
      this.allowServer=false
    }, 2000);
   }

   onCreateServer(){
    this.severCreate= true
    this.servers.push(this.serverName)
    this.serverCreateStatus = 'sever is created. Name is '+ this.serverName;
   }
   onCreateName(event : Event){
    this.serverName =(<HTMLInputElement>event.target).value
   }

   addName(){
// console.log(this.serverName)
   }
  ngOnInit() {
  }

}
