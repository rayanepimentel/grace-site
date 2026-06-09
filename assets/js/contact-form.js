/**
 * Gerenciamento do Formulário de Contato GRACE
 * Com validação e feedback visual
 */

document.addEventListener('DOMContentLoaded', function() {
  const contactForm = document.querySelector('.contact-form');
  
  if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
      e.preventDefault();
      
      const loadingDiv = contactForm.querySelector('.loading');
      const errorDiv = contactForm.querySelector('.error-message');
      const successDiv = contactForm.querySelector('.sent-message');
      const submitBtn = contactForm.querySelector('button[type="submit"]');
      
      // Validar reCAPTCHA
      const recaptchaResponse = grecaptcha.getResponse();
      if (!recaptchaResponse) {
        errorDiv.textContent = 'Por favor, complete o reCAPTCHA.';
        errorDiv.style.display = 'block';
        return;
      }
      
      // Mostrar loading
      loadingDiv.style.display = 'block';
      errorDiv.style.display = 'none';
      successDiv.style.display = 'none';
      submitBtn.disabled = true;
      
      // Coletar dados do formulário
      const formData = new FormData(contactForm);
      
      // Enviar para Formspree
      fetch(contactForm.action, {
        method: 'POST',
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      })
      .then(response => {
        loadingDiv.style.display = 'none';
        
        if (response.ok) {
          successDiv.style.display = 'block';
          contactForm.reset();
          grecaptcha.reset();
          
          // Esconder mensagem de sucesso após 5 segundos
          setTimeout(() => {
            successDiv.style.display = 'none';
          }, 5000);
        } else {
          return response.json().then(data => {
            throw new Error(data.error || 'Erro ao enviar mensagem');
          });
        }
      })
      .catch(error => {
        loadingDiv.style.display = 'none';
        errorDiv.textContent = 'Erro ao enviar mensagem. Por favor, tente novamente ou entre em contato por email.';
        errorDiv.style.display = 'block';
        console.error('Erro:', error);
      })
      .finally(() => {
        submitBtn.disabled = false;
      });
    });
  }
});


