import { Component, OnInit } from '@angular/core';

import { Amiibo } from '../../models/amiibo.model';
import { AmiiboService } from '../../services/amiibo.service';

@Component({
  selector: 'app-amiibos-own',
  templateUrl: './amiibos-own.component.html',
  styleUrls: ['./amiibos-own.component.scss']
})
export class AmiibosOwnComponent implements OnInit {

  public owns: Amiibo[] = [];

  constructor(private amiiboService: AmiiboService) { }

  ngOnInit() {
    this.amiiboService.getAmiibosOwn()
      .subscribe((amiibo: Amiibo) => { this.owns.push(amiibo); });
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
