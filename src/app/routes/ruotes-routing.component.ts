import { NgModule } from "@angular/core";
import { RouterModule, Routes } from '@angular/router';
import { CuerpoComponent } from "../cuerpo/cuerpo.component";
import { RoutesComponent } from "./routes.component";

const routes: Routes = [
    // { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: '', component: RoutesComponent },
    { path: 'cuerpo', component: CuerpoComponent }

];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}