import React, { useState, useRef, useEffect } from 'react';
import { Dialog, DialogContent } from './ui/dialog';
import { Button } from './ui/button';
import { X, RotateCw, Move } from 'lucide-react';

const RoomVisualization3D = ({ open, onClose, product }) => {
  const [rotateY, setRotateY] = useState(-20);
  const [rotateX, setRotateX] = useState(10);
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 });
  const roomRef = useRef(null);

  const handleReset = () => {
    setRotateY(-20);
    setRotateX(10);
  };

  const handleMouseDown = (e) => {
    setIsDragging(true);
    setDragStart({ x: e.clientX, y: e.clientY });
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    
    const deltaX = e.clientX - dragStart.x;
    const deltaY = e.clientY - dragStart.y;
    
    setRotateY(prev => prev + deltaX * 0.5);
    setRotateX(prev => Math.max(-30, Math.min(30, prev - deltaY * 0.3)));
    setDragStart({ x: e.clientX, y: e.clientY });
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  useEffect(() => {
    if (isDragging) {
      document.addEventListener('mousemove', handleMouseMove);
      document.addEventListener('mouseup', handleMouseUp);
      return () => {
        document.removeEventListener('mousemove', handleMouseMove);
        document.removeEventListener('mouseup', handleMouseUp);
      };
    }
  }, [isDragging, dragStart]);

  if (!product) return null;

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="max-w-6xl h-[80vh] p-0 overflow-hidden">
        <div className="relative w-full h-full bg-gradient-to-b from-gray-100 to-gray-200">
          {/* Header */}
          <div className="absolute top-0 left-0 right-0 z-10 bg-white/90 backdrop-blur-sm border-b p-4 flex items-center justify-between">
            <div>
              <h3 className="text-lg font-semibold text-gray-900">{product.name}</h3>
              <p className="text-sm text-gray-600">
                3D Room Visualization - {product.size} | {product.type}
              </p>
            </div>
            <div className="flex items-center gap-2">
              <Button variant="outline" size="sm" onClick={handleReset}>
                <RotateCw size={16} className="mr-2" />
                Reset View
              </Button>
              <Button variant="ghost" size="icon" onClick={onClose}>
                <X size={20} />
              </Button>
            </div>
          </div>

          {/* 3D Room Visualization */}
          <div 
            ref={roomRef}
            className="w-full h-full flex items-center justify-center perspective-[1200px] cursor-grab active:cursor-grabbing"
            onMouseDown={handleMouseDown}
            style={{ perspective: '1200px' }}
          >
            <div 
              className="relative transition-transform duration-100"
              style={{
                transform: `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`,
                transformStyle: 'preserve-3d',
                width: '600px',
                height: '400px'
              }}
            >
              {/* Floor */}
              <div 
                className="absolute w-full h-full"
                style={{
                  transform: 'rotateX(90deg) translateZ(-200px)',
                  transformStyle: 'preserve-3d',
                  backgroundImage: `url(${product.image})`,
                  backgroundSize: '150px 150px',
                  backgroundRepeat: 'repeat',
                  boxShadow: 'inset 0 0 50px rgba(0,0,0,0.1)'
                }}
              />

              {/* Back Wall */}
              <div 
                className="absolute w-full h-full bg-gray-100"
                style={{
                  transform: 'translateZ(-200px)',
                  transformStyle: 'preserve-3d',
                  boxShadow: 'inset 0 0 30px rgba(0,0,0,0.1)'
                }}
              >
                {/* Window */}
                <div className="absolute top-10 right-20 w-40 h-32 bg-gradient-to-b from-sky-300 to-sky-100 rounded-lg shadow-inner border-4 border-white" />
              </div>

              {/* Left Wall */}
              <div 
                className="absolute w-full h-full bg-gray-50"
                style={{
                  transform: 'rotateY(90deg) translateZ(-300px)',
                  transformStyle: 'preserve-3d',
                  boxShadow: 'inset 0 0 30px rgba(0,0,0,0.1)'
                }}
              />

              {/* Right Wall - with tile texture */}
              <div 
                className="absolute w-full h-full"
                style={{
                  transform: 'rotateY(-90deg) translateZ(-300px)',
                  transformStyle: 'preserve-3d',
                  backgroundImage: `url(${product.image})`,
                  backgroundSize: '100px 100px',
                  backgroundRepeat: 'repeat',
                  boxShadow: 'inset 0 0 30px rgba(0,0,0,0.05)'
                }}
              />

              {/* Furniture - Sofa */}
              <div 
                className="absolute w-48 h-20 bg-gray-700 rounded-lg"
                style={{
                  transform: 'translateZ(-150px) translateX(-100px) translateY(160px)',
                  transformStyle: 'preserve-3d',
                  boxShadow: '0 10px 30px rgba(0,0,0,0.3)'
                }}
              >
                {/* Sofa back */}
                <div className="absolute w-full h-24 bg-gray-600 rounded-t-lg" style={{ transform: 'translateY(-20px) translateZ(-10px)' }} />
              </div>

              {/* Coffee Table */}
              <div 
                className="absolute w-32 h-12 bg-amber-800 rounded"
                style={{
                  transform: 'translateZ(-80px) translateX(-50px) translateY(180px)',
                  transformStyle: 'preserve-3d',
                  boxShadow: '0 8px 20px rgba(0,0,0,0.3)'
                }}
              />

              {/* Plant */}
              <div 
                className="absolute w-12 h-12 bg-green-600 rounded-full"
                style={{
                  transform: 'translateZ(-160px) translateX(120px) translateY(170px)',
                  transformStyle: 'preserve-3d',
                  boxShadow: '0 5px 15px rgba(0,0,0,0.2)'
                }}
              >
                <div className="absolute w-10 h-16 bg-amber-700 rounded-full bottom-0 left-1" style={{ transform: 'translateZ(-5px)' }} />
              </div>
            </div>
          </div>

          {/* Instructions */}
          <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm rounded-lg p-3 text-xs text-gray-700 shadow-lg">
            <div className="font-semibold mb-2 flex items-center gap-2">
              <Move size={14} />
              Controls:
            </div>
            <ul className="space-y-1">
              <li>• <strong>Rotate:</strong> Click and drag to rotate the room</li>
              <li>• <strong>Reset:</strong> Click &quot;Reset View&quot; to return to default</li>
            </ul>
          </div>

          {/* Product Info */}
          <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-sm rounded-lg p-4 shadow-lg max-w-xs">
            <div className="text-sm font-semibold text-gray-900 mb-2">Product Details</div>
            <div className="space-y-1 text-xs text-gray-700">
              <div><strong>Size:</strong> {product.size}</div>
              <div><strong>Type:</strong> {product.type}</div>
              <div><strong>Price:</strong> <span className="text-[#FF8C00] font-bold">{product.price}</span></div>
            </div>
            <Button className="w-full mt-3 bg-[#FF8C00] hover:bg-[#FF7700] text-white">
              Add to Cart
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default RoomVisualization3D;
