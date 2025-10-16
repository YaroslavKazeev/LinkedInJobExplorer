# LinkedIn Job Explorer 🔍

Discover and explore LinkedIn job postings across different provinces in the Netherlands. Built with React, Vite, and React Router.

Built with React, Vite, and React Router. This project demonstrates modern React 19 patterns, routing, and clean component structure for filtering and viewing job details.

## 📋 Features

- **Multi-Title Search**: Search for multiple job titles simultaneously
- **Province Filtering**: Filter jobs by Dutch provinces
- **Job Details**: View detailed job information including descriptions, skills, and tags
- **Responsive Design**: Modern, clean interface with Lucide React icons
- **Responsive Design**: Works on both desktop and mobile devices
- **Modern UI**: Built with React and styled with modern CSS
- **Routing**: Multi-page navigation using React Router

## 🛠️ Technologies

- ⚛️ React 19
- 🚀 Vite (Build tool)
- 🔄 React Router (Navigation)
- 🎨 Lucide Icons
- 🧹 ESLint (Code linting)
- 🛠️ React Hooks

## 📁 Project Structure

```
LinkedInJobExplorer/
├── public/              # Static assets
├── src/
│   ├── App.jsx         # Main application component with context
│   ├── index.jsx       # Application entry point
│   ├── index.css       # Global styles
│   ├── Home.jsx        # Home page with search interface
│   ├── JobListing.jsx  # Job listings display
│   ├── About.jsx       # About page
│   ├── Nav.jsx         # Navigation component
│   ├── JobTitle.jsx    # Job title input component
│   ├── Provinces.jsx   # Province selector component
│   ├── Skills.jsx      # Skills display component
│   ├── Tags.jsx        # Tags display component
│   └── fetchJobDetails.js # API utility for fetching job data
├── index.html
├── package.json
├── vite.config.js
└── eslint.config.js
```

## 🚀 Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn
- LinkedIn API token

### Installation

1. Clone the repository:

```bash
git clone https://github.com/YaroslavKazeev/LinkedInJobExplorer.git
cd LinkedInJobExplorer
```

2. Install dependencies:

```bash
npm install
```

3. Create a `.env` file in the root directory with your LinkedIn API credentials:

```env
VITE_LINKEDIN_API_TOKEN=your_api_token_here
VITE_MY_HOME_PROVINCE_NUMBER=0
```

4. Start the development server:

```bash
npm run dev
```

5. Open your browser and navigate to `http://localhost:5173`

## 📜 Available Scripts

- `npm run dev` - Start the development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 🗺️ Supported Provinces

- Drenthe
- Flevoland
- Friesland
- Gelderland
- Groningen
- Limburg
- North Brabant
- North Holland
- Overijssel
- South Holland
- Utrecht Area
- Zeeland

## 🎯 Usage

1. **Add Job Titles**: Enter job titles you want to search for on the Home page
2. **Select Provinces**: Choose one or more provinces to search in
3. **Search**: Click the search button to fetch job listings
4. **View Results**: Browse job listings with detailed information, skills, and tags
5. **Navigate**: Use the navigation menu to switch between Home, Job Listing, and About pages

## 🔧 Configuration

### Environment Variables

- `VITE_LINKEDIN_API_TOKEN`: Your LinkedIn API access token
- `VITE_MY_HOME_PROVINCE_NUMBER`: Default province index (0-11)

### Vite Configuration

The project uses a standard Vite configuration with React plugin. Customize `vite.config.js` as needed.

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 👤 Author

**Yaroslav Kazeev**

- GitHub: [@YaroslavKazeev](https://github.com/YaroslavKazeev)

## 🙏 Acknowledgments

- Built as part of HackYourFuture project
- LinkedIn API for job data
- React community for excellent tools and libraries

## 📞 Support

If you have any questions or issues, please open an issue on GitHub.

---

Made with ❤️ by Yaroslav Kazeev
