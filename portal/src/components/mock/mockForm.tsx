import React from "react";

const mockForm = () => {
  return (
    <div>
      <h1>Sign in</h1>
      <form>
        <input type="email" placeholder="Email" />
        <input type="password" placeholder="Password" />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default mockForm;
