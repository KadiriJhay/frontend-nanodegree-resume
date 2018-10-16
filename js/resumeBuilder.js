/*
This is empty on purpose! Your code to build the resume will go here.
 */

var bio = {
    name : "Jude Kadiri",
    role : "Web Developer",
    contacts : {
        mobile: "07064970956",
        email: "kadirijude53@gmail.com",
        github: "kadirijhay",
        twitter: "@kadirijhay",
        location: "Ibadan, Nigeria"
    },
    welcomeMessage: "Hey! I'm Jude and I'm a Web Developer and I've been at it for 2 years. I know a little of HTML/CSS/JavaScript/JQuery, I build cool websites that are fully resposive! Feel free to check my Resume or shoot me an Email.",
    skills: ["HTML", "CSS", "JQuery", "Solving Problems"],
    biopic: "images/jude.jpg"
};

bio.display = function() {
    var formattedName = HTMLheaderName.replace("%data%", bio.name);
    var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
    var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
    var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
    var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
    var formattedTwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
    var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
    var formattedMessage = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
    var formattedPic = HTMLbioPic.replace("%data%", bio.biopic);

    $("#header").append(formattedName);
    $("#header").append(formattedRole);
    $("#topContacts, #footerContacts").append(formattedMobile);
    $("#topContacts, #footerContacts").append(formattedEmail);
    $("#topContacts, #footerContacts").append(formattedGithub);
    $("#topContacts, #footerContacts").append(formattedTwitter);
    $("#topContacts, #footerContacts").append(formattedLocation);

    $("#header").append(formattedMessage);
    $("#header").append(formattedPic);

    $("#header").append(HTMLskillsStart);
    
    for (skill = 0; skill < bio.skills.length; skill++) {
        var formattedSkills = HTMLskills.replace("%data%", bio.skills[skill]);

        $("#skills").append(formattedSkills);
    };
};
bio.display();

var education = {
    schools: [
        {
            name: "Ladoke Akintola University of Technology",
            location: "Ogbomoso, Nigeria",
            degree: "BTech Engr",
            majors: ["Agricultural Engineering"],
            dates: "2011 - 2016",
            url: "lautech.edu.ng"
        },
        {
            name: "University of Bristol",
            location: "Bristol, UK",
            degree: "MSc",
            majors: ["Computer Science"],
            dates: "2018 - 2019",
            url: "bristol.ac.uk"
        }
    ],
    onlineCourses: [
        {
            title: "Front-End Web Developer Nanodegree",
            school: "Udacity",
            dates: "August 2018 - October 2018",
            url: "udacity.com"
        },
        {
            title: "Intro to Programming Nanodegree",
            school: "Udacity",
            dates: "August 2018 - December 2018",
            url: "udacity.com"
        },
        {
            title: "Android Development: User Basics",
            school: "Udacity",
            dates: "July 2017 - September 2017",
            url: "udacity.com"
        }
    ]
};

education.display = function() {
    for (item = 0; item < education.schools.length; item++) {
        $("#education").append(HTMLschoolStart);

        var formattedName = HTMLschoolName.replace("%data%", education.schools[item].name);
        var formattedDegree = HTMLschoolDegree.replace("%data%", education.schools[item].degree);
        var formattedNameDegree = formattedName + formattedDegree;

        var formattedDates = HTMLschoolDates.replace("%data%", education.schools[item].dates);
        var formattedLocation = HTMLschoolLocation.replace("%data%", education.schools[item].location);

        $(".education-entry:last").append(formattedNameDegree);
        $(".education-entry:last").append(formattedDates);
        $(".education-entry:last").append(formattedLocation);

        if (education.schools[item].majors.length > 0) {
            for (major = 0; major < education.schools[item].majors.length; major++) {
                var formattedMajors = HTMLschoolMajor.replace("%data%", education.schools[item].majors[major]);
                $(".education-entry:last").append(formattedMajors);
            };
        };
    }

    $("#education").append(HTMLonlineClasses);
    for (course = 0; course < education.onlineCourses.length; course++) {
        var formattedTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[course].title);
        var formattedSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[course].school);
        var formattedTitleSchool = formattedTitle + formattedSchool;

        var formattedDates = HTMLonlineDates.replace("%data%", education.onlineCourses[course].dates);
        var formattedUrl = HTMLonlineURL.replace("%data%", education.onlineCourses[course].url);

        $("#education").append(HTMLschoolStart);
        $(".education-entry:last").append(formattedTitleSchool);
        $(".education-entry:last").append(formattedDates);
        $(".education-entry:last").append(formattedUrl);
    }
};
education.display();

