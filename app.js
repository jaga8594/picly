const SERVER_URL = 'https://picly-server-production.up.railway.app';

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
  aistudio: { name:'AI Studio', desc:'AI tools', tools:[
    { id:'ai-text-image', name:'Text to Image', desc:'Prompt → HD image', type:'ai-text-image', img:'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=100&q=80' },
    { id:'ai-bg-remove', name:'BG Remove', desc:'Photo → Transparent', type:'ai-bg-remove', img:'https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?w=100&q=80' },
    { id:'ai-bg-replace', name:'BG Replace', desc:'Photo + AI background', type:'ai-bg-replace', img:'https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?w=100&q=80' },
    { id:'ai-editor', name:'AI Editor', desc:'Edit photo with prompt', type:'ai-editor', img:'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&q=80' },
    { id:'ai-animate', name:'Animate', desc:'Photo → Anime', type:'ai-animate', img:'https://images.unsplash.com/photo-1578632767115-351597cf2477?w=100&q=80' }
  ]},
  aimagic: { name:'AI Magic', desc:'Free photo effects', tools:[
    { id:'ai-enhance', name:'Photo Enhance', desc:'Sharper · Brighter', type:'ai-enhance', img:'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=100&q=80' },
    { id:'ai-anime', name:'Anime Cartoon', desc:'Anime-style effect', type:'ai-anime', img:'https://images.unsplash.com/photo-1578632767115-351597cf2477?w=100&q=80' },
    { id:'ai-restore', name:'Old Photo Restore', desc:'Vintage boost', type:'ai-restore', img:'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=100&q=80' },
    { id:'ai-glow', name:'Glow Effect', desc:'Soft dreamy glow', type:'ai-glow', img:'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&q=80' }
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
let selectedCompressQuality = 'medium';
let selectedEnhanceType = 'bright';
let selectedResolution = '1080';
let selectedAiMagic = 'enhance';
let selectedAiRatio = '1:1';
let currentAiImage = null;
let currentAiImageResult = null;
let currentBgImage = null;
let currentRemoveBgImage = null;
let currentEditorImage = null;
let currentEditorResult = null;
let currentAnimateImage = null;
let currentAnimateResult = null;
let animeSession = null;
let wakeLock = null;
let dotsInterval = null;
let isProcessing = false;

const CALCULATOR_TYPES = ['emi','gst','age','bmi','unit','qr'];
const VIDEO_TYPES = ['video-trim','video-compress','video-gif','video-mp3','video-enhance'];
const AI_MAGIC_TYPES = ['ai-enhance','ai-anime','ai-restore','ai-glow'];
const AI_STUDIO_TYPES = ['ai-text-image','ai-bg-remove','ai-bg-replace','ai-editor','ai-animate'];

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
  currentAiImage = null;
  currentAiImageResult = null;
  currentBgImage = null;
  currentRemoveBgImage = null;
  currentEditorImage = null;
  currentEditorResult = null;
  currentAnimateImage = null;
  currentAnimateResult = null;
  selectedAiRatio = '1:1';

  document.getElementById('editorTitle').textContent = tool.name;
  const ol = document.getElementById('overlayLayer');
  if (ol) ol.innerHTML = '';
  const vp = document.getElementById('videoPreview');
  if (vp) { vp.style.display = 'none'; vp.src = ''; }

  const isCalculator = CALCULATOR_TYPES.includes(tool.type);
  const isVideo = VIDEO_TYPES.includes(tool.type);
  const isAiMagic = AI_MAGIC_TYPES.includes(tool.type);
  const isAiStudio = AI_STUDIO_TYPES.includes(tool.type);

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
      uploadHint.textContent = 'MP4, MOV, WEBM — max 50MB';
      uploadInput.setAttribute('accept', 'video/*');
      uploadTitle.textContent = 'Tap to upload video';
    }
  } else if (isAiMagic) {
    if (uploadArea) uploadArea.style.display = 'none';
    if (canvasWrap) canvasWrap.style.display = 'block';
    if (canvasContainer) canvasContainer.style.display = 'none';
    if (actionBtns) actionBtns.style.display = 'none';
  } else if (isAiStudio) {
    if (uploadArea) uploadArea.style.display = 'none';
    if (canvasWrap) canvasWrap.style.display = 'block';
    if (canvasContainer) canvasContainer.style.display = 'none';
    if (actionBtns) actionBtns.style.display = 'none';
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
        ss.max = currentVideoDuration;
        es.max = currentVideoDuration;
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

function selectResolution(res, btn) {
  selectedResolution = res;
  btn.parentElement.querySelectorAll('.ctrl-btn').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  if (res === '2k') showToast('⚡ 2K HD — 30-60 sec lagenge');
  if (res === '1080') showToast('🎬 1080p FHD — 15-30 sec lagenge');
}

function selectAiMagic(type, btn) {
  selectedAiMagic = type;
  btn.parentElement.querySelectorAll('.ctrl-btn').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  const hints = { enhance: '✨ Sharper, brighter', anime: '🎭 Anime effect', restore: '🎨 Old photo look', glow: '🌟 Soft glow' };
  const hint = document.getElementById('aiMagicHint');
  if (hint) hint.textContent = hints[type] || '';
}

function selectAiRatio(ratio, btn) {
  selectedAiRatio = ratio;
  btn.parentElement.querySelectorAll('.ctrl-btn').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
}

function loadAiImage(input) {
  const file = input.files ? input.files[0] : input;
  if (!file) return;
  if (!file.type.startsWith('image/')) { showToast('Please upload an image'); return; }
  currentAiImage = file;
  const reader = new FileReader();
  reader.onload = (e) => {
    const preview = document.getElementById('aiImagePreview');
    if (preview) { preview.src = e.target.result; preview.style.display = 'block'; }
    const uploadArea = document.getElementById('aiUploadArea');
    if (uploadArea) uploadArea.style.display = 'none';
    const pending = document.getElementById('aiPendingMsg');
    if (pending) pending.style.display = 'none';
    const activeUI = document.getElementById('aiActiveUI');
    if (activeUI) activeUI.style.display = 'block';
    showToast('Image loaded ✨');
  };
  reader.readAsDataURL(file);
}

async function applyAiMagic() {
  if (isProcessing) return;
  if (!currentAiImage) { showToast('Upload image first'); return; }
  isProcessing = true;
  await requestWakeLock();
  showLoader('🎨 Applying AI Magic');
  try {
    const formData = new FormData();
    formData.append('image', currentAiImage);
    formData.append('type', selectedAiMagic);
    const blob = await uploadWithProgress(SERVER_URL + '/api/ai-magic', formData, updateProgress);
    const a = document.createElement('a');
    a.href = URL.createObjectURL(blob);
    a.download = `picly-${selectedAiMagic}-${Date.now()}.jpg`;
    a.click();
    hideLoader();
    showToast('✅ Done!');
  } catch (err) { hideLoader(); console.error('❌', err); showToast('Error: ' + err.message); }
  await releaseWakeLock();
  isProcessing = false;
}

// ==================== TEXT TO IMAGE ====================
async function generateAiImage() {
  if (isProcessing) return;
  const promptInput = document.getElementById('aiPromptInput');
  if (!promptInput) { showToast('Input not found'); return; }
  const prompt = promptInput.value.trim();
  if (!prompt) { showToast('Enter prompt first'); return; }
  isProcessing = true;
  await requestWakeLock();
  showLoader('🎨 Generating AI image');
  try {
    const res = await fetch(SERVER_URL + '/api/cf-image', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ prompt: prompt, aspect_ratio: selectedAiRatio })
    });
    if (!res.ok) throw new Error('Server error: ' + res.status);
    const data = await res.json();
    if (!data.success || !data.result || !data.result.image) throw new Error('No image');
    currentAiImageResult = data.result.image;
    const preview = document.getElementById('aiResultImg');
    if (preview) { preview.src = 'data:image/png;base64,' + currentAiImageResult; preview.style.display = 'block'; }
    const resultBox = document.getElementById('aiResultBox');
    if (resultBox) resultBox.style.display = 'block';
    hideLoader();
    showToast('✅ Image generated!');
  } catch (err) { hideLoader(); console.error('❌', err); showToast('Error: ' + err.message); }
  await releaseWakeLock();
  isProcessing = false;
}

