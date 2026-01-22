# Infernation - Digital Marketing Agency Website

A modern, responsive web application for Infernation, a next-generation content creation and digital innovation platform designed to transform ideas into impactful experiences.

## 🚀 About

Infernation is a cutting-edge digital marketing agency specializing in:
- **Visual Content Creation** - Professional photography, videography, and graphic design
- **Digital Marketing** - SEO, social media marketing, and performance analytics
- **Design & Development** - Web and app development with modern frameworks
- **Event Planning** - Comprehensive event management and execution
- **Influencer Collaborations** - Strategic partnerships with content creators

## ✨ Features

- **Responsive Design** - Fully optimized for desktop, tablet, and mobile devices
- **Modern UI/UX** - Premium aesthetic with smooth animations and transitions
- **Dynamic Content** - Interactive sections with scroll-based animations
- **Service Showcases** - Detailed presentation of all agency offerings
- **Contact Integration** - Easy-to-use contact forms and direct communication links
- **Dark/Light Mode** - Theme switcher for user preference
- **Performance Optimized** - Fast loading times and smooth navigation

## 🛠️ Tech Stack

- **Frontend Framework:** React 19
- **Build Tool:** Vite 7
- **Routing:** React Router DOM 7
- **Styling:** Bootstrap 5 + Custom CSS
- **Animations:** Animate.css + React Intersection Observer
- **UI Components:** Swiper for carousels and sliders
- **Icons:** Font Awesome

## 📦 Installation

### Prerequisites
- Node.js (v18 or higher)
- npm or yarn

### Setup

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd Infernation
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   ```
   Navigate to http://localhost:5173
   ```

## 📜 Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server with hot reload |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build locally |
| `npm run lint` | Run ESLint to check code quality |

## 📁 Project Structure

```
Infernation/
├── public/
│   └── assets/
│       ├── images/      # Static images and graphics
│       └── videos/      # Video content
├── src/
│   ├── assets/
│   │   └── css/         # Global and responsive styles
│   ├── Components/
│   │   ├── Header/      # Navigation components
│   │   ├── Footer/      # Footer components
│   │   ├── ChooseUs/    # Why choose us sections
│   │   ├── Card/        # Reusable card components
│   │   └── ...          # Other feature components
│   ├── Data/            # Static data files
│   ├── App.jsx          # Main App component
│   └── main.jsx         # Application entry point
├── index.html           # HTML template
├── vite.config.js       # Vite configuration
└── package.json         # Project dependencies
```

## 🎨 Customization

### Updating Logo Sizes
Logo sizes can be adjusted in the CSS files:

- **Desktop:** `src/assets/css/main.css` - Line ~625 (`.site-logo`)
- **Tablet:** `src/assets/css/responsive.css` - Line ~85 (inside `@media screen and (max-width: 991px)`)
- **Mobile:** `src/assets/css/responsive.css` - Line ~480 (inside `@media screen and (max-width: 767px)`)

### Color Scheme
The color scheme is defined using CSS variables in `src/assets/css/main.css`. Modify the `:root` variables to change the theme.

## 📧 Contact

For business inquiries:
- **Email:** dreams@infernation.com
- **Phone:** +94 (0) 766 338 858
- **Website:** [Infernation](https://infernation.com)

## 📄 License

© 2026 Infernation. All Rights Reserved.

---

**Built with ❤️ by the Infernation Team**
