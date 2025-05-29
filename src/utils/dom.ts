const SCALE = 1.4;

export const toBeforeRectScaleSize = (rect: DOMRect): DOMRect => {
  const height = rect.height / SCALE;
  const width = rect.width / SCALE;
  const heightDiff = rect.height - height;
  const widthDiff = rect.width - width;

  return {
    ...rect,
    bottom: rect.bottom - heightDiff / 2,
    height,
    left: rect.left + widthDiff / 2,
    right: rect.right - widthDiff / 2,
    top: rect.top + heightDiff / 2,
    width,
    x: rect.x + widthDiff / 2,
    y: rect.top + heightDiff / 2,
  };
};

export const toAfterRectScaleSize = (rect: DOMRect): DOMRect => {
  const height = rect.height * SCALE;
  const width = rect.width * SCALE;
  const heightDiff = height - rect.height;
  const widthDiff = width - rect.width;

  return {
    ...rect,
    bottom: rect.bottom + heightDiff / 2,
    height,
    left: rect.left - widthDiff / 2,
    right: rect.right + widthDiff / 2,
    top: rect.top - heightDiff / 2,
    width,
    x: rect.x - widthDiff / 2,
    y: rect.top - heightDiff / 2,
  };
};
