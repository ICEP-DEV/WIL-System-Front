import { NgModule } from "@angular/core";
import { RouterModule,Routes } from "@angular/router";
import { FormsComponent } from "./forms/forms.component";
import {InternlifeComponent} from "./internlife/internlife.component";
import { MainComponent } from "./main/main.component";
import { LoginComponent } from "./components/login/login.component";
//import { SidenavComponent } from "./sidenav/sidenav.component";




const routes: Routes = [
   {path:"" ,component: LoginComponent},
   // {path:"Login" ,component: MainComponent},
    //{path:"Login" ,component: SidenavComponent},
    
    
    {path:"WIL Registration" ,component: FormsComponent},
    {path:"internlife" ,component: InternlifeComponent},
    
    
]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule{}