import React from "react";

const cardsData = [
  {
    name: 'basic',
    plan: '100GB',
    price: '$1.99/Month',
    storage: '100 GB of storage',
    members: 'Option to add members',
    benefits: 'Extra member benefits',
    borderColor: 'border-slate-700',
  },
  {
    name: 'standard',
    plan: '200GB',
    price: '$3.99/Month',
    storage: '200 GB of storage',
    members: 'Option to add members',
    benefits: 'Extra member benefits',
    borderColor: 'border-violet-700',
  },
  {
    name: 'premium',
    plan: '2 TB',
    price: '$8.99/Month',
    storage: '2 TB of storage',
    members: 'Option to add members',
    benefits: 'Extra member benefits',
    borderColor: 'border-slate-700',
  },
]

const cards = () => {
  return (
    <div className="flex bg-slate-800 min-h-screen justify-center items-center ">
      <div className="flex flex-row flex-wrap gap-6 justify-center items-center ">
        {cardsData.map((card) => (
          <div className={`border-8 flex items-center flex-col p-5  text-white text-sm rounded-lg ${card.borderColor}`}>
            <div>
              <div className="p-4">{card.name}</div>
            </div>
            <div className="font-serif text-5xl"> {card.plan}</div>
            <div className="p-2">{card.price}</div>
            <button>
              <div className="p-6">
                <div className="border pl-8 pr-8 pt-3 pb-3 border-purple-700 hover:bg-purple-600 duration-500 text-white rounded-lg ">
                  Purchase
                </div>
              </div>
            </button>
            <div className="border-t-2 p-6 text-sm">
              <div className="p-1">{card.storage}</div>
              <div className="p-1">{card.members}</div>
              <div className="p-1">{card.benefits}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default cards;
