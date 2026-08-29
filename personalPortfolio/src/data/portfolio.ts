export const projects = [
  {
    name: 'Deep Learning Researcher | Medical Image Analysis',
    description:
      'Hired by faculty to work on and train Computer Vision models on the topic of Medical Image Analysis. Built various CNN models with 85- 92% accuracy and segmentation models on over 5,000+ BUSI and COVID MRI images. Ran tests and analyses by examining results with loss functions, recall, precision, confusion matrix, ROC curve with AUC value, and CAMs. Collected testing reports with LViT-T, RecLMIS, and ProLearn with the goal to alleviate textual reliance. Worked on an Agile workflow by attending weekly meetings to review progress, improvements, advice, and embark on new checkpoints.',
  },
  {
    name: 'Object Oriented Programming Tutor & Teacher Assistant',
    description:
      'Worked along a CS profesor on Fundamentals of Computer Science by assisting a large lecture hall of 60+ students by answering questions and debugging student\'s code and facilitated over 100+ tutoring sessions. I currently work as TA and tutor for Object Oriented Programming concepts.',
  },
  {
    name: 'KeanUHackThis Full Stack Web Developer',
    description:
      'Built the most important piece to hosting a college hackathon, a full-stack website for the Kean University hackathon, built to support event registration with a profile and participant waitlisting. The project connects a clean React interface with backend services and database storage so students can sign up, submit information, and stay connected with event updates. Built KeanUHackThis2026 & KeanUHackThis2027',
  },
]

export const skills = ['React', 'TypeScript', 'Node.js', 'REST APIs', 'CSS', 'Git']

export const portfolioProjects: Array<{
  name: string
  detail: string
  description: string
  image?: string
  url?: string
  githubUrl?: string
  slidesUrl?: string
}> = [
  {
    name: 'KeanUHackThis',
    detail: 'Full stack app',
    description:
      'A full-stack app for the Kean University hackathon, built to support event registration with a profile and participant waitlisting. The project connects a clean React interface with backend services and database storage so students can sign up, submit information, and stay connected with the event as it grows.',
    image: '/keanuhackthis.png',
    url: 'https://www.keanuhackthis.com/',
    githubUrl: 'https://github.com/drizzyallen/comingSoon-KeanUHackThis2027',
  },
  {
    name: 'ArcForge',
    detail: 'Team of 6',
    description: 'Built PostgreSQL database with SQL and ran a testing development with Postman to ensure endpoint accuracy and scripted reset commands to reset the database along with validation checks, improving project completion time. Built REST API routes and controllers in accordance to the complex relational database and built Git CI pipeline to automate tests during constant changes, merging, and deployment phase.',
    image: '/arcforge.png',
    url: 'https://arcforge-client.onrender.com/',
    githubUrl: 'https://github.com/arcforge-scenecraft',
    slidesUrl: '/Pitch%20Presentation%20Deck.pdf',
  },
  {
    name: 'Breast Cancer Detection',
    detail: 'Team of 4',
    description: 'Lead a team of 4 on priority tasks on building and testing multiple models and practicing exploratory data analysis on over 5,000+ training examples. Hosted weekly meetings to present minimum viable product, track progress and consider improvements. Integrated FastAPI backend and engineered processing pipelines to clean, normalize, and structure user data for input into machine learning models used to classify the tumor in the histology images as outputs',
    image: '/breastcancerdetection.png',
    url: 'https://breast-cancer-detection-ke9q.vercel.app/',
    githubUrl: 'https://github.com/Breast-Cancer-Detection',
    slidesUrl: '/Final%2018C%20Presentation.pdf',
  }
]

export const articles = [
  {
    slug: 'learning-backend-systems',
    title: 'Learning Backend Systems One Route at a Time',
    date: 'August 3, 2026',
    section: 'Engineering Notes',
    byline: 'By Allen',
    paragraphs: [
      'The first backend lesson that stuck with me was simple: routes are promises. A client asks for something, and the server has to answer clearly, consistently, and with enough context to be useful.',
      'That has shaped how I think about APIs. I try to keep endpoints narrow, validation explicit, and errors readable, because dependable software often starts with small decisions nobody sees.',
    ],
  },
  {
    slug: 'minimal-interfaces',
    title: 'Why Minimal Interfaces Make Projects Easier to Finish',
    date: 'July 24, 2026',
    section: 'Design',
    byline: 'By Allen',
    paragraphs: [
      'A minimal interface is not empty. It is edited. Every heading, border, and button has to earn its place, which makes the work easier to maintain and easier for visitors to understand.',
      'For a portfolio, that means putting the person and the work first. The best version of the page should feel calm, direct, and quick to scan.',
    ],
  },
  {
    slug: 'building-full-stack-projects',
    title: 'What I Look For When Building Full-Stack Projects',
    date: 'July 10, 2026',
    section: 'Projects',
    byline: 'By Allen',
    paragraphs: [
      'I like projects that force the frontend and backend to meet in the middle. The interface should make the data feel obvious, and the API should make the interface feel natural.',
      'That balance is where a project starts to feel real: forms behave well, loading states make sense, and the database model supports the user instead of fighting the product.',
    ],
  },
]
