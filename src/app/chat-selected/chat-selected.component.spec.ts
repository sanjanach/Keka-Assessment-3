import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatSelectedComponent } from './chat-selected.component';

describe('ChatSelectedComponent', () => {
  let component: ChatSelectedComponent;
  let fixture: ComponentFixture<ChatSelectedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChatSelectedComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChatSelectedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
