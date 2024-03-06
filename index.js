(function() {
    // Add event listener
    const elem = document.querySelector("#parallax");
    document.addEventListener("mousemove", parallax);
  
    // Magic happens here
    function parallax(e) {
        let _w = window.innerWidth/2;
        let _h = window.innerHeight/2;
        let _mouseX = e.clientX;
        let _mouseY = e.clientY;
        let _depth1 = `${50 - (_mouseX - _w) * 0.01}% ${50 - (_mouseY - _h) * 0.01}%`;
        let _depth2 = `${50 - (_mouseX - _w) * 0.02}% ${50 - (_mouseY - _h) * 0.02}%`;
        let _depth3 = `${50 - (_mouseX - _w) * 0.06}% ${50 - (_mouseY - _h) * 0.06}%`;
        let x = `${_depth3}, ${_depth2}, ${_depth1}`;
        console.log(x);
        elem.style.backgroundPosition = x;
    }

})();


const options = {
    //Définit la zone de référence pour la détection d'intersection , cela signifie que 	l'observateur surveillera l'intersection des éléments cibles avec l'élément .container. 
root: document.querySelector('#slide2'), 
// Marge autour de la zone racine :Cela signifie que l'observateur déclenchera l'observation d'un élément cible dès que son bord rentre dans cette marge de 50 pixels autour de l'élément .container.
rootMargin: '50px,50px,50px,50px,',
// Cette propriété spécifie les valeurs de seuil pour lesquelles l’observateur déclenchera l’événement 
threshold: [0.25, 0.5, 0.75], 
};
                    
const obs = new IntersectionObserver((entries) => {	     //creation d'un observer qui un CB en parametre
for (const entry of entries) {
if (entry.isIntersecting) {                      //    si entry.isintersecting  est vrai (c’est-à-dire que l’élément cible est visible dans la zone 						            de référence definit dans les options ), l’animation est déclenchée. 
  entry.target.animate(			     //  entry.target  permet d'identifier l'élément cible dont l'intersection a été détectée et 						           de lui appliquer les actions prévues. 
    [
      { transform: 'translateX(-1000px)', opacity: 0 },
      { transform: 'translateX(0px)', opacity: 1 },
    ],
    {
      duration: 500, // Ajoutez un deux-points après "duration"
    }
  );
  entry.target.classList.add('is-visible');
}
}
});
obs.observe(document.querySelector('h2')); 		//selection de l'éléments  cible à observer



