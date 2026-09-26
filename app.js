// ==================== DATA ====================
const categories = {
  aimagic: {
    name: 'AI Magic',
    desc: 'AI-powered photo transformation',
    tools: [
      { id:'restore', name:'Photo Restore', desc:'Old photos → HD + colorized', type:'info', img:'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=100&q=60' },
      { id:'hair', name:'Hair Try-On', desc:'100+ hairstyles instantly', type:'info', img:'https://images.unsplash.com/photo-1560066984-138dadb4c035?w=100&q=60' },
      { id:'faceswap', name:'Face Swap', desc:'Swap faces with friends', type:'info', img:'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=100&q=60' },
      { id:'cartoon', name:'Cartoon Avatar', desc:'Anime, Pixar, Disney style', type:'info', img:'https://images.unsplash.com/photo-1578632767115-351597cf2477?w=100&q=60' },
      { id:'bgremove', name:'Remove Background', desc:'AI background removal', type:'info', img:'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=100&q=60' }
    ]
  },
  documents: {
    name: 'Documents',
    desc: 'Official ID, signature, PDFs',
    tools: [
      { id:'passport', name:'Passport Photo Maker', desc:'35×45mm, 2×2 inch — instant', type:'crop', img:'https://i.ibb.co/Q7BVycWY/us-passport-size-diagram.webp' },
      { id:'signature', name:'Signature Maker', desc:'Clean signature on white', type:'info', img:'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=100&q=60' },
      { id:'pdf', name:'Photo to PDF', desc:'Convert photos to PDF', type:'info', img:'https://images.unsplash.com/photo-1618044733300-9472054094ee?w=100&q=60' },
      { id:'scanner', name:'Document Scanner', desc:'Scan documents to PDF', type:'info', img:'https://images.unsplash.com/photo-1568602471122-7832951cc4c5?w=100&q=60' }
    ]
  },
  edit: {
    name: 'Edit',
    desc: 'Crop, filters, adjust, resize',
    tools: [
      { id:'crop', name:'Crop', desc:'Cut photo to perfect size', type:'crop', img:'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=100&q=60' },
      { id:'filters', name:'Filters', desc:'20+ preset filters', type:'filters', img:'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&q=60' },
      { id:'adjust', name:'Adjust', desc:'Brightness, contrast, saturation', type:'adjust', img:'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=100&q=60' },
      { id:'resize', name:'Resize', desc:'Change dimensions', type:'resize', img:'https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=100&q=60' },
      { id:'compress', name:'Compress', desc:'Reduce file size', type:'compress', img:'https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=100&q=60' }
    ]
  },
  personal: {
    name: 'Personal',
    desc: 'Cards, collage, memories',
    tools: [
      { id:'collage', name:'Collage', desc:'Combine multiple photos', type:'info', img:'https://images.unsplash.com/photo-1513151233558-d860c5398176?w=100&q=60' },
      { id:'text', name:'Text on Photo', desc:'Add text with styles', type:'info', img:'https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=100&q=60' },
      { id:'stickers', name:'Stickers', desc:'Add emoji stickers', type:'info', img:'https://images.unsplash.com/photo-1519741497674-611481863552?w=100&q=60' }
    ]
  },
  utility: {
    name: 'Utility',
    desc: 'QR, compress, convert',
    tools: [
      { id:'qr', name:'QR Generator', desc:'Generate QR from text', type:'info', img:'https://images.unsplash.com/photo-1614064641938-3bbee52942c7?w=100&q=60' },
      { id:'compress2', name:'Image Compressor', desc:'Compress to any size', type:'compress', img:'https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=100&q=60' },
      { id:'convert', name:'Format Converter', desc:'JPG ↔ PNG ↔ WEBP', type:'info', img:'https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=100&q=60' }
    ]
  },
  fun: {
    name: 'Fun',
    desc: 'Stickers, effects, memes',
    tools: [
      { id:'stickers2', name:'Emoji Stickers', desc:'Fun stickers on photos', type:'info', img:'https://images.unsplash.com/photo-1560972550-aba3456b5564?w=100&q=60' },
      { id:'text2', name:'Meme Maker', desc:'Top/bottom text', type:'info', img:'https://images.unsplash.com/photo-1533228100845-08145b01de14?w=100&q=60' },
      { id:'filters2', name:'Fun Filters', desc:'VHS, glitch, neon', type:'filters', img:'https://images.unsplash.com/photo-1578632767115-351597cf2477?w=100&q=60' }
    ]
  }
};

