// ==================== PART 1 — CONFIG & CATEGORIES ====================
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
    { id:'ai-upscale', name:'Image Upscaler', desc:'2x/4x HD upscale', type:'ai-upscale', img:'https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=100&q=80' },
    { id:'ai-cleanup', name:'Cleanup', desc:'Remove objects', type:'ai-cleanup', img:'https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=100&q=80' },
    { id:'ai-restore', name:'Photo Restore', desc:'Restore old photos', type:'ai-restore', img:'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=100&q=80' }
  ]},
  aimagic: { name:'AI Magic', desc:'Free photo effects', tools:[
    { id:'ai-enhance', name:'Photo Enhance', desc:'Sharper · Brighter', type:'ai-enhance', img:'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=100&q=80' },
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

// ==================== GLOBAL STATE ====================
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
let selectedUpscaleScale = 2;
let currentAiImage = null;
let currentAiImageResult = null;
let currentBgImage = null;
let currentRemoveBgImage = null;
let currentEditorImage = null;
let currentEditorResult = null;
let currentUpscaleImage = null;
let currentUpscaleResult = null;
let currentCleanupImage = null;
let currentCleanupResult = null;
let currentRestoreImage = null;
let currentRestoreResult = null;
let wakeLock = null;
let dotsInterval = null;
let isProcessing = false;

const CALCULATOR_TYPES = ['emi','gst','age','bmi','unit','qr'];
const VIDEO_TYPES = ['video-trim','video-compress','video-gif','video-mp3','video-enhance'];
const AI_MAGIC_TYPES = ['ai-enhance','ai-glow'];
const AI_STUDIO_TYPES = ['ai-text-image','ai-bg-remove','ai-bg-replace','ai-editor','ai-upscale','ai-cleanup','ai-restore'];

// ==================== PART 2 — NAVIGATION & UI ====================
function showScreen(id) { document.querySelectorAll('.screen').forEach(s => s.classList.remove('active')); const el = document.getElementById(id); if (el) el.classList.add('active'); window.scrollTo(0, 0); }
function goHome() { showScreen('homeScreen'); currentCategory = null; }
function openCategory(catId) { currentCategory = catId; const cat = categories[catId]; if (!cat) return; document.getElementById('catPageTitle').textContent = cat.name; document.getElementById('catHeroName').textContent = cat.name; document.getElementById('catHeroDesc').textContent = cat.desc; document.getElementById('toolsList').innerHTML = cat.tools.map(tool => { const img = tool.img || 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=100&q=80'; return `<div class="tool-item" onclick="openTool('${tool.id}')"><img class="tool-bg" src="${img}" alt="" loading="lazy"><div class="tool-icon"><svg viewBox="0 0 24 24"><path d="M12 2l3 7h7l-5.5 4.5L18 21l-6-4-6 4 1.5-7.5L2 9h7z"/></svg></div><img class="tool-thumb" src="${img}" alt="${tool.name}" loading="lazy"><div class="tool-info"><div class="tool-name">${tool.name}</div><div class="tool-desc">${tool.desc}</div></div><div class="tool-arrow">›</div></div>`; }).join(''); showScreen('categoryScreen'); }
function backToCategory() { if (currentCategory) openCategory(currentCategory); else goHome(); }

function openTool(toolId) {
  let tool = null;
  if (currentCategory) tool = categories[currentCategory].tools.find(t => t.id === toolId);
  if (!tool) { for (let cat of Object.values(categories)) { tool = cat.tools.find(t => t.id === toolId); if (tool) break; } }
  if (!tool) return;
  currentTool = tool;
  overlayItems = []; collagePhotos = []; currentVideoFile = null; currentVideoDuration = 0;
  currentAiImage = null; currentAiImageResult = null; currentBgImage = null; currentRemoveBgImage = null;
  currentEditorImage = null; currentEditorResult = null; currentUpscaleImage = null; currentUpscaleResult = null;
  currentCleanupImage = null; currentCleanupResult = null; currentRestoreImage = null; currentRestoreResult = null;
  selectedAiRatio = '1:1'; selectedUpscaleScale = 2;
  document.getElementById('editorTitle').textContent = tool.name;
  const ol = document.getElementById('overlayLayer'); if (ol) ol.innerHTML = '';
  const vp = document.getElementById('videoPreview'); if (vp) { vp.style.display = 'none'; vp.src = ''; }
  const isCalculator = CALCULATOR_TYPES.includes(tool.type);
  const isVideo = VIDEO_TYPES.includes(tool.type);
  const isAiMagic = AI_MAGIC_TYPES.includes(tool.type);
  const isAiStudio = AI_STUDIO_TYPES.includes(tool.type);
  const uploadArea = document.getElementById('uploadArea');
  const canvasWrap = document.getElementById('canvasWrap');
  const canvasContainer = document.querySelector('.canvas-container');
  const actionBtns = document.querySelector('.action-btns');
  if (isCalculator) { if (uploadArea) uploadArea.style.display = 'none'; if (canvasWrap) canvasWrap.style.display = 'block'; if (canvasContainer) canvasContainer.style.display = 'none'; if (actionBtns) actionBtns.style.display = 'none'; }
  else if (isVideo) { if (uploadArea) uploadArea.style.display = 'block'; if (canvasWrap) canvasWrap.style.display = 'block'; if (canvasContainer) canvasContainer.style.display = 'none'; if (actionBtns) actionBtns.style.display = 'none'; const h = document.getElementById('uploadHint'); const i = document.getElementById('modalUpload'); const t = document.getElementById('uploadTitle'); if (h && i && t) { h.textContent = 'MP4, MOV, WEBM — max 50MB'; i.setAttribute('accept', 'video/*'); t.textContent = 'Tap to upload video'; } }
  else if (isAiMagic || isAiStudio) { if (uploadArea) uploadArea.style.display = 'none'; if (canvasWrap) canvasWrap.style.display = 'block'; if (canvasContainer) canvasContainer.style.display = 'none'; if (actionBtns) actionBtns.style.display = 'none'; }
  else { if (uploadArea) uploadArea.style.display = 'block'; if (canvasWrap) canvasWrap.style.display = 'none'; if (canvasContainer) canvasContainer.style.display = 'flex'; if (actionBtns) actionBtns.style.display = 'flex'; const h = document.getElementById('uploadHint'); const i = document.getElementById('modalUpload'); const t = document.getElementById('uploadTitle'); if (h && i && t) { h.textContent = 'JPG, PNG, WEBP — max 10MB'; i.setAttribute('accept', 'image/*'); t.textContent = 'Tap to upload photo'; } }
  buildControls(tool.type);
  showScreen('editorScreen');
}

function openToolFromHome(toolId) { currentCategory = null; openTool(toolId); }
function handleGlobalUpload(input) { if (input.files && input.files[0]) { openCategory('edit'); setTimeout(() => openTool('crop'), 100); setTimeout(() => loadImage(input), 200); } }
function loadImage(input) { const file = input.files ? input.files[0] : input; if (!file) return; if (file.type.startsWith('video/')) { loadVideo(input); return; } const reader = new FileReader(); reader.onload = (e) => { const img = new Image(); img.onload = () => { originalImage = img; currentImage = img; if (canvas) { canvas.width = img.width; canvas.height = img.height; ctx.drawImage(img, 0, 0); } document.getElementById('uploadArea').style.display = 'none'; document.getElementById('canvasWrap').style.display = 'block'; showToast('Photo loaded ✨'); }; img.src = e.target.result; }; reader.readAsDataURL(file); }
function redraw() { if (!currentImage || !canvas) return; canvas.width = currentImage.width; canvas.height = currentImage.height; ctx.drawImage(currentImage, 0, 0); }
function resetImage() { if (originalImage && canvas) { currentImage = originalImage; redraw(); canvas.style.filter = 'none'; overlayItems = []; if (overlayLayer) overlayLayer.innerHTML = ''; showToast('Reset done'); } }

function loadVideo(input) { const file = input.files ? input.files[0] : input; if (!file) return; currentVideoFile = file; const video = document.getElementById('videoPreview'); video.src = URL.createObjectURL(file); video.style.display = 'block'; document.getElementById('uploadArea').style.display = 'none'; video.onloadedmetadata = () => { currentVideoDuration = video.duration; const sizeMB = (file.size / 1024 / 1024).toFixed(2); const pending = document.getElementById('videoPendingMsg'); if (pending) pending.style.display = 'none'; const activeUI = document.getElementById('videoActiveUI'); if (activeUI) activeUI.style.display = 'block'; const type = currentTool.type; if (type === 'video-trim') { const ss = document.getElementById('trimStartSlider'); const es = document.getElementById('trimEndSlider'); if (ss && es) { ss.max = currentVideoDuration; es.max = currentVideoDuration; es.value = currentVideoDuration; document.getElementById('trimEndLabel').textContent = currentVideoDuration.toFixed(1) + 's'; document.getElementById('trimDuration').textContent = currentVideoDuration.toFixed(1) + 's'; document.getElementById('trimSize').textContent = sizeMB + 'MB'; ss.oninput = () => { if (parseFloat(ss.value) >= parseFloat(es.value)) ss.value = parseFloat(es.value) - 0.1; document.getElementById('trimStartLabel').textContent = parseFloat(ss.value).toFixed(1) + 's'; document.getElementById('trimDuration').textContent = (parseFloat(es.value) - parseFloat(ss.value)).toFixed(1) + 's'; video.currentTime = parseFloat(ss.value); }; es.oninput = () => { if (parseFloat(es.value) <= parseFloat(ss.value)) es.value = parseFloat(ss.value) + 0.1; document.getElementById('trimEndLabel').textContent = parseFloat(es.value).toFixed(1) + 's'; document.getElementById('trimDuration').textContent = (parseFloat(es.value) - parseFloat(ss.value)).toFixed(1) + 's'; video.currentTime = parseFloat(es.value); }; } } else if (type === 'video-compress') { const o = document.getElementById('compressOrigSize'); const d = document.getElementById('compressDuration'); if (o) o.textContent = sizeMB + 'MB'; if (d) d.textContent = currentVideoDuration.toFixed(1) + 's'; } else if (type === 'video-mp3') { const d = document.getElementById('mp3Duration'); const s = document.getElementById('mp3Size'); if (d) d.textContent = currentVideoDuration.toFixed(1) + 's'; if (s) s.textContent = sizeMB + 'MB'; } showToast('Video loaded — ' + sizeMB + 'MB ✨'); }; }

function selectCompressQuality(q, btn) { selectedCompressQuality = q; btn.parentElement.querySelectorAll('.ctrl-btn').forEach(b => b.classList.remove('active')); btn.classList.add('active'); }
function selectEnhanceType(t, btn) { selectedEnhanceType = t; btn.parentElement.querySelectorAll('.ctrl-btn').forEach(b => b.classList.remove('active')); btn.classList.add('active'); }
function selectResolution(res, btn) { selectedResolution = res; btn.parentElement.querySelectorAll('.ctrl-btn').forEach(b => b.classList.remove('active')); btn.classList.add('active'); if (res === '2k') showToast('⚡ 2K HD — 30-60 sec lagenge'); if (res === '1080') showToast('🎬 1080p FHD — 15-30 sec lagenge'); }
function selectAiMagic(type, btn) { selectedAiMagic = type; btn.parentElement.querySelectorAll('.ctrl-btn').forEach(b => b.classList.remove('active')); btn.classList.add('active'); const hints = { enhance: '✨ Sharper, brighter', glow: '🌟 Soft glow' }; const hint = document.getElementById('aiMagicHint'); if (hint) hint.textContent = hints[type] || ''; }
function selectAiRatio(ratio, btn) { selectedAiRatio = ratio; btn.parentElement.querySelectorAll('.ctrl-btn').forEach(b => b.classList.remove('active')); btn.classList.add('active'); }
function selectUpscaleScale(scale, btn) { selectedUpscaleScale = scale; btn.parentElement.querySelectorAll('.ctrl-btn').forEach(b => b.classList.remove('active')); btn.classList.add('active'); }

function loadAiImage(input) { const file = input.files ? input.files[0] : input; if (!file) return; if (!file.type.startsWith('image/')) { showToast('Please upload an image'); return; } currentAiImage = file; const reader = new FileReader(); reader.onload = (e) => { const preview = document.getElementById('aiImagePreview'); if (preview) { preview.src = e.target.result; preview.style.display = 'block'; } const uploadArea = document.getElementById('aiUploadArea'); if (uploadArea) uploadArea.style.display = 'none'; const pending = document.getElementById('aiPendingMsg'); if (pending) pending.style.display = 'none'; const activeUI = document.getElementById('aiActiveUI'); if (activeUI) activeUI.style.display = 'block'; showToast('Image loaded ✨'); }; reader.readAsDataURL(file); }

async function applyAiMagic() { if (isProcessing) return; if (!currentAiImage) { showToast('Upload image first'); return; } isProcessing = true; await requestWakeLock(); showLoader('🎨 Applying AI Magic'); try { const formData = new FormData(); formData.append('image', currentAiImage); formData.append('type', selectedAiMagic); const blob = await uploadWithProgress(SERVER_URL + '/api/ai-magic', formData, updateProgress); const a = document.createElement('a'); a.href = URL.createObjectURL(blob); a.download = `picly-${selectedAiMagic}-${Date.now()}.jpg`; a.click(); hideLoader(); showToast('✅ Done!'); } catch (err) { hideLoader(); showToast('Error: ' + err.message); } await releaseWakeLock(); isProcessing = false; }

async function generateAiImage() { if (isProcessing) return; const promptInput = document.getElementById('aiPromptInput'); if (!promptInput) { showToast('Input not found'); return; } const prompt = promptInput.value.trim(); if (!prompt) { showToast('Enter prompt first'); return; } isProcessing = true; await requestWakeLock(); showLoader('🎨 Generating AI image'); try { const res = await fetch(SERVER_URL + '/api/cf-image', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ prompt: prompt, aspect_ratio: selectedAiRatio }) }); if (!res.ok) throw new Error('Server error: ' + res.status); const data = await res.json(); if (!data.success || !data.result || !data.result.image) throw new Error('No image'); currentAiImageResult = data.result.image; const preview = document.getElementById('aiResultImg'); if (preview) { preview.src = 'data:image/png;base64,' + currentAiImageResult; preview.style.display = 'block'; } const resultBox = document.getElementById('aiResultBox'); if (resultBox) resultBox.style.display = 'block'; hideLoader(); showToast('✅ Image generated!'); } catch (err) { hideLoader(); showToast('Error: ' + err.message); } await releaseWakeLock(); isProcessing = false; }

function downloadAiImage() { if (!currentAiImageResult) { showToast('No image yet'); return; } const a = document.createElement('a'); a.href = 'data:image/png;base64,' + currentAiImageResult; a.download = 'picly-ai-' + Date.now() + '.png'; a.click(); showToast('✅ Downloaded!'); }

function loadRemoveBgImage(input) { const file = input.files ? input.files[0] : input; if (!file) return; if (!file.type.startsWith('image/')) { showToast('Upload an image'); return; } currentRemoveBgImage = file; const reader = new FileReader(); reader.onload = (e) => { const preview = document.getElementById('removeBgPreview'); if (preview) { preview.src = e.target.result; preview.style.display = 'block'; } const uploadArea = document.getElementById('removeBgUploadArea'); if (uploadArea) uploadArea.style.display = 'none'; const pending = document.getElementById('removeBgPending'); if (pending) pending.style.display = 'none'; const activeUI = document.getElementById('removeBgActive'); if (activeUI) activeUI.style.display = 'block'; showToast('Image loaded ✨'); }; reader.readAsDataURL(file); }

async function removeBgOnly() { if (isProcessing) return; if (!currentRemoveBgImage) { showToast('Upload image first'); return; } isProcessing = true; await requestWakeLock(); showLoader('🖼️ Removing background'); try { const formData = new FormData(); formData.append('image', currentRemoveBgImage); const blob = await uploadWithProgress(SERVER_URL + '/api/remove-bg', formData, updateProgress); const a = document.createElement('a'); a.href = URL.createObjectURL(blob); a.download = 'picly-no-bg-' + Date.now() + '.png'; a.click(); hideLoader(); showToast('✅ Background removed!'); } catch (err) { hideLoader(); showToast('Error: ' + err.message); } await releaseWakeLock(); isProcessing = false; }

function loadBgImage(input) { const file = input.files ? input.files[0] : input; if (!file) return; if (!file.type.startsWith('image/')) { showToast('Please upload an image'); return; } currentBgImage = file; const reader = new FileReader(); reader.onload = (e) => { const preview = document.getElementById('bgImagePreview'); if (preview) { preview.src = e.target.result; preview.style.display = 'block'; } const uploadArea = document.getElementById('bgUploadArea'); if (uploadArea) uploadArea.style.display = 'none'; const pending = document.getElementById('bgPendingMsg'); if (pending) pending.style.display = 'none'; const activeUI = document.getElementById('bgActiveUI'); if (activeUI) activeUI.style.display = 'block'; showToast('Image loaded ✨'); }; reader.readAsDataURL(file); }

async function replaceBackground() { if (isProcessing) return; if (!currentBgImage) { showToast('Upload image first'); return; } const promptInput = document.getElementById('bgPromptInput'); const bgPrompt = promptInput ? promptInput.value.trim() : ''; if (!bgPrompt) { showToast('Enter background prompt'); return; } isProcessing = true; await requestWakeLock(); showLoader('🎨 Replacing background'); try { const formData = new FormData(); formData.append('image', currentBgImage); formData.append('bgPrompt', bgPrompt); const blob = await uploadWithProgress(SERVER_URL + '/api/merge-bg', formData, updateProgress); const a = document.createElement('a'); a.href = URL.createObjectURL(blob); a.download = 'picly-bg-replace-' + Date.now() + '.png'; a.click(); hideLoader(); showToast('✅ Background replaced!'); } catch (err) { hideLoader(); showToast('Error: ' + err.message); } await releaseWakeLock(); isProcessing = false; }

function loadEditorImage(input) { const file = input.files ? input.files[0] : input; if (!file) return; if (!file.type.startsWith('image/')) { showToast('Upload an image'); return; } currentEditorImage = file; const reader = new FileReader(); reader.onload = (e) => { const preview = document.getElementById('editorPreview'); if (preview) { preview.src = e.target.result; preview.style.display = 'block'; } const pending = document.getElementById('editorPendingMsg'); if (pending) pending.style.display = 'none'; const activeUI = document.getElementById('editorActiveUI'); if (activeUI) activeUI.style.display = 'block'; showToast('Photo loaded ✨'); }; reader.readAsDataURL(file); }

function setEditorPrompt(text) { const input = document.getElementById('editorPromptInput'); if (input) input.value = text; }

async function runAiEditor() { if (isProcessing) return; if (!currentEditorImage) { showToast('Upload photo first'); return; } const promptInput = document.getElementById('editorPromptInput'); const prompt = promptInput ? promptInput.value.trim() : ''; if (!prompt) { showToast('Enter prompt'); return; } isProcessing = true; await requestWakeLock(); showLoader('🎨 Editing with AI'); try { const formData = new FormData(); formData.append('image', currentEditorImage); formData.append('prompt', prompt); const blob = await uploadWithProgress(SERVER_URL + '/api/ai-editor', formData, updateProgress); currentEditorResult = URL.createObjectURL(blob); const resultImg = document.getElementById('editorResultImg'); if (resultImg) resultImg.src = currentEditorResult; const resultBox = document.getElementById('editorResultBox'); if (resultBox) resultBox.style.display = 'block'; hideLoader(); showToast('✅ Done!'); } catch (err) { hideLoader(); showToast('Error: ' + err.message); } await releaseWakeLock(); isProcessing = false; }

function downloadEditorResult() { if (!currentEditorResult) { showToast('No result yet'); return; } const a = document.createElement('a'); a.href = currentEditorResult; a.download = 'picly-edited-' + Date.now() + '.png'; a.click(); showToast('✅ Downloaded!'); }

function loadUpscaleImage(input) { const file = input.files ? input.files[0] : input; if (!file) return; currentUpscaleImage = file; const reader = new FileReader(); reader.onload = (e) => { document.getElementById('upscalePreview').src = e.target.result; document.getElementById('upscalePending').style.display = 'none'; document.getElementById('upscaleActive').style.display = 'block'; }; reader.readAsDataURL(file); }

async function runUpscale() { if (isProcessing) return; if (!currentUpscaleImage) { showToast('Upload photo'); return; } isProcessing = true; await requestWakeLock(); showLoader(`🖼️ Upscaling ${selectedUpscaleScale}x`); try { const formData = new FormData(); formData.append('image', currentUpscaleImage); formData.append('scale', String(selectedUpscaleScale)); const blob = await uploadWithProgress(SERVER_URL + '/api/upscale', formData, updateProgress); currentUpscaleResult = URL.createObjectURL(blob); document.getElementById('upscaleResultImg').src = currentUpscaleResult; document.getElementById('upscaleResult').style.display = 'block'; const info = document.getElementById('upscaleInfo'); if (info) info.textContent = `✅ ${selectedUpscaleScale}x upscale · ${(blob.size / 1024 / 1024).toFixed(2)} MB`; hideLoader(); showToast('✅ Upscaled!'); } catch (err) { hideLoader(); showToast('Error: ' + err.message); } await releaseWakeLock(); isProcessing = false; }

function downloadUpscale() { if (!currentUpscaleResult) return; const a = document.createElement('a'); a.href = currentUpscaleResult; a.download = `picly-upscaled-${selectedUpscaleScale}x-${Date.now()}.png`; a.click(); }

function loadCleanupImage(input) { const file = input.files ? input.files[0] : input; if (!file) return; currentCleanupImage = file; const reader = new FileReader(); reader.onload = (e) => { document.getElementById('cleanupPreview').src = e.target.result; document.getElementById('cleanupPending').style.display = 'none'; document.getElementById('cleanupActive').style.display = 'block'; }; reader.readAsDataURL(file); }

async function runCleanup() { if (isProcessing) return; if (!currentCleanupImage) { showToast('Upload photo'); return; } isProcessing = true; await requestWakeLock(); showLoader('🧹 Cleaning up'); try { const formData = new FormData(); formData.append('image', currentCleanupImage); const blob = await uploadWithProgress(SERVER_URL + '/api/cleanup', formData, updateProgress); currentCleanupResult = URL.createObjectURL(blob); document.getElementById('cleanupResultImg').src = currentCleanupResult; document.getElementById('cleanupResult').style.display = 'block'; hideLoader(); showToast('✅ Cleaned!'); } catch (err) { hideLoader(); showToast('Error: ' + err.message); } await releaseWakeLock(); isProcessing = false; }

// ==================== PART 3 — RESTORE + HELPERS + INIT ====================

function loadRestoreImage(input) {
  const file = input.files ? input.files[0] : input;
  if (!file) return;
  if (!file.type.startsWith('image/')) { showToast('Upload an image'); return; }
  currentRestoreImage = file;
  const reader = new FileReader();
  reader.onload = (e) => {
    const preview = document.getElementById('restorePreview');
    if (preview) { preview.src = e.target.result; preview.style.display = 'block'; }
    const pending = document.getElementById('restorePendingMsg');
    if (pending) pending.style.display = 'none';
    const activeUI = document.getElementById('restoreActiveUI');
    if (activeUI) activeUI.style.display = 'block';
    showToast('Photo loaded ✨');
  };
  reader.readAsDataURL(file);
}

async function runRestore() {
  if (isProcessing) return;
  if (!currentRestoreImage) { showToast('Upload photo'); return; }
  isProcessing = true;
  await requestWakeLock();
  showLoader('🎨 Restoring photo (30-60 sec)');

  try {
    // Step 1: Upload + get job ID (fast)
    const formData = new FormData();
    formData.append('image', currentRestoreImage);

    const uploadRes = await fetch(SERVER_URL + '/api/restore', {
      method: 'POST',
      body: formData
    });

    if (!uploadRes.ok) throw new Error('Upload failed: ' + uploadRes.status);
    const { jobId, status } = await uploadRes.json();
    if (!jobId) throw new Error('No job ID received');
    console.log('Job ID:', jobId);

    // Step 2: Poll status
    let attempts = 0;
    const maxAttempts = 60; // 60 × 3 sec = 180 sec max

    while (attempts < maxAttempts) {
      await new Promise(r => setTimeout(r, 3000));
      attempts++;

      const statusRes = await fetch(SERVER_URL + '/api/restore-status/' + jobId);
      if (!statusRes.ok) {
        if (statusRes.status === 404) throw new Error('Job expired');
        continue;
      }

      const statusData = await statusRes.json();
      console.log(`Poll ${attempts}:`, statusData.status);

      if (statusData.status === 'completed') {
        // Step 3: Download result
        const resultRes = await fetch(SERVER_URL + '/api/restore-result/' + jobId);
        if (!resultRes.ok) throw new Error('Download failed');

        const blob = await resultRes.blob();
        currentRestoreResult = URL.createObjectURL(blob);
        document.getElementById('restoreResultImg').src = currentRestoreResult;
        document.getElementById('restoreResult').style.display = 'block';

        hideLoader();
        showToast('✅ Restored!');
        await releaseWakeLock();
        isProcessing = false;
        return;
      }

      if (statusData.status === 'failed') {
        throw new Error(statusData.error || 'Restore failed');
      }

      // Update loader message
      showLoader(`🎨 Processing... (${attempts * 3}s)`);
    }

    throw new Error('Timeout — 180 sec exceed');
  } catch (err) {
    hideLoader();
    console.error('❌', err);
    showToast('Error: ' + err.message);
  }
  await releaseWakeLock();
  isProcessing = false;
}

function downloadRestoreResult() {
  if (!currentRestoreResult) { showToast('No result yet'); return; }
  const a = document.createElement('a');
  a.href = currentRestoreResult;
  a.download = 'picly-restored-' + Date.now() + '.png';
  a.click();
  showToast('✅ Downloaded!');
}

// ==================== LOADER / WAKE LOCK / TOAST ====================

function showLoader(text) {
  let loader = document.getElementById('globalLoader');
  if (!loader) {
    loader = document.createElement('div');
    loader.id = 'globalLoader';
    loader.style.cssText = 'position:fixed;inset:0;background:rgba(0,0,0,0.8);display:flex;flex-direction:column;align-items:center;justify-content:center;z-index:9999;color:#fff;font-family:Inter,sans-serif;';
    loader.innerHTML = '<div class="spinner" style="width:48px;height:48px;border:4px solid rgba(255,255,255,0.2);border-top-color:#00d4ff;border-radius:50%;animation:spin 0.8s linear infinite;margin-bottom:16px;"></div><div id="loaderText" style="font-size:16px;font-weight:600;">Processing</div>';
    document.body.appendChild(loader);
  }
  const t = document.getElementById('loaderText');
  if (t) t.textContent = text || 'Processing';
  loader.style.display = 'flex';
}

function hideLoader() {
  const loader = document.getElementById('globalLoader');
  if (loader) loader.style.display = 'none';
}

function updateProgress(percent) {
  const t = document.getElementById('loaderText');
  if (t && percent != null) t.textContent = `Processing... ${Math.round(percent)}%`;
}

function showToast(msg) {
  let toast = document.getElementById('globalToast');
  if (!toast) {
    toast = document.createElement('div');
    toast.id = 'globalToast';
    toast.style.cssText = 'position:fixed;bottom:30px;left:50%;transform:translateX(-50%);background:#1a1a1a;color:#fff;padding:12px 24px;border-radius:30px;font-family:Inter,sans-serif;font-size:14px;z-index:10000;box-shadow:0 8px 24px rgba(0,0,0,0.4);transition:opacity 0.3s;';
    document.body.appendChild(toast);
  }
  toast.textContent = msg;
  toast.style.opacity = '1';
  clearTimeout(toast._t);
  toast._t = setTimeout(() => { toast.style.opacity = '0'; }, 2500);
}

async function requestWakeLock() {
  try {
    if ('wakeLock' in navigator) {
      wakeLock = await navigator.wakeLock.request('screen');
      wakeLock.addEventListener('release', () => { wakeLock = null; });
    }
  } catch (e) {}
}

async function releaseWakeLock() {
  try { if (wakeLock) { await wakeLock.release(); wakeLock = null; } } catch (e) {}
}

function uploadWithProgress(url, formData, onProgress) {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.open('POST', url);
    xhr.upload.onprogress = (e) => {
      if (e.lengthComputable && onProgress) onProgress((e.loaded / e.total) * 100);
    };
    xhr.onload = () => {
      if (xhr.status >= 200 && xhr.status < 300) {
        resolve(new Blob([xhr.response], { type: xhr.getResponseHeader('Content-Type') || 'application/octet-stream' }));
      } else {
        reject(new Error('Upload failed: ' + xhr.status));
      }
    };
    xhr.onerror = () => reject(new Error('Network error'));
    xhr.responseType = 'arraybuffer';
    xhr.send(formData);
  });
}

