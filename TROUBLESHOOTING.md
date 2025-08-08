# 🔧 Troubleshooting Guide

## 🚨 Common Issues & Solutions

### 1. Plugin Error: "expo-haptics does not contain a valid config plugin"

**Solution:**
```bash
# Run the fix script
npm run fix

# Or manually:
npm install
npx expo install expo-haptics
npx expo r -c
```

**Why this happens:** The expo-haptics plugin was incorrectly configured in app.json. This has been fixed.

### 2. "No apps connected" Error

**Solutions:**
```bash
# Clear cache and restart
npm run clean

# Or manually:
npx expo r -c
npm start
```

**Then:**
- Install **Expo Go** app on your phone
- Scan the QR code with Expo Go
- Or use Android Studio/iOS Simulator

### 3. Metro Bundler Issues

**Solutions:**
```bash
# Clear Metro cache
npx expo start --clear

# Reset cache completely
rm -rf node_modules
npm install
npx expo r -c
```

### 4. Dependencies Issues

**Solutions:**
```bash
# Install missing dependencies
npm install

# Install Expo-specific dependencies
npx expo install

# Check for outdated packages
npm outdated
npm update
```

### 5. Android Studio Issues

**For Android development:**
```bash
# Make sure ANDROID_HOME is set
echo $ANDROID_HOME

# If not set, add to your shell profile:
export ANDROID_HOME=$HOME/Android/Sdk
export PATH=$PATH:$ANDROID_HOME/tools
export PATH=$PATH:$ANDROID_HOME/platform-tools
```

### 6. iOS Simulator Issues

**For iOS development:**
```bash
# Make sure Xcode is installed
xcode-select --install

# Open iOS Simulator
open -a Simulator
```

## 🚀 Quick Fix Commands

### Run the automatic fix:
```bash
npm run fix
```

### Manual fixes:
```bash
# Clear everything and restart
npm run clean
npm install
npx expo start --clear

# If still having issues
rm -rf node_modules package-lock.json
npm install
npx expo install
```

## 📱 Running the App

### Option 1: Expo Go (Easiest)
1. Install **Expo Go** from App Store/Play Store
2. Run: `npm start`
3. Scan QR code with Expo Go

### Option 2: Android Studio
1. Install Android Studio
2. Set up Android SDK
3. Run: `npm run android`

### Option 3: iOS Simulator
1. Install Xcode
2. Run: `npm run ios`

## 🔍 Debugging Steps

### 1. Check Dependencies
```bash
npm list --depth=0
```

### 2. Check Expo CLI
```bash
npx expo --version
```

### 3. Check Node Version
```bash
node --version
# Should be 16 or higher
```

### 4. Check Metro Bundler
```bash
npx expo start --tunnel
```

## 🛠️ Environment Setup

### Required Tools:
- **Node.js** (v16+)
- **npm** or **yarn**
- **Expo CLI**: `npm install -g @expo/cli`
- **Android Studio** (for Android development)
- **Xcode** (for iOS development, Mac only)

### Optional but Recommended:
- **Expo Go** app on your phone
- **VS Code** with React Native extensions

## 📞 Still Having Issues?

### Check these resources:
1. **Expo Documentation**: https://docs.expo.dev/
2. **React Native Documentation**: https://reactnative.dev/
3. **Expo Forums**: https://forums.expo.dev/

### Common Error Messages:

**"Metro bundler error"**
```bash
npx expo start --clear
```

**"Unable to resolve module"**
```bash
npm install
npx expo install
```

**"Permission denied"**
```bash
chmod +x scripts/fix-common-issues.sh
```

**"Port already in use"**
```bash
# Kill the process using the port
lsof -ti:8081 | xargs kill -9
```

---

**Need more help?** Check the main README or create an issue in the repository.
