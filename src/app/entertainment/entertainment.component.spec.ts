import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EntertainmentComponent } from './entertainment.component';
import { EasyTest, easyTest } from 'ngx-easy-test';

describe('EntertainmentComponent', () => {
  type Context  = EasyTest<EntertainmentComponent>;

  easyTest(EntertainmentComponent);

  it('should get the sectionTitle', () => {
    expect(this.query('sectionTitle')).toContainText('Movies');
  });
});
