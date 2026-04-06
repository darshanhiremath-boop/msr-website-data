# Villa Customization Portal - Documentation

## 📋 Overview
This comprehensive customization portal serves dual purposes:
1. **Development Team Reference** - Complete specifications and pricing
2. **Villa Owner Interface** - Interactive exploration of upgrade options

---

## 🎯 Portal Features

### 1. **Hero Section**
- Engaging introduction with villa customization overview
- Key statistics: 8 categories, 50+ upgrades, 100% flexible
- Clear call-to-action buttons

### 2. **How It Works (4-Step Process)**
- Step 01: Explore Categories
- Step 02: Select Upgrades
- Step 03: Visualize Impact
- Step 04: Confirm & Build

### 3. **8 Customization Categories**
Each category card includes:
- Category number and visual preview
- Description and key features
- Click to open detailed modal with pricing

**Categories:**
1. **Space Customizations** - Kitchen layouts, powder rooms, maid's quarters
2. **Marble Packages** - Package 01 (₹14.75L), Package 02 (₹5.0L), Custom
3. **Bathroom Upgrades** - Duravit collections, Hansgrohe fittings, bathtubs/jacuzzis
4. **Personalized Interiors** - Modular kitchen, wardrobes, lighting
5. **Landscape Packages** - Garden, terrace, irrigation systems
6. **Smart Home** - Silver (₹8L), Gold (₹12.5L), Platinum (₹17L)
7. **VRF Cooling System** - ₹13.5L with 50% energy savings
8. **Lift Interior** - Standard (₹3L), Elite (₹6L), Grandeur (₹9L)

### 4. **Interactive Floor Visualizer**
- Toggle between Standard vs Premium Upgrade views
- Select different floors (Ground/First/Second)
- Visual floor plans with legend
- Room-by-room comparison list
- Real-time updates

### 5. **Popular Package Bundles**
- **Premium Essentials** (₹22L+) - Most Popular
- **Comfort Plus** (₹15L+) - Best Value
- **Grand Living** (₹45L+) - Ultimate Luxury

### 6. **Contact Form**
- Full name, email, phone
- Villa number (optional)
- Multi-select interested categories
- Additional comments
- Submit for quote

---

## 💰 Complete Pricing Reference

### Marble Flooring Packages
- **Package 01 (All Rooms)**: ₹14.75 Lakhs + GST
  - All rooms except home theatre
  - Italian Botticino Marble
  
- **Package 02 (Selective)**: ₹5.0 Lakhs + GST
  - Master Bedroom
  - First Floor Family Lounge
  - Second Floor Lounge
  
- **Custom**: Room-by-room calculation

### Bathroom Upgrades

**Duravit Collections:**
- Happy D2 Series
  - Bathtub: ₹6.65L
  - Jacuzzi: ₹12.0L
  
- Qatego Series
  - Bathtub: ₹6.65L
  - Jacuzzi: ₹10.0L
  
- Zencha Series
  - Bathtub: ₹7.60L
  - Jacuzzi (Semi-Functional): ₹10.65L

**Hansgrohe Shower Systems:**
- Upgrade Option 01: ₹7.50L (Complete system)
- Upgrade Option 02: ₹2.50L (Premium shower set)

### Smart Home Packages
- **Silver Package**: ₹8.0 Lakhs
  - 28 lighting circuits (on/off)
  - 1 motorized curtain
  - Mobile app control
  - 5 CCTV cameras
  
- **Gold Package**: ₹12.5 Lakhs
  - 28 on/off + 64 dimmable lights
  - 3 motorized curtains
  - Energy monitoring
  - 9 occupancy sensors
  
- **Platinum Package**: ₹17.0 Lakhs
  - 42 on/off + 128 dimmable lights
  - 7 motorized curtains
  - Complete automation
  - LPG monitoring

### VRF Cooling System
- **Complete System**: ₹13.5 Lakhs
  - 50% energy savings (₹1.0-1.25L annual savings)
  - Individual room control
  - Single outdoor unit
  - Note: False ceiling work additional

