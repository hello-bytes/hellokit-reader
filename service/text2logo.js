const defaultSize = 512;
export default {
	generateIconSVG(options) {
		const {
			text = 'AI',
			size = defaultSize,
			bgColor = '#131516',
			radius = 80,
			fontFamily = 'Arial',
			fontWeight = 'normal',
			textColor = '#70e000',
			verticalOffset = 0
		} = options;

		const svgNS = "http://www.w3.org/2000/svg";
		const svg = document.createElementNS(svgNS, "svg");
		svg.setAttribute("viewBox", `0 0 ${size} ${size}`);
		svg.setAttribute("xmlns", svgNS);

		const rect = document.createElementNS(svgNS, "rect");
		rect.setAttribute("width", size);
		rect.setAttribute("height", size);
		rect.setAttribute("fill", bgColor);
		rect.setAttribute("rx", radius);
		rect.setAttribute("ry", radius);
		svg.appendChild(rect);

		const textElement = document.createElementNS(svgNS, "text");
		textElement.setAttribute("x", "50%");
		textElement.setAttribute("y", "50%");
		textElement.setAttribute("dominant-baseline", "central");
		textElement.setAttribute("text-anchor", "middle");
		textElement.setAttribute("font-family", fontFamily);
		textElement.setAttribute("font-weight", fontWeight);
		textElement.setAttribute("fill", textColor);
		textElement.textContent = text;
		svg.appendChild(textElement);

		const adjustTextSizeAndPosition = () => {
			const isAllEnglish = /^[A-Za-z0-9\s]+$/.test(text);
			const charCount = text.length;

			let fontSize;
			if (charCount <= 2) {
				fontSize = size * 0.8;
			} else if (isAllEnglish) {
				fontSize = size * 0.75;
			} else {
				fontSize = size * 0.6;
			}

			textElement.setAttribute("font-size", fontSize);

			const maxWidth = size * 0.95;
			const maxHeight = size * 0.95;
			const scaleFactor = isAllEnglish ? 0.98 : 0.95;

			let iterations = 0;
			const maxIterations = 50;

			while (fontSize > 1 && iterations < maxIterations) {
				const bbox = textElement.getBBox();
				if (bbox.width <= maxWidth && bbox.height <= maxHeight) {
					break;
				}
				fontSize *= scaleFactor;
				textElement.setAttribute("font-size", fontSize);
				iterations++;
			}

			if (verticalOffset !== 0) {
				const offsetPixels = (size * verticalOffset) / 100;
				textElement.setAttribute("dy", `${offsetPixels}`);
			}
		};

		document.body.appendChild(svg);
		adjustTextSizeAndPosition();
		document.body.removeChild(svg);

		const serializer = new XMLSerializer();
		return serializer.serializeToString(svg);
	},

	async svgToPng(svgString, size) {
		return new Promise((resolve, reject) => {
			const canvas = document.createElement('canvas');
			const scale = 4;
			canvas.width = size * scale;
			canvas.height = size * scale;
			const ctx = canvas.getContext('2d');

			ctx.scale(scale, scale);

			const img = new Image();
			img.onload = () => {
				ctx.drawImage(img, 0, 0, size, size);
				canvas.toBlob((blob) => {
					resolve(blob);
				}, 'image/png');
			};
			img.onerror = (err) => {
				reject(err);
			};

			const encodedSvg = encodeURIComponent(svgString);
			img.src = `data:image/svg+xml;charset=utf-8,${encodedSvg}`;
		});
	},

	async createFavicon(svgString,size){
		//const svgString = this.generateIconSVG();
		return new Promise((resolve) => {
		  const img = new Image();
		  img.onload = () => {
			const canvas = document.createElement('canvas');
			canvas.width = size;
			canvas.height = size;
			const ctx = canvas.getContext('2d');
			ctx.drawImage(img, 0, 0, size, size);
			canvas.toBlob((blob) => {
			  resolve(blob);
			});
		  };
		  const encodedSvg = encodeURIComponent(svgString);
		  img.src = `data:image/svg+xml;charset=utf-8,${encodedSvg}`;
		});
	},

	schameList(){
		return [{
			bg: '#1a365d',
			text: '#ffffff',
			name: 'Deep Blue'
		  },
		  {
			bg: '#2D3748',
			text: '#ED8936',
			name: 'Dark Gray & Orange'
		  },
		  {
			bg: '#744210',
			text: '#F6E05E',
			name: 'Brown & Yellow'
		  },
		  {
			bg: '#1A202C',
			text: '#63B3ED',
			name: 'Almost Black & Sky Blue'
		  },
		  {
			bg: '#702459',
			text: '#FBBF24',
			name: 'Purple & Yellow'
		  },
		  {
			bg: '#065F46',
			text: '#6EE7B7',
			name: 'Dark Green & Light Green'
		  },
		  {
			bg: '#3730A3',
			text: '#FCA5A5',
			name: 'Indigo & Light Red'
		  },
		  {
			bg: '#131516',
			text: '#70e000',
			name: 'Black & Neon Green'
		  },
		  {
			bg: '#E53E3E',
			text: '#FFFFFF',
			name: 'Red & White'
		  },
		  {
			bg: '#2B6CB0',
			text: '#BEE3F8',
			name: 'Blue & Light Blue'
		  },
		  {
			bg: '#2D3748',
			text: '#F7FAFC',
			name: 'Dark Gray & Off White'
		  },
		  {
			bg: '#975A16',
			text: '#FEFCBF',
			name: 'Brown & Pale Yellow'
		  },
		  {
			bg: '#276749',
			text: '#C6F6D5',
			name: 'Green & Pale Green'
		  },
		  {
			bg: '#6B46C1',
			text: '#E9D8FD',
			name: 'Purple & Lavender'
		  },
		  {
			bg: '#2C7A7B',
			text: '#81E6D9',
			name: 'Teal & Light Teal'
		  },
		  {
			bg: '#9C4221',
			text: '#FEEBC8',
			name: 'Burnt Orange & Peach'
		  },
		  {
			bg: '#000000',
			text: '#FFA31A',
			name: 'Bold Black & Yellow'
		  }
		];
	},

	exampleList(){
		return [
			// {
			//   options: {
			//     text: 'PH',
			//     size: 512,
			//     bgColor: '#000000',
			//     textColor: '#FFA500',
			//     fontFamily: 'Arial, Arial, sans-serif',
			//     fontWeight: 'normal',
			//     radius: 0
			//   },
			//   title: 'Video Hub Style Part 2'
			// },
			{
			  options: {
				text: 'Y',
				size: 512,
				bgColor: '#FF6600',
				textColor: '#FFFFFF',
				fontFamily: 'Arial Narrow, Arial, sans-serif',
				fontWeight: 'bold',
				radius: 16,
				fontSize: 300
			  },
			  title: 'Y Combinator Inspired'
			},
		  
			{
			  options: {
				text: 'SHIP',
				size: 512,
				bgColor: '#2E8B57',
				textColor: '#FFFFFF',
				fontFamily: 'Impact, ImpactFallback, sans-serif',
				fontWeight: 'normal',
				radius: 16
			  },
			  title: 'Ship It'
			},
		  
			{
			  options: {
				text: 'P',
				size: 512,
				bgColor: '#E60023',
				textColor: '#FFFFFF',
				fontFamily: 'Arial, sans-serif',
				fontWeight: 'bold',
				radius: 256
			  },
			  title: 'Visual Discovery Engine'
			},
			{
			  options: {
				text: 'B',
				size: 512,
				bgColor: '#FF0000',
				textColor: '#FFFFFF',
				fontFamily: 'Arial, sans-serif',
				fontWeight: 'bold',
				radius: 8
			  },
			  title: 'News Network'
			},
			{
			  options: {
				text: 'T',
				size: 512,
				bgColor: '#00A3E0',
				textColor: '#FFFFFF',
				fontFamily: 'Helvetica Neue, Arial, sans-serif',
				fontWeight: 'bold',
				radius: 32
			  },
			  title: 'Telecom Company'
			},
			{
			  options: {
				text: '4',
				size: 512,
				bgColor: '#FFE600',
				textColor: '#000000',
				fontFamily: 'Arial Black, Arial, sans-serif',
				fontWeight: 'bold',
				radius: 0
			  },
			  title: 'French TV Channel'
			},
			{
			  options: {
				text: 'C',
				size: 512,
				bgColor: '#00539B',
				textColor: '#FFFFFF',
				fontFamily: 'Arial, sans-serif',
				fontWeight: 'bold',
				radius: 0
			  },
			  title: 'Banking Giant'
			},
			{
			  options: {
				text: 'U',
				size: 512,
				bgColor: '#232F3E',
				textColor: '#FF9900',
				fontFamily: 'Arial, sans-serif',
				fontWeight: 'bold',
				radius: 64
			  },
			  title: 'Cloud Computing Leader'
			},
			{
			  options: {
				text: '42',
				size: 512,
				bgColor: '#2E8B57',
				textColor: '#FFFFFF',
				fontFamily: 'Courier, monospace',
				fontWeight: 'bold',
				radius: 32
			  },
			  title: 'Answer to Everything'
			},
			{
			  options: {
				text: '♫',
				size: 512,
				bgColor: '#FF1493',
				textColor: '#FFFFFF',
				fontFamily: 'Georgia, serif',
				fontWeight: 'bold',
				radius: 100
			  },
			  title: 'Music Note'
			},
		  
			{
			  options: {
				text: 'f',
				size: 512,
				bgColor: '#1877F2',
				textColor: '#FFFFFF',
				fontFamily: 'Helvetica, Arial, sans-serif',
				fontWeight: 'bold',
				radius: 128
			  },
			  title: 'Social Network Giant'
			},
		  
			{
			  options: {
				text: 'in',
				size: 512,
				bgColor: '#0A66C2',
				textColor: '#FFFFFF',
				fontFamily: 'Arial, sans-serif',
				fontWeight: 'bold',
				radius: 8
			  },
			  title: 'Professional Network'
			},
			{
			  options: {
				text: '𝕏',
				size: 512,
				bgColor: '#000000',
				textColor: '#FFFFFF',
				fontFamily: 'Arial, sans-serif',
				fontWeight: 'bold',
				radius: 128
			  },
			  title: 'Microblogging Platform'
			},
		  
			{
			  options: {
				text: 'N',
				size: 512,
				bgColor: '#E50914',
				textColor: '#FFFFFF',
				fontFamily: 'Bebas Neue, sans-serif',
				fontWeight: 'normal',
				radius: 4
			  },
			  title: 'Streaming Service'
			},
			{
			  options: {
				text: 'M',
				size: 512,
				bgColor: '#0052CC',
				textColor: '#FFFFFF',
				fontFamily: 'Charlie Display, Arial, sans-serif',
				fontWeight: 'bold',
				radius: 8
			  },
			  title: 'Project Management Tool'
			},
			{
			  options: {
				text: 'DEV',
				size: 512,
				bgColor: '#333333',
				textColor: '#00FF00',
				fontFamily: 'Courier, monospace',
				fontWeight: 'bold',
				radius: 16
			  },
			  title: 'Developer'
			},
			{
			  options: {
				text: 'GIT',
				size: 512,
				bgColor: '#F1502F',
				textColor: '#FFFFFF',
				fontFamily: 'Helvetica, sans-serif',
				fontWeight: 'bold',
				radius: 8
			  },
			  title: 'Git'
			},
			{
			  options: {
				text: '₿',
				size: 512,
				bgColor: '#F2A900',
				textColor: '#FFFFFF',
				fontFamily: 'Arial, sans-serif',
				fontWeight: 'bold',
				radius: 256
			  },
			  title: 'Bitcoin'
			},
			{
			  options: {
				text: 'NFT',
				size: 512,
				bgColor: '#FC3C7D',
				textColor: '#FFFFFF',
				fontFamily: 'Impact, ImpactFallback, sans-serif',
				fontWeight: 'normal',
				radius: 0
			  },
			  title: 'NFT'
			},
			{
			  options: {
				text: '🌙',
				size: 512,
				bgColor: '#1E1E1E',
				textColor: '#FFFFFF',
				fontFamily: 'Arial, sans-serif',
				fontWeight: 'normal',
				radius: 256
			  },
			  title: 'To The Moon'
			},
			{
			  options: {
				text: 'GM',
				size: 512,
				bgColor: '#FFC300',
				textColor: '#000000',
				fontFamily: 'Arial Black, sans-serif',
				fontWeight: 'normal',
				radius: 32
			  },
			  title: 'GM (Good Morning)'
			},
			{
			  options: {
				text: '⛓',
				size: 512,
				bgColor: '#3C3C3D',
				textColor: '#FFFFFF',
				fontFamily: 'Arial, sans-serif',
				fontWeight: 'normal',
				radius: 64
			  },
			  title: 'Blockchain'
			},
			{
			  options: {
				text: '🤔',
				size: 512,
				bgColor: '#FFD700',
				textColor: '#000000',
				fontFamily: 'Arial, sans-serif',
				fontWeight: 'normal',
				radius: 256
			  },
			  title: 'Thinking Face'
			},
			{
			  options: {
				text: 'LOL',
				size: 512,
				bgColor: '#FF4500',
				textColor: '#FFFFFF',
				fontFamily: 'Impact, ImpactFallback, sans-serif',
				fontWeight: 'bold',
				radius: 0
			  },
			  title: 'LOL'
			},
			{
			  options: {
				text: '🔥',
				size: 512,
				bgColor: '#FF6347',
				textColor: '#FFD700',
				fontFamily: 'Arial, sans-serif',
				fontWeight: 'normal',
				radius: 256
			  },
			  title: 'Fire Emoji'
			},
			{
			  options: {
				text: 'U MAD?',
				size: 512,
				bgColor: '#E74C3C',
				textColor: '#FFFFFF',
				fontFamily: 'Impact, ImpactFallback, sans-serif',
				fontWeight: 'bold',
				radius: 0
			  },
			  title: 'U MAD?'
			},
			{
			  options: {
				text: '👌',
				size: 512,
				bgColor: '#27AE60',
				textColor: '#FFFFFF',
				fontFamily: 'Arial, sans-serif',
				fontWeight: 'normal',
				radius: 256
			  },
			  title: 'OK Hand'
			},
			{
			  options: {
				text: '🍕',
				size: 512,
				bgColor: '#FF4500',
				textColor: '#FFFF00',
				fontFamily: 'Arial, sans-serif',
				fontWeight: 'normal',
				radius: 256
			  },
			  title: 'Pizza Time'
			},
			{
			  options: {
				text: '01',
				size: 512,
				bgColor: '#00FF00',
				textColor: '#000000',
				fontFamily: 'Courier, monospace',
				fontWeight: 'bold',
				radius: 16
			  },
			  title: 'Binary Code'
			},
			{
			  options: {
				text: '❤',
				size: 512,
				bgColor: '#FFFFFF',
				textColor: '#FF0000',
				fontFamily: 'Arial, sans-serif',
				fontWeight: 'normal',
				radius: 64
			  },
			  title: 'Love Heart'
			},
			{
			  options: {
				text: '✦',
				size: 512,
				bgColor: '#191970',
				textColor: '#FFD700',
				fontFamily: 'Arial, sans-serif',
				fontWeight: 'normal',
				radius: 256
			  },
			  title: 'Starry Night'
			},
			{
			  options: {
				text: '</>',
				size: 64,
				bgColor: '#282C34',
				textColor: '#33FF33',
				fontFamily: 'Courier',
				fontWeight: 'bold',
				radius: 8
			  },
			  title: 'Code Tags'
			},
			{
			  options: {
				text: '404',
				size: 64,
				bgColor: '#cccccc',
				textColor: '#FFFFFF',
				fontFamily: 'Courier New',
				fontWeight: 'bold',
				radius: 0
			  },
			  title: 'Not Found'
			},
			{
			  options: {
				text: '{ }',
				size: 64,
				bgColor: '#F0DB4F',
				textColor: '#323330',
				fontFamily: 'Consolas',
				fontWeight: 'normal',
				radius: 16
			  },
			  title: 'JSON Object'
			},
			{
			  options: {
				text: '∞',
				size: 64,
				bgColor: '#3498DB',
				textColor: '#FFFFFF',
				fontFamily: 'Arial',
				fontWeight: 'normal',
				radius: 32
			  },
			  title: 'Infinity'
			},
		  
			{
			  options: {
				text: 'F2',
				size: 64,
				bgColor: '#1abc9c',
				textColor: '#ffffff',
				fontFamily: 'Impact',
				fontWeight: 'normal',
				radius: 6
			  },
			  title: 'Teal Duo'
			},
			{
			  options: {
				text: '漢',
				size: 64,
				bgColor: '#e74c3c',
				textColor: '#f9e79f',
				fontFamily: '"Noto Sans SC", sans-serif',
				fontWeight: 'bold',
				radius: 0
			  },
			  title: 'Chinese Seal'
			},
			{
			  options: {
				text: 'あ',
				size: 64,
				bgColor: '#1abc9c',
				textColor: '#ffffff',
				fontFamily: '"Noto Sans JP", sans-serif',
				fontWeight: 'normal',
				radius: 16
			  },
			  title: 'Japanese Mint'
			},
			{
			  options: {
				text: 'ß',
				size: 64,
				bgColor: '#34495e',
				textColor: '#e67e22',
				fontFamily: '"Fira Sans", sans-serif',
				fontWeight: 'normal',
				radius: 20
			  },
			  title: 'German Beta'
			},
			{
			  options: {
				text: 'Ж',
				size: 64,
				bgColor: '#c0392b',
				textColor: '#f39c12',
				fontFamily: '"Ubuntu", sans-serif',
				fontWeight: 'bold',
				radius: 16
			  },
			  title: 'Kazakh Fire'
			},
			{
			  options: {
				text: 'NB',
				size: 64,
				bgColor: '#e74c3c',
				textColor: '#f9e79f',
				fontFamily: '"Noto Sans SC", sans-serif',
				fontWeight: 'normal',
				radius: 8
			  },
			  title: 'NB'
			},
			{
			  options: {
				text: '☕',
				size: 64,
				bgColor: '#795548',
				textColor: '#fff8e1',
				fontFamily: '"Apple Color Emoji", sans-serif',
				fontWeight: 'normal',
				radius: 32
			  },
			  title: 'Café Finder'
			},
			{
			  options: {
				text: '🍽️',
				size: 64,
				bgColor: '#e74c3c',
				textColor: '#ffffff',
				fontFamily: '"Segoe UI Emoji", sans-serif',
				fontWeight: 'normal',
				radius: 12
			  },
			  title: 'Recipe App'
			},
			{
			  options: {
				text: '💰',
				size: 64,
				bgColor: '#27ae60',
				textColor: '#f9e79f',
				fontFamily: '"Noto Color Emoji", sans-serif',
				fontWeight: 'normal',
				radius: 16
			  },
			  title: 'Budget Tracker'
			},
			{
			  options: {
				text: '📷',
				size: 64,
				bgColor: '#34495e',
				textColor: '#ecf0f1',
				fontFamily: '"Segoe UI Emoji", sans-serif',
				fontWeight: 'normal',
				radius: 8
			  },
			  title: 'Photo Editor'
			},
			{
			  options: {
				text: '🎮',
				size: 64,
				bgColor: '#8e44ad',
				textColor: '#ffffff',
				fontFamily: '"Apple Color Emoji", sans-serif',
				fontWeight: 'normal',
				radius: 24
			  },
			  title: 'Game Center'
			},
			{
			  options: {
				text: '📅',
				size: 64,
				bgColor: '#e67e22',
				textColor: '#ffffff',
				fontFamily: '"Segoe UI Emoji", sans-serif',
				fontWeight: 'normal',
				radius: 4
			  },
			  title: 'Event Planner'
			},
			{
			  options: {
				text: 'Dj',
				size: 64,
				bgColor: '#000000',
				textColor: '#F0FFF4',
				fontFamily: '"Impact", sans-serif',
				fontWeight: 'bold',
				radius: 16
			  },
			  title: 'DJ Mixer'
			},
			{
			  options: {
				text: '♨',
				size: 512,
				bgColor: '#FF4500',
				textColor: '#FFFFFF',
				fontFamily: 'Helvetica, sans-serif',
				fontWeight: 'bold',
				radius: 64
			  },
			  title: 'Hot Springs'
			},
			{
			  options: {
				text: '☃',
				size: 512,
				bgColor: '#87CEEB',
				textColor: '#FFFFFF',
				fontFamily: 'Arial, sans-serif',
				fontWeight: 'normal',
				radius: 128
			  },
			  title: 'Snowman'
			},
			{
			  options: {
				text: '⌨',
				size: 512,
				bgColor: '#2F4F4F',
				textColor: '#00FF00',
				fontFamily: 'Courier, monospace',
				fontWeight: 'bold',
				radius: 16
			  },
			  title: 'Keyboard'
			},
			{
			  options: {
				text: '✏',
				size: 512,
				bgColor: '#FFFF00',
				textColor: '#000000',
				fontFamily: 'Times New Roman, serif',
				fontWeight: 'normal',
				radius: 128
			  },
			  title: 'Pencil'
			},
			{
			  options: {
				text: '⚠',
				size: 512,
				bgColor: '#FFD700',
				textColor: '#000000',
				fontFamily: 'Arial, sans-serif',
				fontWeight: 'bold',
				radius: 16
			  },
			  title: 'Warning'
			},
			{
			  options: {
				text: '♻',
				size: 512,
				bgColor: '#006400',
				textColor: '#FFFFFF',
				fontFamily: 'Helvetica, sans-serif',
				fontWeight: 'normal',
				radius: 256
			  },
			  title: 'Recycle Symbol'
			},
			{
			  options: {
				text: '♘',
				size: 512,
				bgColor: '#FFFFFF',
				textColor: '#000000',
				fontFamily: 'Times New Roman, serif',
				fontWeight: 'normal',
				radius: 0
			  },
			  title: 'Chess Knight'
			},
			{
			  options: {
				text: '☯',
				size: 512,
				bgColor: '#000000',
				textColor: '#FFFFFF',
				fontFamily: 'Helvetica, sans-serif',
				fontWeight: 'normal',
				radius: 256
			  },
			  title: 'Yin Yang'
			},
			{
			  options: {
				text: '✎',
				size: 512,
				bgColor: '#FFFACD',
				textColor: '#2F4F4F',
				fontFamily: 'Times New Roman, serif',
				fontWeight: 'normal',
				radius: 64
			  },
			  title: 'Pencil'
			},
			{
			  options: {
				text: '☕',
				size: 512,
				bgColor: '#8B4513',
				textColor: '#FFDAB9',
				fontFamily: 'Courier, monospace',
				fontWeight: 'normal',
				radius: 32
			  },
			  title: 'Coffee Break'
			},
			{
			  options: {
				text: '⚔',
				size: 512,
				bgColor: '#B22222',
				textColor: '#C0C0C0',
				fontFamily: 'Georgia, serif',
				fontWeight: 'bold',
				radius: 0
			  },
			  title: 'Crossed Swords'
			},
			{
			  options: {
				text: '♠',
				size: 512,
				bgColor: '#000000',
				textColor: '#FFFFFF',
				fontFamily: 'Times New Roman, serif',
				fontWeight: 'bold',
				radius: 16
			  },
			  title: 'Spade Suit'
			},
			{
			  options: {
				text: '✈',
				size: 512,
				bgColor: '#87CEEB',
				textColor: '#FFFFFF',
				fontFamily: 'Arial, sans-serif',
				fontWeight: 'bold',
				radius: 32
			  },
			  title: 'Airplane'
			},
			{
			  options: {
				text: '☘',
				size: 512,
				bgColor: '#228B22',
				textColor: '#FFFFFF',
				fontFamily: 'Arial, sans-serif',
				fontWeight: 'bold',
				radius: 256
			  },
			  title: 'Shamrock'
			},
			{
			  options: {
				text: '☂',
				size: 512,
				bgColor: '#4682B4',
				textColor: '#FFFFFF',
				fontFamily: 'Arial, sans-serif',
				fontWeight: 'normal',
				radius: 128
			  },
			  title: 'Umbrella'
			},
			{
			  options: {
				text: '⚡',
				size: 512,
				bgColor: '#FFD700',
				textColor: '#000000',
				fontFamily: 'Impact, ImpactFallback, sans-serif',
				fontWeight: 'normal',
				radius: 16
			  },
			  title: 'High Voltage'
			},
			{
			  options: {
				text: '☯',
				size: 512,
				bgColor: '#FFFFFF',
				textColor: '#000000',
				fontFamily: 'Arial, sans-serif',
				fontWeight: 'normal',
				radius: 256
			  },
			  title: 'Yin Yang'
			}
		  ];
	}
}