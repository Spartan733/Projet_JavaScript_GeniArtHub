async function images() {
    try {
        const response = await fetch ('http://localhost:3000/api/products/')
        const donnees = await response.json();
        // console.log(JSON.stringify(donnees, null, 2));

        let imagesHtml = "";

        donnees.forEach(products  => {

            imagesHtml += `
            <img
                image="${products.image}"
                <p>${products.shorttitle}</p>
            >
            `;
            console.log(imagesHtml);
        });

        const article = `
            <article>
                <h1>${donnees.shorttitle}</h1>
                <h2>${donnees.titre}</h2>
                <p>${donnees.description}</p>

                <div class="images">
                    ${imagesHtml}
                </div>
            </article>
        // `

        // const main = document.getElementsByClassName("products")

        // main.insertAdjacentHTML("beforeend", article)

       document.getElementsByClassName("products").innerHtml = `
        <article>
            <h1>${donnees.shorttitle}</h1>
            <h2>${donnees.titre}</h2>
            <p>${donnees.description}</p>

            <div class="images">
                ${imagesHtml}
            </div>
        </article>
        `;
        // console.log(donnees)

    } catch (error) {
        console.error(`Une erreur est survenue : ${error}`)
    }
}
images()