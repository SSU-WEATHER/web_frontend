const { ref, onMounted } = Vue;

export default function useMedia(mediaQuery) {
  const mediaValue = ref(!!window.matchMedia(mediaQuery).matches);
  onMounted(() => {
    const mediaQueryList = window.matchMedia(mediaQuery);
    mediaQueryList.addEventListener('change', event => {
      mediaValue.value = !!event.matches;
    });
  });
  return mediaValue;
}