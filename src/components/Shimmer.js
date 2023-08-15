const Shimmer = () => {
  return (
    <div className="flex flex-wrap mt-52">
      {Array(20)
        .fill("  ")
        .map((e, index) => (
          <div key={index} className="w-72 h-64 m-2 bg-slate-200"></div>
        ))}
    </div>
  );
};

export default Shimmer;