function downloadAiImage() {
  if (!currentAiImageResult) { showToast('No image yet'); return; }
  const a = document.createElement('a');
  a.href = 'data:image/png;base64,' + currentAiImageResult;
  a.download = 'picly-ai-' + Date.now() + '.png';
  a.click();
  showToast('✅ Downloaded!');
}

// ==================== BG REMOVE ====================
function loadRemoveBgImage(input) {
  const file = input.files ? input.files[0] : input;
  if (!file) return;
  if (!file.type.startsWith('image/')) { showToast('Upload an image'); return; }
  currentRemoveBgImage = file;
  const reader = new FileReader();
  reader.onload = (e) => {
    const preview = document.getElementById('removeBgPreview');
    if (preview) { preview.src = e.target.result; preview.style.display = 'block'; }
    const uploadArea = document.getElementById('removeBgUploadArea');
    if (uploadArea) uploadArea.style.display = 'none';
    const pending = document.getElementById('removeBgPending');
    if (pending) pending.style.display = 'none';
    const activeUI = document.getElementById('removeBgActive');
    if (activeUI) activeUI.style.display = 'block';
    showToast('Image loaded ✨');
  };
  reader.readAsDataURL(file);
}

async function removeBgOnly() {
  if (isProcessing) return;
  if (!currentRemoveBgImage) { showToast('Upload image first'); return; }
  isProcessing = true;
  await requestWakeLock();
  showLoader('🖼️ Removing background');
  try {
    const formData = new FormData();
    formData.append('image', currentRemoveBgImage);
    const blob = await uploadWithProgress(SERVER_URL + '/api/remove-bg', formData, updateProgress);
    const a = document.createElement('a');
    a.href = URL.createObjectURL(blob);
    a.download = 'picly-no-bg-' + Date.now() + '.png';
    a.click();
    hideLoader();
    showToast('✅ Background removed!');
  } catch (err) { hideLoader(); console.error('❌', err); showToast('Error: ' + err.message); }
  await releaseWakeLock();
  isProcessing = false;
}

// ==================== BG REPLACE ====================
function loadBgImage(input) {
  const file = input.files ? input.files[0] : input;
  if (!file) return;
  if (!file.type.startsWith('image/')) { showToast('Please upload an image'); return; }
  currentBgImage = file;
  const reader = new FileReader();
  reader.onload = (e) => {
    const preview = document.getElementById('bgImagePreview');
    if (preview) { preview.src = e.target.result; preview.style.display = 'block'; }
    const uploadArea = document.getElementById('bgUploadArea');
    if (uploadArea) uploadArea.style.display = 'none';
    const pending = document.getElementById('bgPendingMsg');
    if (pending) pending.style.display = 'none';
    const activeUI = document.getElementById('bgActiveUI');
    if (activeUI) activeUI.style.display = 'block';
    showToast('Image loaded ✨');
  };
  reader.readAsDataURL(file);
}

async function replaceBackground() {
  if (isProcessing) return;
  if (!currentBgImage) { showToast('Upload image first'); return; }
  const promptInput = document.getElementById('bgPromptInput');
  const bgPrompt = promptInput ? promptInput.value.trim() : '';
  if (!bgPrompt) { showToast('Enter background prompt'); return; }
  isProcessing = true;
  await requestWakeLock();
  showLoader('🎨 Replacing background');
  try {
    const formData = new FormData();
    formData.append('image', currentBgImage);
    formData.append('bgPrompt', bgPrompt);
    const blob = await uploadWithProgress(SERVER_URL + '/api/merge-bg', formData, updateProgress);
    const a = document.createElement('a');
    a.href = URL.createObjectURL(blob);
    a.download = 'picly-bg-replace-' + Date.now() + '.png';
    a.click();
    hideLoader();
    showToast('✅ Background replaced!');
  } catch (err) { hideLoader(); console.error('❌', err); showToast('Error: ' + err.message); }
  await releaseWakeLock();
  isProcessing = false;
}

// ==================== AI EDITOR ====================
function loadEditorImage(input) {
  const file = input.files ? input.files[0] : input;
  if (!file) return;
  if (!file.type.startsWith('image/')) { showToast('Upload an image'); return; }
  currentEditorImage = file;
  const reader = new FileReader();
  reader.onload = (e) => {
    const preview = document.getElementById('editorPreview');
    if (preview) { preview.src = e.target.result; preview.style.display = 'block'; }
    const pending = document.getElementById('editorPendingMsg');
    if (pending) pending.style.display = 'none';
    const activeUI = document.getElementById('editorActiveUI');
    if (activeUI) activeUI.style.display = 'block';
    showToast('Photo loaded ✨');
  };
  reader.readAsDataURL(file);
}

function setEditorPrompt(text) {
  const input = document.getElementById('editorPromptInput');
  if (input) input.value = text;
}

async function runAiEditor() {
  if (isProcessing) return;
  if (!currentEditorImage) { showToast('Upload photo first'); return; }
  const promptInput = document.getElementById('editorPromptInput');
  const prompt = promptInput ? promptInput.value.trim() : '';
  if (!prompt) { showToast('Enter prompt'); return; }
  isProcessing = true;
  await requestWakeLock();
  showLoader('🎨 Editing with AI');
  try {
    const formData = new FormData();
    formData.append('image', currentEditorImage);
    formData.append('prompt', prompt);
    const blob = await uploadWithProgress(SERVER_URL + '/api/ai-editor', formData, updateProgress);
    currentEditorResult = URL.createObjectURL(blob);
    const resultImg = document.getElementById('editorResultImg');
    if (resultImg) resultImg.src = currentEditorResult;
    const resultBox = document.getElementById('editorResultBox');
    if (resultBox) resultBox.style.display = 'block';
    hideLoader();
    showToast('✅ Done!');
  } catch (err) { hideLoader(); console.error('❌', err); showToast('Error: ' + err.message); }
  await releaseWakeLock();
  isProcessing = false;
}

function downloadEditorResult() {
  if (!currentEditorResult) { showToast('No result yet'); return; }
  const a = document.createElement('a');
  a.href = currentEditorResult;
  a.download = 'picly-edited-' + Date.now() + '.png';
  a.click();
  showToast('✅ Downloaded!');
}

// ==================== ANIMATE (AnimeGAN ONNX Browser) ====================
function loadAnimateImage(input) {
  const file = input.files ? input.files[0] : input;
  if (!file) return;
  if (!file.type.startsWith('image/')) { showToast('Upload an image'); return; }
  currentAnimateImage = file;
  const reader = new FileReader();
  reader.onload = (e) => {
    const preview = document.getElementById('animatePreview');
    if (preview) { preview.src = e.target.result; preview.style.display = 'block'; }
    const uploadArea = document.getElementById('animateUploadArea');
    if (uploadArea) uploadArea.style.display = 'none';
    const pending = document.getElementById('animatePendingMsg');
    if (pending) pending.style.display = 'none';
    const activeUI = document.getElementById('animateActiveUI');
    if (activeUI) activeUI.style.display = 'block';
    showToast('Photo loaded ✨');
  };
  reader.readAsDataURL(file);
}

