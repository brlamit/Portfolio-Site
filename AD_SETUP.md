# Ad Integration Setup

## ✅ Publisher ID Updated!

Your AdSense publisher ID `ca-pub-8523398566125571` has been set in the Ad component.

## Next Steps: Create Ad Units

1. **Go to your AdSense Dashboard**: [adsense.google.com](https://adsense.google.com)

2. **Create Ad Units**:
   - Click "Ads" → "By ad unit" → "Display ads"
   - Create **3 ad units** (one for each placement):
     - Name: "Hero Banner" (for after Hero section)
     - Name: "Content Banner" (for between Projects and Experience)
     - Name: "Footer Banner" (for before Footer)

3. **Get Ad Unit IDs**:
   - After creating each ad unit, copy the "Ad unit code"
   - Look for the `data-ad-slot="XXXXXXXXXX"` value

4. **Update Slot IDs in App.tsx**:
   - Open `src/App.tsx`
   - Replace the placeholder slot IDs with your real ones:
     ```tsx
     // After Hero section
     <Ad slot="YOUR_FIRST_AD_UNIT_ID" className="max-w-md" isDarkMode={isDarkMode} />

     // Between Projects and Experience
     <Ad slot="YOUR_SECOND_AD_UNIT_ID" className="max-w-lg" isDarkMode={isDarkMode} />

     // Before Footer
     <Ad slot="YOUR_THIRD_AD_UNIT_ID" className="max-w-md" isDarkMode={isDarkMode} />
     ```

## Ad Placement Locations

- **Hero Banner**: After the Hero section (top of page)
- **Content Banner**: Between Projects and Experience sections (middle of page)
- **Footer Banner**: Before the Footer (bottom of page)

## Testing

1. Save your changes
2. Run `npm run dev` to start the development server
3. Visit `http://localhost:5174` to see your ads
4. Check browser console for any AdSense errors

## Important Notes

- Ads may not show immediately - AdSense needs time to review and approve
- Make sure your site complies with AdSense policies
- Monitor performance in your AdSense dashboard