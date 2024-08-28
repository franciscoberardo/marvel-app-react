import marvelLogo from '../assets/marvel.png';

export default function Header() {
  return (
    <div className='bg-black'>
      <div className="flex justify-center w-full">
        <img src={marvelLogo} alt="Marvel Logo" className="w-64 h-auto"/>
      </div>
    </div>
  );
}
