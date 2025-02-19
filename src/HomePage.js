import './App.css';

function HomePage() {
  return (
    <div className='background'>
      <div className="fade-in-text">
        <h1>Hi, I am Troy Hinckley</h1>
      </div>
      <div className='container-3'>
        <div className="fade-slide">
          <p className='centered-text'>Let me take you on a tour of my work</p>

          <img src="/fullsail 01.jpg" alt="Description" className="responsive-image-3"/>
        </div>
      </div>
    </div>
  );
}

export default HomePage;