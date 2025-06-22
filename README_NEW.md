# PII Annotation Trainer

A modern, interactive web application for training users to identify and annotate Personal Information (PII) in Greek and English text. Built with React, TypeScript, and Tailwind CSS.

## 🌟 Features

- **Bilingual Support**: Full Greek and English language support with side-by-side translations
- **Interactive Training**: Practice PII annotation with real-world examples
- **Comprehensive Categories**: 76 different PII categories organized by risk type
- **Modern UI**: Beautiful, responsive design with dark/light mode support
- **Categorized Learning**: Organized by Direct, Strong Indirect, and Weak Indirect PII
- **Reference Guide**: Complete category reference with examples and annotation rules
- **Progress Tracking**: Track your annotation skills across different categories

## 🚀 Live Demo

Visit the live application: [PII Annotation Trainer](https://YOUR_USERNAME.github.io/pii-annotation-trainer)

## 📱 Screenshots

### Light Mode
- Clean, modern interface with intuitive navigation
- Color-coded PII categories for easy identification
- Interactive annotation practice with immediate feedback

### Dark Mode
- Beautiful dark theme with proper contrast
- Consistent theming across all components
- Eye-friendly interface for extended training sessions

## 🛠️ Technology Stack

- **Frontend**: React 18, TypeScript
- **Styling**: Tailwind CSS, shadcn/ui components
- **Build Tool**: Custom Vite-based build system
- **Icons**: Lucide React icons
- **Deployment**: GitHub Pages

## 🏗️ Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── ui/             # shadcn/ui components
│   ├── AnnotationMarker.tsx
│   ├── AnnotationResult.tsx
│   └── Layout.tsx
├── contexts/           # React contexts
│   └── ThemeContext.tsx
├── data/               # Data and configurations
│   ├── examples.ts     # Training examples
│   └── piiCategories.ts # PII category definitions
├── hooks/              # Custom React hooks
├── lib/                # Utility functions
├── pages/              # Main application pages
│   ├── Categories.tsx  # PII categories reference
│   ├── Home.tsx       # Landing page
│   ├── Practice.tsx   # Interactive training
│   └── Rules.tsx      # Annotation guidelines
└── types/              # TypeScript type definitions
```

## 🎯 PII Categories

The application covers 76 different PII categories organized into:

### Direct PII (Άμεση PII)
High-risk personal information that directly identifies individuals:
- Full names, email addresses, phone numbers
- Government IDs, passport numbers
- Biometric data, photos with faces

### Strong Indirect PII (Ισχυρή Έμμεση PII)
Information that can identify individuals when combined:
- Partial names, initials
- Precise locations, addresses
- Professional information

### Weak Indirect PII (Ασθενής Έμμεση PII)
Information with lower identification risk:
- Age ranges, general locations
- Generic professional roles
- General demographic information

## 🚀 Getting Started

### Prerequisites

- Node.js 16+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/YOUR_USERNAME/pii-annotation-trainer.git
cd pii-annotation-trainer
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:8000`

### Building for Production

```bash
npm run build
```

The built files will be in the `dist/` directory.

### Deploying to GitHub Pages

```bash
npm run deploy
```

## 🎨 Customization

### Adding New PII Categories

1. Edit `src/data/piiCategories.ts`
2. Add your new category following the existing pattern:

```typescript
{
  id: 'uniqueId',
  name: 'Category Name (Greek)',
  nameEn: 'Category Name (English)',
  topic: 'personal' | 'contact' | 'financial' | 'health' | 'professional' | 'government' | 'biometric' | 'technical',
  type: 'direct' | 'strongIndirect' | 'weakIndirect',
  description: 'Description in Greek',
  examples: ['Example 1', 'Example 2'],
  annotationRule: 'When and how to annotate this category',
  whenToTag: 'always' | 'depends'
}
```

### Adding New Training Examples

Edit `src/data/examples.ts` to add new practice scenarios.

### Theming

The application uses Tailwind CSS with CSS custom properties for theming. Modify `src/shadcn.css` to customize colors and appearance.

## 📚 Learning Resources

- **Categories Page**: Comprehensive reference of all PII categories
- **Rules Page**: Detailed annotation guidelines and best practices
- **Practice Page**: Interactive training with immediate feedback
- **Examples**: Real-world scenarios for hands-on learning

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/new-feature`
3. Commit your changes: `git commit -am 'Add new feature'`
4. Push to the branch: `git push origin feature/new-feature`
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🆘 Support

If you encounter any issues or have questions:

1. Check the [Issues](https://github.com/YOUR_USERNAME/pii-annotation-trainer/issues) page
2. Create a new issue with detailed information
3. Include screenshots and browser information if relevant

## 🙏 Acknowledgments

- Built with [React](https://reactjs.org/)
- UI components from [shadcn/ui](https://ui.shadcn.com/)
- Icons from [Lucide](https://lucide.dev/)
- Styled with [Tailwind CSS](https://tailwindcss.com/)

---

**Note**: Replace `YOUR_USERNAME` with your actual GitHub username before deploying.
