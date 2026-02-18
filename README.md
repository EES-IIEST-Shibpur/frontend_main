# Electrical Engineers' Society - IIEST Shibpur

Official website for the **Electrical Engineers' Society (EES)** at the **Indian Institute of Engineering Science and Technology (IIEST), Shibpur**. This platform serves as a hub for academic support, event information, student achievements, and department updates.

**Website:** [www.eesiiests.org](https://www.eesiiests.org)  
**Email:** [contact@eesiiests.org](mailto:contact@eesiiests.org)  
**GitHub:** [EES-IIEST-Shibpur/frontend_main](https://github.com/EES-IIEST-Shibpur/frontend_main)

---

## About

The Electrical Engineers' Society aims to:
- Provide comprehensive academic support through an online platform
- Foster healthy interaction among students, faculty, and alumni
- Showcase department events, initiatives, and achievements
- Facilitate placement information and career opportunities
- Build a vibrant community within the Electrical Engineering department

---

## Tech Stack

- **Framework:** [Next.js 16](https://nextjs.org/) (App Router)
- **UI Library:** [React 19](https://react.dev/)
- **Styling:** [TailwindCSS 3.4](https://tailwindcss.com/)
- **Language:** TypeScript & JavaScript
- **Animations:** [Framer Motion 12](https://www.framer.com/motion/)
- **Icons:** [Lucide React](https://lucide.dev/)
- **Charts:** [Recharts 3](https://recharts.org/)
- **Utilities:** clsx, tailwind-merge

---

## Project Structure

```
frontend_main/
├── app/                          # Next.js App Router pages
│   ├── about/                    # About the department
│   ├── events/                   # Event pages
│   │   ├── apticrack/           # Apticrack event
│   │   ├── sphuran/             # Sphuran event
│   │   └── tech-simplified/     # Tech Simplified event
│   ├── gallery/                  # Image gallery
│   ├── initiatives/              # Department initiatives
│   │   ├── circuit-club/
│   │   ├── guidebooks/
│   │   ├── industrial-visit/
│   │   ├── miscellaneous/
│   │   └── tshirt/
│   ├── people/                   # People directory
│   │   ├── achievements/        # Student achievements
│   │   ├── faculty/              # Faculty members
│   │   ├── research-scholars/    # Research scholars
│   │   ├── society/              # Society members
│   │   ├── staff/                # Staff information
│   │   └── web-team/             # Web team
│   ├── placements/               # Placement statistics
│   ├── layout.tsx                # Root layout with metadata
│   ├── page.js                   # Homepage
│   ├── globals.css               # Global styles
│   ├── manifest.ts               # PWA manifest
│   ├── sitemap.ts                # Dynamic sitemap
│   ├── robots.ts                 # SEO robots.txt
│   └── not-found.tsx             # 404 page
├── components/                   # Reusable React components
│   ├── Navbar.js                 # Navigation bar with dropdowns
│   ├── Footer.js                 # Footer component
│   └── SearchModal.js            # Site-wide search functionality
├── lib/                          # Data and utilities
│   ├── eventsData.js             # Events information
│   ├── facultyData.js            # Faculty details
│   ├── navigationData.js         # Navigation structure
│   ├── peopleData.js             # People directory data
│   ├── placementData.js          # Placement statistics
│   └── searchIndex.js            # Search index builder
├── public/                       # Static assets
│   ├── images/                   # Image assets organized by section
│   └── Placement_DATA_pdfs/      # Placement data and statistics
├── analyze_ee_stats.py           # Python script for statistics analysis
├── analyze_ee_stats_v2.py        # Updated statistics analyzer
└── Configuration files
    ├── next.config.ts
    ├── tailwind.config.ts
    ├── tsconfig.json
    ├── eslint.config.mjs
    └── package.json
```

---

## Key Features

### Core Features
- **Responsive Navigation:** Multi-level dropdown menus with smooth animations
- **Site-Wide Search:** Real-time search across all pages, people, events, and content
- **Dynamic Routing:** File-based routing with Next.js App Router
- **SEO Optimized:** Built-in sitemap, robots.txt, and comprehensive metadata
- **PWA Support:** Progressive Web App with manifest configuration

### Page Sections
1. **Home:** Hero section with mission statement and recent highlights
2. **About:** Department information and history
3. **People:**
   - Faculty directory with profiles
   - Research scholars
   - Staff members
   - Student achievements
   - Society members
   - Web team
4. **Events:**
   - Sphuran (Annual induction ceremony)
   - Apticrack (Aptitude preparation)
   - Tech Simplified (Technical workshops)
5. **Placements:** Statistics, charts, and placement data visualization
6. **Gallery:** Photo gallery of events and activities
7. **Initiatives:**
   - Circuit Club
   - Industrial visits
   - Department T-shirts
   - Guidebooks
   - Miscellaneous activities

### Design Features
- Custom EES brand colors (Red/Maroon theme)
- Smooth animations and transitions
- Glassmorphism effects
- Mobile-first responsive design
- Accessible UI components

---

## Getting Started

### Prerequisites
- **Node.js** 20+ (recommended)
- **npm**, **yarn**, **pnpm**, or **bun**

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/EES-IIEST-Shibpur/frontend_main.git
   ```
   ```bash
   cd frontend_main
   ```

2. **Install dependencies:**
   
   Using npm:
   ```bash
   npm install
   ```
   
   Or using yarn:
   ```bash
   yarn install
   ```
   
   Or using pnpm:
   ```bash
   pnpm install
   ```

3. **Run the development server:**
   
   Using npm:
   ```bash
   npm run dev
   ```
   
   Or using yarn:
   ```bash
   yarn dev
   ```
   
   Or using pnpm:
   ```bash
   pnpm dev
   ```
   
   Or using bun:
   ```bash
   bun dev
   ```

4. **Open your browser:**
   Navigate to [http://localhost:3000](http://localhost:3000)

### Build for Production

Build the application:
```bash
npm run build
```

Start the production server:
```bash
npm run start
```

### Linting

```bash
npm run lint
```

---

## Configuration

### Environment Variables
Create a `.env.local` file in the root directory for any environment-specific variables:

```env
NEXT_PUBLIC_SITE_URL=https://eesiiests.org
```

### Custom Theme
The project uses a custom color palette defined in `tailwind.config.ts`:

```javascript
ees: {
  50: '#fff1f2',
  100: '#ffe4e6',
  500: '#f43f5e',
  700: '#be123c',  // Brand red
  800: '#9f1239',
  900: '#881337',  // Deep red
}
```

---

## Python Scripts

Two Python scripts are included for analyzing placement statistics:

- **`analyze_ee_stats.py`** - Original statistics analyzer
- **`analyze_ee_stats_v2.py`** - Enhanced version with additional features

These scripts parse placement data from PDFs and generate statistics for visualization on the placements page.

---

## Contributing

We welcome contributions from the community! To contribute:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

## Adding Content

### Adding a New Page
1. Create a new folder in `app/` directory
2. Add a `page.js` or `page.tsx` file
3. Update `lib/navigationData.js` to include the new route

### Adding Faculty/People
Update the respective data file in the `lib/` directory:
- `lib/facultyData.js` - For faculty members
- `lib/peopleData.js` - For other people categories

### Adding Events
1. Add event details to `lib/eventsData.js`
2. Create a dedicated page in `app/events/` if needed
3. Add event images to `public/images/events/`

---

## SEO & Metadata

The website includes:
- Dynamic metadata in `app/layout.tsx`
- Auto-generated sitemap via `app/sitemap.ts`
- Robots.txt configuration in `app/robots.ts`
- Open Graph tags for social media sharing
- Structured data for better search engine indexing

---

## PWA Configuration

The site supports Progressive Web App features:
- Manifest file (`app/manifest.ts`)
- Offline support
- Installable on mobile devices

---

## Deployment

### Deploy on Vercel (Recommended)
1. Push your code to GitHub
2. Import the project in [Vercel](https://vercel.com)
3. Configure build settings (auto-detected for Next.js)
4. Deploy

### Other Platforms
The application can be deployed on any platform that supports Next.js:
- Netlify
- AWS Amplify
- Google Cloud Platform
- Azure Static Web Apps

---

## Resources

### Documentation
- [Next.js Documentation](https://nextjs.org/docs)
- [React Documentation](https://react.dev/)
- [TailwindCSS Documentation](https://tailwindcss.com/docs)
- [Framer Motion Documentation](https://www.framer.com/motion/)

### Learn More
- [Next.js Tutorial](https://nextjs.org/learn)
- [React Tutorial](https://react.dev/learn)
- [TailwindCSS Tutorial](https://tailwindcss.com/docs/installation)

---

## Contact

**Electrical Engineers' Society**  
Department of Electrical Engineering  
Indian Institute of Engineering Science and Technology, Shibpur  
Botanical Garden Area, Howrah - 711103  
West Bengal, India

### Official Channels
- **Website:** [www.eesiiests.org](https://www.eesiiests.org)
- **Email:** [contact@eesiiests.org](mailto:contact@eesiiests.org)
- **GitHub:** [github.com/EES-IIEST-Shibpur](https://github.com/EES-IIEST-Shibpur)

### Social Media
- **Facebook:** [ees.iiest.shibpur](https://facebook.com/ees.iiest.shibpur)
- **Instagram:** [@ees_iiests](https://instagram.com/ees_iiests)
- **LinkedIn:** [ees_iiests](https://linkedin.com/in/ees_iiests)
- **YouTube:** [@electricalengineerssociety8968](https://youtube.com/@electricalengineerssociety8968)

### Key Contacts

**Secretary**  
Ruman Paul  
[2022eeb002.ruman@students.iiests.ac.in](mailto:2022eeb002.ruman@students.iiests.ac.in)

**Head Web Developer**  
Aminul Islam  
[2023eeb005.aminul@students.iiests.ac.in](mailto:2023eeb005.aminul@students.iiests.ac.in)

For queries or support, reach out through any of the official channels above.

---

## License

This project is maintained by the Electrical Engineers' Society, IIEST Shibpur.

---

## Acknowledgments

- IIEST Shibpur Electrical Engineering Department
- All faculty members and students who contributed
- Alumni for their continued support
- The Web Team for development and maintenance

---

**Built by the EES Web Team**
