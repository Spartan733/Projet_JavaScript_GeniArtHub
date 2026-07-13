const params = new URLSearchParams(window.location.search)
const id = params.get("id");

async function detail() {
    try {
        const res =  await fetch (`http://localhost:3000/api/products/${id}`)
        const data = await res.json();

        console.log(data)

        document.title = `${product.title}`;


        const img = document.querySelector("figure img");
        img.src = product.image;
        img.alt = product.title


        const titre = document.querySelector("h1")
        titre.textContent = product.title;


        const descriptionCourte = document.querySelector("article div p")
        descriptionCourte.textContent = product.description.substring(0, 150) + "..."


        const descComplete = document.querySelector("aside")
        descriptionComplete.innerHTML = `
            <h2>Description de l'œuvre : ${product.title}</h2>
            <p>${product.description}</p>
        `;


        // Recuperation du select
        const select = document.querySelector("#format")

        select.innerHTML = "";

        // Creation des options du select
        product.declinaison.forEach((declinaison) => {
            const option = document.createElement("option");

            option.value = declinaison.taille;

            option.textContent = declinaison.taille;

            select.appendChild(option)
        })

        const prix = document.querySelector(".showprice");

        prix.textContent = product.declinaison[0].prix + "€";

        select.addEventListener("change", () => {
         const tailleChoisie = select.value;

            const declinaisonChoisie = product.declinaisons.find(
                (declinaison) =>
                    declinaison.taille === tailleChoisie
            );

            prix.textContent = declinaisonChoisie.prix + "€";
        });

        productContainer.innerHTML = productHtml;

        const shortDescription = document.querySelector(".short_description");
        shortDescription.textContent = product.description.substring(0, 150) + "...";

        
        const fullDescription = document.querySelector(".full_description");
        fullDescription.textContent = product.description;

    } catch (error) {
        console.log("Ereur lors de la récupération du produit", error);
    }
}