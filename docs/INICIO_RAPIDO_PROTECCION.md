# 🚀 GUÍA RÁPIDA - Protección de Código

## ⚡ Inicio Rápido (5 minutos)

### Paso 1: Instalar Node.js (si no lo tienes)
```
📥 Descargar: https://nodejs.org/
✅ Instalar versión LTS (recomendada)
🔍 Verificar: Abrir CMD y escribir: node --version
```

### Paso 2: Ejecutar Script de Protección
```
📂 Ir a: d:\mobita\
🖱️ Doble click en: build-protected.bat
⏳ Esperar 2-3 minutos (instalación + ofuscación)
```

### Paso 3: Verificar Archivos Generados
```
✅ Carpeta creada: d:\mobita\protected\
✅ Archivos ofuscados dentro de protected/
✅ Backup en: d:\mobita\original-backup\
```

### Paso 4: Modificar counterpick.html
```html
<!-- ANTES (archivos originales) -->
<script src="heroIcons.js"></script>
<script src="hero_ratings.js"></script>
<script src="meta_heroes.js"></script>

<!-- DESPUÉS (archivos protegidos) -->
<script src="protection.js"></script>
<script src="protected/heroIcons.js"></script>
<script src="protected/hero_ratings.js"></script>
<script src="protected/meta_heroes.js"></script>
```

### Paso 5: Probar en Navegador
```
🌐 Abrir: counterpick.html
🔑 Presionar F12 (debe mostrar advertencia legal)
✅ Verificar que todo funciona igual
```

---

## 🛡️ Qué Hace Este Sistema

### ✅ Protecciones Activas

1. **Anti-Debugging**: Detecta DevTools abierto
2. **Código Ofuscado**: Variables renombradas a hexadecimal
3. **Strings Encriptados**: Datos en Base64/RC4
4. **Marca de Agua**: Fingerprint único por sesión
5. **Detección de Copia**: Agrega copyright al copiar
6. **Bloqueo de Modificaciones**: Verifica integridad
7. **Advertencias Legales**: Mensajes en consola

### 📊 Comparación

| Aspecto | Sin Protección | Con Protección |
|---------|----------------|----------------|
| Lectura | Inmediata | Muy difícil |
| Copia | 1 minuto | Detectada |
| Modificación | 5 minutos | 20+ horas |

---

## 📋 Comandos Útiles

### Regenerar Archivos Protegidos
```batch
cd d:\mobita
build-protected.bat
```

### Ver Código Original (desarrollo)
```
📂 Ir a: d:\mobita\original-backup\
📄 Abrir cualquier .js con editor
```

### Probar con Debug Activado
```
http://localhost/counterpick.html?debug
(Desactiva bloqueos para desarrollo)
```

---

## ⚙️ Configuración Opcional

### Activar Protecciones Agresivas

Agregar al final de `counterpick.html` (antes de `</body>`):

```html
<script>
    // Bloquear click derecho
    window.enableRightClickProtection();
    
    // Bloquear F12, Ctrl+Shift+I, etc.
    window.blockDevToolsShortcuts();
</script>
```

### Desactivar Advertencias en Consola

En `protection.js`, comentar:

```javascript
// Buscar línea ~45:
// console.log('%c⚠️ ADVERTENCIA LEGAL', ...);
```

---

## 🔄 Workflow de Desarrollo

```
1️⃣ Editar archivo original
   📝 Ejemplo: hero_ratings.js

2️⃣ Probar cambios localmente
   🌐 Abrir counterpick.html sin ofuscar

3️⃣ Regenerar versión protegida
   🖱️ Ejecutar build-protected.bat

4️⃣ Probar versión protegida
   ✅ Verificar que funciona igual

5️⃣ Subir a GitHub
   📤 Solo subir carpeta protected/
```

---

## ❓ Problemas Comunes

### ❌ "Node.js no encontrado"
```
Solución:
1. Descargar Node.js: https://nodejs.org/
2. Instalar y reiniciar PC
3. Ejecutar de nuevo build-protected.bat
```

### ❌ "Error al ofuscar archivo"
```
Solución:
1. Verificar que el archivo .js no tenga errores
2. Abrir el .js original en navegador (Consola F12)
3. Corregir errores de sintaxis
4. Ejecutar de nuevo build-protected.bat
```

### ❌ "La app no funciona después de ofuscar"
```
Solución:
1. Verificar que counterpick.html usa rutas correctas
2. Abrir Consola (F12) y ver errores
3. Verificar que protection.js se carga PRIMERO
4. Si persiste, copiar backup: original-backup/*.js
```

### ❌ "Advertencia legal aparece todo el tiempo"
```
Explicación:
- Es NORMAL si DevTools está abierto
- La advertencia protege tu código
- Para desarrollo, usa: ?debug en URL
```

---

## 📦 Archivos Importantes

```
d:\mobita\
│
├── protection.js ← Sistema de protección (IMPORTANTE)
├── build-protected.bat ← Script para generar versión segura
├── PROTECCION_CODIGO.md ← Documentación completa
├── INICIO_RAPIDO_PROTECCION.md ← Esta guía
│
├── protected/ ← SUBIR ESTO A GITHUB
│   ├── hero_ratings.js (ofuscado)
│   ├── meta_heroes.js (ofuscado)
│   ├── heroIcons.js (ofuscado)
│   └── protection.js (ofuscado)
│
└── original-backup/ ← NO SUBIR (privado)
    ├── hero_ratings.js (original)
    ├── meta_heroes.js (original)
    └── heroIcons.js (original)
```

---

## 🎯 Próximos Pasos

### Después de Proteger el Código

1. **Modificar counterpick.html**
   - Cambiar rutas a `protected/`
   - Agregar `<script src="protection.js"></script>`

2. **Probar localmente**
   - Abrir en navegador
   - Verificar funcionamiento
   - Presionar F12 (ver advertencia)

3. **Configurar .gitignore**
   - Ya está configurado ✅
   - Verifica que `original-backup/` esté excluido

4. **Subir a GitHub**
   ```batch
   git add .
   git commit -m "🔐 Código protegido con ofuscación y anti-debugging"
   git push origin main
   ```

5. **Deploy a producción**
   - GitHub Pages: Settings → Pages
   - O Netlify/Vercel

---

## 📚 Documentación Completa

Para información detallada, ver:

📖 **PROTECCION_CODIGO.md** - Guía completa de 10 capas de protección

Incluye:
- ✅ Explicación técnica de cada capa
- ⚙️ Configuración avanzada
- 🔧 Troubleshooting completo
- 📊 Comparativas de rendimiento
- ⚖️ Aspectos legales

---

## 📞 Soporte

**Desarrollador:** Rodrigo Ricardo Mallqui Ordoñez  
**Email:** rodrigomallqui2@gmail.com  
**Proyecto:** PerfectPick MLBB v3.2

---

## ✅ Checklist Final

Antes de subir a GitHub:

- [ ] ✅ Node.js instalado
- [ ] ✅ build-protected.bat ejecutado
- [ ] ✅ Carpeta `protected/` generada
- [ ] ✅ counterpick.html modificado (rutas a protected/)
- [ ] ✅ protection.js agregado al HTML
- [ ] ✅ Probado en navegador (funciona igual)
- [ ] ✅ Presionado F12 (advertencia legal visible)
- [ ] ✅ .gitignore configurado (excluye original-backup/)
- [ ] ✅ LICENSE propietaria activa
- [ ] ✅ README.md con badge "Propietaria"

**🎉 ¡Listo para deploy! 🎉**

---

**🛡️ Tu código ahora está protegido contra copia y modificación no autorizada**