// ==================== BUILD CONTROLS ====================

function buildControls(type) {
  const wrap = document.getElementById('toolControls');
  if (!wrap) return;
  wrap.innerHTML = '';

  if (type === 'crop') {
    wrap.innerHTML = `
      <div class="control-group">
        <label>Preset</label>
        <div class="ctrl-row">
          <button class="ctrl-btn" onclick="applyCropPreset(1,1,this)">1:1</button>
          <button class="ctrl-btn" onclick="applyCropPreset(4,5,this)">4:5</button>
          <button class="ctrl-btn" onclick="applyCropPreset(9,16,this)">9:16</button>
          <button class="ctrl-btn" onclick="applyCropPreset(16,9,this)">16:9</button>
        </div>
      </div>`;
  } else if (type === 'filters') {
    const filters = [
      { name: 'Original', css: 'none' },
      { name: 'B&W', css: 'grayscale(1)' },
      { name: 'Sepia', css: 'sepia(0.8)' },
      { name: 'Vivid', css: 'saturate(1.8) contrast(1.1)' },
      { name: 'Cool', css: 'hue-rotate(180deg) saturate(1.2)' },
      { name: 'Warm', css: 'sepia(0.3) saturate(1.4)' },
      { name: 'Vintage', css: 'sepia(0.5) contrast(0.9) brightness(1.1)' },
      { name: 'Fade', css: 'contrast(0.8) brightness(1.15) saturate(0.7)' },
      { name: 'Dramatic', css: 'contrast(1.4) brightness(0.9) saturate(1.2)' },
      { name: 'Chrome', css: 'contrast(1.2) saturate(1.3)' },
      { name: 'Invert', css: 'invert(1)' },
      { name: 'Blur', css: 'blur(2px)' },
      { name: 'Bright', css: 'brightness(1.3)' },
      { name: 'Dark', css: 'brightness(0.7)' }
    ];
    wrap.innerHTML = `
      <div class="control-group">
        <label>Filter</label>
        <div class="filter-scroll">
          ${filters.map(f => `<button class="filter-btn" onclick="applyFilter('${f.css}',this)">${f.name}</button>`).join('')}
        </div>
      </div>`;
  } else if (type === 'adjust') {
    wrap.innerHTML = `
      <div class="control-group">
        <label>Brightness</label>
        <input type="range" id="adjBrightness" min="0.5" max="1.5" step="0.05" value="1" oninput="applyAdjust()">
      </div>
      <div class="control-group">
        <label>Contrast</label>
        <input type="range" id="adjContrast" min="0.5" max="1.5" step="0.05" value="1" oninput="applyAdjust()">
      </div>
      <div class="control-group">
        <label>Saturation</label>
        <input type="range" id="adjSaturation" min="0" max="2" step="0.05" value="1" oninput="applyAdjust()">
      </div>`;
  } else if (type === 'resize') {
    wrap.innerHTML = `
      <div class="control-group">
        <label>Width (px)</label>
        <input type="number" id="resizeWidth" placeholder="Width" oninput="applyResize()">
      </div>
      <div class="control-group">
        <label>Height (px)</label>
        <input type="number" id="resizeHeight" placeholder="Height" oninput="applyResize()">
      </div>`;
  } else if (type === 'rotate') {
    wrap.innerHTML = `
      <div class="control-group">
        <label>Rotate</label>
        <div class="ctrl-row">
          <button class="ctrl-btn" onclick="rotateImage(-90)">↺ 90°</button>
          <button class="ctrl-btn" onclick="rotateImage(90)">↻ 90°</button>
          <button class="ctrl-btn" onclick="flipImage('h')">↔ Flip</button>
          <button class="ctrl-btn" onclick="flipImage('v')">↕ Flip</button>
        </div>
      </div>`;
  } else if (type === 'text') {
    wrap.innerHTML = `
      <div class="control-group">
        <label>Text</label>
        <input type="text" id="textInput" placeholder="Enter text" style="width:100%;padding:10px;border-radius:8px;border:1px solid #333;background:#1a1a1a;color:#fff;">
      </div>
      <div class="control-group">
        <label>Color</label>
        <input type="color" id="textColor" value="#ffffff" onchange="selectedTextColor=this.value">
      </div>
      <div class="control-group">
        <label>Font</label>
        <select id="fontSelect" style="width:100%;padding:10px;border-radius:8px;border:1px solid #333;background:#1a1a1a;color:#fff;">
          <option>Arial Black</option>
          <option>Arial</option>
          <option>Georgia</option>
          <option>Courier New</option>
          <option>Impact</option>
        </select>
      </div>
      <button class="primary-btn" onclick="addTextOverlay()">Add Text</button>`;
  } else if (type === 'stickers') {
    const emojis = ['😀','😂','❤️','🔥','⭐','🌈','🎉','👍','✨','💯','🎨','📸','🌟','💖','😎','🤩','🥰','😍','🙌','👏','🎯','🚀','💪','🌈','☀️','🌙','⚡','🎵','🌸','🍀','🦋','🐶','🐱','🦁','🐼'];
    wrap.innerHTML = `
      <div class="control-group">
        <label>Stickers</label>
        <div style="display:flex;flex-wrap:wrap;gap:8px;">
          ${emojis.map(e => `<button style="font-size:28px;background:none;border:none;cursor:pointer;" onclick="addSticker('${e}')">${e}</button>`).join('')}
        </div>
      </div>`;
  } else if (type === 'passport') {
    wrap.innerHTML = `
      <div class="control-group">
        <label>Size</label>
        <div class="ctrl-row">
          <button class="ctrl-btn active" onclick="selectPassportSize('35x45',this)">35×45mm</button>
          <button class="ctrl-btn" onclick="selectPassportSize('2x2',this)">2×2 inch</button>
        </div>
      </div>
      <button class="primary-btn" onclick="makePassport()">Make Passport Photo</button>`;
  } else if (type === 'photo-signature') {
    wrap.innerHTML = `
      <div class="control-group">
        <label>Photo (left)</label>
        <input type="file" accept="image/*" id="psPhoto" onchange="psPhotoFile=this.files[0]">
      </div>
      <div class="control-group">
        <label>Signature (right)</label>
        <input type="file" accept="image/*" id="psSign" onchange="psSignFile=this.files[0]">
      </div>
      <button class="primary-btn" onclick="makePhotoSignature()">Combine</button>`;
  } else if (type === 'signature') {
    wrap.innerHTML = `
      <canvas id="signaturePad" width="400" height="200" style="background:#fff;border-radius:12px;width:100%;max-width:400px;touch-action:none;"></canvas>
      <div class="ctrl-row" style="margin-top:12px;">
        <button class="ctrl-btn" onclick="clearSignature()">Clear</button>
        <button class="ctrl-btn" onclick="useSignature()">Use</button>
      </div>`;
    setTimeout(initSignaturePad, 100);
  } else if (type === 'scanner') {
    wrap.innerHTML = `
      <button class="primary-btn" onclick="scanDocument()">📄 Scan to PDF</button>`;
  } else if (type === 'idcard') {
    wrap.innerHTML = `
      <div class="control-group">
        <label>ID Type</label>
        <div class="ctrl-row">
          <button class="ctrl-btn" onclick="makeIdCard('aadhaar',this)">Aadhaar</button>
          <button class="ctrl-btn" onclick="makeIdCard('pan',this)">PAN</button>
        </div>
      </div>`;
  } else if (type === 'splitter') {
    wrap.innerHTML = `
      <div class="control-group">
        <label>Parts</label>
        <div class="ctrl-row">
          <button class="ctrl-btn" onclick="splitImage(4,this)">4</button>
          <button class="ctrl-btn" onclick="splitImage(6,this)">6</button>
          <button class="ctrl-btn" onclick="splitImage(8,this)">8</button>
        </div>
      </div>`;
  } else if (type === 'compress') {
    wrap.innerHTML = `
      <div class="control-group">
        <label>Target KB</label>
        <input type="number" id="targetKB" placeholder="e.g. 200" style="width:100%;padding:10px;border-radius:8px;border:1px solid #333;background:#1a1a1a;color:#fff;">
      </div>
      <button class="primary-btn" onclick="compressImage()">Compress</button>`;
  } else if (type === 'pdf') {
    wrap.innerHTML = `
      <div class="control-group">
        <label>Page Size</label>
        <div class="ctrl-row">
          <button class="ctrl-btn" onclick="selectPdfSize('a4',this)">A4</button>
          <button class="ctrl-btn" onclick="selectPdfSize('a5',this)">A5</button>
          <button class="ctrl-btn" onclick="selectPdfSize('letter',this)">Letter</button>
        </div>
      </div>
      <button class="primary-btn" onclick="convertToPdf()">Convert to PDF</button>`;
  } else if (type === 'convert') {
    wrap.innerHTML = `
      <div class="control-group">
        <label>Format</label>
        <div class="ctrl-row">
          <button class="ctrl-btn" onclick="convertFormat('png',this)">PNG</button>
          <button class="ctrl-btn" onclick="convertFormat('jpeg',this)">JPG</button>
          <button class="ctrl-btn" onclick="convertFormat('webp',this)">WEBP</button>
        </div>
      </div>`;
  } else if (type === 'video-trim') {
    wrap.innerHTML = `
      <div class="control-group">
        <label>Start: <span id="trimStartLabel">0.0s</span></label>
        <input type="range" id="trimStartSlider" min="0" step="0.1" value="0">
      </div>
      <div class="control-group">
        <label>End: <span id="trimEndLabel">0.0s</span></label>
        <input type="range" id="trimEndSlider" min="0" step="0.1" value="0">
      </div>
      <div class="ctrl-row">
        <span>Duration: <b id="trimDuration">0s</b></span>
        <span>Size: <b id="trimSize">0MB</b></span>
      </div>
      <button class="primary-btn" onclick="runTrim()">✂️ Trim Video</button>`;
  } else if (type === 'video-compress') {
    wrap.innerHTML = `
      <div class="control-group">
        <label>Quality</label>
        <div class="ctrl-row">
          <button class="ctrl-btn" onclick="selectCompressQuality('high',this)">High</button>
          <button class="ctrl-btn active" onclick="selectCompressQuality('medium',this)">Medium</button>
          <button class="ctrl-btn" onclick="selectCompressQuality('low',this)">Low</button>
        </div>
      </div>
      <div class="ctrl-row">
        <span>Original: <b id="compressOrigSize">0MB</b></span>
        <span>Duration: <b id="compressDuration">0s</b></span>
      </div>
      <button class="primary-btn" onclick="runCompress()">📦 Compress Video</button>`;
  } else if (type === 'video-gif') {
    wrap.innerHTML = `
      <div class="control-group">
        <label>Start (sec)</label>
        <input type="number" id="gifStart" value="0" min="0" step="0.5" style="width:100%;padding:10px;border-radius:8px;border:1px solid #333;background:#1a1a1a;color:#fff;">
      </div>
      <div class="control-group">
        <label>Duration (sec)</label>
        <input type="number" id="gifDuration" value="3" min="0.5" step="0.5" style="width:100%;padding:10px;border-radius:8px;border:1px solid #333;background:#1a1a1a;color:#fff;">
      </div>
      <div class="control-group">
        <label>FPS</label>
        <div class="ctrl-row">
          <button class="ctrl-btn" onclick="selectGifFps('8',this)">8</button>
          <button class="ctrl-btn active" onclick="selectGifFps('10',this)">10</button>
          <button class="ctrl-btn" onclick="selectGifFps('15',this)">15</button>
        </div>
      </div>
      <button class="primary-btn" onclick="runGif()">🎞️ Convert to GIF</button>`;
  } else if (type === 'video-mp3') {
    wrap.innerHTML = `
      <div class="ctrl-row">
        <span>Duration: <b id="mp3Duration">0s</b></span>
        <span>Size: <b id="mp3Size">0MB</b></span>
      </div>
      <button class="primary-btn" onclick="runMp3()">🎵 Extract MP3</button>`;
  } else if (type === 'video-enhance') {
    const types = [
      { id: 'bright', name: 'Bright' }, { id: 'contrast', name: 'Contrast' },
      { id: 'sharpen', name: 'Sharpen' }, { id: 'denoise', name: 'Denoise' },
      { id: 'autocolor', name: 'Auto Color' }, { id: 'cinematic', name: 'Cinematic' },
      { id: 'vivid', name: 'Vivid' }, { id: 'warm', name: 'Warm' },
      { id: 'cool', name: 'Cool' }, { id: 'vintage', name: 'Vintage' },
      { id: 'bw', name: 'B&W' }, { id: 'stabilize', name: 'Stabilize' }
    ];
    wrap.innerHTML = `
      <div class="control-group">
        <label>Enhance Type</label>
        <div class="filter-scroll">
          ${types.map(t => `<button class="ctrl-btn" onclick="selectEnhanceType('${t.id}',this)">${t.name}</button>`).join('')}
        </div>
      </div>
      <div class="control-group">
        <label>Resolution</label>
        <div class="ctrl-row">
          <button class="ctrl-btn" onclick="selectResolution('480',this)">480p</button>
          <button class="ctrl-btn active" onclick="selectResolution('720',this)">720p</button>
          <button class="ctrl-btn" onclick="selectResolution('1080',this)">1080p</button>
          <button class="ctrl-btn" onclick="selectResolution('2k',this)">2K</button>
        </div>
      </div>
      <button class="primary-btn" onclick="runVideoEnhance()">✨ Enhance Video</button>`;
  } else if (type === 'ai-text-image') {
    wrap.innerHTML = `
      <div class="control-group">
        <label>Prompt</label>
        <textarea id="aiPromptInput" rows="3" placeholder="Describe your image..." style="width:100%;padding:12px;border-radius:8px;border:1px solid #333;background:#1a1a1a;color:#fff;resize:none;"></textarea>
      </div>
      <div class="control-group">
        <label>Aspect Ratio</label>
        <div class="ctrl-row">
          <button class="ctrl-btn active" onclick="selectAiRatio('1:1',this)">1:1</button>
          <button class="ctrl-btn" onclick="selectAiRatio('16:9',this)">16:9</button>
          <button class="ctrl-btn" onclick="selectAiRatio('9:16',this)">9:16</button>
        </div>
      </div>
      <button class="primary-btn" onclick="generateAiImage()">🎨 Generate</button>
      <div id="aiResultBox" style="display:none;margin-top:16px;">
        <img id="aiResultImg" style="width:100%;border-radius:12px;">
        <button class="primary-btn" style="margin-top:8px;" onclick="downloadAiImage()">⬇️ Download</button>
      </div>`;
  } else if (type === 'ai-bg-remove') {
    wrap.innerHTML = `
      <div id="removeBgPending" style="text-align:center;padding:20px;color:#888;">Upload an image</div>
      <div id="removeBgActive" style="display:none;">
        <img id="removeBgPreview" style="width:100%;max-height:250px;object-fit:contain;border-radius:12px;">
        <button class="primary-btn" style="margin-top:12px;" onclick="removeBgOnly()">🖼️ Remove Background</button>
      </div>`;
  } else if (type === 'ai-bg-replace') {
    wrap.innerHTML = `
      <div id="bgPendingMsg" style="text-align:center;padding:20px;color:#888;">Upload an image</div>
      <div id="bgActiveUI" style="display:none;">
        <img id="bgImagePreview" style="width:100%;max-height:250px;object-fit:contain;border-radius:12px;">
        <div class="control-group" style="margin-top:12px;">
          <label>Background Prompt</label>
          <input type="text" id="bgPromptInput" placeholder="e.g. beach sunset, studio white..." style="width:100%;padding:12px;border-radius:8px;border:1px solid #333;background:#1a1a1a;color:#fff;">
        </div>
        <button class="primary-btn" onclick="replaceBackground()">🎨 Replace Background</button>
      </div>`;
  } else if (type === 'ai-editor') {
    wrap.innerHTML = `
      <div id="editorPendingMsg" style="text-align:center;padding:20px;color:#888;">Upload a photo</div>
      <div id="editorActiveUI" style="display:none;">
        <img id="editorPreview" style="width:100%;max-height:250px;object-fit:contain;border-radius:12px;">
        <div class="control-group" style="margin-top:12px;">
          <label>Edit Prompt</label>
          <input type="text" id="editorPromptInput" placeholder="e.g. make it look like a painting..." style="width:100%;padding:12px;border-radius:8px;border:1px solid #333;background:#1a1a1a;color:#fff;">
        </div>
        <div class="ctrl-row">
          <button class="ctrl-btn" onclick="setEditorPrompt('make it look like a vintage photo')">Vintage</button>
          <button class="ctrl-btn" onclick="setEditorPrompt('make it look like an oil painting')">Painting</button>
          <button class="ctrl-btn" onclick="setEditorPrompt('add a beautiful sunset background')">Sunset</button>
        </div>
        <button class="primary-btn" onclick="runAiEditor()">🎨 Apply Edit</button>
        <div id="editorResultBox" style="display:none;margin-top:16px;">
          <img id="editorResultImg" style="width:100%;border-radius:12px;">
          <button class="primary-btn" style="margin-top:8px;" onclick="downloadEditorResult()">⬇️ Download</button>
        </div>
      </div>`;
  } else if (type === 'ai-upscale') {
    wrap.innerHTML = `
      <div id="upscalePending" style="text-align:center;padding:20px;color:#888;">Upload a photo</div>
      <div id="upscaleActive" style="display:none;">
        <img id="upscalePreview" style="width:100%;max-height:250px;object-fit:contain;border-radius:12px;">
        <div class="control-group" style="margin-top:12px;">
          <label>Scale</label>
          <div class="ctrl-row">
            <button class="ctrl-btn active" onclick="selectUpscaleScale(2,this)">2x</button>
            <button class="ctrl-btn" onclick="selectUpscaleScale(4,this)">4x</button>
          </div>
        </div>
        <button class="primary-btn" onclick="runUpscale()">🖼️ Upscale</button>
        <div id="upscaleResult" style="display:none;margin-top:16px;">
          <img id="upscaleResultImg" style="width:100%;border-radius:12px;">
          <div id="upscaleInfo" style="margin-top:8px;color:#888;font-size:14px;"></div>
          <button class="primary-btn" style="margin-top:8px;" onclick="downloadUpscale()">⬇️ Download</button>
        </div>
      </div>`;
  } else if (type === 'ai-cleanup') {
    wrap.innerHTML = `
      <div id="cleanupPending" style="text-align:center;padding:20px;color:#888;">Upload a photo</div>
      <div id="cleanupActive" style="display:none;">
        <img id="cleanupPreview" style="width:100%;max-height:250px;object-fit:contain;border-radius:12px;">
        <button class="primary-btn" style="margin-top:12px;" onclick="runCleanup()">🧹 Cleanup</button>
        <div id="cleanupResult" style="display:none;margin-top:16px;">
          <img id="cleanupResultImg" style="width:100%;border-radius:12px;">
          <button class="primary-btn" style="margin-top:8px;" onclick="downloadCleanup()">⬇️ Download</button>
        </div>
      </div>`;
  } else if (type === 'ai-restore') {
    wrap.innerHTML = `
      <div id="restorePendingMsg" style="text-align:center;padding:20px;color:#888;">Upload an old photo</div>
      <div id="restoreActiveUI" style="display:none;">
        <img id="restorePreview" style="width:100%;max-height:250px;object-fit:contain;border-radius:12px;">
        <button class="primary-btn" style="margin-top:12px;" onclick="runRestore()">🎨 Restore Photo</button>
        <div id="restoreResult" style="display:none;margin-top:16px;">
          <img id="restoreResultImg" style="width:100%;border-radius:12px;">
          <button class="primary-btn" style="margin-top:8px;" onclick="downloadRestoreResult()">⬇️ Download</button>
        </div>
      </div>`;
  } else if (type === 'ai-enhance' || type === 'ai-glow') {
    wrap.innerHTML = `
      <div id="aiPendingMsg" style="text-align:center;padding:20px;color:#888;">Upload a photo</div>
      <div id="aiActiveUI" style="display:none;">
        <img id="aiImagePreview" style="width:100%;max-height:250px;object-fit:contain;border-radius:12px;">
        <div class="control-group" style="margin-top:12px;">
          <label>Effect</label>
          <div class="ctrl-row">
            <button class="ctrl-btn ${type === 'ai-enhance' ? 'active' : ''}" onclick="selectAiMagic('enhance',this)">Enhance</button>
            <button class="ctrl-btn ${type === 'ai-glow' ? 'active' : ''}" onclick="selectAiMagic('glow',this)">Glow</button>
          </div>
          <div id="aiMagicHint" style="margin-top:8px;color:#888;font-size:13px;"></div>
        </div>
        <button class="primary-btn" onclick="applyAiMagic()">✨ Apply</button>
      </div>`;
  } else if (type === 'emi') {
    wrap.innerHTML = `
      <div class="control-group"><label>Loan Amount (₹)</label><input type="number" id="emiP" placeholder="e.g. 500000" style="width:100%;padding:10px;border-radius:8px;border:1px solid #333;background:#1a1a1a;color:#fff;"></div>
      <div class="control-group"><label>Interest Rate (%)</label><input type="number" id="emiR" placeholder="e.g. 8.5" step="0.1" style="width:100%;padding:10px;border-radius:8px;border:1px solid #333;background:#1a1a1a;color:#fff;"></div>
      <div class="control-group"><label>Tenure (months)</label><input type="number" id="emiN" placeholder="e.g. 60" style="width:100%;padding:10px;border-radius:8px;border:1px solid #333;background:#1a1a1a;color:#fff;"></div>
      <button class="primary-btn" onclick="calcEmi()">Calculate EMI</button>
      <div id="emiResult" style="margin-top:16px;font-size:18px;font-weight:600;"></div>`;
  } else if (type === 'gst') {
    wrap.innerHTML = `
      <div class="control-group"><label>Amount (₹)</label><input type="number" id="gstAmount" placeholder="e.g. 1000" style="width:100%;padding:10px;border-radius:8px;border:1px solid #333;background:#1a1a1a;color:#fff;"></div>
      <div class="control-group"><label>GST Rate (%)</label><div class="ctrl-row">
        <button class="ctrl-btn" onclick="calcGst(5,this)">5%</button>
        <button class="ctrl-btn" onclick="calcGst(12,this)">12%</button>
        <button class="ctrl-btn" onclick="calcGst(18,this)">18%</button>
        <button class="ctrl-btn" onclick="calcGst(28,this)">28%</button>
      </div></div>
      <div id="gstResult" style="margin-top:16px;font-size:18px;font-weight:600;"></div>`;
  } else if (type === 'age') {
    wrap.innerHTML = `
      <div class="control-group"><label>Date of Birth</label><input type="date" id="dobInput" style="width:100%;padding:10px;border-radius:8px;border:1px solid #333;background:#1a1a1a;color:#fff;"></div>
      <button class="primary-btn" onclick="calcAge()">Calculate Age</button>
      <div id="ageResult" style="margin-top:16px;font-size:18px;font-weight:600;"></div>`;
  } else if (type === 'bmi') {
    wrap.innerHTML = `
      <div class="control-group"><label>Weight (kg)</label><input type="number" id="bmiWeight" placeholder="e.g. 70" style="width:100%;padding:10px;border-radius:8px;border:1px solid #333;background:#1a1a1a;color:#fff;"></div>
      <div class="control-group"><label>Height (cm)</label><input type="number" id="bmiHeight" placeholder="e.g. 175" style="width:100%;padding:10px;border-radius:8px;border:1px solid #333;background:#1a1a1a;color:#fff;"></div>
      <button class="primary-btn" onclick="calcBmi()">Calculate BMI</button>
      <div id="bmiResult" style="margin-top:16px;font-size:18px;font-weight:600;"></div>`;
  } else if (type === 'unit') {
    wrap.innerHTML = `
      <div class="control-group"><label>Category</label><select id="unitCat" onchange="updateUnitList()" style="width:100%;padding:10px;border-radius:8px;border:1px solid #333;background:#1a1a1a;color:#fff;">
        <option value="length">Length</option><option value="weight">Weight</option><option value="temp">Temperature</option>
      </select></div>
      <div class="control-group"><label>Value</label><input type="number" id="unitVal" placeholder="Enter value" style="width:100%;padding:10px;border-radius:8px;border:1px solid #333;background:#1a1a1a;color:#fff;"></div>
      <div class="ctrl-row">
        <select id="unitFrom" style="flex:1;padding:10px;border-radius:8px;border:1px solid #333;background:#1a1a1a;color:#fff;"></select>
        <span style="padding:0 8px;">→</span>
        <select id="unitTo" style="flex:1;padding:10px;border-radius:8px;border:1px solid #333;background:#1a1a1a;color:#fff;"></select>
      </div>
      <button class="primary-btn" onclick="convertUnit()">Convert</button>
      <div id="unitResult" style="margin-top:16px;font-size:18px;font-weight:600;"></div>`;
    setTimeout(updateUnitList, 50);
  } else if (type === 'qr') {
    wrap.innerHTML = `
      <div class="control-group"><label>Text / URL</label><input type="text" id="qrText" placeholder="e.g. https://example.com" style="width:100%;padding:10px;border-radius:8px;border:1px solid #333;background:#1a1a1a;color:#fff;"></div>
      <button class="primary-btn" onclick="generateQr()">Generate QR</button>
      <div id="qrResult" style="margin-top:16px;text-align:center;"></div>`;
  } else if (type === 'frames') {
    const frames = ['none','simple','rounded','polaroid','vintage','neon','gold'];
    wrap.innerHTML = `
      <div class="control-group">
        <label>Frame Style</label>
        <div class="ctrl-row">
          ${frames.map(f => `<button class="ctrl-btn" onclick="applyFrame('${f}',this)">${f.charAt(0).toUpperCase()+f.slice(1)}</button>`).join('')}
        </div>
      </div>`;
  } else if (type === 'collage') {
    wrap.innerHTML = `
      <div class="control-group">
        <label>Layout</label>
        <div class="ctrl-row">
          <button class="ctrl-btn" onclick="selectCollageLayout('2x2',this)">2×2</button>
          <button class="ctrl-btn" onclick="selectCollageLayout('3x3',this)">3×3</button>
          <button class="ctrl-btn" onclick="selectCollageLayout('1x2',this)">1×2</button>
          <button class="ctrl-btn" onclick="selectCollageLayout('2x1',this)">2×1</button>
        </div>
      </div>
      <div class="control-group">
        <label>Photos (tap to add)</label>
        <input type="file" accept="image/*" multiple id="collageInput" onchange="addCollagePhotos(this)">
      </div>
      <button class="primary-btn" onclick="createCollage()">Create Collage</button>
      <div id="collagePreview" style="margin-top:16px;"></div>`;
  }
}

