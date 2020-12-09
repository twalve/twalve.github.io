alert("CHICKEN")


(async () => {
	const fonts = [
		{ family: 'Texta Light', url: '/fonts/texta-light.ttf' },
		{ family: 'Texta Medium', url: '/fonts/texta-medium.ttf' },
		{ family: 'Texta Heavy', url: '/fonts/texta-heavy.ttf' }
	]

  const loadFont = (family, url) => {
		const fontFace = new FontFace(family, `url(${url})`, {})
		document.fonts.add(fontFace)
		return fontFace.load()
	}

  await Promise.all(fonts.map(({family, url}) => loadFont(family, url)))

  const canvas = document.querySelector('canvas')
	const ctx = canvas.getContext('2d')
 
  // document.body.appendChild(canvas)
  
	const resizeCanvas = (ctx, width, height) => {
		ctx.canvas.setAttribute('height', `${Math.round(height * window.devicePixelRatio)}`);
		ctx.canvas.setAttribute('width', `${Math.round(width * window.devicePixelRatio)}`);
		ctx.canvas.style.height = `${height}px`;
		ctx.canvas.style.width = `${width}px`;
		ctx.imageSmoothingEnabled = true;
	}
	const renderText = (ctx, txt, opts) => {
		ctx.save();
		ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
		ctx.textBaseline = 'top';
		ctx.font = `16px ${opts.font}`;
		ctx.fillText(txt, opts.x, opts.y);
		ctx.restore();
	}

  resizeCanvas(ctx, 200, 200);
	renderText(ctx, 'Texta Light', { font: 'Texta Light', x: 0, y: 0 });
	renderText(ctx, 'Texta Medium', { font: 'Texta Medium', x: 0, y: 30 });
	renderText(ctx, 'Texta Heavy', { font: 'Texta Heavy', x: 0, y: 60 });
})();
