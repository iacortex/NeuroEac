export function BackgroundLayout() {
  return (
    <>
      <div className="absolute inset-0 -z-10 h-full w-full bg-blue-600">
        <div className="absolute h-full bottom-0 left-0 right-0 top-0 bg-[radial-gradient(circle_1200px_at_100%_300px,#7F86A3,transparent)]"></div>
        {/* <div className="absolute h-full bottom-0 left-0 right-0 top-0 bg-[radial-gradient(circle_500px_at_100%_100px,#CA0D2E,transparent)]"></div> */}
      </div>
    </>
  );
}
