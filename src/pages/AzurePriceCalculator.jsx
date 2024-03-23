import React, { useState } from 'react';
import { useQuery, useAction, createCostEstimate, getCostEstimate } from 'wasp/client/operations';

const AzurePriceCalculatorPage = () => {
  const { data: costEstimate, isLoading, error } = useQuery(getCostEstimate);
  const createCostEstimateFn = useAction(createCostEstimate);
  const [awsCost, setAwsCost] = useState(0);
  const [isEnterprise, setIsEnterprise] = useState(false);

  const handleFormSubmit = () => {
    createCostEstimateFn({ awsCost, isEnterprise });
  };

  return (
    <div className='p-4'>
      <h1 className='text-3xl font-bold'>Azure Price Calculator</h1>
      <p className='text-gray-500'>Estimate your infrastructure costs when migrating to Azure.</p>
      <form onSubmit={handleFormSubmit} className='mt-4'>
        <input
          type='number'
          placeholder='AWS Cost ($/month)'
          className='px-1 py-2 border rounded text-lg'
          value={awsCost}
          onChange={(e) => setAwsCost(e.target.value)}
        />
        <label className='ml-2 text-lg'>
          <input
            type='checkbox'
            checked={isEnterprise}
            onChange={() => setIsEnterprise(!isEnterprise)}
          />
          Is Enterprise
        </label>
        <button
          type='submit'
          className='bg-blue-500 hover:bg-blue-700 px-4 py-2 text-white font-bold rounded mt-2'
        >
          Calculate
        </button>
      </form>
      {costEstimate && (
        <div className='mt-4'>
          <p>Estimated Azure Cost:</p>
          <p className='text-xl font-bold'>
            {isEnterprise ? awsCost * 9 : awsCost * 3}
          </p>
        </div>
      )}
    </div>
  );
}

export default AzurePriceCalculatorPage;