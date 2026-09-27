const categories = {
  edit: { name:'Edit', desc:'Crop · filters · text · stickers', tools:[
    { id:'crop', name:'Crop', desc:'Cut photo to perfect size', type:'crop', img:'https://images.unsplash.com/photo-1502920917128-1aa500764cbd?w=100&q=80' },
    { id:'filters', name:'Filters', desc:'14 preset filters', type:'filters', img:'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&q=80' },
    { id:'adjust', name:'Adjust', desc:'Brightness, contrast', type:'adjust', img:'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=100&q=80' },
    { id:'resize', name:'Resize', desc:'Change dimensions', type:'resize', img:'https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=100&q=80' },
    { id:'rotate', name:'Rotate / Flip', desc:'Rotate 90°, flip', type:'rotate', img:'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=100&q=80' },
    { id:'text', name:'Text on Photo', desc:'Drag · fonts', type:'text', img:'https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=100&q=80' },
    { id:'stickers', name:'Stickers & Emoji', desc:'Drag · 100+ emoji', type:'stickers', img:'https://images.unsplash.com/photo-1519741497674-611481863552?w=100&q=80' }
  ]},
  documents: { name:'Documents', desc:'Passport · signature · PDF', tools:[
    { id:'passport', name:'Passport Photo', desc:'35×45mm, 2×2 inch', type:'passport', img:'https://i.ibb.co/Q7BVycWY/us-passport-size-diagram.webp' },
    { id:'photo-signature', name:'Photo + Signature', desc:'Exam forms', type:'photo-signature', img:'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=100&q=80' },
    { id:'signature', name:'Signature Maker', desc:'Clean signature', type:'signature', img:'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=100&q=80' },
    { id:'scanner', name:'Document Scanner', desc:'Scan to PDF', type:'scanner', img:'https://images.unsplash.com/photo-1568602471122-7832951cc4c5?w=100&q=80' },
    { id:'idcard', name:'ID Card Maker', desc:'Aadhaar, PAN', type:'idcard', img:'https://images.unsplash.com/photo-1618044733300-9472054094ee?w=100&q=80' },
    { id:'splitter', name:'Photo Splitter', desc:'1 → 4/6/8 parts', type:'splitter', img:'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=100&q=80' },
    { id:'compress', name:'Image Compress', desc:'Exact KB/MB', type:'compress', img:'https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=100&q=80' },
    { id:'pdf', name:'Photo to PDF', desc:'Convert to PDF', type:'pdf', img:'https://images.unsplash.com/photo-1568667256549-094345857637?w=100&q=80' },
    { id:'convert', name:'Format Converter', desc:'JPG ↔ PNG ↔ WEBP', type:'convert', img:'https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=100&q=80' }
  ]},
  video: { name:'Video Tools', desc:'Trim · compress · GIF', tools:[
    { id:'video-trim', name:'Video Trimmer', desc:'Cut video', type:'video-trim', img:'https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=100&q=80' },
    { id:'video-compress', name:'Video Compress', desc:'Reduce size', type:'video-compress', img:'https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=100&q=80' },
    { id:'video-gif', name:'Video to GIF', desc:'Convert to GIF', type:'video-gif', img:'https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=100&q=80' },
    { id:'video-mp3', name:'Video to MP3', desc:'Extract audio', type:'video-mp3', img:'https://images.unsplash.com/photo-1614064641938-3bbee52942c7?w=100&q=80' },
    { id:'video-enhance', name:'Video Enhance', desc:'Sharpen', type:'video-enhance', img:'https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=100&q=80' }
  ]},
  aimagic: { name:'AI Magic', desc:'AI-powered — coming soon', tools:[
    { id:'enhance-ai', name:'AI Photo Enhance', desc:'Blurry → HD', type:'info', img:'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=100&q=80' },
    { id:'bgremove', name:'Background Remove', desc:'1 tap BG remove', type:'info', img:'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=100&q=80' },
    { id:'restore', name:'Old Photo Restore', desc:'Color + HD', type:'info', img:'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=100&q=80' },
    { id:'anime', name:'Anime Cartoon', desc:'Photo → anime', type:'info', img:'https://images.unsplash.com/photo-1578632767115-351597cf2477?w=100&q=80' },
    { id:'faceswap', name:'Face Swap', desc:'Swap faces', type:'info', img:'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=100&q=80' }
  ]},
  utility: { name:'Utility', desc:'Calculators · QR', tools:[
    { id:'emi', name:'EMI Calculator', desc:'Loan EMI monthly', type:'emi', img:'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=100&q=80' },
    { id:'gst', name:'GST Calculator', desc:'Add/remove GST', type:'gst', img:'https://images.unsplash.com/photo-1554224154-26032ffc0d07?w=100&q=80' },
    { id:'age', name:'Age Calculator', desc:'Age in years/days', type:'age', img:'https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=100&q=80' },
    { id:'bmi', name:'BMI Calculator', desc:'Body mass index', type:'bmi', img:'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=100&q=80' },
    { id:'unit', name:'Unit Converter', desc:'Length/weight/temp', type:'unit', img:'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=100&q=80' },
    { id:'qr', name:'QR Generator', desc:'Generate QR code', type:'qr', img:'https://images.unsplash.com/photo-1614064641938-3bbee52942c7?w=100&q=80' }
  ]},
  fun: { name:'Fun', desc:'Filters · frames · collage', tools:[
    { id:'frames', name:'Frames', desc:'6 stylish frames', type:'frames', img:'https://images.unsplash.com/photo-1513151233558-d860c5398176?w=100&q=80' },
    { id:'collage', name:'Collage Maker', desc:'2-9 photos', type:'collage', img:'https://images.unsplash.com/photo-1519741497674-611481863552?w=100&q=80' }
  ]}
};

let currentCategory = null;
let currentTool = null;
let originalImage = null;
let currentImage = null;
let pdfSize = 'a4';
let selectedTextColor = '#ffffff';
let selectedFont = 'Arial Black';
let overlayItems = [];
let collagePhotos = [];
let collageLayout = '2x2';
let signatureData = null;
let canvas = null, ctx = null, overlayLayer = null;
let currentVideoFile = null;
let currentVideoDuration = 0;
let ffmpegInstance = null;
let selectedCompressQuality = 'medium';
let selectedEnhanceType = 'bright';

const CALCULATOR_TYPES = ['emi','gst','age','bmi','unit','qr'];
const VIDEO_TYPES = ['video-trim','video-compress','video-gif','video-mp3','video-enhance'];

function showScreen(id) {
  document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
  const el = document.getElementById(id);
  if (el) el.classList.add('active');
  window.scrollTo(0, 0);
}

function goHome() { showScreen('homeScreen'); currentCategory = null; }

function openCategory(catId) {
  currentCategory = catId;
  const cat = categories[catId];
  if (!cat) return;
  document.getElementById('catPageTitle').textContent = cat.name;
  document.getElementById('catHeroName').textContent = cat.name;
  document.getElementById('catHeroDesc').textContent = cat.desc;
  document.getElementById('toolsList').innerHTML = cat.tools.map(tool => {
    const img = tool.img || 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=100&q=80';
    return `
      <div class="tool-item" onclick="openTool('${tool.id}')">
        <img class="tool-bg" src="${img}" alt="" loading="lazy">
        <div class="tool-icon"><svg viewBox="0 0 24 24"><path d="M12 2l3 7h7l-5.5 4.5L18 21l-6-4-6 4 1.5-7.5L2 9h7z"/></svg></div>
        <img class="tool-thumb" src="${img}" alt="${tool.name}" loading="lazy">
        <div class="tool-info"><div class="tool-name">${tool.name}</div><div class="tool-desc">${tool.desc}</div></div>
        <div class="tool-arrow">›</div>
      </div>`;
  }).join('');
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
  overlayItems = [];
  collagePhotos = [];
  currentVideoFile = null;
  currentVideoDuration = 0;
  
  document.getElementById('editorTitle').textContent = tool.name;
  const ol = document.getElementById('overlayLayer');
  if (ol) ol.innerHTML = '';
  const vp = document.getElementById('videoPreview');
  if (vp) { vp.style.display = 'none'; vp.src = ''; }

  const isCalculator = CALCULATOR_TYPES.includes(tool.type);
  const isVideo = VIDEO_TYPES.includes(tool.type);

  const uploadArea = document.getElementById('uploadArea');
  const canvasWrap = document.getElementById('canvasWrap');
  const canvasContainer = document.querySelector('.canvas-container');
  const actionBtns = document.querySelector('.action-btns');

  if (isCalculator) {
    if (uploadArea) uploadArea.style.display = 'none';
    if (canvasWrap) canvasWrap.style.display = 'block';
    if (canvasContainer) canvasContainer.style.display = 'none';
    if (actionBtns) actionBtns.style.display = 'none';
  } else if (isVideo) {
    if (uploadArea) uploadArea.style.display = 'block';
    if (canvasWrap) canvasWrap.style.display = 'block';
    if (canvasContainer) canvasContainer.style.display = 'none';
    if (actionBtns) actionBtns.style.display = 'none';
    const uploadHint = document.getElementById('uploadHint');
    const uploadInput = document.getElementById('modalUpload');
    const uploadTitle = document.getElementById('uploadTitle');
    if (uploadHint && uploadInput && uploadTitle) {
      uploadHint.textContent = 'MP4, MOV, WEBM — max 100MB';
      uploadInput.setAttribute('accept', 'video/*');
      uploadTitle.textContent = 'Tap to upload video';
    }
  } else {
    if (uploadArea) uploadArea.style.display = 'block';
    if (canvasWrap) canvasWrap.style.display = 'none';
    if (canvasContainer) canvasContainer.style.display = 'flex';
    if (actionBtns) actionBtns.style.display = 'flex';
    const uploadHint = document.getElementById('uploadHint');
    const uploadInput = document.getElementById('modalUpload');
    const uploadTitle = document.getElementById('uploadTitle');
    if (uploadHint && uploadInput && uploadTitle) {
      uploadHint.textContent = 'JPG, PNG, WEBP — max 10MB';
      uploadInput.setAttribute('accept', 'image/*');
      uploadTitle.textContent = 'Tap to upload photo';
    }
  }
  buildControls(tool.type);
  showScreen('editorScreen');
}

