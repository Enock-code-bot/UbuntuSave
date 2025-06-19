// Testimonial slider script for UbuntuSaveWebsite

document.addEventListener('DOMContentLoaded', () => {
    const testimonials = [
        {
            name: "Jeanette",
            text: "UbuntuSave changed my life. The shelter and education programs gave me hope and a future."
        },
        {
            name: "Paul",
            text: "Volunteering with UbuntuSave has been a rewarding experience. The kids are amazing!"
        },
        {
            name: "Amina",
            text: "The mentorship program helped me gain confidence and skills to succeed."
        }
    ];

    let currentIndex = 0;

    // Create testimonial container
    const container = document.createElement('section');
    container.id = 'testimonial-slider';
    container.style.maxWidth = '600px';
    container.style.margin = '2rem auto';
    container.style.padding = '1rem';
    container.style.border = '1px solid #6b4c3b';
    container.style.borderRadius = '10px';
    container.style.backgroundColor = '#fff6e7';
    container.style.color = '#6b4c3b';
    container.style.textAlign = 'center';
    container.style.boxShadow = '0 2px 8px rgba(107,76,59,0.2)';

    const testimonialText = document.createElement('p');
    testimonialText.style.fontStyle = 'italic';
    testimonialText.style.fontSize = '1.2rem';
    testimonialText.textContent = `"${testimonials[currentIndex].text}"`;

    const testimonialName = document.createElement('h4');
    testimonialName.style.marginTop = '1rem';
    testimonialName.textContent = `- ${testimonials[currentIndex].name}`;

    container.appendChild(testimonialText);
    container.appendChild(testimonialName);

    // Add container to main content area or body
    const main = document.querySelector('main');
    if (main) {
        main.appendChild(container);
    } else {
        document.body.appendChild(container);
    }

    // Function to update testimonial
    function updateTestimonial() {
        currentIndex = (currentIndex + 1) % testimonials.length;
        testimonialText.textContent = `"${testimonials[currentIndex].text}"`;
        testimonialName.textContent = `- ${testimonials[currentIndex].name}`;
    }

    // Change testimonial every 5 seconds
    setInterval(updateTestimonial, 5000);
});
