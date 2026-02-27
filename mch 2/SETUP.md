# How to Deploy MagicCircleHub (10 minutes)

## Step 1 — Add your Gemini API key to Netlify

1. Log into netlify.com
2. After deploying (Step 2), go to: Site Settings → Environment Variables
3. Click "Add a variable"
4. Key: GEMINI_API_KEY
5. Value: AIzaSyDG2weej-5R5VtaE00o7vuiG6Vy5borrOA
6. Click Save, then redeploy

## Step 2 — Deploy the site

1. Go to netlify.com → "Add new site" → "Deploy manually"
2. Drag the entire mch folder onto the upload area
3. Your site is live at a URL like: https://amazing-name-123.netlify.app

## Step 3 — Set environment variable (from Step 1)
After deploying, add the GEMINI_API_KEY in Site Settings → Environment Variables
Then: Deploys → Trigger deploy → Deploy site

## Updating content
- Open any .html file in a text editor (Notepad on Windows, TextEdit on Mac)
- Make your changes
- Drag the mch folder onto Netlify again to redeploy

## Custom domain (optional)
- Buy magiccirclehub.co.uk from namecheap.com (~£8/year)  
- In Netlify: Site Settings → Domain Management → Add custom domain
- Follow the DNS instructions

## The AI matcher
The /match page uses Gemini AI + Google web search to:
1. Match the student to the right firm using psychological profiling
2. Search the internet for real recent cases at that firm
3. Align those cases to the student's specific interests
All free on Gemini's free tier (1M tokens/day).
