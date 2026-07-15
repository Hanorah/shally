export default function BlurBlobs() {
  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden" aria-hidden>
      <div
        className="absolute top-[5%] left-[8%] h-[300px] w-[300px] blur-[40px]"
        style={{
          background:
            "radial-gradient(circle, rgba(180,180,180,0.12) 0%, transparent 70%)",
        }}
      />
      <div
        className="absolute top-[8%] right-[10%] h-[250px] w-[250px] blur-[40px]"
        style={{
          background:
            "radial-gradient(circle, rgba(180,180,180,0.12) 0%, transparent 70%)",
        }}
      />
      <div
        className="absolute top-[30%] left-1/2 h-[400px] w-[600px] -translate-x-1/2 blur-[60px]"
        style={{
          background:
            "radial-gradient(circle, rgba(160,160,160,0.08) 0%, transparent 70%)",
        }}
      />
    </div>
  );
}
