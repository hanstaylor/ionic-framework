import { Injectable } from '@angular/core';
import { LoadingOptions, loadingController } from '@nfdoom/ionic-core';

import { OverlayBaseController } from '../util/overlay';

@Injectable({
  providedIn: 'root',
})
export class LoadingController extends OverlayBaseController<LoadingOptions, HTMLIonLoadingElement> {
  constructor() {
    super(loadingController);
  }
}