function openToolFromHome(toolId) { currentCategory = null; openTool(toolId); }

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
  if (file.type.startsWith('video/')) { loadVideo(input); return; }
  const reader = new FileReader();
  reader.onload = (e) => {
    const img = new Image();
    img.onload = () => {
      originalImage = img; currentImage = img;
      if (canvas) { canvas.width = img.width; canvas.height = img.height; ctx.drawImage(img, 0, 0); }
      document.getElementById('uploadArea').style.display = 'none';
      document.getElementById('canvasWrap').style.display = 'block';
      showToast('Photo loaded ✨');
    };
    img.src = e.target.result;
  };
  reader.readAsDataURL(file);
}

function redraw() {
  if (!currentImage || !canvas) return;
  canvas.width = currentImage.width;
  canvas.height = currentImage.height;
  ctx.drawImage(currentImage, 0, 0);
}

function resetImage() {
  if (originalImage && canvas) {
    currentImage = originalImage; redraw();
    canvas.style.filter = 'none';
    overlayItems = [];
    if (overlayLayer) overlayLayer.innerHTML = '';
    showToast('Reset done');
  }
}

// ==================== VIDEO LOADER ====================
function loadVideo(input) {
  const file = input.files ? input.files[0] : input;
  if (!file) return;
  currentVideoFile = file;
  
  const video = document.getElementById('videoPreview');
  video.src = URL.createObjectURL(file);
  video.style.display = 'block';
  document.getElementById('uploadArea').style.display = 'none';
  
  video.onloadedmetadata = () => {
    currentVideoDuration = video.duration;
    const sizeMB = (file.size / 1024 / 1024).toFixed(2);
    
    const pending = document.getElementById('videoPendingMsg');
    if (pending) pending.style.display = 'none';
    const activeUI = document.getElementById('videoActiveUI');
    if (activeUI) activeUI.style.display = 'block';
    
    const type = currentTool.type;
    
    if (type === 'video-trim') {
      const ss = document.getElementById('trimStartSlider');
      const es = document.getElementById('trimEndSlider');
      if (ss && es) {
        ss.max = currentVideoDuration; es.max = currentVideoDuration;
        es.value = currentVideoDuration;
        document.getElementById('trimEndLabel').textContent = currentVideoDuration.toFixed(1) + 's';
        document.getElementById('trimDuration').textContent = currentVideoDuration.toFixed(1) + 's';
        document.getElementById('trimSize').textContent = sizeMB + 'MB';
        ss.oninput = () => {
          if (parseFloat(ss.value) >= parseFloat(es.value)) ss.value = parseFloat(es.value) - 0.1;
          document.getElementById('trimStartLabel').textContent = parseFloat(ss.value).toFixed(1) + 's';
          document.getElementById('trimDuration').textContent = (parseFloat(es.value) - parseFloat(ss.value)).toFixed(1) + 's';
          video.currentTime = parseFloat(ss.value);
        };
        es.oninput = () => {
          if (parseFloat(es.value) <= parseFloat(ss.value)) es.value = parseFloat(ss.value) + 0.1;
          document.getElementById('trimEndLabel').textContent = parseFloat(es.value).toFixed(1) + 's';
          document.getElementById('trimDuration').textContent = (parseFloat(es.value) - parseFloat(ss.value)).toFixed(1) + 's';
          video.currentTime = parseFloat(es.value);
        };
      }
    } else if (type === 'video-compress') {
      const o = document.getElementById('compressOrigSize');
      const d = document.getElementById('compressDuration');
      if (o) o.textContent = sizeMB + 'MB';
      if (d) d.textContent = currentVideoDuration.toFixed(1) + 's';
    } else if (type === 'video-mp3') {
      const d = document.getElementById('mp3Duration');
      const s = document.getElementById('mp3Size');
      if (d) d.textContent = currentVideoDuration.toFixed(1) + 's';
      if (s) s.textContent = sizeMB + 'MB';
    }
    
    showToast('Video loaded — ' + sizeMB + 'MB ✨');
  };
}

function selectCompressQuality(q, btn) {
  selectedCompressQuality = q;
  btn.parentElement.querySelectorAll('.ctrl-btn').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
}

function selectEnhanceType(t, btn) {
  selectedEnhanceType = t;
  btn.parentElement.querySelectorAll('.ctrl-btn').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
}

// ==================== FFMPEG 0.12.x MULTI-THREADED — R2 ====================
let wakeLock = null;
let lastProgressUpdate = 0;

async function requestWakeLock() {
  try {
    if ('wakeLock' in navigator) {
      wakeLock = await navigator.wakeLock.request('screen');
      console.log('Wake Lock active');
    }
  } catch (err) {
    console.log('Wake Lock failed:', err);
  }
}

async function releaseWakeLock() {
  if (wakeLock) {
    try { await wakeLock.release(); } catch(e) {}
    wakeLock = null;
  }
}

async function getFFmpeg() {
  if (ffmpegInstance) return ffmpegInstance;
  const { FFmpeg } = FFmpegWASM;
  const { toBlobURL } = FFmpegUtil;
  const ffmpeg = new FFmpeg();
  
  const R2_URL = 'https://pub-64e5babc43fc4b14b6a7ba94e61796db.r2.dev';
  
  // Progress — throttled 200ms (PC + Mobile friendly)
  ffmpeg.on('progress', ({ progress }) => {
    const now = Date.now();
    if (now - lastProgressUpdate < 200) return;
    lastProgressUpdate = now;
    
    let percent = Math.round(progress * 100);
    if (!isFinite(percent) || percent < 0) percent = 0;
    if (percent > 100) percent = 99;
    const msg = document.getElementById('videoLoaderMsg');
    if (msg) msg.textContent = `Processing... ${percent}%`;
  });
  
  // Debug log
  ffmpeg.on('log', ({ message }) => {
    console.log('[FFmpeg]', message);
  });
  
  await ffmpeg.load({
    coreURL: await toBlobURL(R2_URL + '/ffmpeg-core.js', 'text/javascript'),
    wasmURL: await toBlobURL(R2_URL + '/ffmpeg-core.wasm', 'application/wasm'),
    workerURL: await toBlobURL(R2_URL + '/ffmpeg-core.worker.js', 'text/javascript')
  });
  ffmpegInstance = ffmpeg;
  return ffmpeg;
}

function showLoader(msg) {
  let el = document.getElementById('videoLoader');
  if (!el) {
    el = document.createElement('div');
    el.id = 'videoLoader';
    el.style.cssText = 'position:fixed;inset:0;background:rgba(6,3,13,0.95);backdrop-filter:blur(12px);z-index:9999;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:20px;padding:20px;';
    el.innerHTML = `
      <div style="width:60px;height:60px;border:4px solid rgba(168,85,247,0.2);border-top-color:#a855f7;border-radius:50%;animation:spin 1s linear infinite;"></div>
      <p id="videoLoaderMsg" style="color:#fff;font-weight:800;font-size:16px;text-align:center;max-width:400px;line-height:1.5;">Processing...</p>
      <p style="color:#ff6b6b;font-size:13px;text-align:center;max-width:400px;line-height:1.6;font-weight:700;">⚠️ Tab MAT minimize karo<br>Warna processing ruk jayegi</p>
      <p style="color:#a99bc4;font-size:12px;text-align:center;max-width:400px;line-height:1.6;">⏱️ Bade videos mein 1-2 min lag sakte hain</p>
    `;
    document.body.appendChild(el);
    if (!document.getElementById('spinKeyframe')) {
      const s = document.createElement('style');
      s.id = 'spinKeyframe';
      s.textContent = '@keyframes spin { to { transform: rotate(360deg); } }';
      document.head.appendChild(s);
    }
  }
  document.getElementById('videoLoaderMsg').textContent = msg;
  el.style.display = 'flex';
}

function hideLoader() {
  const el = document.getElementById('videoLoader');
  if (el) el.style.display = 'none';
}

// ========== TRIM — Fast & Quality ==========
async function trimVideo(mode = 'fast') {
  if (!currentVideoFile) { showToast('Upload video first'); return; }
  const s = parseFloat(document.getElementById('trimStartSlider').value);
  const e = parseFloat(document.getElementById('trimEndSlider').value);
  if (e <= s) { showToast('Invalid range'); return; }
  
  if (mode === 'fast') {
    showLoader('⚡ Fast cutting...');
  } else {
    showLoader('✨ Quality trim ho rahi hai... (1-2 min)');
  }
  
  await requestWakeLock();
  
  const timeoutId = setTimeout(() => {
    hideLoader();
    showToast('⚠️ Timeout — video format issue. Chhota video try karo.');
    releaseWakeLock();
  }, 180000);
  
  try {
    const ffmpeg = await getFFmpeg();
    const { fetchFile } = FFmpegUtil;
    await ffmpeg.writeFile('input.mp4', await fetchFile(currentVideoFile));
    
    if (mode === 'fast') {
      await ffmpeg.exec([
        '-i','input.mp4',
        '-ss',String(s),
        '-t',String(e-s),
        '-c','copy',
        '-avoid_negative_ts','make_zero',
        '-movflags','+faststart',
        'output.mp4'
      ]);
    } else {
      await ffmpeg.exec([
        '-i','input.mp4',
        '-ss',String(s),
        '-t',String(e-s),
        '-c:v','libx264',
        '-c:a','aac',
        '-preset','fast',
        '-crf','23',
        '-movflags','+faststart',
        'output.mp4'
      ]);
    }
    
    clearTimeout(timeoutId);
    
    const data = await ffmpeg.readFile('output.mp4');
    const blob = new Blob([data.buffer], { type: 'video/mp4' });
    const a = document.createElement('a');
    a.href = URL.createObjectURL(blob);
    a.download = 'picly-trimmed-' + Date.now() + '.mp4';
    a.click();
    hideLoader();
    showToast(mode === 'fast' ? '✅ Video ready (fast)!' : '✅ Video ready (quality)!');
  } catch (err) {
    clearTimeout(timeoutId);
    hideLoader();
    console.error(err);
    showToast('Error: ' + err.message);
  }
  await releaseWakeLock();
}

