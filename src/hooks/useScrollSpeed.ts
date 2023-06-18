import React, { useLayoutEffect } from 'react';

/**
 * Makes the scroll speed of the given element a ratio of the speed of the reference element if given, otherwise the document.
 */
export const UseScrollSpeed: (
  ratio: number,
  ref: React.RefObject<HTMLElement>,
  referenceRef?: React.RefObject<HTMLElement>,
) => void = (ratio, ref, referenceRef) => {
  useLayoutEffect(() => {
    // ref.current is null when the component is not yet mounted
    if (!ref?.current) return;
    // if referenceRef exists then use it, otherwise use document
    const reference = referenceRef?.current ?? document;
    // same but get the actual Element
    const refElement = referenceRef?.current ?? document.documentElement;
    // scroll the ref element by the ratio of the scroll speed of the reference element
    const handleScroll = () => {
      const { scrollTop } = refElement;
      ref.current!.scrollTo(0, scrollTop * ratio);
    };
    reference.addEventListener('scroll', handleScroll);

    //cleanup function
    return () => {
      reference.removeEventListener('scroll', handleScroll);
    };
  }, [ratio, ref, referenceRef]);
};
