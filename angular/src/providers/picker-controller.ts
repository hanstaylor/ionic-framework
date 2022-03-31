import { Injectable } from '@angular/core';
import { PickerOptions, pickerController } from '@nfdoom/ionic-core';

import { OverlayBaseController } from '../util/overlay';

@Injectable({
  providedIn: 'root',
})
export class PickerController extends OverlayBaseController<PickerOptions, HTMLIonPickerElement> {
  constructor() {
    super(pickerController);
  }
}