async function compressVideo() {
  if (!currentVideoFile) { showToast('Upload video first'); return; }
  const q = { high:'23', medium:'28', low:'32' };
  const crf = q[selectedCompressQuality] || '28';
  showLoader('🗜️ Making it smaller...');
  await requestWakeLock();
  
  const timeoutId = setTimeout(() => {
    hideLoader();
    showToast('⚠️ Timeout — video format issue.');
    releaseWakeLock();
  }, 180000);
  
  try {
    const ffmpeg = await getFFmpeg();
    const { fetchFile } = FFmpegUtil;
    await ffmpeg.writeFile('input.mp4', await fetchFile(currentVideoFile));
    await ffmpeg.exec(['-i','input.mp4','-vcodec','libx264','-crf',crf,'-preset','fast','output.mp4']);
    clearTimeout(timeoutId);
    const data = await ffmpeg.readFile('output.mp4');
    const blob = new Blob([data.buffer], { type: 'video/mp4' });
    const ns = (blob.size/1024/1024).toFixed(2);
    const os = (currentVideoFile.size/1024/1024).toFixed(2);
    const a = document.createElement('a');
    a.href = URL.createObjectURL(blob);
    a.download = 'picly-compressed-' + Date.now() + '.mp4';
    a.click();
    hideLoader();
    showToast('✅ ' + os + 'MB → ' + ns + 'MB');
  } catch (err) {
    clearTimeout(timeoutId);
    hideLoader();
    console.error(err);
    showToast('Error: ' + err.message);
  }
  await releaseWakeLock();
}

async function extractMp3() {
  if (!currentVideoFile) { showToast('Upload video first'); return; }
  showLoader('🎵 Extracting audio...');
  await requestWakeLock();
  
  const timeoutId = setTimeout(() => {
    hideLoader();
    showToast('⚠️ Timeout — video format issue.');
    releaseWakeLock();
  }, 180000);
  
  try {
    const ffmpeg = await getFFmpeg();
    const { fetchFile } = FFmpegUtil;
    await ffmpeg.writeFile('input.mp4', await fetchFile(currentVideoFile));
    await ffmpeg.exec(['-i','input.mp4','-vn','-acodec','libmp3lame','-q:a','2','output.mp3']);
    clearTimeout(timeoutId);
    const data = await ffmpeg.readFile('output.mp3');
    const blob = new Blob([data.buffer], { type: 'audio/mp3' });
    const a = document.createElement('a');
    a.href = URL.createObjectURL(blob);
    a.download = 'picly-audio-' + Date.now() + '.mp3';
    a.click();
    hideLoader();
    showToast('✅ Audio ready!');
  } catch (err) {
    clearTimeout(timeoutId);
    hideLoader();
    console.error(err);
    showToast('Error: ' + err.message);
  }
  await releaseWakeLock();
}

async function videoToGif() {
  if (!currentVideoFile) { showToast('Upload video first'); return; }
  const s = parseFloat(document.getElementById('gifStart').value) || 0;
  const d = parseFloat(document.getElementById('gifDuration').value) || 3;
  const f = document.getElementById('gifFps').value || 15;
  showLoader('🎞️ Creating GIF...');
  await requestWakeLock();
  
  const timeoutId = setTimeout(() => {
    hideLoader();
    showToast('⚠️ Timeout — video format issue.');
    releaseWakeLock();
  }, 180000);
  
  try {
    const ffmpeg = await getFFmpeg();
    const { fetchFile } = FFmpegUtil;
    await ffmpeg.writeFile('input.mp4', await fetchFile(currentVideoFile));
    await ffmpeg.exec(['-i','input.mp4','-ss',String(s),'-t',String(d),'-vf','fps='+f+',scale=480:-1:flags=lanczos','output.gif']);
    clearTimeout(timeoutId);
    const data = await ffmpeg.readFile('output.gif');
    const blob = new Blob([data.buffer], { type: 'image/gif' });
    const a = document.createElement('a');
    a.href = URL.createObjectURL(blob);
    a.download = 'picly-' + Date.now() + '.gif';
    a.click();
    hideLoader();
    showToast('✅ GIF ready!');
  } catch (err) {
    clearTimeout(timeoutId);
    hideLoader();
    console.error(err);
    showToast('Error: ' + err.message);
  }
  await releaseWakeLock();
}

