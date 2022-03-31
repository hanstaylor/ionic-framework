import { Injectable } from '@angular/core';
import { AlertOptions, alertController } from '@nfdoom/ionic-core';

import { OverlayBaseController } from '../util/overlay';

@Injectable({
  providedIn: 'root',
})
export class AlertController extends OverlayBaseController<AlertOptions, HTMLIonAlertElement> {
  constructor() {
    super(alertController);
  }
}
