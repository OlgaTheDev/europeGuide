import { NgModule } from "@angular/core";
import { RouterModule, Routes } from '@angular/router';
import { CountriesComponent } from "./countries/countries.component";
import { CountryDetailsComponent } from "./countries/country-details/country-details.component";
import { StartComponent } from "./countries/start/start.component";

const routes: Routes = [
    { path: '/countries', component: CountriesComponent, children: [
        {path: '', component: StartComponent, pathMatch: 'full'},
        {path: ':name', component: CountryDetailsComponent}]
    },
    { path: '', redirectTo: '/countries', pathMatch: 'full' },
    { path: '**', redirectTo: '/countries'},
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })

export class AppRoutingModule {}