async function runAnimate() {
  if (isProcessing) return;
  if (!currentAnimateImage) { showToast('Upload photo first'); return; }
  if (typeof ort === 'undefined') { showToast('ONNX library not loaded'); return; }
  isProcessing = true;
  await requestWakeLock();
  showLoader('🎭 Loading AI model');

  try {
    if (!animeSession) {
      console.log('Loading AnimeGAN ONNX model...');
      animeSession = await ort.InferenceSession.create('./models/animegan.onnx', {
        executionProviders: ['wasm'],
        graphOptimizationLevel: 'all'
      });
      console.log('=== MODEL INFO ===');
      console.log('Inputs:', animeSession.inputNames);
      console.log('Input metadata:', JSON.stringify(animeSession.inputMetadata));
      console.log('Outputs:', animeSession.outputNames);
      console.log('Output metadata:', JSON.stringify(animeSession.outputMetadata));
    }

    const img = await loadImageFromFileAnimate(currentAnimateImage);
    const inputSize = 512;
    const inputTensor = imageToTensorAnimate(img, inputSize, inputSize);

    showLoader('🎭 Converting to anime');
    const feeds = {};
    feeds[animeSession.inputNames[0]] = inputTensor;
    const results = await animeSession.run(feeds);

    const outputTensor = results[animeSession.outputNames[0]];
    const outputData = outputTensor.data;
    const dims = outputTensor.dims;
    console.log('Output dims:', dims);

    // Handle [1,3,H,W] format
    const h = dims[2], w = dims[3];

    const c = document.createElement('canvas');
    c.width = w;
    c.height = h;
    const cctx = c.getContext('2d');
    const imageData = cctx.createImageData(w, h);
    const totalPixels = h * w;

    for (let i = 0; i < totalPixels; i++) {
      let r = outputData[i];
      let g = outputData[totalPixels + i];
      let b = outputData[totalPixels * 2 + i];

      if (r <= 1.5) { r = r * 255; g = g * 255; b = b * 255; }

      imageData.data[i * 4] = Math.max(0, Math.min(255, r));
      imageData.data[i * 4 + 1] = Math.max(0, Math.min(255, g));
      imageData.data[i * 4 + 2] = Math.max(0, Math.min(255, b));
      imageData.data[i * 4 + 3] = 255;
    }
    cctx.putImageData(imageData, 0, 0);

    currentAnimateResult = c.toDataURL('image/png');
    const resultImg = document.getElementById('animateResultImg');
    if (resultImg) resultImg.src = currentAnimateResult;
    const resultBox = document.getElementById('animateResultBox');
    if (resultBox) resultBox.style.display = 'block';

    hideLoader();
    showToast('✅ Anime ready!');
  } catch (err) {
    hideLoader();
    console.error('❌ Animate error:', err);
    showToast('Error: ' + err.message);
  }
  await releaseWakeLock();
  isProcessing = false;
}

function loadImageFromFileAnimate(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = (e) => {
      const img = new Image();
      img.onload = () => resolve(img);
      img.onerror = reject;
      img.src = e.target.result;
    };
    reader.onerror = reject;
    reader.readAsDataURL(file);
  });
}

function imageToTensorAnimate(img, w, h) {
  const c = document.createElement('canvas');
  c.width = w;
  c.height = h;
  const cctx = c.getContext('2d');
  cctx.drawImage(img, 0, 0, w, h);
  const imageData = cctx.getImageData(0, 0, w, h);
  const data = imageData.data;

  const float32 = new Float32Array(1 * 3 * h * w);
  for (let i = 0; i < h * w; i++) {
    float32[i] = data[i * 4] / 255.0;
    float32[h * w + i] = data[i * 4 + 1] / 255.0;
    float32[2 * h * w + i] = data[i * 4 + 2] / 255.0;
  }

  return new ort.Tensor('float32', float32, [1, 3, h, w]);
}

function downloadAnimateResult() {
  if (!currentAnimateResult) { showToast('No result yet'); return; }
  const a = document.createElement('a');
  a.href = currentAnimateResult;
  a.download = 'picly-anime-' + Date.now() + '.png';
  a.click();
  showToast('✅ Downloaded!');
}

async function requestWakeLock() {
  try { if ('wakeLock' in navigator) { wakeLock = await navigator.wakeLock.request('screen'); } } catch (err) {}
}
async function releaseWakeLock() {
  if (wakeLock) { try { await wakeLock.release(); } catch(e) {} wakeLock = null; }
}

function startDotsAnimation(baseMsg) {
  let count = 0;
  const el = document.getElementById('videoLoaderMsg');
  if (!el) return;
  clearInterval(dotsInterval);
  dotsInterval = setInterval(() => { count = (count + 1) % 4; el.textContent = baseMsg + '.'.repeat(count); }, 500);
}
function stopDotsAnimation() { clearInterval(dotsInterval); dotsInterval = null; }

function updateProgress(percent) {
  const circle = document.getElementById('progressCircle');
  const percentEl = document.getElementById('progressPercent');
  const stageEl = document.getElementById('progressStage');
  const p = Math.max(0, Math.min(100, percent));
  if (circle) circle.style.strokeDashoffset = 440 - (440 * p / 100);
  if (percentEl) percentEl.textContent = Math.floor(p) + '%';
  if (stageEl) {
    if (p < 40) stageEl.textContent = '📤 Uploading';
    else if (p < 90) stageEl.textContent = '⚡ Processing';
    else if (p < 100) stageEl.textContent = '📥 Downloading';
    else stageEl.textContent = '✨ Complete';
  }
}

function showLoader(msg) {
  let el = document.getElementById('videoLoader');
  if (!el) {
    el = document.createElement('div');
    el.id = 'videoLoader';
    el.style.cssText = 'position:fixed;inset:0;background:rgba(6,3,13,0.96);backdrop-filter:blur(20px);z-index:9999;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:28px;padding:24px;';
    el.innerHTML = `
      <div style="position:relative;width:160px;height:160px;">
        <svg width="160" height="160" viewBox="0 0 160 160" style="transform:rotate(-90deg);">
          <defs>
            <linearGradient id="progressGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stop-color="#ff0080"/><stop offset="50%" stop-color="#a855f7"/><stop offset="100%" stop-color="#00d4ff"/>
            </linearGradient>
          </defs>
          <circle cx="80" cy="80" r="70" stroke="rgba(168,85,247,0.12)" stroke-width="10" fill="none"/>
          <circle id="progressCircle" cx="80" cy="80" r="70" stroke="url(#progressGrad)" stroke-width="10" fill="none" stroke-linecap="round" stroke-dasharray="440" stroke-dashoffset="440" style="transition:stroke-dashoffset 0.3s;"/>
        </svg>
        <div style="position:absolute;inset:0;display:flex;align-items:center;justify-content:center;">
          <div id="progressPercent" style="font-size:38px;font-weight:900;background:linear-gradient(135deg,#ff0080,#a855f7,#00d4ff);-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text;font-family:'Arial Black',sans-serif;">0%</div>
        </div>
      </div>
      <div style="text-align:center;"><p id="videoLoaderMsg" style="color:#fff;font-weight:800;font-size:17px;">Processing</p><p id="progressStage" style="color:#a855f7;font-size:13px;font-weight:700;margin-top:8px;">📤 Uploading</p></div>
    `;
    document.body.appendChild(el);
  }
  document.getElementById('videoLoaderMsg').textContent = msg;
  el.style.display = 'flex';
  updateProgress(0);
}

function hideLoader() {
  stopDotsAnimation();
  updateProgress(100);
  setTimeout(() => { const el = document.getElementById('videoLoader'); if (el) el.style.display = 'none'; }, 500);
}

function uploadWithProgress(url, formData, onProgress) {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.open('POST', url, true);
    xhr.responseType = 'blob';
    xhr.upload.onprogress = (e) => { if (e.lengthComputable) onProgress((e.loaded / e.total) * 40); };
    xhr.upload.onload = () => {
      onProgress(45);
      let fake = 45;
      window.serverProgressInterval = setInterval(() => { if (fake < 90) { fake += 1.5; onProgress(fake); } }, 400);
    };
    xhr.onload = () => {
      if (window.serverProgressInterval) { clearInterval(window.serverProgressInterval); window.serverProgressInterval = null; }
      if (xhr.status >= 200 && xhr.status < 300) { onProgress(95); resolve(xhr.response); }
      else reject(new Error('Server error: ' + xhr.status));
    };
    xhr.onerror = () => {
      if (window.serverProgressInterval) { clearInterval(window.serverProgressInterval); window.serverProgressInterval = null; }
      reject(new Error('Network error'));
    };
    xhr.send(formData);
  });
}

