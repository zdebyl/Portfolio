import gsap from 'gsap';

export const setupCanvas = (canvasRef) => {
  const canvas = canvasRef.current;
  const context = canvas.getContext('2d');
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  let prevX = null;
  let prevY = null;

  const colors = [
    '#650f89', '#773D98', '#8E54AF', '#F3DDFF'
  ];

  // Function to handle mouse movement
  const handleMouseMove = (event) => {
    const x = event.clientX;
    const y = event.clientY;

    // If there was a previous position, create a curved laser line
    if (prevX !== null && prevY !== null) {
      const gradient = context.createLinearGradient(prevX, prevY, x, y);
      gradient.addColorStop(0, colors[0]); // Start color
      gradient.addColorStop(1, colors[colors.length - 1]); // End color

      // Use gsap to animate the drawing of the curve
      gsap.to({}, {
        duration: 0.08, // Animation duration
        onUpdate: () => {
          context.clearRect(0, 0, canvas.width, canvas.height); // Clear previous lines

          // Calculate control points for a quadratic curve
          const cpX = (prevX + x) / 2; // Control point X (midpoint for a simple curve)
          const cpY = (prevY + y) / 2; // Control point Y (midpoint for a simple curve)

          // Draw a quadratic curve
          context.beginPath();
          context.moveTo(prevX, prevY); // Start from the previous mouse position
          context.quadraticCurveTo(cpX, cpY, x, y); // Draw a curve to the current mouse position
          context.strokeStyle = gradient;
          context.lineWidth = 4; // Line width for laser effect
          context.lineCap = 'round'; // Smooth edges
          context.stroke();
        },
        onComplete: () => {
          // After animation, update the previous position
          prevX = x;
          prevY = y;
        },
      });
    } else {
      // Set the initial position on the first mouse move
      prevX = x;
      prevY = y;
    }
  };

  // Event listener for mousemove
  window.addEventListener('mousemove', handleMouseMove);

  // Cleanup event listener on unmount
  return () => {
    window.removeEventListener('mousemove', handleMouseMove);
  };
};
