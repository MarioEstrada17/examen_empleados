import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent {

  items: MenuItem[] | undefined;
  data: any

  constructor(
    private router: Router
  ) {
    this.configMenu();
    this.data = JSON.parse(String(localStorage.getItem('USERSESIONBAL')))
  }

  configMenu(): void {
    this.items = [
      {
        label: 'Home',
        icon: 'pi pi-home',
        command: () => {this.goToRoute('home')}
      },
      {
        label: 'Áreas',
        icon: 'pi pi-database',
        command: () => {this.goToRoute('areas')}
      },
      {
        label: 'Empleados',
        icon: 'pi pi-users',
        command: () => {this.goToRoute('empleados')}
      },
    ]
  }
  goToRoute(route: string): void {
    this.router.navigate([`/${route}`]);
  }
}
