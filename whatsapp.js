// WhatsApp integration script for UbuntuSaveWebsite

document.addEventListener('DOMContentLoaded', () => {
    // Create WhatsApp floating button
    const whatsappBtn = document.createElement('a');
    whatsappBtn.href = 'https://wa.me/250700000000';
    whatsappBtn.target = '_blank';
    whatsappBtn.rel = 'noopener';
    whatsappBtn.id = 'whatsapp-btn';
    whatsappBtn.title = 'Chat with us on WhatsApp';
    whatsappBtn.innerHTML = '&#x1F4AC;'; // speech balloon emoji as icon

    // Style the button
    whatsappBtn.style.position = 'fixed';
    whatsappBtn.style.bottom = '20px';
    whatsappBtn.style.right = '20px';
    whatsappBtn.style.backgroundColor = '#25D366';
    whatsappBtn.style.color = 'white';
    whatsappBtn.style.fontSize = '2.5rem';
    whatsappBtn.style.padding = '10px 15px';
    whatsappBtn.style.borderRadius = '50%';
    whatsappBtn.style.boxShadow = '0 2px 5px rgba(0,0,0,0.3)';
    whatsappBtn.style.zIndex = '1000';
    whatsappBtn.style.textAlign = 'center';
    whatsappBtn.style.textDecoration = 'none';

    document.body.appendChild(whatsappBtn);
});
