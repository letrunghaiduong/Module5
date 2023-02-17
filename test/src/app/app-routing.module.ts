import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {DanhSachBenhAnComponent} from "./component/danh-sach-benh-an/danh-sach-benh-an.component";
import {SuaBenhAnComponent} from "./component/sua-benh-an/sua-benh-an.component";
import {ThemMoiBenhAnComponent} from "./component/them-moi-benh-an/them-moi-benh-an.component";


const routes: Routes = [
  {path:'',component: DanhSachBenhAnComponent},
  {path:'suaBenhAn/:id',component: SuaBenhAnComponent},
  {path:'create',component: ThemMoiBenhAnComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
