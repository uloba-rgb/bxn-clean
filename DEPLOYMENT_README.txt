BXN WEBSITE - CLEAN DEPLOYMENT PACKAGE

Prepared for: uloba.brandxnetworking.com

IMPORTANT:
- The BXN logo is bundled locally at client/public/bxn-logo.png.
- Header and footer now use /bxn-logo.png, so the logo no longer depends on Manus storage.
- The project folder structure is restored (client/, server/, shared/, patches/).
- A GitHub Pages workflow is included at .github/workflows/deploy.yml.
- The custom-domain CNAME is included at client/public/CNAME.

Recommended upload method:
1. Create a fresh GitHub repository or clear the incorrect flattened repository.
2. Upload the CONTENTS of this project preserving folders. Git/GitHub Desktop is safest.
3. In repository Settings > Pages, set Source to GitHub Actions.
4. Push/commit to main and wait for the Deploy BXN Website action to finish.
5. In Squarespace DNS, create the DNS record GitHub tells you to use for uloba.brandxnetworking.com.

Do not rename client/, src/, patches/, or bxn-logo.png.
