import { Component, OnInit } from '@angular/core';

@Component({
    moduleId: module.id.toString(),
    selector: 'hpt-login',
    template: require('./login.component.html')
})
export class LoginComponent implements OnInit {
    constructor() { }

    ngOnInit() { }
}