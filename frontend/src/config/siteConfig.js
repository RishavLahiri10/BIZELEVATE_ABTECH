// Shared site content. Image URLs start at public/ (for example, /images/logo.jpg).
const siteConfig = {

  business: {
    name: "AB TECH LEARNING EDUCATIONAL SERVICES",
    shortName: "AB Tech Learning",
    tagline: "Guiding Students Towards the Right Educational Path",
    logo: "/images/logo.jpg",
  },

  // These anchors must match section IDs. #admission is handled by Button as a popup trigger.
  nav: [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Services", href: "#services" },

    { label: "Reviews", href: "#reviews" },
    { label: "Contact", href: "#contact" },
  ],

  enquiryButton: {
    label: "Admission Enquiry",
    href: "#admission",
  },

  hero: {
    headline: "Expert Admission Counselling & Educational Guidance",
    subheadline:
      "AB TECH LEARNING EDUCATIONAL SERVICES helps students and parents make confident, well-informed decisions about admissions, open schooling, and career pathways — with honest, personalised guidance at every step.",
    primaryButton: { label: "Apply Now", href: "#admission" },
    secondaryButton: { label: "Contact Us", href: "#contact" },
    image: "/images/hero.jpg",
    imageAlt: "Students receiving educational guidance",
  },

  about: {
    heading: "About AB Tech Learning Educational Services",
    subheading: "Trusted Educational Guidance Partner",
    paragraphs: [
      "AB TECH LEARNING EDUCATIONAL SERVICES is dedicated to helping students and parents navigate the often confusing world of admissions, open schooling, and career planning. With years of hands-on experience, our counsellors provide clear, honest and personalised guidance tailored to every student's needs.",
      "We believe every student deserves access to accurate information and supportive mentorship — whether they are choosing a school, applying for admission, exploring open schooling options, or planning their next academic step. Our mission is to simplify that journey.",
    ],
    // Verify these original template statistics before publishing.
    highlights: [
      { label: "Years of Experience", value: "10+" },
      { label: "Students Guided", value: "5000+" },
      { label: "Partner Institutions", value: "50+" },
      { label: "Support", value: "6 Days/Week" },
    ],
    image: "/images/about.jpg",
    imageAlt: "AB Tech Learning counselling office",
  },

  // IDs also drive form preselection; icons must exist in components/Icons.jsx.
  services: [
    {
        "id": "admission",
        "icon": "admission",
        "title": "Admission Counselling",
        "description": "Guidance with school, college and university applications, eligibility, required documents and admission deadlines.",
        "image": "/images/service-1.jpg"
    },
    {
        "id": "open-school",
        "icon": "school",
        "title": "Open School Guidance",
        "description": "Support with Class 10 and Class 12 open schooling options, subject selection, registration and examination forms.",
        "image": "/images/service-2.jpg"
    },
    {
        "id": "career",
        "icon": "career",
        "title": "Course & Career Guidance",
        "description": "Personalised counselling to explore suitable subjects, undergraduate degrees, diplomas and skill courses based on your interests.",
        "image": "/images/service-5.jpg"
    },
    {
        "id": "student-support",
        "icon": "support",
        "title": "Student & Documentation Support",
        "description": "Help with form filling, admission document checklists and academic queries throughout your application journey.",
        "image": "/images/service-6.jpg"
    }
],

  // These IDs are submitted to the backend; update EnquiryForm.serviceMap if they change.
  admissionOptions: [
    { id: "nios", title: "NIOS (Class 10 & Class 12)" },
    { id: "bosse", title: "BOSSE (Board of Open Schooling)" },
    { id: "ignou", title: "IGNOU (UG/PG Degrees & Diplomas)" },
    { id: "college-admissions", title: "GUIDANCE COLLEGE ADMISSIONS" },
    { id: "career-counselling", title: "CAREER COUNSELLING" },
    { id: "general-guidance", title: "General Admission Guidance" },
  ],

  reviews: [
    {
        "name": "",
        "text": "Really had a great Journey in Nios....Teachers Supported me and guided me at every step...not only helping me pass my exams with good marks but also Helped me through my college admissions.....there was time when I felt so demotivated, unsure of myself....but encouraged me and reminded me That I could do better....i will always be thankful for the support I got...My Nios success and confidence I have today are in many ways connected to the guidance and encouragement that I got.....\nThank you so much for the guidance and support"
    }
],

  contact: {
    heading: "Get In Touch With Us",
    subheading:
      "Have a question about admissions or open schooling? Reach out — our counsellors are happy to help.",
    phone: "+91 79808 74530",
    phoneHref: "tel:+917980874530",
    // Replace the placeholder email and mailto link together before publishing.
    email: "info@abtechlearning.example.com",
    emailHref: "mailto:info@abtechlearning.example.com",
    address: "S N Banerjee Road, Phari Lane, Charnak, Barrackpore, West Bengal 700120",
    whatsapp: "+91 82729 91870",
    whatsappHref: "https://wa.me/918272991870",
    // Legacy map settings; Contact currently builds a Maps search link from address.
    mapImage: "/images/map-placeholder.jpg",
    mapEmbedUrl: "",
  },

  footer: {
    designCredit: { text: "Designed and managed by BizElevate", logo: "/images/bizelevate-logo.jpg" },
    about:
      "AB TECH LEARNING EDUCATIONAL SERVICES provides trusted admission counselling and open school guidance to help students plan their academic future with confidence.",
    servicesHeading: "Our Core Services",
    services: ["Admission Counselling", "Open School Guidance", "Course & Career Guidance", "Student & Documentation Support"],
    quickLinksHeading: "Quick Links",
    quickLinks: [
      { label: "Home", href: "#home" },
      { label: "About Us", href: "#about" },
      { label: "Services", href: "#services" },

      { label: "Reviews", href: "#reviews" },
    { label: "Contact", href: "#contact" },
    ],
    // Replace # placeholders with real policy pages and social profile URLs.
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