// ==================== VIDEO FUNCTIONS ====================
async function runTrim() {
  if (isProcessing || !currentVideoFile) return;
  const start = parseFloat(document.getElementById('trimStartSlider').value) || 0;
  const end = parseFloat(document.getElementById('trimEndSlider').value) || 0;
  if (end - start < 0.5) { showToast('Trim range too small'); return; }
  isProcessing = true;
  await requestWakeLock();
  showLoader('✂️ Trimming video');
  try {
    const fd = new FormData();
    fd.append('video', currentVideoFile);
    fd.append('start', start);
    fd.append('end', end);
    const blob = await uploadWithProgress(SERVER_URL + '/api/trim', fd, updateProgress);
    const a = document.createElement('a');
    a.href = URL.createObjectURL(blob);
    a.download = 'picly-trimmed.mp4';
    a.click();
    hideLoader();
    showToast('✅ Trimmed!');
  } catch (e) {
    hideLoader();
    showToast('Error: ' + e.message);
  }
  await releaseWakeLock();
  isProcessing = false;
}

async function runCompress() {
  if (isProcessing || !currentVideoFile) return;
  isProcessing = true;
  await requestWakeLock();
  showLoader('📦 Compressing video');
  try {
    const fd = new FormData();
    fd.append('video', currentVideoFile);
    fd.append('quality', selectedCompressQuality);
    const blob = await uploadWithProgress(SERVER_URL + '/api/compress', fd, updateProgress);
    const a = document.createElement('a');
    a.href = URL.createObjectURL(blob);
    a.download = 'picly-compressed.mp4';
    a.click();
    hideLoader();
    showToast('✅ Compressed!');
  } catch (e) {
    hideLoader();
    showToast('Error: ' + e.message);
  }
  await releaseWakeLock();
  isProcessing = false;
}

