// const btn = document.querySelector('.btn');
// const openModal = document.querySelector('.modal-overlay');
// const closeBtn = document.querySelector('.close-btn');
// const closedBtn = document.querySelector('.closed-btn');
// const openBanner = document.querySelector('.banner');
// const openhero = document.querySelector('.hero');
// const openSignUp = document.querySelector('.');


// window.addEventListener('DOMContentLoaded',function(){
//     setTimeout(function(){
//  openBanner.classList.add('show-banner')
//  openhero.classList.add('show-hero')
// },1000)   
// })

// btn.addEventListener('click',function(){
// openModal.classList.add('show-content')
//  openhero.classList.remove('show-hero')
//   openBanner.classList.add('close-form')
// })

// closeBtn.addEventListener('click',function(){
//     openModal.classList.remove('show-content')
// })
// closedBtn.addEventListener('click',function(){
//     openBanner.classList.add('close-form')
//     openhero.classList.remove('show-hero')
// })


const openModalButtons = document.querySelectorAll('[data-modal-target]');
// const closeModalButtons = document.querySelectorAll('.close-button')
const overlay = document.querySelector('.overlay')

openModalButtons.forEach(button =>{
    button.addEventListener('click',() =>{
        const modal = document.querySelector(button.dataset.modalTarget)
        console.log(modal);
        openModal(modal)
    })
})
// closeModalButtons.forEach(button =>{
//     button.addEventListener('click',() =>{
//         const modal = button.closest('.modal')
//         closeModal(modal)
//     })
// })

function openModal(modal){
    modal.classList.add('active')
    overlay.classList.add('active')
}
function closeModal(modal){
    modal.classList.remove('active')
    overlay.classList.remove('active')
}