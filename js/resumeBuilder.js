

var bio ={
    "name" : "Richard Dean",
    "role": "Web Developer",
    "contacts":{
        "mobile" :"970-388-5573",
        "email" : "redean6@gmail.com",
        "github":"redean6",
        "location" : "Northern Colorado",

},
    "welcome message":"Welcome to my page",
    "skills" : [
         "Teacher", "Programmer", "Web Designer"
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
    }
    ]
}

var education = {
    "schools": [
        {
            "name": "Colorado State University",
            "city": "Fort Collins, Colorado",
            "degree":"BS",
            "majors": ["Mathematics", "Education"],
            "dates": "2006-2010",
            "url": "http://www.colostate.edu/"
        },
        {
            "name":"Udacity",
            "city":"Online Course",
            "degree": "Nanodegree",
            "major":"Front-End Web Developer",
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
            "description": "Using HTML and CSS I created a pretty looking trading card for a howler monkey."
        },
        {
            "title" : "Portfolio",
            "dates" : "Summer 2016",
            "description": "Using HTML and flexbox, I created a pretty Portfolio website."
        }
    ]
}

var formattedName=HTMLheaderName.replace("%data%",bio.name);
$("#header").append(formattedName);

var formattedImage=HTMLbioPic.replace("%data%",bio.bioPic);
$("#header").append(formattedImage);

function displaycontacts(){
for(info in bio.contacts){
    var formattedContact = HTMLcontactGeneric.replace("%contact%", info).replace("%data%",bio.contacts[info]);
    $("#topContacts").append(formattedContact);
}
}

displaycontacts();




if (bio.skills.length > 0){
    $("#header").append(HTMLskillsStart);

    var formattedSkill= HTMLskills.replace("%data%", bio.skills[0]);
    $("#skills").append(formattedSkill);

    formattedSkill= HTMLskills.replace("%data%", bio.skills[1]);
    $("#skills").append(formattedSkill);

    formattedSkill= HTMLskills.replace("%data%", bio.skills[2]);
    $("#skills").append(formattedSkill);
}



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
//to get images in here see encapsulating functions.
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