async function runGif() {
  if (isProcessing || !currentVideoFile) return;
  const start = parseFloat(document.getElementById('gifStart').value) || 0;
  const duration = parseFloat(document.getElementById('gifDuration').value) || 3;
  const fps = document.querySelector('#gifFps.active')?.dataset?.fps || '10';
  isProcessing = true;
  await requestWakeLock();
  showLoader('🎞️ Converting to GIF');
  try {
    const fd = new FormData();
    fd.append('video', currentVideoFile);
    fd.append('start', start);
    fd.append('duration', duration);
    fd.append('fps', fps);
    const blob = await uploadWithProgress(SERVER_URL + '/api/gif', fd, updateProgress);
    const a = document.createElement('a');
    a.href = URL.createObjectURL(blob);
    a.download = 'picly.gif';
    a.click();
    hideLoader();
    showToast('✅ GIF ready!');
  } catch (e) {
    hideLoader();
    showToast('Error: ' + e.message);
  }
  await releaseWakeLock();
  isProcessing = false;
}

async function runMp3() {
  if (isProcessing || !currentVideoFile) return;
  isProcessing = true;
  await requestWakeLock();
  showLoader('🎵 Extracting audio');
  try {
    const fd = new FormData();
    fd.append('video', currentVideoFile);
    const blob = await uploadWithProgress(SERVER_URL + '/api/mp3', fd, updateProgress);
    const a = document.createElement('a');
    a.href = URL.createObjectURL(blob);
    a.download = 'picly-audio.mp3';
    a.click();
    hideLoader();
    showToast('✅ MP3 ready!');
  } catch (e) {
    hideLoader();
    showToast('Error: ' + e.message);
  }
  await releaseWakeLock();
  isProcessing = false;
}

