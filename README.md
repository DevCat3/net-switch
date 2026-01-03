# Net Switch Enhanced

Net Switch Enhanced is an improved version of the original Net Switch Magisk module, featuring a refined user interface and enhanced user experience. This module gives you complete control over internet access for individual apps on your rooted Android device, improving privacy, security, and saving bandwidth.

---

## 🚀 Features

- Per-app internet isolation - Block internet access for specific apps
- Enhanced WebUI - Completely redesigned interface with better UX, smoother animations, and improved feedback
- Profile Management - Save, load, and switch between different sets of blocked apps
- Backup & Restore - Securely backup your profiles and restore them when needed
- No VPN Required - Operates directly via iptables, no battery drain
- Terminal Support - Command-line interface for advanced users
- Instant Apply - Changes take effect immediately without reboot

---

## 📱 Screenshots

![Enhanced UI](screenshots/enhanced_ui.png)	![Profile Management](screenshots/profiles.png)	
Enhanced Interface	Profile Management	

(Add your actual screenshots here)

---

## 📋 Requirements

- Android device with root access
- One of the following root managers:
  - [Magisk](https://github.com/topjohnwu/Magisk) (26.0+)
  - [KernelSU](https://github.com/tiann/KernelSU)
  - [APatch](https://github.com/bmax121/APatch)

---

## 📦 Installation

1. Download the latest release from the [Releases](https://github.com/DevCat3/net-switch/releases)
2. Flash the module through your root manager app
3. Reboot your device
4. Access the WebUI through your root manager or use a WebUI opener app

---

## 🎮 Usage

Via WebUI (Recommended)

1. Open the module's WebUI from your root manager or using [MMRL](https://github.com/DerGoogler/MMRL) / [KsuWebUI](https://github.com/5ec1cff/KsuWebUIStandalone)
2. Browse through your installed apps
3. Toggle internet access for each app (changes apply instantly)
4. Create and manage profiles for different use cases
5. Backup your profiles to prevent data loss

Via Terminal

```bash
# Block an app
netswitch block <package_name>

# Unblock an app
netswitch unblock <package_name>

# List all blocked apps
netswitch list

# Unblock all apps
netswitch unblock all

# Show help
netswitch help
```

---

## 🔧 Supported Root Managers

Manager	WebUI Support	Notes	
KernelSU	✅ Native	Full support	
APatch	✅ Native	Full support	
Magisk	⚠️ Requires App	Use MMRL or KsuWebUIStandalone	

For Magisk Users

Magisk doesn't natively support module WebUI. Install one of these apps to access the interface:

- [MMRL](https://github.com/DerGoogler/MMRL) (Recommended)
- [KsuWebUI](https://github.com/5ec1cff/KsuWebUIStandalone)

---

## 🛠️ Building from Source

```bash
# Clone the repository
git clone https://github.com/DevCat3/net-switch.git
cd net-switch

# Make your changes
# Edit files in the web/ directory for UI improvements

# Create a zip file
zip -r9 NetSwitch-Enhanced.zip . -x '*.git*' -x 'screenshots/*'
```

---

## 📝 Changelog

v2.2 (Enhanced)
- NEW: Complete UI overhaul with modern design
- NEW: Smoother animations and transitions
- NEW: Improved mobile responsiveness
- NEW: Better error handling and user feedback
- FIX: Various bug fixes from the original version
- IMPROVED: Faster app loading in WebUI

Previous Versions (Original)
- v1.3: Added profiles, backup manager, and revamped WebUI
- v1.2: Initial stable release

---

## 👏 Credits & Acknowledgments

This project is based on the excellent work of:
- DevCat3 - Fork Developer [Net Switch](https://github.com/DevCat3/net-switch) Developer 
- Rem01Gaming - Original Maintainer of the [active fork](https://github.com/Rem01Gaming/net-switch) with profiles and backup features
- Antonio Riccio - UX/UI contributions to the original project

Enhanced UI and additional improvements by [DevCat3](https://github.com/DevCat3).

---

## 🤝 Support

- 📧 Email: omarelbakery2008@gmail.com
- 💬 Telegram: [Channel](https://t.me/DevCat3Releases)
- 🐛 Issues: [GitHub Issues](https://github.com/DevCat3/net-switch/issues)
- ⭐ Feature Requests: Open an issue with the "enhancement" label

---

# 📄 License

This project is licensed under the GPL-3.0 License - see the [LICENSE](LICENSE) file for details.

---

## 🤲 Contributing

Contributions are welcome! Please feel free to submit a Pull Request. For major changes, please open an issue first to discuss what you would like to change.

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

Made with ❤️ for the Android root community

⭐ If you find this useful, please star the repository!

---

# ⚡ Quick Links

- [📥 Download Latest Release](https://github.com/DevCat3/net-switch/releases/latest)
- [📖 Full Wiki](https://github.com/DevCat3/net-switch/wiki)
- [🐛 Report Bug](https://github.com/DevCat3/net-switch/issues/new?template=bug_report.md)

---


