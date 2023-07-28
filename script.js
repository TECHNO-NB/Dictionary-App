const inputVal = document.querySelector(".input-val");
const txt = document.querySelector(".txt");
const ptag = document.querySelector(".p-tag");
const grammer = document.querySelector(".grammer");
const word = document.querySelector(".word");
const sentence= document.querySelector(".sentence");

const fetchData = async () => {
    const res = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${inputVal.value}`);
    const data = await res.json();

    data.forEach((v) => {
         txt.innerText = inputVal.value;
        ptag.innerText=v.phonetic;

    v.meanings.forEach((val)=>{
        grammer.innerText=val.partOfSpeech;
        
     v.meanings[0].definitions.forEach((ex)=>{
    sentence.innerText=ex.example;
     })
       
       
        val.synonyms.forEach((ss)=>{
            word.innerHTML=ss;
        })
       
          
      
    
    })

    })
}


const sound = async () => {
    const res = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${inputVal.value}`);
    const data = await res.json();
    data.forEach((a) => {
        a.phonetics.forEach((val) => {
            let audio = new Audio(val.audio);
            audio.play()
        })

    })

}