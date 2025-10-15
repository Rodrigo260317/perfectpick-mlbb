# 🌐 GUÍA PARA GITHUB PAGES - PerfectPick MLBB

**Fecha:** 15 de Octubre, 2025  
**Proyecto:** PerfectPick MLBB v3.2

---

## ⚠️ IMPORTANTE: Cómo Funciona GitHub Pages

### Lo Que Necesitas Saber

**GitHub Pages es un servicio de hosting ESTÁTICO:**

✅ **SÍ sirve:**
- HTML, CSS, JavaScript
- Imágenes, fuentes, iconos
- JSON, manifests
- Archivos estáticos en general

❌ **NO ejecuta:**
- Node.js
- Python, PHP, Ruby
- Bases de datos
- Procesamiento del lado del servidor

### Implicaciones para Nuestro Proyecto

```
┌─────────────────────────────────────────────┐
│  ❌ NO FUNCIONARÁ                           │
├─────────────────────────────────────────────┤
│  Subir build-for-github.bat a GitHub       │
│  └─ GitHub Pages NO ejecuta .bat           │
│                                              │
│  Subir archivos originales (src/)          │
│  └─ GitHub Pages NO ofusca archivos        │
└─────────────────────────────────────────────┘

┌─────────────────────────────────────────────┐
│  ✅ SÍ FUNCIONARÁ                           │
├─────────────────────────────────────────────┤
│  1. Ejecutar build-for-github.bat LOCAL    │
│  2. Subir archivos YA OFUSCADOS            │
│  3. GitHub Pages los sirve tal cual        │
└─────────────────────────────────────────────┘
```

---

## 🚀 Proceso Correcto (3 Pasos)

### PASO 1: Build Local (en tu PC)

```batch
# En tu PC Windows:
cd d:\mobita
build-for-github.bat
```

**Esto genera:**
- ✅ `hero_ratings.js` (ofuscado, en raíz)
- ✅ `meta_heroes.js` (ofuscado, en raíz)
- ✅ `heroIcons.js` (ofuscado, en raíz)
- ✅ `protection.js` (ofuscado, en raíz)

**Archivos originales quedan en:**
- 📂 `src/hero_ratings.js` (original, NO se sube)
- 📂 `src/meta_heroes.js` (original, NO se sube)
- 📂 `src/heroIcons.js` (original, NO se sube)
- 📂 `src/protection.js` (original, NO se sube)

### PASO 2: Subir a GitHub

```batch
git add .
git commit -m "🔐 Código ofuscado listo para GitHub Pages"
git push origin main
```

**Lo que se sube:**
- ✅ `counterpick.html`
- ✅ `hero_ratings.js` (OFUSCADO)
- ✅ `meta_heroes.js` (OFUSCADO)
- ✅ `heroIcons.js` (OFUSCADO)
- ✅ `protection.js` (OFUSCADO)
- ✅ `manifest.json`
- ✅ `img/` (carpeta completa)
- ✅ `docs/` (documentación)
- ✅ `README.md`
- ✅ `LICENSE`

**Lo que NO se sube (por .gitignore):**
- ❌ `src/` (archivos originales)
- ❌ `build-for-github.bat` (script local)
- ❌ `node_modules/` (dependencias)
- ❌ `package.json`

### PASO 3: Activar GitHub Pages

1. Ir a: https://github.com/rodrigo260317/perfectpick-mlbb/settings/pages

2. Configurar:
   ```
   Source: Deploy from a branch
   Branch: main
   Folder: / (root)
   ```

3. Click en **Save**

4. Esperar 2-3 minutos

5. Visitar: https://rodrigo260317.github.io/perfectpick-mlbb/

---

## 📁 Estructura Final en GitHub