let currentCategory = null;
let currentTool = null;
let originalImage = null;
let currentImage = null;

const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

// ==================== NAVIGATION ====================
function showScreen(id) {
  document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
  document.getElementById(id).classList.add('active');
  window.scrollTo(0,0);
}

function goHome() {
  showScreen('homeScreen');
  currentCategory = null;
}

function openCategory(catId) {
  currentCategory = catId;
  const cat = categories[catId];
  if (!cat) return;

  document.getElementById('catPageTitle').textContent = cat.name;
  document.getElementById('catHeroName').textContent = cat.name;
  document.getElementById('catHeroDesc').textContent = cat.desc;

  document.getElementById('toolsList').innerHTML = cat.tools.map(tool => `
    <div class="tool-item" onclick="openTool('${tool.id}')">
      ${tool.img ? `<img class="tool-bg" src="${tool.img}" alt="" loading="lazy">` : ''}
      <div class="tool-icon"><svg viewBox="0 0 24 24"><path d="M12 2l3 7h7l-5.5 4.5L18 21l-6-4-6 4 1.5-7.5L2 9h7z"/></svg></div>
      <img class="tool-thumb" src="${tool.img || 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=100&q=60'}" alt="${tool.name}" loading="lazy">
      <div class="tool-info">
        <div class="tool-name">${tool.name}</div>
        <div class="tool-desc">${tool.desc}</div>
      </div>
      <div class="tool-arrow">›</div>
    </div>
  `).join('');

  showScreen('categoryScreen');
}

function backToCategory() {
  if (currentCategory) openCategory(currentCategory);
  else goHome();
}

function openTool(toolId) {
  let tool = null;
  if (currentCategory) tool = categories[currentCategory].tools.find(t => t.id === toolId);
  if (!tool) {
    for (let cat of Object.values(categories)) {
      tool = cat.tools.find(t => t.id === toolId);
      if (tool) break;
    }
  }
  if (!tool) return;

  currentTool = tool;
  document.getElementById('editorTitle').textContent = tool.name;
  document.getElementById('uploadArea').style.display = 'block';
  document.getElementById('canvasWrap').style.display = 'none';

  buildControls(tool.type);
  showScreen('editorScreen');
}

function openToolFromHome(toolId) {
  currentCategory = null;
  openTool(toolId);
}

