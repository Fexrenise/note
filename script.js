let notes = [];
let inp = document.getElementById('inp');
function send(){
    notes.push(inp.value);
    let list = "";
inp.value = "";
for (let i = 0; i < notes.length; i++){
    if (notes[i] == "") {
        list += `<li class="list-group-item d-none justify-content-between">${notes[i]}</li>`
    }else{
        list += `<li class="list-group-item d-flex justify-content-between" id="bfn">${notes[i]}
<button class="btn btn-danger btn-sm"> Sil </button>
</li>`
    }
}
document.getElementById('list').innerHTML = list;
}

notes.forEach((valuee)=>{
    notes.splice(notes.indexOf(valuee),1);
});



