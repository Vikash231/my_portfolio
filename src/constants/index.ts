import { backend,railway, cp, shopkart, blockchain, frontend, tenderbyte } from '../assets';
import { python, sql, django, css, git, html, javascript, mongodb, nodejs, reactjs, tailwind, typescript, cpp, php} from '../assets';

export const resumeLink = "https://drive.google.com/file/d/1MLEgNpCgMWQjUNftXBxhV620usd2SGXS/preview";

export const aboutMe = "Hello, I'm Vikash, a dedicated Full Stack Developer. I had very good experience of making projects using modern day technologies like mern stack, tailwind css etc.\nDriven by a passion for problem-solving, I've achieved a Knight badge (1936 rating) and Specialist (1434 rating) title at codeforces.\nMy curiosity for exploring new technologies has led me to diverse projects, including crafting developing full-stack applications. Each project presents a unique opportunity for me to expand my technical repertoire and push the boundaries of innovation.\nLet's connect and explore opportunities to collaborate on exciting ventures together!"

export const skills = [
    {title: "Competitive Programmer", icon: cp}, 
    {title: "FrontEnd Developer", icon: frontend}, 
    {title: "Backend Developer", icon: backend}, 
];

export const frameworks = [
    {title: 'React', icon: reactjs, invert: false }, 
    {title: 'Node.js', icon: nodejs, invert: true }, 
    {title: 'Tailwind', icon: tailwind, invert: false }, 
    {title: 'Django', icon: django, invert: true }, 
    {title: 'Git', icon: git, invert: false },
    // {title: 'Spring Boot', icon: springboot, invert: false }, 
]

export const languages = [
    {title: 'C++', icon: cpp, invert: false }, 
    {title: 'Python', icon: python, invert: false }, 
    {title: 'HTML', icon: html, invert: false }, 
    {title: 'CSS', icon: css, invert: false }, 
    {title: 'Javascript', icon: javascript, invert: false }, 
    {title: 'TypeScript', icon: typescript, invert: false }, 
    {title: 'SQL', icon: sql, invert: true }, 
    {title: 'MongoDB', icon: mongodb, invert: false },
];

export const projects = [
    {
        title: "E-Commerce website (ShopKart)",
        description: "Developed an e-commerce website for the users to buy products, add products in the kart and make payments at once. Responsive frontend was made using react js, redux toolkit, and tailwind css. Backend was made using MongoDB, nodeJs and REST APIs. JWT was used for creating tokens that represent the user's session and using cookies-parser they were stored securely for a session",
        stack: [reactjs, tailwind, javascript, mongodb],
        source: "https://github.com/Vikash231/shopKart",
        media: shopkart
    },
    {
        title: "Blockchain",
        description: "Developed full functional blockchain using javascript. Consensus algorithm used for this blockchain is Proof of work(PoW). Used Express to set up the API for building whole blockchain network for multiple users to interact. Built the frontend using ReactJs. Implemeneted all mathematical concepts of blockchain to build this.",
        stack: [javascript, html, css, git],
        source: "https://github.com/Vikash231/blockchain",
        media: blockchain
    },
    {
        title: "Railway Management Website",
        description: "Developed a user friendly railway management system using html, css, javascript, python and Django framework. Used html, css and javascript to build a responsive frontend for users. Used Django to sotre the user and train routes details in a database. Stored and managed application data efficiently, ensuring data integrity and reliability.",
        stack: [python, django],
        source: "https://github.com/Vikash231/railway_system",
        media: railway
    },
    {
        title: "Tender Management System (TenderByte)",
        description: "Developed a user friendly railway management system using html, css, javascript, python and Django framework. Used html, css and javascript to build a responsive frontend for users. Used Django to sotre the user and train routes details in a database. Stored and managed application data efficiently, ensuring data integrity and reliability.",
        stack: [html, css, php],
        source: "https://github.com/Vikash231/TenderByte",
        media: tenderbyte
    }
    

]