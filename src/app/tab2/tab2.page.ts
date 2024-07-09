import { Component } from '@angular/core';

var listSymbol = [
  'THB_BTC',
  'THB_ETH',
  'THB_WAN',
  'THB_ADA',
  'THB_OMG',
  'THB_BCH',
  'THB_DOGE',
  'THB_KUB',
 ];

 var listImage = [
  'https://s2.coinmarketcap.com/static/img/coins/200x200/1.png',
  'https://cdn.iconscout.com/icon/free/png-256/ethereum-16-646072.png',
  'https://s2.coinmarketcap.com/static/img/coins/200x200/2606.png',
  'https://s3.cointelegraph.com/storage/uploads/view/a7872fcc56858227ffa183256a5d55e1.png',
  'https://www.coinlore.com/img/omisego.png',
  'https://icons.iconarchive.com/icons/cjdowner/cryptocurrency-flat/256/Bitcoin-Cash-BCH-icon.png',
  'https://cdn.imgbin.com/10/18/23/imgbin-shiba-inu-dogecoin-cryptocurrency-bitcoin-doge-XUfPQzFTVT54pmUkNzmVG5Vgs.jpg',
  'https://cdn.worldvectorlogo.com/logos/bitkub.svg',
 ];

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  coinall : any=[];

  constructor() {
    this.getcoin()
  }

  async getcoin(){ const coins : any[] = await
fetch('https://api.bitkub.com/api/market/ticker')
    .then((response) => response.text())
    .then((result) => {
      var c = JSON.parse(result);
      console.log(c)
      return c;
    })

    var index = 0;
    listSymbol .forEach((e : any)=>{
      coins[e].name = e;
      coins[e].image = listImage
      [index];
      index++;
      this.coinall.push(coins[e])
    });
    console.log(this.coinall)


    console.log(coins)
  }


}
