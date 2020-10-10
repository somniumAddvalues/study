(async ()=>{
    const url = "http://localhost:8080/rest";
    const response = await fetch(url);
    const data = await  response.json();
    const element = document.getElementById('app');
    element.innerHTML =`${data.map(data1 => ` <p>${ data1.id}    ${ data1.information}    ${ data1.loc}  </p>`).join("")} `;})();
