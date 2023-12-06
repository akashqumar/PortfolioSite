/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Akash kumar",
  title: "Hi all, I'm Akash",
  subTitle: emoji(
    "A passionate Full Stack Software Developer 🚀 having an experience of building Web applications with JavaScript / ReactJs / NodeJs / NextJs and some other cool libraries and frameworks."
  ),
  resumeLink:
    "https://drive.google.com/file/d/1bDPcK-5V5hu49q4aX2tvbuccjSJ4KVsR/view", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/akashqumar",
  linkedin: "https://www.linkedin.com/in/akashqumar/",
  gmail: "saadpasta70@gmail.com",
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "CRAZY FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK",
  skills: [
    emoji(
      "⚡ Develop highly interactive Front end / User Interfaces for your web applications"
    ),
    emoji("⚡ Passionate about building elegant and functional websites, dedicated to delivering clean, efficient code for an enhanced user experience"),
    emoji(
      "⚡ Crafting digital experiences through innovative web solutions, merging design and technology to create seamless user interactions "
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "html",
      customImageURL: require("./assets/images/html.png")
    },
    {
      skillName: "css",
      customImageURL: require("./assets/images/css.png")
    },
    {
      skillName: "Talwindcss",
      customImageURL: require("./assets/images/talwindcss.jpeg")
    },
    {
      skillName: "javascript",
      customImageURL: require("./assets/images/javascript.png")
    },
    {
      skillName: "Nodejs",
      customImageURL: require("./assets/images/nodejs.png")
    },
    {
      skillName: "Reactjs",
      customImageURL: require("./assets/images/react.png")
    },
    {
      skillName: "Nextjs",
      customImageURL: require("./assets/images/nextjs.png")
    },
    {
      skillName: "Redux",
      customImageURL: require("./assets/images/redux.png")
    },
    {
      skillName: "JSON",
      customImageURL: require("./assets/images/json.jpeg")
    },
    {
      skillName: "Mongodb",
      customImageURL: require("./assets/images/mongodb.png")
    },
    {
      skillName: "Sql",
      customImageURL: require("./assets/images/sql.jpeg")
    },
    {
      skillName: "MUI",
      customImageURL: require("./assets/images/mui.png")
    },
    {
      skillName: "Postman",
      customImageURL: require("./assets/images/postman.png")
    },
    {
      skillName: "Mysql",
      customImageURL: require("./assets/images/mysql.jpeg")
    },
    {
      skillName: "Git",
      customImageURL: require("./assets/images/git.png")
    },
    {
      skillName: "VScode",
      customImageURL: require("./assets/images/vscode.png")
    },
    {
      skillName: "Firebase",
      customImageURL: require("./assets/images/fire.png")
    },
    {
      skillName: "Swagger",
      customImageURL: require("./assets/images/swagger.png")
    },
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Indian Institute of Information Technology Tiruchirappalli",
      logo: require("./assets/images/iiitt-logo.png"),
      subHeader: "Bachelor of Technology Electronics and Communication Engineering",
      duration: "December 2020 - April 2024",
      desc: "Except academics, Learned Time Management, Adaptability, Networking, How to Learn, Cultural and Global Awareness",
    },
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: false, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend/Design", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "70%"
    },
    {
      Stack: "Programming",
      progressPercentage: "90%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Frontend Developer Intern",
      company: "Proactivist",
      companylogo: require("./assets/images/companylogo.png"),
      date: "June 2023 – August 2023",
      // desc: "Developed profile page using ReactJS components, integrating data from APIs and Redux toolkit.Utilized Redux Toolkit for efficient data state management..",
      descBullets: [
        "Developed profile page using ReactJS components, integrating data from APIs and Redux toolkit",
        "Utilized Redux Toolkit for efficient data state management",
        "Implemented Shimmer effect for loading state of components",
        "Used TinyMCE editor for creating and editing posts",
      ]
    },
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: false // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Projects",
  // subtitle: "SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
  projects: [
    {
      image: require("./assets/images/estate.png"),
      projectName: "GrandVista Estate",
      projectDesc: "Real estate website for buying and selling properties, user authentication using JWT. Have Admin page for adding properties that we want to list on the site",
      footerLink: [
        {
          name: "Github Repo",
          url: "https://github.com/akashqumar/Mern-Estate-App"
        },
        {
          name: "Visit Website",
          url: "https://mern-estate-nswj.onrender.com/"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/shopper.jpg"),
      projectName: "ShopperStops",
      projectDesc: "E-commerce website, including a shopping cart, payment gateway, and user authentication using JWT. Have Admin page for performing CRUD operation on products that we want to list on the site",
      footerLink: [
        {
          name: "Github Repo",
          url: "https://github.com/akashqumar/ShopperStops"
        },
        {
          name: "Visit Website",
          url: "https://shopperstops.netlify.app/"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/chatt.png"),
      projectName: "ChatApp",
      projectDesc: "Real-time chat-app, login system for each individual for user authentication and for real-time chat I have used Socket.io that provides real-time chat for an immersive experience",
      footerLink: [
        {
          name: "Github Repo",
          url: "https://github.com/akashqumar/ChatApp"
        },
        {
          name: "Visit Website",
          url: "https://snappychatapp.netlify.app/"
        }
      ]
    },
    {
      image: require("./assets/images/todo.png"),
      projectName: "TodoList",
      projectDesc: "This helps to keep track of our day-to-day life activity and helps to manage them efficiently built using the MERN stack, which provides a full-stack solution for web development",
      footerLink: [
        {
          name: "Github Repo",
          url: "https://github.com/akashqumar/MernTodoList"
        },
        {
          name: "Visit Website",
          url: "https://marvelous-muffin-42b65f.netlify.app/"
        }
        //  you can add extra buttons here.
      ]
    },
    
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",



  display: false // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  // podcast: [
  //   "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  // ],
  display: false // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+91-7279007956",
  email_address: "aakash292984@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

const isHireable = true; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable
};
