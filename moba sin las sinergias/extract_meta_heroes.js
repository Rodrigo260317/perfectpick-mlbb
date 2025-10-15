// Script para extraer héroes meta desde mlbb.io/hero-tier
// Este script se ejecuta en la consola del navegador de la página mlbb.io/hero-tier

function extractMetaHeroes() {
    const metaHeroes = {
        tierSS: [],
        tierS: [],
        lastUpdate: new Date().toISOString()
    };

    // Extraer Tier SS
    const ssTierSection = Array.from(document.querySelectorAll('.flex.flex-col.sm\\:flex-row.mb-4'))
        .find(el => el.textContent.includes('God-tier picks that define the meta'));
    
    if (ssTierSection) {
        const ssHeroes = ssTierSection.querySelectorAll('h3.font-semibold.text-xs');
        ssHeroes.forEach(heroEl => {
            const heroName = heroEl.textContent.trim();
            // Buscar el botón de lane activo (con clase bg-teal-600)
            const heroCard = heroEl.closest('a');
            if (heroCard) {
                metaHeroes.tierSS.push({
                    name: heroName,
                    id: heroName.toLowerCase().replace(/['\s]/g, '-').replace(/\./g, '')
                });
            }
        });
    }

    // Extraer Tier S
    const sTierSection = Array.from(document.querySelectorAll('.flex.flex-col.sm\\:flex-row.mb-4'))
        .find(el => el.textContent.includes('Top-tier picks that dominate the meta'));
    
    if (sTierSection) {
        const sHeroes = sTierSection.querySelectorAll('h3.font-semibold.text-xs');
        sHeroes.forEach(heroEl => {
            const heroName = heroEl.textContent.trim();
            const heroCard = heroEl.closest('a');
            if (heroCard) {
                metaHeroes.tierS.push({
                    name: heroName,
                    id: heroName.toLowerCase().replace(/['\s]/g, '-').replace(/\./g, '')
                });
            }
        });
    }

    console.log('Meta Heroes extraídos:');
    console.log(JSON.stringify(metaHeroes, null, 2));
    
    // Generar código para meta_heroes.js
    const code = `// Meta heroes extraídos automáticamente desde mlbb.io/hero-tier
// Última actualización: ${new Date().toLocaleString('es-ES')}

window.metaHeroes = ${JSON.stringify(metaHeroes, null, 2)};

// Auto-actualización desde API
(async function updateMetaHeroes() {
    try {
        console.log('🔄 Extrayendo héroes meta desde API de mlbb.io...');
        const response = await fetch('https://mlbb.io/api/hero/hero-tiers');
        const data = await response.json();
        
        if (data && data.tiers) {
            const tierSS = data.tiers.find(t => t.tier === 'SS');
            const tierS = data.tiers.find(t => t.tier === 'S');
            
            if (tierSS) {
                window.metaHeroes.tierSS = tierSS.heroes.map(h => ({
                    name: h.name,
                    id: h.slug || h.name.toLowerCase().replace(/[^a-z0-9]/g, '-')
                }));
            }
            
            if (tierS) {
                window.metaHeroes.tierS = tierS.heroes.map(h => ({
                    name: h.name,
                    id: h.slug || h.name.toLowerCase().replace(/[^a-z0-9]/g, '-')
                }));
            }
            
            window.metaHeroes.lastUpdate = new Date().toISOString();
            console.log('✅ Meta heroes actualizados desde API');
        }
    } catch (error) {
        console.log('⚠️ Error al actualizar meta heroes, usando datos base:', error);
    }
})();`;

    console.log('\n📋 Código generado para meta_heroes.js:');
    console.log(code);
    
    // Copiar al portapapeles
    navigator.clipboard.writeText(code).then(() => {
        console.log('\n✅ ¡Código copiado al portapapeles!');
        console.log('📝 Pega el contenido en meta_heroes.js');
    }).catch(err => {
        console.log('⚠️ No se pudo copiar automáticamente. Copia el código manualmente.');
    });
    
    return metaHeroes;
}

// Ejecutar automáticamente
console.log('🚀 Extractor de Héroes Meta - MLBB');
console.log('📍 Asegúrate de estar en: https://mlbb.io/hero-tier');
console.log('');
extractMetaHeroes();
