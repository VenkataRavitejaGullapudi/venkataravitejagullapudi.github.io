const projectsData = [
    {
        projectName: 'Namer Lab',
        projectDescription:
            'We find so much difficult to name our projects or ventures right? Fear not! Check out this cool name suggestion application which will help us to find the best name for our next project, venture, or startup. Keep building!',
        imageUrl: 'https://user-images.githubusercontent.com/70102577/122653188-b5acd300-d160-11eb-91b0-b813a09e727a.png',
        projectUrl: 'https://namer-lab.netlify.app/',
        year: '2021',
        month: '02'
    },
    {
        projectName: 'Hyper Type',
        projectDescription:
            'Having a good typing speed will always help you as a developer! So, here I present you the typing speed test application, where you can check your typing speed (in wpm) and share the results with your friends too.',
        imageUrl: 'https://user-images.githubusercontent.com/70102577/122653186-b3e30f80-d160-11eb-9298-9ce3bae44925.png',
        projectUrl: 'https://hyper-type.netlify.app/',
        year: '2021',
        month: '03'
    },
    {
        projectName: 'Flexbox Cheatsheet',
        projectDescription:
            'Must learn concept by every web developer developing frontend is CSS Flexbox. So here is a CSS Flexbox cheatsheet, built using CSS Flexbox. Learnt the concepts of flexbox by building a cheatsheet which is built using flexbox.',
        imageUrl: 'https://user-images.githubusercontent.com/70102577/122653191-b6456980-d160-11eb-9a8e-bf378cd3a90e.png',
        projectUrl: 'https://venkataravitejagullapudi.github.io/CssFlex/',
        year: '2021',
        month: '04'
    },
    {
        projectName: 'Portfolio Website',
        projectDescription:
            'As a developer/designer, you should definitely have your own portfolio website. There are endless benefits. But, a lot of people feel that it would be tough to make one. So here I bring you a tutorial to make your own website.',
        imageUrl: 'https://user-images.githubusercontent.com/70102577/122653795-c5c6b180-d164-11eb-8e48-b4b7f53c3683.png',
        projectUrl: 'https://venkataravitejagullapudi.github.io',
        year: '2021',
        month: '06'
    }
];
projectsData.sort((a, b) => {
    let d1 = new Date(a.year, a.month) 
    let d2 = new Date(b.year, b.month)
    console.log(d1>d2)
    if (d1 < d2) {
        console.log(new Date(a.year, a.month) == new Date(b.year, b.month))
        return 1;
    }
    else if (d1 > d2) {
        return -1;
    }
    return 0;
});

export default projectsData;