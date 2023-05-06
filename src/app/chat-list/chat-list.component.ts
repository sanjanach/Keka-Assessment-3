import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { ApiService } from '../api.service';
import { Group } from '../groups';

@Component({
  selector: 'app-chat-list',
  templateUrl: './chat-list.component.html',
  styleUrls: ['./chat-list.component.css']
})
export class ChatListComponent implements OnInit {

  
  public chatGroups: Group[] = []
  searchTerm: string = '';

  constructor(private api: ApiService){}

  ngOnInit(){
    this.api.getData().subscribe((data) =>
      this.chatGroups = data  
    )
    
  }

  createGroup(){
    let groupName = window.prompt('Enter Group Name ')
    if (groupName !== null && groupName !== '') {
      let newGroup: Group = {
        id: this.chatGroups.length + 1,
        name: groupName,
        message: '',
        text: undefined
      };
      this.chatGroups.push(newGroup);
    }
  }


}
