// JavaScript for UbuntuSaveWebsite interactive features

document.addEventListener('DOMContentLoaded', () => {
    // Language selection functionality
    const langSelect = document.getElementById('lang-select');
    const langDropdown = document.getElementById('lang-dropdown');

    const translations = {
        en: {
            heroTitle: "Empowering Street Kids Through Care, Education, and Opportunity",
            donateNow: "Donate Now",
            getInvolved: "Get Involved",
            missionText: "UbuntuSave is dedicated to providing hope and opportunity to street children in Rwanda by offering safe shelter, quality education, and supportive mentorship programs rooted in community and culture.",
            kidsSupported: "Kids Supported",
            shelters: "Shelters",
            volunteers: "Volunteers",
            ourPrograms: "Our Programs",
            shelter: "Shelter",
            shelterDesc: "Safe and secure housing for street children.",
            education: "Education",
            educationDesc: "Access to quality education and learning resources.",
            mentorship: "Mentorship",
            mentorshipDesc: "Guidance and support from caring mentors.",
            whatPeopleSay: "What People Say",
            stayConnected: "Stay Connected",
            subscribeNewsletter: "Subscribe to our newsletter",
            subscribe: "Subscribe",
            chatWhatsApp: "Chat with us on WhatsApp",
            followUs: "Follow Us",
            becomeVolunteer: "Become a Volunteer",
            nameLabel: "Name",
            emailLabel: "Email",
            skillsLabel: "Skills / Interests",
            signUp: "Sign Up"
        },
        fr: {
            heroTitle: "Autonomiser les enfants des rues grâce aux soins, à l'éducation et aux opportunités",
            donateNow: "Faire un don",
            getInvolved: "S'impliquer",
            missionText: "UbuntuSave s'engage à offrir espoir et opportunités aux enfants des rues au Rwanda en offrant un abri sûr, une éducation de qualité et des programmes de mentorat ancrés dans la communauté et la culture.",
            kidsSupported: "Enfants soutenus",
            shelters: "Abris",
            volunteers: "Bénévoles",
            ourPrograms: "Nos programmes",
            shelter: "Abri",
            shelterDesc: "Logement sûr et sécurisé pour les enfants des rues.",
            education: "Éducation",
            educationDesc: "Accès à une éducation de qualité et à des ressources d'apprentissage.",
            mentorship: "Mentorat",
            mentorshipDesc: "Orientation et soutien de mentors attentionnés.",
            whatPeopleSay: "Ce que les gens disent",
            stayConnected: "Restez connecté",
            subscribeNewsletter: "Abonnez-vous à notre newsletter",
            subscribe: "S'abonner",
            chatWhatsApp: "Discutez avec nous sur WhatsApp",
            followUs: "Suivez-nous",
            becomeVolunteer: "Devenez bénévole",
            nameLabel: "Nom",
            emailLabel: "E-mail",
            skillsLabel: "Compétences / Intérêts",
            signUp: "S'inscrire"
        },
        rw: {
            heroTitle: "Guteza imbere abana bo mu muhanda binyuze mu kwita, uburezi, n'amahirwe",
            donateNow: "Tanga Ubufasha",
            getInvolved: "Jya mu bikorwa",
            missionText: "UbuntuSave yiyemeje gutanga icyizere n'amahirwe ku bana bo mu muhanda mu Rwanda itanga aho baba hizewe, uburezi bufite ireme, n'ibiganiro by'ubujyanama bishingiye ku muryango n'umuco.",
            kidsSupported: "Abana bafashijwe",
            shelters: "Aho baba",
            volunteers: "Abakorerabushake",
            ourPrograms: "Porogaramu zacu",
            shelter: "Aho kuba",
            shelterDesc: "Aho abana bo mu muhanda baba hizewe kandi hatekanye.",
            education: "Uburezi",
            educationDesc: "Uburenganzira ku burezi bufite ireme n'ibikoresho byo kwiga.",
            mentorship: "Ubujyanama",
            mentorshipDesc: "Inama n'inkunga bitangwa n'abajyanama bita ku bandi.",
            whatPeopleSay: "Ibyo abantu bavuga",
            stayConnected: "Guma uhuze natwe",
            subscribeNewsletter: "Iyandikishe kuri newsletter yacu",
            subscribe: "Iyandikishe",
            chatWhatsApp: "Vugana natwe kuri WhatsApp",
            followUs: "Dukurikire",
            becomeVolunteer: "Biba umukorerabushake",
            nameLabel: "Izina",
            emailLabel: "Imeyili",
            skillsLabel: "Ubumenyi / Ibyo ukunda",
            signUp: "Iyandikishe"
        }
    };

    function translatePage(lang) {
        document.querySelectorAll('[data-i18n-key]').forEach(el => {
            const key = el.getAttribute('data-i18n-key');
            if (translations[lang] && translations[lang][key]) {
                el.textContent = translations[lang][key];
            }
        });
    }

document.addEventListener('DOMContentLoaded', () => {
    // Language selection functionality
    const langSelect = document.getElementById('lang-select');
    const langDropdown = document.getElementById('lang-dropdown');

    const translations = {
        en: {
            heroTitle: "Empowering Street Kids Through Care, Education, and Opportunity",
            donateNow: "Donate Now",
            getInvolved: "Get Involved",
            missionText: "UbuntuSave is dedicated to providing hope and opportunity to street children in Rwanda by offering safe shelter, quality education, and supportive mentorship programs rooted in community and culture.",
            kidsSupported: "Kids Supported",
            shelters: "Shelters",
            volunteers: "Volunteers",
            ourPrograms: "Our Programs",
            shelter: "Shelter",
            shelterDesc: "Safe and secure housing for street children.",
            education: "Education",
            educationDesc: "Access to quality education and learning resources.",
            mentorship: "Mentorship",
            mentorshipDesc: "Guidance and support from caring mentors.",
            whatPeopleSay: "What People Say",
            stayConnected: "Stay Connected",
            subscribeNewsletter: "Subscribe to our newsletter",
            subscribe: "Subscribe",
            chatWhatsApp: "Chat with us on WhatsApp",
            followUs: "Follow Us",
            becomeVolunteer: "Become a Volunteer",
            nameLabel: "Name",
            emailLabel: "Email",
            skillsLabel: "Skills / Interests",
            signUp: "Sign Up",
            languageLabel: "Language"
        },
        fr: {
            heroTitle: "Autonomiser les enfants des rues grâce aux soins, à l'éducation et aux opportunités",
            donateNow: "Faire un don",
            getInvolved: "S'impliquer",
            missionText: "UbuntuSave s'engage à offrir espoir et opportunités aux enfants des rues au Rwanda en offrant un abri sûr, une éducation de qualité et des programmes de mentorat ancrés dans la communauté et la culture.",
            kidsSupported: "Enfants soutenus",
            shelters: "Abris",
            volunteers: "Bénévoles",
            ourPrograms: "Nos programmes",
            shelter: "Abri",
            shelterDesc: "Logement sûr et sécurisé pour les enfants des rues.",
            education: "Éducation",
            educationDesc: "Accès à une éducation de qualité et à des ressources d'apprentissage.",
            mentorship: "Mentorat",
            mentorshipDesc: "Orientation et soutien de mentors attentionnés.",
            whatPeopleSay: "Ce que les gens disent",
            stayConnected: "Restez connecté",
            subscribeNewsletter: "Abonnez-vous à notre newsletter",
            subscribe: "S'abonner",
            chatWhatsApp: "Discutez avec nous sur WhatsApp",
            followUs: "Suivez-nous",
            becomeVolunteer: "Devenez bénévole",
            nameLabel: "Nom",
            emailLabel: "E-mail",
            skillsLabel: "Compétences / Intérêts",
            signUp: "S'inscrire",
            languageLabel: "Langue"
        },
        rw: {
            heroTitle: "Guteza imbere abana bo mu muhanda binyuze mu kwita, uburezi, n'amahirwe",
            donateNow: "Tanga Ubufasha",
            getInvolved: "Jya mu bikorwa",
            missionText: "UbuntuSave yiyemeje gutanga icyizere n'amahirwe ku bana bo mu muhanda mu Rwanda itanga aho baba hizewe, uburezi bufite ireme, n'ibiganiro by'ubujyanama bishingiye ku muryango n'umuco.",
            kidsSupported: "Abana bafashijwe",
            shelters: "Aho baba",
            volunteers: "Abakorerabushake",
            ourPrograms: "Porogaramu zacu",
            shelter: "Aho kuba",
            shelterDesc: "Aho abana bo mu muhanda baba hizewe kandi hatekanye.",
            education: "Uburezi",
            educationDesc: "Uburenganzira ku burezi bufite ireme n'ibikoresho byo kwiga.",
            mentorship: "Ubujyanama",
            mentorshipDesc: "Inama n'inkunga bitangwa n'abajyanama bita ku bandi.",
            whatPeopleSay: "Ibyo abantu bavuga",
            stayConnected: "Guma uhuze natwe",
            subscribeNewsletter: "Iyandikishe kuri newsletter yacu",
            subscribe: "Iyandikishe",
            chatWhatsApp: "Vugana natwe kuri WhatsApp",
            followUs: "Dukurikire",
            becomeVolunteer: "Biba umukorerabushake",
            nameLabel: "Izina",
            emailLabel: "Imeyili",
            skillsLabel: "Ubumenyi / Ibyo ukunda",
            signUp: "Iyandikishe",
            languageLabel: "Ururimi"
        }
    };

    function translatePage(lang) {
        document.querySelectorAll('[data-i18n-key]').forEach(el => {
            const key = el.getAttribute('data-i18n-key');
            if (translations[lang] && translations[lang][key]) {
                el.textContent = translations[lang][key];
            }
        });
    }

    // Load saved language or default to English
    let savedLang = localStorage.getItem('selectedLanguage') || 'en';
    translatePage(savedLang);
    langSelect.textContent = translations[savedLang].languageLabel || 'Language';

    langSelect.addEventListener('click', (e) => {
        e.preventDefault();
        if (langDropdown.classList.contains('hidden')) {
            langDropdown.classList.remove('hidden');
        } else {
            langDropdown.classList.add('hidden');
        }
    });

    langDropdown.querySelectorAll('li').forEach(item => {
        item.addEventListener('click', () => {
            const selectedLang = item.getAttribute('data-lang');
            localStorage.setItem('selectedLanguage', selectedLang);
            translatePage(selectedLang);
            langSelect.textContent = item.textContent;
            langDropdown.classList.add('hidden');
        });
    });
});
=======
document.addEventListener('DOMContentLoaded', () => {
    // Language selection functionality
    const langSelect = document.getElementById('lang-select');
    const langDropdown = document.getElementById('lang-dropdown');

    const translations = {
        en: {
            heroTitle: "Empowering Street Kids Through Care, Education, and Opportunity",
            donateNow: "Donate Now",
            getInvolved: "Get Involved",
            missionText: "UbuntuSave is dedicated to providing hope and opportunity to street children in Rwanda by offering safe shelter, quality education, and supportive mentorship programs rooted in community and culture.",
            kidsSupported: "Kids Supported",
            shelters: "Shelters",
            volunteers: "Volunteers",
            ourPrograms: "Our Programs",
            shelter: "Shelter",
            shelterDesc: "Safe and secure housing for street children.",
            education: "Education",
            educationDesc: "Access to quality education and learning resources.",
            mentorship: "Mentorship",
            mentorshipDesc: "Guidance and support from caring mentors.",
            whatPeopleSay: "What People Say",
            stayConnected: "Stay Connected",
            subscribeNewsletter: "Subscribe to our newsletter",
            subscribe: "Subscribe",
            chatWhatsApp: "Chat with us on WhatsApp",
            followUs: "Follow Us",
            becomeVolunteer: "Become a Volunteer",
            nameLabel: "Name",
            emailLabel: "Email",
            skillsLabel: "Skills / Interests",
            signUp: "Sign Up",
            languageLabel: "Language"
        },
        fr: {
            heroTitle: "Autonomiser les enfants des rues grâce aux soins, à l'éducation et aux opportunités",
            donateNow: "Faire un don",
            getInvolved: "S'impliquer",
            missionText: "UbuntuSave s'engage à offrir espoir et opportunités aux enfants des rues au Rwanda en offrant un abri sûr, une éducation de qualité et des programmes de mentorat ancrés dans la communauté et la culture.",
            kidsSupported: "Enfants soutenus",
            shelters: "Abris",
            volunteers: "Bénévoles",
            ourPrograms: "Nos programmes",
            shelter: "Abri",
            shelterDesc: "Logement sûr et sécurisé pour les enfants des rues.",
            education: "Éducation",
            educationDesc: "Accès à une éducation de qualité et à des ressources d'apprentissage.",
            mentorship: "Mentorat",
            mentorshipDesc: "Orientation et soutien de mentors attentionnés.",
            whatPeopleSay: "Ce que les gens disent",
            stayConnected: "Restez connecté",
            subscribeNewsletter: "Abonnez-vous à notre newsletter",
            subscribe: "S'abonner",
            chatWhatsApp: "Discutez avec nous sur WhatsApp",
            followUs: "Suivez-nous",
            becomeVolunteer: "Devenez bénévole",
            nameLabel: "Nom",
            emailLabel: "E-mail",
            skillsLabel: "Compétences / Intérêts",
            signUp: "S'inscrire",
            languageLabel: "Langue"
        },
        rw: {
            heroTitle: "Guteza imbere abana bo mu muhanda binyuze mu kwita, uburezi, n'amahirwe",
            donateNow: "Tanga Ubufasha",
            getInvolved: "Jya mu bikorwa",
            missionText: "UbuntuSave yiyemeje gutanga icyizere n'amahirwe ku bana bo mu muhanda mu Rwanda itanga aho baba hizewe, uburezi bufite ireme, n'ibiganiro by'ubujyanama bishingiye ku muryango n'umuco.",
            kidsSupported: "Abana bafashijwe",
            shelters: "Aho baba",
            volunteers: "Abakorerabushake",
            ourPrograms: "Porogaramu zacu",
            shelter: "Aho kuba",
            shelterDesc: "Aho abana bo mu muhanda baba hizewe kandi hatekanye.",
            education: "Uburezi",
            educationDesc: "Uburenganzira ku burezi bufite ireme n'ibikoresho byo kwiga.",
            mentorship: "Ubujyanama",
            mentorshipDesc: "Inama n'inkunga bitangwa n'abajyanama bita ku bandi.",
            whatPeopleSay: "Ibyo abantu bavuga",
            stayConnected: "Guma uhuze natwe",
            subscribeNewsletter: "Iyandikishe kuri newsletter yacu",
            subscribe: "Iyandikishe",
            chatWhatsApp: "Vugana natwe kuri WhatsApp",
            followUs: "Dukurikire",
            becomeVolunteer: "Biba umukorerabushake",
            nameLabel: "Izina",
            emailLabel: "Imeyili",
            skillsLabel: "Ubumenyi / Ibyo ukunda",
            signUp: "Iyandikishe",
            languageLabel: "Ururimi"
        }
    };

    function translatePage(lang) {
        document.querySelectorAll('[data-i18n-key]').forEach(el => {
            const key = el.getAttribute('data-i18n-key');
            if (translations[lang] && translations[lang][key]) {
                el.textContent = translations[lang][key];
            }
        });
    }

    // Load saved language or default to English
    let savedLang = localStorage.getItem('selectedLanguage') || 'en';
    translatePage(savedLang);
    langSelect.textContent = translations[savedLang].languageLabel || 'Language';

    langSelect.addEventListener('click', (e) => {
        e.preventDefault();
        langDropdown.classList.toggle('hidden');
    });

    langDropdown.querySelectorAll('li').forEach(item => {
        item.addEventListener('click', () => {
            const selectedLang = item.getAttribute('data-lang');
            localStorage.setItem('selectedLanguage', selectedLang);
            translatePage(selectedLang);
            langSelect.textContent = item.textContent;
            langDropdown.classList.add('hidden');
        });
    });

    // Contact form submission handling
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const statusDiv = document.getElementById('contact-message-status');
            statusDiv.textContent = 'Sending message...';

            // Simulate async submission
            setTimeout(() => {
                statusDiv.textContent = 'Thank you for contacting us! We will get back to you soon.';
                contactForm.reset();
            }, 1500);
        });
    }

    // Donation form submission handling
    const donationForm = document.getElementById('donation-form');
    if (donationForm) {
        const donateNowButton = donationForm.querySelector('button[type="submit"]');
        const paypalButtonContainer = document.getElementById('paypal-button-container');
        const mobileMoneyMessage = document.getElementById('mobile-money-message');

        function updatePaymentUI() {
            const paymentMethod = document.querySelector('input[name="payment-method"]:checked').value;
            if (paymentMethod === 'paypal') {
                donateNowButton.style.display = 'none';
                paypalButtonContainer.style.display = 'block';
                mobileMoneyMessage.style.display = 'none';
            } else if (paymentMethod === 'mobile-money') {
                donateNowButton.style.display = 'inline-block';
                paypalButtonContainer.style.display = 'none';
                mobileMoneyMessage.style.display = 'none';
            }
        }

        // Initial UI update
        updatePaymentUI();

        // Listen for payment method changes
        donationForm.querySelectorAll('input[name="payment-method"]').forEach(radio => {
            radio.addEventListener('change', updatePaymentUI);
        });

        donationForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const messageDiv = document.getElementById('donation-message');
            messageDiv.textContent = '';
            mobileMoneyMessage.textContent = '';

            const paymentMethod = document.querySelector('input[name="payment-method"]:checked').value;
            const amount = document.getElementById('donation-amount').value.trim();

            if (!amount || isNaN(amount) || Number(amount) <= 0) {
                alert('Please enter a valid donation amount.');
                return;
            }

            if (paymentMethod === 'paypal') {
                // Programmatically click the PayPal button to start payment
                const paypalButton = document.querySelector('#paypal-button-container iframe');
                if (paypalButton) {
                    paypalButton.contentWindow.postMessage({ event: 'click' }, '*');
                } else {
                    alert('PayPal button is not ready yet. Please wait.');
                }
            } else if (paymentMethod === 'mobile-money') {
                mobileMoneyMessage.style.display = 'block';
                mobileMoneyMessage.textContent = 'Processing Mobile Money payment...';
                setTimeout(() => {
                    mobileMoneyMessage.textContent = 'Thank you for your Mobile Money donation of $' + amount + '!';
                    donationForm.reset();
                    mobileMoneyMessage.style.display = 'none';
                }, 2000);
            }
        });
    }

    // PayPal Buttons integration
    if (document.getElementById('paypal-button-container')) {
        paypal.Buttons({
            createOrder: function(data, actions) {
                let amount = document.getElementById('donation-amount').value;
                amount = amount.trim();
                if (!amount || isNaN(amount) || Number(amount) <= 0) {
                    alert('Please enter a valid donation amount.');
                    return;
                }
                return actions.order.create({
                    purchase_units: [{
                        amount: {
                            currency_code: 'USD',
                            value: amount
                        }
                    }]
                });
            },
            onApprove: function(data, actions) {
                return actions.order.capture().then(function(details) {
                    alert('Donation completed by ' + details.payer.name.given_name + '!');
                    const donationForm = document.getElementById('donation-form');
                    donationForm.reset();
                    const messageDiv = document.getElementById('donation-message');
                    messageDiv.textContent = '';
                });
            },
            onError: function(err) {
                alert('An error occurred during the transaction. Please try again.');
            }
        }).render('#paypal-button-container');
    }

    // Volunteer form submission handling
    const volunteerForm = document.getElementById('volunteer-form');
    if (volunteerForm) {
        volunteerForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const messageDiv = document.getElementById('volunteer-message');
            messageDiv.textContent = 'Submitting your volunteer application...';

            // Simulate async submission
            setTimeout(() => {
                messageDiv.textContent = 'Thank you for signing up to volunteer with us!';
                volunteerForm.reset();
            }, 1500);
        });
    }

    // FAQ toggle functionality
    const faqQuestions = document.querySelectorAll('.faqs dl dt');
    faqQuestions.forEach((question) => {
        question.addEventListener('click', () => {
            question.classList.toggle('active');
            const answer = question.nextElementSibling;
            if (answer.classList.contains('active')) {
                answer.classList.remove('active');
            } else {
                answer.classList.add('active');
            }
        });
    });

    // Ways to Help functionality
    const waysToHelpItems = document.querySelectorAll('.ways-to-help ul li');
    const descriptionDiv = document.getElementById('ways-to-help-description');

    waysToHelpItems.forEach(item => {
        item.addEventListener('click', () => {
            const description = item.getAttribute('data-description');
            descriptionDiv.innerHTML = `<p>${description}</p>`;
            // Highlight the selected item
            waysToHelpItems.forEach(i => i.classList.remove('selected'));
            item.classList.add('selected');
        });
    });
});

    // Contact form submission handling
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const statusDiv = document.getElementById('contact-message-status');
            statusDiv.textContent = 'Sending message...';

            // Simulate async submission
            setTimeout(() => {
                statusDiv.textContent = 'Thank you for contacting us! We will get back to you soon.';
                contactForm.reset();
            }, 1500);
        });
    }

    // Donation form submission handling
    const donationForm = document.getElementById('donation-form');
    if (donationForm) {
        const donateNowButton = donationForm.querySelector('button[type="submit"]');
        const paypalButtonContainer = document.getElementById('paypal-button-container');
        const mobileMoneyMessage = document.getElementById('mobile-money-message');

        function updatePaymentUI() {
            const paymentMethod = document.querySelector('input[name="payment-method"]:checked').value;
            if (paymentMethod === 'paypal') {
                donateNowButton.style.display = 'none';
                paypalButtonContainer.style.display = 'block';
                mobileMoneyMessage.style.display = 'none';
            } else if (paymentMethod === 'mobile-money') {
                donateNowButton.style.display = 'inline-block';
                paypalButtonContainer.style.display = 'none';
                mobileMoneyMessage.style.display = 'none';
            }
        }

        // Initial UI update
        updatePaymentUI();

        // Listen for payment method changes
        donationForm.querySelectorAll('input[name="payment-method"]').forEach(radio => {
            radio.addEventListener('change', updatePaymentUI);
        });

        donationForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const messageDiv = document.getElementById('donation-message');
            messageDiv.textContent = '';
            mobileMoneyMessage.textContent = '';

            const paymentMethod = document.querySelector('input[name="payment-method"]:checked').value;
            const amount = document.getElementById('donation-amount').value.trim();

            if (!amount || isNaN(amount) || Number(amount) <= 0) {
                alert('Please enter a valid donation amount.');
                return;
            }

            if (paymentMethod === 'paypal') {
                // Programmatically click the PayPal button to start payment
                const paypalButton = document.querySelector('#paypal-button-container iframe');
                if (paypalButton) {
                    paypalButton.contentWindow.postMessage({ event: 'click' }, '*');
                } else {
                    alert('PayPal button is not ready yet. Please wait.');
                }
            } else if (paymentMethod === 'mobile-money') {
                mobileMoneyMessage.style.display = 'block';
                mobileMoneyMessage.textContent = 'Processing Mobile Money payment...';
                setTimeout(() => {
                    mobileMoneyMessage.textContent = 'Thank you for your Mobile Money donation of $' + amount + '!';
                    donationForm.reset();
                    mobileMoneyMessage.style.display = 'none';
                }, 2000);
            }
        });
    }

    // PayPal Buttons integration
    if (document.getElementById('paypal-button-container')) {
        paypal.Buttons({
            createOrder: function(data, actions) {
                let amount = document.getElementById('donation-amount').value;
                amount = amount.trim();
                if (!amount || isNaN(amount) || Number(amount) <= 0) {
                    alert('Please enter a valid donation amount.');
                    return;
                }
                return actions.order.create({
                    purchase_units: [{
                        amount: {
                            currency_code: 'USD',
                            value: amount
                        }
                    }]
                });
            },
            onApprove: function(data, actions) {
                return actions.order.capture().then(function(details) {
                    alert('Donation completed by ' + details.payer.name.given_name + '!');
                    const donationForm = document.getElementById('donation-form');
                    donationForm.reset();
                    const messageDiv = document.getElementById('donation-message');
                    messageDiv.textContent = '';
                });
            },
            onError: function(err) {
                alert('An error occurred during the transaction. Please try again.');
            }
        }).render('#paypal-button-container');
    }

    // Volunteer form submission handling
    const volunteerForm = document.getElementById('volunteer-form');
    if (volunteerForm) {
        volunteerForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const messageDiv = document.getElementById('volunteer-message');
            messageDiv.textContent = 'Submitting your volunteer application...';

            // Simulate async submission
            setTimeout(() => {
                messageDiv.textContent = 'Thank you for signing up to volunteer with us!';
                volunteerForm.reset();
            }, 1500);
        });
    }

    // FAQ toggle functionality
    const faqQuestions = document.querySelectorAll('.faqs dl dt');
    faqQuestions.forEach((question) => {
        question.addEventListener('click', () => {
            question.classList.toggle('active');
            const answer = question.nextElementSibling;
            if (answer.classList.contains('active')) {
                answer.classList.remove('active');
            } else {
                answer.classList.add('active');
            }
        });
    });

    // Ways to Help functionality
    const waysToHelpItems = document.querySelectorAll('.ways-to-help ul li');
    const descriptionDiv = document.getElementById('ways-to-help-description');

    waysToHelpItems.forEach(item => {
        item.addEventListener('click', () => {
            const description = item.getAttribute('data-description');
            descriptionDiv.innerHTML = `<p>${description}</p>`;
            // Highlight the selected item
            waysToHelpItems.forEach(i => i.classList.remove('selected'));
            item.classList.add('selected');
        });
    });
});
