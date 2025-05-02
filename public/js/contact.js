document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contactForm');
    const formStatus = document.getElementById('formStatus');
    
    if (contactForm) {
      contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Get form data
        const formData = {
          name: document.getElementById('name').value,
          email: document.getElementById('email').value,
          subject: document.getElementById('subject').value,
          message: document.getElementById('message').value
        };
        
        // For now, we'll just simulate a successful form submission
        // In a real application, you would send this data to your server
        
        // Display success message
        formStatus.textContent = document.documentElement.lang === 'en' ? 
          'Your message has been sent successfully!' : 
          '您的消息已成功发送！';
        formStatus.className = 'form-status success';
        
        // Reset form
        contactForm.reset();
        
        // Hide success message after 5 seconds
        setTimeout(() => {
          formStatus.style.display = 'none';
        }, 5000);
        
        /* 
        // Example of how you would send the data to your server
        fetch('/api/contact', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(formData)
        })
        .then(response => response.json())
        .then(data => {
          if (data.success) {
            formStatus.textContent = 'Your message has been sent successfully!';
            formStatus.className = 'form-status success';
            contactForm.reset();
          } else {
            formStatus.textContent = 'There was an error sending your message. Please try again.';
            formStatus.className = 'form-status error';
          }
        })
        .catch(error => {
          formStatus.textContent = 'There was an error sending your message. Please try again.';
          formStatus.className = 'form-status error';
          console.error('Error:', error);
        });
        */
      });
    }
  });