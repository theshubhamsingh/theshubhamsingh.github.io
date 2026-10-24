// Select all elements with the 'glass' class
const glassCards = document.querySelectorAll('.glass');

// 1. Add 3D Tilt and Glare Effect to Glass Cards
glassCards.forEach((card) => {
  card.addEventListener('pointermove', (e) => {
    // Skip complex animations on touch devices for better performance
    if (e.pointerType === 'touch') return;
    
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    // Calculate percentages for mouse position
    const px = x / rect.width;
    const py = y / rect.height;
    
    // Update CSS variables for the glare position
    card.style.setProperty('--mx', `${px * 100}%`);
    card.style.setProperty('--my', `${py * 100}%`);
    
    // Calculate tilt angles (max 6 degrees)
    const tiltX = (0.5 - py) * 12;
    const tiltY = (px - 0.5) * 12;
    
    // Update CSS variables for the 3D rotation
    card.style.setProperty('--rx', `${tiltX}deg`);
    card.style.setProperty('--ry', `${tiltY}deg`);
  });

  // Reset card to flat position when mouse leaves
  card.addEventListener('pointerleave', () => {
    card.style.setProperty('--rx', '0deg');
    card.style.setProperty('--ry', '0deg');
  });
});

// 2. Add Subtle Parallax to Background Blobs
const bg = document.querySelector('.bg');
document.addEventListener('pointermove', (e) => {
  // Move the background slightly in the opposite direction of the mouse
  const x = (e.clientX / window.innerWidth - 0.5) * 40; 
  const y = (e.clientY / window.innerHeight - 0.5) * 40;
  
  bg.style.transform = `translate(${x}px, ${y}px)`;
});