```
rodrigo260317.github.io/perfectpick-mlbb/
│
├── index.html (redirige a counterpick.html)
├── counterpick.html ← PÁGINA PRINCIPAL
│
├── 🔐 ARCHIVOS JS (OFUSCADOS)
│   ├── hero_ratings.js
│   ├── meta_heroes.js
│   ├── heroIcons.js
│   └── protection.js
│
├── 📱 PWA
│   └── manifest.json
│
├── 🖼️ ASSETS
│   └── img/
│       ├── icon-*.png (PWA)
│       ├── favicon-*.png
│       └── og-image.png
│
├── 📚 DOCUMENTACIÓN
│   └── docs/
│       ├── README.md (índice)
│       ├── DOCUMENTACION_COMPLETA.md
│       ├── PROTECCION_CODIGO.md
│       └── ... (otros .md)
│
├── 📄 LEGAL
│   ├── README.md
│   └── LICENSE (propietaria)
│
└── ⚙️ CONFIG
    └── .gitignore
```

---

## 🔍 Verificación Post-Deploy

### 1. Verificar que la Página Carga

✅ Ir a: https://rodrigo260317.github.io/perfectpick-mlbb/

**Debe mostrar:**
- Título: "PerfectPick MLBB"
- Grid de héroes
- Botones de roles (EXP, Jungle, Mid, etc.)

### 2. Verificar Protección Activa

✅ Presionar **F12** (DevTools)

**Debe mostrar en consola:**
```
⚠️ ADVERTENCIA LEGAL
🚨 Este código está protegido por derechos de autor
📜 Copyright © 2025 Rodrigo Ricardo Mallqui Ordoñez
⛔ PROHIBIDO: Copiar, modificar, distribuir o usar sin autorización
```

### 3. Verificar Código Ofuscado

✅ En DevTools → Sources → `hero_ratings.js`

**Debe verse así:**
```javascript
function _0x4a2f(_0x1b3c,_0x5d8a){const _0x9f2e=_0x3a7b()...
```

❌ **NO debe verse así:**
```javascript
function getCounters(heroId) {
    return heroRatings[heroId]...
```

### 4. Verificar Detección de Copia

✅ Seleccionar código en DevTools
✅ Copiar con Ctrl+C
✅ Pegar en Notepad

**Debe incluir:**
```javascript
/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
 * Código protegido por Copyright © 2025
 * Rodrigo Ricardo Mallqui Ordoñez
 * ...
```

---

## 🐛 Problemas Comunes

### ❌ Error: "404 - There isn't a GitHub Pages site here"

**Causas:**
1. GitHub Pages no está activado
2. No has hecho push a la rama `main`
3. El archivo no se llama `index.html` o `counterpick.html`

**Solución:**
```batch
# 1. Verificar que tienes archivos en GitHub
git status
git push origin main

# 2. Ir a Settings → Pages → Activar

# 3. Crear index.html que redirija
echo ^<meta http-equiv="refresh" content="0; url=counterpick.html"^> > index.html
git add index.html
git commit -m "Add index.html redirect"
git push origin main
```

### ❌ Error: "La página carga pero no hay héroes"

**Causa:** Rutas incorrectas de archivos JS

**Solución:**
Verificar en `counterpick.html`:
```html
<!-- CORRECTO (archivos en raíz) -->
<script src="protection.js"></script>
<script src="heroIcons.js"></script>
<script src="hero_ratings.js"></script>
<script src="meta_heroes.js"></script>

<!-- INCORRECTO -->
<script src="protected/heroIcons.js"></script> ❌
<script src="src/heroIcons.js"></script> ❌
```

### ❌ Error: "El código NO está ofuscado en GitHub"

**Causa:** Subiste archivos originales sin ejecutar build

**Solución:**
```batch
# 1. Ejecutar build LOCAL
cd d:\mobita
build-for-github.bat

# 2. Verificar que se generaron archivos ofuscados
dir hero_ratings.js
# Debe ser más grande que el original

# 3. Subir de nuevo
git add .
git commit -m "Fix: Subir archivos ofuscados"
git push origin main
```

### ❌ Error: "La protección NO funciona (no hay advertencia)"