async function enhanceVideo() {
  if (!currentVideoFile) { showToast('Upload video first'); return; }
  let filter = '';
  if (selectedEnhanceType === 'bright') filter = 'eq=brightness=0.1:contrast=1.1';
  else if (selectedEnhanceType === 'contrast') filter = 'eq=contrast=1.3:saturation=1.2';
  else if (selectedEnhanceType === 'sharpen') filter = 'unsharp=5:5:1.0:5:5:0.0';
  else if (selectedEnhanceType === 'denoise') filter = 'hqdn3d=4:3:6:4.5';
  showLoader('🎨 Enhancing video...');
  await requestWakeLock();
  
  const timeoutId = setTimeout(() => {
    hideLoader();
    showToast('⚠️ Timeout — video format issue.');
    releaseWakeLock();
  }, 180000);
  
  try {
    const ffmpeg = await getFFmpeg();
    const { fetchFile } = FFmpegUtil;
    await ffmpeg.writeFile('input.mp4', await fetchFile(currentVideoFile));
    await ffmpeg.exec(['-i','input.mp4','-vf',filter,'-c:a','copy','output.mp4']);
    clearTimeout(timeoutId);
    const data = await ffmpeg.readFile('output.mp4');
    const blob = new Blob([data.buffer], { type: 'video/mp4' });
    const a = document.createElement('a');
    a.href = URL.createObjectURL(blob);
    a.download = 'picly-enhanced-' + Date.now() + '.mp4';
    a.click();
    hideLoader();
    showToast('✅ Enhanced video ready!');
  } catch (err) {
    clearTimeout(timeoutId);
    hideLoader();
    console.error(err);
    showToast('Error: ' + err.message);
  }
  await releaseWakeLock();
}function buildControls(type) {
  const c = document.getElementById('dynamicControls');
  if (!c) return;
  c.innerHTML = '';

  if (type === 'emi') {
    c.innerHTML = `<div class="calc-header"><div class="calc-icon">💰</div><div class="calc-title">EMI Calculator</div><div class="calc-sub">Loan EMI, interest, total</div></div>
      <div class="calc-form">
        <div class="calc-field"><label>Loan Amount (₹)</label><input type="number" id="emiPrincipal" placeholder="e.g. 500000" class="calc-input"></div>
        <div class="calc-field"><label>Interest Rate (% per year)</label><input type="number" id="emiRate" placeholder="e.g. 8.5" step="0.1" class="calc-input"></div>
        <div class="calc-field"><label>Tenure (Years)</label><input type="number" id="emiYears" placeholder="e.g. 5" class="calc-input"></div>
        <button class="calc-btn" onclick="calculateEMI()">Calculate EMI</button>
      </div><div id="emiResult" class="calc-result"></div>`;
  } else if (type === 'gst') {
    c.innerHTML = `<div class="calc-header"><div class="calc-icon">🧾</div><div class="calc-title">GST Calculator</div><div class="calc-sub">Add or remove GST</div></div>
      <div class="calc-form">
        <div class="calc-field"><label>Amount (₹)</label><input type="number" id="gstAmount" placeholder="e.g. 1000" class="calc-input"></div>
        <div class="calc-field"><label>GST Rate (%)</label><select id="gstRate" class="calc-select"><option value="5">5%</option><option value="12">12%</option><option value="18" selected>18%</option><option value="28">28%</option></select></div>
        <div class="calc-btn-row"><button class="calc-btn" onclick="calcGST('add')">Add GST</button><button class="calc-btn" onclick="calcGST('remove')">Remove GST</button></div>
      </div><div id="gstResult" class="calc-result"></div>`;
  } else if (type === 'age') {
    c.innerHTML = `<div class="calc-header"><div class="calc-icon">🎂</div><div class="calc-title">Age Calculator</div><div class="calc-sub">Exact age from DOB</div></div>
      <div class="calc-form">
        <div class="calc-field"><label>Date of Birth</label><input type="date" id="dobInput" class="calc-input"></div>
        <button class="calc-btn" onclick="calculateAge()">Calculate Age</button>
      </div><div id="ageResult" class="calc-result"></div>`;
  } else if (type === 'bmi') {
    c.innerHTML = `<div class="calc-header"><div class="calc-icon">⚖️</div><div class="calc-title">BMI Calculator</div><div class="calc-sub">Body Mass Index</div></div>
      <div class="calc-form">
        <div class="calc-field"><label>Weight (kg)</label><input type="number" id="bmiWeight" placeholder="e.g. 70" step="0.1" class="calc-input"></div>
        <div class="calc-field"><label>Height (cm)</label><input type="number" id="bmiHeight" placeholder="e.g. 175" step="0.1" class="calc-input"></div>
        <button class="calc-btn" onclick="calculateBMI()">Calculate BMI</button>
      </div><div id="bmiResult" class="calc-result"></div>`;
  } else if (type === 'unit') {
    c.innerHTML = `<div class="calc-header"><div class="calc-icon">📏</div><div class="calc-title">Unit Converter</div><div class="calc-sub">Length, weight, temp</div></div>
      <div class="calc-form">
        <div class="calc-field"><label>Value</label><input type="number" id="unitValue" placeholder="e.g. 100" class="calc-input"></div>
        <div class="calc-field"><label>Convert From</label><select id="unitType" class="calc-select"><option value="length">Length (Meters)</option><option value="weight">Weight (Kilograms)</option><option value="temp">Temperature (Celsius)</option></select></div>
        <button class="calc-btn" onclick="convertUnit()">Convert</button>
      </div><div id="unitResult" class="calc-result"></div>`;
  } else if (type === 'qr') {
    c.innerHTML = `<div class="calc-header"><div class="calc-icon">🔲</div><div class="calc-title">QR Generator</div><div class="calc-sub">Text/URL se QR banao</div></div>
      <div class="calc-form">
        <div class="calc-field"><label>Text or URL</label><input type="text" id="qrText" placeholder="https://example.com" class="calc-input"></div>
        <div class="calc-field"><label>Size (pixels)</label><input type="number" id="qrSize" value="400" class="calc-input"></div>
        <button class="calc-btn" onclick="generateQR()">Generate QR</button>
      </div><div id="qrResult" class="calc-result"></div>`;
  } else if (type === 'crop') {
    c.innerHTML = `<div class="control-label">Quick Ratios</div><div class="control-row">
      <button class="ctrl-btn" onclick="cropImage(1,1)">1:1</button><button class="ctrl-btn" onclick="cropImage(16,9)">16:9</button><button class="ctrl-btn" onclick="cropImage(9,16)">9:16</button>
      <button class="ctrl-btn" onclick="cropImage(4,5)">4:5</button><button class="ctrl-btn" onclick="cropImage(3,4)">3:4</button><button class="ctrl-btn" onclick="cropImage(2,2)">2:2</button></div>
      <div class="control-label">Manual</div>
      <div class="manual-row"><input type="number" id="cropW" placeholder="W" class="manual-input"><span class="manual-sep">:</span><input type="number" id="cropH" placeholder="H" class="manual-input"><button class="ctrl-btn primary" onclick="manualCrop()">Crop</button></div>`;
  } else if (type === 'filters') {
    c.innerHTML = `<div class="control-label">Filters</div><div class="control-row">
      <button class="ctrl-btn" onclick="applyFilter('none')">Original</button><button class="ctrl-btn" onclick="applyFilter('grayscale')">B&W</button><button class="ctrl-btn" onclick="applyFilter('sepia')">Sepia</button>
      <button class="ctrl-btn" onclick="applyFilter('saturate')">Vivid</button><button class="ctrl-btn" onclick="applyFilter('contrast')">Contrast</button><button class="ctrl-btn" onclick="applyFilter('brightness')">Bright</button>
      <button class="ctrl-btn" onclick="applyFilter('blur')">Blur</button><button class="ctrl-btn" onclick="applyFilter('invert')">Invert</button><button class="ctrl-btn" onclick="applyFilter('cool')">Cool</button>
      <button class="ctrl-btn" onclick="applyFilter('warm')">Warm</button><button class="ctrl-btn" onclick="applyFilter('vintage')">Vintage</button><button class="ctrl-btn" onclick="applyFilter('dramatic')">Dramatic</button>
      <button class="ctrl-btn" onclick="applyFilter('neon')">Neon</button><button class="ctrl-btn" onclick="applyFilter('fade')">Fade</button></div>`;
  } else if (type === 'adjust') {
    c.innerHTML = `<div class="control-label">Brightness</div><div class="control-row"><button class="ctrl-btn" onclick="applyAdjust('brightness','130%')">+30%</button><button class="ctrl-btn" onclick="applyAdjust('brightness','70%')">-30%</button></div>
      <div class="control-label">Contrast</div><div class="control-row"><button class="ctrl-btn" onclick="applyAdjust('contrast','150%')">+50%</button><button class="ctrl-btn" onclick="applyAdjust('contrast','70%')">-30%</button></div>
      <div class="control-label">Saturation</div><div class="control-row"><button class="ctrl-btn" onclick="applyAdjust('saturate','180%')">Vivid</button><button class="ctrl-btn" onclick="applyAdjust('saturate','50%')">Muted</button></div>
      <div class="control-label">Blur</div><div class="control-row"><button class="ctrl-btn" onclick="applyAdjust('blur','1px')">Light</button><button class="ctrl-btn" onclick="applyAdjust('blur','3px')">Medium</button><button class="ctrl-btn" onclick="applyAdjust('blur','6px')">Heavy</button></div>`;
  } else if (type === 'resize') {
    c.innerHTML = `<div class="control-label">Quick</div><div class="control-row"><button class="ctrl-btn" onclick="resizeImage(50)">50%</button><button class="ctrl-btn" onclick="resizeImage(75)">75%</button><button class="ctrl-btn" onclick="resizeImage(150)">150%</button><button class="ctrl-btn" onclick="resizeImage(200)">200%</button></div>
      <div class="control-label">Manual Size</div><div class="manual-row"><input type="number" id="resizeW" placeholder="Width" class="manual-input"><span class="manual-sep">×</span><input type="number" id="resizeH" placeholder="Height" class="manual-input"><button class="ctrl-btn primary" onclick="manualResize()">Apply</button></div>
      <div class="control-label">Manual %</div><div class="manual-row"><input type="number" id="resizePercent" placeholder="%" class="manual-input"><button class="ctrl-btn primary" onclick="manualResizePercent()">Resize</button></div>`;
  } else if (type === 'rotate') {
    c.innerHTML = `<div class="control-label">Rotate</div><div class="control-row"><button class="ctrl-btn" onclick="rotateImage(-90)">↺ 90°</button><button class="ctrl-btn" onclick="rotateImage(90)">↻ 90°</button><button class="ctrl-btn" onclick="rotateImage(180)">180°</button></div>
      <div class="control-label">Flip</div><div class="control-row"><button class="ctrl-btn" onclick="flipImage('h')">↔ Horizontal</button><button class="ctrl-btn" onclick="flipImage('v')">↕ Vertical</button></div>`;
  } else if (type === 'text') {
    const fonts = ['Arial Black','Impact','Georgia','Times New Roman','Courier New','Verdana','Comic Sans MS','Trebuchet MS'];
    const colors = ['#ffffff','#000000','#ff0080','#a855f7','#00d4ff','#aaff00','#fb923c','#facc15','#f87171','#4ade80','#60a5fa','#c084fc'];
    c.innerHTML = `<div class="control-label">Add Text</div><div class="manual-row"><input type="text" id="textInput" placeholder="Type text..." class="manual-input" style="flex:2;"></div>
      <div class="control-label">Font Size</div><div class="manual-row"><input type="number" id="textSize" value="60" class="manual-input"></div>
      <div class="control-label">Font</div><div class="font-row" id="fontRow">${fonts.map((f,i) => `<button class="font-btn ${i===0?'active':''}" onclick="selectFont('${f}', this)" style="font-family:'${f}';">${f.split(' ')[0]}</button>`).join('')}</div>
      <div class="control-label">Color</div><div class="color-row" id="colorRow">${colors.map((col,i) => `<div class="color-swatch ${i===0?'active':''}" style="background:${col};" onclick="selectColor('${col}', this)"></div>`).join('')}</div>
      <div class="control-row"><button class="ctrl-btn primary" onclick="addTextDrag()">Add Text</button></div>`;
  } else if (type === 'stickers') {
    const groups = [
      { name:'Funny', emojis:['😂','🤣','😅','😜','🤪','😝','😹','🤡','👻','💩'] },
      { name:'Cute', emojis:['🥰','😍','😘','🥺','🤗','😽','🐱','🐶','🐼','🐰'] },
      { name:'Cool', emojis:['😎','🤩','🥳','😏','✌️','🤙','👊','💪','🕶️','🧢'] },
      { name:'Love', emojis:['❤️','💕','💖','💗','💘','💝','💞','❣️','💓','💟'] },
      { name:'Nature', emojis:['🌸','🌺','🌻','🌈','⭐','✨','☀️','🌙','⚡','🔥'] },
      { name:'Symbols', emojis:['💯','✅','❌','❗','❓','⚠️','♻️','🔱','⚜️','💎'] },
      { name:'Animals', emojis:['🦁','🐯','🐸','🦊','🐻','🐨','🦄','🐲','🐺','🦉'] },
      { name:'Objects', emojis:['🎉','🎈','🎁','🏆','👑','🎯','🎨','📸','🎬','🎵'] }
    ];
    c.innerHTML = `<div class="control-label">Sticker Size</div><div class="manual-row"><input type="number" id="stickerSize" value="60" class="manual-input"></div>
      ${groups.map(g => `<div style="font-size:11px;color:#a99bc4;margin:8px 0 4px;font-weight:700;">${g.name}</div><div class="sticker-grid">${g.emojis.map(e => `<button class="sticker-btn" onclick="addStickerDrag('${e}')">${e}</button>`).join('')}</div>`).join('')}`;
  } else if (type === 'passport') {
    c.innerHTML = `<div class="control-label">Passport Size</div><div class="control-row"><button class="ctrl-btn" onclick="makePassport(35,45)">35×45mm</button><button class="ctrl-btn" onclick="makePassport(51,51)">2×2 inch</button><button class="ctrl-btn" onclick="makePassport(25,35)">25×35mm</button><button class="ctrl-btn" onclick="makePassport(35,35)">35×35mm</button><button class="ctrl-btn" onclick="makePassport(50,70)">50×70mm</button></div>
      <div class="control-label">Print Sheet</div><div class="control-row"><button class="ctrl-btn primary" onclick="printSheet()">4×6 inch Sheet</button></div>`;
  } else if (type === 'photo-signature') {
    c.innerHTML = `<div class="control-label">Photo + Signature</div><p style="font-size:12px;color:#b0a0c8;margin-bottom:12px;">Signature upload karo, combo generate karo.</p>
      <div class="control-row"><button class="ctrl-btn" onclick="uploadSignature()">Upload Signature</button></div>
      <div id="signatureStatus" style="font-size:12px;color:#a99bc4;margin:12px 0;"></div>
      <div class="control-row"><button class="ctrl-btn primary" onclick="generatePhotoSignature()">Generate Combo</button></div>`;
  } else if (type === 'signature') {
    c.innerHTML = `<div class="control-label">Signature Maker</div><p style="font-size:12px;color:#b0a0c8;margin-bottom:12px;">Signature photo upload karo.</p>
      <div class="control-row"><button class="ctrl-btn primary" onclick="cleanSignature()">Clean Signature</button></div>`;
  } else if (type === 'scanner') {
    c.innerHTML = `<div class="control-label">Document Scanner</div><p style="font-size:12px;color:#b0a0c8;margin-bottom:12px;">Document photo upload karo.</p>
      <div class="control-row"><button class="ctrl-btn primary" onclick="scanDocument()">Scan to PDF</button></div>`;
  } else if (type === 'idcard') {
    c.innerHTML = `<div class="control-label">ID Card Type</div><div class="control-row"><button class="ctrl-btn" onclick="makeIDCard('aadhaar')">Aadhaar</button><button class="ctrl-btn" onclick="makeIDCard('pan')">PAN</button><button class="ctrl-btn" onclick="makeIDCard('college')">College</button><button class="ctrl-btn" onclick="makeIDCard('employee')">Employee</button></div>`;
  } else if (type === 'splitter') {
    c.innerHTML = `<div class="control-label">Split Into</div><div class="control-row"><button class="ctrl-btn" onclick="splitPhoto(2)">2 Parts</button><button class="ctrl-btn" onclick="splitPhoto(4)">4 Parts</button><button class="ctrl-btn" onclick="splitPhoto(6)">6 Parts</button><button class="ctrl-btn" onclick="splitPhoto(8)">8 Parts</button></div>`;
  } else if (type === 'compress') {
    c.innerHTML = `<div class="control-label">Quick Quality</div><div class="control-row"><button class="ctrl-btn" onclick="compressImage(0.9)">High</button><button class="ctrl-btn" onclick="compressImage(0.6)">Medium</button><button class="ctrl-btn" onclick="compressImage(0.3)">Low</button><button class="ctrl-btn" onclick="compressImage(0.1)">Min</button></div>
      <div class="control-label">Target Size</div><div class="manual-row"><input type="number" id="compressSize" placeholder="Ex: 50" class="manual-input"><select id="compressUnit" class="manual-select"><option value="KB">KB</option><option value="MB">MB</option></select><button class="ctrl-btn primary" onclick="manualCompress()">Compress</button></div>
      <div class="control-label">Quick KB</div><div class="control-row"><button class="ctrl-btn" onclick="compressToKB(20)">20KB</button><button class="ctrl-btn" onclick="compressToKB(50)">50KB</button><button class="ctrl-btn" onclick="compressToKB(100)">100KB</button><button class="ctrl-btn" onclick="compressToKB(200)">200KB</button><button class="ctrl-btn" onclick="compressToKB(500)">500KB</button></div>`;
  } else if (type === 'pdf') {
    c.innerHTML = `<div class="control-label">Convert to PDF</div><div class="control-row"><button class="ctrl-btn primary" onclick="exportPDF()">Download PDF</button></div>
      <div class="control-label">Page Size</div><div class="control-row"><button class="ctrl-btn" onclick="pdfSize='a4';showToast('A4')">A4</button><button class="ctrl-btn" onclick="pdfSize='a5';showToast('A5')">A5</button><button class="ctrl-btn" onclick="pdfSize='letter';showToast('Letter')">Letter</button></div>`;
  } else if (type === 'convert') {
    c.innerHTML = `<div class="control-label">Convert Format</div><div class="control-row"><button class="ctrl-btn" onclick="convertFormat('jpeg')">JPG</button><button class="ctrl-btn" onclick="convertFormat('png')">PNG</button><button class="ctrl-btn" onclick="convertFormat('webp')">WEBP</button></div>`;
  } else if (type === 'frames') {
    c.innerHTML = `<div class="control-label">Frame Style</div><div class="control-row"><button class="ctrl-btn" onclick="applyFrame('simple')">Simple</button><button class="ctrl-btn" onclick="applyFrame('rounded')">Rounded</button><button class="ctrl-btn" onclick="applyFrame('vintage')">Vintage</button><button class="ctrl-btn" onclick="applyFrame('glow')">Glow</button><button class="ctrl-btn" onclick="applyFrame('shadow')">Shadow</button><button class="ctrl-btn" onclick="applyFrame('polaroid')">Polaroid</button></div>`;
  } else if (type === 'collage') {
    c.innerHTML = `<div class="control-label">Layout</div><div class="control-row"><button class="ctrl-btn" onclick="setCollageLayout('2x2')">2×2</button><button class="ctrl-btn" onclick="setCollageLayout('2x1')">2×1</button><button class="ctrl-btn" onclick="setCollageLayout('1x2')">1×2</button><button class="ctrl-btn" onclick="setCollageLayout('3x3')">3×3</button></div>
      <div class="control-label">Photos</div><div class="manual-row"><input type="file" id="collageUpload" accept="image/*" multiple onchange="addCollagePhoto(this)" class="manual-input"></div>
      <div class="control-row"><button class="ctrl-btn primary" onclick="buildCollage()">Build Collage</button></div>
      <div id="collageStatus" style="font-size:12px;color:#a99bc4;margin-top:12px;"></div>`;
  } else if (type === 'video-trim') {
    c.innerHTML = `<div id="videoPendingMsg"><div class="control-label">Video Trimmer</div><p style="font-size:13px;color:#b0a0c8;text-align:center;padding:40px 20px;">📹 Video upload karo trim karne ke liye</p></div>
      <div id="videoActiveUI" style="display:none">
        <div class="control-label">Trim Range</div>
        <div style="padding:16px;background:linear-gradient(135deg, rgba(168,85,247,0.15), rgba(236,72,153,0.1));border:1.5px solid rgba(168,85,247,0.3);border-radius:18px;margin-bottom:16px;">
          <div style="display:flex;justify-content:space-between;font-size:13px;font-weight:800;color:#c0b0d8;margin-bottom:8px;font-family:monospace;">
            <span>START: <b id="trimStartLabel" style="color:#ff0080">0.0s</b></span><span>END: <b id="trimEndLabel" style="color:#a855f7">0.0s</b></span>
          </div>
          <div style="font-size:11px;color:#a99bc4;margin-bottom:4px;font-weight:700;">START TIME</div>
          <input type="range" id="trimStartSlider" min="0" max="100" step="0.1" value="0" style="width:100%;margin-bottom:12px;accent-color:#ff0080;">
          <div style="font-size:11px;color:#a99bc4;margin-bottom:4px;font-weight:700;">END TIME</div>
          <input type="range" id="trimEndSlider" min="0" max="100" step="0.1" value="100" style="width:100%;accent-color:#a855f7;">
          <div style="display:flex;justify-content:space-between;font-size:12px;color:#a99bc4;margin-top:12px;">
            <span>Duration: <b id="trimDuration" style="color:#fff">0.0s</b></span><span>Size: <b id="trimSize" style="color:#fff">0MB</b></span>
          </div>
        </div>
        <div class="control-row">
          <button class="ctrl-btn primary" onclick="trimVideo('fast')" style="flex:1;">⚡ Fast Trim</button>
          <button class="ctrl-btn" onclick="trimVideo('quality')" style="flex:1;">✨ Quality Trim</button>
        </div>
        <p style="font-size:11px;color:#a99bc4;margin-top:12px;line-height:1.5;">⚡ Fast — 3-5 sec (quick, kuch players mein issue)<br>✨ Quality — 1-2 min (guaranteed play, re-encode)</p>
      </div>`;
  } else if (type === 'video-compress') {
    c.innerHTML = `<div id="videoPendingMsg"><div class="control-label">Video Compress</div><p style="font-size:13px;color:#b0a0c8;text-align:center;padding:40px 20px;">📹 Video upload karo compress karne ke liye</p></div>
      <div id="videoActiveUI" style="display:none">
        <div class="control-label">Compression Level</div>
        <div style="padding:16px;background:linear-gradient(135deg, rgba(168,85,247,0.15), rgba(236,72,153,0.1));border:1.5px solid rgba(168,85,247,0.3);border-radius:18px;margin-bottom:16px;">
          <div style="display:flex;justify-content:space-between;font-size:12px;color:#a99bc4;margin-bottom:12px;"><span>Original: <b id="compressOrigSize" style="color:#fff">0MB</b></span><span>Duration: <b id="compressDuration" style="color:#fff">0.0s</b></span></div>
          <div class="control-label">Quality</div>
          <div class="control-row"><button class="ctrl-btn" onclick="selectCompressQuality('high',this)">High</button><button class="ctrl-btn active" onclick="selectCompressQuality('medium',this)">Medium</button><button class="ctrl-btn" onclick="selectCompressQuality('low',this)">Low</button></div>
        </div>
        <div class="control-row"><button class="ctrl-btn primary" onclick="compressVideo()">🗜️ Compress & Download</button></div>
      </div>`;
  } else if (type === 'video-gif') {
    c.innerHTML = `<div id="videoPendingMsg"><div class="control-label">Video to GIF</div><p style="font-size:13px;color:#b0a0c8;text-align:center;padding:40px 20px;">📹 Video upload karo GIF banane ke liye</p></div>
      <div id="videoActiveUI" style="display:none">
        <div class="control-label">GIF Settings</div>
        <div style="padding:16px;background:linear-gradient(135deg, rgba(168,85,247,0.15), rgba(236,72,153,0.1));border:1.5px solid rgba(168,85,247,0.3);border-radius:18px;margin-bottom:16px;">
          <div class="control-label">Start Time (seconds)</div><input type="number" id="gifStart" value="0" step="0.1" class="manual-input" style="width:100%;margin-bottom:12px;">
          <div class="control-label">Duration (seconds)</div><input type="number" id="gifDuration" value="3" step="0.1" class="manual-input" style="width:100%;margin-bottom:12px;">
          <div class="control-label">FPS</div><select id="gifFps" class="manual-select" style="width:100%;"><option value="10">10 FPS</option><option value="15" selected>15 FPS</option><option value="24">24 FPS</option></select>
        </div>
        <div class="control-row"><button class="ctrl-btn primary" onclick="videoToGif()">🎞️ Make GIF</button></div>
      </div>`;
  } else if (type === 'video-mp3') {
    c.innerHTML = `<div id="videoPendingMsg"><div class="control-label">Video to MP3</div><p style="font-size:13px;color:#b0a0c8;text-align:center;padding:40px 20px;">📹 Video upload karo MP3 nikalne ke liye</p></div>
      <div id="videoActiveUI" style="display:none">
        <div class="control-label">Audio Info</div>
        <div style="padding:16px;background:linear-gradient(135deg, rgba(168,85,247,0.15), rgba(236,72,153,0.1));border:1.5px solid rgba(168,85,247,0.3);border-radius:18px;margin-bottom:16px;">
          <div style="display:flex;justify-content:space-between;font-size:12px;color:#a99bc4;"><span>Duration: <b id="mp3Duration" style="color:#fff">0.0s</b></span><span>Size: <b id="mp3Size" style="color:#fff">0MB</b></span></div>
        </div>
        <div class="control-row"><button class="ctrl-btn primary" onclick="extractMp3()">🎵 Extract MP3</button></div>
      </div>`;
  } else if (type === 'video-enhance') {
    c.innerHTML = `<div id="videoPendingMsg"><div class="control-label">Video Enhance</div><p style="font-size:13px;color:#b0a0c8;text-align:center;padding:40px 20px;">📹 Video upload karo enhance karne ke liye</p></div>
      <div id="videoActiveUI" style="display:none">
        <div class="control-label">Enhance Type</div>
        <div style="padding:16px;background:linear-gradient(135deg, rgba(168,85,247,0.15), rgba(236,72,153,0.1));border:1.5px solid rgba(168,85,247,0.3);border-radius:18px;margin-bottom:16px;">
          <div class="control-row"><button class="ctrl-btn" onclick="selectEnhanceType('sharpen',this)">🔍 Sharpen</button><button class="ctrl-btn" onclick="selectEnhanceType('denoise',this)">🧹 Denoise</button><button class="ctrl-btn active" onclick="selectEnhanceType('bright',this)">☀️ Brighten</button><button class="ctrl-btn" onclick="selectEnhanceType('contrast',this)">🎨 Contrast</button></div>
        </div>
        <div class="control-row"><button class="ctrl-btn primary" onclick="enhanceVideo()">✨ Enhance & Download</button></div>
      </div>`;
  } else {
    c.innerHTML = `<div class="control-label">Coming Soon</div><p style="font-size:13px;color:#888;padding:12px 0;">Under development.</p>`;
  }
}function calculateEMI() {
  const p = parseFloat(document.getElementById('emiPrincipal').value);
  const r = parseFloat(document.getElementById('emiRate').value);
  const y = parseFloat(document.getElementById('emiYears').value);
  const res = document.getElementById('emiResult');
  if (!p || !r || !y) { res.classList.add('show','error'); res.innerHTML = '⚠️ Fill all'; return; }
  const mr = r/12/100, m = y*12;
  const emi = (p*mr*Math.pow(1+mr,m))/(Math.pow(1+mr,m)-1);
  const total = emi*m, interest = total-p;
  res.classList.remove('error'); res.classList.add('show');
  res.innerHTML = `<div class="result-row"><span>Monthly EMI</span><strong>₹${emi.toFixed(0)}</strong></div><div class="result-row"><span>Total Interest</span><strong>₹${interest.toFixed(0)}</strong></div><div class="result-row"><span>Total Payment</span><strong>₹${total.toFixed(0)}</strong></div>`;
}

