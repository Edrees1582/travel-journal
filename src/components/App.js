import Header from './Header';
import Card from './Card';

import data from '../data';

export default function App() {
    const cards = data.map(d => {
        return <Card key={d.title} {...d} />
    });

    return (
        <div>
          <Header />
          <div className='cards'>
            {cards}
          </div>
        </div>
    );
}