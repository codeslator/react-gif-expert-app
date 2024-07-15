import { useState } from 'react';
import { Button } from 'primereact/button';
import { IconField } from 'primereact/iconfield';
import { InputIcon } from 'primereact/inputicon';
import { InputText } from 'primereact/inputtext';

function GifExpertApp() {
  const [count, setCount] = useState(0)

  return (
    <>
      <IconField iconPosition="left">
        <InputIcon className="pi pi-search"> </InputIcon>
        <InputText v-model="value1" placeholder="Search" />
      </IconField>
      <Button onClick={() => setCount((count) => count + 1)}>
        count is {count}
      </Button>
    </>
  )
}

export default GifExpertApp;