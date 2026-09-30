const shareBtn = document.getElementById('share-btn');
const sharePopup= document.getElementById('share-popup');

shareBtn.addEventListener('click', ()=>{
    sharePopup.classList.toggle('active');
});