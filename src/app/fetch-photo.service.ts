import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface UnsplashResponse{
  urls: {
    regular: string;
  }
}

@Injectable({
  providedIn: 'root',
})
export class FetchPhotoService {
  constructor(private httpClient: HttpClient) {}

  getPhoto() {
    return this.httpClient.get<UnsplashResponse>('https://api.unsplash.com/photos/random', {
      headers: {
        Authorization: 'Client-ID XE5pqXmWhX5yBXBbVM-rIpJtX0da3JMcY8RB5cM4HJI',
      },
    });
  }
}
