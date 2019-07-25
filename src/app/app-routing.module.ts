import { AppComponent } from './app.component';
import { ScannerComponent } from './scanner/scanner.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CardComponent } from './card/card.component';

const routes: Routes = [
    {
        path: '',
        component: CardComponent,
    },
    {
        path: 'scanner',
        component: ScannerComponent
    },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
