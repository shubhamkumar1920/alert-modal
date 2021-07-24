const trigger = document.querySelector('#trigger');
const modalWrapper = document.querySelector('.modal_wrapper');
const closebtn = document.querySelector('.close');

trigger.addEventListener('click',function(){
    openModal();
});

closebtn.addEventListener('click',function(){
    closeModel();
});

modalWrapper.addEventListener('click',function(e){
    if(e.target !==this) return;
    closeModel();
});
document.addEventListener('keydown',function(e){
    if(e.key === 'Escape'){
        closeModel();
    }
})
function openModal() {
    modalWrapper.classList.add('active');
}
function closeModel() {
    modalWrapper.classList.remove('active');
}