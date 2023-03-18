import { faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link } from 'react-router-dom';

interface Props {
  title: string;
  price: string;
  features: string[];
  picture: string
}

const Card: React.FC<Props> = ({ title, price, features,  picture }) => {

  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden">
      <img src={picture } alt={ title } className="w-full" />
      <div className="px-6 py-4">
        <h2 className="font-medium text-lg mb-2">{ title }</h2>
        <h3 className="font-medium text-xl mb-2">{ price }</h3>
        <ul>
          { features.map((feature, index) => (
            <li key={ index } className="text-sm mb-2">{ feature }</li>
          )) }
        </ul>
      </div>
      <div className="px-6 py-4">
        <Link to="/gallery" className="bg-blue-500 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-full">
          Learn More
        </Link>
      </div>
    </div>
  );
};

const cards = [    {      title: 'Basic Plan',      price: '$9.99',      features: ['1 User', '100 GB Storage', 'Limited Support'],
      picture: '/images/image1.jpg',
    },
    {
      title: 'Pro Plan',
      price: '$19.99',
      features: ['10 Users', '1 TB Storage', '24/7 Support'],
      picture: '/images/image2.jpg',
    },
    {
      title: 'Enterprise Plan',
      price: '$49.99',
      features: ['Unlimited Users', '10 TB Storage', 'Priority Support'],
      picture: 'https://via.placeholder.com/500x300',
    },
    {
      title: 'Basic Plan',
      price: '$9.99',
      features: ['1 User', '100 GB Storage', 'Limited Support'],
      picture: 'https://via.placeholder.com/500x300',
    },
    {
      title: 'Pro Plan',
      price: '$19.99',
      features: ['10 Users', '1 TB Storage', '24/7 Support'],
      picture: 'https://via.placeholder.com/500x300',
    },
    {
      title: 'Enterprise Plan',
      price: '$49.99',
      features: ['Unlimited Users', '10 TB Storage', 'Priority Support'],
      picture: 'https://via.placeholder.com/500x300',
    },
    {
      title: 'Basic Plan',
      price: '$9.99',
      features: ['1 User', '100 GB Storage', 'Limited Support'],
      picture: 'https://via.placeholder.com/500x300',
    },
    {
      title: 'Pro Plan',
      price: '$19.99',
      features: ['10 Users', '1 TB Storage', '24/7 Support'],
      picture: 'https://via.placeholder.com/500x300',
    },
    {
      title: 'Enterprise Plan',
      price: '$49.99',
      features: ['Unlimited Users', '10 TB Storage', 'Priority Support'],
      picture: 'https://via.placeholder.com/500x300',
    },
    {
      title: 'Basic Plan',
      price: '$9.99',
      features: ['1 User', '100 GB Storage', 'Limited Support'],
      picture: 'https://via.placeholder.com/500x300',
    },
  ];


const PricingCard = () => {
  return (
    <div className="flex flex-col items-center">
    <div className="flex flex-wrap justify-center max-w-xl">
         {cards.map((card, index) => (
          <div key={index} className="w-1/2 p-4">
            <Card {...card}
            />
       </div>
        ))}
      </div>
      </div>
   
  );
  
};


export default PricingCard;

