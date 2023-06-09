import {
  AfterViewInit, Component, ElementRef, OnInit, ViewChild,
} from '@angular/core';
import { AnimationController, Animation } from '@ionic/angular';
import { logoAnimations } from 'src/app/shared';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.page.html',
  styleUrls: ['./loader.page.scss'],
  })
export class LoaderPage implements OnInit, AfterViewInit {
  animation1!: Animation;

  animation2!: Animation;

  @ViewChild('logo') logo!: ElementRef<HTMLDivElement>;

  constructor(private animationCntrl: AnimationController) { }

  ngOnInit() {
  }

  ngAfterViewInit(): void {
    this.animation1 = this.animationCntrl.create('logoAnimation');
    logoAnimations.logo1(this.animation1, this.logo.nativeElement);
    this.animation2 = this.animationCntrl.create('logoAnimation');
    logoAnimations.logo2(this.animation2, this.logo.nativeElement);
  }

  async imageLoaded() {
    await this.animation1.play();
    await this.animation2.play();
  }
}