async function runVideoEnhance() {
  if (isProcessing || !currentVideoFile) return;
  isProcessing = true;
  await requestWakeLock();
  showLoader('✨ Enhancing video');
  try {
    const fd = new FormData();
    fd.append('video', currentVideoFile);
    fd.append('type', selectedEnhanceType);
    fd.append('resolution', selectedResolution);
    const blob = await uploadWithProgress(SERVER_URL + '/api/enhance', fd, updateProgress);
    const a = document.createElement('a');
    a.href = URL.createObjectURL(blob);
    a.download = 'picly-enhanced.mp4';
    a.click();
    hideLoader();
    showToast('✅ Enhanced!');
  } catch (e) {
    hideLoader();
    showToast('Error: ' + e.message);
  }
  await releaseWakeLock();
  isProcessing = false;
}

function selectGifFps(fps, btn) {
  btn.parentElement.querySelectorAll('.ctrl-btn').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  btn.dataset.fps = fps;
}

// ==================== EDIT TOOLS ====================
function applyCropPreset(w, h, btn) {
  if (!currentImage || !canvas) { showToast('Upload image first'); return; }
  const srcW = currentImage.width, srcH = currentImage.height;
  const targetRatio = w / h;
  let newW = srcW, newH = srcW / targetRatio;
  if (newH > srcH) { newH = srcH; newW = srcH * targetRatio; }
  const sx = (srcW - newW) / 2, sy = (srcH - newH) / 2;
  const tmp = document.createElement('canvas');
  tmp.width = newW; tmp.height = newH;
  tmp.getContext('2d').drawImage(currentImage, sx, sy, newW, newH, 0, 0, newW, newH);
  const img = new Image();
  img.onload = () => { currentImage = img; redraw(); showToast('Cropped ✅'); };
  img.src = tmp.toDataURL();
}

