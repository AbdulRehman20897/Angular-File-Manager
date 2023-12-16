// src/app/file-manager/file-manager-item.component.ts
import { Component, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Folder } from '../model/folder.model';

@Component({
  selector: 'app-file-manager-item',
  templateUrl: './file-manager-item.component.html',
  styleUrls: ['./file-manager-item.component.scss']
})
export class FileManagerItemComponent {
  @Input() folder!: Folder;
  newFolderForm: FormGroup;
  showCreateFolderForm = false;

  constructor(private fb: FormBuilder) {
    this.newFolderForm = this.fb.group({
      newFolderName: ['', Validators.required]
    });
  }

  toggleFolder(folder: Folder) {
    folder.isOpen = !folder.isOpen;
  }

  createFolder(parentFolder: Folder) {
    if (this.newFolderForm.valid) {
      const newFolder: Folder = {
        id: Math.floor(Math.random() * 1000),
        name: this.newFolderForm.value.newFolderName,
        children: [],
        isOpen: true
      };

      if (!parentFolder.children) {
        parentFolder.children = [];
      }
      parentFolder.children.push(newFolder);

      // Reset the form after creating a folder
      this.newFolderForm.reset();
      this.showCreateFolderForm = false;
    }
  }

  openCreateFolderForm() {
    this.showCreateFolderForm = true;
  }

  closeCreateFolderForm() {
    this.showCreateFolderForm = false;
  }
}
