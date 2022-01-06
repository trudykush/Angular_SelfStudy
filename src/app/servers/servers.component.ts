import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

    serverId = 12;
    serverStatus = 'Offline';

  getServerStatus() {
    return this.serverStatus;
  }
}