async function trimVideo() {
  if (isProcessing) return;
  if (!currentVideoFile) { showToast('Upload video first'); return; }
  const s = parseFloat(document.getElementById('trimStartSlider').value);
  const e = parseFloat(document.getElementById('trimEndSlider').value);
  if (e <= s) { showToast('Invalid range'); return; }
  isProcessing = true;
  await requestWakeLock();
  showLoader('✂️ Trimming video');
  try {
    const formData = new FormData();
    formData.append('video', currentVideoFile);
    formData.append('start', s);
    formData.append('end', e);
    const blob = await uploadWithProgress(SERVER_URL + '/api/trim', formData, updateProgress);
    const a = document.createElement('a');
    a.href = URL.createObjectURL(blob);
    a.download = 'picly-trimmed-' + Date.now() + '.mp4';
    a.click();
    hideLoader();
    showToast('✅ Ready!');
  } catch (err) { hideLoader(); showToast('Error: ' + err.message); }
  await releaseWakeLock();
  isProcessing = false;
}

async function compressVideo() {
  if (isProcessing) return;
  if (!currentVideoFile) { showToast('Upload video first'); return; }
  isProcessing = true;
  await requestWakeLock();
  showLoader('🗜️ Compressing video');
  try {
    const formData = new FormData();
    formData.append('video', currentVideoFile);
    formData.append('quality', selectedCompressQuality);
    const blob = await uploadWithProgress(SERVER_URL + '/api/compress', formData, updateProgress);
    const a = document.createElement('a');
    a.href = URL.createObjectURL(blob);
    a.download = 'picly-compressed-' + Date.now() + '.mp4';
    a.click();
    hideLoader();
    showToast('✅ Done!');
  } catch (err) { hideLoader(); showToast('Error: ' + err.message); }
  await releaseWakeLock();
  isProcessing = false;
}

async function extractMp3() {
  if (isProcessing) return;
  if (!currentVideoFile) { showToast('Upload video first'); return; }
  isProcessing = true;
  await requestWakeLock();
  showLoader('🎵 Extracting audio');
  try {
    const formData = new FormData();
    formData.append('video', currentVideoFile);
    const blob = await uploadWithProgress(SERVER_URL + '/api/mp3', formData, updateProgress);
    const a = document.createElement('a');
    a.href = URL.createObjectURL(blob);
    a.download = 'picly-audio-' + Date.now() + '.mp3';
    a.click();
    hideLoader();
    showToast('✅ Audio ready!');
  } catch (err) { hideLoader(); showToast('Error: ' + err.message); }
  await releaseWakeLock();
  isProcessing = false;
}

async function videoToGif() {
  if (isProcessing) return;
  if (!currentVideoFile) { showToast('Upload video first'); return; }
  const s = parseFloat(document.getElementById('gifStart').value) || 0;
  const d = parseFloat(document.getElementById('gifDuration').value) || 3;
  const f = document.getElementById('gifFps').value || 10;
  isProcessing = true;
  await requestWakeLock();
  showLoader('🎞️ Creating GIF');
  try {
    const formData = new FormData();
    formData.append('video', currentVideoFile);
    formData.append('start', s);
    formData.append('duration', d);
    formData.append('fps', f);
    const blob = await uploadWithProgress(SERVER_URL + '/api/gif', formData, updateProgress);
    const a = document.createElement('a');
    a.href = URL.createObjectURL(blob);
    a.download = 'picly-' + Date.now() + '.gif';
    a.click();
    hideLoader();
    showToast('✅ GIF ready!');
  } catch (err) { hideLoader(); showToast('Error: ' + err.message); }
  await releaseWakeLock();
  isProcessing = false;
}

async function enhanceVideo() {
  if (isProcessing) return;
  if (!currentVideoFile) { showToast('Upload video first'); return; }
  isProcessing = true;
  await requestWakeLock();
  showLoader('✨ Enhancing video');
  try {
    const formData = new FormData();
    formData.append('video', currentVideoFile);
    formData.append('type', selectedEnhanceType);
    formData.append('resolution', selectedResolution);
    const blob = await uploadWithProgress(SERVER_URL + '/api/enhance', formData, updateProgress);
    const a = document.createElement('a');
    a.href = URL.createObjectURL(blob);
    a.download = 'picly-enhanced-' + Date.now() + '.mp4';
    a.click();
    hideLoader();
    showToast('✅ Enhanced!');
  } catch (err) { hideLoader(); showToast('Error: ' + err.message); }
  await releaseWakeLock();
  isProcessing = false;
}

async function getFFmpeg() { return null; }

