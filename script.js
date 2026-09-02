/* ==========================================================================
   WEBLIO CONFIGURATOR STUDIO - CORE LOGIC & REAL-TIME PREVIEW ENGINE
   ========================================================================== */

/** Central Application Configuration State */
const config = {
    businessType: 'restaurant',
    preset: 'modern-restaurant',
    style: 'modern',
    colors: {
        primary: '#FFBE2E',
        secondary: '#E5A720',
        accent: '#00FF88',
        bg: '#0C0D0B',
        surface: '#1B1D18',
        card: '#22251D',
        text: '#FFFFFF',
        muted: '#B8B8B8',
        border: '#33362d',
        button: '#FFBE2E'
    },
    typography: {
        headingFont: 'Sora',
        bodyFont: 'Inter',
        headingScale: 1.0,
        bodyScale: 16,
        textAlign: 'center'
    },
    shapes: {
        radius: 16,
        btnRadius: 12,
        shadowStrength: 0.5
    },
    navbar: {
        style: 'classic',
        backdrop: 'glass',
        isSticky: true
    },
    hero: {
        layout: 'centered',
        overlayStrength: 0.7,
        buttonCount: 2
    },
    buttons: {
        hoverAnimation: 'glow'
    },
    cards: {
        hoverEffect: 'lift'
    },
    sections: {
        hero: true,
        about: true,
        services: true,
        gallery: true,
        testimonials: true,
        pricing: true,
        hours: true,
        visit: true,
        contact: true,
        footer: true
    },
    content: {
        businessName: 'Your Company',
        logoIcon: '🏪',
        heroTitle: 'WHEN YOU WANT MORE THAN USUAL',
        heroDesc: 'Experience handcrafted perfection, premium ingredients, and lightning-fast customer service every day.',
        phone: '+37061488844',
        email: 'info@yourcompany.lt',
        address: 'Verkių g. 1, Vilnius',
        ctaText: 'ŽIŪRĖTI MENIU ↗'
    },
    fx: {
        intensity: 'modern',
        speed: 1.0
    }
};

