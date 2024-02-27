import { loadRemoteModule } from '@angular-architects/module-federation';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// const MFE_APP_URL = "http://localhost:4300/remoteEntry.js";
const MFE_APP_URL = "https://mfe-app-one.vercel.app/remoteEntry.js";

const routes: Routes = [
  {
    path: '',
    redirectTo: '/counter', pathMatch: 'full'
  },
  {
    path: 'counter',
    loadChildren: () => loadRemoteModule({
        type: "module",
        remoteEntry: MFE_APP_URL,
        exposedModule: "./CounterModule",
      }).then(m => m.CounterModule).catch(err => console.log(err))
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
