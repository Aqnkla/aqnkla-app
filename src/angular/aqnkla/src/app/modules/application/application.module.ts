import { DisplayService } from './services/display/display.service';
import { CommonModule } from '@angular/common';
import { SideComponent } from './components/side-menu/side-component/side.component';
import { ApplicationRoutesModule } from './application.routing';
import { NgModule } from '@angular/core';
import { RootComponent } from './components/root-component/root.component';
import { GroupMenuComponent } from './components/side-menu/group-menu/group-menu.component';
import { ItemMenuComponent } from './components/side-menu/item-menu/item-menu.component';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { DarkSwitchComponent } from './components/side-menu/dark-switch/dark-switch.component';

@NgModule({
  imports: [
    ApplicationRoutesModule,
    CommonModule,
    MatSlideToggleModule
  ],
  declarations: [
    RootComponent,
    SideComponent,
    GroupMenuComponent,
    ItemMenuComponent,
    PageNotFoundComponent,
    DarkSwitchComponent
  ],
  providers: [
    DisplayService
  ]
})
export class ApplicationModule { }