function applyFilter(css, btn) {
  if (!canvas) { showToast('Upload image first'); return; }
  canvas.style.filter = css === 'none' ? 'none' : css;
  btn.parentElement.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
}

function applyAdjust() {
  if (!canvas) return;
  const b = document.getElementById('adjBrightness')?.value || 1;
  const c = document.getElementById('adjContrast')?.value || 1;
  const s = document.getElementById('adjSaturation')?.value || 1;
  canvas.style.filter = `brightness(${b}) contrast(${c}) saturate(${s})`;
}

function applyResize() {
  if (!currentImage || !canvas) return;
  const w = parseInt(document.getElementById('resizeWidth')?.value);
  const h = parseInt(document.getElementById('resizeHeight')?.value);
  if (!w || !h) return;
  const tmp = document.createElement('canvas');
  tmp.width = w; tmp.height = h;
  tmp.getContext('2d').drawImage(currentImage, 0, 0, w, h);
  const img = new Image();
  img.onload = () => { currentImage = img; redraw(); };
  img.src = tmp.toDataURL();
}

function rotateImage(deg) {
  if (!currentImage || !canvas) return;
  const tmp = document.createElement('canvas');
  const rad = deg * Math.PI / 180;
  const sin = Math.abs(Math.sin(rad)), cos = Math.abs(Math.cos(rad));
  tmp.width = currentImage.height * sin + currentImage.width * cos;
  tmp.height = currentImage.height * cos + currentImage.width * sin;
  const tctx = tmp.getContext('2d');
  tctx.translate(tmp.width / 2, tmp.height / 2);
  tctx.rotate(rad);
  tctx.drawImage(currentImage, -currentImage.width / 2, -currentImage.height / 2);
  const img = new Image();
  img.onload = () => { currentImage = img; redraw(); showToast('Rotated ✅'); };
  img.src = tmp.toDataURL();
}

