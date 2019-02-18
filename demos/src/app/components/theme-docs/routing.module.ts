import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Sass, Usage, ColorPalette, ThemeDocs } from './theme';

export const ROUTE_DECLARATIONS = [
  Sass,
  ColorPalette,
  Usage,
  ThemeDocs
];

const ROUTES: Routes = [
  {
    path: '', component: ThemeDocs,
    children: [
      { path: '', redirectTo: 'usage' },
      { path: 'color-palette', component: ColorPalette },
      { path: 'usage', component: Usage },
      { path: 'sass', component: Sass }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(ROUTES)],
  exports: [RouterModule]
})
export class RoutingModule { }
