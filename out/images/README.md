# Images Directory

This directory contains all the images used in your portfolio website.

## Directory Structure

```
public/images/
├── README.md              # This file
├── avatar.jpg             # Your profile picture (optional)
├── favicon.ico            # Website favicon, 
├── projects/              # Project showcase images
│   ├── churn-prediction.jpg
│   ├── sales-dashboard.jpg
│   ├── sentiment-analysis.jpg
│   ├── time-series.jpg
│   └── etl-pipeline.jpg
└── icons/                 # Custom icons (optional)
```

## Image Guidelines

### Profile Avatar
- **File**: `avatar.jpg`
- **Size**: 400x400 pixels (minimum)
- **Format**: JPG or PNG
- **Style**: Professional headshot or business photo

### Project Images
- **Directory**: `projects/`
- **Size**: 800x600 pixels (16:9 ratio recommended)
- **Format**: JPG or PNG
- **Content**: Screenshots, visualizations, or relevant project imagery

### Favicon
- **File**: `favicon.ico`
- **Size**: 32x32 pixels
- **Format**: ICO format
- **Content**: Your initials or a simple icon

## Adding New Images

1. **Place your image** in the appropriate directory
2. **Update the data file** to reference the new image path
3. **Optimize the image** for web (compress if needed)
4. **Test the website** to ensure images load correctly

## Image Optimization Tips

- Use JPG for photographs, PNG for graphics with transparency
- Compress images to reduce file size while maintaining quality
- Consider using WebP format for better compression (with fallbacks)
- Keep image dimensions reasonable (max 1200px width for most images)

## Example Usage

In your data files, reference images like this:

```typescript
// In data/profile.ts
avatar: "/images/avatar.jpg"

// In data/projects.ts
image: "/images/projects/churn-prediction.jpg"
```

## Notes

- All image paths should start with `/images/`
- The `public/` directory is served at the root of your website
- Make sure image files exist before referencing them in your data
- Consider adding alt text descriptions for accessibility