var work = {
    jobs: [
        {
            employer: "Redlynch Agricultural Engineering",
            title: "Senior Engineer",
            location: "UK", 
            dates: "2017 - present",
            description: "Redlynch Agricuntural Engineering is a firm located in the United Kingdom. It deals with Farm Machineries ranging from tractors, sprayer, harvesters, etc. My job as the senior Engineer is to oversee the overall state and condition of the Machines and to assign duties to Junior Engineers in making sure each Machines are properly accounted for."
        },
        {
            employer: "Udacity",
            title: "Web Developer",
            location: "Califonia", 
            dates: "2018 - present",
            description: "Udacity is a for-profit educational organization founded by Sebastian Thrun, David Stavens, and Mike Sokolsky offering massive open online courses (MOOCs). According to Thrun, the origin of the name Udacity comes from the company's desire to be \"audacious for you, the student\". My role as a Web Devoloper is to make updates to and maintain the Udacity's Website."
        }
    ]
};

work.display = function() {
    for (job = 0; job < work.jobs.length; job++) {
        $("#workExperience").append(HTMLworkStart);

        var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
        var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
        var formattedEmployerTitle = formattedEmployer + formattedTitle;

        var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
        var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
        var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);

        $(".work-entry:last").append(formattedEmployerTitle);
        $(".work-entry:last").append(formattedLocation);
        $(".work-entry:last").append(formattedDates);
        $(".work-entry:last").append(formattedDescription);
    }
};
work.display();

var projects =  {
    projects: [
        {
            title: "Pixel Lab", 
            dates: "June - July 2018",
            description: "Pixel lab is a project I did after taking a course on Udacity. It was built using JQuery and JavaScript which loops through table cells tow and column creating a grid of cell spaces. It is a grid of blocks that allows you build what you want just like a computer game. To play, first create your building environment by selecting the number of rows and columns, then pick a colour of your choice and begin building by taping the cell spaces.",
            images: ["images/pixel.png", "images/pixel.png"]
        },
        {
            title: "JhayTech.com", 
            dates: "August 2018",
            description: "JhayTech.com is a website I built after completing my Front-End Web Developer course on Udacity. On the first day of the project, I spent about 14 hours building the website with HTML and CSS only which I later called version 1 after I built another version using Bootstrap CSS, JavaScript and JQuery. I did a research on Bootstrap frame which I used in coming up with something really beautiful and it made my work much easier as I need not write much codes.",
            images: ["images/jhaytech1.png", "images/jhaytech2.png"]
        }
    ]
};

function displayProjects() {
    for (project = 0; project < projects.projects.length; project++) {
        $("#projects").append(HTMLprojectStart);

        var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
        var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
        var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);

        $(".project-entry:last").append(formattedTitle);
        $(".project-entry:last").append(formattedDates);
        $(".project-entry:last").append(formattedDescription);

        if(projects.projects[project].images.length > 0) {
            for (image = 0; image < projects.projects[project].images.length; image++) {
                var formattedImage = HTMLprojectImage.replace("%data%", projects.projects[project].images[image]);
                $(".project-entry:last").append(formattedImage);
            };
        };
    }
};
displayProjects();

$("#mapDiv").append(googleMap);