### Lift Interior Refinement
- **Standard**: ₹3.0 Lakhs
  - Push buttons, solid door, basic interior
  
- **Elite**: ₹6.0 Lakhs
  - Touch buttons, premium interior, ceiling light
  
- **Grandeur**: ₹9.0 Lakhs
  - Touchless buttons, half-glass door, rose gold interior

---

## 🗂️ File Structure

```
portal-complete/
├── index.html          # Main portal page
├── styles.css          # Complete styling
├── script.js           # Interactive functionality
└── images/             # 71 images from PowerPoint
    ├── image1.png
    ├── image2.png
    └── ... (69 more images)
```

---

## 🚀 Deployment Instructions

### Option 1: GitHub + Vercel (Recommended)

1. **Create/Update GitHub Repository**
   ```bash
   git clone https://github.com/darshanhiremath-boop/midsummer-rain-website.git
   cd midsummer-rain-website
   ```

2. **Replace files**
   - Copy `index.html`, `styles.css`, `script.js` to root
   - Copy `images/` folder to root

3. **Commit and Push**
   ```bash
   git add .
   git commit -m "Add comprehensive customization portal"
   git push origin main
   ```

4. **Vercel Auto-Deploy**
   - Vercel will detect changes and deploy automatically
   - Wait 30-60 seconds
   - Hard refresh your site (Ctrl+Shift+R)

### Option 2: Direct File Upload to GitHub

1. Go to your GitHub repository
2. Delete old files (if needed)
3. Upload `index.html`, `styles.css`, `script.js`
4. Create `images` folder and upload all 71 images
5. Wait for Vercel to deploy

---

## 🎨 Design System

### Colors
- Primary: `#0A5C47` (Deep Green)
- Secondary: `#B8956A` (Gold)
- Accent: `#C4905C` (Bronze)
- Dark: `#1A1A1A`
- Off-white: `#F8F6F3`

### Typography
- Display: 'Cormorant Garamond' (Headings)
- Body: 'Montserrat' (Content)

### Key Components
- Category cards with hover effects
- Interactive floor visualizer
- Modal system for detailed information
- Responsive forms
- Smooth animations throughout

---

## 📱 Responsive Design
- Desktop: Full layout with side-by-side comparisons
- Tablet: Stacked layouts, simplified navigation
- Mobile: Single column, touch-friendly controls

---

## 🔧 Customization for Team

### Adding New Categories
Edit `script.js` and add to `categoryContent` object:
```javascript
newCategory: {
    title: 'Category Name',
    content: `HTML content with pricing and details`
}
```

### Updating Prices
Search for price values in:
- `index.html` (displayed prices)
- `script.js` (modal content)

### Changing Images
Replace images in `/images` folder, keeping same filenames for floor plans:
- `ground-floor-standard.jpg`
- `ground-floor-upgrade.jpg`
- `first-floor-standard.jpg`
- `first-floor-upgrade.jpg`
- `second-floor-standard.jpg`
- `second-floor-upgrade.jpg`

---

## ✅ Testing Checklist

- [ ] All 8 category cards open modals
- [ ] Floor visualizer switches between floors
- [ ] Standard/Premium toggle works
- [ ] All images load correctly
- [ ] Contact form submission works
- [ ] Mobile responsive layout
- [ ] Smooth scrolling navigation
- [ ] Package buttons trigger actions

---

## 📞 Support Information

For technical questions or modifications, contact:
- **Email**: customize@midsummerrain.com
- **Phone**: +91 XXXXX XXXXX

---

## 📝 Notes

- All prices mentioned are + GST
- Images are placeholders from PowerPoint - replace with actual photos
- Contact form needs backend integration for production
- Consider adding CRM integration for lead capture
- Add Google Analytics for tracking

---

**Version**: 1.0  
**Last Updated**: April 2026  
**Created By**: Claude AI for Capstone Life
