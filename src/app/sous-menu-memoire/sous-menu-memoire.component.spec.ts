import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SousMenuMemoireComponent } from './sous-menu-memoire.component';

describe('SousMenuMemoireComponent', () => {
  let component: SousMenuMemoireComponent;
  let fixture: ComponentFixture<SousMenuMemoireComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ SousMenuMemoireComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SousMenuMemoireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
