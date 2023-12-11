import {Component, OnInit } from '@angular/core';
import {ApiService} from "../../services/api.service";
import {Hero} from "../../Models/hero";
import {MatTableDataSource} from "@angular/material/table";


@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  heroes: Hero [] = [];
  heroesDataSource: MatTableDataSource<Hero> = new MatTableDataSource<Hero>([]);
  styleType : string
  evolveStr: string
  showString = false
  columnNames: string[] = [
    'name', 'power', 'strength',
    'intelligence', 'stamina',
    'actions'];
  constructor(private apiService: ApiService) {
    apiService.getHeroes().subscribe(data=> {
      this.heroes = data
      this.heroesDataSource.data = data
    })
    this.styleType = this.getRandomColorsClass()
  }

  getValue(hero: Hero, index: number){
    let temp =  hero.stats[index]
  }

  ngOnInit() {
  }

  evolveHero(heroName: string){
    this.showString = false
    let objToSend ={
      heroName: heroName,
      action: "evolve"
    }
    this.apiService.evolveHero(objToSend).subscribe(data=>{
      this.showString = true
      this.heroes.find(x =>x.name == heroName).stats = data.stats;
      this.heroesDataSource.data = this.heroes;
      this.evolveStr = `${data.name} has been updated with Strength: ${data.stats[0].Value} ,
Intelligence: ${data.stats[0].Value} and Stamina: ${data.stats[0].Value}`
    })
  }


  getRandomColorsClass(): string{
    const colorClasses = ['style1', 'style2','style3', 'style4'];
    const rand = Math.floor(Math.random() * colorClasses.length);
    return colorClasses[rand];
  }

}
