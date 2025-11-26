import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { FaIconComponent } from '@fortawesome/angular-fontawesome';
import { RouterLink } from '@angular/router';
import { MatMenuModule } from '@angular/material/menu';

@Component({
  selector: 'app-header',
  imports: [
    MatMenuModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    FaIconComponent,
    RouterLink,
  ],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {
  faBars = faBars;
  menu: any;
}
