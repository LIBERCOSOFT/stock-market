import axios from 'axios';
import { stockProfileApiCall } from '../../redux/details/details';

jest.mock('axios');

it('returns the selected stock\'s details', async () => {
  const stockSymbol = 'AMZN';
  axios.get.mockResolvedValue({
    data: [
      {
        symbol: 'AMZN',
        price: 93.7899,
        beta: 1.232136,
        volAvg: 72610756,
        mktCap: 956816455844,
        lastDiv: 0,
        range: '85.87-181.675',
        changes: 0.5899,
        companyName: 'Amazon.com, Inc.',
        currency: 'USD',
        cik: '0001018724',
        isin: 'US0231351067',
        cusip: '023135106',
        exchange: 'NASDAQ Global Select',
        exchangeShortName: 'NASDAQ',
        industry: 'Internet Retail',
        website: 'https://www.amazon.com',
        description: 'Amazon.com, Inc. engages in the retail sale of consumer products and subscriptions in North America and internationally. The company operates through three segments: North America, International, and Amazon Web Services (AWS). It sells merchandise and content purchased for resale from third-party sellers through physical and online stores. The company also manufactures and sells electronic devices, including Kindle, Fire tablets, Fire TVs, Rings, and Echo and other devices; provides Kindle Direct Publishing, an online service that allows independent authors and publishers to make their books available in the Kindle Store; and develops and produces media content. In addition, it offers programs that enable sellers to sell their products on its websites, as well as its stores; and programs that allow authors, musicians, filmmakers, Twitch streamers, skill and app developers, and others to publish and sell content. Further, the company provides compute, storage, database, analytics, machine learning, and other services, as well as fulfillment, advertising, publishing, and digital content subscriptions. Additionally, it offers Amazon Prime, a membership program, which provides free shipping of various items; access to streaming of movies and series; and other services. The company serves consumers, sellers, developers, enterprises, and content creators. Amazon.com, Inc. was incorporated in 1994 and is headquartered in Seattle, Washington.',
        ceo: 'Mr. Andrew R. Jassy',
        sector: 'Consumer Cyclical',
        country: 'US',
        fullTimeEmployees: '1544000',
        phone: '12062661000',
        address: '410 Terry Ave N',
        city: 'Seattle',
        state: 'WASHINGTON',
        zip: '98109-5210',
        dcfDiff: 70.2796,
        dcf: 163.48,
        image: 'https://financialmodelingprep.com/image-stock/AMZN.png',
        ipoDate: '1997-05-01',
        defaultImage: false,
        isEtf: false,
        isActivelyTrading: true,
        isAdr: false,
        isFund: false,
      },
    ],
  });

  const selectedStock = await stockProfileApiCall(stockSymbol);
  expect(selectedStock.length).toBeGreaterThan(0);
  expect(selectedStock[0].symbol).toEqual(stockSymbol);
});
