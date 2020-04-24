import { Component, OnInit, Pipe } from '@angular/core';
import { FetchPhotoService } from '../fetch-photo.service';
import { pluck } from 'rxjs/operators';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css'],
})
export class DisplayComponent implements OnInit {
  url = '';
  constructor(private photosService: FetchPhotoService) {}

  ngOnInit(): void {
    this.fetchFoto();
  }
  onClick() {
    this.fetchFoto();
  }

  fetchFoto() {
    this.photosService.getPhoto().subscribe((response) => {
      this.url = response.urls.regular;
    });
  }
}