// ==================== CONTROLS ====================
function buildControls(type) {
  const c = document.getElementById('dynamicControls');
  c.innerHTML = '';

  if (type === 'crop') {
    c.innerHTML = `
      <div class="control-label">Quick Ratios</div>
      <div class="control-row">
        <button class="ctrl-btn" onclick="cropImage(1,1)">1:1</button>
        <button class="ctrl-btn" onclick="cropImage(16,9)">16:9</button>
        <button class="ctrl-btn" onclick="cropImage(9,16)">9:16</button>
        <button class="ctrl-btn" onclick="cropImage(4,5)">4:5</button>
        <button class="ctrl-btn" onclick="cropImage(3,4)">3:4</button>
        <button class="ctrl-btn" onclick="cropImage(2,2)">2:2</button>
      </div>
      <div class="control-label">Manual Ratio</div>
      <div class="manual-row">
        <input type="number" id="cropW" placeholder="W" min="1" class="manual-input">
        <span class="manual-sep">:</span>
        <input type="number" id="cropH" placeholder="H" min="1" class="manual-input">
        <button class="ctrl-btn primary" onclick="manualCrop()">Crop</button>
      </div>`;
  } else if (type === 'filters') {
    c.innerHTML = `
      <div class="control-label">Filters</div>
      <div class="control-row">
        <button class="ctrl-btn" onclick="applyFilter('none')">Original</button>
        <button class="ctrl-btn" onclick="applyFilter('grayscale')">B&W</button>
        <button class="ctrl-btn" onclick="applyFilter('sepia')">Sepia</button>
        <button class="ctrl-btn" onclick="applyFilter('saturate')">Vivid</button>
        <button class="ctrl-btn" onclick="applyFilter('contrast')">Contrast</button>
        <button class="ctrl-btn" onclick="applyFilter('brightness')">Bright</button>
        <button class="ctrl-btn" onclick="applyFilter('blur')">Blur</button>
        <button class="ctrl-btn" onclick="applyFilter('invert')">Invert</button>
      </div>
      <div class="control-label">Rotate</div>
      <div class="control-row">
        <button class="ctrl-btn" onclick="rotateImage(-90)">↺ 90°</button>
        <button class="ctrl-btn" onclick="rotateImage(90)">↻ 90°</button>
        <button class="ctrl-btn" onclick="flipImage('h')">↔ Flip</button>
        <button class="ctrl-btn" onclick="flipImage('v')">↕ Flip</button>
      </div>`;
  } else if (type === 'adjust') {
    c.innerHTML = `
      <div class="control-label">Brightness</div>
      <div class="control-row">
        <button class="ctrl-btn" onclick="applyAdjust('brightness','120%')">+ Bright</button>
        <button class="ctrl-btn" onclick="applyAdjust('brightness','80%')">- Dark</button>
      </div>
      <div class="control-label">Contrast</div>
      <div class="control-row">
        <button class="ctrl-btn" onclick="applyAdjust('contrast','150%')">+ Contrast</button>
        <button class="ctrl-btn" onclick="applyAdjust('contrast','70%')">- Contrast</button>
      </div>
      <div class="control-label">Saturation</div>
      <div class="control-row">
        <button class="ctrl-btn" onclick="applyAdjust('saturate','180%')">Vivid</button>
        <button class="ctrl-btn" onclick="applyAdjust('saturate','50%')">Muted</button>
      </div>`;
  } else if (type === 'resize') {
    c.innerHTML = `
      <div class="control-label">Quick Resize</div>
      <div class="control-row">
        <button class="ctrl-btn" onclick="resizeImage(50)">50%</button>
        <button class="ctrl-btn" onclick="resizeImage(75)">75%</button>
        <button class="ctrl-btn" onclick="resizeImage(150)">150%</button>
        <button class="ctrl-btn" onclick="resizeImage(200)">200%</button>
      </div>
      <div class="control-label">Manual Size (pixels)</div>
      <div class="manual-row">
        <input type="number" id="resizeW" placeholder="Width" min="1" class="manual-input">
        <span class="manual-sep">×</span>
        <input type="number" id="resizeH" placeholder="Height" min="1" class="manual-input">
        <button class="ctrl-btn primary" onclick="manualResize()">Apply</button>
      </div>
      <div class="control-label">Manual Percent</div>
      <div class="manual-row">
        <input type="number" id="resizePercent" placeholder="%" min="1" max="500" class="manual-input">
        <button class="ctrl-btn primary" onclick="manualResizePercent()">Resize</button>
      </div>`;
  } else if (type === 'compress') {
    c.innerHTML = `
      <div class="control-label">Quick Quality</div>
      <div class="control-row">
        <button class="ctrl-btn" onclick="compressImage(0.9)">High</button>
        <button class="ctrl-btn" onclick="compressImage(0.6)">Medium</button>
        <button class="ctrl-btn" onclick="compressImage(0.3)">Low</button>
        <button class="ctrl-btn" onclick="compressImage(0.1)">Min</button>
      </div>

      <div class="control-label">Target Size — Manual</div>
      <div class="manual-row">
        <input type="number" id="compressSize" placeholder="Ex: 50" min="0.1" step="0.1" class="manual-input">
        <select id="compressUnit" class="manual-select">
          <option value="KB">KB</option>
          <option value="MB">MB</option>
        </select>
        <button class="ctrl-btn primary" onclick="manualCompress()">Compress</button>
      </div>

      <div class="control-label">Quick KB Presets</div>
      <div class="control-row">
        <button class="ctrl-btn" onclick="compressToKB(20)">20KB</button>
        <button class="ctrl-btn" onclick="compressToKB(50)">50KB</button>
        <button class="ctrl-btn" onclick="compressToKB(100)">100KB</button>
        <button class="ctrl-btn" onclick="compressToKB(200)">200KB</button>
        <button class="ctrl-btn" onclick="compressToKB(500)">500KB</button>
      </div>

      <div class="control-label">Quick MB Presets</div>
      <div class="control-row">
        <button class="ctrl-btn" onclick="compressToKB(1024)">1MB</button>
        <button class="ctrl-btn" onclick="compressToKB(2048)">2MB</button>
        <button class="ctrl-btn" onclick="compressToKB(3072)">3MB</button>
        <button class="ctrl-btn" onclick="compressToKB(5120)">5MB</button>
      </div>`;
  } else {
    c.innerHTML = `<div class="control-label">Coming Soon</div><p style="font-size:13px;color:#888;padding:12px 0;">This feature is under development.</p>`;
  }
}

