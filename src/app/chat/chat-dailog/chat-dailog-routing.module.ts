import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ChatDailogPage } from './chat-dailog.page';

const routes: Routes = [
  {
    path: '',
    component: ChatDailogPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ChatDailogPageRoutingModule {}
