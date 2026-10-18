# For Sanskruti 💗 — Beginner VS Code Project

A responsive Valentine question page for phone and desktop. Floating hearts are animated with CSS. The NO button runs away on mouse or touch, and YES reveals the celebration screen with a local dancing-heart GIF and graffiti-style words.

## Files
- `index.html` — page structure and text
- `style.css` — colours, layout, phone/desktop responsiveness, and animations
- `script.js` — floating hearts, escaping NO button, and YES celebration
- `assets/dancing-heart.gif` — local animated GIF used after YES

## Run it in VS Code (Mac or Windows)
1. Download and unzip `sanskriti_valentine_site.zip`.
2. Open VS Code.
3. Choose **File → Open Folder…** and select the unzipped `sanskriti_valentine_site` folder.
4. In the Explorer panel, click `index.html` to view its code.
5. Easiest preview: install the **Live Server** extension by Ritwick Dey from the Extensions panel (`Cmd+Shift+X` on Mac, `Ctrl+Shift+X` on Windows). Then right-click `index.html` and choose **Open with Live Server**.
6. Try hovering over NO with a mouse, or open the page on your phone and tap NO. Click YES to see the celebration.
7. To check smartphone layout on desktop Chrome, right-click the page → **Inspect** → click the phone/tablet icon, then choose a device size. You can also open the Live Server URL on your phone if both devices are on the same Wi-Fi; use your computer's local IP address instead of `127.0.0.1` in the URL.

## Change the message or appearance
- Edit the heading in `index.html`.
- Change colours, font sizes, or responsive rules in `style.css`.
- Change the button behaviour in `script.js`.
- Keep `assets/dancing-heart.gif` in the `assets` folder so the celebration GIF loads.

The page uses Google Fonts when online, but falls back to system fonts if the fonts cannot load. The dancing GIF is stored locally and does not require an external GIF website.
