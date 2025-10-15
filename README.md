# 🎮 PerfectPick MLBB - Asistente de Draft Mobile Legends

[![Version](https://img.shields.io/badge/version-3.2-blue.svg)](https://github.com/rodrigo260317/perfectpick-mlbb)
[![License](https://img.shields.io/badge/license-Propietaria-red.svg)](LICENSE)
[![Accessibility](https://img.shields.io/badge/accessibility-WCAG%202.1%20AA-brightgreen.svg)](https://www.w3.org/WAI/WCAG21/quickref/)
[![Copyright](https://img.shields.io/badge/copyright-2025%20Rodrigo%20Mallqui-yellow.svg)](LICENSE)

Herramienta profesional de draft para **Mobile Legends Bang Bang** que ayuda a los jugadores a optimizar su selección de héroes mediante análisis de counter picks, sinergias y composiciones de equipo con datos actualizados del meta.

🌐 **Demo en vivo**: [https://perfectpick-mlbb.is-a.dev](https://perfectpick-mlbb.is-a.dev)  
🔗 **GitHub Pages**: [https://rodrigo260317.github.io/perfectpick-mlbb/](https://rodrigo260317.github.io/perfectpick-mlbb/)

⚠️ **AVISO LEGAL**: Este software es propietario. Todos los derechos reservados. Ver [LICENSE](LICENSE) para términos de uso.

## ✨ Características

### Funcionalidades de Draft

- 🎯 **Análisis de Counter Picks**: Identifica los mejores héroes para contrarrestar al equipo enemigo
- 🤝 **Análisis de Sinergia**: Encuentra héroes que complementan a tu equipo
- 🏆 **Integración con Meta**: Prioriza héroes según el meta actual (Tier SS, S, A)
- 🚫 **Sistema de Baneos**: Gestiona hasta 10 baneos con visualización lateral
- 🎭 **Análisis de Composición**: Considera fases del juego y balance de daño
- 📱 **Mobile-First**: Optimizado para celulares con touch-friendly UI (botones ≥44px)
- 🌐 **Responsive**: Funciona en desktop, tablet, móvil (portrait y landscape)
- ♿ **Accesibilidad WCAG 2.1 AA**: Navegación por teclado, lectores de pantalla, ARIA
- 🌐 **PWA Ready**: Puede instalarse como aplicación nativa
- 💾 **Persistencia Local**: Guarda preferencias sin necesidad de servidor

### 📱 Optimización Móvil (Nuevo v3.2)

- ✅ **Touch-Friendly**: Todos los botones ≥44px (WCAG AAA)
- ✅ **Layout Vertical**: Una columna en móvil portrait para scroll natural
- ✅ **Hero Pool**: 4 columnas (64x64px) en portrait, 6 columnas (42px) en landscape
- ✅ **Sin Highlight Azul**: Experiencia táctil limpia sin efectos molestos
- ✅ **Feedback Táctil**: Animación visual al presionar (scale 0.95)
- ✅ **Baneos Accesibles**: Barra inferior fija en móvil (44-48px)
- ✅ **Smooth Scroll**: Optimizado para iOS y Android
- ✅ **No Zoom Accidental**: Fuentes ≥16px en inputs

> 📚 **Guía completa**: Ver [OPTIMIZACION_MOVIL.md](docs/OPTIMIZACION_MOVIL.md) y [RESUMEN_OPTIMIZACION_MOVIL.md](docs/RESUMEN_OPTIMIZACION_MOVIL.md)

### 🛡️ Protección de Código (Nuevo)

- 🔐 **Ofuscación Avanzada**: Código JavaScript ofuscado con javascript-obfuscator
- 🚫 **Anti-Debugging**: Detecta y bloquea herramientas de desarrollo
- 💎 **Marca de Agua Digital**: Fingerprint único para rastreo de copias
- 📋 **Detección de Copia**: Agrega copyright automáticamente al copiar código
- 🔒 **Verificación de Integridad**: Detecta modificaciones no autorizadas
- ⚖️ **Protección Legal**: Licencia propietaria + avisos de copyright
- 🛠️ **10 Capas de Seguridad**: Sistema completo anti-copia y anti-modificación

> 📚 **Documentación completa**: Ver [PROTECCION_CODIGO.md](PROTECCION_CODIGO.md) y [INICIO_RAPIDO_PROTECCION.md](INICIO_RAPIDO_PROTECCION.md)

## 🚀 Inicio Rápido

### Instalación

1. **Clona el repositorio**
   ```bash
   git clone https://github.com/rodrigomallqui/mlbb-draft.git
   cd mlbb-draft
   ```

2. **Abre el archivo HTML**
   - Simplemente abre `counterpick.html` en tu navegador preferido
   - No requiere instalación de dependencias ni servidor local

### Uso Básico

1. **Selecciona tu rol** (EXP, Jungla, Mid, Gold, Roam)
2. **Añade héroes enemigos**: Click en la **mitad izquierda** del héroe
3. **Añade héroes aliados**: Click en la **mitad derecha** del héroe o botón ✓
4. **Banea héroes**: Activa el botón "BAN" y haz click en héroes (máx. 10)
5. **Analiza sugerencias**: Revisa los counters y sinergias recomendadas

### Atajos de Teclado

| Tecla | Acción |
|-------|--------|
| `Tab` | Navegar entre elementos |
| `Enter` / `Space` | Seleccionar héroe (añade a aliados) |
| `Esc` | Cerrar modal |
| Click derecho | Ocultar/mostrar héroe de sugerencias |

## 📖 Características Detalladas

### 🎯 Sistema de Puntuación

El sistema calcula puntuaciones considerando:

1. **Matchups directos** (±5 puntos)
2. **Héroes meta** (+1 punto si es tier SS/S/A)
3. **Anti-amenazas** (+1 punto si contrarresta a enemigos peligrosos)
4. **Combos de sinergia** (+1 a +3 puntos según cantidad)
5. **Balance de composición** (+1 a +2 puntos por complementar fases/daño)

### 🔍 Filtrado por Rol

- **Todos**: Muestra todos los héroes disponibles
- **EXP/Jungla/Mid/Gold/Roam**: Filtra sugerencias según el rol seleccionado

### 🚫 Héroes Ocultos

Puedes ocultar héroes específicos de las sugerencias sin eliminarlos del pool:
- Click derecho en cualquier héroe para ocultarlo
- Botón "Ocultar" para gestionar todos los héroes ocultos
- Los héroes ocultos **siguen siendo seleccionables manualmente**

## 🛠️ Estructura del Proyecto

```
perfectpick-mlbb/
│
├── 🌐 PÁGINAS WEB
│   ├── index.html              # Redirección a counterpick.html
│   └── counterpick.html        # Aplicación principal
│
├── 🔐 JAVASCRIPT (OFUSCADO para producción)
│   ├── protection.js           # Sistema de 10 capas de protección
│   ├── hero_ratings.js         # Datos de matchups y sinergias (ofuscado)
│   ├── heroIcons.js            # URLs de iconos de héroes (ofuscado)
│   └── meta_heroes.js          # Tier list actualizada (ofuscado)
│
├── 📂 CÓDIGO FUENTE (NO se sube a GitHub)
│   └── src/
│       ├── protection.js       # Original sin ofuscar
│       ├── hero_ratings.js     # Original sin ofuscar
│       ├── heroIcons.js        # Original sin ofuscar
│       └── meta_heroes.js      # Original sin ofuscar
│
├── 🖼️ ASSETS
│   └── img/
│       ├── icon-*.png          # Iconos PWA (72x72 a 512x512)
│       ├── favicon-*.png       # Favicons (16, 32, 96)
│       ├── favicon.svg         # Favicon vectorial
│       ├── apple-touch-icon.png # Icono iOS
│       └── og-image.png        # Preview Open Graph
│
├── 📚 DOCUMENTACIÓN
│   └── docs/
│       ├── README.md                           # Índice de documentación
│       ├── DOCUMENTACION_COMPLETA.md           # Guía completa (1,500+ líneas)
│       ├── GUIA_GITHUB_PAGES.md                # Cómo deployar a GitHub Pages
│       ├── PROTECCION_CODIGO.md                # Sistema de protección técnica
│       ├── INICIO_RAPIDO_PROTECCION.md         # Guía rápida de protección
│       ├── CHECKLIST_PROTECCION.md             # Checklist paso a paso
│       ├── RESUMEN_PROTECCION.md               # Comparación antes/después
│       ├── RESUMEN_EJECUTIVO_PROTECCION.md     # Resumen de 30 segundos
│       ├── INDICE_DOCUMENTACION.md             # Índice general
│       ├── RESUMEN_VISUAL.md                   # Resumen visual
│       └── LIMPIEZA_COMPLETADA.md              # Log de limpieza
│
├── 📱 PWA
│   └── manifest.json           # Configuración Progressive Web App
│
├── 📄 LEGAL Y CONFIG
│   ├── README.md               # Este archivo
│   ├── LICENSE                 # Licencia propietaria
│   ├── .gitignore              # Archivos excluidos de Git
│   └── deploy.bat              # Script de deploy a GitHub
│
└── 🛠️ SCRIPTS DE BUILD (NO se suben)
    └── build-for-github.bat    # Ofusca código para GitHub Pages
```

### 📁 Carpetas Importantes

| Carpeta | Descripción | Se Sube a GitHub |
|---------|-------------|------------------|
| **src/** | Archivos JS originales (sin ofuscar) | ❌ NO (.gitignore) |
| **docs/** | Toda la documentación | ✅ SÍ |
| **img/** | Assets e imágenes | ✅ SÍ |
| Raíz | HTML + JS ofuscados | ✅ SÍ |
├── manifest.json             # Configuración PWA
├── README.md                 # Este archivo
├── hero_ratings.js           # Datos de matchups y sinergias
├── heroIcons.js              # URLs de iconos de héroes
├── meta_heroes.js            # Tier list actualizada
├── img/                      # Recursos gráficos
│   ├── icon-*.png           # Iconos PWA (72x72 a 512x512)
│   ├── favicon-*.png        # Favicons
│   ├── og-preview.jpg       # Preview Open Graph
│   └── apple-touch-icon.png # Icono iOS
└── moba sin las sinergias/  # Versión anterior (backup)
```

## 🔧 Tecnologías Utilizadas

- **HTML5** (Semántico + ARIA)
- **CSS3** (Grid, Flexbox, Custom Properties, Animaciones)
- **JavaScript** (ES6+, Vanilla JS)
- **Tailwind CSS** (CDN - considerar build local en producción)
- **Web APIs**: LocalStorage, Service Worker, Intersection Observer

## ♿ Accesibilidad

Esta aplicación cumple con **WCAG 2.1 nivel AA**:

- ✅ Navegación completa por teclado
- ✅ Estados de foco visibles
- ✅ Roles y propiedades ARIA
- ✅ Textos alternativos descriptivos
- ✅ Contraste de color suficiente (ratio 4.5:1)
- ✅ Skip to main content
- ✅ Anuncios de estado (aria-live)
- ✅ Labels en todos los controles

### Lectores de Pantalla Compatibles

- NVDA (Windows)
- JAWS (Windows)
- VoiceOver (macOS/iOS)
- TalkBack (Android)

## 📱 Compatibilidad

### Navegadores Soportados

| Navegador | Versión Mínima |
|-----------|----------------|
| Chrome    | 88+            |
| Firefox   | 85+            |
| Safari    | 14+            |
| Edge      | 88+            |
| Opera     | 74+            |

### Dispositivos

- ✅ Desktop (Windows, macOS, Linux)
- ✅ Tablet (iPad, Android)
- ✅ Móvil (iOS 12+, Android 8+)

## 🚀 Optimización de Rendimiento

### Implementado

- ✅ Lazy loading de imágenes
- ✅ Async/defer en scripts
- ✅ Preconnect a recursos externos
- ✅ Minificación de assets (manual)
- ✅ Compresión de imágenes
- ✅ LocalStorage para persistencia

### Recomendaciones Adicionales

Para producción, considera:

1. **Usar Tailwind Build** en lugar del CDN:
   ```bash
   npm install tailwindcss
   npx tailwindcss -o styles.css --minify
   ```

2. **Minificar JS** con herramientas como Terser:
   ```bash
   npm install terser -g
   terser hero_ratings.js -o hero_ratings.min.js -c -m
   ```

3. **Optimizar imágenes** con ImageMagick o TinyPNG:
   ```bash
   magick convert icon.png -quality 85 icon-optimized.png
   ```

4. **Implementar Service Worker** para cache offline

## 📊 Datos y Actualizaciones

### Actualizar Héroes

Edita `hero_ratings.js` para añadir/modificar héroes:

```javascript
heroRatings['nuevo_heroe'] = {
  counters: [
    { hero: 'enemigo_id', rating: 3, explanation: 'Descripción del counter' }
  ],
  synergies: [
    { hero: 'aliado_id', rating: 4, explanation: 'Descripción de la sinergia' }
  ],
  teamContributions: {
    fasesDelJuego: {
      juegoTemprano: 'Fuerte',
      juegoMedio: 'Medio',
      juegoTardio: 'Débil'
    },
    equilibrioDeDano: {
      tipoDeDano: 'Físico'
    }
  }
};
```

### Actualizar Meta

Edita `meta_heroes.js` para reflejar el tier list actual:

```javascript
window.metaHeroes = {
  tierSS: [{ id: 'hero_id', lane: ['Mid Lane'] }],
  tierS: [{ id: 'hero_id', lane: ['EXP', 'Jungle'] }],
  tierA: [{ id: 'hero_id', lane: ['Gold Lane'] }]
};
```

## 🤝 Contribuir

¡Las contribuciones son bienvenidas! Para contribuir:

1. **Fork** el proyecto
2. **Crea una rama** para tu feature (`git checkout -b feature/AmazingFeature`)
3. **Commit** tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. **Push** a la rama (`git push origin feature/AmazingFeature`)
5. **Abre un Pull Request**

### Lineamientos

- Mantén la accesibilidad (WCAG 2.1 AA)
- Sigue los estándares de código existentes
- Añade comentarios descriptivos
- Prueba en múltiples navegadores/dispositivos

## �️ Seguridad y Protección de Código

Este proyecto implementa un **sistema de 10 capas de protección** para evitar copias, modificaciones y uso no autorizado:

### Protección Técnica

1. **Ofuscación de Código**: JavaScript ofuscado con nombres de variables hexadecimales
2. **Anti-Debugging**: Detecta y bloquea DevTools (F12)
3. **Encriptación de Strings**: Datos sensibles codificados en Base64/RC4
4. **Marca de Agua Digital**: Fingerprint único para rastreo
5. **Detección de Copia**: Agrega copyright al portapapeles
6. **Verificación de Integridad**: Hash de archivos para detectar modificaciones
7. **Bloqueo de Consola**: Desactiva console.log en producción
8. **Detección de Contexto**: Identifica iframes y extensiones sospechosas
9. **Bloqueo de Click Derecho**: Previene inspección rápida (opcional)
10. **Bloqueo de Atajos**: Deshabilita F12, Ctrl+Shift+I, Ctrl+U (opcional)

### Cómo Aplicar la Protección

```batch
# 1. Instalar Node.js (https://nodejs.org/)
# 2. Ejecutar script de ofuscación
cd d:\mobita
build-protected.bat

# 3. Los archivos protegidos estarán en la carpeta protected/
```

### Documentación de Seguridad

- 📖 **[PROTECCION_CODIGO.md](PROTECCION_CODIGO.md)**: Guía técnica completa
- 🚀 **[INICIO_RAPIDO_PROTECCION.md](INICIO_RAPIDO_PROTECCION.md)**: Guía rápida de uso
- 📊 **[RESUMEN_PROTECCION.md](RESUMEN_PROTECCION.md)**: Resumen ejecutivo

### Nivel de Protección

| Aspecto | Sin Protección | Con Protección |
|---------|----------------|----------------|
| Lectura | Inmediata | 40+ horas |
| Modificación | 5 minutos | Muy difícil |
| Ingeniería inversa | 1-2 horas | 40+ horas |

> ⚠️ **Nota**: Ninguna protección JavaScript es 100% infalible, pero este sistema aumenta drásticamente el esfuerzo requerido y proporciona evidencia legal en caso de copia.

---

## �📝 Roadmap

### v3.3 (Próximo)

- [ ] Service Worker para modo offline
- [ ] Exportar/importar drafts
- [ ] Historial de drafts
- [ ] Estadísticas de uso

### v4.0 (Futuro)

- [ ] Backend para sincronización
- [ ] Sistema de cuentas de usuario
- [ ] Compartir drafts por URL
- [ ] Integración con API oficial de MLBB
- [ ] Modo torneo (draft competitivo)

## 🐛 Reportar Problemas

Si encuentras un bug o tienes una sugerencia:

1. Revisa los [issues existentes](https://github.com/rodrigomallqui/mlbb-draft/issues)
2. Si no existe, [crea uno nuevo](https://github.com/rodrigomallqui/mlbb-draft/issues/new)
3. Incluye:
   - Descripción clara del problema
   - Pasos para reproducir
   - Navegador y versión
   - Screenshots si es relevante

## 📄 Licencia

**© 2025 Rodrigo Ricardo Mallqui Ordoñez. Todos los derechos reservados.**

Este proyecto es **PROPIETARIO** y está protegido por leyes de derechos de autor.

**PROHIBIDO**:
- ❌ Copiar o redistribuir el código
- ❌ Modificar o crear trabajos derivados
- ❌ Uso comercial sin autorización
- ❌ Ingeniería inversa

**Uso permitido**: Solo visualización personal y educativa.

Ver el archivo [LICENSE](LICENSE) para términos completos.

Para solicitudes de colaboración: rodrigomallqui2@gmail.com

## 🙏 Agradecimientos

- Comunidad de Mobile Legends Bang Bang
- Recursos de iconos: [Hero Icons Source]
- Datos de meta: [ML Meta Sources]
- Inspiración en herramientas similares

## 📧 Contacto

**Autor**: Rodrigo Ricardo Mallqui Ordoñez  
**Email**: rodrigomallqui2@gmail.com  
**GitHub**: [@rodrigomallqui](https://github.com/rodrigomallqui)  
**Website**: https://rodrigomallqui.github.io/mlbb-draft/

---

⭐ Si este proyecto te ha sido útil, considera darle una estrella en GitHub!

**Made with ❤️ for the MLBB community by Rodrigo Mallqui**
