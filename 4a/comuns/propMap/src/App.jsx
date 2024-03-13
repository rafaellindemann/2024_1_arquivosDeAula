import DinosaurList from './components/DinosaurList';

function App() {
  const dinossauros = [
    {
      nome: 'Tyrannosaurus rex',
      família: 'Tyrannosauridae',
      peso: '8 toneladas',
      altura: '4 metros',
      comprimento: '12 metros',
      períodoHistórico: 'Cretáceo Superior'
    },
    {
      nome: 'Stegosaurus',
      família: 'Stegosauridae',
      peso: '5 toneladas',
      altura: '2.5 metros',
      comprimento: '9 metros',
      períodoHistórico: 'Jurássico Superior'
    },
    {
      nome: 'Triceratops',
      família: 'Ceratopsidae',
      peso: '6 toneladas',
      altura: '3 metros',
      comprimento: '9 metros',
      períodoHistórico: 'Cretáceo Superior'
    },
    {
      nome: 'Velociraptor',
      família: 'Dromaeosauridae',
      peso: '150 kg',
      altura: '1.8 metros',
      comprimento: '2 metros',
      períodoHistórico: 'Cretáceo Superior'
    },
    {
      nome: 'Brachiosaurus',
      família: 'Brachiosauridae',
      peso: '50 toneladas',
      altura: '15 metros',
      comprimento: '25 metros',
      períodoHistórico: 'Jurássico Superior'
    },
    {
      nome: 'Ankylosaurus',
      família: 'Ankylosauridae',
      peso: '6 toneladas',
      altura: '2.5 metros',
      comprimento: '9 metros',
      períodoHistórico: 'Cretáceo Superior'
    },
    {
      nome: 'Diplodocus',
      família: 'Diplodocidae',
      peso: '12 toneladas',
      altura: '6 metros',
      comprimento: '27 metros',
      períodoHistórico: 'Jurássico Superior'
    },
    {
      nome: 'Pteranodon',
      família: 'Pteranodontidae',
      peso: '90 kg',
      altura: '1.8 metros (asas)',
      comprimento: '7 metros',
      períodoHistórico: 'Cretáceo Superior'
    },
    {
      nome: 'Spinosaurus',
      família: 'Spinosauridae',
      peso: '10 toneladas',
      altura: '4 metros',
      comprimento: '15 metros',
      períodoHistórico: 'Cretáceo Superior'
    },
    {
      nome: 'Allosaurus',
      família: 'Allosauridae',
      peso: '2 toneladas',
      altura: '3 metros',
      comprimento: '9 metros',
      períodoHistórico: 'Jurássico Superior'
    },
    {
      nome: 'Iguanodon',
      família: 'Iguanodontidae',
      peso: '3 toneladas',
      altura: '4 metros',
      comprimento: '10 metros',
      períodoHistórico: 'Cretáceo Inferior'
    },
    {
      nome: 'Carcharodontosaurus',
      família: 'Carcharodontosauridae',
      peso: '7 toneladas',
      altura: '3.5 metros',
      comprimento: '13 metros',
      períodoHistórico: 'Cretáceo Superior'
    },
    {
      nome: 'Parasaurolophus',
      família: 'Hadrosauridae',
      peso: '3.5 toneladas',
      altura: '4 metros',
      comprimento: '10 metros',
      períodoHistórico: 'Cretáceo Superior'
    },
    {
      nome: 'Therizinosaurus',
      família: 'Therizinosauridae',
      peso: '5 toneladas',
      altura: '5 metros',
      comprimento: '10 metros',
      períodoHistórico: 'Cretáceo Superior'
    },
    {
      nome: 'Archaeopteryx',
      família: 'Archaeopterygidae',
      peso: '1 kg',
      altura: '0.5 metros',
      comprimento: '0.5 metros',
      períodoHistórico: 'Jurássico Superior'
    },
    {
      nome: 'Ceratosaurus',
      família: 'Ceratosauridae',
      peso: '1 tonelada',
      altura: '3 metros',
      comprimento: '7 metros',
      períodoHistórico: 'Jurássico Superior'
    },
    {
      nome: 'Deinonychus',
      família: 'Dromaeosauridae',
      peso: '100 kg',
      altura: '1.5 metros',
      comprimento: '2.5 metros',
      períodoHistórico: 'Cretáceo Inferior'
    },
    {
      nome: 'Dilophosaurus',
      família: 'Dilophosauridae',
      peso: '500 kg',
      altura: '2 metros',
      comprimento: '6 metros',
      períodoHistórico: 'Jurássico Inferior'
    },
    {
      nome: 'Iguanodon',
      família: 'Iguanodontidae',
      peso: '3 toneladas',
      altura: '4 metros',
      comprimento: '10 metros',
      períodoHistórico: 'Cretáceo Inferior'
    },
    {
      nome: 'Pachycephalosaurus',
      família: 'Pachycephalosauridae',
      peso: '500 kg',
      altura: '2 metros',
      comprimento: '4 metros',
      períodoHistórico: 'Cretáceo Superior'
    }
  ];

  return (
    <div>
      <h1>Meu Aplicativo de Dinossauros</h1>
      <DinosaurList dinos={dinossauros} />
    </div>
  );
}

export default App;
