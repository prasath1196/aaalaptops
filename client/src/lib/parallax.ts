export function initParallaxEffect() {
  const handleParallax = () => {
    const parallaxContainers = document.querySelectorAll('.parallax-container');
    
    parallaxContainers.forEach(container => {
      const parallaxBg = container.querySelector('.parallax-bg') as HTMLElement;
      if (!parallaxBg) return;
      
      const containerRect = container.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      
      // Check if container is in viewport
      if (containerRect.top < windowHeight && containerRect.bottom > 0) {
        // Calculate how far the container is scrolled into view as a percentage
        const scrollPercentage = (windowHeight - containerRect.top) / (windowHeight + containerRect.height);
        
        // Apply the parallax effect
        const translateY = scrollPercentage * 50; // 50px is the maximum amount of movement
        parallaxBg.style.transform = `translateY(${translateY}px)`;
      }
    });
  };

  // Apply parallax on scroll
  window.addEventListener('scroll', handleParallax);
  
  // Initial call to set positions
  handleParallax();

  // Add CSS rules for parallax containers
  const style = document.createElement('style');
  style.innerHTML = `
    html {
      scroll-behavior: smooth;
    }
    
    .parallax-container {
      overflow: hidden;
      position: relative;
    }
    
    .parallax-bg {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 130%;
      background-position: center;
      background-size: cover;
      transform: translateY(0);
      z-index: -1;
    }
    
    .glass {
      background: rgba(255, 255, 255, 0.9);
      backdrop-filter: blur(5px);
      -webkit-backdrop-filter: blur(5px);
    }
    
    .service-card {
      transition: transform 0.3s ease, box-shadow 0.3s ease;
    }
    
    .service-card:hover {
      transform: translateY(-5px);
      box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
    }
    
    /* Additional font styles */
    .font-montserrat {
      font-family: 'Montserrat', sans-serif;
    }
    
    .font-opensans {
      font-family: 'Open Sans', sans-serif;
    }
    
    .font-roboto {
      font-family: 'Roboto', sans-serif;
    }
    
    /* Color variables */
    :root {
      --color-primary: #E30613;
      --color-secondary: #111111;
      --color-light: #F8F8F8;
    }
  `;
  document.head.appendChild(style);

  return () => {
    window.removeEventListener('scroll', handleParallax);
    document.head.removeChild(style);
  };
}
