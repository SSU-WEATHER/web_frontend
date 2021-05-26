import useMedia from './useMedia.mjs';

export default function useIsDesktop () {
  return useMedia('(min-width: 1200px)');
}