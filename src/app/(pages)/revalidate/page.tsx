'use client';

import {JSX} from 'react';

/**
 * Revalidate component.
 * @return {JSX.Element} The rendered Revalidate component.
 */
export default function Revalidate(): JSX.Element {
  const handleRevalidate = async () => {
    try {
      const response = await fetch('http://localhost:3000/api/manually-revalidate-tags');
      if (response.ok) {
        alert('Cache revaliated');
      }
    } catch (error: any) {
      console.log(error);
      alert('An error occurred: ' + String(error.message));
    }
  };

  return (
    <button onClick={handleRevalidate}>Revalidate</button>
  );
}
