import { AnimationEvent, keyframes } from '@angular/animations';
import {
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/animations';

const animationInTime = '0.2s 100ms ease-in';
const animationOutTime = '.6s 100ms ease-out';

const inStyle0 = {opacity: 0 , transform: 'translateX(-100%)', offset: 0};
const inStyle5 = {opacity: .5, transform: 'translateX(15px)',  offset: 0.3};
const inStyle1 = {opacity: 1 , transform: 'translateX(0)',     offset: 1.0}

const outStyle0 = {opacity: 1 , transform: 'translateX(0)',     offset: 0};
const outStyle5 = {opacity: .5, transform: 'translateX(-15px)', offset: 0.7};
const outStyle1 = {opacity: 0 , transform: 'translateX(100%)',  offset: 1.0};

export const InOutAnimation = [
    trigger('inOut', [

        state('hover',   style({
          backgroundColor: '#cfd8dc',
          transform: 'scale(1.1)'
        })),

        transition('* => in', [
          animate(animationInTime, keyframes([
             style(inStyle0),
             style(inStyle5),
             style(inStyle1) 
          ]))
        ]),

        transition('* => out' , [
            animate(animationOutTime, keyframes([
                style(outStyle0),
                style(outStyle5),
                style(outStyle1) 
            ])) 
        ]),

        transition('* => hover', [
          animate('.5s 100ms ease-in-out')
        ])
    ])
];