function calcGST(mode) {
  const a = parseFloat(document.getElementById('gstAmount').value);
  const r = parseFloat(document.getElementById('gstRate').value);
  const res = document.getElementById('gstResult');
  if (!a) { res.classList.add('show','error'); res.innerHTML = '⚠️ Enter amount'; return; }
  let b, g, t;
  if (mode === 'add') { b = a; g = a*r/100; t = b+g; }
  else { b = a/(1+r/100); g = a-b; t = a; }
  res.classList.remove('error'); res.classList.add('show');
  res.innerHTML = `<div class="result-row"><span>Base</span><strong>₹${b.toFixed(2)}</strong></div><div class="result-row"><span>GST (${r}%)</span><strong>₹${g.toFixed(2)}</strong></div><div class="result-row"><span>Total</span><strong>₹${t.toFixed(2)}</strong></div>`;
}

function calculateAge() {
  const dob = new Date(document.getElementById('dobInput').value);
  const res = document.getElementById('ageResult');
  if (isNaN(dob.getTime())) { res.classList.add('show','error'); res.innerHTML = '⚠️ Select date'; return; }
  const now = new Date();
  let y = now.getFullYear()-dob.getFullYear();
  let m = now.getMonth()-dob.getMonth();
  let d = now.getDate()-dob.getDate();
  if (d<0) { m--; d+=30; }
  if (m<0) { y--; m+=12; }
  const td = Math.floor((now-dob)/(1000*60*60*24));
  res.classList.remove('error'); res.classList.add('show');
  res.innerHTML = `<div class="result-row"><span>Age</span><strong>${y}y ${m}m ${d}d</strong></div><div class="result-row"><span>Total Days</span><strong>${td}</strong></div><div class="result-row"><span>Total Months</span><strong>${y*12+m}</strong></div>`;
}

