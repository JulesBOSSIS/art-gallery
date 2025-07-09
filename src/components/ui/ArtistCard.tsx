import { Link } from 'react-router-dom';
import './ArtistCard.scss';

export interface Artist {
  id: string;
  name: string;
  bio: string;
  birthYear: number;
  nationality: string;
  style: string;
  image: string;
  artworksCount: number;
}

interface ArtistCardProps {
  artist: Artist;
}

const ArtistCard = ({ artist }: ArtistCardProps) => {
  return (
    <div className="artist-card">
      <div className="artist-card__image">
        <img src={artist.image} alt={artist.name} />
      </div>
      
      <div className="artist-card__content">
        <h3 className="artist-card__name">{artist.name}</h3>
        <p className="artist-card__nationality">{artist.nationality}</p>
        <p className="artist-card__birth-year">Né en {artist.birthYear}</p>
        <p className="artist-card__style">{artist.style}</p>
        <p className="artist-card__bio">{artist.bio}</p>
        <p className="artist-card__artworks-count">
          {artist.artworksCount} œuvre{artist.artworksCount > 1 ? 's' : ''}
        </p>
        
        <Link to={`/artist/${artist.id}`} className="artist-card__link">
          Voir le profil
        </Link>
      </div>
    </div>
  );
};

export default ArtistCard;
