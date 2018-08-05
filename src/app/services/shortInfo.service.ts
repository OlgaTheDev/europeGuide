import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class ShortInfoService {

    constructor(private httpClient: HttpClient) {}

    private url: string = environment.restCountriesApiUrl;

    getShortInfo(query: string) {        
        return this.httpClient.get(this.url + query)
    }
}