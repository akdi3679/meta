export default function Loading() {
  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-white">
      <div className="relative h-16 w-16">
        <div className="absolute inset-0 rounded-full border-4 border-blue-600/20"></div>
        <div className="absolute inset-0 rounded-full border-4 border-transparent border-t-blue-600 animate-spin"></div>
      </div>
    </div>
  );
}