function buildControls(type) {
  const c = document.getElementById('dynamicControls');
  if (!c) return;
  c.innerHTML = '';

  if (type === 'emi') {
    c.innerHTML = `<div class="calc-header"><div class="calc-icon">💰</div><div class="calc-title">EMI Calculator</div></div><div class="calc-form"><div class="calc-field"><label>Loan Amount (₹)</label><input type="number" id="emiPrincipal" class="calc-input"></div><div class="calc-field"><label>Interest Rate (%)</label><input type="number" id="emiRate" step="0.1" class="calc-input"></div><div class="calc-field"><label>Tenure (Years)</label><input type="number" id="emiYears" class="calc-input"></div><button class="calc-btn" onclick="calculateEMI()">Calculate</button></div><div id="emiResult" class="calc-result"></div>`;
  } else if (type === 'gst') {
    c.innerHTML = `<div class="calc-header"><div class="calc-icon">🧾</div><div class="calc-title">GST Calculator</div></div><div class="calc-form"><div class="calc-field"><label>Amount (₹)</label><input type="number" id="gstAmount" class="calc-input"></div><div class="calc-field"><label>GST Rate (%)</label><select id="gstRate" class="calc-select"><option value="5">5%</option><option value="12">12%</option><option value="18" selected>18%</option><option value="28">28%</option></select></div><div class="calc-btn-row"><button class="calc-btn" onclick="calcGST('add')">Add</button><button class="calc-btn" onclick="calcGST('remove')">Remove</button></div></div><div id="gstResult" class="calc-result"></div>`;
  } else if (type === 'age') {
    c.innerHTML = `<div class="calc-header"><div class="calc-icon">🎂</div><div class="calc-title">Age Calculator</div></div><div class="calc-form"><div class="calc-field"><label>Date of Birth</label><input type="date" id="dobInput" class="calc-input"></div><button class="calc-btn" onclick="calculateAge()">Calculate</button></div><div id="ageResult" class="calc-result"></div>`;
  } else if (type === 'bmi') {
    c.innerHTML = `<div class="calc-header"><div class="calc-icon">⚖️</div><div class="calc-title">BMI Calculator</div></div><div class="calc-form"><div class="calc-field"><label>Weight (kg)</label><input type="number" id="bmiWeight" step="0.1" class="calc-input"></div><div class="calc-field"><label>Height (cm)</label><input type="number" id="bmiHeight" step="0.1" class="calc-input"></div><button class="calc-btn" onclick="calculateBMI()">Calculate</button></div><div id="bmiResult" class="calc-result"></div>`;
  } else if (type === 'unit') {
    c.innerHTML = `<div class="calc-header"><div class="calc-icon">📏</div><div class="calc-title">Unit Converter</div></div><div class="calc-form"><div class="calc-field"><label>Value</label><input type="number" id="unitValue" class="calc-input"></div><div class="calc-field"><label>From</label><select id="unitType" class="calc-select"><option value="length">Length (m)</option><option value="weight">Weight (kg)</option><option value="temp">Temp (°C)</option></select></div><button class="calc-btn" onclick="convertUnit()">Convert</button></div><div id="unitResult" class="calc-result"></div>`;
  } else if (type === 'qr') {
    c.innerHTML = `<div class="calc-header"><div class="calc-icon">🔲</div><div class="calc-title">QR Generator</div></div><div class="calc-form"><div class="calc-field"><label>Text/URL</label><input type="text" id="qrText" class="calc-input"></div><div class="calc-field"><label>Size</label><input type="number" id="qrSize" value="400" class="calc-input"></div><button class="calc-btn" onclick="generateQR()">Generate</button></div><div id="qrResult" class="calc-result"></div>`;
  } else if (type === 'crop') {
    c.innerHTML = `<div class="control-label">Quick Ratios</div><div class="control-row"><button class="ctrl-btn" onclick="cropImage(1,1)">1:1</button><button class="ctrl-btn" onclick="cropImage(16,9)">16:9</button><button class="ctrl-btn" onclick="cropImage(9,16)">9:16</button><button class="ctrl-btn" onclick="cropImage(4,5)">4:5</button><button class="ctrl-btn" onclick="cropImage(3,4)">3:4</button></div><div class="control-label">Manual</div><div class="manual-row"><input type="number" id="cropW" placeholder="W" class="manual-input"><input type="number" id="cropH" placeholder="H" class="manual-input"><button class="ctrl-btn primary" onclick="manualCrop()">Crop</button></div>`;
  } else if (type === 'filters') {
    c.innerHTML = `<div class="control-label">Filters</div><div class="control-row"><button class="ctrl-btn" onclick="applyFilter('none')">Original</button><button class="ctrl-btn" onclick="applyFilter('grayscale')">B&W</button><button class="ctrl-btn" onclick="applyFilter('sepia')">Sepia</button><button class="ctrl-btn" onclick="applyFilter('saturate')">Vivid</button><button class="ctrl-btn" onclick="applyFilter('contrast')">Contrast</button><button class="ctrl-btn" onclick="applyFilter('brightness')">Bright</button><button class="ctrl-btn" onclick="applyFilter('invert')">Invert</button><button class="ctrl-btn" onclick="applyFilter('vintage')">Vintage</button></div>`;
  } else if (type === 'resize') {
    c.innerHTML = `<div class="control-label">Quick</div><div class="control-row"><button class="ctrl-btn" onclick="resizeImage(50)">50%</button><button class="ctrl-btn" onclick="resizeImage(75)">75%</button><button class="ctrl-btn" onclick="resizeImage(150)">150%</button><button class="ctrl-btn" onclick="resizeImage(200)">200%</button></div><div class="control-label">Manual</div><div class="manual-row"><input type="number" id="resizeW" placeholder="W" class="manual-input"><input type="number" id="resizeH" placeholder="H" class="manual-input"><button class="ctrl-btn primary" onclick="manualResize()">Apply</button></div>`;
  } else if (type === 'rotate') {
    c.innerHTML = `<div class="control-label">Rotate</div><div class="control-row"><button class="ctrl-btn" onclick="rotateImage(-90)">↺ 90°</button><button class="ctrl-btn" onclick="rotateImage(90)">↻ 90°</button><button class="ctrl-btn" onclick="rotateImage(180)">180°</button></div><div class="control-label">Flip</div><div class="control-row"><button class="ctrl-btn" onclick="flipImage('h')">↔ H</button><button class="ctrl-btn" onclick="flipImage('v')">↕ V</button></div>`;
  } else if (type === 'text') {
    c.innerHTML = `<div class="control-label">Add Text</div><div class="manual-row"><input type="text" id="textInput" placeholder="Type text..." class="manual-input"></div><div class="manual-row"><input type="number" id="textSize" value="60" class="manual-input"></div><div class="control-row"><button class="ctrl-btn primary" onclick="addTextDrag()">Add Text</button></div>`;
  } else if (type === 'stickers') {
    c.innerHTML = `<div class="control-label">Stickers</div><div class="sticker-grid">${['😂','🥰','😎','❤️','🌟','💯','🦁','🎉'].map(e => `<button class="sticker-btn" onclick="addStickerDrag('${e}')">${e}</button>`).join('')}</div>`;
  } else if (type === 'passport') {
    c.innerHTML = `<div class="control-label">Size</div><div class="control-row"><button class="ctrl-btn" onclick="makePassport(35,45)">35×45mm</button><button class="ctrl-btn" onclick="makePassport(51,51)">2×2 inch</button></div>`;
  } else if (type === 'compress') {
    c.innerHTML = `<div class="control-label">Quality</div><div class="control-row"><button class="ctrl-btn" onclick="compressImage(0.9)">High</button><button class="ctrl-btn" onclick="compressImage(0.6)">Medium</button><button class="ctrl-btn" onclick="compressImage(0.3)">Low</button></div>`;
  } else if (type === 'pdf') {
    c.innerHTML = `<div class="control-label">PDF</div><div class="control-row"><button class="ctrl-btn primary" onclick="exportPDF()">Download PDF</button></div>`;
  } else if (type === 'convert') {
    c.innerHTML = `<div class="control-label">Format</div><div class="control-row"><button class="ctrl-btn" onclick="convertFormat('jpeg')">JPG</button><button class="ctrl-btn" onclick="convertFormat('png')">PNG</button><button class="ctrl-btn" onclick="convertFormat('webp')">WEBP</button></div>`;
  } else if (type === 'video-trim') {
    c.innerHTML = `<div id="videoPendingMsg"><p style="text-align:center;padding:40px 20px;">📹 Video upload karo</p></div><div id="videoActiveUI" style="display:none"><div class="control-label">Trim Range</div><input type="range" id="trimStartSlider" min="0" max="100" step="0.1" value="0" style="width:100%;"><input type="range" id="trimEndSlider" min="0" max="100" step="0.1" value="100" style="width:100%;"><div style="display:flex;justify-content:space-between;font-size:12px;color:#a99bc4;margin-top:8px;"><span>Start: <b id="trimStartLabel" style="color:#fff">0.0s</b></span><span>End: <b id="trimEndLabel" style="color:#fff">0.0s</b></span></div><p style="font-size:12px;color:#a99bc4;margin-top:8px;">Duration: <b id="trimDuration" style="color:#fff">0.0s</b> | Size: <b id="trimSize" style="color:#fff">0MB</b></p><button class="ctrl-btn primary" onclick="trimVideo()" style="width:100%;padding:18px;margin-top:16px;">✂️ Trim & Download</button></div>`;
  } else if (type === 'video-compress') {
    c.innerHTML = `<div id="videoPendingMsg"><p style="text-align:center;padding:40px 20px;">📹 Video upload karo</p></div><div id="videoActiveUI" style="display:none"><div class="control-label">Quality</div><div class="control-row"><button class="ctrl-btn" onclick="selectCompressQuality('high',this)">High</button><button class="ctrl-btn active" onclick="selectCompressQuality('medium',this)">Medium</button><button class="ctrl-btn" onclick="selectCompressQuality('low',this)">Low</button></div><p style="font-size:12px;color:#a99bc4;margin-top:12px;">Original: <b id="compressOrigSize" style="color:#fff">0MB</b> | Duration: <b id="compressDuration" style="color:#fff">0.0s</b></p><button class="ctrl-btn primary" onclick="compressVideo()" style="width:100%;padding:18px;margin-top:16px;">🗜️ Compress</button></div>`;
  } else if (type === 'video-gif') {
    c.innerHTML = `<div id="videoPendingMsg"><p style="text-align:center;padding:40px 20px;">📹 Video upload karo</p></div><div id="videoActiveUI" style="display:none"><div class="control-label">Start (sec)</div><input type="number" id="gifStart" value="0" step="0.1" class="manual-input"><div class="control-label">Duration (sec)</div><input type="number" id="gifDuration" value="3" step="0.1" class="manual-input"><div class="control-label">FPS</div><select id="gifFps" class="manual-select"><option value="8">8</option><option value="10" selected>10</option><option value="12">12</option></select><button class="ctrl-btn primary" onclick="videoToGif()" style="width:100%;padding:18px;margin-top:16px;">🎞️ Make GIF</button></div>`;
  } else if (type === 'video-mp3') {
    c.innerHTML = `<div id="videoPendingMsg"><p style="text-align:center;padding:40px 20px;">📹 Video upload karo</p></div><div id="videoActiveUI" style="display:none"><p style="font-size:12px;color:#a99bc4;">Duration: <b id="mp3Duration" style="color:#fff">0.0s</b> | Size: <b id="mp3Size" style="color:#fff">0MB</b></p><button class="ctrl-btn primary" onclick="extractMp3()" style="width:100%;padding:18px;margin-top:16px;">🎵 Extract MP3</button></div>`;
  } else if (type === 'video-enhance') {
    c.innerHTML = `<div id="videoPendingMsg"><p style="text-align:center;padding:40px 20px;">📹 Video upload karo</p></div><div id="videoActiveUI" style="display:none"><div class="control-label">Resolution</div><div class="control-row"><button class="ctrl-btn" onclick="selectResolution('720',this)">720p</button><button class="ctrl-btn active" onclick="selectResolution('1080',this)">1080p</button><button class="ctrl-btn" onclick="selectResolution('2k',this)">2K</button></div><div class="control-label">Type</div><div class="control-row"><button class="ctrl-btn active" onclick="selectEnhanceType('bright',this)">Bright</button><button class="ctrl-btn" onclick="selectEnhanceType('sharpen',this)">Sharpen</button><button class="ctrl-btn" onclick="selectEnhanceType('cinematic',this)">Cinematic</button><button class="ctrl-btn" onclick="selectEnhanceType('vivid',this)">Vivid</button></div><button class="ctrl-btn primary" onclick="enhanceVideo()" style="width:100%;padding:18px;margin-top:16px;">✨ Enhance</button></div>`;
  } else if (type === 'ai-text-image') {
    c.innerHTML = `
      <div class="control-label">Text to Image</div>
      <div style="padding:16px;background:linear-gradient(135deg, rgba(168,85,247,0.15), rgba(236,72,153,0.1));border:1.5px solid rgba(168,85,247,0.3);border-radius:18px;margin-bottom:16px;">
        <label style="font-size:12px;color:#c0b0d8;font-weight:700;display:block;margin-bottom:8px;">PROMPT</label>
        <input type="text" id="aiPromptInput" placeholder="a beautiful sunset over mountains" class="manual-input" style="width:100%;padding:14px;font-size:14px;margin-bottom:16px;">
        <label style="font-size:12px;color:#c0b0d8;font-weight:700;display:block;margin-bottom:8px;">ASPECT RATIO</label>
        <div class="control-row" style="margin-bottom:8px;">
          <button class="ctrl-btn active" onclick="selectAiRatio('1:1',this)" style="flex:1;font-size:11px;">⬛ 1:1</button>
          <button class="ctrl-btn" onclick="selectAiRatio('16:9',this)" style="flex:1;font-size:11px;">▬ 16:9</button>
          <button class="ctrl-btn" onclick="selectAiRatio('9:16',this)" style="flex:1;font-size:11px;">▮ 9:16</button>
          <button class="ctrl-btn" onclick="selectAiRatio('4:3',this)" style="flex:1;font-size:11px;">▭ 4:3</button>
        </div>
        <p style="font-size:11px;color:#aaff00;margin-bottom:12px;font-weight:700;">💡 Cloudflare FLUX + Smart Crop · 10-20 sec</p>
        <button class="ctrl-btn primary" onclick="generateAiImage()" style="width:100%;padding:18px;font-size:15px;">✨ Generate Image</button>
      </div>
      <div id="aiResultBox" style="display:none;">
        <div class="control-label">Result</div>
        <img id="aiResultImg" style="width:100%;border-radius:18px;box-shadow:0 20px 40px rgba(168,85,247,0.4);margin-bottom:16px;">
        <button class="ctrl-btn primary" onclick="downloadAiImage()" style="width:100%;padding:18px;font-size:15px;">⬇️ Download Image</button>
      </div>
    `;
  } else if (type === 'ai-bg-remove') {
    c.innerHTML = `
      <div id="removeBgPending">
        <div class="control-label">🖼️ Background Remove</div>
        <div class="upload-area" id="removeBgUploadArea" onclick="document.getElementById('removeBgInput').click()" style="padding:60px 24px;margin-top:16px;">
          <input type="file" id="removeBgInput" accept="image/*" onchange="loadRemoveBgImage(this)" style="display:none;">
          <svg viewBox="0 0 24 24"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="17 8 12 3 7 8"/><line x1="12" y1="3" x2="12" y2="15"/></svg>
          <p>Tap to upload photo</p>
          <span>Background transparent ho jayega</span>
        </div>
      </div>
      <div id="removeBgActive" style="display:none">
        <img id="removeBgPreview" style="width:100%;max-height:300px;object-fit:contain;border-radius:18px;margin-bottom:16px;box-shadow:0 20px 40px rgba(168,85,247,0.3);">
        <p style="font-size:11px;color:#aaff00;margin-bottom:12px;font-weight:700;">💡 Local AI · No API · 100% Free</p>
        <button class="ctrl-btn primary" onclick="removeBgOnly()" style="width:100%;padding:18px;font-size:15px;">🖼️ Remove Background</button>
      </div>
    `;
  } else if (type === 'ai-bg-replace') {
    c.innerHTML = `
      <div id="bgPendingMsg">
        <div class="control-label">🔄 Background Replace</div>
        <div class="upload-area" id="bgUploadArea" onclick="document.getElementById('bgUploadInput').click()" style="padding:60px 24px;margin-top:16px;">
          <input type="file" id="bgUploadInput" accept="image/*" onchange="loadBgImage(this)" style="display:none;">
          <svg viewBox="0 0 24 24"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="17 8 12 3 7 8"/><line x1="12" y1="3" x2="12" y2="15"/></svg>
          <p>Tap to upload photo</p>
          <span>Person photo + naya background</span>
        </div>
      </div>
      <div id="bgActiveUI" style="display:none">
        <img id="bgImagePreview" style="width:100%;max-height:300px;object-fit:contain;border-radius:18px;margin-bottom:16px;box-shadow:0 20px 40px rgba(168,85,247,0.3);">
        <label style="font-size:12px;color:#c0b0d8;font-weight:700;display:block;margin-bottom:8px;">NEW BACKGROUND PROMPT</label>
        <input type="text" id="bgPromptInput" placeholder="lion walking in jungle, sunset" class="manual-input" style="width:100%;padding:14px;font-size:14px;margin-bottom:16px;">
        <p style="font-size:11px;color:#aaff00;margin-bottom:12px;font-weight:700;">💡 Local BG Remove + Cloudflare FLUX · 15-30 sec</p>
        <button class="ctrl-btn primary" onclick="replaceBackground()" style="width:100%;padding:18px;font-size:15px;">🎨 Replace Background</button>
      </div>
    `;
  } else if (type === 'ai-editor') {
    c.innerHTML = `
      <div id="editorPendingMsg">
        <div class="control-label">🎨 AI Editor</div>
        <div class="upload-area" id="editorUploadArea" onclick="document.getElementById('editorInput').click()" style="padding:60px 24px;margin-top:16px;">
          <input type="file" id="editorInput" accept="image/*" onchange="loadEditorImage(this)" style="display:none;">
          <svg viewBox="0 0 24 24"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="17 8 12 3 7 8"/><line x1="12" y1="3" x2="12" y2="15"/></svg>
          <p>Tap to upload photo</p>
          <span>Kuch bhi edit karo prompt se</span>
        </div>
      </div>
      <div id="editorActiveUI" style="display:none">
        <img id="editorPreview" style="width:100%;max-height:300px;object-fit:contain;border-radius:18px;margin-bottom:16px;box-shadow:0 20px 40px rgba(168,85,247,0.3);">
        <label style="font-size:12px;color:#c0b0d8;font-weight:700;display:block;margin-bottom:8px;">PROMPT</label>
        <textarea id="editorPromptInput" placeholder="anime style portrait, studio ghibli" class="manual-input" style="width:100%;padding:14px;font-size:14px;margin-bottom:12px;min-height:80px;font-family:inherit;"></textarea>
        <p style="font-size:11px;color:#aaff00;margin-bottom:8px;font-weight:700;">💡 Kuch bhi likho</p>
        <div class="control-row" style="margin-bottom:12px;flex-wrap:wrap;">
          <button class="ctrl-btn" onclick="setEditorPrompt('anime style portrait, studio ghibli, cel shaded')" style="flex:1;font-size:11px;padding:10px 6px;">🎭 Anime</button>
          <button class="ctrl-btn" onclick="setEditorPrompt('cartoon style, pixar 3d, colorful')" style="flex:1;font-size:11px;padding:10px 6px;">🖼️ Cartoon</button>
          <button class="ctrl-btn" onclick="setEditorPrompt('lion beside me, cinematic, sunset')" style="flex:1;font-size:11px;padding:10px 6px;">🦁 Lion</button>
        </div>
        <div class="control-row" style="margin-bottom:12px;flex-wrap:wrap;">
          <button class="ctrl-btn" onclick="setEditorPrompt('cyberpunk neon city, futuristic')" style="flex:1;font-size:11px;padding:10px 6px;">🌆 Cyberpunk</button>
          <button class="ctrl-btn" onclick="setEditorPrompt('oil painting, van gogh style')" style="flex:1;font-size:11px;padding:10px 6px;">🎨 Oil</button>
          <button class="ctrl-btn" onclick="setEditorPrompt('3d render, pixar style, disney')" style="flex:1;font-size:11px;padding:10px 6px;">🎮 3D</button>
        </div>
        <button class="ctrl-btn primary" onclick="runAiEditor()" style="width:100%;padding:18px;font-size:15px;">✨ Edit with AI</button>
      </div>
      <div id="editorResultBox" style="display:none;margin-top:20px;">
        <div class="control-label">Result</div>
        <img id="editorResultImg" style="width:100%;border-radius:18px;box-shadow:0 20px 40px rgba(168,85,247,0.4);margin-bottom:16px;">
        <button class="ctrl-btn primary" onclick="downloadEditorResult()" style="width:100%;padding:18px;font-size:15px;">⬇️ Download</button>
      </div>
    `;
  } else if (type === 'ai-animate') {
    c.innerHTML = `
      <div id="animatePendingMsg">
        <div class="control-label">🎭 Animate</div>
        <div class="upload-area" id="animateUploadArea" onclick="document.getElementById('animateInput').click()" style="padding:60px 24px;margin-top:16px;">
          <input type="file" id="animateInput" accept="image/*" onchange="loadAnimateImage(this)" style="display:none;">
          <svg viewBox="0 0 24 24"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="17 8 12 3 7 8"/><line x1="12" y1="3" x2="12" y2="15"/></svg>
          <p>Tap to upload photo</p>
          <span>Person photo — anime character banega</span>
        </div>
      </div>
      <div id="animateActiveUI" style="display:none">
        <img id="animatePreview" style="width:100%;max-height:300px;object-fit:contain;border-radius:18px;margin-bottom:16px;box-shadow:0 20px 40px rgba(168,85,247,0.3);">
        <p style="font-size:11px;color:#aaff00;margin-bottom:12px;font-weight:700;">💡 AnimeGAN · 100% free · pehli baar 8 MB download</p>
        <button class="ctrl-btn primary" onclick="runAnimate()" style="width:100%;padding:18px;font-size:15px;">🎭 Convert to Anime</button>
      </div>
      <div id="animateResultBox" style="display:none;margin-top:20px;">
        <div class="control-label">Result</div>
        <img id="animateResultImg" style="width:100%;border-radius:18px;box-shadow:0 20px 40px rgba(168,85,247,0.4);margin-bottom:16px;">
        <button class="ctrl-btn primary" onclick="downloadAnimateResult()" style="width:100%;padding:18px;font-size:15px;">⬇️ Download</button>
      </div>
    `;
  } else if (type === 'ai-enhance' || type === 'ai-anime' || type === 'ai-restore' || type === 'ai-glow') {
    const magicType = type.replace('ai-', '');
    selectedAiMagic = magicType;
    c.innerHTML = `
      <div id="aiPendingMsg">
        <div class="control-label">AI Magic</div>
        <div class="upload-area" id="aiUploadArea" onclick="document.getElementById('aiUploadInput').click()" style="padding:60px 24px;margin-top:16px;">
          <input type="file" id="aiUploadInput" accept="image/*" onchange="loadAiImage(this)" style="display:none;">
          <p>Tap to upload photo</p>
        </div>
      </div>
      <div id="aiActiveUI" style="display:none">
        <img id="aiImagePreview" style="width:100%;max-height:300px;object-fit:contain;border-radius:18px;margin-bottom:16px;">
        <div class="control-row">
          <button class="ctrl-btn ${magicType === 'enhance' ? 'active' : ''}" onclick="selectAiMagic('enhance',this)">✨ Enhance</button>
          <button class="ctrl-btn ${magicType === 'anime' ? 'active' : ''}" onclick="selectAiMagic('anime',this)">🎭 Anime</button>
          <button class="ctrl-btn ${magicType === 'restore' ? 'active' : ''}" onclick="selectAiMagic('restore',this)">🎨 Restore</button>
          <button class="ctrl-btn ${magicType === 'glow' ? 'active' : ''}" onclick="selectAiMagic('glow',this)">🌟 Glow</button>
        </div>
        <button class="ctrl-btn primary" onclick="applyAiMagic()" style="width:100%;padding:18px;margin-top:16px;">🎨 Apply</button>
      </div>
    `;
  } else {
    c.innerHTML = `<p style="padding:12px;color:#888;">Coming soon</p>`;
  }
}

