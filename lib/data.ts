import { IProject } from '@/types';

export const GENERAL_INFO = {
    email: 'psmaan4444@gmail.com',

    emailSubject: "Let's collaborate on a project",
    emailBody: 'Hi Piyush, I am reaching out to you because...',

    upworkProfile: 'https://www.linkedin.com/in/piyushmaan',
};

export const SOCIAL_LINKS = [
    { name: 'github', url: 'https://github.com/psmaan' },
    { name: 'linkedin', url: 'https://www.linkedin.com/in/piyushmaan' },
    { name: 'twitter', url: 'https://x.com/heyxpiyush' },
];

export const MY_STACK = {
    languages: [
        {
            name: 'Python',
            icon: '/logo/python.png',
        },
        {
            name: 'JavaScript',
            icon: '/logo/js.png',
        },
        {
            name: 'TypeScript',
            icon: '/logo/ts.png',
        },
        {
            name: 'Java',
            icon: '/logo/java.png',
        },
        {
            name: 'SQL',
            icon: '/logo/sql.png',
        },
    ],
    frontend: [
        {
            name: 'React',
            icon: '/logo/react.png',
        },
        {
            name: 'Next.js',
            icon: '/logo/next.png',
        },
        {
            name: 'Tailwind CSS',
            icon: '/logo/tailwind.png',
        },
        {
            name: 'Framer Motion',
            icon: '/logo/framer-motion.png',
        },
        {
            name: 'Bootstrap',
            icon: '/logo/bootstrap.svg',
        },
    ],
    backend: [
        {
            name: 'Node.js',
            icon: '/logo/node.png',
        },
        {
            name: 'Express.js',
            icon: '/logo/express.png',
        },
        {
            name: 'Flask',
            icon: '/logo/flask.webp',
        },
        {
            name: 'FastAPI',
            icon: '/logo/fastapi.svg',
        },
    ],
    database: [
        {
            name: 'PostgreSQL',
            icon: '/logo/postgreSQL.png',
        },
        {
            name: 'MySQL',
            icon: '/logo/mysql.svg',
        },
        {
            name: 'MongoDB',
            icon: '/logo/mongodb.svg',
        },
    ],
    ML: [
        {
            name: 'NumPy',
            icon: '/logo/numpy.png',
        },
        {
            name: 'Pandas',
            icon: '/logo/pandas.png',
        },
        {
            name: 'Scikit-learn',
            icon: '/logo/sscikit-learn.png',
        },
        {
            name: 'Jupyter Notebook',
            icon: '/logo/jupyter.png',
        },
    ],
    tools: [
        {
            name: 'Git',
            icon: '/logo/git.png',
        },
        {
            name: 'Docker',
            icon: '/logo/docker.svg',
        },
        {
            name: 'AWS',
            icon: '/logo/aws.png',
        },
        {
            name: 'Postman',
            icon: '/logo/postman.webp',
        },
    ],
};

