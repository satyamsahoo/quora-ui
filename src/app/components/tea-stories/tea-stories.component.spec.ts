import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TeaStoriesComponent } from './tea-stories.component';

describe('TeaStoriesComponent', () => {
  let component: TeaStoriesComponent;
  let fixture: ComponentFixture<TeaStoriesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TeaStoriesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TeaStoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
