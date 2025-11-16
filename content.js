(function() {  
  const overlay = document.createElement('div');
  overlay.id = 'redirect-overlay';
  
  const popup = document.createElement('div');
  popup.id = 'redirect-popup';
  
  const text = document.createElement('p');
  text.innerText = 'Deseja desbloquear esta página?';
  popup.appendChild(text);

  const button = document.createElement('button');
  button.id = 'redirect-btn';
  button.innerText = 'Redirecionar para Freedium';
  
  button.onclick = function() {
    const currentUrl = window.location.href;
    const newUrl = 'https://freedium.cfd/' + currentUrl;
    
    window.location.href = newUrl;
  };
  
  popup.appendChild(button);

  const closeButton = document.createElement('button');
  closeButton.id = 'close-btn';
  closeButton.innerText = 'Fechar';

  closeButton.onclick = function() {
    overlay.remove();
    popup.remove();
  };
  
  popup.appendChild(closeButton);
  
  document.body.appendChild(overlay);
  document.body.appendChild(popup);

})();