// ==================== UPLOAD ====================
function handleGlobalUpload(input) {
  if (input.files && input.files[0]) {
    openCategory('edit');
    setTimeout(() => openTool('crop'), 100);
    setTimeout(() => loadImage(input), 200);
  }
}

function loadImage(input) {
  const file = input.files ? input.files[0] : input;
  if (!file) return;
  const reader = new FileReader();
  reader.onload = (e) => {
    const img = new Image();
    img.onload = () => {
      originalImage = img;
      currentImage = img;
      canvas.width = img.width;
      canvas.height = img.height;
      ctx.drawImage(img, 0, 0);
      document.getElementById('uploadArea').style.display = 'none';
      document.getElementById('canvasWrap').style.display = 'block';
      showToast('Photo loaded — ' + img.width + '×' + img.height);
    };
    img.src = e.target.result;
  };
  reader.readAsDataURL(file);
}

function redraw() {
  if (!currentImage) return;
  canvas.width = currentImage.width;
  canvas.height = currentImage.height;
  ctx.drawImage(currentImage, 0, 0);
}

function resetImage() {
  if (originalImage) {
    currentImage = originalImage;
    redraw();
    canvas.style.filter = 'none';
    showToast('Reset done');
  }
}

// ==================== CROP ====================
function cropImage(w, h) {
  if (!currentImage) return;
  const imgW = currentImage.width, imgH = currentImage.height;
  const targetRatio = w / h, imgRatio = imgW / imgH;
  let newW, newH, offsetX, offsetY;
  if (imgRatio > targetRatio) {
    newH = imgH; newW = imgH * targetRatio;
    offsetX = (imgW - newW) / 2; offsetY = 0;
  } else {
    newW = imgW; newH = imgW / targetRatio;
    offsetX = 0; offsetY = (imgH - newH) / 2;
  }
  const temp = document.createElement('canvas');
  temp.width = newW; temp.height = newH;
  temp.getContext('2d').drawImage(currentImage, offsetX, offsetY, newW, newH, 0, 0, newW, newH);
  const newImg = new Image();
  newImg.onload = () => { currentImage = newImg; redraw(); showToast('Cropped ' + w + ':' + h); };
  newImg.src = temp.toDataURL();
}

