# TAINA Documentation Translation Guide

This guide explains how to add translated documentation to the TAINA Docusaurus project.

## Adding Translated Files to Docusaurus

1. **Prepare your translated file**:
   - Translate the content from English to Spanish
   - Keep technical terms (code, filenames, database columns) in English
   - Translate UI elements to Spanish
   - Maintain the same markdown formatting and structure
   - Keep the same frontmatter (sidebar_position, etc.)

2. **Place the file in the correct location**:
   - Original English files are in: `docs/[section]/[subsection]/filename.md`
   - Translated Spanish files go in: `i18n/es/docusaurus-plugin-content-docs/current/[section]/[subsection]/filename.md`
   - Make sure the directory structure matches exactly

3. **Example**:
   - English file: `docs/design/ui-design/4.3_Wireframes.md`
   - Spanish file: `i18n/es/docusaurus-plugin-content-docs/current/design/ui-design/4.3_Wireframes.md`

4. **Create directories if needed**:
   ```powershell
   New-Item -Path "D:\github_windows\taina-docs\i18n\es\docusaurus-plugin-content-docs\current\[section]\[subsection]" -ItemType Directory -Force
   ```

5. **Update the TRANSLATION_TODO.md file**:
   - Mark the document as completed
   - Add any notes about the translation if needed

## Testing Your Translations

1. **Start the Docusaurus development server**:
   ```bash
   npm run start
   ```

2. **Switch to Spanish**:
   - Click the language dropdown in the top right
   - Select "Español"

3. **Verify your translations**:
   - Navigate to the translated page
   - Check that all content is properly translated
   - Verify that formatting is preserved
   - Ensure that technical terms remain in English

## Building for Production

When you're ready to build the site with all translations:

```bash
npm run build
```

This will generate a production build with all translations included.
