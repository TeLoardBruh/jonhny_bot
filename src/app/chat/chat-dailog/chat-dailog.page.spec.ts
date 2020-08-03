import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ChatDailogPage } from './chat-dailog.page';

describe('ChatDailogPage', () => {
  let component: ChatDailogPage;
  let fixture: ComponentFixture<ChatDailogPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChatDailogPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ChatDailogPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
