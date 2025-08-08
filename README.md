# 🧬 Helix - Fertility-Aware Dating App

A revolutionary dating platform that combines traditional dating features with fertility awareness, genetic compatibility, and reproductive intent matching.

![Helix App](preview/tinderclone-preview.gif)

## 🌟 Features

### 💕 Fertility-Aware Matching
- **Reproductive Intent**: Specify what you're looking for (egg/sperm donors, co-parenting, relationships)
- **Genetic Compatibility**: Blood type, recessive carrier traits, fertility indicators
- **Donor Matching**: Egg/sperm donor preferences and seeking donors
- **Co-Parenting Support**: Interest in co-parenting arrangements

### 🎯 Professional Dating Features
- **Smooth Swiping**: Tinder-like card swiping with haptic feedback
- **Like/Dislike Overlays**: Visual feedback with "LIKE" and "NOPE" overlays
- **Advanced Filters**: Comprehensive filtering for fertility and lifestyle preferences
- **Professional UI**: Clean, modern interface with smooth animations

### 📱 Enhanced User Experience
- **6-Step Onboarding**: Comprehensive profile setup with fertility questions
- **Real-time Chat**: Professional messaging interface
- **Profile Verification**: ID verification badges
- **Notification System**: Smart notifications for matches and messages

## 🚀 Quick Start

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn
- Expo CLI: `npm install -g @expo/cli`
- EAS CLI: `npm install -g @expo/eas-cli`

### Installation
```bash
# Clone the repository
git clone https://github.com/B4xAbhishek/helix-fertility-dating-app.git
cd helix-fertility-dating-app

# Install dependencies
npm install

# Start the development server
npm start
```

### Running the App
```bash
# Run on Android
npm run android

# Run on iOS
npm run ios

# Run on web
npm run web
```

## 🏗️ Building APK

### Local Build
```bash
# Build Android APK locally
npm run build:android

# Build iOS locally
npm run ios

# Build both platforms locally
npm run build:all
```

### Cloud Build
```bash
# Build Android APK in cloud
npm run build:android-cloud

# Build iOS in cloud
npm run build:ios-cloud

# Build both platforms in cloud
npm run build:all-cloud
```

## 📱 App Screenshots

### Main Profile Screen
- Professional card-based design
- Comprehensive profile information
- Fertility-aware matching indicators
- Smooth swiping animations

### Chat Interface
- Modern messaging design
- Match notifications
- Opening moves suggestions
- Real-time chat status

### Onboarding Flow
- 6-step comprehensive setup
- Fertility preference collection
- Genetic compatibility data
- Lifestyle and family planning

## 🛠️ Technology Stack

- **React Native**: Cross-platform mobile development
- **Expo**: Development platform and tools
- **TypeScript**: Type-safe JavaScript
- **React Navigation**: Navigation between screens
- **Expo Haptics**: Tactile feedback
- **EAS Build**: Cloud build service

## 📋 Project Structure

```
mobile/
├── assets/              # Images, icons, and static files
├── components/          # Reusable UI components
├── screens/            # App screens and navigation
├── scripts/            # Build and utility scripts
├── types.ts            # TypeScript type definitions
├── App.tsx             # Main app component
├── app.json            # Expo configuration
├── eas.json            # EAS build configuration
└── package.json        # Dependencies and scripts
```

## 🔧 Development

### Available Scripts
```bash
npm start              # Start development server
npm run android        # Run on Android
npm run ios           # Run on iOS
npm run web           # Run on web
npm run fix           # Fix common issues
npm run clean         # Clear cache and restart
npm run test          # Test production build
```

### Build Commands
```bash
npm run build:android      # Build Android APK locally
npm run build:ios         # Build iOS locally
npm run build:all         # Build both platforms locally
npm run preview           # Build preview APK
npm run submit:android    # Submit to Play Store
npm run submit:ios        # Submit to App Store
```

## 🎨 Design Features

### Professional UI/UX
- **Modern Design**: Clean, professional interface
- **Smooth Animations**: Tinder-like card transitions
- **Haptic Feedback**: Tactile responses for interactions
- **Color Scheme**: Warm red/pink theme (#FF6B6B)
- **Typography**: Clear, readable fonts

### Enhanced Interactions
- **Pan Gestures**: Natural card swiping
- **Visual Overlays**: Like/dislike feedback
- **Threshold-based Actions**: 120px swipe threshold
- **Button Integration**: Heart and X buttons

## 📊 Fertility Features

### Reproductive Intent
- Searching for egg/sperm donors
- Looking for co-parenting partners
- Relationship and marriage goals
- Direct donor vs. donor bank preferences

### Genetic Compatibility
- Blood type matching
- Recessive carrier traits
- Fertility indicators
- Family history considerations

### Donor Preferences
- Egg donor matching
- Sperm donor matching
- Co-parenting interest
- Seeking donor preferences

## 🚨 Troubleshooting

### Common Issues
```bash
# Fix common issues
npm run fix

# Clear cache and restart
npm run clean

# Check dependencies
npm list --depth=0
```

### Build Issues
- Ensure Android Studio is installed for local builds
- Check that ANDROID_HOME is set
- Use cloud builds if local setup fails
- See `TROUBLESHOOTING.md` for detailed solutions

## 📄 Documentation

- [Build Instructions](BUILD_INSTRUCTIONS.md) - Detailed build guide
- [Troubleshooting](TROUBLESHOOTING.md) - Common issues and solutions
- [API Documentation](docs/api.md) - Backend integration guide

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Built with React Native and Expo
- Inspired by modern dating apps like Tinder, Bumble, and Hinge
- Designed for fertility-aware communities and reproductive health

## 📞 Support

For support and questions:
- Create an issue in this repository
- Check the troubleshooting guide
- Review the build instructions

---

**Made with ❤️ for fertility-aware communities**
