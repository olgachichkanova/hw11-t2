import { useSelector } from 'react-redux';
import './App.css';
import AddImage from './components/AddImage';
import Image from './components/Image';
import List from './components/List';

function App() {
  const images = useSelector(state => state.images)
  console.log(images)
  return (
    <div className="App">
      <AddImage />
      <div className='container wrapper'>
        <div>
          <h2>Your current image:</h2>
          <Image image={images[0]} />
        </div>
        <List data={images} />
      </div>
    </div>
  );
}

export default App;
