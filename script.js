document.addEventListener('keydown', (event) => {
    let keyName = event.key;
    document.querySelectorAll(".drum").forEach((item)=>{
        if(item.innerHTML.toLowerCase() == keyName){
            item.classList.add("play");
            let audioElement = document.getElementById(`s_${event.code.toLowerCase()}`);
            if(audioElement){
                audioElement.currentTime = 0;
                audioElement.play();
            }
        }
    });
});
document.addEventListener('keyup', (event) => {
    let keyName = event.key;
    document.querySelectorAll(".drum").forEach((item)=>{
        if(item.innerHTML.toLowerCase() == keyName){
            item.classList.remove("play");
        }
    });
});
document.querySelector("button").addEventListener("click",()=>{
    let input = document.querySelector("input");
    if(input.value != ""){
        let letras = input.value.trim().toLowerCase().split("");
        playComposicao(letras);
    }
});
function playComposicao(songArray) {
    let wait = 0;
    for(let songItem of songArray){
        setTimeout(()=>{
            let audioElement = document.getElementById(`s_key${songItem}`);
            if(audioElement){
                audioElement.currentTime = 0;
                audioElement.play();
                document.querySelectorAll(".drum").forEach((item)=>{
                    if(item.innerHTML.toLowerCase() == songItem){
                        item.classList.add("play");
                        setTimeout(()=>{
                            item.classList.remove("play");
                        }, 210);
                    }
                });
            }
        }, wait);
        wait += 250;
    }
}
document.querySelectorAll(".drum").forEach((item)=>{
    item.addEventListener("click",()=>{
        let audioElement = document.querySelector(`#s_key${item.innerHTML.toLowerCase()}`);
        if(audioElement){
            audioElement.currentTime = 0;
            audioElement.play();
            item.classList.add("play");
            setTimeout(()=>{
                item.classList.remove("play");
            }, 150);
        }
    });
});