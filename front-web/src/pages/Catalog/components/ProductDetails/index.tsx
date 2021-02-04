import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { ReactComponent as ArrowIcon } from 'core/assets/images/arrow.svg';
import ProductPrice from 'core/components/ProductPrice';
import { makeRequest } from 'core/utils/request';
import { Product } from 'core/types/Product';
import './styles.scss';
import ProductDescriptionLoader from '../Loaders/ProductDescriptionLoader';

type ParamsType = {
  productId: string;
}

const ProductDetails = () => {
  const { productId } = useParams<ParamsType>();
  const [product, setProduct] = useState<Product>();
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    setIsLoading(true);
    makeRequest({ url: `/products/${productId}` })
      .then(response => setProduct(response.data))
      .finally(() => setIsLoading(false));
    console.log(productId)
  }, [productId]);

  return (
    <div className="product-detail-container">
      <div className="card-base border-radius-20 product-details">
        <Link to="/products" className="product-details-goback">
          <ArrowIcon className="icon-goback" />
          <h1 className="text-goback">VOLTAR</h1>
        </Link>
        <div className="row">
          <div className="col-6 pr-5">
            {isLoading ? <ProductDescriptionLoader /> : (
              <>
                <div className="product-details-card text-center">
                  <img className="product-details-image" src={product?.imgUrl} alt={product?.name} />
                </div>
                <h1 className="product-details-name">
                  {product?.name}
                </h1>
                {product?.price && <ProductPrice price={product?.price} />}
              </>
            )}
          </div>
          <div className="col-6 product-details-card">
            {isLoading ? <ProductDescriptionLoader /> : (
              <>
                <h1 className="product-description-title">
                  Descrição do produto
                            </h1>
                <p className="product-description-text">
                  {product?.description}
                </p>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;