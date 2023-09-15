import * as React from 'react';

import Coffee from '@/assets/images/coffee.jpg';

import './index.less';

const App: React.FC = () => {
  return (
    <div className='wrapper'>
      hello 小7
      <div>777777</div>
      <img src={Coffee} width={200} height={100} />
    </div>
  );
};

export default App;