function manualCrop() {
  const w = parseFloat(document.getElementById('cropW').value);
  const h = parseFloat(document.getElementById('cropH').value);
  if (!w || !h || w <= 0 || h <= 0) { showToast('Enter valid W and H'); return; }
  cropImage(w, h);
}

// ==================== ROTATE ====================
function rotateImage(deg) {
  if (!currentImage) return;
  const temp = document.createElement('canvas');
  const angle = deg * Math.PI / 180;
  const cos = Math.abs(Math.cos(angle)), sin = Math.abs(Math.sin(angle));
  temp.width = currentImage.width * cos + currentImage.height * sin;
  temp.height = currentImage.width * sin + currentImage.height * cos;
  const tctx = temp.getContext('2d');
  tctx.translate(temp.width / 2, temp.height / 2);
  tctx.rotate(angle);
  tctx.drawImage(currentImage, -currentImage.width / 2, -currentImage.height / 2);
  const newImg = new Image();
  newImg.onload = () => { currentImage = newImg; redraw(); showToast('Rotated ' + deg + '°'); };
  newImg.src = temp.toDataURL();
}

function flipImage(dir) {
  if (!currentImage) return;
  const temp = document.createElement('canvas');
  temp.width = currentImage.width; temp.height = currentImage.height;
  const tctx = temp.getContext('2d');
  if (dir === 'h') { tctx.translate(currentImage.width, 0); tctx.scale(-1, 1); }
  else { tctx.translate(0, currentImage.height); tctx.scale(1, -1); }
  tctx.drawImage(currentImage, 0, 0);
  const newImg = new Image();
  newImg.onload = () => { currentImage = newImg; redraw(); showToast('Flipped'); };
  newImg.src = temp.toDataURL();
}

// ==================== FILTERS ====================
function applyFilter(type) {
  const filters = {
    'none': 'none', 'grayscale': 'grayscale(100%)', 'sepia': 'sepia(80%)',
    'saturate': 'saturate(180%)', 'contrast': 'contrast(150%)',
    'brightness': 'brightness(130%)', 'blur': 'blur(2px)', 'invert': 'invert(100%)'
  };
  canvas.style.filter = filters[type] || 'none';
  showToast('Filter applied');
}

function applyAdjust(type, val) {
  canvas.style.filter = type + '(' + val + ')';
  showToast(type + ' ' + val);
}

// ==================== RESIZE ====================
function resizeImage(percent) {
  if (!currentImage) return;
  const temp = document.createElement('canvas');
  temp.width = Math.round(currentImage.width * percent / 100);
  temp.height = Math.round(currentImage.height * percent / 100);
  temp.getContext('2d').drawImage(currentImage, 0, 0, temp.width, temp.height);
  const newImg = new Image();
  newImg.onload = () => { currentImage = newImg; redraw(); showToast('Resized to ' + percent + '%'); };
  newImg.src = temp.toDataURL();
}

function manualResize() {
  if (!currentImage) return;
  const w = parseInt(document.getElementById('resizeW').value);
  const h = parseInt(document.getElementById('resizeH').value);
  if (!w || !h || w <= 0 || h <= 0) { showToast('Enter valid Width and Height'); return; }
  const temp = document.createElement('canvas');
  temp.width = w; temp.height = h;
  temp.getContext('2d').drawImage(currentImage, 0, 0, w, h);
  const newImg = new Image();
  newImg.onload = () => { currentImage = newImg; redraw(); showToast('Resized to ' + w + '×' + h); };
  newImg.src = temp.toDataURL();
}

function manualResizePercent() {
  const p = parseFloat(document.getElementById('resizePercent').value);
  if (!p || p <= 0 || p > 500) { showToast('Enter 1-500 percent'); return; }
  resizeImage(p);
}

// ==================== COMPRESS ====================
function compressImage(q) {
  if (!currentImage) return;
  const dataUrl = canvas.toDataURL('image/jpeg', q);
  const newImg = new Image();
  newImg.onload = () => {
    currentImage = newImg;
    redraw();
    const sizeKB = Math.round((dataUrl.length * 0.75) / 1024);
    showToast('Compressed ~' + sizeKB + 'KB');
  };
  newImg.src = dataUrl;
}

