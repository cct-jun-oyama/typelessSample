import { useState } from 'react';

const useFixedModal = () => {
  const [isFixedModalShowing, setIsShowing] = useState(false);

  function toggleFixedModal() {
    setIsShowing(!isFixedModalShowing);
  }

  return {
    isFixedModalShowing,
    toggleFixedModal,
  };
};

export default useFixedModal;
