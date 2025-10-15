// Meta heroes que se extraen automáticamente de mlbb.io/hero-tier
// NOTA: mlbb.io usa renderizado client-side, por lo que la extracción automática
// puede fallar. Estos son datos de fallback actualizados manualmente.

window.metaHeroes = window.metaHeroes || {
  "tierSS": [
    // Marksman
    { "name": "Natan", "id": "natan" },
    { "name": "Melissa", "id": "melissa" },
    { "name": "Beatrix", "id": "beatrix" },
    // Assassin
    { "name": "Fanny", "id": "fanny" },
    { "name": "Ling", "id": "ling" },
    { "name": "Hayabusa", "id": "hayabusa" },
    // Mage
    { "name": "Lylia", "id": "lylia" },
    { "name": "Yve", "id": "yve" },
    { "name": "Valentina", "id": "valentina" },
    { "name": "Pharsa", "id": "pharsa" },
    // Tank/Fighter
    { "name": "Fredrinn", "id": "fredrinn" },
    { "name": "Esmeralda", "id": "esmeralda" }
  ],
  "tierS": [
    // Marksman
    { "name": "Obsidia", "id": "obsidia" },
    { "name": "Wanwan", "id": "wanwan" },
    { "name": "Ixia", "id": "ixia" },
    { "name": "Lesley", "id": "lesley" },
    { "name": "Clint", "id": "clint" },
    { "name": "Moskov", "id": "moskov" },
    // Mage
    { "name": "Cecilion", "id": "cecilion" },
    { "name": "Xavier", "id": "xavier" },
    { "name": "Kagura", "id": "kagura" },
    { "name": "Zhuxin", "id": "zhuxin" },
    { "name": "Nana", "id": "nana" },
    { "name": "Lunox", "id": "lunox" },
    // Fighter
    { "name": "Paquito", "id": "paquito" },
    { "name": "Yu Zhong", "id": "yu zhong" },
    { "name": "Julian", "id": "julian" },
    // Tank/Support
    { "name": "Lolita", "id": "lolita" },
    { "name": "Atlas", "id": "atlas" },
    { "name": "Mathilda", "id": "mathilda" },
    // Assassin
    { "name": "Lancelot", "id": "lancelot" },
    { "name": "Gusion", "id": "gusion" }
  ],
  "tierA": [],
  "lastUpdate": new Date().toISOString(),
  "loading": false,
  "error": null
};

// Función para extraer héroes meta desde mlbb.io usando su API oficial
window.fetchMetaHeroesFromWeb = async function() {
    try {
        console.log('🔄 Extrayendo héroes meta desde API de mlbb.io...');
        
        // Usar proxy CORS para acceder a la API
        const proxyUrl = 'https://api.allorigins.win/get?url=';
        const apiUrl = encodeURIComponent('https://mlbb.io/api/hero/hero-tiers');
        
        const response = await fetch(proxyUrl + apiUrl);
        
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        const proxyData = await response.json();
        const result = JSON.parse(proxyData.contents);
        
        if (!result.success || !result.data) {
            throw new Error('API response invalid');
        }
        
        const tempMeta = {
            tierSS: [],
            tierS: [],
            tierA: [],
            lastUpdate: new Date().toISOString(),
            loading: false,
            error: null
        };

        // Procesar los datos de la API
        result.data.forEach(heroData => {
            const tier = heroData.tier;
            
            // Tomar SS, S y A tiers
            if (tier !== 'SS' && tier !== 'S' && tier !== 'A') return;
            
            // Convertir nombre a ID (debe coincidir con heroesData)
            let heroId = heroData.hero_name.toLowerCase();
            
            // Casos especiales de nombres
            const specialNames = {
                'popol and kupa': 'popol y kupa',
                'yi sun-shin': 'yi sun-shin',
                'x.borg': 'x.borg',
                'luo yi': 'luo yi',
                'yu zhong': 'yu zhong',
                "chang'e": "chang'e",
                'lapu-lapu': 'lapu-lapu'
            };
            
            if (specialNames[heroId]) {
                heroId = specialNames[heroId];
            }
            
            const heroObj = { 
                name: heroData.hero_name, 
                id: heroId,
                lane: heroData.lane,
                role: heroData.role
            };
            
            if (tier === 'SS') {
                tempMeta.tierSS.push(heroObj);
            } else if (tier === 'S') {
                tempMeta.tierS.push(heroObj);
            } else if (tier === 'A') {
                tempMeta.tierA.push(heroObj);
            }
        });

        // Verificar que se encontraron héroes
        if (tempMeta.tierSS.length === 0 && tempMeta.tierS.length === 0 && tempMeta.tierA.length === 0) {
            throw new Error('No se encontraron héroes meta en la API');
        }

        window.metaHeroes = tempMeta;
        console.log(`✅ Meta heroes actualizados desde API: ${window.metaHeroes.tierSS.length} Tier SS, ${window.metaHeroes.tierS.length} Tier S, ${window.metaHeroes.tierA.length} Tier A`);
        console.log('📊 Tier SS:', window.metaHeroes.tierSS.map(h => h.name).join(', '));
        console.log('📊 Tier S:', window.metaHeroes.tierS.map(h => h.name).join(', '));
        
        return window.metaHeroes;
        
    } catch (error) {
        console.error('❌ Error al extraer meta heroes:', error);
        
        // Fallback: mantener los datos iniciales si falla la extracción
        window.metaHeroes.lastUpdate = new Date().toISOString();
        window.metaHeroes.loading = false;
        window.metaHeroes.error = error.message;
        
        console.warn('⚠️ No se pudo extraer desde mlbb.io, usando datos predeterminados');
        return window.metaHeroes;
    }
}

// Función para obtener todos los héroes meta combinados
window.getAllMetaHeroes = function() {
    // Primero SS y S, luego A si es necesario
    return [...window.metaHeroes.tierSS, ...window.metaHeroes.tierS, ...window.metaHeroes.tierA];
};

// Función para verificar si un héroe es meta
window.isMetaHero = function(heroId) {
    const allMeta = window.getAllMetaHeroes();
    return allMeta.some(h => h.id === heroId);
};

// Función para obtener el tier de un héroe
window.getHeroTier = function(heroId) {
    if (window.metaHeroes.tierSS.some(h => h.id === heroId)) return 'SS';
    if (window.metaHeroes.tierS.some(h => h.id === heroId)) return 'S';
    if (window.metaHeroes.tierA.some(h => h.id === heroId)) return 'A';
    return null;
};

// Alias para compatibilidad
window.getMetaTier = window.getHeroTier;

// Auto-ejecutar cuando se carga el script (intentar actualizar desde la web)
(function() {
    console.log('🚀 Iniciando extracción de héroes meta...');
    window.fetchMetaHeroesFromWeb().then(() => {
        console.log('📊 Héroes meta disponibles:', window.getAllMetaHeroes().length);
    });
})();

