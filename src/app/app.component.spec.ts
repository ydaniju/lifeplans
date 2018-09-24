import { TestBed, async } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import {
  MatButtonModule,
  MatInputModule,
  MatFormFieldModule,
} from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { SignupComponent } from './signup/signup.component';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        SignupComponent,
      ],
      imports: [
        MatFormFieldModule,
        MatInputModule,
        MatButtonModule,
        FormsModule,
        BrowserAnimationsModule
      ],
    }).compileComponents();
  }));

  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));

  it(`should have as title 'lifeplans'`, async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('lifeplans');
  }));

  it('should render signup button', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('button').textContent).toContain('Signup');
  }));
});
