
# Minimuze Admin Panel - Standalone Application

This is a separate, standalone admin panel for managing the Minimuze store.

## Features
- Product Management
- Order Management  
- Payment Screenshot Verification
- Customer Management
- Analytics Dashboard
- Settings

## How to Use

### Option 1: Direct File Access
1. Open `index.html` directly in your browser
2. No build process required - uses CDN resources

### Option 2: Serve with HTTP Server
```bash
# Navigate to admin-app directory
cd src/admin-app

# Serve with Python (if available)
python -m http.server 8080

# Or with Node.js http-server
npx http-server -p 8080

# Access at http://localhost:8080
```

### Option 3: Deploy Separately
- Upload the `admin-app` folder to any web hosting service
- Configure as a separate subdomain (e.g., admin.minimuze.com)
- Ensure proper authentication/security before production use

## Integration with Main App
- This admin panel is completely separate from the main e-commerce site
- Can be hosted on different domains/servers
- No shared dependencies or build process
- Easy to secure with separate authentication

## Security Notes
- Add authentication before production use
- Consider IP whitelisting for admin access
- Use HTTPS in production
- Implement proper session management

## Customization
- Modify styling in the Tailwind classes
- Add new admin sections by extending the `adminTabs` array
- Connect to your backend APIs by replacing sample data
