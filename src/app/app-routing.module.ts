import { NgModule } from "@angular/core";
import { RouterModule,Routes } from "@angular/router";
import { FormsComponent } from "./forms/forms.component";
import {InternlifeComponent} from "./internlife/internlife.component";
import {SidenavComponent} from "./sidenav/sidenav.component";
import { MainComponent } from "./main/main.component";




const routes: Routes = [
    {path:"" ,component: MainComponent},
    
    {path:"WIL Registration" ,component: FormsComponent},
    {path:"internlife" ,component: InternlifeComponent},
    
]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule{}