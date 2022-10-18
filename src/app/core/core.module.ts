import { ModuleWithProviders, NgModule } from '@angular/core';
import { FavouriteService, PunkService } from './services';
import { PunkFacadeService } from './services/punk.facade.service';
import { StorageService } from './services/storage.service';

@NgModule()
export class CoreModule {
  public static forRoot(): ModuleWithProviders<CoreModule> {
    return {
      ngModule: CoreModule,
      providers: [
        PunkService,
        PunkFacadeService,
        StorageService,
        FavouriteService,
      ],
    };
  }

  public static forTest(): ModuleWithProviders<CoreModule> {
    return {
      ngModule: CoreModule,
      providers: [
        { provide: PunkService, useValue: { getAll: {} } },
        { provide: PunkFacadeService, useValue: { getAll: {} } },
        { provide: StorageService, useValue: { } },
        { provide: FavouriteService, useValue: { } },
      ],
    };
  }
}