export const PROJECTS: IProject[] = [
    {
        title: 'Greatfind AI - Car Marketplace',
        slug: 'greatfind-ai',
        liveUrl: 'https://app-dev.greatfind.ai/',
        year: 2025,
        description: `
      An AI-driven car marketplace and portfolio platform built for Greatfind AI to showcase services, blog content, and product offerings. <br/><br/>
      
      Key Features:<br/>
      <ul>
        <li>🛠️ 32+ Production-Grade UI Screens: Built from Figma with React, TypeScript, and Tailwind</li>
        <li>🔎 Advanced Filters: Dynamic filter logic, saved filter mapping, and infinite scroll</li>
        <li>🤖 AI Chatbot: Integrated contextual chatbot with RESTful APIs</li>
        <li>📱 Fully Responsive: Optimized for all device sizes</li>
        <li>⚡ Vercel Deployment: CI/CD enabled for seamless updates</li>
      </ul><br/>
      
      Technical Highlights:
      <ul>
        <li>Connected frontend with OpenAPI services and signed URL-based streaming</li>
        <li>Ensured component isolation and reusability with Storybook</li>
        <li>Collaborated in Agile sprints with DevJam/Jira for timely delivery</li>
      </ul>
    `,
        role: `
      React Lead <br/>
      Owned frontend engineering lifecycle:<br/>
      <ul>
        <li>✅ Developed complete UI with reusable, component-driven architecture</li>
        <li>🔄 Integrated REST APIs for filters, chatbot, and listings</li>
        <li>🎨 Built responsive layouts with Tailwind + SCSS</li>
        <li>🚀 Deployed production-ready build with Vercel CI/CD</li>
      </ul>
    `,
        techStack: [
            'React',
            'TypeScript',
            'Tailwind CSS',
            'SCSS',
            'Axios',
            'Storybook',
            'Vercel',
        ],
        thumbnail: '/projects/images/greatfind-ai-2.png',
        longThumbnail: '/projects/images/greatfind-ai-2.png',
        images: [
            '/projects/images/greatfind-ai-1.png',
            '/projects/images/greatfind-ai-2.png',
            '/projects/images/greatfind-ai-3.png',
            '/projects/images/greatfind-ai-4.png',
            '/projects/images/greatfind-ai-5.png',
        ],
    },
    {
        title: 'Grammie – Personalized AI Healthcare',
        slug: 'grammie',
        liveUrl: 'https://medical-website-nu.vercel.app/',
        year: 2025,
        description: `
      An AI-first healthcare platform built as a B.Tech 3rd-year project to enable patient onboarding, caretaker-user matching, and AI-assisted health record management. <br/><br/>
      
      Key Features:<br/>
      <ul>
        <li>🏥 Patient & Caretaker Onboarding: Seamless, structured flow</li>
        <li>🧠 GPT-Based Chatbot: Symptom tracking, health Q&A, and personal memory</li>
        <li>🔐 Secure Auth: JWT-based authentication with role-specific access</li>
        <li>📊 Dynamic Health Records: Modular architecture for medical data display</li>
      </ul>
    `,
        role: `
      MERN & GenAI Lead <br/>
      Responsibilities included:<br/>
      <ul>
        <li>✅ Full-stack development using React, Node.js, Flask, and Tailwind</li>
        <li>🤖 Integrated custom-trained GPT model via Flask APIs</li>
        <li>🔄 Designed modular architecture with Axios + JWT authentication</li>
        <li>🎨 Applied health-tech UX and patient-centric design principles</li>
      </ul>
    `,
        techStack: [
            'React',
            'Node.js',
            'Express',
            'MongoDB',
            'Flask',
            'Python',
            'JWT',
            'Tailwind CSS',
            'Axios',
        ],
        thumbnail: '/projects/images/grammie-3-thumbnail.png',
        longThumbnail: '/projects/long/grammie.webp',
        images: [
            '/projects/images/grammie-1.png',
            '/projects/images/grammie-2.png',
            '/projects/images/grammie-3.png',
            '/projects/images/grammie-4.png',
            '/projects/images/grammie-5.png',
        ],
    },
    {
        title: 'Blooming – Agency Website',
        slug: 'blooming',
        liveUrl: 'https://blooming-gamma.vercel.app/',
        year: 2025,
        description: `
      A modern agency website focusing on modern design trends and seamless user experience. <br/><br/>
      Key Features:<br/>
      <ul>
        <li>🎨 Complex CSS layouts with Tailwind</li>
        <li>⚡ Responsive and animation-rich interface</li>
        <li>📱 Optimized for scalability and modularity</li>
      </ul>
    `,
        role: `
      Fullstack Developer <br/>
      <ul>
        <li>✅ Built UI components from Figma with React & Tailwind</li>
        <li>🎯 Ensured design consistency and reusable styling</li>
        <li>🚀 Delivered production-ready UI for Blooming marketplace</li>
      </ul>
    `,
        techStack: ['React', 'Tailwind CSS', 'Framer Motion', 'Axios'],
        thumbnail: '/projects/images/blooming-1.png',
        longThumbnail: '/projects/long/blooming.webp',
        images: [
            '/projects/images/blooming-1.png',
            '/projects/images/blooming-2.png',
        ],
    },
    {
        title: 'Sipinor – School Dashboard',
        slug: 'sipinor-school-dashboard',
        liveUrl: 'https://psmaan.github.io/school-dashboard',
        year: 2024,
        description: `
    A full-featured school management dashboard designed to centralize student data, payroll, fee collection, staff management, and analytics. <br/><br/>
    
    Key Features:<br/>
    <ul>
      <li>👩‍🎓 Student Information System: Manage student enrollment, profiles, and attendance</li>
      <li>💰 Finance Module: Fee management, payroll stats, and income/expense summaries</li>
      <li>📊 Analytics: Interactive charts for performance, fee tracking, visitor logs, and religion-wise distribution</li>
      <li>📅 Employee Management: Leave allocation, approval workflows, and document tracking</li>
      <li>⚡ Live Dashboard: Real-time data updates with highly visual insights</li>
    </ul>
  `,
        role: `
    Frontend Developer <br/>
    <ul>
      <li>✅ Built an interactive, responsive dashboard using React, Redux, and Tailwind CSS</li>
      <li>🎨 Designed intuitive UI with charts, modals, and tabular data</li>
      <li>🔄 Integrated APIs for payroll, fee tracking, and student data modules</li>
      <li>📱 Delivered a mobile-friendly, analytics-heavy platform with Framer Motion animations</li>
    </ul>
  `,
        techStack: [
            'React.js',
            'Redux',
            'Tailwind CSS',
            'React i18n',
            'Framer Motion',
        ],
        thumbnail: '/projects/images/sipinor-1.png',
        longThumbnail: '/projects/long/sipinor.jpg',
        images: ['/projects/images/sipinor-1.png'],
    },
    {
        title: 'AfriDES – Africa Digital Economy Summit',
        slug: 'afrides',
        liveUrl: 'https://afrides.vercel.app/',
        year: 2024,
        description: `
    A responsive event website for the Africa Digital Economy Summit (AfriDES), showcasing event details, speakers, hosts, and ticketing. <br/><br/>
    
    Key Features:<br/>
    <ul>
      <li>🌍 Event Showcase: Highlighted event goals, schedule, and partners</li>
      <li>🎤 Speaker & Host Profiles: Dynamic sections for showcasing participants</li>
      <li>💳 Ticketing System: Multi-tier pricing (basic, standard, premium) with early-bird offers</li>
      <li>📱 Fully Responsive: Optimized design for accessibility across devices</li>
      <li>🎨 Engaging UI: Modern design with Bootstrap and SCSS</li>
    </ul>
  `,
        role: `
    Frontend Developer <br/>
    <ul>
      <li>✅ Built the website from scratch using HTML, SCSS, Bootstrap, and JavaScript</li>
      <li>🎨 Created a responsive, accessible, and SEO-friendly design</li>
      <li>⚡ Integrated ticket pricing modules with dynamic styling</li>
      <li>🚀 Deployed and optimized for smooth performance</li>
    </ul>
  `,
        techStack: ['HTML', 'CSS & SCSS', 'JavaScript', 'Bootstrap'],
        thumbnail: '/projects/images/afrides-1.png',
        longThumbnail: '/projects/long/afrides.jpg',
        images: [
            '/projects/images/afrides-1.png',
            '/projects/images/afrides-2.png',
        ],
    },
];

export const MY_EXPERIENCE = [
    {
        title: 'Fullstack Developer (Part Time)',
        company: 'Pari Technology',
        duration: 'Jan 2025 - Jul 2025',
    },
    {
        title: 'Web Development Intern',
        company: 'Hub for Digital Excellence',
        duration: 'Jul 2024 - Jan 2025',
    },
    {
        title: 'Webdev Co-lead',
        company: 'Google Developers Student Club',
        duration: 'Jul 2024 - Jun 2025',
    },
];
