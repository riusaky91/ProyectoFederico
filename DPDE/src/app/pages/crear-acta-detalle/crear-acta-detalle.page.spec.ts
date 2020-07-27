import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CrearActaDetallePage } from './crear-acta-detalle.page';

describe('CrearActaDetallePage', () => {
  let component: CrearActaDetallePage;
  let fixture: ComponentFixture<CrearActaDetallePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrearActaDetallePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CrearActaDetallePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
