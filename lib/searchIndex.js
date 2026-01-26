// lib/searchIndex.js
// Aggregates all searchable data from the application into a single index

import { facultyData } from './facultyData';
import { ongoingEvents, pastEvents } from './eventsData';
import { navLinks } from './navigationData';
import { placementData } from './placementData';
import { staffData, scholarsData, societyTeam, achievements, webTeamData } from './peopleData';

export const getSearchIndex = () => {
  const index = [];

  // --- 1. PAGES & CONTENT (Static Text) ---
  const staticPages = [
    {
      title: "About Electrical Engineering Department",
      desc: "One of the oldest and premier departments of IIEST Shibpur, established in 1948. A rich heritage of producing engineers who have excelled globally.",
      url: "/about",
      keywords: "about history heritage department 1948 oldest premier"
    },
    {
      title: "Vision of EES",
      desc: "To be a center of excellence in education and research, producing global leaders in science, technology and management.",
      url: "/about",
      keywords: "vision mission excellence global leaders"
    },
    {
      title: "Electrical Engineers' Society (EES)",
      desc: "A non-profit organization run by the students of the department, organizing technical and cultural events throughout the year.",
      url: "/people/society",
      keywords: "society ees student body organization non-profit"
    },
    {
        title: "Circuit Club",
        desc: "A specialized club for electronics enthusiasts to learn circuit design, PCB fabrication, and robotics.",
        url: "/initiatives/circuit-club",
        keywords: "circuit club electronics robotics pcb design"
    },
    {
        title: "Industrial Visits",
        desc: "Regular visits to core industries like power plants, substations, and manufacturing units to provide practical exposure.",
        url: "/initiatives/industrial-visit",
        keywords: "industrial visit industry trip exposure practical"
    }
  ];

  staticPages.forEach(page => {
    index.push({
      id: `content-${page.title}`,
      title: page.title,
      description: page.desc,
      url: page.url,
      category: 'Pages',
      keywords: `${page.title} ${page.desc} ${page.keywords}`.toLowerCase()
    });
  });

  // --- 2. NAVIGATION LINKS ---
  navLinks.forEach(link => {
    // Add top level link
    index.push({
      id: `page-${link.name}`,
      title: link.name,
      description: `Navigate to ${link.name} section`,
      url: link.href,
      category: 'Pages',
      keywords: link.name.toLowerCase()
    });

    // Add submenu links
    if (link.submenu) {
      link.submenu.forEach(sub => {
        index.push({
          id: `page-${sub.name}`,
          title: sub.name,
          description: `Navigate to ${sub.name} page`,
          url: sub.href,
          category: 'Pages',
          keywords: `${link.name} ${sub.name}`.toLowerCase()
        });
      });
    }
  });

  // --- 3. PEOPLE (Faculty, Staff, Scholars, Team) ---
  
  // Faculty
  facultyData.forEach(prof => {
    index.push({
      id: `faculty-${prof.id}`,
      title: prof.name,
      description: `${prof.designation} (Faculty)`,
      url: prof.profileUrl || '/people/faculty',
      category: 'Faculty',
      keywords: `${prof.name} ${prof.designation} ${prof.email} professor faculty teacher`.toLowerCase(),
      isExternal: !!prof.profileUrl
    });
  });

  // Staff
  staffData.forEach((staff, i) => {
    index.push({
      id: `staff-${i}`,
      title: staff.name,
      description: `${staff.role} (Staff)`,
      url: '/people/staff',
      category: 'People',
      keywords: `${staff.name} ${staff.role} staff technical assistant`.toLowerCase()
    });
  });

  // Research Scholars
  scholarsData.forEach((scholar, i) => {
    index.push({
      id: `scholar-${i}`,
      title: scholar,
      description: 'Research Scholar',
      url: '/people/research-scholars',
      category: 'People',
      keywords: `${scholar} research scholar phd`.toLowerCase()
    });
  });

  // Society Team (Core Committee)
  societyTeam.forEach((member, i) => {
    index.push({
      id: `society-${i}`,
      title: member.name,
      description: `${member.role} - EES Core Team`,
      url: '/people/society',
      category: 'Student Team',
      keywords: `${member.name} ${member.role} society member core team student`.toLowerCase()
    });
  });

  // Web Team
  Object.entries(webTeamData).forEach(([year, members]) => {
    members.forEach((member, i) => {
        index.push({
            id: `webteam-${year}-${i}`,
            title: member.name,
            description: `${member.role} (Web Team ${year})`,
            url: '/people/web-team',
            category: 'Student Team',
            keywords: `${member.name} ${member.role} web developer designer team ${year}`.toLowerCase()
        });
    });
  });

  // Student Achievements
  achievements.forEach((ach, i) => {
    index.push({
        id: `achievement-${i}`,
        title: ach.title,
        description: `Winner: ${ach.winners}`,
        url: '/people/achievements',
        category: 'Achievements',
        keywords: `${ach.title} ${ach.desc} ${ach.winners} award prize`.toLowerCase()
    });
  });

  // --- 4. EVENTS ---
  ongoingEvents.forEach(event => {
    index.push({
      id: `event-${event.id}`,
      title: event.title,
      description: event.desc,
      url: event.link,
      category: 'Events',
      keywords: `${event.title} ${event.desc}`.toLowerCase()
    });
  });

  pastEvents.forEach((event, i) => {
    index.push({
      id: `event-past-${i}`,
      title: event.title,
      description: `Past Event - ${event.date} ${event.year}`,
      url: '/events', // Generic link as past events might not have detailed pages
      category: 'Events',
      keywords: `${event.title} ${event.date} ${event.year}`.toLowerCase()
    });
  });

  // 4. Index Placements
  placementData.forEach(batch => {
    // Index the batch itself
    index.push({
      id: `placement-${batch.batch}`,
      title: `Placement Statistics ${batch.batch}`,
      description: `Highest: ${batch.highestPackage} LPA | Avg: ${batch.averagePackage} LPA`,
      url: '/placements',
      category: 'Placements',
      keywords: `placement ${batch.batch} ${batch.department}`.toLowerCase()
    });

    // Index companies (Recruiters)
    // We group them to avoid spamming the index with 50 duplicates of "Google"
    // But for a simple search, showing "Google (Recruiter)" pointing to placements is good.
    if(batch.topRecruiters) {
        batch.topRecruiters.forEach(company => {
            // Check if already indexed to avoid duplicates from multiple years
            const exists = index.find(item => item.title === company && item.category === 'Recruiters');
            if(!exists) {
                index.push({
                    id: `recruiter-${company}`,
                    title: company,
                    description: 'Top Recruiter at EE Department',
                    url: '/placements',
                    category: 'Recruiters', // New Category distinctive for companies
                    keywords: `${company} placement job`.toLowerCase()
                });
            }
        })
    }
  });

  return index;
};
