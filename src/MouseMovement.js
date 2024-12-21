import gsap from 'gsap';

export const setupCanvas = (canvasRef) => {
  const canvas = canvasRef.current;
  const context = canvas.getContext('2d');
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  let prevX = null;
  let prevY = null;

  const colors = [
    '#773D98', '#7A3F9F', '#7E41A5', '#8143AB', '#8555B2', '#8857B8', '#8A59BE',
    '#8E5BC4', '#915DC9', '#935FD0', '#975FD6', '#9A61DC', '#9D63E2', '#A165E8',
    '#A467EE', '#A769F4', '#AA6AF8', '#AD6CFD', '#B06DFE', '#B370F3', '#B673F1',
    '#B976EE', '#BC78EB', '#BF7AE9', '#C17BE7', '#C47EE5', '#C780E3', '#C983E1',
    '#CB85DF', '#CE87DD', '#D18ADB', '#D48CC9', '#D78FBC', '#DA91B9', '#DD93B6',
    '#E196B3', '#E499B0', '#E79BBF', '#F3DDFF'
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
