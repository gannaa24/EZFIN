import { Component } from '@angular/core';

@Component({
  selector: 'app-settings',
  imports: [],
  templateUrl: './settings.component.html',
  styleUrl: './settings.component.css'
})
export class SettingsComponent {
  change:boolean = false;
  adjust:boolean = false;
  
  changePass() {
    this.change = true;
    console.log('adjustGoal', this.adjust);
  }
  cancelAdjust() {
    this.change= false;
    console.log('adjustGoal', this.adjust);
  }
  
}
