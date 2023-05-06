import { SafeKeyedRead } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { ApiService } from '../api.service';
import { Group } from '../groups';

@Component({
  selector: 'app-chat-selected',
  templateUrl: './chat-selected.component.html',
  styleUrls: ['./chat-selected.component.css']
})
export class ChatSelectedComponent implements OnInit {

  public chatGroups: Group[] = []
  chatGroup: Group | undefined;
  id: number | undefined;
  
  constructor(private api: ApiService, private route: ActivatedRoute){}
  
  ngOnInit(){

    this.api.getData().subscribe((data) =>
      this.chatGroups = data
    )

    this.route.paramMap.subscribe(id => {
        id = id
    })
    
    this.api.getData().subscribe((data) =>{
      const selectedChat = data.find(chat => chat.id === this.id);
      console.log(selectedChat)
      if (selectedChat) {
        this.chatGroup = selectedChat;
      }
    })
  }
  

  deleteChat(){
    if (this.chatGroup) {
      const index = this.chatGroups.indexOf(this.chatGroup);
      if (index > -1) {
        console.log('hi')
        this.chatGroups.splice(index, 1);
      }else{

      }
  }else{
  }
}
}
