import Notes from "../assets/notes.png";
import GameIt from "../assets/gameit.png";
import BookStore from "../assets/book.png";
import ExpTrackDash from "../assets/expense-tracher-dashboard.png";
import Dashboard from "../assets/dashboard.png";
import Ecommerce from "../assets/shopping-bag.png";
import Portfolio from "../assets/file.png";
import Theme from "../assets/theme.png";
import API from "../assets/api.png";
import MixMatxh from "../assets/memory.png";
import Cafe from "../assets/cafe.png";
import Todo from "../assets/list.png";
import Quote from "../assets/quotation.png";
import RPS from "../assets/rps.png";
import Calculator from "../assets/calculator.png";
import Clock from "../assets/wall-clock.png";
import Tracker from "../assets/finance.png";
import Snake from "../assets/cobra.png";
import Hops from "../assets/hero.png";
import Bored from "../assets/sleeping.png";
import Job from "../assets/job.png";

export const ProjectList = [
  {
    name: "Notes.",
    skills: "ReactJS, NodeJS, ExpressJS, PostgreSQL, Firebase, Prisma",
    url: "https://mern-notes-nine.vercel.app/",
    tag: ["featured", "all", "react", "postgresql"],
    background: Notes,
    description: "A Fullstack PERN stack Note-taking app with user authentication. Create, View, Edit or Delete the notes which are specific to user. Secured using Firebase authentication.",
  },
  {
    name: "Books",
    skills: "ReactJS, Firebase, JavaScript",
    url: "https://books-dashboard.vercel.app/",
    tag: ["featured", "all", "react"],
    background: BookStore,
    description: "A reactjs app that extracts book details from API and displays in tabular format.",
  },
  {
    name: "Weekday Clone",
    skills: "ReactJS, JavaScript",
    url: "https://weekday-jobs-liart.vercel.app/",
    tag: ["all", "react"],
    background: Job,
    description: "A job board similar to weekday made using Reactjs and Redux. Infinite Scroll made from scratch using JavaScript.",
  },

  {
    name: "GameIt",
    skills: "ReactJS, NodeJS, ExpressJS, MongoDB, Firebase, JavaScript",
    url: "https://game-netflix.netlify.app/",
    tag: ["all", "react"],
    background: GameIt,
    description: "Working on this App Currently.....A Fullstack Game listing App made with MERN stack. Based on design and functionalities of Netflix.",
  },
  {
    name: "BookStore CRUD",
    skills: "ReactJS, NodeJS, ExpressJS, MongoDB, JavaScript",
    url: "https://www.youtube.com/watch?v=Ly3YNet1xqg",
    tag: ["featured", "all", "react"],
    background: BookStore,
    description: "A Fullstack CRUD App made using MERN stack. New Books can be added, Books can be displayed or deleted and their data can be edited as well.",
  },
  {
    name: "Expense Tracker Dashboard",
    skills: "ReactJS, Redux, Firebase, JavaScript, CSS, HTML",
    url: "https://tracker-reactjs.netlify.app/",
    tag: ["all", "react"],
    background: ExpTrackDash,
    description: "A ReactJS-based expense tracker dashboard project with Firebase user authentication and redux for centralized state management. Add your expenses in different categories and keep track of all you expenses with different metrics showcased using graphs.",
  },
  {
    name: "Dashboard",
    skills: "ReactJS, Firebase, JavaScript, CSS, HTML",
    url : "https://dashboard-reactjs-demo.netlify.app/",
    tag: ["all", "react"],
    background : Dashboard,
    description: "A ReactJS-based admin dashboard project with Firebase user authentication, showcasing dynamic business metrics like revenue, user statistics, and likes. It utilizes Google Charts to present interactive Spline graphs and PieCharts, with data updating in real-time according to the selected month.",
  },
  {
    name: "E-Commerce",
    skills: "ReactJS, JavaScript, CSS, HTML",
    url : "https://billionnairescart.netlify.app/",
    tag: ["all", "react"],
    background : Ecommerce,
    description : "BillionnairesCart is an exclusive ecommerce platform tailored for discerning individuals seeking luxury products like islands, jets, and other high-end items. Developed with React hooks, the website offers a seamless user experience. Leveraging JavaScript arrays as a pseudo-database, the platform efficiently handles product data, enabling users to explore and purchase extravagant products in style.",
  },
  {
    name: "Portfolio",
    skills: "ReactJS, JavaScript, CSS, HTML",
    url : "https://ankitsuman.netlify.app/",
    tag: ["all", "react"],
    background : Portfolio,
    description : "My personal portfolio website, meticulously designed and coded from scratch. Embodying a minimalist and modern aesthetic, the tasteful use of colors exudes an alluring charm, creating an aesthetically pleasing user experience. The Project page offers seamless sorting options for effortless navigation through my showcased projects. Leveraging the power of ReactJS, this dynamic portfolio is hosted flawlessly on Netlify.",
  },
  {
    name: "The Bored Man",
    skills: "Vite, ReactJS, JavaScript, CSS, HTML",
    url : "https://vite-bored-api.netlify.app/",
    tag: ["all", "react"],
    background: Bored,
    description: "Made using Vite and Reactjs, this web app gives you an activity to perform in case you are getting bored. You can either get a random activity or select a category and get activity based on that.",
  },
  {
    name: "Theme Switcher",
    skills: "ReactJS, JavaScript, CSS, HTML",
    url : "https://switch-themes.netlify.app/",
    tag: ["all", "react"],
    background : Theme,
    description : "An intuitive React App featuring a mini-website, designed to offer seamless theme-switching functionality. Elevate your browsing experience by effortlessly toggling through diverse themes using the elegantly placed buttons. Each press artfully transforms the color scheme, imbuing the website with a fresh and captivating appearance. This cutting-edge project exemplifies the seamless integration of design and functionality.",
  },
  {
    name: "The Hops Game",
    skills: "JavaScript, CSS, HTML",
    url : "https://js-thehopsgame.netlify.app/",
    tag: ["all", "game"],
    background : Hops,
    description: "Embark on an exciting adventure in this nostalgic platformer game inspired by the classic Dave. Jump and climb your way through various platforms, collecting coins and lives along the way. Reach the door on the other side to win, but beware of challenges and obstacles that stand in your path. Enjoy the thrill of this retro-style game!",
  },
  {
    name: "Random APIs",
    skills: "ReactJS, JavaScript, CSS, HTML",
    url : "https://random-api-project.netlify.app/",
    tag: ["all", "react"],
    background : API,
    description : "Step into a world of delightful randomness with this captivating React App, thoughtfully curated to bring moments of joy and amusement. Discover an array of APIs, each encapsulating a unique surprise - from humorous jokes and intriguing trivia to soulful poetry and clever puns. Six APIs lie at your fingertips, waiting to whisk you away on an enchanting journey of discovery.",
  },
  {
    name: "Mix-N-Match Game",
    skills: "JavaScript, CSS, HTML",
    url : "https://js-mix-n-match.netlify.app/",
    tag: ["all", "game"],
    background : MixMatxh,
    description : "A Memory Game, crafted to challenge your memory prowess. Upon tapping the 'Start' button, embark on an engaging quest to match cards through strategic memory recall. Each card reveals its identity upon tapping. Sharpen your memory as you unveil two cards at a time, striving to find perfect matches. Immerse yourself in this elegantly designed experience, combining entertainment and cognitive exercise in an exquisite fusion of design and functionality.",
  },
  {
    name: "Coffee Shop Landing Page",
    skills: "JavaScript, CSS, HTML",
    url : "https://js-coffeeshop.netlify.app/",
    tag: ["all"],
    background : Cafe,
    description : "An exquisitely designed landing page tailored for a sophisticated Coffee Shop/Cafe. Crafted with a harmonious color scheme that encapsulates the essence of a cozy coffee haven, this aesthetically pleasing page captivates visitors' senses. Thoughtfully curated to showcase the delectable products and premium offerings, it seamlessly delivers essential information for an enriched buying experience.",
  },
  {
    name: "To-Do List",
    skills: "ReactJS, JavaScript, CSS, HTML",
    url : "https://reactjs-todolistapp.netlify.app/",
    tag: ["all", "react"],
    background : Todo,
    description : "A Todo list app meticulously developed with ReactJS, offering seamless task management with an intuitive interface. This robust application allows users to effortlessly add tasks and efficiently remove completed items. The implementation of unique IDs ensures precise identification, enabling precise removal of targeted tasks, even amidst identical task names.",
  },
  {
    name: "Snake Game",
    skills: "JavaScript, CSS, HTML",
    url : "https://js-snakesgame.netlify.app/",
    tag: ["all", "game"],
    background : Snake,
    description: "Experience the classic fun of Snake Game! This browser-based game is built using HTML, CSS, and JavaScript, offering a simple yet addictive gameplay. Control the snake to collect food and grow longer while avoiding collisions with the walls and its own tail. Challenge your reflexes and aim for the highest score!",
  },
  {
    name: "Quote Generator",
    skills: "ReactJS, JavaScript, CSS, HTML",
    url : "https://react-quotegenerator.netlify.app/",
    tag: ["all", "react"],
    background : Quote,
    description : "A simple Quote Generator app skillfully crafted with ReactJS, seamlessly harnessing the potential of APIs to present captivating and inspirational quotes. This elegantly designed project exemplifies the seamless integration of API technology into a dynamic web application.",
  },
  {
    name: "Rock, Paper, Scissor",
    skills: "JavaScript, CSS, HTML",
    url : "https://js-rockpaperscissorgame.netlify.app/",
    tag: ["all"],
    background : RPS,
    description: "An elegant and engaging web app that invites users to play the classic game of Rock, Paper, Scissors against the computer. Designed with a focus on minimalism and aesthetics, this delightful experience captivates users with its sleek interface and minimal color scheme. The results of each game are promptly displayed, while the overall score is recorded, creating a seamless and interactive gaming experience.",
  },
  {
    name: "Calculator",
    skills: "JavaScript, CSS, HTML",
    url : "https://js-calculator-projects.netlify.app/",
    tag: ["all"],
    background : Calculator,
    description: "Presenting a sophisticated and visually appealing calculator, skillfully designed using HTML, CSS, and JavaScript. Embodying a sleek and minimalist aesthetic, this calculator boasts all the essential functionalities of a basic calculator, ensuring seamless and accurate calculations. The captivating color scheme draws inspiration from the renowned Google logo palette, elevating the overall user experience.",
  },
  {
    name: "Analog Clock",
    skills: "JavaScript, CSS, HTML",
    url : "https://js-analogclocks.netlify.app/",
    tag: ["all"],
    background : Clock,
    description: "An elegant and accurate clock crafted using HTML, CSS, and JavaScript. This sleek timepiece fetches the initial time from the user's system and seamlessly updates every second, mirroring the precision of a real clock. With smooth and fluid hand movements, it emulates the charm of a traditional timekeeping device.",
  },
  {
    name: "Expense Tracker",
    skills: "JavaScript, CSS, HTML",
    url : "https://js-expense-tracker-project.netlify.app/",
    tag: ["all"],
    background : Tracker,
    description: "A dynamic expense tracking website designed to efficiently manage your financial data. With intuitive category selection and date setting functionalities, effortlessly keep track of your expenses. The data is stored and showcased in an organized table format, accompanied by a Pie Chart that highlights the distribution of expenses across categories.",
  },
//   {
//     name: "Dashboard Visualizer",
//     image: project,
//     skills: [ReactJS, JS, CSS, HTML],
//     url : "www.google.com",
//     tag: ["featured", "all", "react", "clone"],
//     featured: false,
//     description: "Description",
//   },
  
];
