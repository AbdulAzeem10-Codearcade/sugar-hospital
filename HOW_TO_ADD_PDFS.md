# 📄 How to Add PDF Files to Your Website

This guide will walk you through adding PDF files to your Sugar Hospital website step by step.

---

## 📁 Step 1: Create the PDF Folders

You need to create folders in your project's `public` directory to store the PDF files.

### Using File Explorer (Windows):

1. Open your project folder: `C:\saa-s-landing-page`
2. Navigate to the `public` folder
3. Create a new folder called `pdfs`
4. Inside the `pdfs` folder, create these 3 subfolders:
   - `audit-reports`
   - `certifications`
   - `conferences`

### Using Command Line:

Open your terminal in the project folder and run:

```cmd
mkdir public\pdfs
mkdir public\pdfs\audit-reports
mkdir public\pdfs\certifications
mkdir public\pdfs\conferences
```

---

## 📋 Step 2: Prepare Your PDF Files

### For Audit Reports:

You need to create/rename 3 PDF files with these EXACT names:

1. `audit-report-2022-2025.pdf` - Latest audit report (2022-2025)
2. `audit-report-2019-2021.pdf` - Previous audit report (2019-2021)
3. `audit-report-2016-2019.pdf` - Older audit report (2016-2019)

### For Certifications:

Create PDF files with these EXACT names (based on your certifications):

1. `social-welfare-registration.pdf`
2. `pcp-certificate.pdf`
3. `fbr-tax-exemption.pdf`
4. `iso-9001-certified.pdf`
5. `hcc-registration.pdf`
6. `shariah-compliant.pdf`

### For Conference Proceedings:

Create PDF files with these EXACT names:

1. `conference-2026.pdf` - 6th International Health Conference
2. `conference-2024.pdf` - 4th International Diabetes Summit
3. `conference-2023.pdf` - 3rd National Health Symposium

---

## 📂 Step 3: Copy PDF Files to the Correct Folders

### Method 1: Using File Explorer

1. **For Audit Reports:**
   - Copy your 3 audit report PDFs
   - Navigate to: `C:\saa-s-landing-page\public\pdfs\audit-reports`
   - Paste the files there
   - Make sure the file names match EXACTLY as listed above

2. **For Certifications:**
   - Copy your 6 certification PDFs
   - Navigate to: `C:\saa-s-landing-page\public\pdfs\certifications`
   - Paste the files there
   - Make sure the file names match EXACTLY as listed above

3. **For Conference Proceedings:**
   - Copy your 3 conference PDFs
   - Navigate to: `C:\saa-s-landing-page\public\pdfs\conferences`
   - Paste the files there
   - Make sure the file names match EXACTLY as listed above

### Method 2: Using Command Line

```cmd
# Copy audit reports
copy "path\to\your\audit-report-2022-2025.pdf" "public\pdfs\audit-reports\"
copy "path\to\your\audit-report-2019-2021.pdf" "public\pdfs\audit-reports\"
copy "path\to\your\audit-report-2016-2019.pdf" "public\pdfs\audit-reports\"

# Copy certifications
copy "path\to\your\social-welfare-registration.pdf" "public\pdfs\certifications\"
copy "path\to\your\pcp-certificate.pdf" "public\pdfs\certifications\"
# ... and so on for other certifications

# Copy conference proceedings
copy "path\to\your\conference-2026.pdf" "public\pdfs\conferences\"
copy "path\to\your\conference-2024.pdf" "public\pdfs\conferences\"
copy "path\to\your\conference-2023.pdf" "public\pdfs\conferences\"
```

---

## ✅ Step 4: Verify Your Folder Structure

Your folder structure should look like this:

```
saa-s-landing-page/
└── public/
    └── pdfs/
        ├── audit-reports/
        │   ├── audit-report-2022-2025.pdf
        │   ├── audit-report-2019-2021.pdf
        │   └── audit-report-2016-2019.pdf
        ├── certifications/
        │   ├── social-welfare-registration.pdf
        │   ├── pcp-certificate.pdf
        │   ├── fbr-tax-exemption.pdf
        │   ├── iso-9001-certified.pdf
        │   ├── hcc-registration.pdf
        │   └── shariah-compliant.pdf
        └── conferences/
            ├── conference-2026.pdf
            ├── conference-2024.pdf
            └── conference-2023.pdf
```

---

## 🧪 Step 5: Test the PDF Downloads

1. **Start your development server:**
   ```cmd
   npm run dev
   ```

2. **Open your browser and go to:**
   - `http://localhost:3000/about#audit-reports` - Test audit report downloads
   - `http://localhost:3000/professionals#awards` - Test certification downloads
   - `http://localhost:3000/professionals#conferences` - Test conference downloads

3. **Click each "Download PDF" button** to verify the files download correctly

---

## 🚀 Step 6: Deploy to Production

Once you've added all PDFs and tested them locally:

1. **Commit the changes:**
   ```cmd
   git add public/pdfs
   git commit -m "Add PDF files for audit reports, certifications, and conferences"
   git push origin main
   ```

2. **Deploy to your hosting platform** (Vercel, Netlify, etc.)

---

## 🔧 Troubleshooting

### Problem: PDF doesn't download when I click the button

**Solution:**
- Check that the PDF file name matches EXACTLY (including hyphens and file extension)
- File names are case-sensitive on some systems
- Make sure the PDF is in the correct folder

### Problem: "File not found" error

**Solution:**
- Verify the folder structure is correct
- Check that you created the folders inside the `public` directory
- Restart your development server after adding PDFs

### Problem: PDF downloads but shows as corrupted

**Solution:**
- Make sure the original PDF file is not corrupted
- Try opening the PDF on your computer first
- Re-copy the file to the correct location

---

## 📝 Quick Reference: File Paths

### Audit Reports:
- `/pdfs/audit-reports/audit-report-2022-2025.pdf`
- `/pdfs/audit-reports/audit-report-2019-2021.pdf`
- `/pdfs/audit-reports/audit-report-2016-2019.pdf`

### Certifications:
- `/pdfs/certifications/social-welfare-registration.pdf`
- `/pdfs/certifications/pcp-certificate.pdf`
- `/pdfs/certifications/fbr-tax-exemption.pdf`
- `/pdfs/certifications/iso-9001-certified.pdf`
- `/pdfs/certifications/hcc-registration.pdf`
- `/pdfs/certifications/shariah-compliant.pdf`

### Conference Proceedings:
- `/pdfs/conferences/conference-2026.pdf`
- `/pdfs/conferences/conference-2024.pdf`
- `/pdfs/conferences/conference-2023.pdf`

---

## 💡 Tips

1. **Keep PDF file sizes reasonable** - Compress large PDFs to improve download speed
2. **Use descriptive file names** - Makes it easier to manage files
3. **Test on mobile devices** - Ensure PDFs open correctly on phones and tablets
4. **Backup your PDFs** - Keep copies of all PDFs in a safe location
5. **Update regularly** - Add new audit reports and conference proceedings as they become available

---

## 🎯 Summary

1. Create folders: `public/pdfs/audit-reports`, `public/pdfs/certifications`, `public/pdfs/conferences`
2. Rename your PDF files to match the exact names listed above
3. Copy PDFs to their respective folders
4. Test locally by running `npm run dev`
5. Commit and push to GitHub
6. Deploy to production

That's it! Your PDFs are now ready to be downloaded from your website. 🎉
