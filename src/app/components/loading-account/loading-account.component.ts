import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-loading-account',
  templateUrl: './loading-account.component.html',
  styleUrls: ['./loading-account.component.scss'],
})
export class LoadingAccountComponent  implements OnInit {

  dummy = Array(6);
  constructor() { }

  ngOnInit() {}

}
