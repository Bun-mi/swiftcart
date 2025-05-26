import React from 'react';

export default function CartIcon({ count }) {
  return (
    <div className="cart-icon">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="cart-icon__svg"
        viewBox="0 0 24 24"
      >
        <path
          fill="currentColor"
          d="M7 4h-2l-3 9v2h2a3 3 0 0 0 6 0h6a3 3 0 0 0 6 0h2v-2l-3-9h-2"
        />
      </svg>
      {count > 0 && <span className="cart-icon__count">{count}</span>}
    </div>
  );
}