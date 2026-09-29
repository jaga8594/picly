// ==================== CONFIG ====================
const SERVER_URL = 'https://picly-server-production.up.railway.app';

const categories = {
  edit: { name:'Edit', desc:'Crop · filters · text · stickers', tools:[
    { id:'crop', name:'Crop', desc:'Cut photo to perfect size', type:'crop', img:'https://images.unsplash.com/photo-1502920917128-1aa500764cbd?w=100&q=80' },
    { id:'filters', name:'Filters', desc:'14 preset filters', type:'filters', img:'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&q=80' },
    { id:'resize', name:'Resize', desc:'Change dimensions', type:'resize', img:'https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=100&q=80' },
    { id:'rotate', name:'Rotate / Flip', desc:'Rotate 90°, flip', type:'rotate', img:'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=100&q=80' },
    { id:'text', name:'Text on Photo', desc:'Drag · fonts', type:'text', img:'https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=100&q=80' },
    { id:'stickers', name:'Stickers & Emoji', desc:'Drag · 100+ emoji', type:'stickers', img:'https://images.unsplash.com/photo-1519741497674-611481863552?w=100&q=80' }
  ]},
  documents: { name:'Documents', desc:'Passport · signature · PDF', tools:[
    { id:'passport', name:'Passport Photo', desc:'35×45mm, 2×2 inch', type:'passport', img:'https://i.ibb.co/Q7BVycWY/us-passport-size-diagram.webp' },
    { id:'photo-signature', name:'Photo + Signature', desc:'Draw signature + merge', type:'photo-signature', img:'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=100&q=80' },
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
let currentRestoreExt = 'png';
let wakeLock = null;
let isProcessing = false;
let cleanupMaskCtx = null;
let cleanupBrushSize = 25;
let cleanupIsDrawing = false;

const CALCULATOR_TYPES = ['emi','gst','age','bmi','unit','qr'];
const VIDEO_TYPES = ['video-trim','video-compress','video-gif','video-mp3','video-enhance'];
const AI_MAGIC_TYPES = ['ai-enhance','ai-glow'];
const AI_STUDIO_TYPES = ['ai-text-image','ai-bg-remove','ai-bg-replace','ai-editor','ai-upscale','ai-cleanup','ai-restore'];

// ==================== HISTORY ====================
function getHistory() { try { return JSON.parse(localStorage.getItem('picly_history') || '[]'); } catch(e) { return []; } }
function saveHistory(history) { try { localStorage.setItem('picly_history', JSON.stringify(history.slice(0, 200))); } catch(e) {} }
function addHistory(toolName, fileName, dataUrl) {
  const history = getHistory();
  history.unshift({ id: Date.now() + '_' + Math.random().toString(36).slice(2, 8), tool: toolName, fileName: fileName, dataUrl: dataUrl, time: Date.now() });
  saveHistory(history);
  updateStats(); renderNotifications(); updateNotifBadge(); renderProfileContent();
}
function timeAgo(ts) { const diff = Date.now() - ts; const sec = Math.floor(diff / 1000), min = Math.floor(sec / 60), hr = Math.floor(min / 60), day = Math.floor(hr / 24); if (sec < 60) return 'just now'; if (min < 60) return min + ' min ago'; if (hr < 24) return hr + ' hour' + (hr > 1 ? 's' : '') + ' ago'; return day + ' day' + (day > 1 ? 's' : '') + ' ago'; }
function updateStats() { const h = getHistory(); const el1 = document.getElementById('statDownloads'); const el2 = document.getElementById('statTools'); if (el1) el1.textContent = h.length; if (el2) el2.textContent = new Set(h.map(x => x.tool)).size; }
function updateNotifBadge() { const count = getHistory().length; ['notifBadge', 'notifBadge2', 'notifBadge3', 'notifBadge4', 'notifBadge5'].forEach(id => { const el = document.getElementById(id); if (!el) return; if (count > 0) { el.textContent = count > 99 ? '99+' : count; el.style.display = 'inline-block'; } else { el.style.display = 'none'; } }); }
function renderNotifications() { const list = document.getElementById('notifList'); if (!list) return; const history = getHistory(); if (history.length === 0) { list.innerHTML = '<div style="text-align:center;padding:40px 20px;color:#665a7a;font-size:14px;">🔔<br><br>No notifications yet<br><span style="font-size:12px;">Downloaded files yahan dikhengi</span></div>'; return; } let html = history.slice(0, 15).map(item => '<div style="padding:14px;border-radius:14px;background:linear-gradient(135deg, rgba(168,85,247,0.08), rgba(255,0,128,0.04));border:1px solid rgba(168,85,247,0.15);margin-bottom:10px;display:flex;gap:12px;align-items:flex-start;"><div style="font-size:24px;flex-shrink:0;">✅</div><div style="flex:1;"><div style="font-size:14px;font-weight:700;margin-bottom:4px;">Downloaded!</div><div style="font-size:12px;color:#a99bc4;margin-bottom:4px;word-break:break-all;">' + item.fileName + '</div><div style="font-size:11px;color:#665a7a;">' + timeAgo(item.time) + '</div></div></div>').join(''); html += '<button onclick="clearAllNotifications()" style="width:100%;padding:14px;margin-top:12px;border-radius:12px;background:rgba(255,0,128,0.1);border:1.5px solid rgba(255,0,128,0.3);color:#ff0080;font-size:13px;font-weight:700;cursor:pointer;font-family:inherit;">Clear All</button>'; list.innerHTML = html; }
function clearAllNotifications() { saveHistory([]); updateStats(); renderNotifications(); updateNotifBadge(); renderProfileContent(); showToast('Cleared'); }
function openNotifications() { const panel = document.getElementById('notifPanel'); const overlay = document.getElementById('notifOverlay'); if (panel) panel.style.right = '0'; if (overlay) overlay.classList.add('open'); renderNotifications(); }
function closeNotifications() { const panel = document.getElementById('notifPanel'); const overlay = document.getElementById('notifOverlay'); if (panel) panel.style.right = '-100%'; if (overlay) overlay.classList.remove('open'); }
function searchTools(query) { const q = (query || '').toLowerCase().trim(); const results = document.getElementById('searchResults'); if (!results) return; if (!q) { results.innerHTML = '<div style="text-align:center;padding:40px 20px;color:#665a7a;font-size:14px;">🔍<br><br>Type to search tools</div>'; return; } const matches = []; for (const cat of Object.values(categories)) { for (const tool of cat.tools) { if (tool.name.toLowerCase().includes(q) || tool.desc.toLowerCase().includes(q)) matches.push(tool); } } if (matches.length === 0) { results.innerHTML = '<div style="text-align:center;padding:40px 20px;color:#665a7a;font-size:14px;">No tools found</div>'; return; } results.innerHTML = matches.map(tool => { const img = tool.img || 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=100&q=80'; return '<div class="tool-item" onclick="openToolFromHome(\'' + tool.id + '\')"><img class="tool-bg" src="' + img + '" loading="lazy"><img class="tool-thumb" src="' + img + '" loading="lazy"><div class="tool-info"><div class="tool-name">' + tool.name + '</div><div class="tool-desc">' + tool.desc + '</div></div><div class="tool-arrow">›</div></div>'; }).join(''); }
function openSettings() { showScreen('settingsScreen'); }
function clearAllData() { if (confirm('Clear all history and notifications?')) { saveHistory([]); updateStats(); renderNotifications(); updateNotifBadge(); renderProfileContent(); showToast('Cleared'); } }
function switchProfileTab(tab, btn) { document.querySelectorAll('.profile-tab').forEach(t => t.classList.remove('active')); if (btn) btn.classList.add('active'); renderProfileContent(tab); }
function renderProfileContent(tab) { if (!tab) { const a = document.querySelector('.profile-tab.active'); tab = a && a.textContent.includes('Gallery') ? 'gallery' : 'history'; } const container = document.getElementById('profileTabContent'); if (!container) return; const history = getHistory(); if (tab === 'history') { if (history.length === 0) { container.innerHTML = '<div style="text-align:center;padding:60px 20px;color:#665a7a;font-size:14px;">📜<br><br>No download history<br><span style="font-size:12px;">Files download karne ke baad yahan dikhengi</span></div>'; return; } container.innerHTML = history.map(item => '<div style="background:linear-gradient(135deg, rgba(168,85,247,0.08), rgba(255,0,128,0.04));border:1px solid rgba(168,85,247,0.2);border-radius:16px;padding:14px;margin-bottom:12px;display:flex;gap:12px;align-items:center;"><img src="' + (item.dataUrl || '') + '" onerror="this.style.display=\'none\'" style="width:60px;height:60px;border-radius:12px;object-fit:cover;flex-shrink:0;background:#1a0d2e;"><div style="flex:1;min-width:0;"><div style="font-size:11px;color:#a855f7;font-weight:700;text-transform:uppercase;margin-bottom:4px;">' + item.tool + '</div><div style="font-size:13px;font-weight:700;margin-bottom:4px;word-break:break-all;">' + item.fileName + '</div><div style="font-size:11px;color:#665a7a;">' + timeAgo(item.time) + '</div></div><button onclick="downloadHistoryItem(\'' + item.id + '\')" style="padding:8px 12px;border-radius:10px;background:linear-gradient(135deg,#ff0080,#a855f7);border:none;color:#fff;font-size:11px;font-weight:700;cursor:pointer;font-family:inherit;flex-shrink:0;">⬇️</button></div>').join(''); } else if (tab === 'gallery') { if (history.length === 0) { container.innerHTML = '<div style="text-align:center;padding:60px 20px;color:#665a7a;font-size:14px;">📸<br><br>No images yet<br><span style="font-size:12px;">Downloaded files yahan dikhengi</span></div>'; return; } container.innerHTML = '<div style="display:grid;grid-template-columns:repeat(2,1fr);gap:12px;">' + history.map(item => '<div style="aspect-ratio:1;border-radius:16px;overflow:hidden;background:linear-gradient(135deg, rgba(168,85,247,0.1), rgba(0,212,255,0.05));border:1px solid rgba(168,85,247,0.2);position:relative;"><img src="' + (item.dataUrl || '') + '" onerror="this.style.opacity=\'0.3\'" style="width:100%;height:100%;object-fit:cover;"><div style="position:absolute;bottom:6px;left:6px;right:6px;font-size:10px;color:#fff;background:rgba(0,0,0,0.7);padding:4px 8px;border-radius:8px;text-align:center;font-weight:600;">' + timeAgo(item.time) + '</div></div>').join('') + '</div>'; } }
function downloadHistoryItem(id) { const item = getHistory().find(x => x.id === id); if (!item) return; const a = document.createElement('a'); a.href = item.dataUrl; a.download = item.fileName; document.body.appendChild(a); a.click(); document.body.removeChild(a); showToast('Downloaded!'); }
function navTo(page) { document.querySelectorAll('.nav-item').forEach(b => b.classList.remove('active')); document.querySelectorAll('.nav-btn').forEach(b => b.classList.remove('active')); if (page === 'home') { const b = document.getElementById('navHome'); if (b) b.classList.add('active'); showScreen('homeScreen'); currentCategory = null; } else if (page === 'search') { const b = document.getElementById('navSearch'); if (b) b.classList.add('active'); showScreen('searchScreen'); const inp = document.getElementById('searchInputPage'); if (inp) setTimeout(() => inp.focus(), 100); } else if (page === 'gallery') { const b = document.getElementById('navGallery'); if (b) b.classList.add('active'); showScreen('profileScreen'); const t = document.getElementById('tabGallery'); if (t) switchProfileTab('gallery', t); } else if (page === 'profile') { const b = document.getElementById('navProfile'); if (b) b.classList.add('active'); showScreen('profileScreen'); updateStats(); const t = document.getElementById('tabHistory'); if (t) switchProfileTab('history', t); } else if (page === 'plus') { const b = document.getElementById('navPlus'); if (b) b.classList.add('active'); showScreen('homeScreen'); } }

function showScreen(id) { document.querySelectorAll('.screen').forEach(s => s.classList.remove('active')); const el = document.getElementById(id); if (el) el.classList.add('active'); window.scrollTo(0, 0); }
function goHome() { showScreen('homeScreen'); currentCategory = null; }
function openCategory(catId) { currentCategory = catId; const cat = categories[catId]; if (!cat) return; document.getElementById('catPageTitle').textContent = cat.name; document.getElementById('catHeroName').textContent = cat.name; document.getElementById('catHeroDesc').textContent = cat.desc; document.getElementById('toolsList').innerHTML = cat.tools.map(tool => { const img = tool.img || 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=100&q=80'; return '<div class="tool-item" onclick="openTool(\'' + tool.id + '\')"><img class="tool-bg" src="' + img + '" alt="" loading="lazy"><img class="tool-thumb" src="' + img + '" alt="' + tool.name + '" loading="lazy"><div class="tool-info"><div class="tool-name">' + tool.name + '</div><div class="tool-desc">' + tool.desc + '</div></div><div class="tool-arrow">›</div></div>'; }).join(''); showScreen('categoryScreen'); }
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
  else if (isVideo) { if (uploadArea) uploadArea.style.display = 'block'; if (canvasWrap) canvasWrap.style.display = 'block'; if (canvasContainer) canvasContainer.style.display = 'none'; if (actionBtns) actionBtns.style.display = 'none'; }
  else if (isAiMagic || isAiStudio) { if (uploadArea) uploadArea.style.display = 'block'; if (canvasWrap) canvasWrap.style.display = 'block'; if (canvasContainer) canvasContainer.style.display = 'none'; if (actionBtns) actionBtns.style.display = 'none'; }
  else { if (uploadArea) uploadArea.style.display = 'block'; if (canvasWrap) canvasWrap.style.display = 'none'; if (canvasContainer) canvasContainer.style.display = 'flex'; if (actionBtns) actionBtns.style.display = 'flex'; }
  buildControls(tool.type);
  showScreen('editorScreen');
}

function openToolFromHome(toolId) { currentCategory = null; openTool(toolId); }
function handleGlobalUpload(input) { if (input.files && input.files[0]) { openCategory('edit'); setTimeout(() => openTool('crop'), 100); setTimeout(() => loadImage(input), 200); } }

function loadImage(input) { 
  const file = input.files ? input.files[0] : input; 
  if (!file) return; 
  
  // ✅ Photo Signature special handling
  if (currentTool && currentTool.type === 'photo-signature') {
    loadPhotoSigImage(input);
    return;
  }
  
  if (file.type.startsWith('video/')) { loadVideo(input); return; } 
  const reader = new FileReader(); 
  reader.onload = (e) => { 
    const img = new Image(); 
    img.onload = () => { 
      originalImage = img; 
      currentImage = img; 
      if (canvas) { 
        canvas.width = img.width; 
        canvas.height = img.height; 
        ctx.drawImage(img, 0, 0); 
      } 
      document.getElementById('uploadArea').style.display = 'none'; 
      document.getElementById('canvasWrap').style.display = 'block'; 
      showToast('Photo loaded ✨'); 
    }; 
    img.src = e.target.result; 
  }; 
  reader.readAsDataURL(file); 
}

function redraw() { if (!currentImage || !canvas) return; canvas.width = currentImage.width; canvas.height = currentImage.height; ctx.drawImage(currentImage, 0, 0); }
function resetImage() { if (originalImage && canvas) { currentImage = originalImage; redraw(); canvas.style.filter = 'none'; overlayItems = []; if (overlayLayer) overlayLayer.innerHTML = ''; showToast('Reset done'); } }
function loadVideo(input) { const file = input.files ? input.files[0] : input; if (!file) return; currentVideoFile = file; const video = document.getElementById('videoPreview'); video.src = URL.createObjectURL(file); video.style.display = 'block'; document.getElementById('uploadArea').style.display = 'none'; video.onloadedmetadata = () => { currentVideoDuration = video.duration; const sizeMB = (file.size / 1024 / 1024).toFixed(2); const pending = document.getElementById('videoPendingMsg'); if (pending) pending.style.display = 'none'; const activeUI = document.getElementById('videoActiveUI'); if (activeUI) activeUI.style.display = 'block'; showToast('Video loaded — ' + sizeMB + 'MB ✨'); }; }

function selectCompressQuality(q, btn) { selectedCompressQuality = q; btn.parentElement.querySelectorAll('.ctrl-btn').forEach(b => b.classList.remove('active')); btn.classList.add('active'); }
function selectEnhanceType(t, btn) { selectedEnhanceType = t; btn.parentElement.querySelectorAll('.ctrl-btn').forEach(b => b.classList.remove('active')); btn.classList.add('active'); }
function selectResolution(res, btn) { selectedResolution = res; btn.parentElement.querySelectorAll('.ctrl-btn').forEach(b => b.classList.remove('active')); btn.classList.add('active'); }
function selectAiMagic(type, btn) { selectedAiMagic = type; btn.parentElement.querySelectorAll('.ctrl-btn').forEach(b => b.classList.remove('active')); btn.classList.add('active'); }
function selectAiRatio(ratio, btn) { selectedAiRatio = ratio; btn.parentElement.querySelectorAll('.ctrl-btn').forEach(b => b.classList.remove('active')); btn.classList.add('active'); }
function selectUpscaleScale(scale, btn) { selectedUpscaleScale = scale; btn.parentElement.querySelectorAll('.ctrl-btn').forEach(b => b.classList.remove('active')); btn.classList.add('active'); }
function selectGifFps(fps, btn) { btn.parentElement.querySelectorAll('.ctrl-btn').forEach(b => b.classList.remove('active')); btn.classList.add('active'); btn.dataset.fps = fps; }

async function requestWakeLock() { try { if ('wakeLock' in navigator) wakeLock = await navigator.wakeLock.request('screen'); } catch (err) {} }
async function releaseWakeLock() { if (wakeLock) { try { await wakeLock.release(); } catch(e) {} wakeLock = null; } }
function updateProgress(percent) { const circle = document.getElementById('progressCircle'); const percentEl = document.getElementById('progressPercent'); const stageEl = document.getElementById('progressStage'); const p = Math.max(0, Math.min(100, percent)); if (circle) circle.style.strokeDashoffset = 440 - (440 * p / 100); if (percentEl) percentEl.textContent = Math.floor(p) + '%'; if (stageEl) { if (p < 40) stageEl.textContent = '📤 Uploading'; else if (p < 90) stageEl.textContent = '⚡ Processing'; else if (p < 100) stageEl.textContent = '📥 Downloading'; else stageEl.textContent = '✨ Complete'; } }
function showLoader(msg) { let el = document.getElementById('videoLoader'); if (!el) { el = document.createElement('div'); el.id = 'videoLoader'; el.style.cssText = 'position:fixed;inset:0;background:rgba(6,3,13,0.96);backdrop-filter:blur(20px);z-index:9999;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:28px;padding:24px;'; el.innerHTML = '<div style="position:relative;width:160px;height:160px;"><svg width="160" height="160" viewBox="0 0 160 160" style="transform:rotate(-90deg);"><defs><linearGradient id="progressGrad" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stop-color="#ff0080"/><stop offset="50%" stop-color="#a855f7"/><stop offset="100%" stop-color="#00d4ff"/></linearGradient></defs><circle cx="80" cy="80" r="70" stroke="rgba(168,85,247,0.12)" stroke-width="10" fill="none"/><circle id="progressCircle" cx="80" cy="80" r="70" stroke="url(#progressGrad)" stroke-width="10" fill="none" stroke-linecap="round" stroke-dasharray="440" stroke-dashoffset="440" style="transition:stroke-dashoffset 0.3s;"/></svg><div style="position:absolute;inset:0;display:flex;align-items:center;justify-content:center;"><div id="progressPercent" style="font-size:38px;font-weight:900;background:linear-gradient(135deg,#ff0080,#a855f7,#00d4ff);-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text;font-family:\'Arial Black\',sans-serif;">0%</div></div></div><div style="text-align:center;"><p id="videoLoaderMsg" style="color:#fff;font-weight:800;font-size:17px;">Processing</p><p id="progressStage" style="color:#a855f7;font-size:13px;font-weight:700;margin-top:8px;">📤 Uploading</p></div>'; document.body.appendChild(el); } document.getElementById('videoLoaderMsg').textContent = msg; el.style.display = 'flex'; updateProgress(0); }
function hideLoader() { updateProgress(100); setTimeout(() => { const el = document.getElementById('videoLoader'); if (el) el.style.display = 'none'; }, 500); }
function uploadWithProgress(url, formData, onProgress) { return new Promise((resolve, reject) => { const xhr = new XMLHttpRequest(); xhr.open('POST', url, true); xhr.responseType = 'blob'; xhr.timeout = 180000; xhr.upload.onprogress = (e) => { if (e.lengthComputable) onProgress((e.loaded / e.total) * 40); }; xhr.upload.onload = () => { onProgress(45); let fake = 45; window.serverProgressInterval = setInterval(() => { if (fake < 90) { fake += 1.5; onProgress(fake); } }, 400); }; xhr.onload = () => { if (window.serverProgressInterval) { clearInterval(window.serverProgressInterval); window.serverProgressInterval = null; } if (xhr.status >= 200 && xhr.status < 300) { onProgress(95); resolve(xhr.response); } else reject(new Error('Server error: ' + xhr.status)); }; xhr.onerror = () => { if (window.serverProgressInterval) { clearInterval(window.serverProgressInterval); window.serverProgressInterval = null; } reject(new Error('Network error')); }; xhr.ontimeout = () => { if (window.serverProgressInterval) { clearInterval(window.serverProgressInterval); window.serverProgressInterval = null; } reject(new Error('Request timed out')); }; xhr.send(formData); }); }
function showToast(msg) { const t = document.getElementById('toast'); if (!t) return; t.textContent = msg; t.classList.add('show'); setTimeout(() => t.classList.remove('show'), 2000); }

// ==================== PHOTO + SIGNATURE ====================
let psPhoto = null;
let psCanvas = null;
let psCtx = null;
let psColor = '#000000';
let psBrush = 3;
let psDrawing = false;
let psLastX = 0;
let psLastY = 0;
let psStrokes = [];
let psResult = null;

function loadPhotoSigImage(input) {
  const file = input.files ? input.files[0] : input;
  if (!file) return;
  psPhoto = null;
  const reader = new FileReader();
  reader.onload = (e) => {
    const img = new Image();
    img.onload = () => {
      psPhoto = img;
      const preview = document.getElementById('psPhotoPreview');
      if (preview) preview.src = e.target.result;
      // ✅ psUploadTitle safely handle kiya
      const title = document.getElementById('psUploadTitle');
      if (title) title.textContent = 'Change photo';
      const active = document.getElementById('psPhotoActive');
      if (active) active.style.display = 'block';
      document.getElementById('uploadArea').style.display = 'none';
      document.getElementById('canvasWrap').style.display = 'block';
      setTimeout(setupPsCanvas, 200);
      showToast('Photo loaded ✨');
    };
    img.src = e.target.result;
  };
  reader.readAsDataURL(file);
}

function setupPsCanvas() {
  psCanvas = document.getElementById('psSignCanvas');
  if (!psCanvas) return;
  const rect = psCanvas.getBoundingClientRect();
  psCanvas.width = rect.width * 2;
  psCanvas.height = rect.height * 2;
  psCtx = psCanvas.getContext('2d');
  psCtx.lineCap = 'round';
  psCtx.lineJoin = 'round';
  psCtx.strokeStyle = psColor;
  psCtx.lineWidth = psBrush * 2;
  psStrokes = [];
  psCtx.clearRect(0, 0, psCanvas.width, psCanvas.height);

  const getPos = (e) => {
    const r = psCanvas.getBoundingClientRect();
    const t = e.touches ? e.touches[0] : e;
    return {
      x: (t.clientX - r.left) * (psCanvas.width / r.width),
      y: (t.clientY - r.top) * (psCanvas.height / r.height)
    };
  };

  const start = (e) => {
    e.preventDefault();
    psDrawing = true;
    const p = getPos(e);
    psLastX = p.x;
    psLastY = p.y;
    psStrokes.push({ type: 'start', x: p.x, y: p.y, color: psColor, width: psBrush * 2 });
    psCtx.beginPath();
    psCtx.arc(p.x, p.y, (psBrush * 2) / 2, 0, Math.PI * 2);
    psCtx.fillStyle = psColor;
    psCtx.fill();
  };

  const move = (e) => {
    if (!psDrawing) return;
    e.preventDefault();
    const p = getPos(e);
    psStrokes.push({ type: 'line', x1: psLastX, y1: psLastY, x2: p.x, y2: p.y, color: psColor, width: psBrush * 2 });
    psCtx.strokeStyle = psColor;
    psCtx.lineWidth = psBrush * 2;
    psCtx.beginPath();
    psCtx.moveTo(psLastX, psLastY);
    psCtx.lineTo(p.x, p.y);
    psCtx.stroke();
    psLastX = p.x;
    psLastY = p.y;
  };

  const end = () => { psDrawing = false; };

  psCanvas.onmousedown = start;
  psCanvas.onmousemove = move;
  psCanvas.onmouseup = end;
  psCanvas.onmouseleave = end;
  psCanvas.ontouchstart = start;
  psCanvas.ontouchmove = move;
  psCanvas.ontouchend = end;
}

function setPsColor(color, btn) {
  psColor = color;
  if (psCtx) psCtx.strokeStyle = color;
  if (btn) {
    btn.parentElement.querySelectorAll('.ctrl-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
  }
}

function setPsBrush(size, btn) {
  psBrush = size;
  if (psCtx) psCtx.lineWidth = size * 2;
  if (btn) {
    btn.parentElement.querySelectorAll('.ctrl-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
  }
}

function clearPsSignature() {
  if (!psCtx || !psCanvas) return;
  psCtx.clearRect(0, 0, psCanvas.width, psCanvas.height);
  psStrokes = [];
  showToast('Cleared');
}

function undoPsSignature() {
  if (!psCtx || !psCanvas || psStrokes.length === 0) {
    showToast('Nothing to undo');
    return;
  }
  let lastStart = -1;
  for (let i = psStrokes.length - 1; i >= 0; i--) {
    if (psStrokes[i].type === 'start') { lastStart = i; break; }
  }
  if (lastStart === -1) { clearPsSignature(); return; }
  psStrokes = psStrokes.slice(0, lastStart);
  redrawPsStrokes();
  showToast('Undo');
}

function redrawPsStrokes() {
  if (!psCtx || !psCanvas) return;
  psCtx.clearRect(0, 0, psCanvas.width, psCanvas.height);
  psStrokes.forEach(s => {
    psCtx.strokeStyle = s.color;
    psCtx.fillStyle = s.color;
    psCtx.lineWidth = s.width;
    if (s.type === 'start') {
      psCtx.beginPath();
      psCtx.arc(s.x, s.y, s.width / 2, 0, Math.PI * 2);
      psCtx.fill();
    } else if (s.type === 'line') {
      psCtx.beginPath();
      psCtx.moveTo(s.x1, s.y1);
      psCtx.lineTo(s.x2, s.y2);
      psCtx.stroke();
    }
  });
}

function mergePhotoSignature() {
  if (!psPhoto) { showToast('Upload photo first'); return; }
  const hasSignature = psStrokes.length > 0;
  const nameText = document.getElementById('psNameInput')?.value.trim() || '';

  const photoW = psPhoto.width;
  const photoH = psPhoto.height;
  const photoAreaH = photoH;
  const sigAreaH = Math.round(photoH * 0.3);
  const nameAreaH = nameText ? Math.round(photoH * 0.1) : 0;

  const finalW = photoW;
  const finalH = photoAreaH + nameAreaH + sigAreaH;

  const temp = document.createElement('canvas');
  temp.width = finalW;
  temp.height = finalH;
  const tctx = temp.getContext('2d');

  tctx.fillStyle = '#ffffff';
  tctx.fillRect(0, 0, finalW, finalH);

  tctx.drawImage(psPhoto, 0, 0, photoW, photoH);

  if (nameText) {
    tctx.fillStyle = '#000000';
    tctx.font = `bold ${Math.round(nameAreaH * 0.55)}px Arial, sans-serif`;
    tctx.textAlign = 'center';
    tctx.textBaseline = 'middle';
    tctx.fillText(nameText, finalW / 2, photoAreaH + nameAreaH / 2);
  }

  if (hasSignature && psCanvas) {
    tctx.drawImage(psCanvas, 0, photoAreaH + nameAreaH, finalW, sigAreaH);
  }

  psResult = temp.toDataURL('image/jpeg', 0.95);
  document.getElementById('psResultImg').src = psResult;
  document.getElementById('psResultBox').style.display = 'block';
  showToast('Merged ✨');
}

function downloadPhotoSignature() {
  if (!psResult) { showToast('Merge first'); return; }
  const fileName = 'picly-photo-signature-' + Date.now() + '.jpg';
  const a = document.createElement('a');
  a.href = psResult;
  a.download = fileName;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  addHistory('Photo + Signature', fileName, psResult);
  showToast('Downloaded! 🎉');
}

// ==================== BUILD CONTROLS ====================
function buildControls(type) {
  const c = document.getElementById('dynamicControls');
  if (!c) return;
  c.innerHTML = '';
  if (type === 'emi') { c.innerHTML = '<div class="calc-header"><div class="calc-icon">💰</div><div class="calc-title">EMI Calculator</div></div><div class="calc-form"><div class="calc-field"><label>Loan Amount (₹)</label><input type="number" id="emiPrincipal" class="calc-input"></div><div class="calc-field"><label>Interest Rate (%)</label><input type="number" id="emiRate" step="0.1" class="calc-input"></div><div class="calc-field"><label>Tenure (Years)</label><input type="number" id="emiYears" class="calc-input"></div><button class="calc-btn" onclick="calculateEMI()">Calculate</button></div><div id="emiResult" class="calc-result"></div>'; }
  else if (type === 'gst') { c.innerHTML = '<div class="calc-header"><div class="calc-icon">🧾</div><div class="calc-title">GST Calculator</div></div><div class="calc-form"><div class="calc-field"><label>Amount (₹)</label><input type="number" id="gstAmount" class="calc-input"></div><div class="calc-field"><label>GST Rate (%)</label><select id="gstRate" class="calc-select"><option value="5">5%</option><option value="12">12%</option><option value="18" selected>18%</option><option value="28">28%</option></select></div><div class="calc-btn-row"><button class="calc-btn" onclick="calcGST(\'add\')">Add</button><button class="calc-btn" onclick="calcGST(\'remove\')">Remove</button></div></div><div id="gstResult" class="calc-result"></div>'; }
  else if (type === 'age') { c.innerHTML = '<div class="calc-header"><div class="calc-icon">🎂</div><div class="calc-title">Age Calculator</div></div><div class="calc-form"><div class="calc-field"><label>Date of Birth</label><input type="date" id="dobInput" class="calc-input"></div><button class="calc-btn" onclick="calculateAge()">Calculate</button></div><div id="ageResult" class="calc-result"></div>'; }
  else if (type === 'bmi') { c.innerHTML = '<div class="calc-header"><div class="calc-icon">⚖️</div><div class="calc-title">BMI Calculator</div></div><div class="calc-form"><div class="calc-field"><label>Weight (kg)</label><input type="number" id="bmiWeight" step="0.1" class="calc-input"></div><div class="calc-field"><label>Height (cm)</label><input type="number" id="bmiHeight" step="0.1" class="calc-input"></div><button class="calc-btn" onclick="calculateBMI()">Calculate</button></div><div id="bmiResult" class="calc-result"></div>'; }
  else if (type === 'unit') { c.innerHTML = '<div class="calc-header"><div class="calc-icon">📏</div><div class="calc-title">Unit Converter</div></div><div class="calc-form"><div class="calc-field"><label>Value</label><input type="number" id="unitValue" class="calc-input"></div><div class="calc-field"><label>From</label><select id="unitType" class="calc-select"><option value="length">Length (m)</option><option value="weight">Weight (kg)</option><option value="temp">Temp (°C)</option></select></div><button class="calc-btn" onclick="convertUnit()">Convert</button></div><div id="unitResult" class="calc-result"></div>'; }
  else if (type === 'qr') { c.innerHTML = '<div class="calc-header"><div class="calc-icon">🔲</div><div class="calc-title">QR Generator</div></div><div class="calc-form"><div class="calc-field"><label>Text/URL</label><input type="text" id="qrText" class="calc-input"></div><div class="calc-field"><label>Size</label><input type="number" id="qrSize" value="400" class="calc-input"></div><button class="calc-btn" onclick="generateQR()">Generate</button></div><div id="qrResult" class="calc-result"></div>'; }
  else if (type === 'crop') { c.innerHTML = '<div class="control-label">Quick Ratios</div><div class="control-row"><button class="ctrl-btn" onclick="cropImage(1,1)">1:1</button><button class="ctrl-btn" onclick="cropImage(16,9)">16:9</button><button class="ctrl-btn" onclick="cropImage(9,16)">9:16</button><button class="ctrl-btn" onclick="cropImage(4,5)">4:5</button><button class="ctrl-btn" onclick="cropImage(3,4)">3:4</button></div><div class="control-label">Manual</div><div class="manual-row"><input type="number" id="cropW" placeholder="W" class="manual-input"><input type="number" id="cropH" placeholder="H" class="manual-input"><button class="ctrl-btn primary" onclick="manualCrop()">Crop</button></div>'; }
  else if (type === 'filters') { c.innerHTML = '<div class="control-label">Filters</div><div class="control-row"><button class="ctrl-btn" onclick="applyFilter(\'none\')">Original</button><button class="ctrl-btn" onclick="applyFilter(\'grayscale\')">B&W</button><button class="ctrl-btn" onclick="applyFilter(\'sepia\')">Sepia</button><button class="ctrl-btn" onclick="applyFilter(\'saturate\')">Vivid</button><button class="ctrl-btn" onclick="applyFilter(\'contrast\')">Contrast</button><button class="ctrl-btn" onclick="applyFilter(\'brightness\')">Bright</button><button class="ctrl-btn" onclick="applyFilter(\'invert\')">Invert</button><button class="ctrl-btn" onclick="applyFilter(\'vintage\')">Vintage</button></div>'; }
  else if (type === 'resize') { c.innerHTML = '<div class="control-label">Quick</div><div class="control-row"><button class="ctrl-btn" onclick="resizeImage(50)">50%</button><button class="ctrl-btn" onclick="resizeImage(75)">75%</button><button class="ctrl-btn" onclick="resizeImage(150)">150%</button><button class="ctrl-btn" onclick="resizeImage(200)">200%</button></div><div class="control-label">Manual</div><div class="manual-row"><input type="number" id="resizeW" placeholder="W" class="manual-input"><input type="number" id="resizeH" placeholder="H" class="manual-input"><button class="ctrl-btn primary" onclick="manualResize()">Apply</button></div>'; }
  else if (type === 'rotate') { c.innerHTML = '<div class="control-label">Rotate</div><div class="control-row"><button class="ctrl-btn" onclick="rotateImage(-90)">↺ 90°</button><button class="ctrl-btn" onclick="rotateImage(90)">↻ 90°</button><button class="ctrl-btn" onclick="rotateImage(180)">180°</button></div><div class="control-label">Flip</div><div class="control-row"><button class="ctrl-btn" onclick="flipImage(\'h\')">↔ H</button><button class="ctrl-btn" onclick="flipImage(\'v\')">↕ V</button></div>'; }
  else if (type === 'text') { c.innerHTML = '<div class="control-label">Add Text</div><div class="manual-row"><input type="text" id="textInput" placeholder="Type text..." class="manual-input"></div><div class="manual-row"><input type="number" id="textSize" value="60" class="manual-input"></div><div class="control-row"><button class="ctrl-btn primary" onclick="addTextDrag()">Add Text</button></div>'; }
  else if (type === 'stickers') { c.innerHTML = '<div class="control-label">Stickers</div><div class="sticker-grid">' + ['😂','🥰','😎','❤️','🌟','💯','🦁','🎉'].map(e => '<button class="sticker-btn" onclick="addStickerDrag(\'' + e + '\')">' + e + '</button>').join('') + '</div>'; }
  else if (type === 'passport') { c.innerHTML = '<div class="control-label">Size</div><div class="control-row"><button class="ctrl-btn" onclick="makePassport(35,45)">35×45mm</button><button class="ctrl-btn" onclick="makePassport(51,51)">2×2 inch</button></div>'; }
  else if (type === 'photo-signature') { c.innerHTML = '<input type="file" id="psPhotoInput" accept="image/*" onchange="loadPhotoSigImage(this)" style="display:none;"><div id="psPhotoActive" style="display:none;"><div class="control-label">Name (Optional)</div><input type="text" id="psNameInput" placeholder="Type your name..." class="manual-input" style="width:100%;margin-bottom:12px;"><div class="control-label">Signature (Draw below)</div><div style="position:relative;background:#fff;border-radius:12px;margin-bottom:12px;overflow:hidden;"><canvas id="psSignCanvas" style="width:100%;height:160px;display:block;touch-action:none;cursor:crosshair;"></canvas></div><div class="control-row" style="margin-bottom:8px;"><button class="ctrl-btn active" onclick="setPsColor(\'#000000\', this)" style="flex:1;">⚫ Black</button><button class="ctrl-btn" onclick="setPsColor(\'#0033cc\', this)" style="flex:1;">🔵 Blue</button></div><div class="control-row" style="margin-bottom:8px;"><button class="ctrl-btn" onclick="setPsBrush(2, this)" style="flex:1;">Thin</button><button class="ctrl-btn active" onclick="setPsBrush(3, this)" style="flex:1;">Normal</button><button class="ctrl-btn" onclick="setPsBrush(5, this)" style="flex:1;">Thick</button></div><div class="control-row" style="margin-bottom:8px;"><button class="ctrl-btn" onclick="undoPsSignature()" style="flex:1;">↶ Undo</button><button class="ctrl-btn" onclick="clearPsSignature()" style="flex:1;">🗑️ Clear</button></div><button class="ctrl-btn primary" onclick="mergePhotoSignature()" style="width:100%;padding:18px;margin-top:8px;">✨ Merge & Preview</button><div id="psResultBox" style="display:none;margin-top:16px;"><img id="psResultImg" style="width:100%;border-radius:18px;margin-bottom:12px;"><button class="ctrl-btn primary" onclick="downloadPhotoSignature()" style="width:100%;padding:16px;">⬇️ Download</button></div></div>'; }
  else if (type === 'compress') { c.innerHTML = '<div class="control-label">Quality</div><div class="control-row"><button class="ctrl-btn" onclick="compressImage(0.9)">High</button><button class="ctrl-btn" onclick="compressImage(0.6)">Medium</button><button class="ctrl-btn" onclick="compressImage(0.3)">Low</button></div>'; }
  else if (type === 'pdf') { c.innerHTML = '<div class="control-label">PDF</div><div class="control-row"><button class="ctrl-btn primary" onclick="exportPDF()">Download PDF</button></div>'; }
  else if (type === 'convert') { c.innerHTML = '<div class="control-label">Format</div><div class="control-row"><button class="ctrl-btn" onclick="convertFormat(\'jpeg\')">JPG</button><button class="ctrl-btn" onclick="convertFormat(\'png\')">PNG</button><button class="ctrl-btn" onclick="convertFormat(\'webp\')">WEBP</button></div>'; }
  else if (type === 'video-trim') { c.innerHTML = '<div id="videoPendingMsg"><p style="text-align:center;padding:40px 20px;">📹 Video upload karo</p></div><div id="videoActiveUI" style="display:none"><button class="ctrl-btn primary" onclick="trimVideo()" style="width:100%;padding:18px;">✂️ Trim</button></div>'; }
  else if (type === 'video-compress') { c.innerHTML = '<div id="videoPendingMsg"><p style="text-align:center;padding:40px 20px;">📹 Video upload karo</p></div><div id="videoActiveUI" style="display:none"><div class="control-label">Quality</div><div class="control-row"><button class="ctrl-btn" onclick="selectCompressQuality(\'high\',this)">High</button><button class="ctrl-btn active" onclick="selectCompressQuality(\'medium\',this)">Medium</button><button class="ctrl-btn" onclick="selectCompressQuality(\'low\',this)">Low</button></div><button class="ctrl-btn primary" onclick="compressVideo()" style="width:100%;padding:18px;">🗜️ Compress</button></div>'; }
  else if (type === 'video-gif') { c.innerHTML = '<div id="videoPendingMsg"><p style="text-align:center;padding:40px 20px;">📹 Video upload karo</p></div><div id="videoActiveUI" style="display:none"><button class="ctrl-btn primary" onclick="videoToGif()" style="width:100%;padding:18px;">🎞️ GIF</button></div>'; }
  else if (type === 'video-mp3') { c.innerHTML = '<div id="videoPendingMsg"><p style="text-align:center;padding:40px 20px;">📹 Video upload karo</p></div><div id="videoActiveUI" style="display:none"><button class="ctrl-btn primary" onclick="extractMp3()" style="width:100%;padding:18px;">🎵 MP3</button></div>'; }
  else if (type === 'video-enhance') { c.innerHTML = '<div id="videoPendingMsg"><p style="text-align:center;padding:40px 20px;">📹 Video upload karo</p></div><div id="videoActiveUI" style="display:none"><div class="control-label">Type</div><div class="control-row"><button class="ctrl-btn active" onclick="selectEnhanceType(\'bright\',this)">Bright</button><button class="ctrl-btn" onclick="selectEnhanceType(\'sharpen\',this)">Sharpen</button></div><button class="ctrl-btn primary" onclick="enhanceVideo()" style="width:100%;padding:18px;">✨ Enhance</button></div>'; }
  else if (type === 'ai-text-image') { c.innerHTML = '<div class="control-label">Text to Image</div><input type="text" id="aiPromptInput" placeholder="a beautiful sunset" class="manual-input" style="width:100%;margin-bottom:12px;"><div class="control-row" style="margin-bottom:12px;"><button class="ctrl-btn active" onclick="selectAiRatio(\'1:1\',this)" style="flex:1;">1:1</button><button class="ctrl-btn" onclick="selectAiRatio(\'16:9\',this)" style="flex:1;">16:9</button><button class="ctrl-btn" onclick="selectAiRatio(\'9:16\',this)" style="flex:1;">9:16</button></div><button class="ctrl-btn primary" onclick="generateAiImage()" style="width:100%;padding:18px;">✨ Generate</button><div id="aiResultBox" style="display:none;margin-top:16px;"><img id="aiResultImg" style="width:100%;border-radius:18px;margin-bottom:12px;"><button class="ctrl-btn primary" onclick="downloadAiImage()" style="width:100%;padding:16px;">⬇️ Download</button></div>'; }
  else if (type === 'ai-bg-remove') { c.innerHTML = '<div id="removeBgPending"><div class="control-label">🖼️ BG Remove</div><div class="upload-area" onclick="document.getElementById(\'removeBgInput\').click()"><input type="file" id="removeBgInput" accept="image/*" onchange="loadRemoveBgImage(this)" style="display:none;"><p>Tap to upload</p></div></div><div id="removeBgActive" style="display:none"><img id="removeBgPreview" style="width:100%;max-height:300px;object-fit:contain;border-radius:18px;margin-bottom:16px;"><button class="ctrl-btn primary" onclick="removeBgOnly()" style="width:100%;padding:18px;">Remove Background</button></div>'; }
  else if (type === 'ai-bg-replace') { c.innerHTML = '<div id="bgPendingMsg"><div class="upload-area" onclick="document.getElementById(\'bgUploadInput\').click()"><input type="file" id="bgUploadInput" accept="image/*" onchange="loadBgImage(this)" style="display:none;"><p>Tap to upload</p></div></div><div id="bgActiveUI" style="display:none"><img id="bgImagePreview" style="width:100%;max-height:300px;object-fit:contain;border-radius:18px;margin-bottom:12px;"><input type="text" id="bgPromptInput" placeholder="beach sunset" class="manual-input" style="width:100%;margin-bottom:12px;"><button class="ctrl-btn primary" onclick="replaceBackground()" style="width:100%;padding:18px;">Replace BG</button></div>'; }
  else if (type === 'ai-editor') { c.innerHTML = '<div id="editorPendingMsg"><div class="upload-area" onclick="document.getElementById(\'editorInput\').click()"><input type="file" id="editorInput" accept="image/*" onchange="loadEditorImage(this)" style="display:none;"><p>Tap to upload</p></div></div><div id="editorActiveUI" style="display:none"><img id="editorPreview" style="width:100%;max-height:300px;object-fit:contain;border-radius:18px;margin-bottom:12px;"><textarea id="editorPromptInput" placeholder="anime style portrait" class="manual-input" style="width:100%;min-height:80px;font-family:inherit;margin-bottom:12px;"></textarea><button class="ctrl-btn primary" onclick="runAiEditor()" style="width:100%;padding:18px;">Edit with AI</button></div><div id="editorResultBox" style="display:none;margin-top:16px;"><img id="editorResultImg" style="width:100%;border-radius:18px;margin-bottom:12px;"><button class="ctrl-btn primary" onclick="downloadEditorResult()" style="width:100%;padding:16px;">⬇️ Download</button></div>'; }
  else if (type === 'ai-upscale') { c.innerHTML = '<div id="upscalePending"><div class="upload-area" onclick="document.getElementById(\'upscaleInput\').click()"><input type="file" id="upscaleInput" accept="image/*" onchange="loadUpscaleImage(this)" style="display:none;"><p>Tap to upload</p></div></div><div id="upscaleActive" style="display:none"><img id="upscalePreview" style="width:100%;max-height:300px;object-fit:contain;border-radius:18px;margin-bottom:12px;"><div class="control-row"><button class="ctrl-btn active" onclick="selectUpscaleScale(2,this)" style="flex:1;">⚡ 2x</button><button class="ctrl-btn" onclick="selectUpscaleScale(4,this)" style="flex:1;">💎 4x</button></div><button class="ctrl-btn primary" onclick="runUpscale()" style="width:100%;padding:18px;">Upscale</button></div><div id="upscaleResult" style="display:none;margin-top:16px;"><img id="upscaleResultImg" style="width:100%;border-radius:18px;margin-bottom:12px;"><button class="ctrl-btn primary" onclick="downloadUpscale()" style="width:100%;padding:16px;">⬇️ Download</button></div>'; }
  else if (type === 'ai-cleanup') { c.innerHTML = '<div id="cleanupPending"><div class="upload-area" onclick="document.getElementById(\'cleanupInput\').click()"><input type="file" id="cleanupInput" accept="image/*" onchange="loadCleanupImage(this)" style="display:none;"><p>Tap to upload</p><span>Object select karke remove karo</span></div></div><div id="cleanupActive" style="display:none"><p style="font-size:12px;color:#aaff00;margin-bottom:8px;font-weight:700;">✏️ Brush karo</p><div style="position:relative;border-radius:18px;overflow:hidden;background:#000;display:inline-block;max-width:100%;"><img id="cleanupPreview" style="max-width:100%;display:block;max-height:400px;"><canvas id="cleanupMaskCanvas" style="position:absolute;top:0;left:0;touch-action:none;"></canvas></div><div class="control-row" style="margin-top:12px;"><button class="ctrl-btn" onclick="setBrushSize(10,this)">Small</button><button class="ctrl-btn active" onclick="setBrushSize(25,this)">Medium</button><button class="ctrl-btn" onclick="setBrushSize(50,this)">Large</button><button class="ctrl-btn" onclick="clearMask()">Clear</button></div><button class="ctrl-btn primary" onclick="runCleanup()" style="width:100%;padding:18px;margin-top:16px;">🧹 Remove</button></div><div id="cleanupResult" style="display:none;margin-top:16px;"><img id="cleanupResultImg" style="width:100%;border-radius:18px;margin-bottom:12px;"><button class="ctrl-btn primary" onclick="downloadCleanup()" style="width:100%;padding:16px;">⬇️ Download</button></div>'; }
  else if (type === 'ai-restore') { c.innerHTML = '<div id="restorePending"><div class="upload-area" onclick="document.getElementById(\'restoreInput\').click()"><input type="file" id="restoreInput" accept="image/*" onchange="loadRestoreImage(this)" style="display:none;"><p>Tap to upload old photo</p></div></div><div id="restoreActive" style="display:none"><img id="restorePreview" style="width:100%;max-height:300px;object-fit:contain;border-radius:18px;margin-bottom:12px;"><button class="ctrl-btn primary" onclick="runRestore()" style="width:100%;padding:18px;">🎨 Restore</button></div><div id="restoreResult" style="display:none;margin-top:16px;"><img id="restoreResultImg" style="width:100%;border-radius:18px;margin-bottom:12px;"><button class="ctrl-btn primary" onclick="downloadRestore()" style="width:100%;padding:16px;">⬇️ Download</button></div>'; }
  else if (type === 'ai-enhance' || type === 'ai-glow') { const mt = type.replace('ai-', ''); selectedAiMagic = mt; c.innerHTML = '<div id="aiPendingMsg"><div class="upload-area" onclick="document.getElementById(\'aiUploadInput\').click()"><input type="file" id="aiUploadInput" accept="image/*" onchange="loadAiImage(this)" style="display:none;"><p>Tap to upload</p></div></div><div id="aiActiveUI" style="display:none"><img id="aiImagePreview" style="width:100%;max-height:300px;object-fit:contain;border-radius:18px;margin-bottom:12px;"><div class="control-row"><button class="ctrl-btn ' + (mt === 'enhance' ? 'active' : '') + '" onclick="selectAiMagic(\'enhance\',this)">✨ Enhance</button><button class="ctrl-btn ' + (mt === 'glow' ? 'active' : '') + '" onclick="selectAiMagic(\'glow\',this)">🌟 Glow</button></div><button class="ctrl-btn primary" onclick="applyAiMagic()" style="width:100%;padding:18px;margin-top:12px;">Apply</button></div>'; }
  else if (type === 'frames') { c.innerHTML = '<div class="control-label">Frame Style</div><div class="control-row"><button class="ctrl-btn" onclick="applyFrame(\'none\',this)">None</button><button class="ctrl-btn" onclick="applyFrame(\'simple\',this)">Simple</button><button class="ctrl-btn" onclick="applyFrame(\'rounded\',this)">Rounded</button><button class="ctrl-btn" onclick="applyFrame(\'polaroid\',this)">Polaroid</button><button class="ctrl-btn" onclick="applyFrame(\'vintage\',this)">Vintage</button><button class="ctrl-btn" onclick="applyFrame(\'neon\',this)">Neon</button><button class="ctrl-btn" onclick="applyFrame(\'gold\',this)">Gold</button></div>'; }
  else if (type === 'collage') { c.innerHTML = '<div class="control-label">Layout</div><div class="control-row"><button class="ctrl-btn" onclick="selectCollageLayout(\'2x2\',this)">2x2</button><button class="ctrl-btn" onclick="selectCollageLayout(\'3x3\',this)">3x3</button><button class="ctrl-btn" onclick="selectCollageLayout(\'1x2\',this)">1x2</button><button class="ctrl-btn" onclick="selectCollageLayout(\'2x1\',this)">2x1</button></div><div class="control-label">Photos</div><input type="file" accept="image/*" multiple id="collageInput" onchange="addCollagePhotos(this)" class="manual-input" style="width:100%;margin-bottom:12px;"><button class="ctrl-btn primary" onclick="createCollage()" style="width:100%;padding:18px;">Create Collage</button><div id="collagePreview" style="margin-top:16px;"></div>'; }
  else { c.innerHTML = '<p style="padding:12px;color:#888;">Coming soon</p>'; }
}

// ==================== CALCULATORS ====================
function calculateEMI() { const p = parseFloat(document.getElementById('emiPrincipal').value); const r = parseFloat(document.getElementById('emiRate').value); const y = parseFloat(document.getElementById('emiYears').value); const res = document.getElementById('emiResult'); if (!p || !r || !y) { res.classList.add('show','error'); res.innerHTML = '⚠️ Fill all'; return; } const mr = r/12/100, m = y*12; const emi = (p*mr*Math.pow(1+mr,m))/(Math.pow(1+mr,m)-1); res.classList.remove('error'); res.classList.add('show'); res.innerHTML = '<div class="result-row"><span>EMI</span><strong>₹' + emi.toFixed(0) + '</strong></div><div class="result-row"><span>Interest</span><strong>₹' + (emi*m-p).toFixed(0) + '</strong></div><div class="result-row"><span>Total</span><strong>₹' + (emi*m).toFixed(0) + '</strong></div>'; }
function calcGST(mode) { const a = parseFloat(document.getElementById('gstAmount').value); const r = parseFloat(document.getElementById('gstRate').value); const res = document.getElementById('gstResult'); if (!a) { res.classList.add('show','error'); res.innerHTML = '⚠️ Amount'; return; } let b, g, t; if (mode === 'add') { b = a; g = a*r/100; t = b+g; } else { b = a/(1+r/100); g = a-b; t = a; } res.classList.remove('error'); res.classList.add('show'); res.innerHTML = '<div class="result-row"><span>Base</span><strong>₹' + b.toFixed(2) + '</strong></div><div class="result-row"><span>GST (' + r + '%)</span><strong>₹' + g.toFixed(2) + '</strong></div><div class="result-row"><span>Total</span><strong>₹' + t.toFixed(2) + '</strong></div>'; }
function calculateAge() { const dob = new Date(document.getElementById('dobInput').value); const res = document.getElementById('ageResult'); if (isNaN(dob.getTime())) { res.classList.add('show','error'); res.innerHTML = '⚠️ Date'; return; } const now = new Date(); let y = now.getFullYear()-dob.getFullYear(), m = now.getMonth()-dob.getMonth(), d = now.getDate()-dob.getDate(); if (d<0) { m--; d+=30; } if (m<0) { y--; m+=12; } const td = Math.floor((now-dob)/(1000*60*60*24)); res.classList.remove('error'); res.classList.add('show'); res.innerHTML = '<div class="result-row"><span>Age</span><strong>' + y + 'y ' + m + 'm ' + d + 'd</strong></div><div class="result-row"><span>Days</span><strong>' + td + '</strong></div>'; }
function calculateBMI() { const w = parseFloat(document.getElementById('bmiWeight').value); const h = parseFloat(document.getElementById('bmiHeight').value); const res = document.getElementById('bmiResult'); if (!w || !h) { res.classList.add('show','error'); res.innerHTML = '⚠️ Fill all'; return; } const bmi = w/Math.pow(h/100,2); let cat = 'Normal', col = '#4ade80'; if (bmi<18.5) { cat='Underweight'; col='#60a5fa'; } else if (bmi<25) { cat='Normal'; col='#4ade80'; } else if (bmi<30) { cat='Overweight'; col='#fb923c'; } else { cat='Obese'; col='#f87171'; } res.classList.remove('error'); res.classList.add('show'); res.innerHTML = '<div class="result-row"><span>BMI</span><strong>' + bmi.toFixed(2) + '</strong></div><div class="result-row"><span>Category</span><strong style="color:' + col + '">' + cat + '</strong></div>'; }
function convertUnit() { const v = parseFloat(document.getElementById('unitValue').value); const t = document.getElementById('unitType').value; const res = document.getElementById('unitResult'); if (!v) { res.classList.add('show','error'); res.innerHTML = '⚠️ Value'; return; } let html = ''; if (t === 'length') html = '<div class="result-row"><span>Feet</span><strong>' + (v*3.28).toFixed(2) + '</strong></div><div class="result-row"><span>KM</span><strong>' + (v/1000).toFixed(4) + '</strong></div>'; else if (t === 'weight') html = '<div class="result-row"><span>Pounds</span><strong>' + (v*2.20).toFixed(2) + '</strong></div><div class="result-row"><span>Grams</span><strong>' + (v*1000).toFixed(0) + '</strong></div>'; else html = '<div class="result-row"><span>Fahrenheit</span><strong>' + ((v*9/5)+32).toFixed(2) + '°F</strong></div><div class="result-row"><span>Kelvin</span><strong>' + (v+273.15).toFixed(2) + 'K</strong></div>'; res.classList.remove('error'); res.classList.add('show'); res.innerHTML = html; }
function generateQR() { const text = document.getElementById('qrText').value; const size = parseInt(document.getElementById('qrSize').value) || 400; const res = document.getElementById('qrResult'); if (!text) { res.classList.add('show','error'); res.innerHTML = '⚠️ Text'; return; } const url = 'https://api.qrserver.com/v1/create-qr-code/?size=' + size + 'x' + size + '&data=' + encodeURIComponent(text); res.classList.remove('error'); res.classList.add('show'); res.innerHTML = '<img src="' + url + '" style="max-width:100%;border-radius:12px;">'; }

// ==================== EDIT TOOLS ====================
function cropImage(w, h) { if (!currentImage) { showToast('Upload photo'); return; } const iw = currentImage.width, ih = currentImage.height; const tr = w/h, ir = iw/ih; let nw, nh, ox, oy; if (ir > tr) { nh = ih; nw = ih*tr; ox = (iw-nw)/2; oy = 0; } else { nw = iw; nh = iw/tr; ox = 0; oy = (ih-nh)/2; } const t = document.createElement('canvas'); t.width = nw; t.height = nh; t.getContext('2d').drawImage(currentImage, ox, oy, nw, nh, 0, 0, nw, nh); const ni = new Image(); ni.onload = () => { currentImage = ni; redraw(); showToast('Cropped ✂️'); }; ni.src = t.toDataURL(); }
function manualCrop() { const w = parseFloat(document.getElementById('cropW').value), h = parseFloat(document.getElementById('cropH').value); if (!w || !h) { showToast('Enter W and H'); return; } cropImage(w, h); }
function rotateImage(deg) { if (!currentImage) { showToast('Upload photo'); return; } const t = document.createElement('canvas'); const a = deg*Math.PI/180; const c = Math.abs(Math.cos(a)), s = Math.abs(Math.sin(a)); t.width = currentImage.width*c + currentImage.height*s; t.height = currentImage.width*s + currentImage.height*c; const tc = t.getContext('2d'); tc.translate(t.width/2, t.height/2); tc.rotate(a); tc.drawImage(currentImage, -currentImage.width/2, -currentImage.height/2); const ni = new Image(); ni.onload = () => { currentImage = ni; redraw(); showToast('Rotated ↻'); }; ni.src = t.toDataURL(); }
function flipImage(dir) { if (!currentImage) { showToast('Upload photo'); return; } const t = document.createElement('canvas'); t.width = currentImage.width; t.height = currentImage.height; const tc = t.getContext('2d'); if (dir === 'h') { tc.translate(currentImage.width, 0); tc.scale(-1, 1); } else { tc.translate(0, currentImage.height); tc.scale(1, -1); } tc.drawImage(currentImage, 0, 0); const ni = new Image(); ni.onload = () => { currentImage = ni; redraw(); showToast('Flipped'); }; ni.src = t.toDataURL(); }
function applyFilter(type) { const f = { 'none':'none','grayscale':'grayscale(100%)','sepia':'sepia(80%)','saturate':'saturate(180%)','contrast':'contrast(150%)','brightness':'brightness(130%)','invert':'invert(100%)','vintage':'sepia(50%) contrast(90%)' }; if (canvas) canvas.style.filter = f[type] || 'none'; showToast('Filter applied ✨'); }
function resizeImage(p) { if (!currentImage) { showToast('Upload photo'); return; } const t = document.createElement('canvas'); t.width = Math.round(currentImage.width*p/100); t.height = Math.round(currentImage.height*p/100); t.getContext('2d').drawImage(currentImage, 0, 0, t.width, t.height); const ni = new Image(); ni.onload = () => { currentImage = ni; redraw(); showToast('Resized'); }; ni.src = t.toDataURL(); }
function manualResize() { const w = parseInt(document.getElementById('resizeW').value), h = parseInt(document.getElementById('resizeH').value); if (!w || !h) { showToast('Enter W and H'); return; } const t = document.createElement('canvas'); t.width = w; t.height = h; t.getContext('2d').drawImage(currentImage, 0, 0, w, h); const ni = new Image(); ni.onload = () => { currentImage = ni; redraw(); showToast('Resized'); }; ni.src = t.toDataURL(); }
function compressImage(q) { if (!currentImage) { showToast('Upload photo'); return; } const url = canvas.toDataURL('image/jpeg', q); const ni = new Image(); ni.onload = () => { currentImage = ni; redraw(); showToast('Compressed'); }; ni.src = url; }
function makePassport(wMM, hMM) { if (!currentImage) { showToast('Upload photo'); return; } const px = 11.8; const tw = Math.round(wMM*px), th = Math.round(hMM*px); const t = document.createElement('canvas'); t.width = tw; t.height = th; const tc = t.getContext('2d'); const ir = currentImage.width/currentImage.height, tr = tw/th; let dw, dh, ox, oy; if (ir > tr) { dh = th; dw = th*ir; ox = (tw-dw)/2; oy = 0; } else { dw = tw; dh = tw/ir; ox = 0; oy = (th-dh)/2; } tc.fillStyle = '#fff'; tc.fillRect(0,0,tw,th); tc.drawImage(currentImage, ox, oy, dw, dh); const ni = new Image(); ni.onload = () => { currentImage = ni; redraw(); showToast('Passport ready 📸'); }; ni.src = t.toDataURL(); }
function exportPDF() { if (!window.jspdf || !currentImage) { showToast('Cannot export'); return; } try { const { jsPDF } = window.jspdf; const pdf = new jsPDF({ unit: 'pt', format: pdfSize }); const imgData = canvas.toDataURL('image/jpeg', 0.92); const imgW = 555; const imgH = (canvas.height/canvas.width)*imgW; pdf.addImage(imgData, 'JPEG', 20, 20, imgW, imgH); const fileName = 'picly-' + Date.now() + '.pdf'; pdf.save(fileName); addHistory('Photo to PDF', fileName, canvas.toDataURL('image/jpeg', 0.5)); showToast('PDF ready 📄'); } catch (err) { showToast('PDF error'); } }
function convertFormat(format) { if (!currentImage) { showToast('Upload photo'); return; } const url = canvas.toDataURL('image/'+format, 0.95); const fileName = 'picly-' + Date.now() + '.' + (format === 'jpeg' ? 'jpg' : format); const a = document.createElement('a'); a.download = fileName; a.href = url; document.body.appendChild(a); a.click(); document.body.removeChild(a); addHistory('Format Convert', fileName, url); showToast('Converted ✨'); }
function addTextDrag() { if (!currentImage) { showToast('Upload photo'); return; } const text = document.getElementById('textInput').value; const size = parseInt(document.getElementById('textSize').value) || 60; if (!text) { showToast('Enter text'); return; } const d = document.createElement('div'); d.className = 'drag-item'; d.style.fontFamily = selectedFont; d.style.color = selectedTextColor; d.style.fontSize = size+'px'; d.style.left = '50%'; d.style.top = '50%'; d.style.transform = 'translate(-50%,-50%)'; d.style.textShadow = '2px 2px 4px rgba(0,0,0,0.7)'; d.textContent = text; d.dataset.type = 'text'; d.dataset.size = size; makeDraggable(d); if (overlayLayer) overlayLayer.appendChild(d); overlayItems.push(d); showToast('Text added ✨'); }
function addStickerDrag(emoji) { if (!currentImage) { showToast('Upload photo'); return; } const d = document.createElement('div'); d.className = 'drag-item'; d.style.left = '50%'; d.style.top = '50%'; d.style.transform = 'translate(-50%,-50%)'; d.style.fontSize = '60px'; d.textContent = emoji; d.dataset.type = 'sticker'; d.dataset.emoji = emoji; d.dataset.size = 60; makeDraggable(d); if (overlayLayer) overlayLayer.appendChild(d); overlayItems.push(d); showToast('Sticker added ✨'); }
function makeDraggable(el) { let drag = false, sx, sy, sl, st; const start = (e) => { drag = true; const p = e.touches ? e.touches[0] : e; const r = overlayLayer.getBoundingClientRect(); sx = p.clientX; sy = p.clientY; const er = el.getBoundingClientRect(); sl = er.left - r.left; st = er.top - r.top; e.preventDefault(); }; const move = (e) => { if (!drag) return; const p = e.touches ? e.touches[0] : e; el.style.transform = 'none'; el.style.left = (sl + p.clientX - sx) + 'px'; el.style.top = (st + p.clientY - sy) + 'px'; e.preventDefault(); }; const end = () => { drag = false; }; el.addEventListener('mousedown', start); el.addEventListener('touchstart', start); document.addEventListener('mousemove', move); document.addEventListener('touchmove', move); document.addEventListener('mouseup', end); document.addEventListener('touchend', end); }
function applyOverlay() { if (overlayItems.length === 0 || !canvas) return; const cr = canvas.getBoundingClientRect(); overlayItems.forEach(item => { const ir = item.getBoundingClientRect(); const x = ir.left - cr.left, y = ir.top - cr.top; if (item.dataset.type === 'text') { ctx.font = 'bold ' + item.dataset.size + 'px ' + selectedFont; ctx.fillStyle = selectedTextColor; ctx.strokeStyle = selectedTextColor === '#000000' ? '#ffffff' : '#000000'; ctx.lineWidth = Math.round(item.dataset.size/15); ctx.textAlign = 'left'; ctx.textBaseline = 'top'; ctx.strokeText(item.textContent, x, y); ctx.fillText(item.textContent, x, y); } else if (item.dataset.type === 'sticker') { ctx.font = item.dataset.size + 'px sans-serif'; ctx.textAlign = 'left'; ctx.textBaseline = 'top'; ctx.fillText(item.dataset.emoji, x, y); } }); overlayItems = []; if (overlayLayer) overlayLayer.innerHTML = ''; showToast('Applied! ✨'); }

// ==================== DOWNLOAD ====================
function downloadImage() {
  if (!currentImage) { showToast('No image'); return; }
  if (overlayItems.length > 0) applyOverlay();
  const fileName = 'picly-' + Date.now() + '.jpg';
  const dataUrl = canvas.toDataURL('image/jpeg', 0.95);
  const a = document.createElement('a');
  a.download = fileName;
  a.href = dataUrl;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  addHistory('Edit', fileName, dataUrl);
  showToast('Downloaded! 🎉');
}
function downloadCleanup() {
  if (!currentCleanupResult) { showToast('No result yet'); return; }
  const fileName = 'picly-cleanup-' + Date.now() + '.jpg';
  const a = document.createElement('a');
  a.href = currentCleanupResult;
  a.download = fileName;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  addHistory('Cleanup', fileName, currentCleanupResult);
  showToast('✅ Downloaded!');
}
function downloadRestore() {
  if (!currentRestoreResult) { showToast('No result yet'); return; }
  const ext = currentRestoreExt || 'png';
  const fileName = 'picly-restored-' + Date.now() + '.' + ext;
  const a = document.createElement('a');
  a.href = currentRestoreResult;
  a.download = fileName;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  addHistory('Photo Restore', fileName, currentRestoreResult);
  showToast('✅ Downloaded!');
}
function downloadUpscale() {
  if (!currentUpscaleResult) return;
  const fileName = 'picly-upscaled-' + selectedUpscaleScale + 'x-' + Date.now() + '.png';
  const a = document.createElement('a');
  a.href = currentUpscaleResult;
  a.download = fileName;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  addHistory('AI Upscale', fileName, currentUpscaleResult);
  showToast('✅ Downloaded!');
}
function downloadAiImage() {
  if (!currentAiImageResult) { showToast('No image yet'); return; }
  const fileName = 'picly-ai-' + Date.now() + '.png';
  const dataUrl = 'data:image/png;base64,' + currentAiImageResult;
  const a = document.createElement('a');
  a.href = dataUrl;
  a.download = fileName;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  addHistory('Text to Image', fileName, dataUrl);
  showToast('✅ Downloaded!');
}
function downloadEditorResult() {
  if (!currentEditorResult) { showToast('No result yet'); return; }
  const fileName = 'picly-edited-' + Date.now() + '.png';
  const a = document.createElement('a');
  a.href = currentEditorResult;
  a.download = fileName;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  addHistory('AI Editor', fileName, currentEditorResult);
  showToast('✅ Downloaded!');
}

// ==================== VIDEO ====================
async function trimVideo() { if (isProcessing || !currentVideoFile) return; isProcessing = true; await requestWakeLock(); showLoader('✂️ Trimming'); try { const fd = new FormData(); fd.append('video', currentVideoFile); fd.append('start', 0); fd.append('end', currentVideoDuration); const blob = await uploadWithProgress(SERVER_URL + '/api/trim', fd, updateProgress); const fileName = 'picly-trimmed-' + Date.now() + '.mp4'; const url = URL.createObjectURL(blob); const a = document.createElement('a'); a.href = url; a.download = fileName; document.body.appendChild(a); a.click(); document.body.removeChild(a); addHistory('Video Trim', fileName, url); hideLoader(); showToast('✅ Ready!'); } catch (err) { hideLoader(); showToast('Error: ' + err.message); } await releaseWakeLock(); isProcessing = false; }
async function compressVideo() { if (isProcessing || !currentVideoFile) return; isProcessing = true; await requestWakeLock(); showLoader('🗜️ Compressing'); try { const fd = new FormData(); fd.append('video', currentVideoFile); fd.append('quality', selectedCompressQuality); const blob = await uploadWithProgress(SERVER_URL + '/api/compress', fd, updateProgress); const fileName = 'picly-compressed-' + Date.now() + '.mp4'; const url = URL.createObjectURL(blob); const a = document.createElement('a'); a.href = url; a.download = fileName; document.body.appendChild(a); a.click(); document.body.removeChild(a); addHistory('Video Compress', fileName, url); hideLoader(); showToast('✅ Done!'); } catch (err) { hideLoader(); showToast('Error: ' + err.message); } await releaseWakeLock(); isProcessing = false; }
async function extractMp3() { if (isProcessing || !currentVideoFile) return; isProcessing = true; await requestWakeLock(); showLoader('🎵 Extracting'); try { const fd = new FormData(); fd.append('video', currentVideoFile); const blob = await uploadWithProgress(SERVER_URL + '/api/mp3', fd, updateProgress); const fileName = 'picly-audio-' + Date.now() + '.mp3'; const url = URL.createObjectURL(blob); const a = document.createElement('a'); a.href = url; a.download = fileName; document.body.appendChild(a); a.click(); document.body.removeChild(a); addHistory('Video to MP3', fileName, url); hideLoader(); showToast('✅ Ready!'); } catch (err) { hideLoader(); showToast('Error: ' + err.message); } await releaseWakeLock(); isProcessing = false; }
async function videoToGif() { if (isProcessing || !currentVideoFile) return; isProcessing = true; await requestWakeLock(); showLoader('🎞️ GIF'); try { const fd = new FormData(); fd.append('video', currentVideoFile); fd.append('start', 0); fd.append('duration', 3); fd.append('fps', 10); const blob = await uploadWithProgress(SERVER_URL + '/api/gif', fd, updateProgress); const fileName = 'picly-' + Date.now() + '.gif'; const url = URL.createObjectURL(blob); const a = document.createElement('a'); a.href = url; a.download = fileName; document.body.appendChild(a); a.click(); document.body.removeChild(a); addHistory('Video to GIF', fileName, url); hideLoader(); showToast('✅ Ready!'); } catch (err) { hideLoader(); showToast('Error: ' + err.message); } await releaseWakeLock(); isProcessing = false; }
async function enhanceVideo() { if (isProcessing || !currentVideoFile) return; isProcessing = true; await requestWakeLock(); showLoader('✨ Enhancing'); try { const fd = new FormData(); fd.append('video', currentVideoFile); fd.append('type', selectedEnhanceType); fd.append('resolution', selectedResolution); const blob = await uploadWithProgress(SERVER_URL + '/api/enhance', fd, updateProgress); const fileName = 'picly-enhanced-' + Date.now() + '.mp4'; const url = URL.createObjectURL(blob); const a = document.createElement('a'); a.href = url; a.download = fileName; document.body.appendChild(a); a.click(); document.body.removeChild(a); addHistory('Video Enhance', fileName, url); hideLoader(); showToast('✅ Enhanced!'); } catch (err) { hideLoader(); showToast('Error: ' + err.message); } await releaseWakeLock(); isProcessing = false; }

// ==================== AI ====================
function loadAiImage(input) { const file = input.files ? input.files[0] : input; if (!file) return; currentAiImage = file; const reader = new FileReader(); reader.onload = (e) => { const preview = document.getElementById('aiImagePreview'); if (preview) preview.src = e.target.result; const pending = document.getElementById('aiPendingMsg'); if (pending) pending.style.display = 'none'; const activeUI = document.getElementById('aiActiveUI'); if (activeUI) activeUI.style.display = 'block'; }; reader.readAsDataURL(file); }
async function applyAiMagic() { if (isProcessing) return; if (!currentAiImage) { showToast('Upload image first'); return; } isProcessing = true; await requestWakeLock(); showLoader('🎨 Applying'); try { const formData = new FormData(); formData.append('image', currentAiImage); formData.append('type', selectedAiMagic); const blob = await uploadWithProgress(SERVER_URL + '/api/ai-magic', formData, updateProgress); const fileName = 'picly-' + selectedAiMagic + '-' + Date.now() + '.jpg'; const url = URL.createObjectURL(blob); const a = document.createElement('a'); a.href = url; a.download = fileName; document.body.appendChild(a); a.click(); document.body.removeChild(a); addHistory('AI Magic', fileName, url); hideLoader(); showToast('✅ Done!'); } catch (err) { hideLoader(); showToast('Error: ' + err.message); } await releaseWakeLock(); isProcessing = false; }
async function generateAiImage() { if (isProcessing) return; const promptInput = document.getElementById('aiPromptInput'); if (!promptInput) return; const prompt = promptInput.value.trim(); if (!prompt) { showToast('Enter prompt first'); return; } isProcessing = true; await requestWakeLock(); showLoader('🎨 Generating'); try { const res = await fetch(SERVER_URL + '/api/cf-image', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ prompt: prompt, aspect_ratio: selectedAiRatio }) }); if (!res.ok) throw new Error('Server: ' + res.status); const data = await res.json(); if (!data.success || !data.result || !data.result.image) throw new Error('No image'); currentAiImageResult = data.result.image; const preview = document.getElementById('aiResultImg'); if (preview) preview.src = 'data:image/png;base64,' + currentAiImageResult; const resultBox = document.getElementById('aiResultBox'); if (resultBox) resultBox.style.display = 'block'; hideLoader(); showToast('✅ Generated!'); } catch (err) { hideLoader(); showToast('Error: ' + err.message); } await releaseWakeLock(); isProcessing = false; }
function loadRemoveBgImage(input) { const file = input.files ? input.files[0] : input; if (!file) return; currentRemoveBgImage = file; const reader = new FileReader(); reader.onload = (e) => { const preview = document.getElementById('removeBgPreview'); if (preview) preview.src = e.target.result; const pending = document.getElementById('removeBgPending'); if (pending) pending.style.display = 'none'; const activeUI = document.getElementById('removeBgActive'); if (activeUI) activeUI.style.display = 'block'; }; reader.readAsDataURL(file); }
async function removeBgOnly() { if (isProcessing) return; if (!currentRemoveBgImage) { showToast('Upload image'); return; } isProcessing = true; await requestWakeLock(); showLoader('🖼️ Removing BG'); try { const formData = new FormData(); formData.append('image', currentRemoveBgImage); const blob = await uploadWithProgress(SERVER_URL + '/api/remove-bg', formData, updateProgress); const fileName = 'picly-no-bg-' + Date.now() + '.png'; const url = URL.createObjectURL(blob); const a = document.createElement('a'); a.href = url; a.download = fileName; document.body.appendChild(a); a.click(); document.body.removeChild(a); addHistory('BG Remove', fileName, url); hideLoader(); showToast('✅ Done!'); } catch (err) { hideLoader(); showToast('Error: ' + err.message); } await releaseWakeLock(); isProcessing = false; }
function loadBgImage(input) { const file = input.files ? input.files[0] : input; if (!file) return; currentBgImage = file; const reader = new FileReader(); reader.onload = (e) => { const preview = document.getElementById('bgImagePreview'); if (preview) preview.src = e.target.result; const pending = document.getElementById('bgPendingMsg'); if (pending) pending.style.display = 'none'; const activeUI = document.getElementById('bgActiveUI'); if (activeUI) activeUI.style.display = 'block'; }; reader.readAsDataURL(file); }
async function replaceBackground() { if (isProcessing) return; if (!currentBgImage) { showToast('Upload image'); return; } const promptInput = document.getElementById('bgPromptInput'); const bgPrompt = promptInput ? promptInput.value.trim() : ''; if (!bgPrompt) { showToast('Enter BG prompt'); return; } isProcessing = true; await requestWakeLock(); showLoader('🎨 Replacing BG'); try { const formData = new FormData(); formData.append('image', currentBgImage); formData.append('bgPrompt', bgPrompt); const blob = await uploadWithProgress(SERVER_URL + '/api/merge-bg', formData, updateProgress); const fileName = 'picly-bg-replace-' + Date.now() + '.png'; const url = URL.createObjectURL(blob); const a = document.createElement('a'); a.href = url; a.download = fileName; document.body.appendChild(a); a.click(); document.body.removeChild(a); addHistory('BG Replace', fileName, url); hideLoader(); showToast('✅ Done!'); } catch (err) { hideLoader(); showToast('Error: ' + err.message); } await releaseWakeLock(); isProcessing = false; }
function loadEditorImage(input) { const file = input.files ? input.files[0] : input; if (!file) return; currentEditorImage = file; const reader = new FileReader(); reader.onload = (e) => { const preview = document.getElementById('editorPreview'); if (preview) preview.src = e.target.result; const pending = document.getElementById('editorPendingMsg'); if (pending) pending.style.display = 'none'; const activeUI = document.getElementById('editorActiveUI'); if (activeUI) activeUI.style.display = 'block'; }; reader.readAsDataURL(file); }
function setEditorPrompt(text) { const input = document.getElementById('editorPromptInput'); if (input) input.value = text; }
async function runAiEditor() { if (isProcessing) return; if (!currentEditorImage) { showToast('Upload photo'); return; } const promptInput = document.getElementById('editorPromptInput'); const prompt = promptInput ? promptInput.value.trim() : ''; if (!prompt) { showToast('Enter prompt'); return; } isProcessing = true; await requestWakeLock(); showLoader('🎨 Editing'); try { const formData = new FormData(); formData.append('image', currentEditorImage); formData.append('prompt', prompt); const blob = await uploadWithProgress(SERVER_URL + '/api/ai-editor', formData, updateProgress); currentEditorResult = URL.createObjectURL(blob); const resultImg = document.getElementById('editorResultImg'); if (resultImg) resultImg.src = currentEditorResult; const resultBox = document.getElementById('editorResultBox'); if (resultBox) resultBox.style.display = 'block'; hideLoader(); showToast('✅ Done!'); } catch (err) { hideLoader(); showToast('Error: ' + err.message); } await releaseWakeLock(); isProcessing = false; }
function loadUpscaleImage(input) { const file = input.files ? input.files[0] : input; if (!file) return; currentUpscaleImage = file; const reader = new FileReader(); reader.onload = (e) => { document.getElementById('upscalePreview').src = e.target.result; document.getElementById('upscalePending').style.display = 'none'; document.getElementById('upscaleActive').style.display = 'block'; }; reader.readAsDataURL(file); }
async function runUpscale() { if (isProcessing) return; if (!currentUpscaleImage) { showToast('Upload photo'); return; } isProcessing = true; await requestWakeLock(); showLoader('🖼️ Upscaling ' + selectedUpscaleScale + 'x'); try { const formData = new FormData(); formData.append('image', currentUpscaleImage); formData.append('scale', String(selectedUpscaleScale)); const blob = await uploadWithProgress(SERVER_URL + '/api/upscale', formData, updateProgress); currentUpscaleResult = URL.createObjectURL(blob); document.getElementById('upscaleResultImg').src = currentUpscaleResult; document.getElementById('upscaleResult').style.display = 'block'; hideLoader(); showToast('✅ Upscaled!'); } catch (err) { hideLoader(); showToast('Error: ' + err.message); } await releaseWakeLock(); isProcessing = false; }
function loadCleanupImage(input) { const file = input.files ? input.files[0] : input; if (!file) return; currentCleanupImage = file; const reader = new FileReader(); reader.onload = (e) => { const img = document.getElementById('cleanupPreview'); img.onload = () => { setTimeout(setupMaskCanvas, 200); }; img.src = e.target.result; document.getElementById('cleanupPending').style.display = 'none'; document.getElementById('cleanupActive').style.display = 'block'; showToast('Photo loaded'); }; reader.readAsDataURL(file); }
function setupMaskCanvas() { const img = document.getElementById('cleanupPreview'); const canvas = document.getElementById('cleanupMaskCanvas'); if (!img || !canvas) return; const rect = img.getBoundingClientRect(); canvas.width = rect.width; canvas.height = rect.height; canvas.style.width = rect.width + 'px'; canvas.style.height = rect.height + 'px'; cleanupMaskCtx = canvas.getContext('2d'); cleanupMaskCtx.clearRect(0, 0, canvas.width, canvas.height); canvas.onmousedown = (e) => { e.preventDefault(); cleanupIsDrawing = true; drawMask(e); }; canvas.onmousemove = (e) => { if (cleanupIsDrawing) drawMask(e); }; canvas.onmouseup = () => { cleanupIsDrawing = false; }; canvas.onmouseleave = () => { cleanupIsDrawing = false; }; canvas.ontouchstart = (e) => { e.preventDefault(); cleanupIsDrawing = true; drawMask(e.touches[0]); }; canvas.ontouchmove = (e) => { e.preventDefault(); if (cleanupIsDrawing) drawMask(e.touches[0]); }; canvas.ontouchend = (e) => { e.preventDefault(); cleanupIsDrawing = false; }; }
function drawMask(e) { if (!cleanupMaskCtx) return; const canvas = document.getElementById('cleanupMaskCanvas'); const rect = canvas.getBoundingClientRect(); const x = (e.clientX || e.pageX) - rect.left; const y = (e.clientY || e.pageY) - rect.top; cleanupMaskCtx.fillStyle = 'rgba(255, 0, 128, 0.6)'; cleanupMaskCtx.beginPath(); cleanupMaskCtx.arc(x, y, cleanupBrushSize, 0, Math.PI * 2); cleanupMaskCtx.fill(); }
function setBrushSize(size, btn) { cleanupBrushSize = size; document.querySelectorAll('.ctrl-btn').forEach(b => { if (['Small','Medium','Large'].includes(b.textContent.trim())) b.classList.remove('active'); }); if (btn) btn.classList.add('active'); showToast('Brush: ' + size + 'px'); }
function clearMask() { const canvas = document.getElementById('cleanupMaskCanvas'); if (canvas && cleanupMaskCtx) { cleanupMaskCtx.clearRect(0, 0, canvas.width, canvas.height); showToast('Cleared'); } }
async function runCleanup() { if (isProcessing) return; if (!currentCleanupImage) { showToast('Upload photo'); return; } const maskCanvas = document.getElementById('cleanupMaskCanvas'); const previewImg = document.getElementById('cleanupPreview'); if (!maskCanvas || !previewImg) return; const testCtx = maskCanvas.getContext('2d'); const testData = testCtx.getImageData(0, 0, maskCanvas.width, maskCanvas.height); let hasDrawing = false; for (let i = 3; i < testData.data.length; i += 4) { if (testData.data[i] > 0) { hasDrawing = true; break; } } if (!hasDrawing) { showToast('Brush karo pehle'); return; } isProcessing = true; await requestWakeLock(); showLoader('🧹 Removing'); try { const origImg = new Image(); origImg.crossOrigin = 'anonymous'; await new Promise((resolve, reject) => { origImg.onload = resolve; origImg.onerror = reject; origImg.src = previewImg.src; }); const ORIG_W = origImg.width, ORIG_H = origImg.height; const maskFull = document.createElement('canvas'); maskFull.width = ORIG_W; maskFull.height = ORIG_H; const mctx = maskFull.getContext('2d', { willReadFrequently: true }); mctx.fillStyle = '#000000'; mctx.fillRect(0, 0, ORIG_W, ORIG_H); const scaleX = ORIG_W / maskCanvas.width, scaleY = ORIG_H / maskCanvas.height; const brushScale = cleanupBrushSize * Math.max(scaleX, scaleY); const dispW = maskCanvas.width, dispH = maskCanvas.height; mctx.fillStyle = '#ffffff'; for (let dy = 0; dy < dispH; dy += 2) { for (let dx = 0; dx < dispW; dx += 2) { const di = (dy * dispW + dx) * 4; if (testData.data[di + 3] > 128) { mctx.beginPath(); mctx.arc(dx * scaleX, dy * scaleY, brushScale, 0, Math.PI * 2); mctx.fill(); } } } const maskBlob = await new Promise(r => maskFull.toBlob(r, 'image/png')); const imageCanvas = document.createElement('canvas'); imageCanvas.width = ORIG_W; imageCanvas.height = ORIG_H; imageCanvas.getContext('2d').drawImage(origImg, 0, 0); const imageBlob = await new Promise(r => imageCanvas.toBlob(r, 'image/png')); const formData = new FormData(); formData.append('image', imageBlob, 'photo.png'); formData.append('mask', maskBlob, 'mask.png'); const blob = await uploadWithProgress(SERVER_URL + '/api/cleanup', formData, updateProgress); currentCleanupResult = URL.createObjectURL(blob); document.getElementById('cleanupResultImg').src = currentCleanupResult; document.getElementById('cleanupResult').style.display = 'block'; hideLoader(); showToast('✅ Removed!'); } catch (err) { hideLoader(); showToast('Error: ' + err.message); } await releaseWakeLock(); isProcessing = false; }
function loadRestoreImage(input) { const file = input.files ? input.files[0] : input; if (!file) return; currentRestoreImage = file; const reader = new FileReader(); reader.onload = (e) => { document.getElementById('restorePreview').src = e.target.result; document.getElementById('restorePending').style.display = 'none'; document.getElementById('restoreActive').style.display = 'block'; }; reader.readAsDataURL(file); }
async function runRestore() { if (isProcessing) return; if (!currentRestoreImage) { showToast('Upload photo'); return; } isProcessing = true; await requestWakeLock(); showLoader('🎨 Restoring'); let fp = 0; const pInt = setInterval(() => { if (fp < 90) { fp += 2; updateProgress(fp); } }, 800); try { const formData = new FormData(); formData.append('image', currentRestoreImage); updateProgress(5); const uploadRes = await fetch(SERVER_URL + '/api/restore', { method: 'POST', body: formData }); if (!uploadRes.ok) throw new Error('Upload: ' + uploadRes.status); const { jobId } = await uploadRes.json(); if (!jobId) throw new Error('No job ID'); updateProgress(10); let attempts = 0; while (attempts < 60) { await new Promise(r => setTimeout(r, 3000)); attempts++; updateProgress(10 + Math.min(75, (attempts / 60) * 75)); const statusRes = await fetch(SERVER_URL + '/api/restore-status/' + jobId); if (!statusRes.ok) continue; const statusData = await statusRes.json(); if (statusData.status === 'completed') { updateProgress(90); const resultRes = await fetch(SERVER_URL + '/api/restore-result/' + jobId); if (!resultRes.ok) throw new Error('Download failed'); updateProgress(95); const ab = await resultRes.arrayBuffer(); const bytes = new Uint8Array(ab); let mt = 'image/png', ext = 'png'; if (bytes[0] === 0xFF && bytes[1] === 0xD8) { mt = 'image/jpeg'; ext = 'jpg'; } else if (bytes[0] === 0x89 && bytes[1] === 0x50) { mt = 'image/png'; ext = 'png'; } else if (bytes[0] === 0x52 && bytes[1] === 0x49 && bytes[8] === 0x57) { mt = 'image/webp'; ext = 'webp'; } const blob = new Blob([ab], { type: mt }); currentRestoreResult = URL.createObjectURL(blob); currentRestoreExt = ext; const img = document.getElementById('restoreResultImg'); img.src = currentRestoreResult; img.style.display = 'block'; document.getElementById('restoreResult').style.display = 'block'; clearInterval(pInt); updateProgress(100); hideLoader(); showToast('✅ Restored!'); await releaseWakeLock(); isProcessing = false; return; } if (statusData.status === 'failed') throw new Error(statusData.error || 'Failed'); showLoader('🎨 Processing... (' + attempts * 3 + 's)'); } throw new Error('Timeout'); } catch (err) { clearInterval(pInt); hideLoader(); showToast('Error: ' + err.message); } await releaseWakeLock(); isProcessing = false; }

// ==================== FRAMES & COLLAGE ====================
function applyFrame(style, btn) { if (!canvas) { showToast('Upload image first'); return; } canvas.style.border = 'none'; canvas.style.boxShadow = 'none'; canvas.style.borderRadius = '0'; if (style === 'simple') canvas.style.border = '8px solid #fff'; else if (style === 'rounded') { canvas.style.borderRadius = '24px'; canvas.style.border = '6px solid #fff'; } else if (style === 'polaroid') { canvas.style.border = '20px solid #fff'; canvas.style.borderBottomWidth = '80px'; canvas.style.boxShadow = '0 8px 20px rgba(0,0,0,0.3)'; } else if (style === 'vintage') { canvas.style.border = '12px solid #8b7355'; } else if (style === 'neon') { canvas.style.border = '4px solid #00d4ff'; canvas.style.boxShadow = '0 0 20px #00d4ff'; } else if (style === 'gold') { canvas.style.border = '8px solid #d4af37'; canvas.style.boxShadow = '0 0 30px rgba(212,175,55,0.5)'; } if (btn) { btn.parentElement.querySelectorAll('.ctrl-btn').forEach(b => b.classList.remove('active')); btn.classList.add('active'); } showToast('Frame applied ✨'); }
function selectCollageLayout(layout, btn) { collageLayout = layout; if (btn) { btn.parentElement.querySelectorAll('.ctrl-btn').forEach(b => b.classList.remove('active')); btn.classList.add('active'); } showToast('Layout: ' + layout); }
function addCollagePhotos(input) { const files = Array.from(input.files || []); if (files.length === 0) return; files.forEach(f => { const reader = new FileReader(); reader.onload = (e) => { const img = new Image(); img.onload = () => { collagePhotos.push(img); showToast('Photo added ✅ (' + collagePhotos.length + ')'); }; img.src = e.target.result; }; reader.readAsDataURL(f); }); }
function createCollage() { if (collagePhotos.length < 2) { showToast('Add at least 2 photos'); return; } const tmp = document.createElement('canvas'); const cols = collageLayout === '1x2' ? 1 : (collageLayout === '2x1' ? 2 : parseInt(collageLayout)); const rows = collageLayout === '1x2' ? 2 : (collageLayout === '2x1' ? 1 : parseInt(collageLayout)); const cellW = 400, cellH = 400; tmp.width = cols * cellW; tmp.height = rows * cellH; const tctx = tmp.getContext('2d'); tctx.fillStyle = '#000'; tctx.fillRect(0, 0, tmp.width, tmp.height); collagePhotos.slice(0, cols * rows).forEach((img, i) => { const col = i % cols, row = Math.floor(i / cols); const x = col * cellW, y = row * cellH; const scale = Math.max(cellW / img.width, cellH / img.height); const w = img.width * scale, h = img.height * scale; tctx.drawImage(img, x + (cellW - w) / 2, y + (cellH - h) / 2, w, h); }); const preview = document.getElementById('collagePreview'); if (preview) preview.innerHTML = '<img src="' + tmp.toDataURL() + '" style="width:100%;border-radius:12px;">'; const a = document.createElement('a'); a.href = tmp.toDataURL(); a.download = 'picly-collage.png'; a.click(); showToast('✅ Collage created!'); }

// ==================== GLOBAL EXPORTS ====================
window.showScreen = showScreen; window.goHome = goHome; window.openCategory = openCategory; window.openTool = openTool; window.openToolFromHome = openToolFromHome; window.backToCategory = backToCategory; window.handleGlobalUpload = handleGlobalUpload; window.loadImage = loadImage; window.resetImage = resetImage; window.loadVideo = loadVideo; window.selectCompressQuality = selectCompressQuality; window.selectEnhanceType = selectEnhanceType; window.selectResolution = selectResolution; window.selectAiMagic = selectAiMagic; window.selectAiRatio = selectAiRatio; window.selectUpscaleScale = selectUpscaleScale; window.selectGifFps = selectGifFps;
window.loadAiImage = loadAiImage; window.applyAiMagic = applyAiMagic; window.generateAiImage = generateAiImage; window.downloadAiImage = downloadAiImage;
window.loadRemoveBgImage = loadRemoveBgImage; window.removeBgOnly = removeBgOnly; window.loadBgImage = loadBgImage; window.replaceBackground = replaceBackground;
window.loadEditorImage = loadEditorImage; window.setEditorPrompt = setEditorPrompt; window.runAiEditor = runAiEditor; window.downloadEditorResult = downloadEditorResult;
window.loadUpscaleImage = loadUpscaleImage; window.runUpscale = runUpscale; window.downloadUpscale = downloadUpscale;
window.loadCleanupImage = loadCleanupImage; window.runCleanup = runCleanup; window.downloadCleanup = downloadCleanup; window.setBrushSize = setBrushSize; window.clearMask = clearMask;
window.loadRestoreImage = loadRestoreImage; window.runRestore = runRestore; window.downloadRestore = downloadRestore;
window.trimVideo = trimVideo; window.compressVideo = compressVideo; window.extractMp3 = extractMp3; window.videoToGif = videoToGif; window.enhanceVideo = enhanceVideo;
window.cropImage = cropImage; window.applyFilter = applyFilter; window.resizeImage = resizeImage; window.rotateImage = rotateImage; window.flipImage = flipImage; window.compressImage = compressImage; window.makePassport = makePassport; window.exportPDF = exportPDF; window.convertFormat = convertFormat; window.addTextDrag = addTextDrag; window.addStickerDrag = addStickerDrag; window.downloadImage = downloadImage;
window.calculateEMI = calculateEMI; window.calcGST = calcGST; window.calculateAge = calculateAge; window.calculateBMI = calculateBMI; window.convertUnit = convertUnit; window.generateQR = generateQR;
window.buildControls = buildControls;
window.openNotifications = openNotifications; window.closeNotifications = closeNotifications; window.clearAllNotifications = clearAllNotifications;
window.searchTools = searchTools; window.openSettings = openSettings; window.clearAllData = clearAllData;
window.switchProfileTab = switchProfileTab; window.renderProfileContent = renderProfileContent; window.downloadHistoryItem = downloadHistoryItem;
window.navTo = navTo; window.addHistory = addHistory; window.getHistory = getHistory;
window.updateStats = updateStats; window.updateNotifBadge = updateNotifBadge; window.renderNotifications = renderNotifications;
window.applyFrame = applyFrame; window.selectCollageLayout = selectCollageLayout; window.addCollagePhotos = addCollagePhotos; window.createCollage = createCollage;
window.showToast = showToast; window.showLoader = showLoader; window.hideLoader = hideLoader; window.uploadWithProgress = uploadWithProgress; window.requestWakeLock = requestWakeLock; window.releaseWakeLock = releaseWakeLock; window.timeAgo = timeAgo;
window.loadPhotoSigImage = loadPhotoSigImage; window.setPsColor = setPsColor; window.setPsBrush = setPsBrush; window.clearPsSignature = clearPsSignature; window.undoPsSignature = undoPsSignature; window.mergePhotoSignature = mergePhotoSignature; window.downloadPhotoSignature = downloadPhotoSignature;

// Init
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', function() {
    canvas = document.getElementById('canvas');
    if (canvas) ctx = canvas.getContext('2d');
    overlayLayer = document.getElementById('overlayLayer');
    const slider = document.getElementById('slider');
    const dots = document.querySelectorAll('#dots .dot');
    let cs = 0, iv;
    function ud(i) { dots.forEach((d,x) => d.classList.toggle('active', x===i)); }
    function ss(i) { if (!slider || !slider.children[i]) return; slider.scrollTo({ left: slider.children[i].offsetLeft - 20, behavior: 'smooth' }); ud(i); }
    function ns() { if (!slider) return; cs = (cs + 1) % slider.children.length; ss(cs); }
    function st() { iv = setInterval(ns, 3000); }
    function sp() { clearInterval(iv); }
    if (slider) { st(); slider.addEventListener('touchstart', sp); slider.addEventListener('touchend', () => setTimeout(st, 4000)); slider.addEventListener('mouseenter', sp); slider.addEventListener('mouseleave', st); }
    updateStats(); updateNotifBadge(); renderNotifications();
  });
} else {
  canvas = document.getElementById('canvas');
  if (canvas) ctx = canvas.getContext('2d');
  overlayLayer = document.getElementById('overlayLayer');
  const slider = document.getElementById('slider');
  const dots = document.querySelectorAll('#dots .dot');
  let cs = 0, iv;
  function ud(i) { dots.forEach((d,x) => d.classList.toggle('active', x===i)); }
  function ss(i) { if (!slider || !slider.children[i]) return; slider.scrollTo({ left: slider.children[i].offsetLeft - 20, behavior: 'smooth' }); ud(i); }
  function ns() { if (!slider) return; cs = (cs + 1) % slider.children.length; ss(cs); }
  function st() { iv = setInterval(ns, 3000); }
  function sp() { clearInterval(iv); }
  if (slider) { st(); slider.addEventListener('touchstart', sp); slider.addEventListener('touchend', () => setTimeout(st, 4000)); slider.addEventListener('mouseenter', sp); slider.addEventListener('mouseleave', st); }
  updateStats(); updateNotifBadge(); renderNotifications();
}