import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ObservadorDetallePage } from './observador-detalle.page';

describe('ObservadorDetallePage', () => {
  let component: ObservadorDetallePage;
  let fixture: ComponentFixture<ObservadorDetallePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ObservadorDetallePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ObservadorDetallePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
