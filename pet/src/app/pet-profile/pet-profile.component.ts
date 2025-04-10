import { Component } from '@angular/core';
import { signal } from '@angular/core';

@Component({
  selector: 'app-pet-profile',
  standalone: true,
  imports: [],
  templateUrl: './pet-profile.component.html',
  styleUrl: './pet-profile.component.scss'
})

export class PetProfileComponent {
  name = signal('Pidgey');
  bounty = signal(100000);
  //petname = input<string>()

  moods: string[] = ["hungry", "angry", "curious", "hyper", "tired", "lazy"];
  currentMood = signal('');
  
  getRandomMood():void{
    const index = Math.floor(Math.random()*this.moods.length)
    this.currentMood.set(this.moods[index]); 
  }
}
