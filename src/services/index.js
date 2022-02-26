import axios from 'axios';

export const getOffers = (setOffers, id) => {
    axios({
        method: 'GET',
        url: 'https://my-json-server.typicode.com/TypesetIO/mock/offers',
      }).then((res) => {
        const allOffers = res.data;
        const offers = allOffers.filter(offer => offer.planId === id)
        setOffers(offers)}
      );

}

export const getPlans = (setPlans) => {

    axios({
        method: 'GET',
        url: 'https://my-json-server.typicode.com/TypesetIO/mock/plans',
      }).then((res) => setPlans(res.data));

}
