import type {Directive} from 'vue'

export const vScrollable: Directive = {
  mounted(element) {
    element.addEventListener('wheel', (e: WheelEvent) => {
      e.stopPropagation()
    })
  },
}

// import {handleError, type Directive} from 'vue'

// export const vScrollable: Directive = {
//   mounted(element, binding) {
//     const stopPropagaton = (e: WheelEvent) => {
//       e.stopPropagation();
//       binding.value?.(e);
//     }
//     element.__scrollHandler__ = handleError
//     element.addEventListener('wheel', stopPropagaton);
//   },

//   unmounted(element) {
//     element.removeEventListener('wheel', element.__scrollHandler__);
//   }
// }