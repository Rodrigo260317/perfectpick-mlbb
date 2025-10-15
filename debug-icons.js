// DEBUG: Verificar carga de heroIcons
console.log('='.repeat(50));
console.log('🔍 DEBUG: heroIcons.js');
console.log('='.repeat(50));

if (typeof heroIcons !== 'undefined') {
    console.log('✅ heroIcons está definido');
    console.log('📊 Tipo:', typeof heroIcons);
    console.log('📊 Es array?:', Array.isArray(heroIcons));
    console.log('📊 Cantidad:', Array.isArray(heroIcons) ? heroIcons.length : 'N/A');
    
    if (Array.isArray(heroIcons) && heroIcons.length > 0) {
        console.log('📊 Primer héroe:', heroIcons[0]);
        console.log('🖼️ URL de icono:', heroIcons[0].icon);
        
        // Probar carga de primera imagen
        const testImg = new Image();
        testImg.onload = function() {
            console.log('✅ IMAGEN CARGA CORRECTAMENTE:', heroIcons[0].icon);
        };
        testImg.onerror = function() {
            console.error('❌ IMAGEN BLOQUEADA (CORS o 404):', heroIcons[0].icon);
            console.error('⚠️ Posible solución: Usar imágenes locales o proxy');
        };
        testImg.src = heroIcons[0].icon;
    }
} else {
    console.error('❌ heroIcons NO ESTÁ DEFINIDO');
}

console.log('='.repeat(50));
