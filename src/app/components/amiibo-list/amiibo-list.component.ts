import { Component, OnInit } from '@angular/core';
// import 'rxjs/Rx';

import { Amiibo } from '../../models/amiibo.model';
import { AmiiboService } from '../../services/amiibo.service';

@Component({
  selector: 'app-amiibo-list',
  templateUrl: './amiibo-list.component.html',
  styleUrls: ['./amiibo-list.component.scss']
})
export class AmiiboListComponent implements OnInit {

  public amiibos = [];
  public serieImage = '';

  constructor(private amiiboService: AmiiboService) { }

  ngOnInit() {

    this.amiiboService.getAmiibos()
      .subscribe(data => { this.amiibos.push(data); },
                 null,
                 () => { this.amiibos = this.amiibos[0]; });
  }

  setOwn(amiibo: any) {
    this.amiiboService.setOwn(amiibo._id)
     .subscribe(null, null, () => amiibo.own = !amiibo.own);
  }

  getImageSerie(serie: string): string {
    switch (serie) {
      case 'Super Mario': return 'SM';
      case '30th Anniversary - Mario': return 'SM30A';
      case 'Super Mario Odyssey': return 'SMO';
      case 'Super Smash Bros': return 'SSB';
      case 'Yoshi\'s Woolly World': return 'YWW';
      case 'Animal Crossing': return 'AC';
      case 'The Legend of Zelda: Breath of the Wild': return 'TLFZBOTW';
      case 'Shovel Knight': return 'SK';
      case '30th Anniversary - The Legend of Zelda': return 'TLOZ30A';
      case 'Skylanders SuperChargers': return 'SSC';
      case 'Fire Emblem': return 'FE';
      case 'Splatoon': return 'S';
      case 'Chibi-Robo': return 'CHR';
      case 'Kirby': return 'K';
      case 'The Legend of Zelda': return 'TLOZ';
      case 'Metroid': return 'M';
      case 'Pikmin': return 'P';
    }
  }
}
