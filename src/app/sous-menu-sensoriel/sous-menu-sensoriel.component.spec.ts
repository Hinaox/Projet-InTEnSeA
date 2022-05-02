import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SousMenuSensorielComponent } from './sous-menu-sensoriel.component';

describe('SousMenuSensorielComponent', () => {
  let component: SousMenuSensorielComponent;
  let fixture: ComponentFixture<SousMenuSensorielComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ SousMenuSensorielComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SousMenuSensorielComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
