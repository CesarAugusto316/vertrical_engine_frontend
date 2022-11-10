import { FC } from 'react';
import { Navbar } from './components';


export const App: FC = () => {
  return (
    <div className="app">
      <Navbar></Navbar>
      <main>

        <form action="" role="form">
          <label htmlFor="search"></label>
          <input type="text" name="search" id="search" />
        </form>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolore eum,
          laborum nemo quidem accusamus modi error suscipit earum a accusantium
          perferendis. Quas atque vitae officiis non! Voluptas sit sunt facilis!
        </p>
      </main>
    </div>
  );
};
