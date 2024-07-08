const knowledge = [
    {
        title: 'Front-End Development',
        description: 'Intermediate understanding on concepts of building web applications and familiarity on using different frameworks stated below. Please check my projects, Thank you.',
        list: [ 
            { name: 'HTML', icon: 'https://img.icons8.com/color/48/html-5--v1.png' , alt: 'html-5--v1'},
            { name: 'CSS', icon: 'https://img.icons8.com/color/48/css3.png' , alt: 'css3'},
            { name: 'Javascript', icon: 'https://img.icons8.com/color/48/javascript--v1.png' , alt: 'javascript--v1'},
            { name: 'Vue.js', icon: 'https://img.icons8.com/fluency/48/vuejs.png' , alt: 'vuejs'},
            { name: 'Bootstrap', icon: 'https://img.icons8.com/color-glass/48/bootstrap.png' , alt: 'bootstrap'},
        ]
    },
    {
        title: 'Backend-End Development',
        description: 'Basic understanding and familiarity of concepts on storing data and authentication.',
        list: [ 
           /*  { name: 'Express', icon: 'https://img.icons8.com/color/48/express-js.png' , alt: 'html-5--v1'}, */
            { name: 'PHP', icon: 'https://img.icons8.com/ios-filled/50/php-logo.png' , alt: 'css3'},
            { name: 'MySQL', icon: 'https://img.icons8.com/fluency/48/mysql-logo.png' , alt: 'javascript--v1'},
            /* { name: 'Google Cloud Platform', icon: 'https://img.icons8.com/color/48/google-cloud.png' , alt: 'vuejs'},
            { name: 'Bootstrap', icon: 'https://img.icons8.com/color-glass/48/bootstrap.png' , alt: 'bootstrap'}, */
        ]
    },
    {
        title: 'Web and Graphic Design',
        description: 'Basic understanding and familiarity on testing request and response using API using the tool below.',
        list: [
            { name: 'Photoshop', icon: 'https://img.icons8.com/color/48/adobe-photoshop--v1.png' , alt: 'Photoshop'},
            { name: 'Figma', icon: 'https://img.icons8.com/color/48/figma--v1.png' , alt: 'Figma'},
        ]
    },
    /* {
        title: 'Cloud Computing',
        description: 'Basic understanding and familiarity of the technologies stated below.',
        list: ['Google Cloud Platform', 'Firebase']
    }, */
];

const about_me = [
    {
        title: 'About me',
        description: 'Graduated with degree in BS in Information Technology, experienced working in IT industry as Technical and Product Support. Involved in product testing and reporting, software troubleshooting and onboarding. Attended trainings to upskill, developed personal projects and website. Which I believed to give me a brighter career.'
    }
];

const certifications = [
    {
        link: 'https://drive.google.com/file/d/1TSlIYFAuw2oBWCaTRUYED9V97XPy3NOL/view?usp=drive_link',
        title: 'Basic Level of Cloud Computing',
    },
    {
        link: 'https://drive.google.com/file/d/1TTmG-Y0238WUYkeE6d1luIKC24xCIfKd/view?usp=drive_link',
        title: 'Basic Level of Software Engineering',
    },
    {
        link: 'https://drive.google.com/file/d/1qc7fK1Ckz-FgGJ59EI_QWS2V2aiMhBpk/view?usp=drive_link',
        title: 'Intermediate Level of Software Engineering',
    },
    {
        link: 'https://drive.google.com/file/d/1fCxXPUG91ukUOITQmyuslw8Gz1cQlBUe/view?usp=drive_link',
        title: 'Advanced Level of Software Engineering',
    },
    {
        link: 'https://drive.google.com/file/d/1fFTYrLPH6AeAGo0R3IWoXc_uR36cZYfI/view?usp=drive_link',
        title: 'Principles of Web Development and Introduction to HTML',
    },
    {
        link: 'https://drive.google.com/file/d/1_ya9Lve4ivxLNIFUIErMLNNxxuJ6a3Ah/view?usp=drive_link',
        title: 'Using HTML and CSS to Design a Website',
    },
    {
        link: 'https://drive.google.com/file/d/16hrcisk_S6m4kgKHBdgUGJo_CK6YEkdJ/view?usp=drive_link',
        title: 'Basic Javascript for Web Development',
    },
    {
        link: 'https://drive.google.com/file/d/1XDBF9NB5UpiXnc6Xa3PX6NHCg_s5Apr-/view?usp=drive_link',
        title: 'Developing a Static Website',
    },
    {
        link: 'https://drive.google.com/file/d/121tuBVvRhYnrbLLMjctVXfRxb7f4hvKD/view?usp=drive_link',
        title: 'Microsoft Productivity Tools',
    },
    {
        link: 'https://drive.google.com/file/d/18KiJf4HdDJAVeqUfpj2MHT2gqGHDg_rb/view?usp=drive_link',
        title: 'Navigating Google Workspace',
    },
    {
        link: 'https://drive.google.com/file/d/1DUz6UoX64f6IVr3j9XmYBK-JMDicITwq/view?usp=drive_link',
        title: 'Programming for Intermediate Users Using Python',
    }
];

const project = [
    {
        title: 'Vegan Website',
        description: 'Static landing page for a vegan website.',
        technology: [
            { lang: 'Javascript', badge: 'badge bg-success mx-1' },
            { lang: 'HTML', badge: 'badge bg-primary mx-1' },
            { lang: 'CSS', badge: 'badge bg-danger mx-1' },
        ],
        demo: 'https://rolandosala.github.io/Vegan-Food/',
        repository: 'https://github.com/rolandosala/Vegan-Food.git',
        img: 'assets/img/vegan.jpg',
    },
    {
        title: 'Digital Clock',
        description: '',
        technology: [
            { lang: 'Javascript', badge: 'badge bg-success mx-1' },
            { lang: 'HTML', badge: 'badge bg-primary mx-1' },
            { lang: 'CSS', badge: 'badge bg-danger mx-1' },
        ],
        demo: 'https://rolandosala.github.io/Clock/',
        repository: 'https://github.com/rolandosala/Clock.git',
        img: 'assets/img/clock.jpg'
    },
    /* {
        title: 'Todo List App',
        description: '',
        technology: [
            { lang: 'Javascript', badge: 'badge bg-success mx-1' },
            { lang: 'HTML', badge: 'badge bg-primary mx-1' },
            { lang: 'CSS', badge: 'badge bg-danger mx-1' },
        ],
        demo: 'https://rolandosala.github.io/todoapp/',
        repository: 'https://github.com/rolandosala/todoapp.git',
        img: 'assets/img/todolist.png'
    }, */
    
];