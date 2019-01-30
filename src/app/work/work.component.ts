import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-work',
  templateUrl: './work.component.html',
  styleUrls: ['./work.component.css']
})
export class WorkComponent implements OnInit {

  youtube_links = ['https://www.youtube.com/embed?v=TRJWYBEa7AA',
                   'https://www.youtube.com/embed?v=0HOEoieMauo',
                   'https://www.youtube.com/embed?v=SrjE_M1KveQ'];

  photo_links = [1,2,3,4,5];

  getlink(link){
      let url: SafeResourceUrl = this._sanitizer.bypassSecurityTrustResourceUrl(link);
      return url;
  }

  constructor(private _sanitizer: DomSanitizer) { }

  ngOnInit() {
  }

}
