

var bio ={
    "name" : "Richard Dean",
    "role": "Web Developer/ Mathematician",
    "contacts":{
        "mobile" :"970-388-5573",
        "email" : "redean6@gmail.com",
        "github":"redean6",
        "location" : "Loveland, Colorado",

    },
    "welcomeMessage":"Welcome to my page, it is a pleasure to meet you.",
    "skills" : [
         "Mathematics Teacher", "Front-End Developer", "Programmer"
        ],
    "biopic":"images/me.jpg"

};

var work = {
    "jobs": [
    {
        "employer": "Resurrection Christian School",
        "title": "Math Teacher",
        "dates": "August 2011-Present",
        "location": "Loveland, Colorado",
        "description": "Teaches geometry, pre-calculus, and statistics. Tech Commitee Memember."
    },
    {
        "employer": "Antigua Special Care Moving",
        "title": "Mover",
        "dates": "December 2010-May 2011",
        "location": "Abilene, Texas",
        "description": "Packed and moved anything from furniture to pianos."
    }
    ]
};

var education = {
    "schools": [
        {
            "name": "Colorado State University",
            "location": "Fort Collins, Colorado",
            "degree":"BS",
            "majors": ['Mathematics'],
            "dates": "2006-2010",
            "url": "http://www.colostate.edu/"
        }
    ],

    "onlineCourses": [
        {
            "school": "Udacity",
            "title": "Front-End Web Developer",
            "dates": "2016",
            "url": "http://www.udacity.com"
        }
    ]
};

var projects = {
    "projects": [
        {
            "title": "Animal Trading Card",
            "dates": "Summer 2016",
            "description": "Using HTML and CSS I created a pretty looking trading card for a howler monkey.",
            "images":["images/howlermonkey.jpg"]
        },
        {
            "title" : "Portfolio",
            "dates" : "Summer 2016",
            "description": "Using HTML and flexbox, I created a pretty Portfolio website.",
            "images": ["images/portfolio.jpg"]
        }
    ]
};
bio.display = function(){
    var formattedName=HTMLheaderName.replace("%data%",bio.name);
    $("#header").append(formattedName);
    var formattedRole =HTMLheaderRole.replace("%data%",bio.role);
    $("#header").append(formattedRole);
    var formattedMobile=HTMLmobile.replace("%data%",bio.contacts.mobile);
    var formattedEmail=HTMLemail.replace("%data%",bio.contacts.email);
    var formattedGitHub=HTMLgithub.replace("%data%",bio.contacts.github);
    var formattedLocation=HTMLlocation.replace("%data%",bio.contacts.location);
    $("#topContacts").append(formattedMobile, formattedEmail, formattedGitHub, formattedLocation);
    $("#footerContacts").append(formattedMobile,formattedEmail, formattedGitHub, formattedLocation);
    var formattedImage=HTMLbioPic.replace("%data%",bio.biopic);
    $("#header").append(formattedImage);
    var formattedMessage=HTMLwelcomeMsg.replace("%data%",bio.welcomeMessage);
    $("#header").append(formattedMessage);
    if (bio.skills.length > 0){
        $("#header").append(HTMLskillsStart);
        bio.skills.forEach(function(skill) {
        var formattedSkill = HTMLskills.replace("%data%",skill);
        $("#skills").append(formattedSkill);
    });
    }
};



education.display = function(){

    education.schools.forEach(function(school, index){
        if (education.schools.length > 0) {
            $("#education").append(HTMLschoolStart);
            var formattedName = HTMLschoolName.replace("#", school.url).replace("%data%", school.name);
            var formattedLocation = HTMLschoolLocation.replace("%data%", school.location);
            var formattedDegree = HTMLschoolDegree.replace("%data%", school.degree);
            var formattedMajor = HTMLschoolMajor.replace("%data%", school.majors);
            var formattedDates = HTMLschoolDates.replace("%data%", school.dates);
            $(".education-entry:last").append(formattedName);
            $(".education-entry:last").append(formattedDegree);
            $(".education-entry:last").append(formattedDates);
            $(".education-entry:last").append(formattedLocation);
            $(".education-entry:last").append(formattedMajor);
        }
    });

    education.onlineCourses.forEach(function(onlineClass, index){
        if (education.onlineCourses.length > 0) {
            $("#education").append(HTMLonlineClasses);
            $("#education").append(HTMLschoolStart);
            var formattedTitle = HTMLonlineTitle.replace("#", onlineClass.url).replace("%data%", onlineClass.title);
            var formattedSchool = HTMLonlineSchool.replace("%data%", onlineClass.school);
            var formattedDates = HTMLonlineDates.replace("%data%", onlineClass.dates);
            var formattedURL = HTMLonlineURL.replace("#", onlineClass.url).replace("%data%", onlineClass.url);
            $(".education-entry:last").append(formattedTitle);
            $(".education-entry:last").append(formattedSchool);
            $(".education-entry:last").append(formattedDates);
            $(".education-entry:last").append(formattedURL);
        }
    });
};


work.display= function(){
    work.jobs.forEach(function(job, index) {
        if (work.jobs.length > 0) {
        $("#workExperience").append(HTMLworkStart);

        var formattedEmployer = HTMLworkEmployer.replace("%data%", job.employer);
        var formattedTitle = HTMLworkTitle.replace("%data%", job.title);
        var formattedEmployerTitle = formattedEmployer + formattedTitle;
        $(".work-entry:last").append(formattedEmployerTitle);

        var formattedDates = HTMLworkDates.replace("%data%", job.dates);
        $(".work-entry:last").append(formattedDates);
        var formattedLocation = HTMLworkLocation.replace("%data%", job.location);
        $(".work-entry:last").append(formattedLocation);
        var formattedDescription = HTMLworkDescription.replace("%data%", job.description);
        $(".work-entry:last").append(formattedDescription);
        }
    });
};


projects.display= function() {
    projects.projects.forEach(function(project,index){
        if (projects.projects.length > 0){
            $("#projects").append(HTMLprojectStart);
            var formattedTitle = HTMLprojectTitle.replace("%data%", project.title);
            $(".project-entry:last").append(formattedTitle);
            var formattedDates = HTMLprojectDates.replace("%data%", project.dates);
            $(".project-entry:last").append(formattedDates);
            var formattedDescription = HTMLprojectDescription.replace("%data%", project.description);
            $(".project-entry:last").append(formattedDescription);
            if (project.images.length > 0){
                project.images.forEach(function(image) {
                var formattedPicture = HTMLprojectImage.replace("%data%",image);
                $(".project-entry:last").append(formattedPicture);
                });
        }
    }
});

};
bio.display();
education.display();
work.display();
projects.display();


$(document).click(function(loc)  {
    var x = loc.pageX;
    var y = loc.pageY;

    logClicks(x,y);
});

$("#mapDiv").append(googleMap);