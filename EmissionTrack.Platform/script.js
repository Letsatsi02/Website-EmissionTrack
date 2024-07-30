/ Get the countdown elements
const daysSpan = document.querySelector('#days');
const hoursSpan = document.querySelector('#hours');
const minutesSpan = document.querySelector('#minutes');
const secondsSpan = document.querySelector('#seconds');


const launchDate = new Date('2024-07-31T12:00:00.000Z').getTime();


setInterval(() => {
  
  const currentTime = new Date().getTime();

  
  const timeDifference = launchDate - currentTime;


  const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
  const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

  
  daysSpan.textContent = days.toString().padStart(2, '0');
  hoursSpan.textContent = hours.toString().padStart(2, '0');
  minutesSpan.textContent = minutes.toString().padStart(2, '0');
  secondsSpan.textContent = seconds.toString().padStart(2, '0');


  if (timeDifference <= 0) {
    document.querySelector('.countdown-container').innerHTML = '<h2>Launch Time!</h2>';
  }
}, 1000);
const form = document.getElementById('newsletter-form');
const thankYouMessage = document.querySelector('.thank-you-message');
const requestDemoButton = document.getElementById('request-demo');
const contactSalesButton = document.getElementById('contact-sales');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const email = document.getElementById('email').value;
    
    thankYouMessage.style.display = 'block';
    form.reset();
});

requestDemoButton.addEventListener('click', () => {

    alert('Demo request sent!');
});

contactSalesButton.addEventListener('click', () => {
   
    alert('Sales contact sent!');
});


