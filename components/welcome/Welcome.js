import React from "react";

function Welcome({ page }) {
  return (
    <div className="bg-[url('https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8aG9tZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60')] h-screen bg-no-repeat bg-cover bg-[#00000099] bg-blend-overlay flex items-center justify-center">
      <h2 className="text-white md:text-[180px] text-[80px]">{page}</h2>
    </div>
  );
}

export default Welcome;

// classname too long now, let's fold them
