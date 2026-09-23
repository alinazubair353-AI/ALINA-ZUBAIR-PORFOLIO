// EDIT THIS FILE to update the whole website. Nothing else needs to change.
export const person = {
  name: 'Alina Zubair',
  headline: 'AI Undergraduate Student & Aspiring AI Engineer',
  title: 'AI Undergraduate Student | AI Automation & Machine Learning',
  tagline: 'Building practical solutions with Artificial Intelligence, Machine Learning, AI Automation, and Computer Vision.',
  meta: 'BS Computer Science (Artificial Intelligence) | 5th Semester | CGPA 3.64/4.00',
  location: 'Gujrat, Pakistan',
  email: 'alinazubair353@gmail.com',
  github: 'https://github.com/alinazubair353-AI',
  linkedin: 'https://www.linkedin.com/in/alina-zubair-6b957938a',
  resume: '/Alina-Zubair-Resume.pdf',
  about: [
    "I'm Alina Zubair, a BS Computer Science student specializing in Artificial Intelligence. I'm currently in my 5th semester and have a CGPA of 3.64/4.00.",
    'My interests include Artificial Intelligence, Machine Learning, AI Automation, Computer Vision, recommendation systems, and practical AI workflows.',
    'Through academic projects, internships, and independent learning, I have gained hands-on experience with Python, machine learning, computer vision, data-related workflows, n8n automation, and AI API integrations.',
    'I enjoy learning new technologies and turning AI concepts into practical solutions.',
  ],
}
export const education = {
  degree: 'BS Computer Science — Artificial Intelligence',
  school: 'University of Arid Agriculture, Gujrat, Pakistan',
  period: '2023 – Present', semester: '5th Semester', cgpa: '3.64 / 4.00',
  coursework: ['Artificial Intelligence', 'Data Structures', 'Programming Fundamentals', 'Computer Networks'],
}
// end: null means "Present". When an internship finishes, set end to the real date (e.g. 'Nov 2026') and status to 'Completed'.
export const experience = [
  { role: 'AI Automation Intern', company: 'BigBrain Learning', start: '', end: null as string | null, status: 'Ongoing',
    description: 'Currently gaining practical experience in AI automation through BigBrain Learning, working with automation workflows, AI-powered tools, integrations, and practical workflow development.',
    highlights: [] as string[] /* add real projects here when you have them */ },
  { role: 'AI/ML Intern', company: 'DecodeLabs', start: '2026', end: '1 Month', status: 'Completed',
    description: 'Completed hands-on AI/ML projects involving chatbot logic, KNN classification, computer vision, and job-role recommendation systems.',
    highlights: ['Rule-Based Chatbot', 'Iris Flower Classification using KNN', 'OCR & Object Detection', 'Digital Matchmaker / Job Role Recommender'] },
  { role: 'Private Tutor', company: 'Self-Employed', start: '2023', end: null as string | null, status: 'Ongoing',
    description: "Provide one-on-one tutoring in computer science and programming while adapting teaching approaches to individual students' learning needs.",
    highlights: [] as string[], place: 'Gujrat, Pakistan' },
]
export const skills: Record<string, string[]> = {
  Programming: ['Python', 'C++', 'SQL', 'HTML'],
  'AI & Machine Learning': ['Machine Learning', 'KNN', 'TF-IDF', 'Cosine Similarity', 'Neural Networks', 'Natural Language Processing', 'Computer Vision'],
  'AI Automation': ['n8n', 'AI API Integration', 'Workflow Automation', 'Webhooks', 'API Integration'],
  'Computer Vision': ['OpenCV', 'Tesseract OCR', 'OCR', 'Object Detection'],
  Data: ['NumPy', 'pandas', 'Matplotlib', 'Seaborn', 'Data Annotation', 'Data Labeling', 'Intent Classification', 'Sentiment Classification', 'PII Classification'],
  Tools: ['GitHub', 'Jupyter Notebook', 'Google Sheets', 'MS Word', 'MS Excel', 'PowerPoint'],
}
const gh = person.github
export const projects: { title: string; description: string; tech: string[]; repo?: string; note?: string }[] = [
  { title: 'Rule-Based Chatbot', repo: `${gh}/DecodeLabs-Internship-Project-1`, tech: ['Python', 'Rule-Based Logic'],
    description: 'A simple rule-based chatbot developed during my DecodeLabs AI internship. The chatbot responds to predefined user inputs using a dictionary-based rule system.' },
  { title: 'Iris Flower Classification Using KNN', repo: `${gh}/DecodeLabs-Internship-project-2`, tech: ['Python', 'scikit-learn', 'NumPy', 'pandas', 'Matplotlib', 'Seaborn', 'KNN'],
    description: 'A machine learning classification project using the K-Nearest Neighbors algorithm to classify Iris flowers into Setosa, Versicolor, and Virginica.' },
  { title: 'Digital Matchmaker — Job Role Recommender', repo: `${gh}/DecodeLabs-Internship-project3`, tech: ['Python', 'scikit-learn', 'NumPy', 'TF-IDF', 'Cosine Similarity'],
    description: "A job-role recommendation system that compares a user's technical skills with job roles using TF-IDF and Cosine Similarity.",
    note: 'Features: skill input, job-role matching, top matching roles, missing-skill identification.' },
  // TODO: replace description/tech with what is actually in the repo README.
  { title: 'AI Automation — n8n Workflows', repo: `${gh}/n8n-workflows`, tech: ['n8n', 'Workflow Automation'],
    description: 'Workflow automation projects built with n8n.' },
  // TODO: add the real repo URL once confirmed (leave undefined to show no link).
  { title: 'OCR & Object Detection', repo: undefined, tech: ['Python', 'OpenCV', 'Tesseract OCR', 'Object Detection'],
    description: 'A computer vision project completed during my DecodeLabs internship.' },
]
export const certifications = [
  { title: 'Data Labeling Job Simulation — Forage Academy', date: 'May 2026',
    description: 'Worked as a Data Labeling Analyst, classifying messages for Intent, Sentiment, and PII and reviewing peer labeling for quality.' },
  { title: 'Certificate in Digital Logic Design', date: '', description: '' }, // add issuer/date when you have them
]
export const interests = ['Artificial Intelligence', 'Machine Learning', 'AI Automation', 'Workflow Automation', 'Computer Vision', 'Data Labeling', 'AI Operations', 'Trust & Safety', 'Generative AI', 'NLP', 'AI Agents']
export const journey = [
  { when: '2023 – Present', what: 'BS Computer Science — Artificial Intelligence' },
  { when: '2023 – Present', what: 'Private tutoring in computer science and programming' },
  { when: '2026', what: 'AI/ML Internship — DecodeLabs' },
  { when: '2026', what: 'Practical AI/ML projects: Rule-Based Chatbot, KNN Classification, Computer Vision, Job Role Recommendation' },
  { when: '2026', what: 'Data Labeling Job Simulation — Forage Academy' },
  { when: 'Present', what: 'AI Automation Internship — BigBrain Learning (ongoing)' },
]
export const nav = ['Home', 'About', 'Education', 'Experience', 'Skills', 'Projects', 'Certifications', 'Journey', 'Contact']
