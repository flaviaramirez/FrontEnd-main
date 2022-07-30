import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Cursos } from 'src/app/model/cursos';
import { CursosService } from 'src/app/service/cursos.service';

@Component({
  selector: 'app-newcursos',
  templateUrl: './newcursos.component.html',
  styleUrls: ['./newcursos.component.css']
})
export class NewcursosComponent implements OnInit {
  nombreC: string;
  descripcionC: string;

  constructor(private cursosS: CursosService, private router: Router) { }

  ngOnInit(): void {
  }

  onCreate(): void{
    const cursos = new Cursos(this.nombreC, this.descripcionC);
    this.cursosS.save(cursos).subscribe(
      data =>{
        alert("The course was added successfully");
        this.router.navigate(['']);
      }, err =>{
        alert("It failed");
        this.router.navigate(['']);
      }
    )
  }

}
