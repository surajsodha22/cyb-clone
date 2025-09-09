import {FaEarthAsia} from "react-icons/fa6";
import {
  paydeer,
  payvendor,
  findeer,
  webhub,
  Frame,
  Frame1,
  Frame2,
  Frame3,
  Frame4,
  Frame5,
  app1,
  app2,
  app3,
  app4,
  d1,
  d2,
  d3,
  d4,
  d5,
  d6,
  avatar1,
  avatar3,
  avatar2,
  image1,
  image2,
  image3,
  journey1,
  journey2,
  journey3,
  journey4,
  jobImg,
} from "./assetes";

export const navMenu = [
  {name: "Services"},
  {name: "Industries"},
  {name: "Platform"},
  {name: "Hire talent"},
  {name: "Our Company"},
];

export const trustArr = [paydeer, payvendor, findeer, webhub];

export const services = [
  {
    img: Frame,
    title: "Mobile App Development",
    desc: "With our custom you get a responsive, future-proof, and cyber-secure app that gives you an advantage over your competitors. No matter how complex your idea is, our development services will scale it for you.",
  },
  {
    img: Frame1,
    title: "Software Development",
    desc: "We build custom software tailored to your industry boosting efficiency while we handle the tech, so you can focus on growth.",
  },
  {
    img: Frame2,
    title: "AI Development Services",
    desc: "At Cybdeer, we turn digital disruption into growth with data-driven marketing, seamless customer journeys, and strategies that deliver real, scalable results.",
  },
  {
    img: Frame3,
    title: "Digital Transformation",
    desc: "Transform your legacy or old software into new, technologically leading software. We help you adapt, and scale your software with ease.",
  },
  {
    img: Frame4,
    title: "DevOps Services",
    desc: "Our DevOps services combine development and operations to enhance the software development lifecycle through automation, collaboration, and continuous improvement.",
  },
  {
    img: Frame5,
    title: "Hire Dedicated Developers",
    desc: "At Cybdeer, we turn digital disruption into growth with data-driven marketing, seamless customer journeys, and strategies that deliver real, scalable results.",
  },
];

export const cybdeerProjects = [
  {
    title: "Years of Experience",
    num: "10+",
  },
  {title: "Countries Served", num: "40+"},
  {title: "Projects Completed", num: "1000+"},
  {title: "Client Ratention Rate", num: "98%"},
  {title: "Clinets Worldwide", num: "500+"},
  {title: "Team", num: "100+"},
];

export const apps = [app1, app2, app3, app4];

export const features = [
  {title: "Mobility"},
  {title: "Froented"},
  {title: "Backend"},
  {title: "AI"},
  {title: "ML"},
  {title: "CMS"},
];

export const features2 = [
  {title: "Swift", img: d1},
  {title: "React Native", img: d2},
  {title: "xcode", img: d3},
  {title: "kotlin", img: d4},
  {title: "Ionic", img: d5},
  {title: "Xamarin", img: d6},
];

export const slider = [
  {img: avatar1, name: "Name 1", role: "CEO, Cybdeer"},
  {img: avatar2, name: "Name 2", role: "CTO, Cybdeer"},
  {img: avatar3, name: "Name 3", role: "CFO, Cybdeer"},
  {img: avatar2, name: "Name 4", role: "CTO, Cybdeer"},
  {img: avatar1, name: "Name 5", role: "CEO, Cybdeer"},
];

export const blogs = [
  {
    image: image1,
    category: "Technology",
    title: "How AI is Changing the World",
    description:
      "AI is transforming industries by automating tasks and improving efficiency.",
    author: {
      avtar: avatar1,
      name: "John Doe",
      date: "2025-08-28",
    },
  },
  {
    image: image2,
    category: "Travel",
    title: "Exploring the Himalayas",
    description:
      "A journey through the majestic Himalayan mountains and valleys.",
    author: {
      avtar: avatar2,
      name: "Jane Smith",
      date: "2025-08-20",
    },
  },

  {
    image: image3,
    category: "Technology",
    title: "How AI is Changing the World",
    description:
      "AI is transforming industries by automating tasks and improving efficiency.",
    author: {
      avtar: avatar3,
      name: "John Doe",
      date: "2025-08-28",
    },
  },
];

export const techItems = [
  {name: "JavaScript", icon: "🟨", active: false},
  {name: "CSS3", icon: "🔵", active: true},
  {name: "HTML", icon: "🟧", active: true},
  {name: "ReactJS", icon: "⚛️", active: true},
  {name: "Next.JS", icon: "⬛", active: true},
  {name: "Svelte", icon: "🟥", active: true},
  {name: "Angular Java Script", icon: "🛑", active: true},
  {name: "Spring Boot", icon: "🟢", active: false},
  {name: "Mean Stack", icon: "📦", active: false},
  {name: "Shopify", icon: "🛍️", active: true},
  {name: "Drupal", icon: "💧", active: true},
  {name: "HubSpot", icon: "🟠", active: true},
  {name: "Mern Stack", icon: "📚", active: true},
  {name: "Laravel", icon: "🟥", active: true},
  {name: "VueJS", icon: "🟩", active: false},
  {name: "Blockchain", icon: "🔗", active: false},
];

