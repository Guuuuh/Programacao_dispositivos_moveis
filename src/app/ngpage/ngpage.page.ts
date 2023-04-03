import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ngpage',
  templateUrl: './ngpage.page.html',
  styleUrls: ['./ngpage.page.scss'],
})
export class NgpagePage implements OnInit {

  public itens = [
    { codigo: 1, descricao:'feijao', texto:'dsadasdfsaf', value: 1 },
    { codigo: 2, descricao:'arroz', texto:'asdsadsafasfasfsad', value: 1 },
    { codigo: 3, descricao:'macarrao', texto:'adsdsafasf', value: 1 },
  ]

  constructor() { }

  ngOnInit() {
  }

  public addItem(item:any){
    item.value = 2;

  }

  public removeItem(item:any){
    item.value = 1;
  }

  maskText(str: string, limit: number){
    return str.substring(0, limit) + '...';
  }

}
