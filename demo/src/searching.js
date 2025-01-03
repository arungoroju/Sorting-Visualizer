import React, { useState, useRef, useEffect } from 'react';

const BinarySearchVisualizer = () => {
  const [array, setArray] = useState([]);
  const [target, setTarget] = useState('');
  const [steps, setSteps] = useState([]);
  const [currentStep, setCurrentStep] = useState(0);

  const canvasRef = useRef(null);

  useEffect(() => {
    if (canvasRef.current) {
      adjustCanvasSize();
      drawVisualization();
    }
  }, [steps, currentStep, array]);

  const handleArrayChange = (e) => {
    const arr = e.target.value.split(',').map(num => parseInt(num, 10));
    setArray(arr);
  };

  const handleTargetChange = (e) => {
    setTarget(parseInt(e.target.value, 10));
  };

  const visualizeBinarySearch = () => {
    const steps = binarySearchSteps(array, target);
    setSteps(steps);
    setCurrentStep(0);
  };

  const binarySearchSteps = (arr, target) => {
    let left = 0;
    let right = arr.length - 1;
    const steps = [];

    while (left <= right) {
      const mid = Math.floor((left + right) / 2);
      steps.push({ left, right, mid, value: arr[mid] });

      if (arr[mid] === target) {
        steps.push({ left, right, mid, value: arr[mid], found: true });
        return steps;
      }
      if (arr[mid] < target) {
        left = mid + 1;
      } else {
        right = mid - 1;
      }
    }

    steps.push({ left, right, found: false });
    return steps;
  };

  const adjustCanvasSize = () => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    const width = canvas.parentElement.offsetWidth; // Set width based on parent element
    const barWidth = width / (array.length * 2); // Adjust bar width

    canvas.width = width; // Set canvas width
  };

  const drawVisualization = () => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    const step = steps[currentStep];
    const width = canvas.width;
    const height = canvas.height;
    const barWidth = width / (array.length * 2); // Make bars fit within the canvas

    if (!step) return; // Avoid drawing if step is undefined

    ctx.clearRect(0, 0, width, height);
    ctx.font = '16px Arial';
    ctx.textAlign = 'center';

    array.forEach((value, index) => {
      const x = index * 2 * barWidth + barWidth; // Adjust x to spread bars out
      const barHeight = value * 5; // Adjust height for visibility
      ctx.fillStyle = step.mid === index ? 'orange' : 'lightblue';
      ctx.fillRect(x, height - barHeight, barWidth, barHeight);
      ctx.strokeRect(x, height - barHeight, barWidth, barHeight);
      ctx.fillStyle = 'black';
      ctx.fillText(value, x + barWidth / 2, height - barHeight - 10);
    });

    if (step.found) {
      ctx.fillStyle = 'green';
      ctx.fillText(`Target ${target} found at index ${step.mid}`, width / 2, 20);
    } else if (currentStep === steps.length - 1 && !step.found) {
      ctx.fillStyle = 'red';
      ctx.fillText(`Target ${target} not found`, width / 2, 20);
    } else {
      ctx.fillStyle = 'black';
      ctx.fillText(`Searching: Left=${step.left}, Right=${step.right}, Mid=${step.mid}`, width / 2, 20);
    }
  };

  return (
    <div style={{ display: 'flex', height: '100vh' }}>
      <div style={{ width: '300px', padding: '20px', borderRight: '1px solid #ddd', boxSizing: 'border-box' }}>
        <h2>Binary Search Visualizer</h2>
        <div>
          <label>Array (comma-separated): </label>
          <input
            type="text"
            onChange={handleArrayChange}
            style={{ margin: '5px', padding: '10px', border: '1px solid #ddd', borderRadius: '4px', width: '100%' }}
          />
        </div>
        <div>
          <label>Target: </label>
          <input
            type="number"
            onChange={handleTargetChange}
            style={{ margin: '5px', padding: '10px', border: '1px solid #ddd', borderRadius: '4px', width: '100%' }}
          />
        </div>
        <button
          onClick={visualizeBinarySearch}
          style={{ margin: '5px', padding: '10px', border: 'none', backgroundColor: '#007bff', color: '#fff', cursor: 'pointer', borderRadius: '4px', width: '100%' }}
        >
          Visualize
        </button>
        <div>
          <button
            onClick={() => setCurrentStep(currentStep > 0 ? currentStep - 1 : 0)}
            disabled={currentStep === 0}
            style={{ margin: '5px', padding: '10px', border: 'none', backgroundColor: '#007bff', color: '#fff', cursor: 'pointer', borderRadius: '4px', width: '100%', ...(currentStep === 0 ? { backgroundColor: '#ccc', cursor: 'not-allowed' } : {}) }}
          >
            Previous
          </button>
          <button
            onClick={() => setCurrentStep(currentStep < steps.length - 1 ? currentStep + 1 : steps.length - 1)}
            disabled={currentStep === steps.length - 1}
            style={{ margin: '5px', padding: '10px', border: 'none', backgroundColor: '#007bff', color: '#fff', cursor: 'pointer', borderRadius: '4px', width: '100%', ...(currentStep === steps.length - 1 ? { backgroundColor: '#ccc', cursor: 'not-allowed' } : {}) }}
          >
            Next
          </button>
        </div>
      </div>
      <div style={{ flex: 1, padding: '20px' }}>
        <canvas ref={canvasRef} height={400} style={{ border: '1px solid #ddd', width: '100%', height: '100%' }}></canvas>
      </div>
    </div>
  );
};

export default BinarySearchVisualizer;
