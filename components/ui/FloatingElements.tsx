export function FloatingElements() {
  return (
    <div className="fixed inset-0 pointer-events-none z-0">
      <div className="absolute top-20 left-10 w-4 h-4 bg-blue-400 rounded-full animate-float opacity-60"></div>
      <div className="absolute top-40 right-20 w-6 h-6 bg-green-400 rounded-full animate-float-delayed opacity-60"></div>
      <div className="absolute bottom-40 left-20 w-3 h-3 bg-purple-400 rounded-full animate-float opacity-60"></div>
      <div className="absolute bottom-20 right-10 w-5 h-5 bg-blue-500 rounded-full animate-float-delayed opacity-60"></div>

      {/* Add more floating elements for a more impressive effect */}
      <div className="absolute top-[30%] left-[15%] w-2 h-2 bg-purple-300 rounded-full animate-float opacity-40"></div>
      <div className="absolute top-[70%] right-[25%] w-3 h-3 bg-blue-300 rounded-full animate-float-delayed opacity-50"></div>
      <div className="absolute top-[45%] left-[80%] w-4 h-4 bg-green-300 rounded-full animate-float opacity-30"></div>
    </div>
  );
}
