// let buff = Buffer.from(data, "base64");
// fs.writeFileSync("stack-abuse-logo-out.png", buff);

const data = {
  aboutMe: {
    candidate_code: "001",
    description:
      "Innovative, task-driven professional with 8+ years of experience in \nweb design and development across diverse industries. Equipped \nwith a record of success in consistently identifying and providing the technological needs of companies through ingenious innovation. \nProficient in developing databases, creating user interfaces, writing \nand testing codes, troubleshooting simple/complex issues, and \nimplementing new features based on user feedback.\n",
    education: [
      {
        education: "Bechelor of  computer application",
      },
      {
        education: "Master of science in Information and Technology",
      },
      {
        education: "PHD",
      },
    ],
    role: "Senior Softwear engineer",
    experienceYear: 4,
    experienceMonth: 3,
  },
  skills: [
    {
      skill: "react",
      Rating: 7,
    },
    {
      skill: "node",
      Rating: 7,
    },
    {
      skill: "angular",
      Rating: 8,
    },
    {
      skill: "mongoDB",
      Rating: 9,
    },
  ],
  experience: [
    {
      title: "project1",
      technologies: "react, node",
      about_project:
        "Softswitch is an application that enables to create various billing rate plans, create distributors, resellers or groups, and subscribers. Service providers also configure media gateways-related information, manage media-related gateway information, and manage various value-added services\n",
      description: [
        {
          first:
            "Gathering business requirements, and analyzing the business. Writing test cases according to functional specifications. \n",
        },
        {
          first: "Understanding the test plan. \n",
        },
        {
          first:
            "Performed functional & system testing by performing load tests to check the application's stability. \n",
        },
      ],
      role: "Senior software engineer",
    },
    {
      title: "project2",
      technologies: "monogDB, angular",
      about_project:
        "Softswitch is an application that enables to create various billing rate plans, create distributors, resellers or groups, and subscribers. Service providers also configure media gateways-related information, manage media-related gateway information, and manage various value-added services",
      description: [
        {
          first:
            "Executing test cases to validate the functionality and transactions by checking the Log files.\n",
        },
        {
          first:
            "logging defects in the defect log sheet and assigning the defects log sheet to the application team. \n",
        },
        {
          first: "Responsible for reporting the bugs to the application team. ",
        },
        {
          first:
            "Tested the VOIP components like SIPProxy, MediaProxy, and IVR extensively. \n",
        },
      ],
      role: "Jr. Software developer",
    },
  ],
  extraSkill: {
    certificate: [
      {
        certificate: "certi1",
      },
      {
        certificate: "certi2",
      },
      {
        certificate: "certi3",
      },
    ],
    award: [
      {
        award: "award1",
      },
      {
        award: "award2",
      },
    ],
    training: [
      {
        training: "training1",
      },
      {
        training: "training2",
      },
    ],
  },
};

// console.log('===========>',data)
// console.log(JSON.stringify(data))

// const check = JSON.stringify(data);

// console.log('typeof',typeof(check))

// console.log("===============>", JSON.parse(check));

// console.log(typeof data);

// ("INSTERT INTO Resume_(emp_id,emp_email,image,resume_data) VALUES ?");
// const value = [[emp_id, emp_email, image, resume_data]];

const newData =
  '{"aboutMe":{"candidate_code":"011","description":"Innovative, task-driven professional with 8+ years of experience in \\nweb design and development across diverse industries. Equipped \\nwith a record of success in consistently identifying and providing the technological needs of companies through ingenious innovation. \\nProficient in developing databases, creating user interfaces, writing \\nand testing codes, troubleshooting simple/complex issues, and \\nimplementing new features based on user feedback.\\n","education":[{"education":"Bechelor of  computer application"},{"education":"Master of science in Information and Technology"},{"education":"PHD"}],"role":"Senior Softwear engineer","experienceYear":4,"experienceMonth":3},"skills":[{"skill":"react","Rating":7},{"skill":"node","Rating":7},{"skill":"angular","Rating":8},{"skill":"mongoDB","Rating":9}],"experience":[{"title":"project1","technologies":"react, node","about_project":"Softswitch is an application that enables to create various billing rate plans, create distributors, resellers or groups, and subscribers. Service providers also configure media gateways-related information, manage media-related gateway information, and manage various value-added services\\n","description":[{"first":"Gathering business requirements, and analyzing the business. Writing test cases according to functional specifications. \\n"},{"first":"Understanding the test plan. \\n"},{"first":"Performed functional & system testing by performing load tests to check the application\'s stability. \\n"}],"role":"Senior software engineer"},{"title":"project2","technologies":"monogDB, angular","about_project":"Softswitch is an application that enables to create various billing rate plans, create distributors, resellers or groups, and subscribers. Service providers also configure media gateways-related information, manage media-related gateway information, and manage various value-added services","description":[{"first":"Executing test cases to validate the functionality and transactions by checking the Log files.\\n"},{"first":"logging defects in the defect log sheet and assigning the defects log sheet to the application team. \\n"},{"first":"Responsible for reporting the bugs to the application team. "},{"first":"Tested the VOIP components like SIPProxy, MediaProxy, and IVR extensively. \\n"}],"role":"Jr. Software developer"}],"extraSkill":{"certificate":[{"certificate":"certi1"},{"certificate":"certi2"},{"certificate":"certi3"}],"award":[{"award":"award1"},{"award":"award2"}],"training":[{"training":"training1"},{"training":"training2"}]}}';

const check1 = JSON.parse(newData);
console.log("====>", check1);
