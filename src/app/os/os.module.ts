import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OsRoutingModule } from './os-routing.module';
import { SharedModule } from "../shared/shared.module";
import { ToolbarComponent } from './templates/toolbar/toolbar.component';
import { TemplateComponent } from './templates/template.component';
import { ListagemOsComponent } from './pages/listagem-os/listagem-os.component';
import { DetalhesOsComponent } from './pages/detalhes-os/detalhes-os.component';

@NgModule({
  declarations: [
    ToolbarComponent,
    TemplateComponent,
    ListagemOsComponent,
    DetalhesOsComponent
  ],
  imports: [
    CommonModule,
    OsRoutingModule,
    SharedModule
  ]
})
export class OsModule {
}
