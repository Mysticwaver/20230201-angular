import { ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';

import { SearchBoxComponent } from './search-box.component';

fdescribe('SearchBoxComponent', () => {
  let component: SearchBoxComponent;
  let fixture: ComponentFixture<SearchBoxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SearchBoxComponent],
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should work with searching [BAD TEST]', fakeAsync(() => {
    component.search.subscribe((value) => {
      expect(value).toBe('hello')
    })

    component.handleInput({ target: { value: 'hello' } } as any);
    tick(300);
  }))

  // Cool test: (so much better)
  it('should work when input typed "something"" emitting search event', (done) => {
    fixture.detectChanges()
    fakeAsync(() => {
      const input = fixture.nativeElement.querySelector('input');
      input.value = 'something'

      component.search.subscribe((value) => {
        expect(value).toBe('something')
        done();
      })
      input.dispatchEvent(new Event('input'));
      tick(300);
    })()
  })

  it('should work with debounce 300ms', (done) => {
    fixture.detectChanges()
    fakeAsync(() => {
      const input = fixture.nativeElement.querySelector('input');


      component.search.subscribe((value) => {
        expect(value).toBe('some')
        done();
      })

      input.value = 's'
      input.dispatchEvent(new Event('input'));
      input.value = 'so'
      input.dispatchEvent(new Event('input'));
      // tick(300); upływ 300ms - jeśli bęzie pomiędzy to test się wykolei.
      input.value = 'som'
      input.dispatchEvent(new Event('input'));
      input.value = 'some'
      input.dispatchEvent(new Event('input'));
      tick(300);
    })()
  })
});