/** Business Template Content Dictionary */
const businessData = {
    restaurant: {
        name: 'Gourmet Kitchen',
        icon: '🍽️',
        eyebrow: 'FINE ASIAN & JAPANESE CUISINE',
        heroTitle: 'WHEN YOU WANT MORE THAN USUAL',
        heroDesc: 'Fresh sushi rolls, piping hot wok dishes, ramen soups, and handcrafted chef specials prepared daily.',
        aboutTitle: 'Authentic Flavors, Modern Culinary Craft',
        aboutDesc: 'Our kitchen combines traditional Asian techniques with locally sourced premium ingredients to bring you an unforgettable dining experience.',
        heroBg: 'https://images.unsplash.com/photo-1579871494447-9811cf80d66c?auto=format&fit=crop&w=1200&q=80',
        dishImg: 'https://www.sushiout.lt/storage/734/conversions/01KPASKENVKXEKV22JS10T7ZSE-thumb.webp',
        services: [
            { name: 'Wok Shrimp Oyster', desc: 'Udon noodles, tiger shrimp, crisp vegetables, oyster glaze.', price: '10.50 €', img: 'https://www.sushiout.lt/storage/734/conversions/01KPASKENVKXEKV22JS10T7ZSE-thumb.webp' },
            { name: 'OUT Roll Special', desc: 'Fresh salmon, avocado, cream cheese, masago caviar.', price: '14.00 €', img: 'https://www.sushiout.lt/storage/198/conversions/01JVH9G4SFBDKMXA6FE84WN2P3-thumb.webp' },
            { name: 'XXL Philadelphia', desc: 'Large portion: salmon, double cream cheese, cucumber, rice.', price: '10.40 €', img: 'https://www.sushiout.lt/storage/580/conversions/01JXHA14S1HD7T8XRX7AD5GJYM-thumb.webp' },
            { name: 'Sake Tempura Roll', desc: 'Warm crispy panko roll with baked salmon & unagi sauce.', price: '9.90 €', img: 'https://www.sushiout.lt/storage/553/conversions/01JXCN7ZNDGZ8002MYAXQTXRXB-thumb.webp' },
            { name: 'Traditional Ramen', desc: 'Rich broth, wheat noodles, bamboo, soft boiled egg, scallions.', price: '6.00 €', img: 'https://www.sushiout.lt/storage/84/conversions/1.-RAMEN-thumb.webp' },
            { name: 'Spring Rolls Set', desc: 'Crispy vegetable rolls served with sweet chili dipping sauce.', price: '5.00 €', img: 'https://www.sushiout.lt/storage/682/conversions/01KC7MDYKBC72RYCF8WK9QGRZS-thumb.webp' }
        ],
        gallery: [
            'https://images.unsplash.com/photo-1611143669185-af224c5e3252?auto=format&fit=crop&w=600&q=80',
            'https://images.unsplash.com/photo-1553621042-f6e147245754?auto=format&fit=crop&w=600&q=80',
            'https://images.unsplash.com/photo-1563245372-f21724e3856d?auto=format&fit=crop&w=600&q=80',
            'https://images.unsplash.com/photo-1569718212165-3a8278d5f624?auto=format&fit=crop&w=600&q=80'
        ],
        testimonials: [
            { quote: 'Best sushi and wok in town. Always super fresh and nicely packaged!', author: 'Mantas K.' },
            { quote: 'The OUT rolls and ramen are absolutely top tier. Highly recommended!', author: 'Elena S.' },
            { quote: 'Quick delivery and incredible flavor. Our go-to Friday night dinner spot.', author: 'Tomas P.' }
        ]
    },
    barber: {
        name: 'Apex Barber Club',
        icon: '💈',
        eyebrow: 'PREMIUM MENS GROOMING',
        heroTitle: 'MASTER HAIRCUTS & HOT TOWEL SHAVES',
        heroDesc: 'Precision fades, classic beard trims, and luxury grooming crafted by master barbers.',
        aboutTitle: 'Where Classic Tradition Meets Modern Edge',
        aboutDesc: 'Step into a relaxed, gentleman’s atmosphere with complimentary craft beverages, hot towel treatments, and expert styling.',
        heroBg: 'https://images.unsplash.com/photo-1503951914875-452162b0f3f1?auto=format&fit=crop&w=1200&q=80',
        dishImg: 'https://images.unsplash.com/photo-1622286342621-4bd786c2447c?auto=format&fit=crop&w=400&q=80',
        services: [
            { name: 'Executive Haircut', desc: 'Precision cut, neck shave, wash, and custom pomade styling.', price: '25.00 €', img: 'https://images.unsplash.com/photo-1599351431202-1e0f0137899a?auto=format&fit=crop&w=600&q=80' },
            { name: 'Beard Sculpt & Trim', desc: 'Beard shaping, razor line-up, and hot oil massage treatment.', price: '18.00 €', img: 'https://images.unsplash.com/photo-1621605815971-fbc98d665033?auto=format&fit=crop&w=600&q=80' },
            { name: 'Hot Towel Shave', desc: 'Traditional straight razor shave with essential oils & face massage.', price: '22.00 €', img: 'https://images.unsplash.com/photo-1517832606589-715069675376?auto=format&fit=crop&w=600&q=80' },
            { name: 'Full Combo Package', desc: 'Signature haircut, beard overhaul, scalp massage & facial mask.', price: '38.00 €', img: 'https://images.unsplash.com/photo-1503951914875-452162b0f3f1?auto=format&fit=crop&w=600&q=80' }
        ],
        gallery: [
            'https://images.unsplash.com/photo-1503951914875-452162b0f3f1?auto=format&fit=crop&w=600&q=80',
            'https://images.unsplash.com/photo-1621605815971-fbc98d665033?auto=format&fit=crop&w=600&q=80',
            'https://images.unsplash.com/photo-1599351431202-1e0f0137899a?auto=format&fit=crop&w=600&q=80',
            'https://images.unsplash.com/photo-1517832606589-715069675376?auto=format&fit=crop&w=600&q=80'
        ],
        testimonials: [
            { quote: 'Best fade in Vilnius hands down. Great atmosphere and attention to detail.', author: 'Lukas B.' },
            { quote: 'The hot towel shave experience is incredible. Worth every cent.', author: 'Darius V.' }
        ]
    },
    auto: {
        name: 'Precision Auto Works',
        icon: '🔧',
        eyebrow: 'EXPERT AUTOMOTIVE REPAIR',
        heroTitle: 'CERTIFIED REPAIR & DIAGNOSTICS',
        heroDesc: 'Engine tuning, brake service, wheel alignment, and computerized system diagnostics.',
        aboutTitle: 'State-of-the-Art Workshop & Certified Technicians',
        aboutDesc: 'We keep your vehicle operating at peak safety and efficiency using original equipment parts and advanced diagnostic tech.',
        heroBg: 'https://images.unsplash.com/photo-1486006920555-c77dce18193b?auto=format&fit=crop&w=1200&q=80',
        dishImg: 'https://images.unsplash.com/photo-1617814076367-b759c7d7e738?auto=format&fit=crop&w=400&q=80',
        services: [
            { name: 'Computer Diagnostics', desc: 'Complete OBD-II scan, electrical fault tracing, live sensor check.', price: '35.00 €', img: 'https://images.unsplash.com/photo-1486006920555-c77dce18193b?auto=format&fit=crop&w=600&q=80' },
            { name: 'Brake System Service', desc: 'Pad & rotor replacement, fluid flush, caliper check.', price: '85.00 €', img: 'https://images.unsplash.com/photo-1617814076367-b759c7d7e738?auto=format&fit=crop&w=600&q=80' },
            { name: 'Full Synthetic Oil Change', desc: 'Filter replacement, 5W-30 synthetic oil, multi-point inspection.', price: '50.00 €', img: 'https://images.unsplash.com/photo-1580273916550-e323be2ae537?auto=format&fit=crop&w=600&q=80' }
        ],
        gallery: [
            'https://images.unsplash.com/photo-1486006920555-c77dce18193b?auto=format&fit=crop&w=600&q=80',
            'https://images.unsplash.com/photo-1617814076367-b759c7d7e738?auto=format&fit=crop&w=600&q=80',
            'https://images.unsplash.com/photo-1580273916550-e323be2ae537?auto=format&fit=crop&w=600&q=80',
            'https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=600&q=80'
        ],
        testimonials: [
            { quote: 'Honest mechanics who diagnosed my check engine light in 10 minutes. Very fair pricing!', author: 'Gintaras K.' }
        ]
    },
    gym: {
        name: 'Iron Pulse Fitness',
        icon: '🏋️‍♂️',
        eyebrow: 'HIGH PERFORMANCE CLUB',
        heroTitle: 'FORGE YOUR ULTIMATE PHYSIQUE',
        heroDesc: '24/7 gym access, elite free weights, cardio zone, and group training classes.',
        aboutTitle: 'Train Harder in a Modern Community Gym',
        aboutDesc: 'Equipped with Hammer Strength equipment, turf functional zones, sauna, and dedicated personal trainers.',
        heroBg: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=1200&q=80',
        dishImg: 'https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?auto=format&fit=crop&w=400&q=80',
        services: [
            { name: 'Monthly All-Access Pass', desc: '24/7 gym access, locker usage, sauna access, free group classes.', price: '39.00 €', img: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=600&q=80' },
            { name: 'Personal Training Package', desc: '1-on-1 custom coaching, nutrition plan, 10 private sessions.', price: '220.00 €', img: 'https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?auto=format&fit=crop&w=600&q=80' }
        ],
        gallery: [
            'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=600&q=80',
            'https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?auto=format&fit=crop&w=600&q=80'
        ],
        testimonials: [
            { quote: 'Top-tier equipment and awesome community. The 24/7 access is super convenient.', author: 'Karolis P.' }
        ]
    }
};

/** Palette Presets Library */
const colorPalettes = [
    { id: 'gold', name: 'Gold & Dark', p: '#FFBE2E', s: '#E5A720', a: '#00FF88', bg: '#0C0D0B', card: '#22251D' },
    { id: 'cyber', name: 'Cyber Blue', p: '#00F2FE', s: '#4FACFE', a: '#7F00FF', bg: '#090A0F', card: '#141824' },
    { id: 'emerald', name: 'Emerald', p: '#00FF88', s: '#00B359', a: '#00F2FE', bg: '#080E0A', card: '#111F17' },
    { id: 'crimson', name: 'Crimson Red', p: '#FF3366', s: '#E60039', a: '#FF8800', bg: '#0F080A', card: '#211015' },
    { id: 'neon-purple', name: 'Neon Purple', p: '#A855F7', s: '#9333EA', a: '#00F2FE', bg: '#0D0814', card: '#1B1229' },
    { id: 'orange', name: 'Solar Orange', p: '#FF6B00', s: '#E05300', a: '#FFBE2E', bg: '#0F0B08', card: '#211812' }
];

/** Style Presets Library */
const stylePresets = [
    { id: 'modern', name: 'Modern Dark', radius: 16, btnRadius: 12, shadow: 0.5 },
    { id: 'minimal', name: 'Minimal Sharp', radius: 0, btnRadius: 0, shadow: 0 },
    { id: 'luxury', name: 'Luxury Elegant', radius: 24, btnRadius: 99, shadow: 0.8 },
    { id: 'futuristic', name: 'Futuristic Cyber', radius: 8, btnRadius: 4, shadow: 0.9 },
    { id: 'glass', name: 'Glassmorphism', radius: 20, btnRadius: 16, shadow: 0.6 }
];

/** Full Complete Design Presets */
const completePresets = {
    'modern-restaurant': {
        businessType: 'restaurant',
        style: 'modern',
        palette: 'gold',
        headingFont: 'Sora',
        bodyFont: 'Inter',
        heroLayout: 'centered',
        content: { businessName: 'Your Company', heroTitle: 'WHEN YOU WANT MORE THAN USUAL', heroDesc: 'Fresh sushi, wok, ramen and handcrafted delicacies made fresh daily.' }
    },
    'luxury-barber': {
        businessType: 'barber',
        style: 'luxury',
        palette: 'gold',
        headingFont: 'Playfair Display',
        bodyFont: 'DM Sans',
        heroLayout: 'split',
        content: { businessName: 'Apex Barber Club', heroTitle: 'MASTER HAIRCUTS & HOT SHAVES', heroDesc: 'Precision cuts and gentleman grooming in a relaxed atmosphere.' }
    },
    'dark-auto': {
        businessType: 'auto',
        style: 'futuristic',
        palette: 'cyber',
        headingFont: 'Orbitron',
        bodyFont: 'Inter',
        heroLayout: 'split',
        content: { businessName: 'Precision Auto Works', heroTitle: 'CERTIFIED REPAIR & DIAGNOSTICS', heroDesc: 'Advanced computer diagnostics and expert mechanical services.' }
    },
    'neon-gym': {
        businessType: 'gym',
        style: 'neon',
        palette: 'emerald',
        headingFont: 'Oswald',
        bodyFont: 'Roboto',
        heroLayout: 'centered',
        content: { businessName: 'Iron Pulse Gym', heroTitle: 'FORGE YOUR ULTIMATE PHYSIQUE', heroDesc: '24/7 fitness access, free weights, and elite personal training.' }
    }
};

/* ==========================================================================
   INITIALIZATION & DOM EVENT BINDING
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
    initUI();
    renderPalettePresets();
    renderStylePresets();
    bindEvents();
    syncAll();
});

function initUI() {
    // Populate form fields from initial state
    document.querySelector('#inp-business-name').value = config.content.businessName;
    document.querySelector('#inp-hero-title').value = config.content.heroTitle;
    document.querySelector('#inp-hero-desc').value = config.content.heroDesc;
    document.querySelector('#inp-phone').value = config.content.phone;
    document.querySelector('#inp-email').value = config.content.email;
    document.querySelector('#inp-address').value = config.content.address;
    document.querySelector('#inp-cta').value = config.content.ctaText;

    // Color pickers & Hex values
    updateColorInputs();
}

function renderPalettePresets() {
    const container = document.querySelector('#palette-presets-grid');
    if (!container) return;

    container.innerHTML = colorPalettes.map(pal => `
        <div class="palette-card ${config.preset === pal.id ? 'is-active' : ''}" data-palette="${pal.id}">
            <div class="palette-swatches">
                <span style="background: ${pal.p}"></span>
                <span style="background: ${pal.s}"></span>
                <span style="background: ${pal.a}"></span>
                <span style="background: ${pal.bg}"></span>
            </div>
            <span class="palette-name">${pal.name}</span>
        </div>
    `).join('');
}

function renderStylePresets() {
    const container = document.querySelector('#style-presets-grid');
    if (!container) return;

    container.innerHTML = stylePresets.map(st => `
        <button type="button" class="style-btn ${config.style === st.id ? 'is-active' : ''}" data-style="${st.id}">
            ${st.name}
        </button>
    `).join('');
}

function updateColorInputs() {
    Object.keys(config.colors).forEach(key => {
        const picker = document.querySelector(`#c-${key}`);
        const hexInp = document.querySelector(`#hex-${key}`);
        if (picker && config.colors[key]) picker.value = config.colors[key];
        if (hexInp && config.colors[key]) hexInp.value = config.colors[key];
    });
}

function bindEvents() {
    // Tab switching
    document.querySelectorAll('.tab-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('is-active'));
            document.querySelectorAll('.tab-pane').forEach(p => b => p.classList.remove('is-active'));
            btn.classList.add('is-active');
            const targetPane = document.querySelector(`#pane-${btn.dataset.tab}`);
            if (targetPane) targetPane.classList.add('is-active');
        });
    });

    // Business type selector
    const bizSelect = document.querySelector('#business-type-select');
    if (bizSelect) {
        bizSelect.addEventListener('change', (e) => {
            config.businessType = e.target.value;
            const tpl = businessData[config.businessType] || businessData.restaurant;
            config.content.businessName = tpl.name;
            config.content.heroTitle = tpl.heroTitle;
            config.content.heroDesc = tpl.heroDesc;
            config.content.logoIcon = tpl.icon;
            initUI();
            syncAll();
        });
    }

    // Palette Click
    document.addEventListener('click', (e) => {
        const palCard = e.target.closest('[data-palette]');
        if (palCard) {
            const pal = colorPalettes.find(p => p.id === palCard.dataset.palette);
            if (pal) {
                config.colors.primary = pal.p;
                config.colors.secondary = pal.s;
                config.colors.accent = pal.a;
                config.colors.bg = pal.bg;
                config.colors.card = pal.card;
                config.colors.button = pal.p;
                updateColorInputs();
                renderPalettePresets();
                syncAll();
            }
        }

        const styleBtn = e.target.closest('[data-style]');
        if (styleBtn) {
            const st = stylePresets.find(s => s.id === styleBtn.dataset.style);
            if (st) {
                config.style = st.id;
                config.shapes.radius = st.radius;
                config.shapes.btnRadius = st.btnRadius;
                config.shapes.shadowStrength = st.shadow;
                document.querySelector('#corner-radius').value = st.radius;
                document.querySelector('#corner-radius-val').textContent = `${st.radius}px`;
                document.querySelector('#button-radius').value = st.btnRadius;
                document.querySelector('#button-radius-val').textContent = `${st.btnRadius}px`;
                renderStylePresets();
                syncAll();
            }
        }
    });

    // Color Pickers & Hex Inputs
    document.querySelectorAll('input[type="color"]').forEach(inp => {
        inp.addEventListener('input', (e) => {
            const prop = e.target.dataset.colorProp;
            config.colors[prop] = e.target.value;
            const hexInp = document.querySelector(`#hex-${prop}`);
            if (hexInp) hexInp.value = e.target.value;
            syncAll();
        });
    });

    document.querySelectorAll('.hex-input').forEach(inp => {
        inp.addEventListener('change', (e) => {
            const target = e.target.dataset.colorTarget;
            if (/^#[0-9A-F]{6}$/i.test(e.target.value)) {
                config.colors[target] = e.target.value;
                const picker = document.querySelector(`#c-${target}`);
                if (picker) picker.value = e.target.value;
                syncAll();
            }
        });
    });

    // Typography
    const headingFont = document.querySelector('#heading-font-select');
    if (headingFont) {
        headingFont.addEventListener('change', (e) => {
            config.typography.headingFont = e.target.value;
            syncAll();
        });
    }

    const bodyFont = document.querySelector('#body-font-select');
    if (bodyFont) {
        bodyFont.addEventListener('change', (e) => {
            config.typography.bodyFont = e.target.value;
            syncAll();
        });
    }

    const headingScale = document.querySelector('#heading-scale');
    if (headingScale) {
        headingScale.addEventListener('input', (e) => {
            config.typography.headingScale = parseFloat(e.target.value);
            document.querySelector('#heading-scale-val').textContent = `${e.target.value}x`;
            syncAll();
        });
    }

    const heroLayout = document.querySelector('#hero-layout-select');
    if (heroLayout) {
        heroLayout.addEventListener('change', (e) => {
            config.hero.layout = e.target.value;
            syncAll();
        });
    }

    // Corner Radius
    const cornerRadius = document.querySelector('#corner-radius');
    if (cornerRadius) {
        cornerRadius.addEventListener('input', (e) => {
            config.shapes.radius = parseInt(e.target.value, 10);
            document.querySelector('#corner-radius-val').textContent = `${e.target.value}px`;
            syncAll();
        });
    }

    const buttonRadius = document.querySelector('#button-radius');
    if (buttonRadius) {
        buttonRadius.addEventListener('input', (e) => {
            config.shapes.btnRadius = parseInt(e.target.value, 10);
            document.querySelector('#button-radius-val').textContent = `${e.target.value}px`;
            syncAll();
        });
    }

    // Section Toggles
    document.querySelectorAll('[data-section-toggle]').forEach(chk => {
        chk.addEventListener('change', (e) => {
            const sec = e.target.dataset.sectionToggle;
            config.sections[sec] = e.target.checked;
            syncAll();
        });
    });

    // Content Text Inputs
    document.querySelectorAll('[data-content-field]').forEach(inp => {
        inp.addEventListener('input', (e) => {
            const field = e.target.dataset.contentField;
            config.content[field] = e.target.value;
            syncAll();
        });
    });

    // Device Viewport Switcher
    document.querySelectorAll('.device-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            document.querySelectorAll('.device-btn').forEach(b => b.classList.remove('is-active'));
            btn.classList.add('is-active');
            const frame = document.querySelector('#device-frame');
            if (frame) {
                frame.className = `device-frame device-${btn.dataset.device}`;
            }
        });
    });

    // Quick Actions
    document.querySelector('#btn-randomize')?.addEventListener('click', randomizeDesign);
    document.querySelector('#btn-export-json')?.addEventListener('click', openExportModal);
    document.querySelector('#btn-save-local')?.addEventListener('click', saveToLocal);
    document.querySelector('#btn-load-local')?.addEventListener('click', loadFromLocal);
    document.querySelector('#btn-reset-all')?.addEventListener('click', resetDefaults);

    // Preset dropdown
    document.querySelector('#preset-select')?.addEventListener('change', (e) => {
        const prKey = e.target.value;
        if (completePresets[prKey]) {
            const pr = completePresets[prKey];
            config.businessType = pr.businessType;
            config.style = pr.style;
            config.typography.headingFont = pr.headingFont;
            config.typography.bodyFont = pr.bodyFont;
            config.hero.layout = pr.heroLayout;
            Object.assign(config.content, pr.content);

            const bizSelectEl = document.querySelector('#business-type-select');
            if (bizSelectEl) bizSelectEl.value = pr.businessType;

            initUI();
            syncAll();
        }
    });

    // Modal Close
    document.querySelector('#modal-close-btn')?.addEventListener('click', closeExportModal);
    document.querySelector('#modal-close-backdrop')?.addEventListener('click', closeExportModal);
    document.querySelector('#modal-copy-btn')?.addEventListener('click', copyJSONToClipboard);
    document.querySelector('#modal-download-btn')?.addEventListener('click', downloadJSONFile);

    // Summary buttons
    document.querySelector('#sum-copy-json')?.addEventListener('click', copyJSONToClipboard);
    document.querySelector('#sum-download-json')?.addEventListener('click', downloadJSONFile);

    // Mobile Sidebar Drawer Toggle
    document.querySelector('#btn-toggle-sidebar')?.addEventListener('click', () => {
        document.querySelector('#config-sidebar')?.classList.toggle('is-open');
    });
}

/* ==========================================================================
   REAL-TIME SYNCHRONIZER
   ========================================================================== */

function syncAll() {
    updatePreviewCSSVars();
    updatePreviewContent();
    updateSummaryDrawer();
}

function updatePreviewCSSVars() {
    const preview = document.querySelector('#website-preview');
    if (!preview) return;

    preview.style.setProperty('--p-primary', config.colors.primary);
    preview.style.setProperty('--p-secondary', config.colors.secondary);
    preview.style.setProperty('--p-accent', config.colors.accent);
    preview.style.setProperty('--p-bg', config.colors.bg);
    preview.style.setProperty('--p-surface', config.colors.surface);
    preview.style.setProperty('--p-card', config.colors.card);
    preview.style.setProperty('--p-text', config.colors.text);
    preview.style.setProperty('--p-muted', config.colors.muted);
    preview.style.setProperty('--p-border', config.colors.border);
    preview.style.setProperty('--p-button', config.colors.button);
    preview.style.setProperty('--p-button-hover', config.colors.primary);

    preview.style.setProperty('--p-radius', `${config.shapes.radius}px`);
    preview.style.setProperty('--p-btn-radius', `${config.shapes.btnRadius}px`);
    preview.style.setProperty('--p-font-heading', `'${config.typography.headingFont}', sans-serif`);
    preview.style.setProperty('--p-font-body', `'${config.typography.bodyFont}', sans-serif`);
    preview.style.setProperty('--p-heading-scale', config.typography.headingScale);

    // Hero Overlay
    preview.style.setProperty('--p-hero-overlay', `rgba(0, 0, 0, ${config.hero.overlayStrength})`);
}

function updatePreviewContent() {
    const tpl = businessData[config.businessType] || businessData.restaurant;

    // Brand Name & Logo
    document.querySelector('#prev-brand-name').textContent = config.content.businessName || tpl.name;
    document.querySelector('#prev-footer-title').textContent = config.content.businessName || tpl.name;
    document.querySelector('#prev-logo-icon').textContent = config.content.logoIcon || tpl.icon;
    document.querySelector('.prev-footer-brand .prev-logo-icon').textContent = config.content.logoIcon || tpl.icon;

    // Hero Section
    document.querySelector('#prev-eyebrow').textContent = tpl.eyebrow;
    document.querySelector('#prev-hero-title').textContent = config.content.heroTitle || tpl.heroTitle;
    document.querySelector('#prev-hero-desc').textContent = config.content.heroDesc || tpl.heroDesc;
    document.querySelector('#prev-hero-btn1').textContent = config.content.ctaText || 'ŽIŪRĖTI MENIU ↗';

    const heroBgImg = document.querySelector('#prev-hero-bg-img');
    if (heroBgImg) heroBgImg.src = tpl.heroBg;

    const heroDishImg = document.querySelector('#prev-hero-dish-img');
    if (heroDishImg) heroDishImg.src = tpl.dishImg;

    const heroSection = document.querySelector('#prev-hero');
    if (heroSection) {
        heroSection.className = `prev-hero layout-${config.hero.layout}`;
    }

    // About Section
    document.querySelector('#prev-about-title').textContent = tpl.aboutTitle;
    document.querySelector('#prev-about-desc').textContent = tpl.aboutDesc;
    const aboutImg = document.querySelector('#prev-about-img');
    if (aboutImg) aboutImg.src = tpl.heroBg;

    // Contact Details
    document.querySelector('#prev-contact-phone').textContent = config.content.phone;
    document.querySelector('#prev-phone-link').textContent = `📞 ${config.content.phone}`;
    document.querySelector('#prev-contact-email').textContent = config.content.email;
    document.querySelector('#prev-contact-address').textContent = config.content.address;
    document.querySelector('#prev-address-text').textContent = config.content.address;
    document.querySelector('#prev-location-title').textContent = config.content.address;

    // Services Grid
    renderServicesGrid(tpl.services);

    // Gallery Grid
    renderGalleryGrid(tpl.gallery);

    // Reviews Grid
    renderTestimonialsGrid(tpl.testimonials);

    // Section Visibility Toggles
    Object.keys(config.sections).forEach(secKey => {
        const secEl = document.querySelector(`#prev-${secKey}`);
        if (secEl) {
            secEl.classList.toggle('is-hidden', !config.sections[secKey]);
        }
    });
}

function renderServicesGrid(services) {
    const grid = document.querySelector('#prev-services-grid');
    if (!grid || !services) return;

    grid.innerHTML = services.map(srv => `
        <article class="prev-card">
            <div class="prev-card-media">
                <img src="${srv.img}" alt="${srv.name}" loading="lazy">
            </div>
            <h3>${srv.name}</h3>
            <p>${srv.desc}</p>
            <div class="prev-card-bottom">
                <span class="prev-card-price">${srv.price}</span>
                <a href="#prev-contact" class="prev-btn prev-btn-secondary" style="padding: 0.4rem 0.8rem; font-size: 0.78rem;">Select</a>
            </div>
        </article>
    `).join('');
}

function renderGalleryGrid(images) {
    const grid = document.querySelector('#prev-gallery-grid');
    if (!grid || !images) return;

    grid.innerHTML = images.map(img => `
        <div class="prev-gallery-item">
            <img src="${img}" alt="Gallery Showcase" loading="lazy">
        </div>
    `).join('');
}

function renderTestimonialsGrid(reviews) {
    const grid = document.querySelector('#prev-reviews-grid');
    if (!grid || !reviews) return;

    grid.innerHTML = reviews.map(rev => `
        <div class="prev-review-card">
            <div class="prev-stars">★★★★★</div>
            <p>"${rev.quote}"</p>
            <span class="prev-review-author">— ${rev.author}</span>
        </div>
    `).join('');
}

function updateSummaryDrawer() {
    document.querySelector('#sum-business').textContent = config.businessType.toUpperCase();
    document.querySelector('#sum-style').textContent = config.style.toUpperCase();
    document.querySelector('#sum-color-hex').textContent = config.colors.primary.toUpperCase();

    const swatch = document.querySelector('#sum-color-swatch');
    if (swatch) swatch.style.background = config.colors.primary;

    document.querySelector('#sum-font-heading').textContent = config.typography.headingFont;
    document.querySelector('#sum-font-body').textContent = config.typography.bodyFont;
    document.querySelector('#sum-hero-layout').textContent = config.hero.layout;
    document.querySelector('#sum-radius').textContent = `${config.shapes.radius}px`;

    const activeSecCount = Object.values(config.sections).filter(Boolean).length;
    document.querySelector('#sum-active-sections').textContent = `${activeSecCount} / ${Object.keys(config.sections).length}`;
}

/* ==========================================================================
   RANDOM DESIGN GENERATOR
   ========================================================================== */

function randomizeDesign() {
    const randomPalette = colorPalettes[Math.floor(Math.random() * colorPalettes.length)];
    const randomStyle = stylePresets[Math.floor(Math.random() * stylePresets.length)];
    const fonts = ['Sora', 'Space Grotesk', 'Montserrat', 'Playfair Display', 'Orbitron', 'Inter', 'Poppins'];
    const heroLayouts = ['centered', 'split', 'fullscreen'];

    config.colors.primary = randomPalette.p;
    config.colors.secondary = randomPalette.s;
    config.colors.accent = randomPalette.a;
    config.colors.bg = randomPalette.bg;
    config.colors.card = randomPalette.card;
    config.colors.button = randomPalette.p;

    config.style = randomStyle.id;
    config.shapes.radius = randomStyle.radius;
    config.shapes.btnRadius = randomStyle.btnRadius;
    config.shapes.shadowStrength = randomStyle.shadow;

    config.typography.headingFont = fonts[Math.floor(Math.random() * fonts.length)];
    config.hero.layout = heroLayouts[Math.floor(Math.random() * heroLayouts.length)];

    updateColorInputs();
    renderPalettePresets();
    renderStylePresets();
    syncAll();
}

/* ==========================================================================
   EXPORT & LOCAL STORAGE
   ========================================================================== */

function openExportModal() {
    const modal = document.querySelector('#export-modal');
    const codeBlock = document.querySelector('#json-code-block');
    if (!modal || !codeBlock) return;

    codeBlock.textContent = JSON.stringify(config, null, 2);
    modal.classList.add('is-open');
    modal.setAttribute('aria-hidden', 'false');
}

function closeExportModal() {
    const modal = document.querySelector('#export-modal');
    if (!modal) return;
    modal.classList.remove('is-open');
    modal.setAttribute('aria-hidden', 'true');
}

function copyJSONToClipboard() {
    const jsonStr = JSON.stringify(config, null, 2);
    navigator.clipboard.writeText(jsonStr).then(() => {
        alert('⚡ JSON configuration copied to clipboard!');
    });
}

function downloadJSONFile() {
    const jsonStr = JSON.stringify(config, null, 2);
    const blob = new Blob([jsonStr], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `weblio-${config.businessType}-config.json`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
}

function saveToLocal() {
    localStorage.setItem('weblio_studio_config', JSON.stringify(config));
    alert('💾 Configuration saved to browser storage!');
}

function loadFromLocal() {
    const saved = localStorage.getItem('weblio_studio_config');
    if (saved) {
        try {
            Object.assign(config, JSON.parse(saved));
            initUI();
            syncAll();
            alert('📂 Saved configuration loaded!');
        } catch (e) {
            alert('Error loading configuration.');
        }
    } else {
        alert('No saved configuration found in this browser.');
    }
}

function resetDefaults() {
    if (confirm('Are you sure you want to reset all configurations to default settings?')) {
        localStorage.removeItem('weblio_studio_config');
        window.location.reload();
    }
}