function flipImage(dir) {
  if (!currentImage || !canvas) return;
  const tmp = document.createElement('canvas');
  tmp.width = currentImage.width; tmp.height = currentImage.height;
  const tctx = tmp.getContext('2d');
  if (dir === 'h') { tctx.translate(tmp.width, 0); tctx.scale(-1, 1); }
  else { tctx.translate(0, tmp.height); tctx.scale(1, -1); }
  tctx.drawImage(currentImage, 0, 0);
  const img = new Image();
  img.onload = () => { currentImage = img; redraw(); showToast('Flipped ✅'); };
  img.src = tmp.toDataURL();
}

function addTextOverlay() {
  if (!canvas || !overlayLayer) { showToast('Upload image first'); return; }
  const text = document.getElementById('textInput')?.value.trim();
  if (!text) { showToast('Enter text'); return; }
  const color = document.getElementById('textColor')?.value || '#ffffff';
  const font = document.getElementById('fontSelect')?.value || 'Arial Black';
  const div = document.createElement('div');
  div.textContent = text;
  div.style.cssText = `position:absolute;left:50%;top:50%;transform:translate(-50%,-50%);color:${color};font-family:${font};font-size:32px;font-weight:bold;cursor:move;user-select:none;text-shadow:2px 2px 4px rgba(0,0,0,0.5);`;
  let isDragging = false, startX, startY, offsetX, offsetY;
  div.addEventListener('mousedown', (e) => { isDragging = true; startX = e.clientX; startY = e.clientY; offsetX = div.offsetLeft; offsetY = div.offsetTop; });
  div.addEventListener('touchstart', (e) => { isDragging = true; const t = e.touches[0]; startX = t.clientX; startY = t.clientY; offsetX = div.offsetLeft; offsetY = div.offsetTop; e.preventDefault(); });
  document.addEventListener('mousemove', (e) => { if (!isDragging) return; div.style.left = (offsetX + e.clientX - startX) + 'px'; div.style.top = (offsetY + e.clientY - startY) + 'px'; div.style.transform = 'none'; });
  document.addEventListener('touchmove', (e) => { if (!isDragging) return; const t = e.touches[0]; div.style.left = (offsetX + t.clientX - startX) + 'px'; div.style.top = (offsetY + t.clientY - startY) + 'px'; div.style.transform = 'none'; e.preventDefault(); });
  document.addEventListener('mouseup', () => { isDragging = false; });
  document.addEventListener('touchend', () => { isDragging = false; });
  overlayLayer.appendChild(div);
  overlayItems.push({ type: 'text', el: div, text, color, font });
  showToast('Text added ✅');
}

function addSticker(emoji) {
  if (!canvas || !overlayLayer) { showToast('Upload image first'); return; }
  const div = document.createElement('div');
  div.textContent = emoji;
  div.style.cssText = 'position:absolute;left:50%;top:50%;transform:translate(-50%,-50%);font-size:64px;cursor:move;user-select:none;';
  let isDragging = false, startX, startY, offsetX, offsetY;
  div.addEventListener('mousedown', (e) => { isDragging = true; startX = e.clientX; startY = e.clientY; offsetX = div.offsetLeft; offsetY = div.offsetTop; });
  div.addEventListener('touchstart', (e) => { isDragging = true; const t = e.touches[0]; startX = t.clientX; startY = t.clientY; offsetX = div.offsetLeft; offsetY = div.offsetTop; e.preventDefault(); });
  document.addEventListener('mousemove', (e) => { if (!isDragging) return; div.style.left = (offsetX + e.clientX - startX) + 'px'; div.style.top = (offsetY + e.clientY - startY) + 'px'; div.style.transform = 'none'; });
  document.addEventListener('touchmove', (e) => { if (!isDragging) return; const t = e.touches[0]; div.style.left = (offsetX + t.clientX - startX) + 'px'; div.style.top = (offsetY + t.clientY - startY) + 'px'; div.style.transform = 'none'; e.preventDefault(); });
  document.addEventListener('mouseup', () => { isDragging = false; });
  document.addEventListener('touchend', () => { isDragging = false; });
  overlayLayer.appendChild(div);
  overlayItems.push({ type: 'sticker', el: div, emoji });
  showToast('Sticker added ✅');
}

function applyFrame(style, btn) {
  if (!canvas) { showToast('Upload image first'); return; }
  canvas.style.border = 'none';
  canvas.style.boxShadow = 'none';
  canvas.style.borderRadius = '0';
  if (style === 'simple') canvas.style.border = '8px solid #fff';
  else if (style === 'rounded') { canvas.style.borderRadius = '24px'; canvas.style.border = '6px solid #fff'; }
  else if (style === 'polaroid') { canvas.style.border = '20px solid #fff'; canvas.style.borderBottomWidth = '80px'; canvas.style.boxShadow = '0 8px 20px rgba(0,0,0,0.3)'; }
  else if (style === 'vintage') { canvas.style.border = '12px solid #8b7355'; canvas.style.boxShadow = 'inset 0 0 30px rgba(0,0,0,0.3)'; }
  else if (style === 'neon') { canvas.style.border = '4px solid #00d4ff'; canvas.style.boxShadow = '0 0 20px #00d4ff'; }
  else if (style === 'gold') { canvas.style.border = '8px solid #d4af37'; canvas.style.boxShadow = '0 0 30px rgba(212,175,55,0.5)'; }
  btn.parentElement.querySelectorAll('.ctrl-btn').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  showToast('Frame applied ✅');
}

// ==================== UTILITY TOOLS ====================
function calcEmi() {
  const P = parseFloat(document.getElementById('emiP')?.value);
  const r = parseFloat(document.getElementById('emiR')?.value) / 12 / 100;
  const n = parseFloat(document.getElementById('emiN')?.value);
  if (!P || !r || !n) { showToast('Fill all fields'); return; }
  const emi = (P * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);
  document.getElementById('emiResult').innerHTML = `EMI: <span style="color:#00d4ff;">₹${emi.toFixed(2)}</span> / month<br>Total: ₹${(emi * n).toFixed(2)}<br>Interest: ₹${(emi * n - P).toFixed(2)}`;
}

