import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  public nomeDaVariavel: any;
  public pessoa = {
    id: 1,
    nome: 'Gustavo',
    sobrenome: 'Tomaz',
    idade: 22,
    gostoMusical: 'Rap'
  }

  public listaAlunos: any = []

  constructor() {
    this.nomeDaVariavel = "Objeto em ts";
    this.pessoa.gostoMusical = "Pagode";

    console.log(this.pessoa);
  }

  public acrescentaIdade() {
    this.pessoa.idade += 1;
  }

  public subtraiIdade() {
    this.pessoa.idade -= 1;
  }

  public addAluno(nome: String, sobrenome: String, idade: number, gostoMusical: String) {
    this.listaAlunos.push(
      {
        nome: nome,
        sobrenome: sobrenome,
        idade: idade,
        gostoMusical: gostoMusical
      }
    )
    this.printaListaAlunos();
  }

  public printaListaAlunos() {
  this.listaAlunos.forEach((element:any) => {
    if (element.idade < 25){
      console.log(element)
    }
  });
  }
}
