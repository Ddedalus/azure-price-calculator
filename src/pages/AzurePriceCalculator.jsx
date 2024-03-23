import { useState } from 'react';

const AzurePriceCalculatorPage = () => {
  let [azureCost, setAzureCost] = useState(null);
  const [awsCost, setAwsCost] = useState(0);
  const [isEnterprise, setIsEnterprise] = useState(false);

  const handleFormSubmit = () => {
    if (isEnterprise)
      setAzureCost(9 * awsCost);
    else
      setAzureCost(3 * awsCost);
  };

  return (
    <div className='p-4'>
      <p className='text-gray-500'>Estimate your infrastructure costs when migrating to Azure.</p>
      <h3 style={{padding: '1rem'}}>Existing costs</h3>
        <label className='ml-2 text-lg'
        style={{ padding: '1rem', marginRight: '1rem'}}
        >
        AWS cost ($/month):
        <input
          type='number'
          placeholder='AWS Cost ($/month)'
          className='px-1 py-2 border rounded text-lg'
          value={awsCost}
          onChange={(e) => setAwsCost(e.target.value)}
          />
          </label>
        <br></br>
        <h3 style={{padding: '1rem'}}>Additional requirements:</h3>
        <label className='ml-2 text-lg' style={{ padding: '1rem', marginRight: '1rem'}}>
          <input
            type='checkbox'
            checked={isEnterprise}
            onChange={() => setIsEnterprise(!isEnterprise)}
            style = {{ marginRight: '0.5rem'}}
          />
           I need the 'Enterprise' stuff
        </label>
        <br style={{ padding: '2rem'}}></br>
        <button
          type='button'
          className='bg-blue-500 hover:bg-blue-700 px-4 py-2 text-white font-bold rounded mt-2'
          style={{ cursor: 'pointer', padding: '1rem' }}
          onClick={handleFormSubmit}
        >
          Get my estimate!
        </button>
      <br></br>
      {azureCost !== null  && (
        <div className='mt-4'>
          <p>Cost after migration to Azure:</p>
          <p className='text-xl font-bold'>
          ${azureCost}/month
          </p>
        </div>
      )}
    </div>
  );
}

export default AzurePriceCalculatorPage;