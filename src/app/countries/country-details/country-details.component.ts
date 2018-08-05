import { Component, OnInit } from '@angular/core';
import { ImageService } from '../../services/image.service';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { CountryModel } from './country.model';
import { WikiInfoService } from '../../services/wikiInfo.service';
import { ShortInfoService } from '../../services/shortInfo.service';
import { ShortInfoModel } from './shortInfo.model';

@Component({
  selector: 'app-country-details',
  templateUrl: './country-details.component.html',
  styleUrls: ['./country-details.component.scss']
})
export class CountryDetailsComponent implements OnInit {

  country: CountryModel = {
    name: '', 
    info: '', 
    shortInfo: {
      capital: '', 
      currency: [], 
      flag: '', 
      population: 0, 
      lang: []
    }, 
    images: []
  };
  imagesLoading: boolean = false;
  objectKeys = Object.keys;

  constructor(private imageService: ImageService, 
              private infoService: WikiInfoService,
              private route: ActivatedRoute,
              private shortInfoService: ShortInfoService) { }

  ngOnInit() {
    this.route.paramMap
      .subscribe(
        (params: ParamMap) => {
          const fancyName: string = this.fancyName(params.get('name'), ' ');
          this.country.name = fancyName;
          this.searchImages(fancyName);
          this.getInfo(params.get('name')); 
          this.getShortInfo(fancyName);             
        }
      )
  }
              
  private searchImages(query:string) {
    this.imagesLoading = true;  
    return this.imageService.getImage(query)
      .subscribe(
        (data: any) => {          
          this.country.images = [];  
          data.results.forEach(element => {
            this.country.images.push(element.urls.small)
          });
        },
        error => console.log(error),
        () => {
          this.imagesLoading = false;          
        }
      )
  }

  private getInfo(query: string) {
    return this.infoService.getInfo(query)
      .subscribe(
        (data: any) => {
          this.country.info = data.extract;          
        }
      )
  }

  private getShortInfo(query: string) {
    return this.shortInfoService.getShortInfo(query)
      .subscribe(
        (data: any) => {
          this.country.shortInfo.capital = data[0].capital;
          this.country.shortInfo.currency = [];
          data[0].currencies.forEach(el => {
              this.country.shortInfo.currency.push(el.name);
          })
          this.country.shortInfo.flag = data[0].flag;
          this.country.shortInfo.population = data[0].population;
          this.country.shortInfo.lang = [];
          data[0].languages.forEach(element => {
            this.country.shortInfo.lang.push(element.name)
          });
        },
        error => console.log(error)
      )
  }

  private fancyName(name: string, separator: string) {
    const nameArr = name.split('');
    const newName: string = nameArr.map((char) => {
      if (char === '_') {
        char = separator
      }
      return char
    }).join('');  
    return newName;      
  }



}