function calcGst(rate, btn) {
  const amount = parseFloat(document.getElementById('gstAmount')?.value);
  if (!amount) { showToast('Enter amount'); return; }
  const gst = amount * rate / 100;
  document.getElementById('gstResult').innerHTML = `Base: ₹${amount.toFixed(2)}<br>GST (${rate}%): ₹${gst.toFixed(2)}<br>Total: <span style="color:#00d4ff;">₹${(amount + gst).toFixed(2)}</span>`;
  btn.parentElement.querySelectorAll('.ctrl-btn').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
}

function calcAge() {
  const dob = document.getElementById('dobInput')?.value;
  if (!dob) { showToast('Select date'); return; }
  const birth = new Date(dob);
  const now = new Date();
  let years = now.getFullYear() - birth.getFullYear();
  let months = now.getMonth() - birth.getMonth();
  let days = now.getDate() - birth.getDate();
  if (days < 0) { months--; days += new Date(now.getFullYear(), now.getMonth(), 0).getDate(); }
  if (months < 0) { years--; months += 12; }
  const totalDays = Math.floor((now - birth) / (1000 * 60 * 60 * 24));
  document.getElementById('ageResult').innerHTML = `Age: <span style="color:#00d4ff;">${years}y ${months}m ${days}d</span><br>Total days: ${totalDays}`;
}

function calcBmi() {
  const w = parseFloat(document.getElementById('bmiWeight')?.value);
  const h = parseFloat(document.getElementById('bmiHeight')?.value) / 100;
  if (!w || !h) { showToast('Enter values'); return; }
  const bmi = w / (h * h);
  let cat = 'Normal';
  if (bmi < 18.5) cat = 'Underweight';
  else if (bmi < 25) cat = 'Normal';
  else if (bmi < 30) cat = 'Overweight';
  else cat = 'Obese';
  document.getElementById('bmiResult').innerHTML = `BMI: <span style="color:#00d4ff;">${bmi.toFixed(1)}</span><br>Category: ${cat}`;
}

function updateUnitList() {
  const cat = document.getElementById('unitCat')?.value;
  const units = {
    length: ['Meter','Kilometer','Centimeter','Millimeter','Mile','Yard','Foot','Inch'],
    weight: ['Kilogram','Gram','Milligram','Pound','Ounce','Ton'],
    temp: ['Celsius','Fahrenheit','Kelvin']
  }[cat] || [];
  const from = document.getElementById('unitFrom');
  const to = document.getElementById('unitTo');
  if (!from || !to) return;
  from.innerHTML = units.map(u => `<option>${u}</option>`).join('');
  to.innerHTML = units.map(u => `<option>${u}</option>`).join('');
  to.selectedIndex = 1;
}

function convertUnit() {
  const cat = document.getElementById('unitCat')?.value;
  const val = parseFloat(document.getElementById('unitVal')?.value);
  const from = document.getElementById('unitFrom')?.value;
  const to = document.getElementById('unitTo')?.value;
  if (isNaN(val)) { showToast('Enter value'); return; }
  if (cat === 'temp') {
    let c;
    if (from === 'Celsius') c = val;
    else if (from === 'Fahrenheit') c = (val - 32) * 5 / 9;
    else c = val - 273.15;
    let result;
    if (to === 'Celsius') result = c;
    else if (to === 'Fahrenheit') result = c * 9 / 5 + 32;
    else result = c + 273.15;
    document.getElementById('unitResult').innerHTML = `${val} ${from} = <span style="color:#00d4ff;">${result.toFixed(2)} ${to}</span>`;
    return;
  }
  const factors = {
    length: { Meter:1, Kilometer:1000, Centimeter:0.01, Millimeter:0.001, Mile:1609.34, Yard:0.9144, Foot:0.3048, Inch:0.0254 },
    weight: { Kilogram:1, Gram:0.001, Milligram:0.000001, Pound:0.453592, Ounce:0.0283495, Ton:1000 }
  };
  const f = factors[cat];
  if (!f) return;
  const result = val * f[from] / f[to];
  document.getElementById('unitResult').innerHTML = `${val} ${from} = <span style="color:#00d4ff;">${result.toFixed(4)} ${to}</span>`;
}

function generateQr() {
  const text = document.getElementById('qrText')?.value.trim();
  if (!text) { showToast('Enter text'); return; }
  document.getElementById('qrResult').innerHTML = `<img src="https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${encodeURIComponent(text)}" style="border-radius:12px;background:#fff;padding:12px;">`;
}

// ==================== COLLAGE ====================
function selectCollageLayout(layout, btn) {
  collageLayout = layout;
  btn.parentElement.querySelectorAll('.ctrl-btn').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
}

function addCollagePhotos(input) {
  const files = Array.from(input.files || []);
  files.forEach(f => {
    const reader = new FileReader();
    reader.onload = (e) => {
      const img = new Image();
      img.onload = () => { collagePhotos.push(img); showToast('Photo added ✅'); };
      img.src = e.target.result;
    };
    reader.readAsDataURL(f);
  });
}

function createCollage() {
  if (collagePhotos.length < 2) { showToast('Add at least 2 photos'); return; }
  const tmp = document.createElement('canvas');
  const cols = collageLayout === '1x2' ? 1 : (collageLayout === '2x1' ? 2 : parseInt(collageLayout));
  const rows = collageLayout === '1x2' ? 2 : (collageLayout === '2x1' ? 1 : parseInt(collageLayout));
  const cellW = 400, cellH = 400;
  tmp.width = cols * cellW; tmp.height = rows * cellH;
  const tctx = tmp.getContext('2d');
  tctx.fillStyle = '#000'; tctx.fillRect(0, 0, tmp.width, tmp.height);
  collagePhotos.slice(0, cols * rows).forEach((img, i) => {
    const col = i % cols, row = Math.floor(i / cols);
    const x = col * cellW, y = row * cellH;
    const scale = Math.max(cellW / img.width, cellH / img.height);
    const w = img.width * scale, h = img.height * scale;
    tctx.drawImage(img, x + (cellW - w) / 2, y + (cellH - h) / 2, w, h);
  });
  const preview = document.getElementById('collagePreview');
  if (preview) preview.innerHTML = `<img src="${tmp.toDataURL()}" style="width:100%;border-radius:12px;">`;
  const a = document.createElement('a');
  a.href = tmp.toDataURL();
  a.download = 'picly-collage.png';
  a.click();
  showToast('✅ Collage created!');
}

// ==================== INIT ====================
function init() {
  canvas = document.getElementById('photoCanvas');
  if (canvas) ctx = canvas.getContext('2d');
  overlayLayer = document.getElementById('overlayLayer');

  // Fix: hide AI Studio by default
  document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
  const home = document.getElementById('homeScreen');
  if (home) home.classList.add('active');

  console.log('✅ App initialized');
}

window.addEventListener('load', init);

// Expose to global
window.showScreen = showScreen;
window.goHome = goHome;
window.openCategory = openCategory;
window.openTool = openTool;
window.openToolFromHome = openToolFromHome;
window.backToCategory = backToCategory;
window.handleGlobalUpload = handleGlobalUpload;
window.loadImage = loadImage;
window.resetImage = resetImage;
window.loadVideo = loadVideo;
window.selectCompressQuality = selectCompressQuality;
window.selectEnhanceType = selectEnhanceType;
window.selectResolution = selectResolution;
window.selectAiMagic = selectAiMagic;
window.selectAiRatio = selectAiRatio;
window.selectUpscaleScale = selectUpscaleScale;
window.loadAiImage = loadAiImage;
window.applyAiMagic = applyAiMagic;
window.generateAiImage = generateAiImage;
window.downloadAiImage = downloadAiImage;
window.loadRemoveBgImage = loadRemoveBgImage;
window.removeBgOnly = removeBgOnly;
window.loadBgImage = loadBgImage;
window.replaceBackground = replaceBackground;
window.loadEditorImage = loadEditorImage;
window.setEditorPrompt = setEditorPrompt;
window.runAiEditor = runAiEditor;
window.downloadEditorResult = downloadEditorResult;
window.loadUpscaleImage = loadUpscaleImage;
window.runUpscale = runUpscale;
window.downloadUpscale = downloadUpscale;
window.loadCleanupImage = loadCleanupImage;
window.runCleanup = runCleanup;
window.downloadCleanup = function() {
  if (!currentCleanupResult) return;
  const a = document.createElement('a');
  a.href = currentCleanupResult;
  a.download = 'picly-cleanup-' + Date.now() + '.jpg';
  a.click();
};
window.loadRestoreImage = loadRestoreImage;
window.runRestore = runRestore;
window.downloadRestoreResult = downloadRestoreResult;
window.runTrim = runTrim;
window.runCompress = runCompress;
window.runGif = runGif;
window.runMp3 = runMp3;
window.runVideoEnhance = runVideoEnhance;
window.selectGifFps = selectGifFps;
window.applyCropPreset = applyCropPreset;
window.applyFilter = applyFilter;
window.applyAdjust = applyAdjust;
window.applyResize = applyResize;
window.rotateImage = rotateImage;
window.flipImage = flipImage;
window.addTextOverlay = addTextOverlay;
window.addSticker = addSticker;
window.applyFrame = applyFrame;
window.calcEmi = calcEmi;
window.calcGst = calcGst;
window.calcAge = calcAge;
window.calcBmi = calcBmi;
window.updateUnitList = updateUnitList;
window.convertUnit = convertUnit;
window.generateQr = generateQr;
window.selectCollageLayout = selectCollageLayout;
window.addCollagePhotos = addCollagePhotos;
window.createCollage = createCollage;
window.showToast = showToast;
window.showLoader = showLoader;
window.hideLoader = hideLoader;