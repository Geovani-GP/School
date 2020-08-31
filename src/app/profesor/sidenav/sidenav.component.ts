import {Component,
  OnInit,
  OnDestroy,
  Query,
  ChangeDetectorRef,
} from '@angular/core';
import { MediaMatcher } from '@angular/cdk/layout';


@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent implements OnDestroy {

  constructor(changeDetectorRef: ChangeDetectorRef, media: MediaMatcher) {
    this.mobileQuery = media.matchMedia('(max-width:700px');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    // tslint:disable-next-line: deprecation
    this.mobileQuery.addListener(this._mobileQueryListener);
  }
  mobileQuery: MediaQueryList;
  showFiller = false;
  fillerNav = [
    { name: 'Principal', route: 'principal', icon: 'people' },
    { name: 'Materias', route: 'Materia', icon: 'chrome_reader_mode' },
    { name: 'Horarios', route: 'Horario', icon: 'access_alarm' },
  ];

  fillerContent = Array.from({ length: 60 }, () => 'algo');

  // tslint:disable-next-line: variable-name
  private _mobileQueryListener: () => void;
  shouldRun = true;
  ngOnDestroy(): void {
    // tslint:disable-next-line: deprecation
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }
}
