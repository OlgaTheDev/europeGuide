import { Component, OnInit } from '@angular/core';
import { WikiInfoService } from '../../services/wikiInfo.service';

@Component({
  selector: 'app-start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.scss']
})
export class StartComponent implements OnInit {

  info: string;

  constructor(private infoService: WikiInfoService) { }

  ngOnInit() {
    this.getInfo('europe');
  }

  private getInfo(query:string) {
    this.infoService.getInfo(query)
      .subscribe(
        (data: any) => {
          console.log(data);
          
          this.info = data.extract;
        },
        error => console.log(error)
      )
  }

}
