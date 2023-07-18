import { Component } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'jdng-fe-gc-pruebatecnicapokemon-07-23';
  usuario: any = null;
  user: boolean = false;

  constructor(private UserService: UserService) {}
  //Cambia navbar si hay cuenta logeada
  ngOnInit() {
    this.usuario = this.UserService.getAuth();
    if (this.usuario.currentUser!=null) {
      this.user=true;
    }
  }
  //Comprueba si hay cuenta logeada
  esUsuario() {  
    if (this.usuario.currentUser!=null) {
      this.user=true;
    }else{
      this.user=false;
    }
    return this.user;    
  }
}