function calculateBMI() {
  const w = parseFloat(document.getElementById('bmiWeight').value);
  const h = parseFloat(document.getElementById('bmiHeight').value);
  const res = document.getElementById('bmiResult');
  if (!w || !h) { res.classList.add('show','error'); res.innerHTML = '⚠️ Fill all'; return; }
  const bmi = w/Math.pow(h/100,2);
  let cat = '', col = '';
  if (bmi<18.5) { cat='Underweight'; col='#60a5fa'; }
  else if (bmi<25) { cat='Normal'; col='#4ade80'; }
  else if (bmi<30) { cat='Overweight'; col='#fb923c'; }
  else { cat='Obese'; col='#f87171'; }
  res.classList.remove('error'); res.classList.add('show');
  res.innerHTML = `<div class="result-row"><span>BMI</span><strong>${bmi.toFixed(2)}</strong></div><div class="result-row"><span>Category</span><strong style="color:${col}">${cat}</strong></div><div class="result-row"><span>Healthy Range</span><strong>18.5 - 24.9</strong></div>`;
}

function convertUnit() {
  const v = parseFloat(document.getElementById('unitValue').value);
  const t = document.getElementById('unitType').value;
  const res = document.getElementById('unitResult');
  if (!v) { res.classList.add('show','error'); res.innerHTML = '⚠️ Enter value'; return; }
  let html = '';
  if (t === 'length') html = `<div class="result-row"><span>Meters</span><strong>${v}</strong></div><div class="result-row"><span>Feet</span><strong>${(v*3.28084).toFixed(2)}</strong></div><div class="result-row"><span>Inches</span><strong>${(v*39.3701).toFixed(2)}</strong></div><div class="result-row"><span>KM</span><strong>${(v/1000).toFixed(4)}</strong></div><div class="result-row"><span>Miles</span><strong>${(v/1609.34).toFixed(4)}</strong></div><div class="result-row"><span>CM</span><strong>${(v*100).toFixed(2)}</strong></div>`;
  else if (t === 'weight') html = `<div class="result-row"><span>KG</span><strong>${v}</strong></div><div class="result-row"><span>Pounds</span><strong>${(v*2.20462).toFixed(2)}</strong></div><div class="result-row"><span>Grams</span><strong>${(v*1000).toFixed(0)}</strong></div>`;
  else html = `<div class="result-row"><span>Celsius</span><strong>${v}°C</strong></div><div class="result-row"><span>Fahrenheit</span><strong>${((v*9/5)+32).toFixed(2)}°F</strong></div><div class="result-row"><span>Kelvin</span><strong>${(v+273.15).toFixed(2)}K</strong></div>`;
  res.classList.remove('error'); res.classList.add('show');
  res.innerHTML = html;
}

function generateQR() {
  const text = document.getElementById('qrText').value;
  const size = parseInt(document.getElementById('qrSize').value) || 400;
  const res = document.getElementById('qrResult');
  if (!text) { res.classList.add('show','error'); res.innerHTML = '⚠️ Enter text'; return; }
  const url = 'https://api.qrserver.com/v1/create-qr-code/?size='+size+'x'+size+'&data='+encodeURIComponent(text);
  res.classList.remove('error'); res.classList.add('show');
  res.innerHTML = `<img src="${url}" style="max-width:100%;border-radius:12px;">`;
}

function cropImage(w, h) {
  if (!currentImage) { showToast('Upload photo'); return; }
  const iw = currentImage.width, ih = currentImage.height;
  const tr = w/h, ir = iw/ih;
  let nw, nh, ox, oy;
  if (ir > tr) { nh = ih; nw = ih*tr; ox = (iw-nw)/2; oy = 0; }
  else { nw = iw; nh = iw/tr; ox = 0; oy = (ih-nh)/2; }
  const t = document.createElement('canvas');
  t.width = nw; t.height = nh;
  t.getContext('2d').drawImage(currentImage, ox, oy, nw, nh, 0, 0, nw, nh);
  const ni = new Image();
  ni.onload = () => { currentImage = ni; redraw(); showToast('Cropped ✂️'); };
  ni.src = t.toDataURL();
}

function manualCrop() {
  const w = parseFloat(document.getElementById('cropW').value);
  const h = parseFloat(document.getElementById('cropH').value);
  if (!w || !h) { showToast('Enter W and H'); return; }
  cropImage(w, h);
}

function rotateImage(deg) {
  if (!currentImage) { showToast('Upload photo'); return; }
  const t = document.createElement('canvas');
  const a = deg*Math.PI/180;
  const c = Math.abs(Math.cos(a)), s = Math.abs(Math.sin(a));
  t.width = currentImage.width*c + currentImage.height*s;
  t.height = currentImage.width*s + currentImage.height*c;
  const tc = t.getContext('2d');
  tc.translate(t.width/2, t.height/2); tc.rotate(a);
  tc.drawImage(currentImage, -currentImage.width/2, -currentImage.height/2);
  const ni = new Image();
  ni.onload = () => { currentImage = ni; redraw(); showToast('Rotated ↻'); };
  ni.src = t.toDataURL();
}

function flipImage(dir) {
  if (!currentImage) { showToast('Upload photo'); return; }
  const t = document.createElement('canvas');
  t.width = currentImage.width; t.height = currentImage.height;
  const tc = t.getContext('2d');
  if (dir === 'h') { tc.translate(currentImage.width, 0); tc.scale(-1, 1); }
  else { tc.translate(0, currentImage.height); tc.scale(1, -1); }
  tc.drawImage(currentImage, 0, 0);
  const ni = new Image();
  ni.onload = () => { currentImage = ni; redraw(); showToast('Flipped ↔'); };
  ni.src = t.toDataURL();
}

function applyFilter(type) {
  const f = { 'none':'none','grayscale':'grayscale(100%)','sepia':'sepia(80%)','saturate':'saturate(180%)','contrast':'contrast(150%)','brightness':'brightness(130%)','blur':'blur(2px)','invert':'invert(100%)','cool':'hue-rotate(180deg) saturate(120%)','warm':'sepia(30%) saturate(140%) brightness(110%)','vintage':'sepia(50%) contrast(90%) brightness(105%)','dramatic':'contrast(180%) saturate(80%)','neon':'saturate(300%) contrast(150%) hue-rotate(30deg)','fade':'opacity(0.85) saturate(70%) brightness(115%)' };
  if (canvas) canvas.style.filter = f[type] || 'none';
  showToast('Filter applied ✨');
}

function applyAdjust(type, val) {
  if (canvas) canvas.style.filter = type+'('+val+')';
  showToast(type+' '+val);
}

function resizeImage(p) {
  if (!currentImage) { showToast('Upload photo'); return; }
  const t = document.createElement('canvas');
  t.width = Math.round(currentImage.width*p/100);
  t.height = Math.round(currentImage.height*p/100);
  t.getContext('2d').drawImage(currentImage, 0, 0, t.width, t.height);
  const ni = new Image();
  ni.onload = () => { currentImage = ni; redraw(); showToast('Resized 📐'); };
  ni.src = t.toDataURL();
}

