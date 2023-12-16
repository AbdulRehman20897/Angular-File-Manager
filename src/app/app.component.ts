// src/app/app.component.ts
import { Component } from '@angular/core';
import { Folder } from './model/folder.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  rootFolder: Folder = {
    id: 1,
    name: 'Root',
    children: [],
    isRoot: true,
  };
}
