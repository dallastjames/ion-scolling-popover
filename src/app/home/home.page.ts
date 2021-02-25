import { Component } from '@angular/core';
import { PopoverController } from '@ionic/angular';
import { PoppedComponent } from './popped/popped.component';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  constructor(private _pop: PopoverController) {}

  public async pop(ev: any): Promise<void> {
    const popover = await this._pop.create({
      component: PoppedComponent,
      event: ev,
      translucent: true,
    });
    await popover.present();
  }
}
