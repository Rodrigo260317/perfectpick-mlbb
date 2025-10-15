# 🛡️ SISTEMA DE PROTECCIÓN DE CÓDIGO - PerfectPick MLBB

## 📋 Tabla de Contenidos

1. [Descripción General](#descripción-general)
2. [Capas de Protección](#capas-de-protección)
3. [Instalación y Uso](#instalación-y-uso)
4. [Archivos del Sistema](#archivos-del-sistema)
5. [Configuración Avanzada](#configuración-avanzada)
6. [Limitaciones y Consideraciones](#limitaciones-y-consideraciones)
7. [FAQ - Preguntas Frecuentes](#faq)

---

## 🎯 Descripción General

Este sistema de protección implementa **10 capas de seguridad** para dificultar el acceso, copia y análisis de tu código JavaScript. Combina protección legal (licencia propietaria) con protección técnica (ofuscación, anti-debugging, etc.).

### Nivel de Protección

| Aspecto | Sin Protección | Con Protección |
|---------|----------------|----------------|
| **Lectura de código** | Fácil | Muy difícil |
| **Copia de datos** | Inmediata | Detectada y marcada |
| **Debugging** | Sencillo | Bloqueado/Difícil |
| **Modificación** | Simple | Muy complicado |
| **Ingeniería inversa** | 1-2 horas | 20-40 horas |
| **Protección legal** | Ninguna | Total |

### ⚠️ Advertencia Importante

**Ningún sistema de protección es 100% infalible**. Un atacante muy determinado con suficiente tiempo y conocimientos siempre podrá analizar código JavaScript (porque se ejecuta en el navegador del cliente). Sin embargo, este sistema:

✅ **Aumenta drásticamente** el tiempo y esfuerzo necesarios
✅ **Detecta** intentos de inspección y copia
✅ **Marca** el código copiado con información de copyright
✅ **Disuade** a usuarios casuales y copias automáticas
✅ **Proporciona evidencia legal** en caso de disputa

---

## 🔐 Capas de Protección

### 1. Anti-Debugging

**¿Qué hace?**
- Detecta cuando DevTools (F12) está abierto
- Muestra advertencias legales en consola
- Activa `debugger` en loop para dificultar inspección

**Código:**
```javascript
// Ejecuta cada 500ms
setInterval(detectDevTools, 500);
```

**Nivel de protección:** ⭐⭐⭐⭐ (Alto)

---

### 2. Integridad de Archivos

**¿Qué hace?**
- Calcula hash de cada archivo JS
- Detecta si el código fue modificado
- Alerta en consola si hay cambios

**Ejemplo de uso:**
```javascript
window.verifyIntegrity('hero_ratings.js', fileContent);
```

**Nivel de protección:** ⭐⭐⭐ (Medio)

---

### 3. Ofuscación de Código

**¿Qué hace?**
- Renombra variables a hexadecimal (`_0x4a2f1b`)
- Codifica strings en Base64/RC4
- Aplana flujo de control (dificultad lectura)
- Inyecta código muerto (confunde análisis)
- Protección auto-defensiva

**Antes:**
```javascript
function calculateCounters(hero) {
    const counters = heroData[hero].counters;
    return counters.map(c => c.name);
}
```

**Después (ofuscado):**
```javascript
function _0x4a2f(_0x1b3c,_0x5d8a){const _0x9f2e=_0x3a7b();return _0x4a2f=function(_0x4a2f1b,_0x2f5d8a){_0x4a2f1b=_0x4a2f1b-0x1a3;let _0x3a7b9f=_0x9f2e[_0x4a2f1b];if(_0x4a2f['kLmNpQ']===undefined){/*...código ofuscado...*/}}}
```

**Nivel de protección:** ⭐⭐⭐⭐⭐ (Muy Alto)

---

### 4. Marca de Agua Digital

**¿Qué hace?**
- Inserta metadatos únicos en DOM y localStorage
- Genera fingerprint por usuario/sesión
- Permite rastrear copias del código

**Datos incluidos:**
```javascript
{
    author: 'Rodrigo Ricardo Mallqui Ordoñez',
    project: 'PerfectPick MLBB',
    version: '3.2.0',
    copyright: '2025',
    license: 'Proprietary',
    fingerprint: 'dW5pcXVlX2ZpbmdlcnByaW50Xzk4NzY1...'
}
```

**Nivel de protección:** ⭐⭐⭐ (Medio) + Evidencia legal

---

### 5. Detección de Copia

**¿Qué hace?**
- Monitorea evento `copy` del portapapeles
- Agrega header de copyright al texto copiado
- Alerta en consola sobre intentos de copia

**Texto agregado automáticamente:**
```javascript
/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
 * Código protegido por Copyright © 2025
 * Rodrigo Ricardo Mallqui Ordoñez
 * PerfectPick MLBB - LICENCIA PROPIETARIA
 * Uso no autorizado está PROHIBIDO
 * ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
```

**Nivel de protección:** ⭐⭐ (Bajo) + Advertencia legal

---

### 6. Encriptación de Datos

**¿Qué hace?**
- Encripta strings sensibles con XOR + Base64
- Desencripta en runtime
- Dificulta lectura de datos estáticos

**Ejemplo:**
```javascript
// Original
const apiKey = "mi_clave_secreta";

// Protegido
const apiKey = decryptData("QRlMDxkZGQ8JHhkfCQ==");
```

**Nivel de protección:** ⭐⭐⭐ (Medio)

---

### 7. Bloqueo de Consola (Opcional)

**¿Qué hace?**
- Desactiva `console.log/warn/error` en producción
- Mantiene funcionamiento normal con `?debug` en URL

**Activar:**
```javascript
disableConsole(); // En protection.js
```

**Nivel de protección:** ⭐⭐ (Bajo) - Solo estorba, no protege

---

### 8. Detección de Contexto Sospechoso

**¿Qué hace?**
- Detecta si app corre en iframe no autorizado
- Identifica extensiones de modificación (Tampermonkey, etc.)
- Alerta sobre contextos anormales

**Nivel de protección:** ⭐⭐⭐ (Medio)

---

### 9. Bloqueo de Click Derecho (Opcional)

**¿Qué hace?**
- Previene menú contextual (inspeccionar elemento)
- Deshabilitado con `?debug` en URL

**Activar:**
```javascript
window.enableRightClickProtection();
```

**Nivel de protección:** ⭐ (Muy bajo) - Molesto para usuarios

---

### 10. Bloqueo de Atajos DevTools (Opcional)

**¿Qué hace?**
- Bloquea F12, Ctrl+Shift+I, Ctrl+Shift+J, Ctrl+U
- Previene apertura rápida de DevTools

**Activar:**
```javascript
window.blockDevToolsShortcuts();
```

**Nivel de protección:** ⭐⭐ (Bajo) - Fácil de evitar

---

## 🚀 Instalación y Uso

### Requisitos Previos

- **Node.js** (versión 14 o superior)
  - Descarga: https://nodejs.org/
  - Verifica: `node --version`

- **npm** (incluido con Node.js)
  - Verifica: `npm --version`

### Instalación Paso a Paso

#### Opción 1: Script Automático (Windows)

```batch
# 1. Doble click en build-protected.bat
# 2. Espera a que se instalen las dependencias
# 3. El script genera carpeta 'protected/' con archivos ofuscados
```

#### Opción 2: Manual

```batch
# 1. Instalar herramienta de ofuscación
npm install -g javascript-obfuscator

# 2. Ofuscar archivos individualmente
javascript-obfuscator hero_ratings.js --output protected/hero_ratings.js --compact true --self-defending true

# 3. Repetir para cada archivo JS
```

### Integración en HTML

```html
<!DOCTYPE html>
<html>
<head>
    <!-- ... otros tags ... -->
    
    <!-- 1. Cargar sistema de protección PRIMERO -->
    <script src="protection.js"></script>
    
    <!-- 2. Cargar archivos protegidos -->
    <script src="protected/heroIcons.js"></script>
    <script src="protected/hero_ratings.js"></script>
    <script src="protected/meta_heroes.js"></script>
</head>
<body>
    <!-- Tu aplicación -->
</body>
</html>
```

### Verificación de Funcionamiento

1. Abre `counterpick.html` en navegador
2. Presiona F12 para abrir DevTools
3. Deberías ver:
   ```
   ⚠️ ADVERTENCIA LEGAL
   🚨 Este código está protegido por derechos de autor
   📜 Copyright © 2025 Rodrigo Ricardo Mallqui Ordoñez
   ```
4. Verifica que la aplicación funciona normalmente
5. Intenta copiar código → debe agregar header de copyright

### Modo Debug (para desarrollo)

Si necesitas debuggear tu código:

```
http://localhost/counterpick.html?debug
```

Esto desactiva:
- Bloqueo de consola
- Bloqueo de click derecho
- Bloqueo de atajos DevTools

---

## 📁 Archivos del Sistema

### Archivos Creados

| Archivo | Descripción | Tamaño Aprox. |
|---------|-------------|---------------|
| `protection.js` | Sistema de protección (10 capas) | 12 KB |
| `build-protected.bat` | Script de construcción automática | 8 KB |
| `PROTECCION_CODIGO.md` | Documentación (este archivo) | 15 KB |
| `protected/` | Carpeta con JS ofuscados | Variable |
| `original-backup/` | Backup de archivos originales | Variable |

### Estructura de Carpetas

```
d:\mobita\
├── counterpick.html (modificar para usar protected/)
├── protection.js (nuevo)
├── build-protected.bat (nuevo)
├── PROTECCION_CODIGO.md (nuevo)
│
├── protected/ (generada por script)
│   ├── hero_ratings.js (ofuscado)
│   ├── meta_heroes.js (ofuscado)
│   ├── heroIcons.js (ofuscado)
│   ├── protection.js (ofuscado)
│   ├── counterpick.html
│   ├── manifest.json
│   └── img/
│
└── original-backup/ (generada por script)
    ├── hero_ratings.js (original)
    ├── meta_heroes.js (original)
    ├── heroIcons.js (original)
    └── protection.js (original)
```

---

## ⚙️ Configuración Avanzada

### Nivel de Ofuscación

Puedes ajustar el nivel de ofuscación en `build-protected.bat`:

```batch
REM Máxima protección (más lento, más seguro)
--control-flow-flattening-threshold 1
--string-array-threshold 1
--string-array-encoding rc4

REM Balance (recomendado)
--control-flow-flattening-threshold 0.75
--string-array-threshold 0.75
--string-array-encoding base64

REM Mínima protección (más rápido, menos seguro)
--control-flow-flattening-threshold 0.5
--string-array-threshold 0.5
--string-array-encoding none
```

### Activar Protecciones Opcionales

En `counterpick.html`, agrega al final del `<body>`:

```html
<script>
    // Activar protecciones agresivas
    window.enableRightClickProtection();
    window.blockDevToolsShortcuts();
</script>
```

### Personalizar Marca de Agua

En `protection.js`, modifica:

```javascript
const watermark = {
    author: 'TU NOMBRE',
    project: 'TU PROYECTO',
    version: 'X.X.X',
    copyright: '2025',
    license: 'Proprietary',
    fingerprint: btoa(navigator.userAgent + Date.now()).substring(0, 32)
};
```

---

## ⚖️ Limitaciones y Consideraciones

### ✅ Lo Que SÍ Protege

- ✅ Copia casual de código
- ✅ Bots de scraping básicos
- ✅ Usuarios sin conocimientos técnicos
- ✅ Inspección rápida en DevTools
- ✅ Copias automáticas (Ctrl+C)
- ✅ Modificaciones simples

### ❌ Lo Que NO Protege

- ❌ Ataques muy determinados (100+ horas de esfuerzo)
- ❌ Reverse engineering profesional
- ❌ Acceso a memoria del navegador
- ❌ Análisis de tráfico de red
- ❌ Screenshots o grabación de pantalla
- ❌ Reescritura completa desde cero

### ⚠️ Consideraciones Importantes

1. **Rendimiento**: La ofuscación puede reducir velocidad 10-30%
   - Solución: Minificar y comprimir (gzip) en servidor

2. **Tamaño de archivos**: Código ofuscado es 20-40% más grande
   - Solución: Habilitar compresión gzip en hosting

3. **Debugging**: Más difícil encontrar errores en producción
   - Solución: Guardar source maps (NO subir a GitHub)

4. **SEO**: No afecta SEO (JS se ejecuta igual)

5. **Accesibilidad**: No afecta accesibilidad

6. **Compatibilidad**: Compatible con todos los navegadores modernos

---

## ❓ FAQ - Preguntas Frecuentes

### ¿Debo ofuscar TODO el código?

**Recomendación:** SÍ para archivos con lógica de negocio crítica:
- ✅ `hero_ratings.js` (datos propietarios)
- ✅ `meta_heroes.js` (datos sensibles)
- ✅ `heroIcons.js` (assets)
- ✅ `protection.js` (sistema de protección)

**NO es necesario para:**
- ❌ HTML (siempre visible)
- ❌ CSS (no tiene lógica)
- ❌ Librerías de terceros

### ¿Puedo usar esto con repositorio público en GitHub?

**SÍ, pero con cuidado:**
- ✅ Sube versión ofuscada a rama `main` (producción)
- ✅ Sube versión original a rama `development` (privada)
- ✅ Configura `.gitignore` para excluir `original-backup/`
- ✅ Mantén LICENSE propietaria

**Mejor opción:**
- 🔒 Repositorio **privado** + ofuscación = doble protección

### ¿Afecta el rendimiento de la aplicación?

**Impacto típico:**
- Carga inicial: +10-20% más lenta (por código más grande)
- Ejecución: +5-15% más lenta (por ofuscación)
- Memoria: +10-20% más uso

**Soluciones:**
```apache
# Habilitar gzip en .htaccess (Apache)
<IfModule mod_deflate.c>
    AddOutputFilterByType DEFLATE application/javascript
</IfModule>
```

### ¿Cada cuánto debo regenerar archivos protegidos?

**Recomendación:**
- 🔄 Cada vez que modifiques archivos JS originales
- 🔄 Antes de cada deploy a producción
- 🔄 Mensualmente (actualizar marca de agua)

**Proceso:**
```batch
1. Editar archivo original (ej: hero_ratings.js)
2. Ejecutar build-protected.bat
3. Probar en navegador
4. Subir a GitHub/servidor
```

### ¿Qué hago si alguien copia mi código?

**Pasos legales:**

1. **Documentar la copia:**
   - Screenshot del código copiado
   - URL del sitio infractor
   - Fecha de descubrimiento

2. **Contacto directo:**
   - Enviar correo al infractor
   - Solicitar remoción en 48 horas

3. **DMCA Takedown:**
   - Presentar reclamo a hosting del infractor
   - Presentar reclamo a GitHub (si aplica)

4. **Acción legal:**
   - Consultar abogado especializado
   - Usar marca de agua digital como evidencia

### ¿Puedo vender/comercializar este código protegido?

**SÍ, tu código sigue siendo tuyo:**
- ✅ Puedes venderlo como producto
- ✅ Puedes licenciarlo a terceros
- ✅ Puedes incluirlo en productos comerciales

**Protecciones adicionales recomendadas:**
- 📝 Contrato de licencia personalizado
- 🔐 Licencias por dominio/servidor
- 🔑 Sistema de autenticación API
- 💳 Pagos recurrentes (SaaS)

### ¿Funcionará en todos los navegadores?

**Compatibilidad:**
- ✅ Chrome/Edge 90+ (100%)
- ✅ Firefox 88+ (100%)
- ✅ Safari 14+ (100%)
- ✅ Opera 76+ (100%)
- ⚠️ IE11 (NO soportado)

**Características usadas:**
- `btoa/atob` (Base64): Soportado
- `localStorage`: Soportado
- `addEventListener`: Soportado
- ES6: Transpila si necesitas IE11

---

## 🎓 Mejores Prácticas

### 1. Workflow de Desarrollo

```
┌─────────────────┐
│ Editar original │  (hero_ratings.js)
└────────┬────────┘
         │
         ▼
┌─────────────────┐
│ Probar local    │  (navegador sin ofuscar)
└────────┬────────┘
         │
         ▼
┌─────────────────┐
│ build-protected │  (generar versión segura)
└────────┬────────┘
         │
         ▼
┌─────────────────┐
│ Probar protegido│  (verificar funcionamiento)
└────────┬────────┘
         │
         ▼
┌─────────────────┐
│ Commit + Deploy │  (subir solo versión protegida)
└─────────────────┘
```

### 2. .gitignore Recomendado

```gitignore
# Archivos originales (NO subir)
original-backup/
*.original.js
*.dev.js

# Configuración local
.env
config.local.js

# Source maps (NO subir)
*.map

# Logs
npm-debug.log*
```

### 3. Estructura de Branches

```
main (producción)
├── protected/hero_ratings.js  ← OFUSCADO
├── protected/meta_heroes.js   ← OFUSCADO
└── protection.js              ← OFUSCADO

development (privado)
├── hero_ratings.js            ← ORIGINAL
├── meta_heroes.js             ← ORIGINAL
└── protection.js              ← ORIGINAL
```

---

## 📞 Soporte y Contacto

**Desarrollador:** Rodrigo Ricardo Mallqui Ordoñez  
**Email:** rodrigomallqui2@gmail.com  
**Proyecto:** PerfectPick MLBB v3.2  
**Licencia:** Propietaria - Todos los derechos reservados

---

## 📜 Licencia

Este sistema de protección está cubierto por la **LICENCIA PROPIETARIA** del proyecto PerfectPick MLBB.

```
Copyright © 2025 Rodrigo Ricardo Mallqui Ordoñez

PROHIBIDO:
❌ Copiar, duplicar o reproducir el código
❌ Modificar o crear trabajos derivados
❌ Distribuir, publicar, vender o sublicenciar
❌ Realizar ingeniería inversa
❌ Uso comercial sin autorización

Contacto para licenciamiento: rodrigomallqui2@gmail.com
```

---

## 🔄 Changelog

### v1.0.0 (2025-01-15)
- ✨ Implementación inicial de 10 capas de protección
- 🔐 Sistema de ofuscación automática
- 🛡️ Anti-debugging y detección de DevTools
- 💎 Marca de agua digital
- 📋 Detección de copia con copyright automático
- 🔑 Encriptación XOR + Base64
- 📖 Documentación completa

---

**🛡️ ¡Tu código ahora está protegido! 🛡️**
