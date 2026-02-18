@echo off
echo Renaming PDF files to match website expectations...
echo.

REM Rename Audit Reports
cd public\pdfs\audit-reports
echo Renaming audit reports...
ren "AIMS Annual report 2022- 2025.pdf" "audit-report-2022-2025.pdf"
ren "AIM Pakistan 2019 - 2021 Annual Report.pdf" "audit-report-2019-2021.pdf"
ren "6. Annual Reports 2018-2019.pdf" "audit-report-2016-2019.pdf"
cd ..\..\..

REM Rename Certifications
cd public\pdfs\certifications
echo Renaming certifications...
ren "social welfare certificate 2025 PDF.pdf" "social-welfare-registration.pdf"
ren "PCP - AIMS 2023.pdf" "pcp-certificate.pdf"
ren "NPO certificate.pdf" "fbr-tax-exemption.pdf"
ren "ISO.pdf" "iso-9001-certified.pdf"
ren "MSDS licence .pdf" "hcc-registration.pdf"
ren "Shariah Certificate For AIMS  2026.pdf" "shariah-compliant.pdf"
cd ..\..\..

echo.
echo Done! All PDFs have been renamed.
echo.
echo Next steps:
echo 1. Run: npm run dev
echo 2. Test the download buttons on your website
echo 3. If everything works, run: git add public/pdfs
echo 4. Then: git commit -m "Rename PDFs to match website expectations"
echo 5. Finally: git push origin main
echo.
pause
