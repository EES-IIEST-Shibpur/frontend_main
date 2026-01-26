export const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { 
      name: "People" , href: "/people", 
      submenu: [
        { name: "Faculty", href: "/people/faculty" },
        { name: "Research Scholars", href: "/people/research-scholars" },
        { name: "Staff", href: "/people/staff" },
        { name: "Student Achievements", href: "/people/achievements" },
        { name: "Electrical Engineers' Society", href: "/people/society" },
        { name: "Web Team", href: "/people/web-team" },
      ] 
    },
    { name: "Placements", href: "/placements" },
    { 
      name: "Events", href: "/events" , 
      submenu: [
        { name: "Sphuran", href: "/events/sphuran" },
        { name: "Apticrack", href: "/events/apticrack" },
        { name: "Tech Simplified", href: "/events/tech-simplified" },
      ]
    },
    { name: "Gallery", href: "/gallery" },
    { 
      name: "Other Initiatives", href: "/initiatives" , 
      submenu: [
        { name: "Circuit Club", href: "/initiatives/circuit-club" },
        { name: "Industrial Visit", href: "/initiatives/industrial-visit" },
        { name: "T-shirt", href: "/initiatives/tshirt" },
        { name: "Guidebooks", href: "/initiatives/guidebooks" },
        { name: "Miscellaneous", href: "/initiatives/miscellaneous" },
      ]
    },
  ];