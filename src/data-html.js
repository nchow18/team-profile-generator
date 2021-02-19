
const generateManager = managerArr => {

    return `
    ${managerArr.managerData
        .map(({ name, id, email, office}) => {
            return `
    <!--CARD-->
    <div class="card">
        <!--CARD TITLE-->
        <div class="title">
            <!-- NAME -->
            <div class="name">
                    ${name}
                    </div>
                    <!--POSITION-->
                    <div class="position">
                        Manager
                    </div>
                </div>
                <!--CARD DETAILS-->
                <div class="card-details">
                    <!--ID NUMBER-->
                    <div class="data">
                        ID: ${id}
                    </div>
                    <!--EMAIL-->
                    <div class="data">
                        Email: ${email}
                    </div>
                    <!--SPECIAL-->
                    <div class="data">
                        Office Number: ${office}
                    </div>
                </div>
            </div>
        `
        }).join('')}
    `;
}

const generateEngineer = engineerArr => {

    if (engineerArr.engineerData.length === 0) {
        return ``;
    }
    
    return `
    ${engineerArr.engineerData
        .map(({ name, id, email, github}) => {
            return `
    <!--CARD-->
    <div class="card">
        <!--CARD TITLE-->
        <div class="title">
            <!-- NAME -->
            <div class="name">
                    ${name}
                    </div>
                    <!--POSITION-->
                    <div class="position">
                        Engineer
                    </div>
                </div>
                <!--CARD DETAILS-->
                <div class="card-details">
                    <!--ID NUMBER-->
                    <div class="data">
                        ID: ${id}
                    </div>
                    <!--EMAIL-->
                    <div class="data">
                        Email: ${email}
                    </div>
                    <!--SPECIAL-->
                    <div class="data">
                        GitHub: ${github}
                    </div>
                </div>
            </div>
        `
        }).join('')}

    `;
}

const generateIntern = internArr => {

    if (internArr.internData.length === 0) {
        return ``;
    }

    return `
    ${internArr.internData
        .map(({ name, id, email, school}) => {
            return `
    <!--CARD-->
    <div class="card">
        <!--CARD TITLE-->
        <div class="title">
            <!-- NAME -->
            <div class="name">

                    ${name}
                    </div>
                    <!--POSITION-->
                    <div class="position">
                        Intern
                    </div>
                </div>
                <!--CARD DETAILS-->
                <div class="card-details">
                    <!--ID NUMBER-->
                    <div class="data">
                        ID: ${id}
                    </div>
                    <!--EMAIL-->
                    <div class="data">
                        Email: ${email}
                    </div>
                    <!--SPECIAL-->
                    <div class="data">
                        School: ${school}
                    </div>
                </div>
            </div>
        `
        }).join('')}

    `;
}

module.exports = employeeData => {

    const {name, id, email, role, office, github, school} = employeeData

    console.log(`
    ===================
    CREATING INDEX.HTML
    ===================
    `)

    return `
    
    <!DOCTYPE html>
    <html lang="en">
    
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <title>My Employees</title>
        <link rel="stylesheet" href="style.css">
    </head>
    
    <body>
        <header>
            <div class="top-bar">
                My Team
            </div>
        </header>
    
        <main>
            <div>
                <!-- MANAGER-->
                <div id="manager-row" class="manager-row">
                    ${generateManager(employeeData)}
                </div>
                <!-- ENGINEER-->
                <div class="engineer-row">
                    ${generateEngineer(employeeData)}
                </div>
                <!-- INTERN-->
                <div class="intern-row">
                    ${generateIntern(employeeData)}
                </div>
            </div>
        </main>
    <script src=""></script>
    </body>
    </html>
    
    `
}


