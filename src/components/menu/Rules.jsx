import React from 'react';
import './rules.css';
const ChessRules = () => {
  const pieces = [
    { symbol: '♔', name: 'King', movement: 'One square any direction' },
    { symbol: '♕', name: 'Queen', movement: 'Any number of squares diagonally, horizontally, or vertically' },
    { symbol: '♖', name: 'Rook', movement: 'Any number of squares horizontally or vertically' },
    { symbol: '♗', name: 'Bishop', movement: 'Any number of squares diagonally' },
    { symbol: '♘', name: 'Knight', movement: 'L-shape: 2 squares in one direction, then 1 square perpendicular' },
    { symbol: '♙', name: 'Pawn', movement: 'Forward one square (two on first move), captures diagonally' },
  ];

  const specialRules = [
    { name: 'Castling', desc: 'King moves two squares toward rook, rook jumps over' },
    { name: 'En Passant', desc: "Special pawn capture after opponent's two-square pawn advance" },
    { name: 'Pawn Promotion', desc: 'Pawn becomes any piece (except king) at opposite end' },
    { name: 'Check', desc: 'King is under attack' },
    { name: 'Checkmate', desc: 'King is in check and cannot escape' },
  ];

  return (
    <div className="max-w-4xl mx-auto p-6 space-y-8">
      <h1 className="text-3xl font-bold mb-8">Chess Rules Quick Guide</h1>

      <section className="bg-slate-50 p-6 rounded-lg">
        <h2 className="text-2xl font-semibold mb-4">Board Setup</h2>
        <ul className="space-y-2">
          <li>Board: 8×8 squares, alternating light and dark</li>
          <li>
            Each player starts with 16 pieces:
            <ul className="ml-6 mt-2 space-y-1">
              {pieces.map((piece, index) => (
                <li key={index}>
                  <span className="text-2xl mr-2">{piece.symbol}</span>
                  {piece.name === 'King' || piece.name === 'Queen' ? '1 ' : '2 '}
                  {piece.name}
                  {piece.name === 'Pawn' ? 's' : ''}
                </li>
              ))}
            </ul>
          </li>
        </ul>
      </section>

      <section className="bg-slate-50 p-6 rounded-lg">
        <h2 className="text-2xl font-semibold mb-4">Piece Movement</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {pieces.map((piece, index) => (
            <div key={index} className="bg-white p-4 rounded shadow">
              <h3 className="font-semibold mb-2">
                <span className="text-2xl mr-2">{piece.symbol}</span>
                {piece.name}
              </h3>
              <p>{piece.movement}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-slate-50 p-6 rounded-lg">
        <h2 className="text-2xl font-semibold mb-4">Special Rules</h2>
        <ul className="space-y-2">
          {specialRules.map((rule, index) => (
            <li key={index}>
              <span className="font-semibold">{rule.name}:</span> {rule.desc}
            </li>
          ))}
        </ul>
      </section>

      <section className="bg-slate-50 p-6 rounded-lg">
        <h2 className="text-2xl font-semibold mb-4">Game Endings</h2>
        <div className="space-y-4">
          <div>
            <h3 className="font-semibold">Win:</h3>
            <p>Checkmate or opponent resignation</p>
          </div>
          <div>
            <h3 className="font-semibold">Draw:</h3>
            <ul className="ml-6 space-y-1">
              <li>Stalemate (no legal moves)</li>
              <li>Mutual agreement</li>
              <li>Threefold repetition</li>
              <li>50 moves without pawn move or capture</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ChessRules;
