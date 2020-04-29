import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../../store/app.reducers';

import { Usuario } from '../../models/usuario.model';
import { cargarUsuarios } from '../../store/actions/usuarios.actions';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styles: [
  ]
})
export class ListaComponent implements OnInit {

  usuarios: Usuario[] = [];
  loading: boolean = false;
  error: any;

  constructor(
    private store: Store<AppState>
    // public usuarioService: UsuarioService
  ) { }

  ngOnInit(): void {
    this.store.select('usuarios').subscribe(({ users, loading, error }) => {
      this.usuarios = users;
      this.loading = loading;
      this.error = error;
    });

    this.store.dispatch(cargarUsuarios());
    // this.usuarioService.getUser()
    //   .subscribe(users => {
    //     console.log(users);
    //     this.usuarios = users;
    //   });
  }

}