function calculateEMI() {
  const p = parseFloat(document.getElementById('emiPrincipal').value);
  const r = parseFloat(document.getElementById('emiRate').value);
  const y = parseFloat(document.getElementById('emiYears').value);
  const res = document.getElementById('emiResult');
  if (!p || !r || !y) { res.classList.add('show','error'); res.innerHTML = '⚠️ Fill all'; return; }
  const mr = r/12/100, m = y*12;
  const emi = (p*mr*Math.pow(1+mr,m))/(Math.pow(1+mr,m)-1);
  const total = emi*m, interest = total-p;
  res.classList.remove('error'); res.classList.add('show');
  res.innerHTML = `<div class="result-row"><span>EMI</span><strong>₹${emi.toFixed(0)}</strong></div><div class="result-row"><span>Interest</span><strong>₹${interest.toFixed(0)}</strong></div><div class="result-row"><span>Total</span><strong>₹${total.toFixed(0)}</strong></div>`;
}
function calcGST(mode) {
  const a = parseFloat(document.getElementById('gstAmount').value);
  const r = parseFloat(document.getElementById('gstRate').value);
  const res = document.getElementById('gstResult');
  if (!a) { res.classList.add('show','error'); res.innerHTML = '⚠️ Enter amount'; return; }
  let b, g, t;
  if (mode === 'add') { b = a; g = a*r/100; t = b+g; } else { b = a/(1+r/100); g = a-b; t = a; }
  res.classList.remove('error'); res.classList.add('show');
  res.innerHTML = `<div class="result-row"><span>Base</span><strong>₹${b.toFixed(2)}</strong></div><div class="result-row"><span>GST (${r}%)</span><strong>₹${g.toFixed(2)}</strong></div><div class="result-row"><span>Total</span><strong>₹${t.toFixed(2)}</strong></div>`;
}
function calculateAge() {
  const dob = new Date(document.getElementById('dobInput').value);
  const res = document.getElementById('ageResult');
  if (isNaN(dob.getTime())) { res.classList.add('show','error'); res.innerHTML = '⚠️ Select date'; return; }
  const now = new Date();
  let y = now.getFullYear()-dob.getFullYear(), m = now.getMonth()-dob.getMonth(), d = now.getDate()-dob.getDate();
  if (d<0) { m--; d+=30; } if (m<0) { y--; m+=12; }
  const td = Math.floor((now-dob)/(1000*60*60*24));
  res.classList.remove('error'); res.classList.add('show');
  res.innerHTML = `<div class="result-row"><span>Age</span><strong>${y}y ${m}m ${d}d</strong></div><div class="result-row"><span>Total Days</span><strong>${td}</strong></div>`;
}
function calculateBMI() {
  const w = parseFloat(document.getElementById('bmiWeight').value);
  const h = parseFloat(document.getElementById('bmiHeight').value);
  const res = document.getElementById('bmiResult');
  if (!w || !h) { res.classList.add('show','error'); res.innerHTML = '⚠️ Fill all'; return; }
  const bmi = w/Math.pow(h/100,2);
  let cat = '', col = '';
  if (bmi<18.5) { cat='Underweight'; col='#60a5fa'; } else if (bmi<25) { cat='Normal'; col='#4ade80'; } else if (bmi<30) { cat='Overweight'; col='#fb923c'; } else { cat='Obese'; col='#f87171'; }
  res.classList.remove('error'); res.classList.add('show');
  res.innerHTML = `<div class="result-row"><span>BMI</span><strong>${bmi.toFixed(2)}</strong></div><div class="result-row"><span>Category</span><strong style="color:${col}">${cat}</strong></div>`;
}
function convertUnit() {
  const v = parseFloat(document.getElementById('unitValue').value);
  const t = document.getElementById('unitType').value;
  const res = document.getElementById('unitResult');
  if (!v) { res.classList.add('show','error'); res.innerHTML = '⚠️ Enter value'; return; }
  let html = '';
  if (t === 'length') html = `<div class="result-row"><span>Feet</span><strong>${(v*3.28).toFixed(2)}</strong></div><div class="result-row"><span>KM</span><strong>${(v/1000).toFixed(4)}</strong></div>`;
  else if (t === 'weight') html = `<div class="result-row"><span>Pounds</span><strong>${(v*2.20).toFixed(2)}</strong></div><div class="result-row"><span>Grams</span><strong>${(v*1000).toFixed(0)}</strong></div>`;
  else html = `<div class="result-row"><span>Fahrenheit</span><strong>${((v*9/5)+32).toFixed(2)}°F</strong></div><div class="result-row"><span>Kelvin</span><strong>${(v+273.15).toFixed(2)}K</strong></div>`;
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
  if (ir > tr) { nh = ih; nw = ih*tr; ox = (iw-nw)/2; oy = 0; } else { nw = iw; nh = iw/tr; ox = 0; oy = (ih-nh)/2; }
  const t = document.createElement('canvas');
  t.width = nw; t.height = nh;
  t.getContext('2d').drawImage(currentImage, ox, oy, nw, nh, 0, 0, nw, nh);
  const ni = new Image();
  ni.onload = () => { currentImage = ni; redraw(); showToast('Cropped ✂️'); };
  ni.src = t.toDataURL();
}
function manualCrop() {
  const w = parseFloat(document.getElementById('cropW').value), h = parseFloat(document.getElementById('cropH').value);
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
  if (dir === 'h') { tc.translate(currentImage.width, 0); tc.scale(-1, 1); } else { tc.translate(0, currentImage.height); tc.scale(1, -1); }
  tc.drawImage(currentImage, 0, 0);
  const ni = new Image();
  ni.onload = () => { currentImage = ni; redraw(); showToast('Flipped'); };
  ni.src = t.toDataURL();
}
function applyFilter(type) {
  const f = { 'none':'none','grayscale':'grayscale(100%)','sepia':'sepia(80%)','saturate':'saturate(180%)','contrast':'contrast(150%)','brightness':'brightness(130%)','invert':'invert(100%)','vintage':'sepia(50%) contrast(90%)' };
  if (canvas) canvas.style.filter = f[type] || 'none';
  showToast('Filter applied ✨');
}
function resizeImage(p) {
  if (!currentImage) { showToast('Upload photo'); return; }
  const t = document.createElement('canvas');
  t.width = Math.round(currentImage.width*p/100);
  t.height = Math.round(currentImage.height*p/100);
  t.getContext('2d').drawImage(currentImage, 0, 0, t.width, t.height);
  const ni = new Image();
  ni.onload = () => { currentImage = ni; redraw(); showToast('Resized'); };
  ni.src = t.toDataURL();
}
function manualResize() {
  const w = parseInt(document.getElementById('resizeW').value), h = parseInt(document.getElementById('resizeH').value);
  if (!w || !h) { showToast('Enter W and H'); return; }
  const t = document.createElement('canvas');
  t.width = w; t.height = h;
  t.getContext('2d').drawImage(currentImage, 0, 0, w, h);
  const ni = new Image();
  ni.onload = () => { currentImage = ni; redraw(); showToast('Resized'); };
  ni.src = t.toDataURL();
}
function compressImage(q) {
  if (!currentImage) { showToast('Upload photo'); return; }
  const url = canvas.toDataURL('image/jpeg', q);
  const ni = new Image();
  ni.onload = () => { currentImage = ni; redraw(); showToast('Compressed'); };
  ni.src = url;
}
function makePassport(wMM, hMM) {
  if (!currentImage) { showToast('Upload photo'); return; }
  const px = 11.8;
  const tw = Math.round(wMM*px), th = Math.round(hMM*px);
  const t = document.createElement('canvas');
  t.width = tw; t.height = th;
  const tc = t.getContext('2d');
  const ir = currentImage.width/currentImage.height, tr = tw/th;
  let dw, dh, ox, oy;
  if (ir > tr) { dh = th; dw = th*ir; ox = (tw-dw)/2; oy = 0; } else { dw = tw; dh = tw/ir; ox = 0; oy = (th-dh)/2; }
  tc.fillStyle = '#fff'; tc.fillRect(0,0,tw,th);
  tc.drawImage(currentImage, ox, oy, dw, dh);
  const ni = new Image();
  ni.onload = () => { currentImage = ni; redraw(); showToast('Passport ready 📸'); };
  ni.src = t.toDataURL();
}
function exportPDF() {
  if (!window.jspdf || !currentImage) { showToast('Cannot export'); return; }
  try {
    const { jsPDF } = window.jspdf;
    const pdf = new jsPDF({ unit: 'pt', format: pdfSize });
    const imgData = canvas.toDataURL('image/jpeg', 0.92);
    const imgW = 555;
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
  d.dataset.type = 'text'; d.dataset.size = size;
  makeDraggable(d);
  if (overlayLayer) overlayLayer.appendChild(d);
  overlayItems.push(d);
  showToast('Text added ✨');
}
function addStickerDrag(emoji) {
  if (!currentImage) { showToast('Upload photo'); return; }
  const d = document.createElement('div');
  d.className = 'drag-item sticker-item';
  d.style.left = '50%'; d.style.top = '50%';
  d.style.transform = 'translate(-50%,-50%)';
  d.style.fontSize = '60px';
  d.textContent = emoji;
  d.dataset.type = 'sticker'; d.dataset.emoji = emoji; d.dataset.size = 60;
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
    const x = ir.left - cr.left, y = ir.top - cr.top;
    if (item.dataset.type === 'text') {
      ctx.font = 'bold ' + item.dataset.size + 'px ' + selectedFont;
      ctx.fillStyle = selectedTextColor;
      ctx.strokeStyle = selectedTextColor === '#000000' ? '#ffffff' : '#000000';
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
function downloadImage() {
  if (!currentImage) { showToast('No image'); return; }
  if (overlayItems.length > 0) applyOverlay();
  const a = document.createElement('a');
  a.download = 'picly-' + Date.now() + '.jpg';
  a.href = canvas.toDataURL('image/jpeg', 0.95);
  a.click();
  showToast('Downloaded! 🎉');
}
function startTrial() { showToast('🎉 Trial Activated!'); }
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
  let currentSlide = 0, interval;
  function updateDots(i) { dots.forEach((d,x) => d.classList.toggle('active', x===i)); }
  function scrollToSlide(i) { if (!slider || !slider.children[i]) return; slider.scrollTo({ left: slider.children[i].offsetLeft - 20, behavior: 'smooth' }); updateDots(i); }
  function nextSlide() { if (!slider) return; currentSlide = (currentSlide + 1) % slider.children.length; scrollToSlide(currentSlide); }
  function start() { interval = setInterval(nextSlide, 3000); }
  function stop() { clearInterval(interval); }
  if (slider) { start(); slider.addEventListener('touchstart', stop); slider.addEventListener('touchend', () => setTimeout(start, 4000)); slider.addEventListener('mouseenter', stop); slider.addEventListener('mouseleave', start); }
});