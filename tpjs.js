function createBook(title , author, dispo) {
    document.querySelector("#booklist").innerHTML +=`
    <div class="book">
        <section id="tableau" class="row">
            <h3 id="title" class=" col-4">Titre: ${title} </h3>
            <h3 id="author" class="col-4">Auteur: ${author} </h3>
            <h3 id="dispo" class="col-4">Disponible: ${dispo} </h3>
        </section>
    </div>`;
}

let dispo = document.querySelector("#dispo");

document.forms.ab.addEventListener(
    'submit', 
    function (event) {
        event.preventDefault();
        console.log('ok');
        let str;

        if (dispo.checked) {
            str = 'Oui'
        } else {
           str = 'Non'
        }

        createBook(
           this.title.value,
           this.author.value,
           str,
       );
       return false;
       this.title.value="";
       this.author.value="";
   }
); 

