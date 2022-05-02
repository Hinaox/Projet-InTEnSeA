import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SousMenuAttentionComponent } from './sous-menu-attention.component';

describe('SousMenuAttentionComponent', () => {
  let component: SousMenuAttentionComponent;
  let fixture: ComponentFixture<SousMenuAttentionComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ SousMenuAttentionComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SousMenuAttentionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
