const openBtn = document.querySelector('#openOverlay');
const body = document.body;
const modalContent = 'Modal window has been created!';

openBtn.addEventListener('click', e => {
  body.appendChild(createModal(modalContent));
})

function createModal(content) {
  const overlayElement = document.createElement('div');
  overlayElement.classList.add('overlay');

  overlayElement.addEventListener('click', e => {
    if (e.target === overlayElement) {
      closeBtn.click();
    }
  })
  
  const container = document.createElement('div');
  container.classList.add('modal-container');
  
  const overlayContent = document.createElement('div');
  overlayContent.classList.add('content');
  overlayContent.innerHTML= content;
  
  const closeBtn = document.createElement('a');
  closeBtn.classList.add('close');
  closeBtn.textContent = 'X';
  closeBtn.href = '#';
  
  closeBtn.addEventListener('click', e => {
    e.preventDefault();
    body.removeChild(overlayElement);
  })
  
  body.appendChild(overlayElement);
  overlayElement.appendChild(container);
  container.appendChild(closeBtn);
  container.appendChild(overlayContent);
}



