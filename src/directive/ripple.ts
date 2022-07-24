import type { Directive } from 'vue';

function computeRippleStyles(element, event) {
  const { top, left } = element.getBoundingClientRect();
  const { clientWidth, clientHeight } = element;

  const radius = Math.sqrt(clientWidth ** 2 + clientHeight ** 2) / 2;
  const size = radius * 2;

  const localX = event.clientX - left;
  const localY = event.clientY - top;

  const centerX = (clientWidth - radius * 2) / 2;
  const centerY = (clientHeight - radius * 2) / 2;

  const x = localX - radius;
  const y = localY - radius;

  return { x, y, centerX, centerY, size };
}

function setStyles(element) {
  const { zIndex, position } = window.getComputedStyle(element);

  element.style.overflow = 'hidden';
  element.style.overflowX = 'hidden';
  element.style.overflowY = 'hidden';
  position === 'static' && (element.style.position = 'relative');
  zIndex === 'auto' && (element.style.zIndex = '1');
}

const ANIMATION_DURATION = 250;

function removeRipple() {
  const task = () => {
    const ripples = this.querySelectorAll(`.v-ripple`);
    if (!ripples.length) {
      return;
    }

    const lastRipple = ripples[ripples.length - 1];

    setTimeout(() => {
      lastRipple.style.opacity = `0`;

      setTimeout(() => lastRipple.parentNode?.removeChild(lastRipple), ANIMATION_DURATION);
    }, ANIMATION_DURATION);
  };

  task();
}

function createRipple(event) {
  const _ripple = this._ripple;
  _ripple.removeRipple();

  const task = () => {
    const { x, y, centerX, centerY, size } = computeRippleStyles(this, event);

    const ripple = document.createElement('span');
    ripple.classList.add('v-ripple');
    ripple.style.opacity = `0`;
    ripple.style.transform = `translate(${x}px, ${y}px) scale3d(.3, .3, .3)`;
    ripple.style.width = `${size}px`;
    ripple.style.height = `${size}px`;

    setStyles(this);

    this.appendChild(ripple);

    window.setTimeout(() => {
      ripple.style.transform = `translate(${centerX}px, ${centerY}px) scale3d(1, 1, 1)`;
      ripple.style.opacity = `0.25`;

      setTimeout(() => {
        ripple.style.opacity = `0`;
      }, 250);
    }, 20);
  };

  window.setTimeout(task, 60);
}

const ripple: Directive = {
  mounted(el) {
    el._ripple = {
      tasker: null,
      removeRipple: removeRipple.bind(el),
    };

    el.addEventListener('click', createRipple);
  },
  unmounted(el) {
    el.removeEventListener('click', createRipple);
  },
};

export default ripple;
