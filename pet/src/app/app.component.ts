import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PetProfileComponent } from "./pet-profile/pet-profile.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, PetProfileComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'pet';
}
