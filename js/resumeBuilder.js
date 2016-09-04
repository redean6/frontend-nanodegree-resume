

var bio ={
    "name" : "Richard Dean",
    "role": "Web Developer/ Mathematician",
    "contacts":{
        "mobile" :"970-388-5573",
        "email" : "redean6@gmail.com",
        "github":"redean6",
        "location" : "Loveland, Colorado",

},
    "welcomemsg":"Welcome to my page, it is a pleasure to meet you.",
    "skills" : [
         "Mathematics Teacher", "Front-End Developer", "Programmer"
        ],
    "bioPic":"images/me.jpg"

}

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
}

var education = {
    "schools": [
        {
            "name": "Colorado State University",
            "location": "Fort Collins, Colorado",
            "degree":"BS",
            "major": "Mathematics",
            "dates": "2006-2010",
            "url": "http://www.colostate.edu/"
        }
    ]
}

var online = {
    "onlineclasses": [
        {
            "school":"Udacity",
            "title":"Front-End Web Developer",
            "dates": 2016,
            "url": "http://www.udacity.com"
        }
    ]
}

var projects = {
    "projects": [
        {
            "title": "Animal Trading Card",
            "dates": "Summer 2016",
            "description": "Using HTML and CSS I created a pretty looking trading card for a howler monkey.",
            "image":"images/howlermonkey.jpg"
        },
        {
            "title" : "Portfolio",
            "dates" : "Summer 2016",
            "description": "Using HTML and flexbox, I created a pretty Portfolio website.",
            "image": "images/portfolio.jpg"
        }
    ]
}

var formattedName=HTMLheaderName.replace("%data%",bio.name);
$("#header").append(formattedName);

var formattedRole =HTMLheaderRole.replace("%data%",bio.role);
$("#header").append(formattedRole);

function displaycontacts(){
for(info in bio.contacts){
    var formattedContact = HTMLcontactGeneric.replace("%contact%", info).replace("%data%",bio.contacts[info]);
    $("#header").append(formattedContact);
    $("#footerContacts").append(formattedContact);
}
}

displaycontacts();

var formattedImage=HTMLbioPic.replace("%data%",bio.bioPic);
$("#header").append(formattedImage);

var formattedMessage=HTMLwelcomeMsg.replace("%data%",bio.welcomemsg);
$("#header").append(formattedMessage);

if (bio.skills.length > 0){
    $("#header").append(HTMLskillsStart);

    var formattedSkill= HTMLskills.replace("%data%", bio.skills[0]);
    $("#skills").append(formattedSkill);

    formattedSkill= HTMLskills.replace("%data%", bio.skills[1]);
    $("#skills").append(formattedSkill);

    formattedSkill= HTMLskills.replace("%data%", bio.skills[2]);
    $("#skills").append(formattedSkill);
}

education.display= function(){
    for (school in education.schools){
        $("#education").append(HTMLschoolStart);

        var formattedName = HTMLschoolName.replace("%data%", education.schools[school].name);
        var formattedLocation = HTMLschoolLocation.replace("%data%", education.schools[school].city);
        var formattedDegree = HTMLschoolDegree.replace("%data%", education.schools[school].degree);
        var formattedMajor = HTMLschoolMajor.replace("%data%", education.schools[school].major);
        var formattedDates = HTMLschoolDates.replace("%data%", education.schools[school].dates);
        $(".education-entry:last").append(formattedName);
        $(".education-entry:last").append(formattedDegree);
        $(".education-entry:last").append(formattedDates);
        $(".education-entry:last").append(formattedLocation);
        $(".education-entry:last").append(formattedMajor);

    }
}

education.display();

$("#education").append(HTMLonlineClasses);

online.display= function(){
    for (onlineclass in online.onlineclasses){
        $("#education").append(HTMLschoolStart);
        var formattedSchool = HTMLonlineSchool.replace("%data%", online.onlineclasses[onlineclass].school);
        var formattedTitle = HTMLonlineTitle.replace("%data%", online.onlineclasses[onlineclass].title);
        var formattedDates = HTMLonlineDates.replace("%data%", online.onlineclasses[onlineclass].dates);
        var formattedURL = HTMLonlineURL.replace("%data%", online.onlineclasses[onlineclass].url);
        $(".education-entry:last").append(formattedTitle);
        $(".education-entry:last").append(formattedSchool);
        $(".education-entry:last").append(formattedDates);
        $(".education-entry:last").append(formattedURL);

    }
}


online.display();

function displaywork(){
for(job in work.jobs){
    $("#workExperience").append(HTMLworkStart);

    var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
    var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
    var formattedEmployerTitle = formattedEmployer + formattedTitle;
    $(".work-entry:last").append(formattedEmployerTitle);

    var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
    $(".work-entry:last").append(formattedDates);
    var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
    $(".work-entry:last").append(formattedLocation);
    var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
    $(".work-entry:last").append(formattedDescription);
}
}

displaywork();

projects.display= function() {
    for (project in projects.projects){
    $("#projects").append(HTMLprojectStart);
    var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
    $(".project-entry:last").append(formattedTitle);
    var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
    $(".project-entry:last").append(formattedDates);
    var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
    $(".project-entry:last").append(formattedDescription);
    var formattedPicture = HTMLprojectImage.replace("%data%", projects.projects[project].image);
    $(".project-entry:last").append(formattedPicture);
    }
}

projects.display();


$(document).click(function(loc)  {
    var x = loc.pageX;
    var y = loc.pageY;

    logClicks(x,y);
});


function inName(name) {
    name = name.trim().split(" ");
    console.log(name);
    name[1] = name[1].toUpperCase();
    name[0] = name[0].slice(0,1).toUpperCase() + name[0].slice(1).toLowerCase();

    return name[0]+" "+name[1];
}

$('#main').append(internationalizeButton);

$("mapDiv").append(googleMap);