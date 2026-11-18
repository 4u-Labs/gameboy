// Game Boy Classic DMG-01 & Color — Bancada Retrô Interativa (4u-Labs)
(() => {
  'use strict';

  const CLASSICS = [
    { file: 'Tetris (World) (Rev A).gb', title: 'TETRIS', maker: 'Nintendo · 1989', color: '#dc2626', pt: 'O maior clássico portátil de todos os tempos com tema Korobeiniki.', en: 'The ultimate handheld puzzle classic with the iconic Korobeiniki theme.' },
    { file: 'Super Mario Land (World).gb', title: 'SUPER MARIO LAND', maker: 'Nintendo · 1989', color: '#16a34a', pt: 'Aventura de estreia do Mario no Game Boy pelo reino de Sarasaland.', en: 'Mario debut handheld adventure across the four kingdoms of Sarasaland.' },
    { file: 'Super Mario Land 2 - 6 Golden Coins (USA, Europe).gb', title: 'SUPER MARIO LAND 2', maker: 'Nintendo · 1992', color: '#2563eb', pt: 'Recupere as 6 Moedas Douradas de Wario com a orelha de coelho.', en: 'Reclaim the 6 Golden Coins from Wario using the Bunny Mario power-up.' },
    { file: 'Wario Land - Super Mario Land 3 (World).gb', title: 'WARIO LAND (SML 3)', maker: 'Nintendo · 1994', color: '#ca8a04', pt: 'Jogue com Wario caçando tesouros na Kitchen Island com capacetes especiais.', en: 'Play as Wario hunting pirate treasure across Kitchen Island.' },
    { file: "Legend of Zelda, The - Link's Awakening (USA, Europe).gb", title: "ZELDA: LINK'S AWAKENING", maker: 'Nintendo · 1993', color: '#b45309', pt: 'Obra-prima de ação/aventura na misteriosa Ilha Koholint.', en: 'Action-adventure masterpiece set on the mysterious Koholint Island.' },
    { file: 'Pokemon - Red Version (USA, Europe) (SGB Enhanced).gb', title: 'POKÉMON RED', maker: 'Nintendo / Game Freak · 1998', color: '#dc2626', pt: 'Capture os 151 Pokémon originais na região de Kanto (Cartucho Vermelho).', en: 'Catch the original 151 Pokémon across Kanto (Red Cartridge).' },
    { file: 'Pokemon - Blue Version (USA, Europe) (SGB Enhanced).gb', title: 'POKÉMON BLUE', maker: 'Nintendo / Game Freak · 1998', color: '#1d4ed8', pt: 'Jornada clássica em Kanto rumo à Liga Pokémon (Cartucho Azul).', en: 'Classic Kanto RPG journey to the Indigo Plateau (Blue Cartridge).' },
    { file: 'Pokemon - Yellow Version - Special Pikachu Edition (USA, Europe) (GBC,SGB Enhanced).gb', title: 'POKÉMON YELLOW (PIKACHU)', maker: 'Nintendo / Game Freak · 1999', color: '#eab308', pt: 'Edição especial com Pikachu seguindo você fora da Pokébola!', en: 'Special Pikachu Edition with Pikachu following right behind you!' },
    { file: "Kirby's Dream Land (USA, Europe).gb", title: "KIRBY'S DREAM LAND", maker: 'HAL / Nintendo · 1992', color: '#db2777', pt: 'Estreia de Kirby flutuando e inalando inimigos contra o Rei Dedede.', en: 'Kirby debut platformer floating and inhaling enemies vs King Dedede.' },
    { file: "Kirby's Dream Land 2 (USA, Europe) (SGB Enhanced).gb", title: "KIRBY'S DREAM LAND 2", maker: 'HAL / Nintendo · 1995', color: '#ec4899', pt: 'Habilidades de cópia e os amigos animais Rick, Coo e Kine.', en: 'Copy abilities and animal friends Rick, Coo, and Kine.' },
    { file: 'Donkey Kong (World) (Rev A) (SGB Enhanced).gb', title: "DONKEY KONG '94", maker: 'Nintendo · 1994', color: '#b91c1c', pt: 'Começa como o arcade de 1981 e se abre em 100 fases de puzzle/plataforma!', en: 'Starts like the 1981 arcade and opens into 100 puzzle-platform stages!' },
    { file: 'Donkey Kong Land (USA, Europe) (SGB Enhanced).gb', title: 'DONKEY KONG LAND', maker: 'Rare / Nintendo · 1995', color: '#d97706', pt: 'Gráficos pré-renderizados estilo DKC em fases inéditas no portátil.', en: 'Pre-rendered DKC-style platforming with brand-new portable levels.' },
    { file: 'Metroid II - Return of Samus (World).gb', title: 'METROID II: SAMUS', maker: 'Nintendo · 1991', color: '#7c3aed', pt: 'Samus Aran explora o planeta SR388 caçando todas as evoluções Metroid.', en: 'Samus Aran explores planet SR388 hunting every Metroid evolution.' },
    { file: "Mega Man - Dr. Wily's Revenge (USA).gb", title: "MEGA MAN: WILY'S REVENGE", maker: 'Capcom · 1991', color: '#0284c7', pt: 'Derrote os Robot Masters clássicos e absorva suas armas especiais.', en: 'Defeat classic Robot Masters and absorb their signature weapons.' },
    { file: 'Mega Man II (USA).gb', title: 'MEGA MAN II', maker: 'Capcom · 1991', color: '#2563eb', pt: 'Oito chefes de Mega Man 2 e 3 com trilha sonora memorável.', en: 'Eight Robot Masters from Mega Man 2 and 3 with great chiptunes.' },
    { file: "Castlevania II - Belmont's Revenge (USA, Europe).gb", title: "CASTLEVANIA II: BELMONT'S", maker: 'Konami · 1991', color: '#991b1b', pt: 'Christopher Belmont enfrenta quatro castelos elementais de Drácula.', en: 'Christopher Belmont storms four elemental castles to save his son.' },
    { file: 'Contra - The Alien Wars (USA) (SGB Enhanced).gb', title: 'CONTRA: THE ALIEN WARS', maker: 'Konami · 1994', color: '#ea580c', pt: 'Ação run-and-gun explosiva adaptada do clássico do Super Nintendo.', en: 'Explosive run-and-gun action adapted from the 16-bit classic.' },
    { file: "Gargoyle's Quest (USA, Europe).gb", title: "GARGOYLE'S QUEST", maker: 'Capcom · 1990', color: '#059669', pt: 'RPG e plataforma estrelado por Firebrand no Ghoul Realm.', en: 'Action-RPG platformer starring Firebrand in the Ghoul Realm.' },
    { file: 'DuckTales (USA).gb', title: 'DUCKTALES', maker: 'Capcom · 1990', color: '#0d9488', pt: 'Tio Patinhas pula na bengala da Amazônia até a Lua!', en: 'Scrooge McDuck pogo-jumps from the Amazon all the way to the Moon!' },
    { file: 'DuckTales 2 (USA).gb', title: 'DUCKTALES 2', maker: 'Capcom · 1993', color: '#0891b2', pt: 'Sequência com mapa interativo e upgrades para a bengala do Patinhas.', en: 'Sequel featuring interactive map and cane upgrades.' },
    { file: 'Dr. Mario (World).gb', title: 'DR. MARIO', maker: 'Nintendo · 1990', color: '#e11d48', pt: 'Elimine os vírus combinando cápsulas de vitaminas no laboratório.', en: 'Eliminate viruses by matching vitamin capsules in the bottle.' },
    { file: 'F-1 Race (World).gb', title: 'F-1 RACE', maker: 'Nintendo · 1990', color: '#dc2626', pt: 'Corrida de Fórmula 1 veloz com turbo pelos circuitos mundiais.', en: 'High-speed Formula 1 racing with nitro boost across world tracks.' },
    { file: 'Bomberman GB (USA, Europe) (SGB Enhanced).gb', title: 'BOMBERMAN GB', maker: 'Hudson · 1994', color: '#4f46e5', pt: 'Labirintos explosivos com motos e power-ups clássicos.', en: 'Explosive maze battles with MotoBomber and classic power-ups.' },
    { file: 'Teenage Mutant Ninja Turtles - Fall of the Foot Clan (USA).gb', title: 'TMNT: FOOT CLAN', maker: 'Konami · 1990', color: '#15803d', pt: 'Escolha Leonardo, Michelangelo, Donatello ou Raphael contra o Destruidor.', en: 'Pick any of the four Ninja Turtles to battle Shredder and Krang.' },
    { file: 'Double Dragon (USA, Europe).gb', title: 'DOUBLE DRAGON', maker: 'Technos / Tradewest · 1990', color: '#b45309', pt: 'Beat-em-up de rua clássico dos irmãos Billy e Jimmy Lee.', en: 'Classic street beat-em-up starring Billy and Jimmy Lee.' },
    { file: 'Battletoads-Double Dragon (USA).gb', title: 'BATTLETOADS & DOUBLE DRAGON', maker: 'Rare / Tradewest · 1993', color: '#166534', pt: 'Crossover lendário dos sapos e irmãos Lee contra a Dark Queen.', en: 'Legendary crossover beat-em-up against the Dark Queen and Shadow Boss.' },
    { file: 'Final Fantasy Adventure (USA).gb', title: 'FINAL FANTASY ADVENTURE', maker: 'Square · 1991', color: '#1e40af', pt: 'O primeiro jogo da série Mana (Seiken Densetsu) em ação/RPG.', en: 'The original Seiken Densetsu (Mana series) action-RPG epic.' },
    { file: 'Harvest Moon GB (USA) (SGB Enhanced).gb', title: 'HARVEST MOON GB', maker: 'Natsume · 1998', color: '#65a30d', pt: 'Cuide da fazenda, plantações e animais no simulador clássico.', en: 'Tend crops, livestock, and tools on your classic handheld farm.' },
    { file: 'Street Fighter II (USA) (SGB Enhanced).gb', title: 'STREET FIGHTER II', maker: 'Capcom / Nintendo · 1995', color: '#c2410c', pt: 'Hadouken e Shoryuken no bolso com 9 lutadores clássicos.', en: 'Portable Hadouken and Shoryuken action with 9 world warriors.' },
    { file: 'Mortal Kombat II (USA, Europe).gb', title: 'MORTAL KOMBAT II', maker: 'Acclaim / Probe · 1994', color: '#7f1d1d', pt: 'A melhor conversão de Mortal Kombat no Game Boy clássico.', en: 'The best classic Game Boy port of Mortal Kombat.' },
    { file: 'Aladdin (USA) (SGB Enhanced).gb', title: 'ALADDIN', maker: 'Virgin / THQ · 1994', color: '#7c3aed', pt: 'Plataforma fluida pelos telhados de Agrabah e Caverna dos Tesouros.', en: 'Fluid platforming across Agrabah rooftops and the Cave of Wonders.' },
    { file: 'Lion King, The (USA).gb', title: 'THE LION KING', maker: 'Virgin · 1994', color: '#d97706', pt: 'Acompanhe Simba de filhote até rei da Pedra do Reino.', en: 'Guide Simba from cub to King of the Pride Lands.' },
    { file: 'Batman - The Video Game (World).gb', title: 'BATMAN', maker: 'Sunsoft · 1990', color: '#334155', pt: 'Ação de plataforma impecável da Sunsoft em Gotham City.', en: 'Sunsoft platforming action with incredible music across Gotham.' },
    { file: 'Jurassic Park (USA).gb', title: 'JURASSIC PARK', maker: 'Ocean · 1993', color: '#15803d', pt: 'Sobreviva aos dinossauros na Ilha Nublar com o Dr. Alan Grant.', en: 'Survive Isla Nublar dinosaurs as Dr. Alan Grant.' },
    { file: 'R-Type (USA, Europe).gb', title: 'R-TYPE', maker: 'Irem · 1991', color: '#0369a1', pt: 'Shoot-em-up espacial clássico com o módulo Force acoplável.', en: 'Classic horizontal space shooter with the detachable Force pod.' },
    { file: 'Space Invaders (USA) (SGB Enhanced).gb', title: 'SPACE INVADERS', maker: 'Taito / Nintendo · 1994', color: '#6d28d9', pt: 'O clássico arcade espacial fielmente recriado no portátil.', en: 'The arcade alien shooter faithfully recreated on Game Boy.' }
  ];

  const PALETTE = ['#16a34a', '#2563eb', '#dc2626', '#d97706', '#7c3aed', '#0891b2', '#db2777', '#4f46e5', '#059669', '#ea580c'];
  const STORAGE_FAV = 'gb_favs_v1';
  const STORAGE_RECENT = 'gb_recent_v1';
  const STORAGE_LANG = 'gb_lang_v1';

  const classicMap = new Map(CLASSICS.map((c) => [c.file.toLowerCase(), c]));
  let allRoms = [];
  let activeFile = 'Tetris (World) (Rev A).gb';
  let activeCategory = 'all'; // 'all' | 'classics' | 'favs' | 'recent'
  let searchQuery = '';

  const urlLang = new URLSearchParams(window.location.search).get('lang');
  if (urlLang === 'en' || urlLang === 'pt') {
    try { localStorage.setItem(STORAGE_LANG, urlLang); } catch {}
  }
  const savedLang = localStorage.getItem(STORAGE_LANG);
  let lang = savedLang === 'en' || savedLang === 'pt'
    ? savedLang
    : ((navigator.language || 'pt').toLowerCase().startsWith('pt') ? 'pt' : 'en');

  let favs = new Set(JSON.parse(localStorage.getItem(STORAGE_FAV) || '[]'));
  let recent = JSON.parse(localStorage.getItem(STORAGE_RECENT) || '[]');

  let powerOn = true;
  let muted = false;
  let fastForward = false;
  let lcdGridOn = true;
  let lcdMode = 'lcd-dmg'; // 'lcd-dmg' | 'lcd-pocket' | 'lcd-light' | 'lcd-color'

  let renderLimit = 100;
  let currentList = [];
  let renderedCount = 0;
  let catalogList = [];
  let catalogRendered = 0;

  const tr = (pt, en) => (lang === 'en' ? en : pt);
  const el = (id) => document.getElementById(id);

  function cleanDisplayTitle(fileName) {
    const c = classicMap.get(fileName.toLowerCase());
    if (c) return c.title;
    return fileName
      .replace(/\.(gb|gbc|gba|zip)$/i, '')
      .replace(/\s*\([^)]*\)/g, '')
      .trim()
      .toUpperCase() || fileName.replace(/\.(gb|gbc|gba|zip)$/i, '').toUpperCase();
  }

  function colorForName(fileName) {
    const c = classicMap.get(fileName.toLowerCase());
    if (c) return c.color;
    let h = 0;
    for (let i = 0; i < fileName.length; i++) h = (h * 31 + fileName.charCodeAt(i)) | 0;
    return PALETTE[Math.abs(h) % PALETTE.length];
  }

  function shellStyleForCart(fileName) {
    const lower = fileName.toLowerCase();
    if (lower.includes('pokemon - red')) return 'linear-gradient(180deg, #dc2626 0%, #991b1b 100%)';
    if (lower.includes('pokemon - blue')) return 'linear-gradient(180deg, #2563eb 0%, #1e40af 100%)';
    if (lower.includes('pokemon - yellow') || lower.includes('donkey kong land')) return 'linear-gradient(180deg, #eab308 0%, #ca8a04 100%)';
    if (lower.includes('zelda')) return 'linear-gradient(180deg, #d97706 0%, #92400e 100%)';
    return 'linear-gradient(180deg, #9ca3af 0%, #6b7280 100%)';
  }

  // WebAudio Sintetizado (Cliques + Som Clássico "Plim!" do Boot do Game Boy DMG-01)
  let actx = null;
  function getAudioCtx() {
    if (muted) return null;
    const Ctx = window.AudioContext || window.webkitAudioContext;
    if (!Ctx) return null;
    if (!actx) actx = new Ctx();
    if (actx.state === 'suspended') actx.resume().catch(() => {});
    return actx;
  }

  function playClick(freq = 280, dur = 0.035) {
    try {
      const ctx = getAudioCtx();
      if (!ctx) return;
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = 'triangle';
      osc.frequency.setValueAtTime(freq, ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(90, ctx.currentTime + dur);
      gain.gain.setValueAtTime(0.06, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + dur);
      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start();
      osc.stop(ctx.currentTime + dur);
    } catch {}
  }

  function playGameBoyBootChime() {
    try {
      const ctx = getAudioCtx();
      if (!ctx) return;
      const now = ctx.currentTime;
      // Notas clássicas do boot Nintendo Game Boy: B5 (987.77 Hz) -> E6 (1318.51 Hz)
      [[987.77, now, 0.09], [1318.51, now + 0.085, 0.42]].forEach(([freq, t0, dur]) => {
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.type = 'square';
        osc.frequency.setValueAtTime(freq, t0);
        gain.gain.setValueAtTime(0.055, t0);
        gain.gain.exponentialRampToValueAtTime(0.0008, t0 + dur);
        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.start(t0);
        osc.stop(t0 + dur);
      });
    } catch {}
  }

  // Elementos DOM
  const rackEl = el('cartridge-rack');
  const rackCountEl = el('rack-count-badge');
  const rackLabelEl = el('rack-stats-label');
  const searchInput = el('cart-search-input');
  const topCartBadge = el('active-cart-badge');
  const miniCartShell = el('mini-gb-cart');
  const miniCartSticker = el('mini-gb-sticker');
  const miniCartName = el('mini-cart-name');
  const miniCartSub = el('mini-cart-sub');
  const insertedCartTop = el('gb-inserted-cart-top');
  const insertedCartPill = el('gb-inserted-cart-pill');
  const screenEl = el('screen');
  const placeholderEl = el('screenPlaceholder');
  const emuIframe = el('emu-iframe');
  const powerLed = el('powerLed');
  const powerSlider = el('gb-power-slider');
  const catalogModal = el('catalog-modal');
  const catalogGrid = el('catalog-grid');
  const catalogSearch = el('catalog-search-input');
  const manualModal = el('manual-modal');
  const localRomInput = el('local-rom-input');

  function updateCartridgeVisuals(fileName) {
    activeFile = fileName;
    const title = cleanDisplayTitle(fileName);
    const col = colorForName(fileName);
    const shellBg = shellStyleForCart(fileName);
    const meta = classicMap.get(fileName.toLowerCase());

    if (topCartBadge) topCartBadge.textContent = `GAME BOY • ${title}`;
    if (miniCartShell) miniCartShell.style.background = shellBg;
    if (miniCartSticker) miniCartSticker.style.background = col;
    if (miniCartName) miniCartName.textContent = title;
    if (miniCartSub) miniCartSub.textContent = meta ? meta.maker : fileName;

    if (insertedCartTop) {
      insertedCartTop.style.background = shellBg;
      insertedCartTop.classList.add('inserting');
      setTimeout(() => insertedCartTop.classList.remove('inserting'), 220);
    }
    if (insertedCartPill) {
      insertedCartPill.style.background = col;
      insertedCartPill.textContent = title;
    }
  }

  function recordRecent(file) {
    recent = [file, ...recent.filter((x) => x !== file)].slice(0, 30);
    try { localStorage.setItem(STORAGE_RECENT, JSON.stringify(recent)); } catch {}
  }

  function toggleFav(file) {
    if (favs.has(file)) favs.delete(file);
    else favs.add(file);
    try { localStorage.setItem(STORAGE_FAV, JSON.stringify([...favs])); } catch {}
    const nextFav = favs.has(file);
    rackEl?.querySelectorAll('.gb-cart-item').forEach((node) => {
      if (node.dataset.file === file) {
        const btn = node.querySelector('.cart-fav-btn');
        if (btn) {
          btn.classList.toggle('is-fav', nextFav);
          btn.textContent = nextFav ? '♥' : '♡';
        }
      }
    });
    if (activeCategory === 'favs') renderRack();
    if (catalogModal && !catalogModal.classList.contains('hidden')) renderCatalogModal();
  }

  function getAllOrderedRoms() {
    const byLower = new Map(allRoms.map((r) => [r.toLowerCase(), r]));
    const first = [];
    const used = new Set();
    for (const c of CLASSICS) {
      const exact = byLower.get(c.file.toLowerCase());
      if (exact && !used.has(exact)) {
        first.push(exact);
        used.add(exact);
      }
    }
    const rest = allRoms.filter((r) => !used.has(r));
    return [...first, ...rest];
  }

  function getFilteredRoms(queryStr, cat) {
    let base;
    if (cat === 'classics') {
      const byLower = new Map(allRoms.map((r) => [r.toLowerCase(), r]));
      base = CLASSICS.map((c) => byLower.get(c.file.toLowerCase())).filter(Boolean);
    } else if (cat === 'favs') {
      base = allRoms.filter((r) => favs.has(r));
    } else if (cat === 'recent') {
      const avail = new Set(allRoms);
      base = recent.filter((r) => avail.has(r));
    } else {
      base = getAllOrderedRoms();
    }

    const q = (queryStr || '').trim().toLowerCase();
    if (!q) return base;
    return base.filter((f) => {
      const meta = classicMap.get(f.toLowerCase());
      const hay = `${f} ${meta ? `${meta.title} ${meta.maker} ${meta.pt} ${meta.en}` : ''}`.toLowerCase();
      return hay.includes(q);
    });
  }

  function createCartNode(fileName, forModal = false) {
    const col = colorForName(fileName);
    const title = cleanDisplayTitle(fileName);
    const meta = classicMap.get(fileName.toLowerCase());
    const sub = meta ? tr(meta.pt, meta.en) : fileName;
    const isFav = favs.has(fileName);

    if (forModal) {
      const card = document.createElement('button');
      card.type = 'button';
      card.className = 'catalog-cart-card';
      card.innerHTML = `
        <div class="catalog-cart-label" style="background:${col}">${title}</div>
        <div class="catalog-cart-sub">${sub}</div>
      `;
      card.addEventListener('click', () => {
        catalogModal?.classList.add('hidden');
        loadCartridgeFile(fileName);
      });
      return card;
    }

    const row = document.createElement('div');
    row.className = 'gb-cart-item' + (fileName === activeFile ? ' active' : '');
    row.dataset.file = fileName;
    row.title = sub;
    row.innerHTML = `
      <div class="gb-cart-label-plate" style="background:${col}">
        <span class="gb-cart-title">${title}</span>
      </div>
      <button type="button" class="cart-fav-btn ${isFav ? 'is-fav' : ''}" title="${tr('Favoritar', 'Favorite')}">${isFav ? '♥' : '♡'}</button>
    `;
    row.addEventListener('click', (e) => {
      if (e.target.closest('.cart-fav-btn')) {
        e.stopPropagation();
        toggleFav(fileName);
        return;
      }
      loadCartridgeFile(fileName);
    });
    return row;
  }

  function appendNextCartBatch(batchSize = 100) {
    if (!rackEl || renderedCount >= currentList.length) return;
    const nextEnd = Math.min(currentList.length, renderedCount + batchSize);
    rackEl.querySelector('.rack-more-btn')?.remove();

    const frag = document.createDocumentFragment();
    for (let i = renderedCount; i < nextEnd; i++) {
      frag.appendChild(createCartNode(currentList[i], false));
    }
    rackEl.appendChild(frag);
    renderedCount = nextEnd;

    if (currentList.length > renderedCount) {
      const more = document.createElement('button');
      more.type = 'button';
      more.className = 'mech-btn rack-more-btn';
      more.style.width = '100%';
      more.textContent = tr(
        `Carregar mais (${currentList.length - renderedCount} restantes)...`,
        `Load more (${currentList.length - renderedCount} left)...`
      );
      more.addEventListener('click', () => appendNextCartBatch(160));
      rackEl.appendChild(more);
    }
  }

  function renderRack() {
    if (!rackEl) return;
    let list = getFilteredRoms(searchQuery, activeCategory);
    if (searchQuery.trim() && list.length === 0 && activeCategory === 'classics') {
      list = getFilteredRoms(searchQuery, 'all');
    }
    currentList = list;
    renderedCount = 0;
    if (rackCountEl) rackCountEl.textContent = String(list.length);
    if (rackLabelEl) rackLabelEl.textContent = tr('cartuchos instalados', 'cartridges installed');
    rackEl.innerHTML = '';
    appendNextCartBatch(Math.max(100, renderLimit));
  }

  rackEl?.addEventListener('scroll', () => {
    if (renderedCount >= currentList.length) return;
    if (rackEl.scrollTop + rackEl.clientHeight >= rackEl.scrollHeight - 160) {
      appendNextCartBatch(120);
    }
  });

  function appendNextCatalogBatch(batchSize = 140) {
    if (!catalogGrid || catalogRendered >= catalogList.length) return;
    const nextEnd = Math.min(catalogList.length, catalogRendered + batchSize);
    catalogGrid.querySelector('.catalog-more-btn')?.remove();

    const frag = document.createDocumentFragment();
    for (let i = catalogRendered; i < nextEnd; i++) {
      frag.appendChild(createCartNode(catalogList[i], true));
    }
    catalogGrid.appendChild(frag);
    catalogRendered = nextEnd;

    if (catalogList.length > catalogRendered) {
      const more = document.createElement('button');
      more.type = 'button';
      more.className = 'mech-btn catalog-more-btn';
      more.style.gridColumn = '1 / -1';
      more.textContent = tr(
        `Role ou clique para carregar mais (${catalogList.length - catalogRendered} restantes)...`,
        `Scroll or click to load more (${catalogList.length - catalogRendered} left)...`
      );
      more.addEventListener('click', () => appendNextCatalogBatch(240));
      catalogGrid.appendChild(more);
    }
  }

  function renderCatalogModal() {
    if (!catalogGrid) return;
    const q = catalogSearch?.value || '';
    catalogList = getFilteredRoms(q, 'all');
    catalogRendered = 0;
    const countEl = el('catalog-count-badge');
    if (countEl) countEl.textContent = `${catalogList.length} ${tr('cartuchos', 'cartridges')}`;
    catalogGrid.innerHTML = '';
    appendNextCatalogBatch(140);
  }

  catalogGrid?.parentElement?.addEventListener('scroll', () => {
    const body = catalogGrid.parentElement;
    if (!body || catalogRendered >= catalogList.length) return;
    if (body.scrollTop + body.clientHeight >= body.scrollHeight - 220) {
      appendNextCatalogBatch(160);
    }
  });

  // Carregamento limpo da ROM no iframe isolado (zero vazamento de áudio/WASM)
  function loadCartridgeFile(fileName, customBlobUrl = null) {
    playGameBoyBootChime();
    updateCartridgeVisuals(fileName);
    if (!customBlobUrl) {
      recordRecent(fileName);
      try {
        const nextUrl = new URL(window.location.href);
        nextUrl.searchParams.set('rom', fileName);
        window.history.replaceState({}, '', nextUrl.toString());
      } catch {}
    }

    if (activeCategory === 'recent') {
      renderRack();
    } else if (rackEl) {
      rackEl.querySelectorAll('.gb-cart-item').forEach((node) => {
        node.classList.toggle('active', node.dataset.file === fileName);
      });
    }

    powerOn = true;
    powerLed?.classList.add('on');
    powerSlider?.classList.add('on');
    if (powerSlider) powerSlider.textContent = '◀ OFF • ON ▶';
    screenEl?.classList.add('active');
    placeholderEl?.classList.add('hidden');

    const ext = fileName.split('.').pop().toLowerCase();
    const core = ext === 'gba' ? 'mgba' : 'gambatte';
    const romTarget = customBlobUrl || `roms/${encodeURIComponent(fileName)}`;
    const frameUrl = `emu-frame.html?rom=${encodeURIComponent(romTarget)}&core=${core}&name=${encodeURIComponent(cleanDisplayTitle(fileName))}&muted=${muted ? '1' : '0'}`;
    if (emuIframe) emuIframe.src = frameUrl;
  }

  // Upload de arquivo .GB / .GBC / .GBA / .ZIP local
  let lastBlobUrl = null;
  localRomInput?.addEventListener('change', (e) => {
    const file = e.target.files?.[0];
    if (!file) return;
    if (lastBlobUrl) URL.revokeObjectURL(lastBlobUrl);
    lastBlobUrl = URL.createObjectURL(file);
    loadCartridgeFile(file.name, lastBlobUrl);
    localRomInput.value = '';
  });

  // Chave física ON/OFF no topo do Game Boy
  powerSlider?.addEventListener('click', () => {
    powerOn = !powerOn;
    playClick(200, 0.05);
    powerLed?.classList.toggle('on', powerOn);
    powerSlider.classList.toggle('on', powerOn);
    if (!powerOn) {
      if (emuIframe) emuIframe.src = 'about:blank';
      screenEl?.classList.remove('active');
      if (placeholderEl) {
        placeholderEl.innerHTML = `<p>${tr('CONSOLE DESLIGADO<br><br>CLIQUE EM ON/OFF<br>OU ESCOLHA UM CARTUCHO', 'POWER OFF<br><br>CLICK ON/OFF SWITCH<br>OR SELECT A CARTRIDGE')}</p>`;
        placeholderEl.classList.remove('hidden');
      }
    } else {
      loadCartridgeFile(activeFile);
    }
  });

  // ==================== CONTROLES MULTI-TOUCH + TECLADO UNIFICADOS ====================
  // Índices oficiais do EmulatorJS (RetroPad):
  // 0: B | 2: SELECT | 3: START | 4: UP | 5: DOWN | 6: LEFT | 7: RIGHT | 8: A
  const heldSources = {
    UP: new Set(),
    DOWN: new Set(),
    LEFT: new Set(),
    RIGHT: new Set(),
    A: new Set(),
    B: new Set(),
    START: new Set(),
    SELECT: new Set()
  };

  const BTN_INDEX = { B: 0, SELECT: 2, START: 3, UP: 4, DOWN: 5, LEFT: 6, RIGHT: 7, A: 8 };
  const prevSent = { UP: false, DOWN: false, LEFT: false, RIGHT: false, A: false, B: false, START: false, SELECT: false };

  function syncControlsToEmulator() {
    el('dpad-ind-up')?.classList.toggle('pressed', heldSources.UP.size > 0);
    el('dpad-ind-down')?.classList.toggle('pressed', heldSources.DOWN.size > 0);
    el('dpad-ind-left')?.classList.toggle('pressed', heldSources.LEFT.size > 0);
    el('dpad-ind-right')?.classList.toggle('pressed', heldSources.RIGHT.size > 0);
    el('btnA')?.classList.toggle('pressed', heldSources.A.size > 0);
    el('btnB')?.classList.toggle('pressed', heldSources.B.size > 0);
    el('btnStart')?.classList.toggle('pressed', heldSources.START.size > 0);
    el('btnSelect')?.classList.toggle('pressed', heldSources.SELECT.size > 0);

    const win = emuIframe?.contentWindow;
    for (const k of Object.keys(BTN_INDEX)) {
      const nowDown = heldSources[k].size > 0;
      if (nowDown !== prevSent[k]) {
        prevSent[k] = nowDown;
        try {
          win?.gbSimulateInput?.(BTN_INDEX[k], nowDown);
        } catch {}
      }
    }
  }

  function setSourceState(btnKey, sourceId, isDown) {
    const set = heldSources[btnKey];
    if (!set) return;
    if (isDown) set.add(sourceId);
    else set.delete(sourceId);
    syncControlsToEmulator();
  }

  // D-Pad 8 direções contínuo (suporta diagonais e deslizar o polegar)
  const dpadZone = el('dpad-zone');
  if (dpadZone) {
    let dpadPid = null;
    const updateDpadFromPoint = (clientX, clientY) => {
      const rect = dpadZone.getBoundingClientRect();
      const dx = clientX - (rect.left + rect.width / 2);
      const dy = clientY - (rect.top + rect.height / 2);
      const dead = 10;
      heldSources.LEFT.delete('dpad-touch');
      heldSources.RIGHT.delete('dpad-touch');
      heldSources.UP.delete('dpad-touch');
      heldSources.DOWN.delete('dpad-touch');
      if (dx < -dead) heldSources.LEFT.add('dpad-touch');
      if (dx > dead) heldSources.RIGHT.add('dpad-touch');
      if (dy < -dead) heldSources.UP.add('dpad-touch');
      if (dy > dead) heldSources.DOWN.add('dpad-touch');
      syncControlsToEmulator();
    };

    dpadZone.addEventListener('pointerdown', (e) => {
      e.preventDefault();
      dpadPid = e.pointerId;
      try { dpadZone.setPointerCapture?.(e.pointerId); } catch {}
      playClick(240, 0.025);
      navigator.vibrate?.(8);
      updateDpadFromPoint(e.clientX, e.clientY);
    });

    dpadZone.addEventListener('pointermove', (e) => {
      if (dpadPid !== e.pointerId) return;
      e.preventDefault();
      updateDpadFromPoint(e.clientX, e.clientY);
    });

    const releaseDpad = (e) => {
      if (dpadPid !== e.pointerId) return;
      dpadPid = null;
      ['LEFT', 'RIGHT', 'UP', 'DOWN'].forEach((k) => heldSources[k].delete('dpad-touch'));
      syncControlsToEmulator();
    };
    dpadZone.addEventListener('pointerup', releaseDpad);
    dpadZone.addEventListener('pointercancel', releaseDpad);
    dpadZone.addEventListener('lostpointercapture', releaseDpad);
  }

  // Botões A, B, START, SELECT com multi-touch isolado por pointerId
  function bindConsoleBtn(btnEl, btnKey, clickFreq = 310) {
    if (!btnEl) return;
    let activePid = null;
    const srcId = `ptr-${btnKey}`;
    btnEl.addEventListener('pointerdown', (e) => {
      e.preventDefault();
      activePid = e.pointerId;
      try { btnEl.setPointerCapture?.(e.pointerId); } catch {}
      playClick(clickFreq, 0.03);
      navigator.vibrate?.(10);
      setSourceState(btnKey, srcId, true);
    });
    const endPress = (e) => {
      if (activePid !== null && e.pointerId !== activePid) return;
      activePid = null;
      setSourceState(btnKey, srcId, false);
    };
    btnEl.addEventListener('pointerup', endPress);
    btnEl.addEventListener('pointercancel', endPress);
    btnEl.addEventListener('lostpointercapture', endPress);
  }

  bindConsoleBtn(el('btnA'), 'A', 360);
  bindConsoleBtn(el('btnB'), 'B', 300);
  bindConsoleBtn(el('btnStart'), 'START', 220);
  bindConsoleBtn(el('btnSelect'), 'SELECT', 220);

  // Teclado Global (funciona dentro ou fora do iframe)
  const KEY_TO_BTN = {
    ArrowUp: 'UP', KeyW: 'UP',
    ArrowDown: 'DOWN', KeyS: 'DOWN',
    ArrowLeft: 'LEFT', KeyA: 'LEFT',
    ArrowRight: 'RIGHT', KeyD: 'RIGHT',
    KeyX: 'A', KeyL: 'A', KeyK: 'A',
    KeyZ: 'B', KeyJ: 'B',
    Enter: 'START',
    ShiftLeft: 'SELECT', ShiftRight: 'SELECT', Backspace: 'SELECT'
  };

  function handleKeyEvent(e, isDown) {
    if (e.target instanceof HTMLInputElement || e.target instanceof HTMLTextAreaElement) return;
    if (isDown && e.code === 'Escape') {
      catalogModal?.classList.add('hidden');
      manualModal?.classList.add('hidden');
      return;
    }
    if (e.ctrlKey || e.metaKey) return;

    if (e.code === 'Space') {
      e.preventDefault();
      e.stopPropagation();
      if (isDown && !e.repeat) setFastForward(!fastForward);
      return;
    }
    if (isDown && !e.repeat && e.code === 'F5') {
      e.preventDefault();
      triggerEmuAction('saveState');
      return;
    }
    if (isDown && !e.repeat && e.code === 'F8') {
      e.preventDefault();
      triggerEmuAction('loadState');
      return;
    }

    const mapped = KEY_TO_BTN[e.code];
    if (mapped) {
      e.preventDefault();
      e.stopPropagation();
      setSourceState(mapped, `key-${e.code}`, isDown);
    }
  }

  window.__gbHandleKeyEvent = handleKeyEvent;
  window.addEventListener('keydown', (e) => handleKeyEvent(e, true), true);
  window.addEventListener('keyup', (e) => handleKeyEvent(e, false), true);
  window.addEventListener('blur', () => {
    Object.values(heldSources).forEach((s) => s.clear());
    syncControlsToEmulator();
  });

  // Ações rápidas do emulador (Save, Load, Turbo, Mute, Palette, Grid)
  function triggerEmuAction(action, val) {
    playClick(340, 0.03);
    try {
      emuIframe?.contentWindow?.gbAction?.(action, val);
    } catch {}
  }

  function setFastForward(nextState) {
    fastForward = !!nextState;
    el('btn-turbo')?.classList.toggle('active', fastForward);
    el('btn-quick-turbo')?.classList.toggle('active', fastForward);
    if (el('turbo-state')) el('turbo-state').textContent = fastForward ? '2x' : 'OFF';
    triggerEmuAction('fastForward', fastForward);
  }

  function toggleMute() {
    muted = !muted;
    el('btn-mute')?.classList.toggle('active', !muted);
    if (el('mute-state')) el('mute-state').textContent = muted ? 'OFF' : 'ON';
    triggerEmuAction('mute', muted);
  }

  function applyLcdMode(mode) {
    lcdMode = mode;
    if (screenEl) {
      screenEl.classList.remove('lcd-dmg', 'lcd-pocket', 'lcd-light', 'lcd-color');
      screenEl.classList.add(mode);
    }
    document.querySelectorAll('[data-lcd]').forEach((b) => {
      b.classList.toggle('active', b.dataset.lcd === mode);
    });
    const labelMap = {
      'lcd-dmg': 'DMG',
      'lcd-pocket': 'POCKET',
      'lcd-light': 'LIGHT',
      'lcd-color': 'COLOR'
    };
    if (el('lcd-mode-state')) el('lcd-mode-state').textContent = labelMap[mode] || 'DMG';
  }

  const LCD_MODES = ['lcd-dmg', 'lcd-pocket', 'lcd-light', 'lcd-color'];
  el('btn-lcd-cycle')?.addEventListener('click', () => {
    playClick(350, 0.03);
    const next = LCD_MODES[(LCD_MODES.indexOf(lcdMode) + 1) % LCD_MODES.length];
    applyLcdMode(next);
  });

  document.querySelectorAll('[data-lcd]').forEach((btn) => {
    btn.addEventListener('click', () => {
      playClick(350, 0.03);
      applyLcdMode(btn.dataset.lcd);
    });
  });

  el('btn-grid')?.addEventListener('click', () => {
    lcdGridOn = !lcdGridOn;
    playClick(350, 0.03);
    screenEl?.classList.toggle('lcd-grid-on', lcdGridOn);
    el('btn-grid')?.classList.toggle('active', lcdGridOn);
    if (el('grid-state')) el('grid-state').textContent = lcdGridOn ? 'ON' : 'OFF';
  });

  el('btn-turbo')?.addEventListener('click', () => setFastForward(!fastForward));
  el('btn-quick-turbo')?.addEventListener('click', () => setFastForward(!fastForward));
  el('btn-save-state')?.addEventListener('click', () => triggerEmuAction('saveState'));
  el('btn-load-state')?.addEventListener('click', () => triggerEmuAction('loadState'));
  el('btn-mute')?.addEventListener('click', toggleMute);

  el('btn-open-local')?.addEventListener('click', () => localRomInput?.click());
  el('btn-reload-rom')?.addEventListener('click', () => loadCartridgeFile(activeFile));
  el('btn-random-rom')?.addEventListener('click', () => {
    if (!allRoms.length) return;
    const pick = allRoms[Math.floor(Math.random() * allRoms.length)];
    loadCartridgeFile(pick);
  });

  el('btn-fullscreen')?.addEventListener('click', () => {
    const target = el('screen') || document.documentElement;
    if (!document.fullscreenElement) target.requestFullscreen?.().catch(() => {});
    else document.exitFullscreen?.().catch(() => {});
  });

  // Seletor de Carcaça (Skins) e Temas de Fundo
  const skinGlowColors = {
    'skin-classic': 'rgba(139, 172, 15, 0.24)',
    'skin-atomic-purple': 'rgba(168, 85, 247, 0.36)',
    'skin-red': 'rgba(239, 68, 68, 0.32)',
    'skin-yellow': 'rgba(234, 179, 8, 0.32)',
    'skin-black': 'rgba(255, 255, 255, 0.14)',
    'skin-blue': 'rgba(14, 165, 233, 0.34)'
  };

  document.querySelectorAll('.skin-dot').forEach((dot) => {
    dot.addEventListener('click', () => {
      playClick(300, 0.03);
      document.querySelectorAll('.skin-dot').forEach((d) => d.classList.remove('active'));
      dot.classList.add('active');
      const skin = dot.dataset.skin || 'skin-classic';
      const consoleEl = el('gameboyConsole');
      if (consoleEl) consoleEl.className = `gameboy ${skin}`;
      const glow = el('stageGlow');
      if (glow) {
        const col = skinGlowColors[skin] || skinGlowColors['skin-classic'];
        glow.style.background = `radial-gradient(circle, ${col} 0%, transparent 70%)`;
      }
    });
  });

  document.querySelectorAll('[data-theme]').forEach((btn) => {
    btn.addEventListener('click', () => {
      playClick(300, 0.03);
      document.querySelectorAll('[data-theme]').forEach((b) => b.classList.remove('active'));
      btn.classList.add('active');
      document.body.className = btn.dataset.theme || 'theme-90sdesk';
    });
  });

  // Busca e Abas da Estante
  [searchInput, catalogSearch].forEach((inp) => {
    if (!inp) return;
    ['keydown', 'keyup', 'keypress'].forEach((ev) => inp.addEventListener(ev, (e) => e.stopPropagation()));
    inp.addEventListener('input', () => {
      if (inp === searchInput) {
        searchQuery = inp.value;
        renderLimit = 100;
        renderRack();
      } else {
        renderCatalogModal();
      }
    });
  });

  document.querySelectorAll('#cart-filter-pills .rack-pill').forEach((pill) => {
    pill.addEventListener('click', () => {
      document.querySelectorAll('#cart-filter-pills .rack-pill').forEach((p) => p.classList.remove('active'));
      pill.classList.add('active');
      activeCategory = pill.dataset.cat || 'all';
      renderLimit = 100;
      renderRack();
    });
  });

  // Modais
  el('btn-catalog')?.addEventListener('click', () => {
    catalogModal?.classList.remove('hidden');
    renderCatalogModal();
    catalogSearch?.focus();
  });
  el('btn-open-cart-catalog')?.addEventListener('click', () => el('btn-catalog')?.click());
  el('btn-close-catalog')?.addEventListener('click', () => catalogModal?.classList.add('hidden'));
  catalogModal?.addEventListener('click', (e) => {
    if (e.target === catalogModal) catalogModal.classList.add('hidden');
  });

  el('btn-open-manual')?.addEventListener('click', () => manualModal?.classList.remove('hidden'));
  el('btn-close-manual')?.addEventListener('click', () => manualModal?.classList.add('hidden'));
  manualModal?.addEventListener('click', (e) => {
    if (e.target === manualModal) manualModal.classList.add('hidden');
  });

  // Bilíngue PT / EN completo
  function applyLang() {
    document.documentElement.lang = lang === 'en' ? 'en' : 'pt-BR';
    document.title = tr(
      'Game Boy DMG-01 & Color — Bancada Retrô com 1.291 Jogos | 4u-Labs',
      'Game Boy DMG-01 & Color — Retro Desk with 1,291 Games | 4u-Labs'
    );
    if (el('btn-lang')) el('btn-lang').textContent = lang === 'en' ? '🇺🇸 EN' : '🇧🇷 PT';

    document.querySelectorAll('[data-pt][data-en]').forEach((node) => {
      node.textContent = lang === 'en' ? node.dataset.en : node.dataset.pt;
    });
    document.querySelectorAll('[data-pt-title][data-en-title]').forEach((node) => {
      node.title = lang === 'en' ? node.dataset.enTitle : node.dataset.ptTitle;
    });

    if (searchInput) searchInput.placeholder = tr('🔍 Buscar nos 1.291 jogos...', '🔍 Search 1,291 games...');
    if (catalogSearch) catalogSearch.placeholder = tr('🔍 Filtrar cartucho por nome...', '🔍 Filter cartridge by name...');

    const manualBody = el('manual-body');
    if (manualBody) {
      manualBody.innerHTML = lang === 'en'
        ? `<h3 style="color:#a3e635;margin-bottom:6px;">🕹️ Game Boy DMG-01 Controls &amp; Multi-Touch</h3>
           <ul style="padding-left:18px;margin-bottom:14px;">
             <li><strong>8-Way D-Pad:</strong> slide your thumb smoothly on mobile or use <strong>Arrow Keys / WASD</strong> on PC.</li>
             <li><strong>Buttons A &amp; B:</strong> hold <strong>B (Z / J)</strong> to run and tap <strong>A (X / K / L)</strong> to jump simultaneously!</li>
             <li><strong>START &amp; SELECT:</strong> press <strong>Enter</strong> (Start) and <strong>Shift / Backspace</strong> (Select).</li>
             <li><strong>Turbo 2x (Fast-Forward):</strong> press <strong>Space</strong> or click the <strong>⏩ Turbo</strong> button (ideal for <em>Pokémon</em> RPGs!).</li>
           </ul>
           <h3 style="color:#a3e635;margin-bottom:6px;">💾 Save States, Palettes &amp; Custom ROMs</h3>
           <ul style="padding-left:18px;">
             <li>Use <strong>💾 Save (F5)</strong> and <strong>📂 Load (F8)</strong> to save and restore your progress at any moment.</li>
             <li>Switch between <strong>DMG Olive (1989)</strong>, <strong>Game Boy Pocket B&amp;W</strong>, <strong>GB Light</strong>, and <strong>Super Color</strong> palettes.</li>
             <li>Click <strong>📁 Open .GB</strong> to test any local <code>.gb</code>, <code>.gbc</code>, <code>.gba</code>, or <code>.zip</code> ROM!</li>
           </ul>`
        : `<h3 style="color:#a3e635;margin-bottom:6px;">🕹️ Controles Game Boy DMG-01 &amp; Multi-Touch</h3>
           <ul style="padding-left:18px;margin-bottom:14px;">
             <li><strong>D-Pad de 8 Direções:</strong> deslize o polegar no celular (inclusive diagonais) ou use <strong>Setas / WASD</strong> no PC.</li>
             <li><strong>Botões A &amp; B Simultâneos:</strong> segure <strong>B (Z / J)</strong> para correr e aperte <strong>A (X / K / L)</strong> para pular ao mesmo tempo!</li>
             <li><strong>START &amp; SELECT:</strong> use <strong>Enter</strong> (Start) e <strong>Shift / Backspace</strong> (Select).</li>
             <li><strong>Modo Turbo 2x (Fast-Forward):</strong> aperte <strong>Espaço</strong> ou clique em <strong>⏩ Turbo</strong> (perfeito para evoluir em <em>Pokémon</em>!).</li>
           </ul>
           <h3 style="color:#a3e635;margin-bottom:6px;">💾 Save States, Paletas LCD e ROMs Próprias</h3>
           <ul style="padding-left:18px;">
             <li>Use <strong>💾 Salvar (F5)</strong> e <strong>📂 Carregar (F8)</strong> na barra superior para salvar a partida em qualquer ponto.</li>
             <li>Alterne a tela entre <strong>DMG Verde Oliva (1989)</strong>, <strong>Game Boy Pocket P&amp;B</strong>, <strong>GB Light Azul</strong> e <strong>Super Color</strong>.</li>
             <li>Clique em <strong>📁 Abrir .GB</strong> para rodar qualquer arquivo <code>.gb</code>, <code>.gbc</code>, <code>.gba</code> ou <code>.zip</code> do seu dispositivo!</li>
           </ul>`;
    }

    renderRack();
    if (catalogModal && !catalogModal.classList.contains('hidden')) renderCatalogModal();
  }

  el('btn-lang')?.addEventListener('click', () => {
    lang = lang === 'en' ? 'pt' : 'en';
    try { localStorage.setItem(STORAGE_LANG, lang); } catch {}
    applyLang();
  });

  // Inicialização
  async function initDesk() {
    const params = new URLSearchParams(window.location.search);
    const urlRom = params.get('rom');

    try {
      const res = await fetch('roms.json');
      if (res.ok) {
        allRoms = await res.json();
      } else {
        throw new Error('roms.json fallback');
      }
    } catch {
      try {
        const resPhp = await fetch('roms.php');
        const data = await resPhp.json();
        if (data?.roms) allRoms = data.roms.map((r) => r.file);
      } catch {
        allRoms = CLASSICS.map((c) => c.file);
      }
    }

    const startRom = urlRom && allRoms.includes(urlRom) ? urlRom : 'Tetris (World) (Rev A).gb';
    updateCartridgeVisuals(startRom);
    applyLang();
    loadCartridgeFile(startRom);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initDesk);
  } else {
    initDesk();
  }
})();
