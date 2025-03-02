/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { AveragesTableComponent } from './averages-table.component';

describe('AveragesTableComponent', () => {
  let component: AveragesTableComponent;
  let fixture: ComponentFixture<AveragesTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AveragesTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AveragesTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
