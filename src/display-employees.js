
   
   function displayData() {

        console.log(`
        ==================
        CREATING EMPLOYEES
        ==================
        `)

        for (var i = 0; i < 5; i++) {
            let managerEl = document.getElementById("manager-row")
            // let engineerEl = document.getElementById("engineer-row");
            // let internEl = document.getElementById("intern-row");

            let cardEl = document.createElement("div");
            cardEl.setAttribute("class", "card");
            let titleEl = document.createElement("div");
            titleEl.setAttribute("class", "title");
            let nameEl = document.createElement("div");
            nameEl.setAttribute("class", "name");
            let positionEl = document.createElement("div");
            positionEl.setAttribute("class", "position");
            let carddetailsEl = document.createElement("div");
            carddetailsEl.setAttribute("class", "card-details");
            let idEl = document.createElement("div");
            idEl.setAttribute("class", "data");
            let emailEl = document.createElement("div");
            emailEl.setAttribute("class", "data");
            let specialEl = document.createElement("div");
            specialEl.setAttribute("class", "data");
        
            managerEl.appendChild(cardEl);
            cardEl.appendChild(titleEl);
            cardEl.appendChild(carddetailsEl);
            titleEl.appendChild(nameEl);
            titleEl.appendChild(positionEl);
            carddetailsEl.appendChild(idEl);
            carddetailsEl.appendChild(emailEl);
            carddetailsEl.appendChild(specialEl);
        }
    }


    displayData()


