import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

  allowServerCreation = false;
  serverCreationStatus = "No Server!";

  constructor() {

    setTimeout(() => {
      this.allowServerCreation = true;
    }, 2000);

  }


  ngOnInit(): void {
  }

    serverId = 12;
    serverStatus = 'Offline';

  getServerStatus() {
    return this.serverStatus;
  }

  onServerCreation() {
    this.serverCreationStatus = "Server was created!";
  }

}
