# Daily Move – 15 Minuten täglich

Eine installierbare Fitness-PWA mit React, TypeScript und Vite. Ohne Login, Backend oder Geräte.

## Voraussetzungen
- Node.js 20.19+ oder 22.12+ (aktuelle LTS empfohlen)
- npm

## Lokal starten
```bash
npm install
npm run dev
```
Angezeigte lokale URL im Browser öffnen.

## Produktions-Build
```bash
npm run build
npm run preview
```
Das fertige Build liegt im Ordner `dist/`.

## Vercel veröffentlichen (ohne Terminal-Deployment)
1. Ein kostenloses GitHub-Konto und ein Vercel-Konto anlegen.
2. Auf GitHub ein neues Repository `daily-move` erstellen.
3. Projektdateien **aus diesem Ordner** (nicht den übergeordneten Ordner) ins Repository hochladen, z. B. über **Add file → Upload files**. `node_modules` und `dist` nicht hochladen.
4. In Vercel: **Add New → Project → Import Git Repository** und `daily-move` wählen.
5. Framework: **Vite**; Build Command: `npm run build`; Output Directory: `dist` (meist automatisch erkannt).
6. **Deploy** wählen. Nach erfolgreichem Build erscheint eine öffentliche `*.vercel.app`-Adresse.
7. Den Link auf iPhone/Android öffnen und über Browsermenü zum Home-Bildschirm hinzufügen.

Alternativ mit Vercel CLI: `npx vercel` und anschließend `npx vercel --prod`.

## Funktionen
- Drei Schwierigkeitsgrade, alle Übungen ohne Geräte
- 15 Minuten: 2 Runden × 6 Übungen × (60 Sekunden Aktivität + 15 Sekunden Pause)
- Start, Pause, Fortsetzen und Intervall überspringen
- Trainingshistorie pro Kalendertag, Streak und Wochenübersicht
- Lokale Speicherung in `localStorage` ohne Anmeldung
- Teilen über Web Share API oder Link-Kopie
- PWA-Manifest, Icons und Service Worker mit Offline-Cache nach erstem erfolgreichen Besuch

## Hinweise
- Timer läuft nur zuverlässig, solange die Seite aktiv im Vordergrund bleibt. Bei gesperrtem Bildschirm oder Hintergrundbetrieb können Browser Intervalle drosseln.
- Die Historie ist geräte- und browserspezifisch. Löschen von Website-Daten entfernt die Historie.
- Ein Training pro Kalendertag zählt für die Statistik; Wiederholungen sind jederzeit möglich.
- Bei Schmerzen oder Schwindel Training abbrechen. Belastung individuell anpassen.
