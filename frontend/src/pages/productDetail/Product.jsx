import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Header from '../../components/Header/Header';
import Detail from '../../components/Detail/Detail';

const Product = () => {
  const { id } = useParams(); // lấy id từ URL
  const [productBuffer, setProductBuffer] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await fetch(`https://shopee-rho-beryl.vercel.app/product/${id}`);
        // const response = await fetch(`http://localhost:5001/product/${id}`);
        if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
        const data = await response.json();
        setProductBuffer(data);
      } catch (err) {
        console.error("Lỗi khi truy xuất product: ", err);
        setError("Không thể tải sản phẩm.");
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  return (
    <div>
      <Header />
      <div className="body">
        {loading ? (
          <p>Đang tải sản phẩm...</p>
        ) : error ? (
          <p style={{ color: 'red' }}>{error}</p>
        ) : (
          <Detail data={productBuffer} />
        )}
      </div>
      <div className="copyright">
        © Copyright by HCMUS-HauProMax
      </div>
    </div>
  );
};

export default Product;
