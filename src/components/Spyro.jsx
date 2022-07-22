import React from "react";

const Spyro = () => {
  // const [host] = [...location.ancestorOrigins];
  // const path = host + "";

  // useEffect(() => {}, []);
  return (
    <>
      <div className="flex h-screen w-screen justify-center">
        <iframe
          title="BS3"
          src="http://localhost:3000/bs3/index.html"
          className="w-screen"
        ></iframe>
      </div>
    </>
  );
};

export default Spyro;
