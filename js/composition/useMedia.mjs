const { ref, onMounted } = Vue;

export default function useMedia(mediaQuery) {
  const mediaValue = ref(false);
  onMounted(() => {
    const mediaQueryList = window.matchMedia(mediaQuery);
    mediaValue.value = !!mediaQueryList.matches;
    mediaQueryList.addEventListener('change', event => {
      mediaValue.value = !!event.matches;
    });
  });
  return mediaValue;
}