# GitHub Pages Setup Instructions

## ⚠️ Important: Enable GitHub Pages First

Before the GitHub Actions workflow can run successfully, you **must** enable GitHub Pages in your repository settings.

## Step-by-Step Instructions

### 1. Go to Repository Settings

1. Navigate to your repository: https://github.com/yaniam/portfolio_netfly
2. Click on the **Settings** tab (at the top of the repository)

### 2. Enable GitHub Pages

1. In the left sidebar, click on **Pages**
2. Under **Source**, you'll see a dropdown menu
3. Select **GitHub Actions** from the dropdown
4. Click **Save** (if there's a save button)

### 3. Verify the Workflow

1. Go to the **Actions** tab in your repository
2. You should see the "Deploy to GitHub Pages" workflow
3. The workflow will run automatically on the next push to `main`, or you can trigger it manually

### 4. Access Your Site

Once the workflow completes successfully, your site will be available at:
- **URL**: `https://yaniam.github.io/portfolio_netfly/`

## Troubleshooting

### Error: "Get Pages site failed"

**Cause**: GitHub Pages is not enabled in the repository settings.

**Solution**: Follow steps 1-2 above to enable GitHub Pages with GitHub Actions as the source.

### Error: "Permission denied"

**Cause**: The workflow doesn't have the necessary permissions.

**Solution**: 
1. Go to **Settings** → **Actions** → **General**
2. Under **Workflow permissions**, select **Read and write permissions**
3. Check **Allow GitHub Actions to create and approve pull requests**
4. Click **Save**

### Workflow Not Running

**Cause**: GitHub Actions might be disabled.

**Solution**:
1. Go to **Settings** → **Actions** → **General**
2. Under **Actions permissions**, select **Allow all actions and reusable workflows**
3. Click **Save**

## Quick Checklist

- [ ] GitHub Pages is enabled in Settings → Pages
- [ ] Source is set to **GitHub Actions**
- [ ] Workflow permissions are set to **Read and write**
- [ ] Actions are enabled for the repository
- [ ] The workflow file exists at `.github/workflows/deploy.yml`
- [ ] The `.nojekyll` file exists in the root directory

## After Setup

Once Pages is enabled:
1. The workflow will run automatically on every push to `main`
2. You can monitor deployment in the **Actions** tab
3. The site will update automatically after each successful deployment

## Need Help?

If you continue to experience issues:
1. Check the **Actions** tab for detailed error messages
2. Verify all checklist items above
3. Ensure your repository is public (free accounts) or you have GitHub Pro (for private repos with Pages)

