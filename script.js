function verif()
{
    var loading = document.getElementById('loading');
    var qess = document.getElementById('qess');

    var q1 = document.getElementsByName("q1"); //radio q1
    var q2 = document.getElementsByName("q2"); //radio q2
    var q3 = document.getElementsByName("q3"); //radio q3
    var q4 = document.getElementsByName("q4"); //radio q4
    var q5 = document.getElementsByName("q5"); //radio q5
    var x=0;
    var i=0;
    var ee = document.getElementById("score");
    //var ee = document.getElementById("qess");

    if  (q1[0].checked == false && q1[1].checked == false && q1[2].checked == false) {
        
      //  Swal.fire('Répondre aux question 1 !'); // sweet
      alert("Répondre aux question 1 !");

    }
    else if (q1[1].checked == true){
        x+=2;
        i=i+1;
    }
    else {
        x+=0;
        i=i+1;
    }


    if  (q2[0].checked == false && q2[1].checked == false && q2[2].checked == false) {
        
        //Swal.fire('Répondre aux question 2 !'); // sweet
        alert("Répondre aux question 2 !");

    }
    else if (q2[2].checked ){
        x=x+2;
        i=i+1;
    }
    else {
        x=x+0;
        i=i+1;
    }

    if  (q3[0].checked == false && q3[1].checked == false && q3[2].checked == false) {
        
        //Swal.fire('Répondre aux question 3 !'); // sweet
        alert("Répondre aux question 3 !");
    }
    else if (q3[0].checked == true){
        x=x+2;
        i=i+1;
    }
    else {
        x=x+0;
        i=i+1;
    }

    if  (q4[0].checked == false && q4[1].checked == false && q4[2].checked == false) {
        
        //Swal.fire('Répondre aux question 4 !'); // sweet
        alert("Répondre aux question 4 !");
    }
    else if (q4[0].checked == true){
        x=x+2;
        i=i+1;
    }
    else {
        x=x+0;
        i=i+1;
    }

    if  (q5[0].checked == false && q5[1].checked == false && q5[2].checked == false) {
        
        //Swal.fire('Répondre aux question 1 !'); // sweet
        alert("Répondre aux question 5 !");
    }
    else if (q5[0].checked == true){
        x=x+2;
        i=i+1;
    }
    else {
        x=x+0;
        i=i+1;
    }
    //console.log(i);
    if (i==5){
        //console.log(x);
        loading.parentNode.removeChild(loading);
      //  qess.parentNode.removeChild(qess);
        ch=` <div class='repquiz'> <strong><em>Résultats du Quiz : <em> </strong>`+ x +` / 10 </div>
        <br>
        <div class="titre"> Les réponses du Quiz </div>
        <br>
        <form  name="quiz">
                <fieldset>
                    <legend> 
                        Q1. Le rôle du HTML est de... : &nbsp; 
                    </legend>
                    
                    <div class="selector">
                        <div class="selecotr-item">
                            <input type="radio" id="q111" name="q11" class="selector-item_radio" disabled >
                            <label for="q111" class="selector-item_label">Mettre en forme du texte</label>
                        </div>
                    </div>
                    <div class="selector">
                        <div class="selecotr-item">
                            <input type="radio" id="q112" name="q11" class="selector-item_radio" checked>
                            <label for="q112" class="selector-item_label">Ordonner du contenu</label>
                        </div>
                    </div>
                    <div class="selector">
                        <div class="selecotr-item">
                            <input type="radio" id="q113" name="q11" class="selector-item_radio" disabled>
                            <label for="q113" class="selector-item_label">Créer des sites e-commerce</label>
                        </div>
                    </div>
                </fieldset>

                <fieldset>
                    <legend> 
                        Q2. Pour définir un titre DANS une page HTML, on utilise... : &nbsp; 
                    </legend>
                    
                    <div class="selector">
                        <div class="selecotr-item">
                            <input type="radio" id="q221" name="q22" class="selector-item_radio" disabled >
                            <label for="q221" class="selector-item_label">L'élément head</label>
                        </div>
                    </div>
                    <div class="selector">
                        <div class="selecotr-item">
                            <input type="radio" id="q222" name="q22" class="selector-item_radio" disabled>
                            <label for="q222" class="selector-item_label">L'élément title</label>
                        </div>
                    </div>
                    <div class="selector">
                        <div class="selecotr-item">
                            <input type="radio" id="q223" name="q22" class="selector-item_radio" checked>
                            <label for="q223" class="selector-item_label">Un élément h1, h2, ... h6</label>
                        </div>
                    </div>
                </fieldset>

                <fieldset>
                    <legend> 
                        Q3. Lorsque vous utilisez l'élément a, vous devez obligatoirement préciser... : &nbsp; 
                    </legend>
                    
                    <div class="selector">
                        <div class="selecotr-item">
                            <input type="radio" id="q331" name="q33" class="selector-item_radio" checked>
                            <label for="q331" class="selector-item_label">Un attribut target</label>
                        </div>
                    </div>
                    <div class="selector">
                        <div class="selecotr-item">
                            <input type="radio" id="q332" name="q33" class="selector-item_radio" disabled>
                            <label for="q332" class="selector-item_label">Un attribut href</label>
                        </div>
                    </div>
                    <div class="selector">
                        <div class="selecotr-item">
                            <input type="radio" id="q333" name="q33" class="selector-item_radio" disabled>
                            <label for="q333" class="selector-item_label">Deux attributs href et target</label>
                        </div>
                    </div>
                </fieldset>

                <fieldset>
                    <legend> 
                        Q4. Pour indiquer qu'un contenu est très important, on utilise l'élément... : &nbsp; 
                    </legend>
                    
                    <div class="selector">
                        <div class="selecotr-item">
                            <input type="radio" id="q441" name="q44" class="selector-item_radio" checked>
                            <label for="q441" class="selector-item_label">Strong</label>
                        </div>
                    </div>
                    <div class="selector">
                        <div class="selecotr-item">
                            <input type="radio" id="q442" name="q44" class="selector-item_radio" disabled>
                            <label for="q442" class="selector-item_label">Em</label>
                        </div>
                    </div>
                    <div class="selector">
                        <div class="selecotr-item">
                            <input type="radio" id="q443" name="q44" class="selector-item_radio" disabled>
                            <label for="q443" class="selector-item_label">Mark</label>
                        </div>
                    </div>
                </fieldset>

                <fieldset>
                    <legend> 
                        Q5. Quels éléments sont nécessaires pour créer une liste non-ordonnée ? : &nbsp; 
                    </legend>
                    
                    <div class="selector">
                        <div class="selecotr-item">
                            <input type="radio" id="q551" name="q55" class="selector-item_radio" checked >
                            <label for="q551" class="selector-item_label"  >ul et li</label>
                        </div>
                    </div>
                    <div class="selector">
                        <div class="selecotr-item">
                            <input type="radio" id="q552" name="q55" class="selector-item_radio" disabled>
                            <label for="q552" class="selector-item_label">ol et li</label>
                        </div>
                    </div>
                    <div class="selector">
                        <div class="selecotr-item">
                            <input type="radio" id="q553" name="q55" class="selector-item_radio" disabled>
                            <label for="q553" class="selector-item_label">ul et ol</label>
                        </div>
                    </div>
                </fieldset>
               
               
            </form>
        
        
        
        
        `;
        
        ee.insertAdjacentHTML('beforeend',ch);
    }
}
function annuler(){
    location.reload();
}
function validateEmail(elementValue){      
    var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return emailPattern.test(elementValue); 
  }
function verifcont(){
    var nom = document.getElementById("nom");
    var email = document.getElementById("email");
    var sujet = document.getElementById("sujet");
    var message = document.getElementById("message");
    if (nom.value=="")
    {
        alert("ATTONTION !! \n champ NOM vide ");

    }
    if (email.value=="")
    {
        alert("ATTONTION !! \n champ EMAIL vide ");

    }
    else if (validateEmail(email.value)==false)
    {
        alert("email invalide !! \n Exemple : xxxx@mail.com ");

    }
    if (sujet.value=="")
    {
        alert("ATTONTION !! \n champ SUJET vide ");

    }
    if (message.value=="")
    {
        alert("ATTONTION !! \n champ MESSAGE vide ");

    }
    if (nom.value!="" && email.value!="" && sujet.value!="" && message.value!="" && validateEmail(email.value)==true)
    {
        alert("Les information est bien envoyer  ^_^ \n Nom :"+nom.value+"\n Email :"+email.value+" \n Sujet :"+sujet.value+"\n Message :"+message.value+"  ");
        location.reload();

    }
}
