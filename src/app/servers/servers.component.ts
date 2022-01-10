import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

  allowServerCreation = false;
  serverCreationStatus = "No Server!";
  serverName = ''
  serverCreated = false;
  servers = ['TestServer', 'DevServer', 'ProdServer']
  isContentShown = false
  currentTime = new Date();
  buttonClickLog = []

  constructor() {

    setTimeout(() => {
      this.allowServerCreation = true;
    }, 2000);

    this.serverStatus = Math.random() > 0.5 ? 'online' : 'offline'

  }
  ngOnInit(): void {
  }

    serverId = 12;
    serverStatus = 'offline';

  getServerStatus() {
    return this.serverStatus;
  }

  onServerCreation() {
    this.serverCreated = true;
    this.servers.push[this.serverName];
    this.serverCreationStatus = 'Server was created and name is ' + this.serverName;
  }

  onUpdateServerName(event: any) {
    console.log(event)
    this.serverName = event.target.value;
  }

  checkServerName() {
    if(this.serverName == '') {
      return false
    } else {
      return true
    }
  }

  getColor() {
    return this.serverStatus === 'offline' ? 'red' : 'green';
  }

  onToggleDetails() {
    this.isContentShown = !this.isContentShown
    this.buttonClickLog.push(new Date())
    console.log(this.buttonClickLog);
  }

}
