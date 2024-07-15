import { useState } from 'react';
import { Button } from 'primereact/button';

function GifExpertApp() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Button onClick={() => setCount((count) => count + 1)}>
        count is {count}
      </Button>
    </>
  )
}

export default GifExpertApp;