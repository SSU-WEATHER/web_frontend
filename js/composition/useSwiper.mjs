const { ref, computed, onMounted } = Vue;

export default function useSwiper () {
  const slideContainer = ref(null);
  const slideWrapper = ref(null);
  const slideItems = ref([]);

  const swipeIndex = ref(0);
  const swipeStyle = computed(() => {
    return {
      transform: `translate3d(${swipeIndex.value * -100}%, 0, 0)`
    }
  });

  function registerSlideItem (el, index) {
    slideItems.value[index] = el;
  }

  function makeSlideItemClass (className, index) {
    return {[className]: index === swipeIndex.value};
  }

  function goSlide (index) {
    if (index > -1 && index < slideItems.value.length) {
      swipeIndex.value = index;
    }
  }

  onMounted(() => {
    const hammer = new Hammer(slideContainer.value);
    hammer.get('swipe').set({
      velocity: 0.3,
      direction: Hammer.DIRECTION_HORIZONTAL
    });
    hammer.on('swipe', function (e) {
      switch (e.direction) {
        case Hammer.DIRECTION_RIGHT:
          goSlide(swipeIndex.value - 1);
        break;
        case Hammer.DIRECTION_LEFT:
          goSlide(swipeIndex.value + 1);
        break;
      }
    })
  });

  return {
    slideContainer,
    slideWrapper,
    registerSlideItem,
    makeSlideItemClass,
    swipeStyle,
    goSlide
  };
}