import {
  facebook,
  instagram,
  shieldTick,
  notification,
  location,
  youtube,
} from "../assets/icons";
import {
  Home_processed,
  anupa,
  isandith,
  chamodh,
  lakindu,
  dulshanya,
  nimansa,
} from "../assets/images";

export const navLinks = [
  { href: "#home", label: "Home" },
  { href: "#team", label: "Our Team" },
  { href: "#features", label: "Features" },
  { href: "#contact-us", label: "Contact Us" },
];

export const home_img = [
  {
    homeImg: Home_processed,
  },
];

export const statistics = [
  { value: "24/7", label: "Support" },
  { value: "AI-Powered", label: "Report Validation" },
];

export const services = [
  {
    imgURL: location,
    label: "Precise Location Pinpointing",
    subtext: "GPS-enabled location tagging ensures accurate reporting.",
  },
  {
    imgURL: shieldTick,
    label: "Photo Evidence Upload",
    subtext: "Capture photos of your evidence to support your report",
  },
  {
    imgURL: notification,
    label: "Real-Time Updates & Notifications",
    subtext: "Receive real-time updates on the status of your reports.",
  },
];

export const reviews = [
  {
    imgURL: chamodh,
    memberName: "Chamodh Chiranthana",
  },
  {
    imgURL: dulshanya,
    memberName: "Dulshanya Silva",
  },
  {
    imgURL: anupa,
    memberName: "Anupa Kehelgamuwa",
  },
  {
    imgURL: lakindu,
    memberName: "Lakindu De Silva",
  },
  {
    imgURL: isandith,
    memberName: "Isandith Perera",
  },
  {
    imgURL: nimansa,
    memberName: "Nimansa Bandara",
  },
];

export const footerLinks = [
  {
    id: "section-1",
    title: "Sections",
    links: [
      { name: "Home", link: "/" },
      { name: "FAQs", link: "#get-in-touch" },
      { name: "Team", link: "#team" },
      { name: "Features", link: "#features" },
    ],
  },
  {
    id: "section-3",
    title: "Contact Us",
    links: [
      {
        name: "projectinfratrack@gmail.com",
        link: "mailto:projectinfratrack@gmail.com",
      },
      { name: "+94 70 113 9391", link: "tel:+94701139391" },
    ],
  },
];

export const socialMedia = [
  {
    src: facebook,
    alt: "facebook logo",
    href: "https://www.facebook.com/share/19pAEK8tsG/",
  },
  {
    src: youtube,
    alt: "youtube logo",
    href: "https://www.youtube.com/channel/UCBORTrDaCZTtSLd4m_yHuKw",
  },
  {
    src: instagram,
    alt: "instagram logo",
    href: "https://www.instagram.com/infratrack2024?igsh=MTJvMTIwbzh0bXY2NQ==",
  },
];
