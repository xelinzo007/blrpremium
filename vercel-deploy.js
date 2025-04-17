// This script ensures Vercel can find all the necessary files
const fs = require('fs');
const path = require('path');

// Make sure we're in the root directory for Vercel
try {
  // Check if package.json exists
  if (!fs.existsSync(path.join(process.cwd(), 'package.json'))) {
    console.error('Error: package.json not found in the current directory');
    process.exit(1);
  }

  console.log('✅ Found package.json');

  // Check if client/index.html exists
  if (!fs.existsSync(path.join(process.cwd(), 'client', 'index.html'))) {
    console.error('Error: client/index.html not found');
    process.exit(1);
  }

  console.log('✅ Found client/index.html');

  // Check if server/index.ts exists
  if (!fs.existsSync(path.join(process.cwd(), 'server', 'index.ts'))) {
    console.error('Error: server/index.ts not found');
    process.exit(1);
  }

  console.log('✅ Found server/index.ts');

  console.log('All required files are present for Vercel deployment');
} catch (error) {
  console.error('Error checking files:', error);
  process.exit(1);
}
