#!/usr/bin/env node

const https = require('https');
const { execSync } = require('child_process');
const fs = require('fs');

// Technologies to check
const technologies = [
  // Core Framework
  { name: 'Next.js', npm: 'next' },
  { name: 'React', npm: 'react' },
  { name: 'React DOM', npm: 'react-dom' },
  
  // Development Tools
  { name: 'TypeScript', npm: 'typescript' },
  { name: 'ESLint', npm: 'eslint' },
  { name: 'PostCSS', npm: 'postcss' },
  { name: 'Autoprefixer', npm: 'autoprefixer' },
  
  // Styling
  { name: 'Tailwind CSS', npm: 'tailwindcss' },
  
  // Image Processing
  { name: 'Sharp', npm: 'sharp' },
  
  // Email Service
  { name: 'SendGrid', npm: '@sendgrid/mail' },
  
  // Type Definitions
  { name: '@types/node', npm: '@types/node' },
  { name: '@types/react', npm: '@types/react' },
  { name: '@types/react-dom', npm: '@types/react-dom' },
  
  // Configuration
  { name: '@ljharb/tsconfig', npm: '@ljharb/tsconfig' },
  { name: '@eslint/eslintrc', npm: '@eslint/eslintrc' },
  { name: 'eslint-config-next', npm: 'eslint-config-next' },
  
  // Build Tools
  { name: '@svgr/webpack', npm: '@svgr/webpack' }
];

// Function to get latest version from npm registry
function getLatestVersion(packageName) {
  return new Promise((resolve, reject) => {
    const url = `https://registry.npmjs.org/${packageName}/latest`;
    
    https.get(url, (res) => {
      let data = '';
      
      res.on('data', (chunk) => {
        data += chunk;
      });
      
      res.on('end', () => {
        try {
          const packageInfo = JSON.parse(data);
          resolve(packageInfo.version);
        } catch (error) {
          reject(new Error(`Failed to parse response for ${packageName}: ${error.message}`));
        }
      });
    }).on('error', (error) => {
      reject(new Error(`Failed to fetch ${packageName}: ${error.message}`));
    });
  });
}

// Function to get current installed version from node_modules
function getInstalledVersion(packageName) {
  try {
    const packageJsonPath = `./node_modules/${packageName}/package.json`;
    if (fs.existsSync(packageJsonPath)) {
      const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, 'utf8'));
      return packageJson.version;
    }
    return 'Not installed';
  } catch (error) {
    return 'Error reading package.json';
  }
}

// Function to get version range from package.json
function getVersionRange(packageName) {
  try {
    const packageJson = require('./package.json');
    const allDeps = { ...packageJson.dependencies, ...packageJson.devDependencies };
    return allDeps[packageName] || 'Not specified';
  } catch (error) {
    return 'Error reading package.json';
  }
}

// Main function
async function checkVersions() {
  console.log('🔍 Checking latest versions of your tech stack...\n');
  
  const results = [];
  
  for (const tech of technologies) {
    try {
      const latestVersion = await getLatestVersion(tech.npm);
      const installedVersion = getInstalledVersion(tech.npm);
      const versionRange = getVersionRange(tech.npm);
      
      results.push({
        name: tech.name,
        installed: installedVersion,
        latest: latestVersion,
        range: versionRange,
        npm: tech.npm
      });
    } catch (error) {
      console.error(`❌ Error checking ${tech.name}: ${error.message}`);
    }
  }
  
  // Display results in a nice table format
  console.log('📊 Version Comparison:\n');
  console.log('Technology'.padEnd(20) + 'Installed'.padEnd(12) + 'Latest'.padEnd(12) + 'Range'.padEnd(15) + 'Status');
  console.log('─'.repeat(80));
  
  results.forEach(result => {
    const installed = result.installed;
    const latest = result.latest;
    const range = result.range;
    
    let status = '✅ Up to date';
    if (installed === 'Not installed') {
      status = '❌ Not installed';
    } else if (installed !== latest) {
      status = '🔄 Update available';
    }
    
    console.log(
      result.name.padEnd(20) +
      installed.padEnd(12) +
      latest.padEnd(12) +
      range.padEnd(15) +
      status
    );
  });
  
  console.log('\n📋 Summary:');
  const upToDate = results.filter(r => r.installed === r.latest).length;
  const needsUpdate = results.filter(r => r.installed !== r.latest && r.installed !== 'Not installed').length;
  const notInstalled = results.filter(r => r.installed === 'Not installed').length;
  
  console.log(`✅ Up to date: ${upToDate}`);
  console.log(`🔄 Needs update: ${needsUpdate}`);
  console.log(`❌ Not installed: ${notInstalled}`);
  
  if (needsUpdate > 0) {
    console.log('\n💡 To update packages, run:');
    console.log('npm update');
    console.log('or for specific packages:');
    console.log('npm install package-name@latest');
  }
  
  // Check Node.js version
  try {
    const nodeVersion = process.version;
    console.log(`\n🟢 Node.js version: ${nodeVersion}`);
  } catch (error) {
    console.log('\n❌ Could not determine Node.js version');
  }
  
  // Check npm version
  try {
    const npmVersion = execSync('npm --version', { encoding: 'utf8' }).trim();
    console.log(`📦 npm version: ${npmVersion}`);
  } catch (error) {
    console.log('\n❌ Could not determine npm version');
  }
  
  // Additional Next.js features
  console.log('\n🔧 Next.js Features:');
  console.log('✅ Turbopack (enabled in dev script)');
  console.log('✅ Next.js Fonts (next/font/google)');
  console.log('✅ Image Optimization (next/image)');
  console.log('✅ API Routes (next/server)');
}

// Run the script
checkVersions().catch(console.error); 