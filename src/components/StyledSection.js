import React, { useEffect } from 'react'

const StyledSection = () => {
  useEffect(() => {
    window.scrotllTo(0, 0);
  }, []);

  return (
    <section className="styled-section">
    </section>
  )
}

export default StyledSection