function manualResize() {
  if (!currentImage) { showToast('Upload photo'); return; }
  const w = parseInt(document.getElementById('resizeW').value);
  const h = parseInt(document.getElementById('resizeH').value);
  if (!w || !h) { showToast('Enter W and H'); return; }
  const t = document.createElement('canvas');
  t.width = w; t.height = h;
  t.getContext('2d').drawImage(currentImage, 0, 0, w, h);
  const ni = new Image();
  ni.onload = () => { currentImage = ni; redraw(); showToast('Resized 📐'); };
  ni.src = t.toDataURL();
}

function manualResizePercent() {
  const p = parseFloat(document.getElementById('resizePercent').value);
  if (!p) { showToast('Enter percent'); return; }
  resizeImage(p);
}

function compressImage(q) {
  if (!currentImage) { showToast('Upload photo'); return; }
  const url = canvas.toDataURL('image/jpeg', q);
  const ni = new Image();
  ni.onload = () => { currentImage = ni; redraw(); showToast('Compressed 🗜️'); };
  ni.src = url;
}

function compressToKB(targetKB) {
  if (!currentImage) { showToast('Upload photo'); return; }
  const tb = targetKB*1024;
  let lo = 0.01, hi = 1.0, best = null;
  for (let i=0;i<20;i++) {
    const mid = (lo+hi)/2;
    const url = canvas.toDataURL('image/jpeg', mid);
    const b = Math.round(url.length*0.75);
    if (b <= tb) { best = {url,size:b}; lo = mid; } else hi = mid;
  }
  if (!best) { const url = canvas.toDataURL('image/jpeg', 0.01); best = {url,size:Math.round(url.length*0.75)}; }
  const ni = new Image();
  ni.onload = () => { currentImage = ni; redraw(); showToast('Compressed ~'+Math.round(best.size/1024)+'KB'); };
  ni.src = best.url;
}

function manualCompress() {
  const s = parseFloat(document.getElementById('compressSize').value);
  const u = document.getElementById('compressUnit').value;
  if (!s) { showToast('Enter size'); return; }
  compressToKB(u === 'MB' ? s*1024 : s);
}

function selectFont(font, btn) {
  selectedFont = font;
  document.querySelectorAll('#fontRow .font-btn').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
}

function selectColor(color, swatch) {
  selectedTextColor = color;
  document.querySelectorAll('#colorRow .color-swatch').forEach(s => s.classList.remove('active'));
  swatch.classList.add('active');
}

function addTextDrag() {
  if (!currentImage) { showToast('Upload photo'); return; }
  const text = document.getElementById('textInput').value;
  const size = parseInt(document.getElementById('textSize').value) || 60;
  if (!text) { showToast('Enter text'); return; }
  const d = document.createElement('div');
  d.className = 'drag-item text-item';
  d.style.fontFamily = selectedFont;
  d.style.color = selectedTextColor;
  d.style.fontSize = size+'px';
  d.style.left = '50%'; d.style.top = '50%';
  d.style.transform = 'translate(-50%,-50%)';
  d.style.textShadow = '2px 2px 4px rgba(0,0,0,0.7)';
  d.textContent = text;
  d.dataset.type = 'text'; d.dataset.font = selectedFont;
  d.dataset.color = selectedTextColor; d.dataset.size = size;
  makeDraggable(d);
  if (overlayLayer) overlayLayer.appendChild(d);
  overlayItems.push(d);
  showToast('Text added ✨');
}

function addStickerDrag(emoji) {
  if (!currentImage) { showToast('Upload photo'); return; }
  const size = parseInt(document.getElementById('stickerSize')?.value) || 60;
  const d = document.createElement('div');
  d.className = 'drag-item sticker-item';
  d.style.left = '50%'; d.style.top = '50%';
  d.style.transform = 'translate(-50%,-50%)';
  d.style.fontSize = size+'px';
  d.textContent = emoji;
  d.dataset.type = 'sticker'; d.dataset.emoji = emoji; d.dataset.size = size;
  makeDraggable(d);
  if (overlayLayer) overlayLayer.appendChild(d);
  overlayItems.push(d);
  showToast('Sticker added ✨');
}

function makeDraggable(el) {
  let drag = false, sx, sy, sl, st;
  const start = (e) => {
    drag = true;
    const p = e.touches ? e.touches[0] : e;
    const r = overlayLayer.getBoundingClientRect();
    sx = p.clientX; sy = p.clientY;
    const er = el.getBoundingClientRect();
    sl = er.left - r.left; st = er.top - r.top;
    e.preventDefault();
  };
  const move = (e) => {
    if (!drag) return;
    const p = e.touches ? e.touches[0] : e;
    el.style.transform = 'none';
    el.style.left = (sl + p.clientX - sx) + 'px';
    el.style.top = (st + p.clientY - sy) + 'px';
    e.preventDefault();
  };
  const end = () => { drag = false; };
  el.addEventListener('mousedown', start);
  el.addEventListener('touchstart', start);
  document.addEventListener('mousemove', move);
  document.addEventListener('touchmove', move);
  document.addEventListener('mouseup', end);
  document.addEventListener('touchend', end);
}

function applyOverlay() {
  if (overlayItems.length === 0 || !canvas) return;
  const cr = canvas.getBoundingClientRect();
  overlayItems.forEach(item => {
    const ir = item.getBoundingClientRect();
    const x = ir.left - cr.left;
    const y = ir.top - cr.top;
    if (item.dataset.type === 'text') {
      ctx.font = 'bold ' + item.dataset.size + 'px ' + item.dataset.font;
      ctx.fillStyle = item.dataset.color;
      ctx.strokeStyle = item.dataset.color === '#000000' ? '#ffffff' : '#000000';
      ctx.lineWidth = Math.round(item.dataset.size/15);
      ctx.textAlign = 'left'; ctx.textBaseline = 'top';
      ctx.strokeText(item.textContent, x, y);
      ctx.fillText(item.textContent, x, y);
    } else if (item.dataset.type === 'sticker') {
      ctx.font = item.dataset.size + 'px sans-serif';
      ctx.textAlign = 'left'; ctx.textBaseline = 'top';
      ctx.fillText(item.dataset.emoji, x, y);
    }
  });
  overlayItems = [];
  if (overlayLayer) overlayLayer.innerHTML = '';
  showToast('Applied! ✨');
}

function makePassport(wMM, hMM) {
  if (!currentImage) { showToast('Upload photo'); return; }
  const px = 11.8;
  const tw = Math.round(wMM*px), th = Math.round(hMM*px);
  const t = document.createElement('canvas');
  t.width = tw; t.height = th;
  const tc = t.getContext('2d');
  const ir = currentImage.width/currentImage.height;
  const tr = tw/th;
  let dw, dh, ox, oy;
  if (ir > tr) { dh = th; dw = th*ir; ox = (tw-dw)/2; oy = 0; }
  else { dw = tw; dh = tw/ir; ox = 0; oy = (th-dh)/2; }
  tc.fillStyle = '#fff'; tc.fillRect(0,0,tw,th);
  tc.drawImage(currentImage, ox, oy, dw, dh);
  const ni = new Image();
  ni.onload = () => { currentImage = ni; redraw(); showToast('Passport ready 📸'); };
  ni.src = t.toDataURL();
}

function printSheet() {
  if (!currentImage) { showToast('Make passport first'); return; }
  const sw = 1200, sh = 1800;
  const t = document.createElement('canvas');
  t.width = sw; t.height = sh;
  const tc = t.getContext('2d');
  tc.fillStyle = '#fff'; tc.fillRect(0,0,sw,sh);
  const pw = currentImage.width, ph = currentImage.height;
  const cols = 2, rows = 4;
  const px = (sw - cols*pw)/(cols+1);
  const py = (sh - rows*ph)/(rows+1);
  for (let r=0;r<rows;r++) for (let c=0;c<cols;c++) {
    const x = px + c*(pw+px), y = py + r*(ph+py);
    tc.drawImage(currentImage, x, y, pw, ph);
    tc.strokeStyle = '#ccc'; tc.strokeRect(x, y, pw, ph);
  }
  const ni = new Image();
  ni.onload = () => { currentImage = ni; redraw(); showToast('Sheet ready 📄'); };
  ni.src = t.toDataURL();
}

function uploadSignature() {
  const input = document.createElement('input');
  input.type = 'file'; input.accept = 'image/*';
  input.onchange = (e) => {
    const file = e.target.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = (ev) => {
      const img = new Image();
      img.onload = () => {
        signatureData = img;
        const s = document.getElementById('signatureStatus');
        if (s) s.textContent = '✓ Signature loaded';
        showToast('Signature loaded ✨');
      };
      img.src = ev.target.result;
    };
    reader.readAsDataURL(file);
  };
  input.click();
}

function generatePhotoSignature() {
  if (!currentImage) { showToast('Upload photo first'); return; }
  if (!signatureData) { showToast('Upload signature first'); return; }
  const photoW = 400, photoH = 500, signW = 400, signH = 150, gap = 20;
  const tw = photoW, th = photoH + gap + signH + 40;
  const t = document.createElement('canvas');
  t.width = tw; t.height = th;
  const tc = t.getContext('2d');
  tc.fillStyle = '#fff'; tc.fillRect(0,0,tw,th);
  const ir = currentImage.width/currentImage.height;
  const tr = photoW/photoH;
  let dw, dh, ox, oy;
  if (ir > tr) { dh = photoH; dw = photoH*ir; ox = (photoW-dw)/2; oy = 0; }
  else { dw = photoW; dh = photoW/ir; ox = 0; oy = (photoH-dh)/2; }
  tc.drawImage(currentImage, ox, oy+20, dw, dh);
  tc.strokeStyle = '#000'; tc.strokeRect(0, 20, photoW, photoH);
  const sr = signatureData.width/signatureData.height;
  const str = signW/signH;
  let sdw, sdh, sox, soy;
  if (sr > str) { sdh = signH; sdw = signH*sr; sox = (signW-sdw)/2; soy = 0; }
  else { sdw = signW; sdh = signW/sr; sox = 0; soy = (signH-sdh)/2; }
  tc.drawImage(signatureData, sox, photoH+gap+40+soy, sdw, sdh);
  tc.strokeStyle = '#000'; tc.strokeRect(0, photoH+gap+40, signW, signH);
  const ni = new Image();
  ni.onload = () => { currentImage = ni; redraw(); showToast('Combo ready ✨'); };
  ni.src = t.toDataURL();
}

