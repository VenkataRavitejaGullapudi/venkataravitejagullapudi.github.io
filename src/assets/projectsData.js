const projectsData = [
    {
        projectName: 'Namer Lab',
        projectDescription:
            'We find so much difficult to name our projects or ventures right? Fear not! Check out this cool name suggestion application which will help us to find the best name for our next project, venture, or startup. Keep building!',
        imageUrl: 'https://user-images.githubusercontent.com/70102577/122653188-b5acd300-d160-11eb-91b0-b813a09e727a.png',
        projectUrl: 'https://namer-lab.netlify.app/',
        technologyStack:['HTML','CSS','JS','ReactJs'],
        year: '2021',
        month: '02'
    },
    {
        projectName: 'Hyper Type',
        projectDescription:
            'Having a good typing speed will always help you as a developer! So, here I present you the typing speed test application, where you can check your typing speed (in wpm) and share the results with your friends too.',
        imageUrl: 'https://user-images.githubusercontent.com/70102577/122653186-b3e30f80-d160-11eb-9298-9ce3bae44925.png',
        projectUrl: 'https://hyper-type.netlify.app/',
        technologyStack:['HTML','CSS','JS','ReactJs'],
        year: '2021',
        month: '03'
    },
    {
        projectName: 'Flexbox Cheatsheet',
        projectDescription:
            'Must learn concept by every web developer developing frontend is CSS Flexbox. So here is a CSS Flexbox cheatsheet, built using CSS Flexbox. Learnt the concepts of flexbox by building a cheatsheet which is built using flexbox.',
        imageUrl: 'https://user-images.githubusercontent.com/70102577/122653191-b6456980-d160-11eb-9a8e-bf378cd3a90e.png',
        projectUrl: 'https://venkataravitejagullapudi.github.io/CssFlex/',
        technologyStack:['HTML','CSS','JS','ReactJs'],
        year: '2021',
        month: '04'
    },
    {
        projectName: 'Portfolio Website',
        projectDescription:
            'As a developer/designer, you should definitely have your own portfolio website. There are endless benefits. But, a lot of people feel that it would be tough to make one. So here I bring you a tutorial to make your own website.',
        imageUrl: 'https://user-images.githubusercontent.com/70102577/122653795-c5c6b180-d164-11eb-8e48-b4b7f53c3683.png',
        projectUrl: 'https://venkataravitejagullapudi.github.io',
        technologyStack:['HTML','CSS','JS','ReactJs'],
        year: '2021',
        month: '06'
    },
    {
        projectName: 'MetaSave',
        projectDescription:`
            In our daily life, we are working with multiple applications and creating different passwords for each one. But did you ever forgot your passwords?
            And ever thought of saving passwords? We will think right?.. Now, its solved. I have create an desktop application for storing all your passwords, urls, usernames
            at one place. Here, why it is a desktop application is because passwords are sensitive information and I not wanted them to propagate over the network.
            So, In this application,I am storing those data in your local system user folder as a JSON file and presenting you a nice UI to interact with the passwords.
            <br/>
            By using this application we can directly copy paste the data in the fields, it can be urls, usernames or passwords.
            Even while you are sharing your screen, you can copy paste the passwords from this application without disclosing as the fields are masked.
            Its sounds good right. Download the application and if you find useful & share with your friends.
            <br/>
            For Application Download link,
            <a class="link" href="https://metasave.ravitejagullapu.repl.co/">Click Here</a>`,
        imageUrl: 'https://user-images.githubusercontent.com/70102577/122687468-46a0ae80-d234-11eb-9999-11133f2e0088.png',
        projectUrl: 'https://metasave.ravitejagullapu.repl.co/',
        technologyStack:['HTML','CSS','JS','Python','Django'],
        year: '2021',
        month: '05'
    },
    {
        projectName: 'Human Resource Management',
        projectDescription:
            `Zexal Human Resource Management application is a system to help the managers to see all the employees and change their positions more easily. Currently this system is only for the administrator to access to view each employee (including managers) with their name, age, gender, employee ID, current position (title), salary and related department. The administrator can add, edit and remove any employee on the list. An employee can also be set as ‘Retired’ or ‘Fired’ without being deleted.
                <br/>
            In the admin page, There will be Users and Groups in the authentication. On clicking on the users you can see all the users of the system. Currently only one admin user. On clicking on Groups you can add a group of users and set different permissions to the different users. i.e., Along with admins we can add other users with some functionalities.
            <br/>
            Coming to the main app section, On Clicking on employees, you can see all the details of the employees and you can query or search based on max fields and other can be seen in the filter i.e., you can filter based on the different column values. On clicking the record you can update/ delete the record. We can also delete multiple employees or mark status of the multiple employees at a time by selecting them and choosing an action at the top of the table and click on go. Add pagination with 10 employees per page is currently set. We can filter according the columns by clicking on the filters that are available on the right side. On clicking on the Departments, you can see the available departments in the company and total employees in the company. The total employees will be initially zero. After inserting or adding an employee to the particular department in the employee table, the total employee count will be automatically in increased and also deleted if you remove an employee. On clicking on the Roles, You can see the available roles in the company. Department and Roles are linked to employees table. On clicking on the Department_managers you can see the manager of the each department. On clicking on the Payroll you can see the payroll details and internally who had added the payroll is also loaded based on the current admin user. All the operations like editing, deleting, updating records can be done on clicking on the record in any table. You can go to the admin page as follows. When you run the project you will initially goes to home page of the system. As project is not about the other users.. Go to the admin page by clicking on the "Enter admin page button " on the header. Then it asks for the login credentials to enter into the project. Enter the username as "Raviteja" and password as "ravi@skillsme". (*Password is given just to look at the website.). Next you will be navigated to the Admin Home Page<br/> <a class="link" href="https://github.com/VenkataRavitejaGullapudi/zexa-hrm">Git Repository</a>`,
        imageUrl: 'https://user-images.githubusercontent.com/70102577/122685653-6c28ba80-d22a-11eb-870c-eab2f8293ade.png',
        projectUrl: 'https://zexal-hrm.herokuapp.com/admin/',
        technologyStack:['HTML','CSS','JS','Python','Django'],
        year: '2020',
        month: '11'
    },
    {
        projectName: 'Stock Market Summary',
        projectDescription:
            `This respresents the stock market data from the database on to the UI developed using Vanilla JS.
            The data is fetched from the database only after the successful token authentication. The token is generated once the user is logged in with their credentials.
            And it will expires after some-time. This is a small UseCase to my knowledge in Django Rest FrameWork and Token Authentication. 
            This is developed as a task for Fullstack Web development contest conducted by Flipr.
            If you want to check it out click on the below Link, register in the website and then login with those credentials.`,
        imageUrl: 'https://user-images.githubusercontent.com/70102577/123308270-13fefa80-d541-11eb-826f-4b611b37058d.png',
        projectUrl: 'https://fliprfsd.herokuapp.com/',
        technologyStack:['HTML','CSS','JS','CanvaJS','Python','Django', 'Django-Rest-Framework'],
        year: '2020',
        month: '08'
    },
    {
        projectName: 'Information Technology Department Portal, SRKREC',
        projectDescription:
            `It is a website through which our IT department organises, records, and notifies about activities, online events, workshops and many more things. 
            It is entirely dynamic portal developed to add posts, notifications, activities, points, leaderboard, profiles, to conduct minimal quizzes and more. 
            This was completely created end to end using Python-Django framework.`,
        imageUrl: 'https://user-images.githubusercontent.com/70102577/123312540-1b74d280-d546-11eb-95af-a477527be432.png',
        projectUrl: 'http://srkrecitcsi.in/',
        technologyStack:['HTML','CSS','JS','Python','Django'],
        year: '2020',
        month: '05'
    },
    {
        projectName: 'Student Analysis System',
        projectDescription:
            `Student Analysis System is a software developed for analyzing the students in schools, colleges and institutes. This system will also help in evaluating performance criteria of a student. Faculty will post the report of student behavior, marks and his performance (based on some criteria) in class weekly or monthly. The purposes are
            <br/># To maintain student progress, attendance, performance of student.
            <br/># To expose the student performance and behavior or interaction of the student to the parents and even to him/herself for improving.
            `,
        imageUrl: 'https://user-images.githubusercontent.com/70102577/123323735-909ad480-d553-11eb-979c-b0fc7cb6e1a1.png',
        projectUrl: 'https://studentanalysissystem.herokuapp.com',
        technologyStack:['HTML','CSS','JS','Python','Django'],
        year: '2018',
        month: '08'
    },
    
];
projectsData.sort((a, b) => {
    let d1 = new Date(a.year, a.month) 
    let d2 = new Date(b.year, b.month)
    console.log(d1>d2)
    if (d1 < d2) {
        console.log(new Date(a.year, a.month) === new Date(b.year, b.month))
        return 1;
    }
    else if (d1 > d2) {
        return -1;
    }
    return 0;
});

export default projectsData;