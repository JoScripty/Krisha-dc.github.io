document.getElementById("noBtn").addEventListener('click', ()=>{
  const randomPosTop= Math.floor(Math.random() * 100);
  const randomPosBot= Math.floor(Math.random() * 70);
  const noBtn= document.getElementById("noBtn");

  noBtn.style.position = "absolute";
  noBtn.style.top = `${randomPosTop}%`;
  noBtn.style.left= `${randomPosBot}%`;
})

document.getElementById("yesBtn").addEventListener('click', () =>{
  const noBtn= document.getElementById("noBtn");
  noBtn.style.display= "none";

  alert("Chat mo den ako ng kahit ano......");
})
