# High-Resolution Image Upload Guide

## Overview
The Tarot Generator currently uses external image URLs from steve-p.org. You can upgrade to high-resolution images by either:
1. Using the full-resolution URLs directly from steve-p.org (no upload needed)
2. Downloading and self-hosting images in your GitHub repository (recommended for reliability)

---

## Option 1: Use Full-Resolution URLs (Easiest)

The external URLs already have full-resolution versions available. Simply replace the URLs in `data.js`:

**Current (small/thumbnail):**
```
https://steve-p.org/cards/small/sm_Thot-T-00.webp
```

**Full-resolution (just remove 'small' folder):**
```
https://steve-p.org/cards/Thot-T-00.webp
```

To apply this change to all 78 cards:
1. Open `data.js` in your editor
2. Find and replace: `https://steve-p.org/cards/small/sm_` with `https://steve-p.org/cards/`
3. Save the file
4. Commit and push to GitHub

---

## Option 2: Self-Host High-Resolution Images (Most Reliable)

### Step 1: Download High-Resolution Thoth Images

1. Visit: **https://steve-p.org/cards/Thot.html**
2. The page lists all cards with links. You have two options:
   - **Bulk download**: Right-click each image URL and download to a folder
   - **Individual download**: Download the webp files manually

The image structure is:
- **Major Arcana (Trumps)**: `Thot-T-00.webp` through `Thot-T-21.webp`
- **Cups**: `Thot-C-0A.webp`, `Thot-C-02.webp` through `Thot-C-10.webp`, `Thot-C-PS.webp` (Princess), `Thot-C-PN.webp` (Prince), `Thot-C-QU.webp` (Queen), `Thot-C-KN.webp` (Knight)
- **Wands**: `Thot-W-0A.webp`, `Thot-W-02.webp` through `Thot-W-10.webp`, `Thot-W-PS.webp`, `Thot-W-PN.webp`, `Thot-W-QU.webp`, `Thot-W-KN.webp`
- **Swords**: `Thot-S-0A.webp`, `Thot-S-02.webp` through `Thot-S-10.webp`, `Thot-S-PS.webp`, `Thot-S-PN.webp`, `Thot-S-QU.webp`, `Thot-S-KN.webp`
- **Disks**: `Thot-D-0A.webp`, `Thot-D-02.webp` through `Thot-D-10.webp`, `Thot-D-PS.webp`, `Thot-D-PN.webp`, `Thot-D-QU.webp`, `Thot-D-KN.webp`

### Step 2: Add Images to Your Repository

1. Create a `/cards` folder in your repository root (if it doesn't exist)
2. Upload all downloaded `.webp` images to this folder
3. Commit and push to GitHub

Directory structure after upload:
```
tarot-generator/
├── index.html
├── styles.css
├── script.js
├── data.js
└── cards/
    ├── Thot-T-00.webp
    ├── Thot-T-01.webp
    ├── ... (all 78 card images)
    └── Thot-D-KN.webp
```

### Step 3: Update Image URLs in data.js

Replace external URLs with local paths. In `data.js`, change:

**From:**
```javascript
image: "https://steve-p.org/cards/small/sm_Thot-T-00.webp"
```

**To:**
```javascript
image: "cards/Thot-T-00.webp"
```

The easiest way is to find and replace in your editor:
- Find: `https://steve-p.org/cards/Thot-`
- Replace: `cards/Thot-`

### Step 4: Deploy

1. Commit your changes:
   ```bash
   git add .
   git commit -m "Add high-resolution Thoth card images"
   git push
   ```

2. GitHub Pages will automatically update your website within seconds

---

## How the Website Works

- The website reads card data from `data.js`
- Each card object contains an `image` property (URL or local path)
- When a card is selected, the JavaScript loads the image from this path
- The browser caches images for faster loading

---

## Image Size Reference

**Thoth Deck Image Specifications** (from steve-p.org):
- Format: WebP (highly compressed, fast loading)
- Small/Thumbnail: ~100-150KB per image
- Full Resolution: ~500-800KB per image
- Total deck (78 cards) full resolution: ~40-60MB

GitHub Pages supports files up to 2GB per repository, so image hosting is no problem.

---

## Troubleshooting

**Images not loading?**
1. Check file names in `/cards` folder match exactly those referenced in `data.js`
2. Ensure file paths use forward slashes: `cards/Thot-T-00.webp` (not backslashes)
3. Clear browser cache (Ctrl+Shift+Delete or Cmd+Shift+Delete on Mac)
4. Check browser console (F12) for error messages

**Want to verify images are downloading?**
1. Open your website in browser
2. Press F12 to open Developer Tools
3. Go to Network tab
4. Click "Generate Card" button
5. You'll see the image request in the Network tab

---

## Next Steps

Once images are loaded:
- The website will display high-resolution Thoth cards
- All 78 cards have Thoth-specific meanings with planetary and zodiac associations
- The dark theme provides professional presentation
- The 5-second shuffle animation works with any image source
