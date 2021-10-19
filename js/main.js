const bookingTraveller = document.querySelector('.booking-traveller');
const subBookingLinks = document.querySelectorAll('.sub-booking-link');
const bookingClass = document.querySelector('.booking-class');
const subBookingClassLinks = document.querySelectorAll('.sub-booking-class_link')

const bookingBtns = document.querySelectorAll('.booking-btn')
const pasiveElems = document.querySelectorAll('.pasive')

subBookingLinks.forEach(subBookingLink => {
  subBookingLink.addEventListener('click', (event) => {
    event.preventDefault();
    bookingTraveller.innerHTML = subBookingLink.innerHTML
  })
});

subBookingClassLinks.forEach(subBookingClassLink => {
  subBookingClassLink.addEventListener('click', event => {
    event.preventDefault();
    bookingClass.innerHTML = subBookingClassLink.innerHTML;
  })
})

bookingBtns.forEach(bookingBtn => {
  bookingBtn.addEventListener('click', () => {
    bookingBtn.children[0].classList.toggle('active')
  })
})
