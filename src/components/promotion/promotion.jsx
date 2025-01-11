import Piece from '../pieces/piece';
import './style.css';
function Promotion({ couldBePromoted, promotionType, pieceColor }) {
  let promotionTypes = ['queen', 'knight', 'rook', 'bishop'];

  function handleClick(piece) {
    promotionType(piece);
    couldBePromoted(false);
  }

  return (
    <div className="promotion">
      {promotionTypes?.map((piece) => (
        <>
          <span onClick={() => handleClick(piece)}>
            <Piece color={pieceColor} type={piece} />
          </span>
        </>
      ))}
    </div>
  );
}

export default Promotion;
