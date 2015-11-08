var bio = {
	"name" : "Austin Jones",
	"role" : "School Administrator",
	"contacts" : {
		"email":"ajonestx@gmail.com",
		"mobile":"575-404-1158",
		"twitter": "@austinjones30",
		"location": "Ruidoso, NM"
		},

	"bioPic" : "images/jones.png",
	"skills" : ["HTML", "CSS", "Javascript", "jQuery"],
	"welcomeMessage" : "Thank you for viewing my site."
}

var work = {
	"jobs": [
		{
			"employer": "Sierra Blanca Christian Academy",
			"title": "Administrator",
			"location": "Ruidoso, NM",
			"dates": "2013-2015",
			"description": "3rd-9th grade Administrator"
		},
		{
			"employer": "Sierra Blanca Christian Academy",
			"title": "Bookkeeper",
			"location": "Ruidoso, NM",
			"dates": "2012-2015",
			"description": "In charge of billing and keeping the books for the school"
		},
		{
			"employer": "Sierra Blanca Christian Academy",
			"title": "Technology Cordinator",
			"location": "Ruidoso, NM",
			"dates": "2008-2015",
			"description": "Keep computer lab running"
		}
		]
}
 
var education = {
 	"schools": [ 
 		{
 			"name": "West Texas A&M",
 			"location": "Canyon, TX",
 			"degree": "BS",
 			"majors": ["Engineering Technology"],
 			"dates": "2000 - 2005"
 		},
		{
			"name": "West Texas A&M",
			"location":"Canyon, TX",
			"degree": "Masters",
			"majors": ["Instructional Design & Technology"],
			"dates": "2012-2014"
		}
	],
	"online": [
		{
			"title":"Front-End Web Developer Nanodegree",
			"school":"Udacity",
			"dates":2015,
			"URL":"https://www.udacity.com"
		}
	]
} 	
 
var projects = {
 	"projects": [
 			{
 			"title": "Udacity: Project 1, Portfolio Site",
 			"dates": 2015,
 			"description": "A responsive portfolio site that uses HTML and CSS.",
 			"images": ["images/portfolio.png"]
 			}
 		]
		 		
 };

bio.display = function() {
 	var formattedName = HTMLheaderName.replace("%data%",bio.name);
	var formattedRole = HTMLheaderRole.replace("%data%",bio.role);
	var formattedBioPic = HTMLbioPic.replace("%data%",bio.bioPic);
	var formattedWelcomeMsg = HTMLwelcomeMsg.replace("%data%",bio.welcomeMessage);
	var formattedMoble = HTMLmobile.replace("%data%",bio.contacts.mobile);
	var formattedEmail = HTMLemail.replace("%data%",bio.contacts.email);
	var formattedTwitter = HTMLtwitter.replace("%data%",bio.contacts.twitter);
	var formattedLocation = HTMLlocation.replace("%data%",bio.contacts.location);

	$("#header").prepend(formattedRole);
	$("#header").prepend(formattedName);
	$("#header").append(formattedBioPic);
	$("#header").append(formattedWelcomeMsg);

	$("#topContacts").append(formattedMoble);
	$("#topContacts").append(formattedEmail);
	$("#topContacts").append(formattedTwitter);
	$("#topContacts").append(formattedLocation);

	if (bio.skills.length > 0) {
		$("#header").append(HTMLskillsStart);
		for (skill in bio.skills) {
			var formattedSkill = HTMLskills.replace("%data%",bio.skills[skill]);
			$("#skills").append(formattedSkill);
		}
	};

	$("#footerContacts").append(formattedEmail);
	$("#footerContacts").append(formattedMoble);
	$("#footerContacts").append(formattedTwitter);

}

work.display = function () {
	for (job in work.jobs) {
	$("#workExperience").append(HTMLworkStart);

	var formattedEmployer = HTMLworkEmployer.replace("%data%",work.jobs[job].employer);
	var formattedTitle = HTMLworkTitle.replace("%data%",work.jobs[job].title);
	var formattedDates = HTMLworkDates.replace("%data%",work.jobs[job].dates);
	var formattedDescription = HTMLworkDescription.replace("%data%",work.jobs[job].description);
	var formattedEmployerTitle = formattedEmployer + formattedTitle;

	$(".work-entry:last").append(formattedEmployerTitle);
	$(".work-entry:last").append(formattedDates);
	$(".work-entry:last").append(formattedDescription);

};
}

projects.display = function () {
			for (project in projects.projects) {
				$("#projects").append(HTMLprojectStart);
				
				var formattedProjectTitle = HTMLprojectTitle.replace("%data%",projects.projects[project].title);
				var formattedProjectDates = HTMLprojectDates.replace("%data%",projects.projects[project].dates);
				var formattedProjectDescription = HTMLprojectDescription.replace("%data%",projects.projects[project].description);

				$(".project-entry:last").append(formattedProjectTitle);
				$(".project-entry:last").append(formattedProjectDates);
				$(".project-entry:last").append(formattedProjectDescription);

				if (projects.projects[project].images.length > 0) {
					for (image in projects.projects[project].images) {
						var formattedProjectImage = HTMLprojectImage.replace("%data%",projects.projects[project].images);
						$(".project-entry:last").append(formattedProjectImage);
					}	
				}
				
		}
	}
education.display = function () {
	for (school in education.schools) {
		$("#education").append(HTMLschoolStart);

		var formattedSchoolName = HTMLschoolName.replace("%data%",education.schools[school].name);
		$(".education-entry:last").append(formattedSchoolName);

		var formattedSchoolDegree = HTMLschoolDegree.replace("%data%",education.schools[school].degree);
		$(".education-entry:last").append(formattedSchoolDegree);

		var formattedSchoolDates = HTMLschoolDates.replace("%data%",education.schools[school].dates);
		$(".education-entry:last").append(formattedSchoolDates);

		var formattedSchoolLocation = HTMLschoolLocation.replace("%data%",education.schools[school].location);
		$(".education-entry:last").append(formattedSchoolLocation);

		for (major in education.schools[school].majors) {
			var formattedSchoolMajor = HTMLschoolMajor.replace("%data%",education.schools[school].majors[major]);
			$(".education-entry:last").append(formattedSchoolMajor);
		}
	}
	
	$("#education").append(HTMLschoolStart);
	$(".education-entry:last").append(HTMLonlineClasses);

	for (onlineClass in education.online) {	

		var formattedOnlineTitle = HTMLonlineTitle.replace("%data%",education.online[onlineClass].title);
		$(".education-entry:last").append(formattedOnlineTitle);

		var formattedOnlineSchool = HTMLonlineSchool.replace("%data%",education.online[onlineClass].school);
		$(".education-entry:last").append(formattedOnlineSchool);

		var formattedOnlineDate = HTMLonlineDates.replace("%data%",education.online[onlineClass].dates);
		$(".education-entry:last").append(formattedOnlineDate);

		var formattedOnlineURL = HTMLonlineURL.replace("%data%",education.online[onlineClass].URL);
		$(".education-entry:last").append(formattedOnlineURL);
		
	}

}

bio.display();
work.display();
projects.display();
education.display();

$(document).click(function(loc) {
	var x = loc.pageX;
	var y = loc.pageY;

	logClicks(x,y);
});

//Map
$("#mapDiv").append(googleMap);
