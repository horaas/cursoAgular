import { NgModule } from "@angular/core";
import { RouterModule, Routes } from '@angular/router';
import { CuerpoComponent } from "../cuerpo/cuerpo.component";
import { RoutesComponent } from "./routes.component";

const routes: Routes = [
    { path: '', component: RoutesComponent, pathMatch: 'full' },
    { path: 'cuerpo', component: CuerpoComponent },
    { path: '**', redirectTo: '', pathMatch: 'full' },

];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}