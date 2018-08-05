import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ImageService {

  constructor(private httpClient: HttpClient) { }

  private query: string = '&query=';
  private apiKey: string = environment.unsplashApiKey;
  private apiUrl: string = environment.unspashApiUrl;
  private perPage: string = '&per_page=8';
  private orientation: string = '&orientation=landscape';
  private url: string = this.apiUrl + this.apiKey + this.perPage + this.orientation + this.query;

  getImage(query) {
    return this.httpClient.get(this.url + query);
  }
}
