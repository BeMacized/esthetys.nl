import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CovidOverlayComponent } from './covid-overlay.component';

describe('CovidOverlayComponent', () => {
    let component: CovidOverlayComponent;
    let fixture: ComponentFixture<CovidOverlayComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [CovidOverlayComponent],
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(CovidOverlayComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
