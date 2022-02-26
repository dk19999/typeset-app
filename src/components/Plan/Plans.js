import axios from 'axios';
import { useEffect, useState } from 'react';
import { getOffers, getPlans } from '../../services';
import Offer from './Offer';
import Plan from './Plan';
import './styles.css';

export default function Plans() {
  const [plans, setPlans] = useState([]);
  const [selectedPlanId, setSelectedPlanId] = useState(null);
  const [offers, setOffers] = useState([]);

  const onPlanClick = (id) => {
    setSelectedPlanId(id);
    getOffers(setOffers, id);
  };

  useEffect(() => {
    getPlans(setPlans);
  }, []);

  return (
    <>
      <div>
        <div className="plans-wrapper">
          {plans?.map((plan, index) => (
            <Plan
              onClick={(id) => onPlanClick(id)}
              planData={plan}
              isSelected={plan.id === selectedPlanId}
              key={plan.id}
            />
          ))}
        </div>

        {offers.length > 0 && (
          <div className="offers-wrapper">
            {offers?.map((offer, index) => (
              <Offer key={offer.id} offerData={offer} />
            ))}
          </div>
        )}
      </div>
    </>
  );
}
