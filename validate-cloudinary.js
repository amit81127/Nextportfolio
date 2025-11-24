const fs = require('fs');
const path = require('path');

const envPath = path.join(process.cwd(), '.env');
const envLocalPath = path.join(process.cwd(), '.env.local');

function parseEnv(filePath) {
  if (!fs.existsSync(filePath)) return {};
  const content = fs.readFileSync(filePath, 'utf8');
  const env = {};
  content.split('\n').forEach(line => {
    const [key, value] = line.split('=');
    if (key && value) {
      env[key.trim()] = value.trim();
    }
  });
  return env;
}

const env = { ...parseEnv(envPath), ...parseEnv(envLocalPath) };

const cloudName = env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME;
const uploadPreset = env.NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET;

console.log('\n🔍 Checking Cloudinary Configuration...\n');

let hasError = false;

if (cloudName) {
  console.log(`✅ Cloud Name found: ${cloudName}`);
} else {
  console.log(`❌ Missing NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME`);
  hasError = true;
}

if (uploadPreset) {
  console.log(`✅ Upload Preset found: ${uploadPreset}`);
} else {
  console.log(`❌ Missing NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET`);
  hasError = true;
}

if (hasError) {
  console.log('\n⚠️  ACTION REQUIRED:');
  console.log('Please add the missing variables to your .env file.');
  console.log('Example:');
  console.log('NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME=your_cloud_name');
  console.log('NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET=your_unsigned_preset');
} else {
  console.log('\n✅ Configuration looks correct!');
  console.log('If upload still fails, please verify:');
  console.log('1. The Upload Preset is set to "Unsigned" in Cloudinary Dashboard.');
  console.log('2. The Cloud Name is correct.');
}
