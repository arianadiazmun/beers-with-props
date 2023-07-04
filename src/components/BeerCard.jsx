export default function BeerCard ({name, image, avgRating,setSelectedBeer}) {
    return (
    <div className="beer-card" onClick={() => setSelectedBeer (name)}>
       <div className="beer-image">
       <img src={image} alt={name} 
       onError={(e)=> {
        e.target.onError = null;
        e.target.src = 'https://www.totalwine.com/media/sys_master/cmsmedia/hff/h0e/8979036078110.png'
       } }
       />
       
    </div>
    <h2>{name}</h2>
    <div className="rating">
        <p className="yellow-stars" style={{ width: avgRating + 'em'}}>⭐️⭐️⭐️⭐️⭐️</p>
      </div>
    </div>

)}