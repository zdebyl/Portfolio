import gsap from 'gsap';

export const setupCanvas = (canvasRef) => {
  const canvas = canvasRef.current;
  const context = canvas.getContext('2d');

  const colors = ['#650f89', '#773D98', '#8E54AF', '#F3DDFF'];

  let prevX = null;
  let prevY = null;

  // Function to resize the canvas
  const resizeCanvas = () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  };

  // Initial setup
  resizeCanvas();

  // Function to handle mouse movement
  const handleMouseMove = (event) => {
    const x = event.clientX;
    const y = event.clientY;

    if (prevX !== null && prevY !== null) {
      const gradient = context.createLinearGradient(prevX, prevY, x, y);
      gradient.addColorStop(0, colors[0]);
      gradient.addColorStop(1, colors[colors.length - 1]);

      gsap.to({}, {
        duration: 0.08,
        onUpdate: () => {
          context.clearRect(0, 0, canvas.width, canvas.height);

          const cpX = (prevX + x) / 2;
          const cpY = (prevY + y) / 2;

          context.beginPath();
          context.moveTo(prevX, prevY);
          context.quadraticCurveTo(cpX, cpY, x, y);
          context.strokeStyle = gradient;
          context.lineWidth = 4;
          context.lineCap = 'round';
          context.stroke();
        },
        onComplete: () => {
          prevX = x;
          prevY = y;
        },
      });
    } else {
      prevX = x;
      prevY = y;
    }
  };

  // Add event listeners
  window.addEventListener('mousemove', handleMouseMove);
  window.addEventListener('resize', resizeCanvas);

  // Cleanup on unmount
  return () => {
    window.removeEventListener('mousemove', handleMouseMove);
    window.removeEventListener('resize', resizeCanvas);
  };
};