function compressToKB(targetKB) {
  if (!currentImage) return;
  const targetBytes = targetKB * 1024;
  let low = 0.01, high = 1.0, best = null;
  
  for (let i = 0; i < 15; i++) {
    const mid = (low + high) / 2;
    const dataUrl = canvas.toDataURL('image/jpeg', mid);
    const bytes = Math.round(dataUrl.length * 0.75);
    
    if (bytes <= targetBytes) {
      best = { dataUrl, size: bytes };
      low = mid;
    } else {
      high = mid;
    }
  }
  
  if (!best) {
    const dataUrl = canvas.toDataURL('image/jpeg', 0.01);
    best = { dataUrl, size: Math.round(dataUrl.length * 0.75) };
  }
  
  const newImg = new Image();
  newImg.onload = () => {
    currentImage = newImg;
    redraw();
    const finalKB = best.size / 1024;
    if (finalKB >= 1024) {
      showToast('Compressed to ~' + (finalKB / 1024).toFixed(2) + ' MB');
    } else {
      showToast('Compressed to ~' + Math.round(finalKB) + ' KB');
    }
  };
  newImg.src = best.dataUrl;
}

function manualCompress() {
  const size = parseFloat(document.getElementById('compressSize').value);
  const unit = document.getElementById('compressUnit').value;
  if (!size || size <= 0) { showToast('Enter valid size'); return; }
  
  let kb;
  if (unit === 'MB') {
    kb = size * 1024;
  } else {
    kb = size;
  }
  
  compressToKB(kb);
}

// ==================== DOWNLOAD ====================
function downloadImage() {
  if (!currentImage) { showToast('No image'); return; }
  const link = document.createElement('a');
  link.download = 'picly-' + Date.now() + '.jpg';
  link.href = canvas.toDataURL('image/jpeg', 0.95);
  link.click();
  showToast('Downloaded!');
}

// ==================== TRIAL ====================
function startTrial() {
  showToast('🎉 7-Day Free Trial Activated!');
}

// ==================== TOAST ====================
function showToast(msg) {
  const t = document.getElementById('toast');
  t.textContent = msg;
  t.classList.add('show');
  setTimeout(() => t.classList.remove('show'), 2000);
}

// ==================== AUTO SLIDE ====================
const slider = document.getElementById('slider');
const dots = document.querySelectorAll('#dots .dot');
let currentSlide = 0;
let autoSlideInterval;

function updateDots(index) {
  dots.forEach((d, i) => d.classList.toggle('active', i === index));
}

function scrollToSlide(index) {
  const slide = slider.children[index];
  if (slide) {
    slider.scrollTo({ left: slide.offsetLeft - 20, behavior: 'smooth' });
    updateDots(index);
  }
}

function nextSlide() {
  currentSlide = (currentSlide + 1) % slider.children.length;
  scrollToSlide(currentSlide);
}

function startAutoSlide() {
  autoSlideInterval = setInterval(nextSlide, 3000);
}

function stopAutoSlide() {
  clearInterval(autoSlideInterval);
}

if (slider) {
  startAutoSlide();
  slider.addEventListener('touchstart', stopAutoSlide);
  slider.addEventListener('touchend', () => setTimeout(startAutoSlide, 4000));
  slider.addEventListener('mouseenter', stopAutoSlide);
  slider.addEventListener('mouseleave', startAutoSlide);
  slider.setAttribute('tabindex', '0');
  slider.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowRight') { stopAutoSlide(); currentSlide = Math.min(currentSlide + 1, slider.children.length - 1); scrollToSlide(currentSlide); }
    if (e.key === 'ArrowLeft') { stopAutoSlide(); currentSlide = Math.max(currentSlide - 1, 0); scrollToSlide(currentSlide); }
  });
}