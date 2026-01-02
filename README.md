# 🔮 Tarot Generator

A free, GitHub Pages-hosted tarot card generator website. Click a button to get a random tarot card with description.

## Features
- ✨ Random tarot card generation
- 🎨 Beautiful, responsive design
- 🖼️ Display card images
- 📱 Works on desktop and mobile
- 💰 Completely free to host on GitHub Pages
- 📝 Well-commented, beginner-friendly code

## Quick Start

### 1. Prepare Your Card Images
Create a folder called `cards` in the project and add your scanned tarot card images:

```
tarot-generator/
├── cards/
│   ├── the_fool.jpg
│   ├── the_magician.jpg
│   ├── the_high_priestess.jpg
│   └── ... (all 22 major arcana cards)
├── index.html
├── styles.css
├── script.js
└── data.js
```

**Image file naming**: Follow the naming pattern in `data.js`. For example:
- `the_fool.jpg` for The Fool card
- `the_magician.jpg` for The Magician card
- Replace spaces with underscores, use lowercase

### 2. Update Card Images in data.js
In the `data.js` file, the `image` field for each card points to the image file:
```javascript
{
    id: 0,
    name: "The Fool",
    description: "A new beginning, taking a leap of faith...",
    image: "cards/the_fool.jpg"  // Make sure this path matches your file
}
```

### 3. Deploy to GitHub Pages

#### Step 1: Create a GitHub Repository
1. Go to [github.com/new](https://github.com/new)
2. Name it `mehrunes77.github.io`
3. Make it **Public**
4. Click "Create Repository"

#### Step 2: Upload Your Files
1. Click "Add file" → "Upload files"
2. Upload these files:
   - `index.html`
   - `styles.css`
   - `script.js`
   - `data.js`
   - The `cards` folder with all your card images

#### Step 3: Access Your Website
Visit: `https://mehrunes77.github.io`

## File Descriptions

- **index.html**: Main HTML structure (the page layout)
- **styles.css**: All styling and visual design
- **script.js**: JavaScript code that makes the button work
- **data.js**: Contains all 22 tarot card names and descriptions
- **cards/**: Folder containing your scanned card images

## Adding More Cards

To add the Minor Arcana cards (Cups, Wands, Swords, Pentacles):

1. Add images to the `cards/` folder
2. Add card objects to the `tarotCards` array in `data.js`

Example:
```javascript
{
    id: 22,
    name: "Ace of Cups",
    description: "New beginnings in emotions, cups, feelings...",
    image: "cards/ace_of_cups.jpg"
}
```

## Customization

### Change Colors
Open `styles.css` and find the color values:
- `#667eea` - Purple color (can be changed to any hex color)
- `#764ba2` - Dark purple

Example: Change `#667eea` to `#ff6b6b` for red theme.

### Change Card Descriptions
Edit the `description` field in `data.js` for any card.

### Change Title
Edit the `<h1>` text in `index.html` or the page title in the `<title>` tag.

## Troubleshooting

**Images not showing?**
- Check that file names match exactly (capitalization matters)
- Make sure images are in the `cards/` folder
- Try using `.png` instead of `.jpg` if images aren't loading

**Button not working?**
- Open browser console (F12) and check for errors
- Make sure `script.js` and `data.js` are in the root folder
- Check that `index.html` links to these files correctly

**Website not live?**
- Repository must be named `mehrunes77.github.io`
- Repository must be Public (not Private)
- Wait 1-2 minutes for GitHub Pages to deploy

## Need Help?
- Check GitHub Pages documentation: https://pages.github.com/
- Browser console (F12 → Console) shows error messages

---

**Made with 💜 and GitHub Pages** ✨
