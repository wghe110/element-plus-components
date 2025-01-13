export const getWidthHeightFn = (url) => new Promise((resolve, reject) => {
  const img = new Image();
  img.src = url;
  img.onload = () => {
    resolve({
      img,
      width: img.width,
      height: img.height,
    });
  };
});

const W = 120;
const H = 160;
const computedWHFn = ({ width, height }) => {
  let sx = 0;
  let sy = 0;
  let sWidth = width;
  let sHeight = height;

  const per = width / height;
  if (per > 0.75) {
    // 过宽
    sWidth = Math.floor(height * (W / H));
    sx = Math.floor((width - sWidth) / 2);
  } else {
    // 过高
    sHeight = Math.floor(width * (H / W));
    sy = Math.floor((height - sHeight) / 2);
  }

  return {
    sx,
    sy,
    sWidth,
    sHeight,
  };
};

export const drawCanvasFn = (url) => new Promise((resolve, reject) => {
  getWidthHeightFn(url).then(({ img, width, height }) => {
    const {
      sx,
      sy,
      sWidth,
      sHeight,
    } = computedWHFn({ width, height });

    const canvas = document.createElement('canvas');
    canvas.width = W;
    canvas.height = H;
    const ctx = canvas.getContext('2d');
    ctx.drawImage(img, sx, sy, sWidth, sHeight, 0, 0, W, H);

    const base64Url = canvas.toDataURL();
    resolve(base64Url);
  });
});
