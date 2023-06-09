import { Animation } from '@ionic/angular';

export const logo1 = (animation: Animation, element: Element) => {
  animation.addElement(element)
    .duration(1500)
    .easing('ease-in-out')
    .fromTo('transform', 'translateY(-100vh)', 'translateY(0)')
    .fromTo('opacity', 0, 1);
};

export const logo2 = (animation: Animation, element: Element) => {
  animation.addElement(element)
    .duration(1500)
    .iterations(Infinity)
    .keyframes([
      { offset: 0, transform: 'scale(1)', opacity: 1 },
      { offset: 0.5, transform: 'scale(1.2)', opacity: 0.7 },
      { offset: 1, transform: 'scale(1)', opacity: 1 },
    ]);
};

export default { logo1, logo2 };