function cleanSignature() {
  if (!currentImage) { showToast('Upload signature'); return; }
  const t = document.createElement('canvas');
  t.width = currentImage.width; t.height = currentImage.height;
  const tc = t.getContext('2d');
  tc.drawImage(currentImage, 0, 0);
  const id = tc.getImageData(0, 0, t.width, t.height);
  const data = id.data;
  for (let i=0;i<data.length;i+=4) {
    const b = data[i]*0.299 + data[i+1]*0.587 + data[i+2]*0.114;
    if (b > 140) { data[i]=255; data[i+1]=255; data[i+2]=255; data[i+3]=255; }
    else { data[i]=0; data[i+1]=0; data[i+2]=0; data[i+3]=255; }
  }
  tc.putImageData(id, 0, 0);
  const ni = new Image();
  ni.onload = () => { currentImage = ni; redraw(); showToast('Cleaned ✨'); };
  ni.src = t.toDataURL();
}

function scanDocument() {
  if (!currentImage) { showToast('Upload document'); return; }
  if (!window.jspdf) { showToast('PDF lib not loaded'); return; }
  const t = document.createElement('canvas');
  t.width = currentImage.width; t.height = currentImage.height;
  const tc = t.getContext('2d');
  tc.drawImage(currentImage, 0, 0);
  const id = tc.getImageData(0, 0, t.width, t.height);
  const data = id.data;
  for (let i=0;i<data.length;i+=4) {
    const b = data[i]*0.299 + data[i+1]*0.587 + data[i+2]*0.114;
    if (b > 150) { data[i]=255; data[i+1]=255; data[i+2]=255; }
    else { const v = b < 80 ? 0 : b; data[i]=v; data[i+1]=v; data[i+2]=v; }
  }
  tc.putImageData(id, 0, 0);
  const { jsPDF } = window.jspdf;
  const pdf = new jsPDF({ unit: 'pt', format: 'a4' });
  const imgW = 555;
  const imgH = (t.height/t.width)*imgW;
  pdf.addImage(t.toDataURL('image/jpeg', 0.9), 'JPEG', 20, 20, imgW, Math.min(imgH, 800));
  pdf.save('scan-' + Date.now() + '.pdf');
  showToast('PDF ready 📄');
}

function makeIDCard(type) { showToast('ID Card — coming soon'); }

function splitPhoto(parts) {
  if (!currentImage) { showToast('Upload photo'); return; }
  const cols = 2;
  const rows = parts/cols;
  const cw = Math.floor(currentImage.width/cols);
  const ch = Math.floor(currentImage.height/rows);
  const t = document.createElement('canvas');
  t.width = currentImage.width; t.height = currentImage.height;
  const tc = t.getContext('2d');
  tc.drawImage(currentImage, 0, 0);
  tc.strokeStyle = 'rgba(0,0,0,0.5)'; tc.lineWidth = 2;
  for (let c=1;c<cols;c++) { tc.beginPath(); tc.moveTo(c*cw,0); tc.lineTo(c*cw,currentImage.height); tc.stroke(); }
  for (let r=1;r<rows;r++) { tc.beginPath(); tc.moveTo(0,r*ch); tc.lineTo(currentImage.width,r*ch); tc.stroke(); }
  const ni = new Image();
  ni.onload = () => { currentImage = ni; redraw(); showToast(parts + ' parts ready ✂️'); };
  ni.src = t.toDataURL();
}

function exportPDF() {
  if (!window.jspdf) { showToast('PDF lib not loaded'); return; }
  if (!currentImage) { showToast('Upload photo'); return; }
  try {
    const { jsPDF } = window.jspdf;
    const sizes = { 'a4':[595,842], 'a5':[420,595], 'letter':[612,792] };
    const sz = sizes[pdfSize] || sizes['a4'];
    const pdf = new jsPDF({ unit: 'pt', format: pdfSize });
    const imgData = canvas.toDataURL('image/jpeg', 0.92);
    const imgW = sz[0] - 40;
    const imgH = (canvas.height/canvas.width)*imgW;
    pdf.addImage(imgData, 'JPEG', 20, 20, imgW, imgH);
    pdf.save('picly-' + Date.now() + '.pdf');
    showToast('PDF ready 📄');
  } catch (err) { showToast('PDF error'); }
}

function convertFormat(format) {
  if (!currentImage) { showToast('Upload photo'); return; }
  const url = canvas.toDataURL('image/'+format, 0.95);
  const a = document.createElement('a');
  a.download = 'picly-' + Date.now() + '.' + (format === 'jpeg' ? 'jpg' : format);
  a.href = url; a.click();
  showToast('Converted ✨');
}

function applyFrame(style) {
  if (!currentImage) { showToast('Upload photo'); return; }
  const t = document.createElement('canvas');
  const pad = 40;
  t.width = currentImage.width + pad*2;
  t.height = currentImage.height + pad*2;
  const tc = t.getContext('2d');
  if (style === 'simple' || style === 'shadow') {
    tc.fillStyle = '#fff'; tc.fillRect(0,0,t.width,t.height);
    if (style === 'shadow') { tc.shadowColor = '#000'; tc.shadowBlur = 20; }
    tc.drawImage(currentImage, pad, pad);
  } else if (style === 'rounded') {
    tc.fillStyle = '#000'; tc.fillRect(0,0,t.width,t.height);
    tc.drawImage(currentImage, pad, pad);
  } else if (style === 'glow') {
    tc.fillStyle = '#000'; tc.fillRect(0,0,t.width,t.height);
    tc.shadowColor = '#a855f7'; tc.shadowBlur = 30;
    tc.drawImage(currentImage, pad, pad);
  } else if (style === 'vintage') {
    tc.fillStyle = '#f5e6c8'; tc.fillRect(0,0,t.width,t.height);
    tc.drawImage(currentImage, pad, pad);
    tc.strokeStyle = '#8b6f47'; tc.lineWidth = 8;
    tc.strokeRect(pad-4, pad-4, currentImage.width+8, currentImage.height+8);
  } else {
    tc.fillStyle = '#fff'; tc.fillRect(0,0,t.width,t.height+80);
    tc.drawImage(currentImage, pad, pad);
  }
  const ni = new Image();
  ni.onload = () => { currentImage = ni; redraw(); showToast('Frame applied ✨'); };
  ni.src = t.toDataURL();
}

function setCollageLayout(l) { collageLayout = l; showToast('Layout: '+l); }

function addCollagePhoto(input) {
  if (!input.files) return;
  Array.from(input.files).forEach(f => {
    const r = new FileReader();
    r.onload = (e) => {
      const img = new Image();
      img.onload = () => {
        collagePhotos.push(img);
        const s = document.getElementById('collageStatus');
        if (s) s.textContent = '✓ ' + collagePhotos.length + ' photos';
      };
      img.src = e.target.result;
    };
    r.readAsDataURL(f);
  });
}

function buildCollage() {
  if (collagePhotos.length === 0) { showToast('Upload photos'); return; }
  let cols, rows;
  if (collageLayout === '2x2') { cols=2; rows=2; }
  else if (collageLayout === '2x1') { cols=2; rows=1; }
  else if (collageLayout === '3x3') { cols=3; rows=3; }
  else if (collageLayout === '1x2') { cols=1; rows=2; }
  else { cols=2; rows=2; }
  const cs = 400, gap = 10;
  const cw = cols*cs + (cols+1)*gap;
  const ch = rows*cs + (rows+1)*gap;
  const t = document.createElement('canvas');
  t.width = cw; t.height = ch;
  const tc = t.getContext('2d');
  tc.fillStyle = '#0a0a0f'; tc.fillRect(0,0,cw,ch);
  for (let i=0;i<cols*rows;i++) {
    const col = i%cols, row = Math.floor(i/cols);
    const x = gap + col*(cs+gap), y = gap + row*(cs+gap);
    if (i < collagePhotos.length) {
      const img = collagePhotos[i];
      const ir = img.width/img.height;
      let dw, dh, ox, oy;
      if (ir > 1) { dh = cs; dw = cs*ir; ox = (cs-dw)/2; oy = 0; }
      else { dw = cs; dh = cs/ir; ox = 0; oy = (cs-dh)/2; }
      tc.save(); tc.beginPath(); tc.rect(x,y,cs,cs); tc.clip();
      tc.drawImage(img, x+ox, y+oy, dw, dh);
      tc.restore();
    } else {
      tc.fillStyle = '#1a1a24'; tc.fillRect(x,y,cs,cs);
    }
  }
  const ni = new Image();
  ni.onload = () => { currentImage = ni; redraw(); showToast('Collage built ✨'); };
  ni.src = t.toDataURL();
}

function downloadImage() {
  if (!currentImage) { showToast('No image'); return; }
  if (overlayItems.length > 0) applyOverlay();
  const a = document.createElement('a');
  a.download = 'picly-' + Date.now() + '.jpg';
  a.href = canvas.toDataURL('image/jpeg', 0.95);
  a.click();
  showToast('Downloaded! 🎉');
}

function startTrial() { showToast('🎉 7-Day Free Trial Activated!'); }

function showToast(msg) {
  const t = document.getElementById('toast');
  if (!t) return;
  t.textContent = msg;
  t.classList.add('show');
  setTimeout(() => t.classList.remove('show'), 2000);
}

window.addEventListener('DOMContentLoaded', function() {
  canvas = document.getElementById('canvas');
  if (canvas) ctx = canvas.getContext('2d');
  overlayLayer = document.getElementById('overlayLayer');

  const slider = document.getElementById('slider');
  const dots = document.querySelectorAll('#dots .dot');
  let currentSlide = 0;
  let interval;

  function updateDots(i) { dots.forEach((d,x) => d.classList.toggle('active', x===i)); }
  function scrollToSlide(i) {
    if (!slider || !slider.children[i]) return;
    slider.scrollTo({ left: slider.children[i].offsetLeft - 20, behavior: 'smooth' });
    updateDots(i);
  }
  function nextSlide() {
    if (!slider) return;
    currentSlide = (currentSlide + 1) % slider.children.length;
    scrollToSlide(currentSlide);
  }
  function start() { interval = setInterval(nextSlide, 3000); }
  function stop() { clearInterval(interval); }

  if (slider) {
    start();
    slider.addEventListener('touchstart', stop);
    slider.addEventListener('touchend', () => setTimeout(start, 4000));
    slider.addEventListener('mouseenter', stop);
    slider.addEventListener('mouseleave', start);
  }
});