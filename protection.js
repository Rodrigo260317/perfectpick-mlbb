/**
 * SISTEMA DE PROTECCIÓN DE CÓDIGO - PerfectPick MLBB
 * Copyright © 2025 Rodrigo Ricardo Mallqui Ordoñez
 * TODOS LOS DERECHOS RESERVADOS - Uso no autorizado prohibido
 */

(function() {
    'use strict';
    
    // ============================================================
    // 1. ANTI-DEBUGGING - Detecta DevTools abierto
    // ============================================================
    let devToolsOpen = false;
    const detectDevTools = () => {
        const threshold = 160;
        const widthThreshold = window.outerWidth - window.innerWidth > threshold;
        const heightThreshold = window.outerHeight - window.innerHeight > threshold;
        
        if (widthThreshold || heightThreshold) {
            if (!devToolsOpen) {
                devToolsOpen = true;
                console.clear();
                console.log('%c⚠️ ADVERTENCIA LEGAL', 'color: red; font-size: 24px; font-weight: bold;');
                console.log('%c🚨 Este código está protegido por derechos de autor', 'color: red; font-size: 16px;');
                console.log('%c📜 Copyright © 2025 Rodrigo Ricardo Mallqui Ordoñez', 'color: orange; font-size: 14px;');
                console.log('%c⛔ PROHIBIDO: Copiar, modificar, distribuir o usar sin autorización', 'color: red; font-size: 14px;');
                console.log('%cContacto: rodrigomallqui2@gmail.com', 'color: blue; font-size: 12px;');
                
                // Bloquear debugger (dificulta inspección)
                setInterval(() => {
                    debugger;
                }, 100);
            }
        } else {
            devToolsOpen = false;
        }
    };
    
    setInterval(detectDevTools, 500);
    
    // ============================================================
    // 2. INTEGRIDAD DE ARCHIVOS - Detecta modificaciones
    // ============================================================
    window.fileHashes = {
        'hero_ratings.js': null, // Se calculará dinámicamente
        'meta_heroes.js': null,
        'heroIcons.js': null
    };
    
    // Función para calcular hash simple (FNV-1a)
    const hashCode = (str) => {
        let hash = 2166136261;
        for (let i = 0; i < str.length; i++) {
            hash ^= str.charCodeAt(i);
            hash += (hash << 1) + (hash << 4) + (hash << 7) + (hash << 8) + (hash << 24);
        }
        return hash >>> 0;
    };
    
    // Verificar integridad al cargar
    window.verifyIntegrity = function(scriptName, content) {
        const currentHash = hashCode(content);
        
        if (window.fileHashes[scriptName] === null) {
            window.fileHashes[scriptName] = currentHash;
            return true;
        }
        
        if (window.fileHashes[scriptName] !== currentHash) {
            console.warn(`⚠️ Integridad comprometida: ${scriptName}`);
            return false;
        }
        
        return true;
    };
    
    // ============================================================
    // 3. OFUSCACIÓN DE STRINGS - Codifica datos sensibles
    // ============================================================
    window.decodeData = function(encoded) {
        try {
            return atob(encoded);
        } catch (e) {
            return '';
        }
    };
    
    window.encodeData = function(data) {
        try {
            return btoa(data);
        } catch (e) {
            return data;
        }
    };
    
    // ============================================================
    // 4. MARCA DE AGUA DIGITAL - Rastreo de copias
    // ============================================================
    const watermark = {
        author: 'Rodrigo Ricardo Mallqui Ordoñez',
        project: 'PerfectPick MLBB',
        version: '3.2.0',
        copyright: '2025',
        license: 'Proprietary',
        fingerprint: btoa(navigator.userAgent + Date.now()).substring(0, 32)
    };
    
    // Insertar marca de agua invisible en DOM
    const insertWatermark = () => {
        const meta = document.createElement('meta');
        meta.setAttribute('name', 'code-fingerprint');
        meta.setAttribute('content', watermark.fingerprint);
        document.head.appendChild(meta);
        
        // Marca en localStorage
        try {
            localStorage.setItem('__app_fingerprint', JSON.stringify(watermark));
        } catch (e) {
            // Ignorar si localStorage está bloqueado
        }
    };
    
    // ============================================================
    // 5. BLOQUEO DE CONSOLA - Dificulta inspección
    // ============================================================
    const disableConsole = () => {
        const noop = () => {};
        const methods = ['log', 'debug', 'info', 'warn', 'error', 'table', 'trace'];
        
        // Solo bloquear en producción (cuando no hay ?debug en URL)
        if (!window.location.search.includes('debug')) {
            methods.forEach(method => {
                console[method] = noop;
            });
        }
    };
    
    // ============================================================
    // 6. DETECCIÓN DE COPIA - Monitorea clipboard
    // ============================================================
    document.addEventListener('copy', (e) => {
        const selection = window.getSelection().toString();
        if (selection.length > 50) {
            console.warn('⚠️ Intento de copia de código detectado');
            console.log('📧 Contacto para licenciamiento: rodrigomallqui2@gmail.com');
            
            // Agregar marca de agua al texto copiado
            const watermarkedText = selection + '\n\n' +
                '/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n' +
                ' * Código protegido por Copyright © 2025\n' +
                ' * Rodrigo Ricardo Mallqui Ordoñez\n' +
                ' * PerfectPick MLBB - LICENCIA PROPIETARIA\n' +
                ' * Uso no autorizado está PROHIBIDO\n' +
                ' * ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */';
            
            e.clipboardData.setData('text/plain', watermarkedText);
            e.preventDefault();
        }
    });
    
    // ============================================================
    // 7. ENCRIPTACIÓN DE DATOS CRÍTICOS
    // ============================================================
    window.encryptData = function(data, key = 'perfectpick2025') {
        let result = '';
        for (let i = 0; i < data.length; i++) {
            result += String.fromCharCode(
                data.charCodeAt(i) ^ key.charCodeAt(i % key.length)
            );
        }
        return btoa(result);
    };
    
    window.decryptData = function(encrypted, key = 'perfectpick2025') {
        try {
            const data = atob(encrypted);
            let result = '';
            for (let i = 0; i < data.length; i++) {
                result += String.fromCharCode(
                    data.charCodeAt(i) ^ key.charCodeAt(i % key.length)
                );
            }
            return result;
        } catch (e) {
            return null;
        }
    };
    
    // ============================================================
    // 8. DETECCIÓN DE CONTEXTO SOSPECHOSO
    // ============================================================
    const detectSuspiciousContext = () => {
        // Detectar si está corriendo en iframe
        if (window.self !== window.top) {
            console.warn('⚠️ Aplicación ejecutándose en iframe - contexto no autorizado');
        }
        
        // Detectar extensiones sospechosas
        const suspiciousExtensions = ['tampermonkey', 'greasemonkey', 'violentmonkey'];
        suspiciousExtensions.forEach(ext => {
            if (window[ext]) {
                console.warn(`⚠️ Extensión de modificación detectada: ${ext}`);
            }
        });
    };
    
    // ============================================================
    // 9. BLOQUEO DE CLICK DERECHO (OPCIONAL)
    // ============================================================
    window.enableRightClickProtection = function() {
        document.addEventListener('contextmenu', (e) => {
            if (!window.location.search.includes('debug')) {
                e.preventDefault();
                console.log('ℹ️ Click derecho deshabilitado para protección de código');
                return false;
            }
        });
    };
    
    // ============================================================
    // 10. BLOQUEO DE ATAJOS DE TECLADO DE DEVTOOLS
    // ============================================================
    window.blockDevToolsShortcuts = function() {
        document.addEventListener('keydown', (e) => {
            // Bloquear F12
            if (e.key === 'F12') {
                e.preventDefault();
                return false;
            }
            
            // Bloquear Ctrl+Shift+I / Cmd+Option+I
            if ((e.ctrlKey || e.metaKey) && e.shiftKey && e.key === 'I') {
                e.preventDefault();
                return false;
            }
            
            // Bloquear Ctrl+Shift+J / Cmd+Option+J
            if ((e.ctrlKey || e.metaKey) && e.shiftKey && e.key === 'J') {
                e.preventDefault();
                return false;
            }
            
            // Bloquear Ctrl+Shift+C / Cmd+Option+C
            if ((e.ctrlKey || e.metaKey) && e.shiftKey && e.key === 'C') {
                e.preventDefault();
                return false;
            }
            
            // Bloquear Ctrl+U (ver código fuente)
            if ((e.ctrlKey || e.metaKey) && e.key === 'u') {
                e.preventDefault();
                return false;
            }
        });
    };
    
    // ============================================================
    // INICIALIZACIÓN AUTOMÁTICA
    // ============================================================
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', () => {
            insertWatermark();
            detectSuspiciousContext();
            
            // Descomentar si quieres protección más agresiva:
            // disableConsole();
            // window.enableRightClickProtection();
            // window.blockDevToolsShortcuts();
        });
    } else {
        insertWatermark();
        detectSuspiciousContext();
    }
    
    // Mensaje en consola (siempre visible)
    console.log('%c🛡️ PerfectPick MLBB - Sistema de Protección Activo', 'color: #00ff00; font-size: 14px; font-weight: bold;');
    console.log('%c📜 Copyright © 2025 Rodrigo Ricardo Mallqui Ordoñez', 'color: #ffaa00; font-size: 12px;');
    console.log('%c⚖️ Licencia Propietaria - Todos los derechos reservados', 'color: #ff6600; font-size: 12px;');
    
})();
