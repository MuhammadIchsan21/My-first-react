import React, { useState, useEffect } from "react";
import axios from "axios";
// import { useParams } from "react-router-dom";
function Product() {
  /**
   * Jika menggunakan id di belakangnya
   * const { id } = useParams();
   * const url = `https://api.github.com/users/hacktivist123/${id}` */
  const url = "https://api.github.com/users/hacktivist123";
  const [user, setUser] = useState(null);

  let content = null;

  useEffect(() => {
    axios.get(url).then((response) => {
      setUser(response.data);
    });
  }, [url]);

  if (user) {
    content = (
      <div>
        <h1 className='text-2xl font-bold mb-3'>{user.name}</h1>
        <div>
          <img className='w-40 h-50' src={user.avatar_url} alt={user.name} />
        </div>
        <div className='font-bold text-xl mb-3'>{user.bio}</div>
      </div>
    );
  }
  return <div>{content}</div>;
}
export default Product;