**Causa:** `protection.js` no está cargado o tiene error

**Solución:**
1. Abrir DevTools (F12) → Console
2. Buscar errores en rojo
3. Verificar que `protection.js` está incluido:
   ```html
   <script src="protection.js"></script>
   ```
4. Debe ir **ANTES** de los otros scripts

---

## 🔄 Workflow de Desarrollo

### Desarrollo Local

```
1. Editar archivos en src/
   📝 src/hero_ratings.js
   📝 src/meta_heroes.js

2. Probar LOCALMENTE (sin ofuscar)
   📝 Modificar counterpick.html temporalmente:
   <script src="src/hero_ratings.js"></script>
   
3. Abrir en navegador
   🌐 counterpick.html
   
4. Verificar funcionamiento
   ✅ Todo funciona
```

### Build para Producción

```
5. Ejecutar build
   🛠️ build-for-github.bat
   
6. Restaurar counterpick.html
   📝 <script src="hero_ratings.js"></script>
   
7. Probar con archivos ofuscados
   🌐 counterpick.html (con archivos raíz)
   
8. Verificar protección
   🔐 F12 → Ver advertencia legal
```

### Deploy a GitHub

```
9. Commit y push
   📤 git add .
   📤 git commit -m "Update: ..."
   📤 git push origin main
   
10. Esperar deploy
    ⏳ 2-3 minutos
    
11. Verificar en producción
    🌐 https://rodrigo260317.github.io/perfectpick-mlbb/
```

---

## 📋 Checklist Pre-Deploy

Antes de hacer `git push`, verifica:

### Archivos en Raíz (deben estar OFUSCADOS)

- [ ] `hero_ratings.js` ← Código ofuscado (variables como `_0x4a2f`)
- [ ] `meta_heroes.js` ← Código ofuscado
- [ ] `heroIcons.js` ← Código ofuscado
- [ ] `protection.js` ← Código ofuscado

### Archivos en src/ (originales, NO se suben)

- [ ] `src/hero_ratings.js` ← Original legible
- [ ] `src/meta_heroes.js` ← Original legible
- [ ] `src/heroIcons.js` ← Original legible
- [ ] `src/protection.js` ← Original legible

### .gitignore Configurado

- [ ] `src/` está en .gitignore
- [ ] `build-for-github.bat` está en .gitignore
- [ ] `node_modules/` está en .gitignore
- [ ] `package.json` está en .gitignore

### counterpick.html

- [ ] Rutas apuntan a archivos en raíz (no `src/` ni `protected/`)
- [ ] `protection.js` cargado PRIMERO
- [ ] Todos los scripts tienen `<script src="..."></script>`

### Funcionamiento

- [ ] Abierto `counterpick.html` localmente
- [ ] Héroes se cargan correctamente
- [ ] F12 muestra advertencia legal
- [ ] Código en DevTools está ofuscado

---

## 🎯 Resumen Ejecutivo

### Lo Que Debes Recordar

1. **GitHub Pages = Hosting ESTÁTICO**
   - No ejecuta Node.js
   - Solo sirve archivos HTML/CSS/JS

2. **Build SIEMPRE Local**
   - Ejecuta `build-for-github.bat` en tu PC
   - Genera archivos ofuscados
   - Luego sube a GitHub

3. **Estructura de Carpetas**
   - `src/` → Originales (NO se sube)
   - Raíz → Ofuscados (SÍ se sube)

4. **Workflow**
   - Desarrolla en `src/`
   - Build con script
   - Sube archivos ofuscados
   - GitHub Pages los sirve

---

## 📞 Soporte

**Autor:** Rodrigo Ricardo Mallqui Ordoñez  
**Email:** rodrigomallqui2@gmail.com  
**GitHub:** https://github.com/rodrigo260317/perfectpick-mlbb

---

**🌐 Tu proyecto está listo para GitHub Pages con protección completa 🌐**

_Última actualización: 15 de Octubre, 2025_
