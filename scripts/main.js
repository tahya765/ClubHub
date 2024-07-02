function redirectToEmptyPage() {
    var emailInput = document.getElementById('edu-email').value;
    var eduHunter = /^[a-zA-Z0-9._%+-]+@myhunter.cuny.edu$/;
    var eduBrooklyn= /^[a-zA-Z0-9._%+-]+@bcmail.cuny.edu$/;
    var eduStaten=/^[a-zA-Z0-9._%+-]+@csi.cuny.edu$/;
    var eduJohn=/^[a-zA-Z0-9._%+-]+@jjay.cuny.edu$/;
    var eduLehman=/^[a-zA-Z0-9._%+-]+@lc.cuny.edu$/;
    var eduMedgar=/^[a-zA-Z0-9._%+-]+@mec.cuny.edu$/;
    var eduCityTech=/^[a-zA-Z0-9._%+-]+@citytech.cuny.edu$/;
    var eduQueens=/^[a-zA-Z0-9._%+-]+@qmail.cuny.edu$/;
    var eduCCNY=/^[a-zA-Z0-9._%+-]+@citymail.cuny.edu$/;
    var eduYork=/^[a-zA-Z0-9._%+-]+@yorkmail.cuny.edu$/;
    var eduBaruch=/^[a-zA-Z0-9._%+-]+@baruchmail.cuny.edu$/;
  
    if (eduHunter.test(emailInput)) {
      window.location.href = 'hunter.html';
    } else if(eduBrooklyn.test(emailInput)){
      window.location.href='brooklyn.html';
    } else if(eduStaten.test(emailInput)){
      window.location.href='staten.html';
    }else if(eduJohn.test(emailInput)){
      window.location.href = 'john.html';
    }else if(eduLehman.test(emailInput)){
      window.location.href='lehman.html';
    }else if(eduMedgar.test(emailInput)){
      window.location.href= 'medgar.html';
    }else if(eduCityTech.test(emailInput)){
      window.location.href='ctech.html';
    }else if(eduQueens.test(emailInput)){
      window.location.href='queens.html';
    }else if(eduCCNY.test(emailInput)){
      window.location.href='ccny.html';
    }else if(eduYork.test(emailInput)){
      window.location.href='york.html';
    }else if(eduBaruch.test(emailInput)){
      window.location.href='baruch.html';
    }else{
      alert("Please enter a valid CUNY .edu email address.")
    }

  }

  document.addEventListener('DOMContentLoaded', () => {
    fetch('./data/data/hunter_clubs.json')  
      .then(response => response.json())
      .then(data => {
        const cardContainer = document.getElementById('card-container');
  
        data.forEach(club => {
          const card = document.createElement('div');
          card.className = 'card';
  
          const img = document.createElement('img');
          img.src = 'styles/purple.png'; 
          img.alt = club.Name;
  
          const cardContent = document.createElement('div');
          cardContent.className = 'card-content';
  
          const title = document.createElement('h1');
          title.textContent = club.Name;
  
          const description = document.createElement('p');
          description.textContent = club.Description;
  
          const button = document.createElement('a');
          button.href = '#';
          button.className = 'card-button';
          button.textContent = 'Join';
          button.addEventListener('click', (event) => {
            event.preventDefault(); 
            button.textContent = 'Joined! ⭐';
            button.classList.add('joined'); 
          });
  
          const button2 = document.createElement('a');
          button2.href = '#';
          button2.className = 'card-button';
          button2.textContent = 'Info 📝';
          button2.addEventListener('click', (event) => {
            event.preventDefault();
            card.classList.toggle('expanded');
  
            if (card.classList.contains('expanded')) {
              const adminLoginButton = document.createElement('button');
              adminLoginButton.textContent = 'Login as Admin';
              adminLoginButton.className = 'admin-login-button';
              adminLoginButton.href='#';
              adminLoginButton.style.cursor = 'pointer'; 
              adminLoginButton.addEventListener('click', () => {
                event.preventDefault();
                console.log('Admin wants to login');
                document.getElementById('adminLoginPopup').style.display = 'block';
                document.getElementById('adminLoginPopup').style.zIndex = '2000';

              });
              cardContent.appendChild(adminLoginButton);
            } else {
              const adminLoginButton = cardContent.querySelector('.admin-login-button');
              if (adminLoginButton) {
                adminLoginButton.remove();
              }
            }
          });
  
          cardContent.appendChild(title);
          cardContent.appendChild(description);
          cardContent.appendChild(button);
          cardContent.appendChild(button2); 
          card.appendChild(img);
          card.appendChild(cardContent);
          cardContainer.appendChild(card);
        });
      })
      .catch(error => {
        console.error('Error fetching JSON data:', error);
      });
      
      const closePopup = () => {
        document.getElementById('adminLoginPopup').style.display = 'none';
      };
    
      document.querySelector('.close').addEventListener('click', closePopup);
    
      window.addEventListener('click', (event) => {
        const popup = document.getElementById('adminLoginPopup');
        if (event.target === popup) {
          closePopup();
        }
      });
    
      document.getElementById('adminLoginForm').addEventListener('submit', (event) => {
        event.preventDefault();
        // Perform login logic here
        // For example, validate credentials and proceed accordingly
        console.log('Admin login form submitted');
        closePopup(); 
      });
    });