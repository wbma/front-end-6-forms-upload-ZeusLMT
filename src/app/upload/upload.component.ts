import {Component, OnInit} from '@angular/core';
import {MediaService} from '../service/media.service';
import {Media} from '../interface/media';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.scss']
})
export class UploadComponent implements OnInit {

  file: File;
  mediaFile: Media = {
    title: '',
    description: ''
  };


  constructor(public mediaService: MediaService) {
  }

  setFile(evt) {
    console.log(evt.target.files[0]);
    this.file = evt.target.files[0];
  }

  startUpload() {
    const formData = new FormData();
    formData.append('title', this.mediaFile.title);
    formData.append('description', this.mediaFile.description);
    formData.append('file', this.file);
    this.mediaService.upload(formData);
  }

  ngOnInit() {
  }

}
