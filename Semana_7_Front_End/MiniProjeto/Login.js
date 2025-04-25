const temas = {

    paubrasil: {
      '--background-img': "url('./IMG/Paubrasil1.jpg')", 
      '--background-color': 'rgba(255, 255, 255, 0.52)', 
      '--text-color': 'white',
      '--primary-color': '#cf3939', 
      '--secondary-color': '#ffffff'
    },

    castanheira: {
      '--background-img': "url('./IMG/Castanheira1.jpg')",
      '--background-color': 'rgba(255, 255, 255, 0.52)',  
      '--text-color': 'white',
      '--primary-color': '#422d2d', 
      '--secondary-color': '#ffffff'
    },

    perobarosa: {
      '--background-img': "url('./IMG/Perobarosa1.jpg')", 
      '--background-color': 'rgba(255, 255, 255, 0.52)', 
      '--text-color': 'white',
      '--primary-color': '#df3b6c', 
      '--secondary-color': '#ffffff'
    }
  };

  document.querySelectorAll('.theme-option').forEach(btn => {
    btn.addEventListener('click', () => {
      const tema = temas[btn.dataset.theme];
      for (let variavel in tema) {
        document.documentElement.style.setProperty(variavel, tema[variavel]);
      }
      document.getElementById('msg-theme').textContent = `Tema: ${btn.dataset.theme}`;
    });
  });