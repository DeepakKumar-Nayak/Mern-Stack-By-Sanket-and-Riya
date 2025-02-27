const company = {
    name: "TechVerse Solutions",
    location: "Bhubaneswar, Odisha",
    departments: {
        engineering: {
            head: "Rajesh Kumar",
            teams: {
                frontend: {
                    lead: "Ananya Mishra",
                    members: [
                        { name: "Deepak", role: "React Developer" },
                        { name: "Sourav", role: "Vue Developer" }
                    ],
                    projects: {
                        projectA: {
                            name: "E-Commerce Platform",
                            status: "In Progress",
                            techStack: ["React", "Node.js", "MongoDB"]
                        }
                    }
                },
                backend: {
                    lead: "Vikash Singh",
                    members: [
                        { name: "Priya", role: "Node.js Developer" },
                        { name: "Amit", role: "Django Developer" }
                    ],
                    projects: {
                        projectB: {
                            name: "Inventory Management System",
                            status: "Completed",
                            techStack: ["Django", "PostgreSQL", "Redis"]
                        }
                    }
                }
            }
        },
        hr: {
            head: "Megha Verma",
            policies: {
                leavePolicy: "30 Days Annual Leave",
                workFromHome: "Allowed Twice a Week"
            }
        }
    }
};

// Accessing Deepak's role
//console.log(company.departments.engineering.teams.frontend.members[0].role); // React Developer

// Accessing the frontend project name
//console.log(company.departments.engineering.teams.frontend.projects.projectA.name); // E-Commerce Platform

// accessing team 
const {departments :{engineering:{teams:{frontend:{projects:{projectA:{techStack}}}}}}} = company
console.log(techStack)