export const locations = [
  {
    img: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/737459981.jpg?k=a9a26f508b53a31fd891882661fc6a0f15b89d51643e27daee10a206f48c4e27&o=&hp=1",
    address:
      "2ND Floor, C-10, Chitrakoot Marg, Sector 9, Vaishali Nagar, Jaipur, Rajasthan 302021",
  },
  {
    img: "https://i.ytimg.com/vi/Ba0UPFkDrxo/maxresdefault.jpg",
    address:
      "Meydan Grandstand, 6th floor, Meydan Road, Nad Al Sheba, Dubai, U.A.E",
  },
  {
    img: "https://digital.ihg.com/is/image/ihg/intercontinental-tegucigalpa-6071105521-2x1",
    address: "#254 Vision Exchange 2 Venture Drive, Singapore 608526",
  },
];

export const footerLinks = [
  {
    title: "Services",
    items: [
      "iOS App Development",
      "Android App Development",
      "Software Development",
      "Ionic App Development",
      "Flutter App Development",
      "Angular Web Development",
    ],
  },
  {
    title: "Company",
    items: ["About", "Contact us", "Careers", "Culture", "Blog"],
  },
  {
    title: "Industries",
    items: ["Healthcare", "Restaurant", "Finance", "Fintech", "On-Demand Apps"],
  },
  {
    title: "Platforms",
    items: [
      "Adobe Commerce Development",
      "Salesforce Development Company",
      "Salesforce Implementation Company",
      "Salesforce Integration",
      "Power BI Development Company",
    ],
  },
];

export const journeys = [
  {
    year: "2016",
    description:
      "We started our journey with 10 employees working passionately...",
    image: journey1,
  },
  {
    year: "2017-2018",
    description:
      "We started our journey with 10 employees working passionately...",
    image: journey2,
  },
  {
    year: "2019-2020",
    description:
      "We started our journey with 10 employees working passionately...",
    image: journey3,
  },
  {
    year: "2021-2022",
    description:
      "We started our journey with 10 employees working passionately...",
    image: journey4,
  },
];

export const jobs = [
  {
    title: "Frontend Developer",
    experience: "3 years minimum experience in ReactJS.",
    badges: ["Full Time", "Min 3 Years", "Indore, India"],
    img: jobImg,
  },
  {
    title: "Manual QA",
    experience: "2 years minimum experience in testing.",
    badges: ["Full Time", "Min 2 Years", "Indore, India"],
    img: jobImg,
  },
  {
    title: "MERN Stack Developer",
    experience: "3 years minimum experience in ReactJS.",
    badges: ["Full Time", "Min 3 Years", "Indore, India"],
    img: jobImg,
  },
  {
    title: "Business Analyst - Post Sales",
    experience: "3 years minimum experience in ReactJS.",
    badges: ["Full Time", "Min 3 Years", "Indore, India"],
    img: jobImg,
  },
  {
    title: "Business Analyst - Pre Sales",
    experience: "2 years minimum experience in ReactJS.",
    badges: ["Full Time", "Min 2 Years", "Indore, India"],
    img: jobImg,
  },
  {
    title: "Graphic Designer",
    experience: "3 years minimum experience in ReactJS.",
    badges: ["Full Time", "Min 3 Years", "Indore, India"],
    img: jobImg,
  },
  {
    title: "Digital Marketing Intern",
    experience: "3 years minimum experience in ReactJS.",
    badges: ["Internship", "0-1 Years", "Indore, India"],
    img: jobImg,
  },
  {
    title: "SEO Specialist",
    experience: "3 years minimum experience in ReactJS.",
    badges: ["Full Time", "Min 3 Years", "Indore, India"],
    img: jobImg,
  },
  {
    title: "Back Office Executive",
    experience: "3 years minimum experience in ReactJS.",
    badges: ["Full Time", "Min 3 Years", "Indore, India"],
    img: jobImg,
  },
];

export const benefits = [
  {
    icon: <FaEarthAsia />,
    text: "A friendly workforce spread across UK, Egypt, China, Europe, and India",
  },
  {
    icon: <FaEarthAsia />,
    text: "A chance to have a healthy Work Life Balance.",
  },
  {
    icon: <FaEarthAsia />,
    text: "Many opportunities to unleash Your Creative side",
  },
  {
    icon: <FaEarthAsia />,
    text: "Our Philosophy... Play harder.",
  },
];

export const infoCards = [
  {
    title: "Who We Are ?",
    subtitle: "Custom, Scalable Solutions",
    desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took.",
  },
  {
    title: "Where Do We Come From ?",
    subtitle: "Custom, Scalable Solutions",
    desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took.",
  },
  {
    title: "What We Do ?",
    subtitle: "Custom, Scalable Solutions",
    desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took.",
  },
  {
    title: "How We Make Difference ?",
    subtitle: "Custom, Scalable Solutions",
    desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took.",
  },
];
