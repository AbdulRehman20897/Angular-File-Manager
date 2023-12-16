// src/app/file-manager/file-manager.component.ts
import { Component, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Folder } from '../model/folder.model';

@Component({
  selector: 'app-file-manager',
  templateUrl: './file-manager.component.html',
  styleUrls: ['./file-manager.component.scss']
})
export class FileManagerComponent {
  @Input() rootFolder: Folder | undefined;
  rootFolderForm: FormGroup;
  showCreateFolderForm: boolean = false; // Manage the form state here

  constructor(private fb: FormBuilder) {
    this.rootFolderForm = this.fb.group({
      newFolderName: ['', Validators.required]
    });
  }

  toggleFolder(folder: Folder) {
    folder.isOpen = !folder.isOpen;
  }

  openCreateFolderForm() {
    this.showCreateFolderForm = true;
  }

  closeCreateFolderForm() {
    this.showCreateFolderForm = false;
  }

  createFolder(parentFolder: Folder) {
    if (this.rootFolderForm.valid) {
      const newFolder: Folder = {
        id: Math.floor(Math.random() * 1000),
        name: this.rootFolderForm.value.newFolderName,
        children: [],
        isOpen: true
      };

      if (!parentFolder.children) {
        parentFolder.children = [];
      }
      parentFolder.children.push(newFolder);

      // Reset the form after creating a folder
      this.rootFolderForm.reset();

      // Close the create folder form
      this.closeCreateFolderForm();
    }
  }
}
