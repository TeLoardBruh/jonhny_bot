import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ChatDailogPageRoutingModule } from './chat-dailog-routing.module';

import { ChatDailogPage } from './chat-dailog.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ChatDailogPageRoutingModule
  ],
  declarations: [ChatDailogPage]
})
export class ChatDailogPageModule {}
