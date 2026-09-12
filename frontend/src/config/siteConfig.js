/**
 * ============================================================
 *  SITE CONFIGURATION FILE
 * ============================================================
 *  This is the ONLY file you need to edit for 90% of changes:
 *  business name, logo, contact info, hero text, about content,
 *  services, courses, social links and brand colors.
 *
 *  Images referenced here live in: public/images/
 *  Just replace the image file (keep the same filename) or
 *  update the path below to point to a new file.
 * ============================================================
 */

const siteConfig = {
  // ---------------------------------------------------------
  // BRAND / BUSINESS IDENTITY
  // ---------------------------------------------------------
  business: {
    name: "AB TECH LEARNING EDUCATIONAL SERVICES",
    shortName: "AB Tech Learning",
    tagline: "Guiding Students Towards the Right Educational Path",
    logo: "/images/logo-placeholder.png", // Replace with your logo file
  },

  // ---------------------------------------------------------
  // NAVIGATION LINKS
  // ---------------------------------------------------------
  nav: [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Services", href: "#services" },
    { label: "Courses/Programs", href: "#courses" },
    { label: "Contact", href: "#contact" },
  ],

  enquiryButton: {
    label: "Admission Enquiry",
    href: "#contact",
  },

  // ---------------------------------------------------------
  // HERO SECTION
  // ---------------------------------------------------------
  hero: {
    headline: "Expert Admission Counselling & Educational Guidance",
    subheadline:
      "AB TECH LEARNING EDUCATIONAL SERVICES helps students and parents make confident, well-informed decisions about admissions, open schooling, and career pathways — with honest, personalised guidance at every step.",
    primaryButton: { label: "Get Admission Guidance", href: "#contact" },
    secondaryButton: { label: "Contact Us", href: "#contact" },
    image: "/images/hero.jpg", // Replace with your own hero image
    imageAlt: "Students receiving educational guidance",
  },

  // ---------------------------------------------------------
  // ABOUT SECTION
  // ---------------------------------------------------------
  about: {
    heading: "About AB Tech Learning Educational Services",
    subheading: "Trusted Educational Guidance Partner",
    paragraphs: [
      "AB TECH LEARNING EDUCATIONAL SERVICES is dedicated to helping students and parents navigate the often confusing world of admissions, open schooling, and career planning. With years of hands-on experience, our counsellors provide clear, honest and personalised guidance tailored to every student's needs.",
      "We believe every student deserves access to accurate information and supportive mentorship — whether they are choosing a school, applying for admission, exploring open schooling options, or planning their next academic step. Our mission is to simplify that journey.",
    ],
    highlights: [
      { label: "Years of Experience", value: "10+" },
      { label: "Students Guided", value: "5000+" },
      { label: "Partner Institutions", value: "50+" },
      { label: "Support", value: "6 Days/Week" },
    ],
    image: "/images/about.jpg", // Replace with your own about image
    imageAlt: "AB Tech Learning counselling office",
  },

  // ---------------------------------------------------------
  // SERVICES SECTION
  // Add, remove, or edit any service by editing this array.
  // "icon" accepts: "admission", "school", "consult", "course",
  // "career", "support" (mapped to icons in ServiceCard.jsx)
  // ---------------------------------------------------------
  services: [
    {
      id: "service-1",
      icon: "admission",
      title: "Admission Counselling",
      description:
        "Step-by-step guidance through school, college and university admission processes, documentation and deadlines.",
      image: "/images/service-1.jpg",
    },
    {
      id: "service-2",
      icon: "school",
      title: "Open School Guidance",
      description:
        "Complete support for open schooling registration, subject selection, exam forms and certification queries.",
      image: "/images/service-2.jpg",
    },
    {
      id: "service-3",
      icon: "consult",
      title: "Educational Consultation",
      description:
        "One-on-one consultation sessions to help students and parents plan the right academic roadmap.",
      image: "/images/service-3.jpg",
    },
    {
      id: "service-4",
      icon: "course",
      title: "Course Selection Guidance",
      description:
        "Personalised advice on choosing the right stream, subjects and courses based on interest and aptitude.",
      image: "/images/service-4.jpg",
    },
    {
      id: "service-5",
      icon: "career",
      title: "Career Guidance",
      description:
        "Insightful career counselling sessions to help students identify strengths and explore future career paths.",
      image: "/images/service-5.jpg",
    },
    {
      id: "service-6",
      icon: "support",
      title: "Student Support",
      description:
        "Ongoing support for academic queries, form filling, documentation and general student assistance.",
      image: "/images/service-6.jpg",
    },
  ],

  // ---------------------------------------------------------
  // COURSES / PROGRAMS SECTION
  // ---------------------------------------------------------
  courses: {
    heading: "Courses & Programs We Guide You On",
    subheading: "Explore the pathways our counsellors can help you with",
    items: [
      {
        id: "course-1",
        title: "Secondary & Senior Secondary (Open School)",
        description:
          "Guidance for students pursuing 10th and 12th through open schooling boards.",
        image: "/images/course-1.jpg",
      },
      {
        id: "course-2",
        title: "Undergraduate Admissions",
        description:
          "Support in selecting and applying to the right undergraduate degree programs.",
        image: "/images/course-2.jpg",
      },
      {
        id: "course-3",
        title: "Diploma & Skill Courses",
        description:
          "Guidance on diploma, certification and vocational skill-based courses.",
        image: "/images/course-3.jpg",
      },
    ],
  },

  // ---------------------------------------------------------
  // CONTACT SECTION
  // ---------------------------------------------------------
  contact: {
    heading: "Get In Touch With Us",
    subheading:
      "Have a question about admissions or open schooling? Reach out — our counsellors are happy to help.",
    phone: "+91 98765 43210",
    phoneHref: "tel:+919876543210",
    email: "info@abtechlearning.example.com",
    emailHref: "mailto:info@abtechlearning.example.com",
    address: "123, Education Lane, Near City Centre, Your City, State, PIN - 000000",
    whatsappHref: "https://wa.me/919876543210",
    mapImage: "/images/map-placeholder.jpg", // Replace with an embedded Google Map iframe or image
    mapEmbedUrl: "", // Optional: paste a Google Maps embed URL here to replace the image placeholder
  },

  // ---------------------------------------------------------
  // FOOTER
  // ---------------------------------------------------------
  footer: {
    about:
      "AB TECH LEARNING EDUCATIONAL SERVICES provides trusted admission counselling and open school guidance to help students plan their academic future with confidence.",
    servicesHeading: "Our Core Services",
    services: [
      "ADMISSION COUNSELLING",
      "OPEN SCHOOL GUIDANCE CUM HELP CENTRE",
    ],
    quickLinksHeading: "Quick Links",
    quickLinks: [
      { label: "Home", href: "#home" },
      { label: "About Us", href: "#about" },
      { label: "Services", href: "#services" },
      { label: "Courses/Programs", href: "#courses" },
      { label: "Contact", href: "#contact" },
    ],
    legalLinks: [
      { label: "Privacy Policy", href: "#" },
      { label: "Terms & Conditions", href: "#" },
    ],
    social: [
      { label: "Facebook", href: "#" },
      { label: "Instagram", href: "#" },
      { label: "Twitter", href: "#" },
      { label: "LinkedIn", href: "#" },
      { label: "YouTube", href: "#" },
    ],
    copyright: `© ${new Date().getFullYear()} AB TECH LEARNING EDUCATIONAL SERVICES. All Rights Reserved.`,
  },
};

export default siteConfig;
