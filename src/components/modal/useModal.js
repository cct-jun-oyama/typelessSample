import { useState } from 'react';

const useModal = () => {
  const [isModalShowing, setIsShowing] = useState(false);

  function toggleModal() {
    setIsShowing(!isModalShowing);
  }

  return {
    isModalShowing,
    toggleModal,
  };
};

export default useModal;
