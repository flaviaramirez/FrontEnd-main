import { Component, OnInit } from '@angular/core';
import { Cursos } from 'src/app/model/cursos';
import { CursosService } from 'src/app/service/cursos.service';
import { TokenService } from 'src/app/service/token.service';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css']
})
export class CursosComponent implements OnInit {
  cursos : Cursos[] = [];

  constructor(private cursosS: CursosService, private tokenService: TokenService ) { }
  isLogged = false;

  ngOnInit(): void {
    this.cargarCursos();
    if(this.tokenService.getToken()){
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }
  }

  cargarCursos(): void{
    this.cursosS.lista().subscribe(
      data =>{
        this.cursos=data;
      }
    )
  }

  delete(id?: number){
    if( id != undefined){
      this.cursosS.delete(id).subscribe(
        data => {
          this.cargarCursos();
        }, err => {
          alert("It was not possible to delete");
        }
      )
    }
  }

}
