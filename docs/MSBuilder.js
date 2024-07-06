/* 
MSBuilder.js

Made by AstraxVZ
Version 1.1.0
*/

window.MSBuilder = {
    createPage: function(title, ctTitle, sections, footerTxt, useParticles) {
        window.onload = function() {
            const head = document.head;

            const metaCharset = document.createElement('meta');
            metaCharset.setAttribute('charset', 'UTF-8');
            head.appendChild(metaCharset);

            const metaViewport = document.createElement('meta');
            metaViewport.setAttribute('name', 'viewport');
            metaViewport.setAttribute('content', 'width=device-width, initial-scale=1.0');
            head.appendChild(metaViewport);

            const titleElement = document.createElement('title');
            titleElement.textContent = title;
            head.appendChild(titleElement);

            const linkFont = document.createElement('link');
            linkFont.setAttribute('href', 'https://fonts.googleapis.com/css?family=Poppins');
            linkFont.setAttribute('rel', 'stylesheet');
            head.appendChild(linkFont);

            const linkStyleSheet = document.createElement('link');
            linkStyleSheet.setAttribute('rel', 'stylesheet');
            linkStyleSheet.setAttribute('href', 'style.css');
            head.appendChild(linkStyleSheet);

            if (useParticles) {
                const scriptParticles = document.createElement('script');
                scriptParticles.setAttribute('src', 'https://cdn.jsdelivr.net/gh/VincentGarreau/particles.js@latest/particles.js');
                head.appendChild(scriptParticles);

                scriptParticles.onload = function() {
                    particlesJS.load('particles-js', 'particles.json', function() {
                        console.log('particles.js loaded - callback');
                    });
                };
            }

            const body = document.body;
            body.style.fontFamily = 'Poppins, sans-serif';
            body.style.background = 'linear-gradient(to bottom, lightblue, #ffe6e6)';
            body.style.backgroundAttachment = 'fixed';
            body.style.margin = '0';
            body.style.padding = '20px';
            body.style.display = 'flex';
            body.style.flexDirection = 'column';
            body.style.alignItems = 'center';

            if (useParticles) {
                const particlesDiv = document.createElement('div');
                particlesDiv.className = 'particles-js';
                particlesDiv.id = 'particles-js';
                body.appendChild(particlesDiv);
            }

            const contentContainer = document.createElement('div');
            contentContainer.className = 'content-container';
            body.appendChild(contentContainer);

            const contentsTitle = document.createElement('h1');
            contentsTitle.textContent = ctTitle;
            contentContainer.appendChild(contentsTitle);

            contentContainer.appendChild(document.createElement('hr'));

            sections.forEach(section => {
                const sectionTitle = document.createElement('h2');
                sectionTitle.textContent = section.title;
                const sectionContent = document.createElement('p');
                sectionContent.textContent = section.content;
                contentContainer.appendChild(sectionTitle);
                contentContainer.appendChild(sectionContent);
                contentContainer.appendChild(document.createElement('hr'));
            });

            const footer = document.createElement('footer');
            const footerText = document.createElement('p');
            footerText.textContent = footerTxt;
            footer.appendChild(footerText);
            contentContainer.appendChild(footer);
        };
    }
};
