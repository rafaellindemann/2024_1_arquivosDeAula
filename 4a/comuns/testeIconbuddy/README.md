Sim, é possível alterar o tamanho dos ícones React importados do Iconbuddy. A maioria desses ícones é configurável através de props, incluindo a prop `size`. Vou te mostrar um exemplo de como você pode fazer isso:

Suponha que você tenha um ícone chamado `SampleIcon` importado do Iconbuddy. A maneira de alterar o tamanho seria assim:

```jsx
import React from 'react';
import { SampleIcon } from '@iconbuddy/react'; // Ajuste conforme o pacote que você está usando

const App = () => {
  return (
    <div>
      {/* Definindo o tamanho do ícone com a prop size */}
      <SampleIcon size={48} />
      {/* Você também pode usar valores de string como "48px" ou "3em" */}
      <SampleIcon size="3em" />
    </div>
  );
};

export default App;
```

Se a biblioteca de ícones que você está utilizando não suporta diretamente a prop `size`, você pode ajustar o tamanho através de CSS. Aqui está um exemplo:

```jsx
import React from 'react';
import { SampleIcon } from '@iconbuddy/react';

const App = () => {
  const iconStyle = {
    width: '48px',
    height: '48px'
  };

  return (
    <div>
      {/* Aplicando estilo CSS inline */}
      <SampleIcon style={iconStyle} />
      {/* Ou utilizando classes CSS */}
      <SampleIcon className="custom-icon" />
    </div>
  );
};

export default App;
```

E no seu arquivo CSS:

```css
.custom-icon {
  width: 48px;
  height: 48px;
}
```

Verifique a documentação da biblioteca de ícones específica que você está usando para confirmar quais props são suportadas e outras formas recomendadas de estilização.