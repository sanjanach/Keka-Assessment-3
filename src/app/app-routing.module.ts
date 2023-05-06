import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChatListComponent } from './chat-list/chat-list.component';
import { ChatSelectedComponent } from './chat-selected/chat-selected.component';


const routes: Routes = [
  { path: '', redirectTo: 'chats', pathMatch: 'full' },
  // {path: 'chats', component:ChatListComponent},
  // {path:'chats/:id', component:ChatSelectedComponent}
  { path: 'chats', component: ChatListComponent, children:[
      {path: ':id', component: ChatSelectedComponent}
  ] },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }