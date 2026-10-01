const shareBtn = document.getElementById('share-btn');
const sharePopup= document.getElementById('share-popup');

shareBtn.addEventListener('click', ()=>{
    const isExpanded = shareBtn.getAttribute('aria-expanded') === 'true';
    sharePopup.classList.toggle('active');
    sharePopup.hidden = isExpanded;
    shareBtn.setAttribute('aria-expanded', !isExpanded);
});