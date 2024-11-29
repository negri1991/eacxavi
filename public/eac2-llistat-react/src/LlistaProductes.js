import React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import IconButton from '@mui/material/IconButton';
import SortIcon from '@mui/icons-material/Sort';

function TableHeader(props) {
  return (
    <TableCell align="center">
      {props.header}
      <IconButton onClick={props.sortData}>
        <SortIcon />
      </IconButton>
    </TableCell>
  );
}

function App() {
  const [products, setProducts] = React.useState([
    { nom: 'Pack de Motxilla + Estoig amb un 20% de descompte', categoria: 'Material Escolar', preu: '30 €' },
    { nom: 'Pack Catan + Escacs 20% de descompte', categoria: 'Jocs de Taula', preu: '40 €' },
    { nom: 'Harry Potter i la Pedra Filosofal', categoria: 'Llibre', preu: '12 €' },
    { nom: 'El Senyor dels Anells: La Comunitat de l\'Anell', categoria: 'Llibre', preu: '15 €' },
    { nom: 'Juego de Tronos: Cançó de Gel i Foc', categoria: 'Llibre', preu: '18 €' },
    { nom: 'Pack de Llapis de Colors - 24 Unitats', categoria: 'Material Escolar', preu: '5 €' },
    { nom: 'Quadern d\'Exercicis Matemàtiques', categoria: 'Material Escolar', preu: '7 €' },
    { nom: 'Harry Potter i la Cambra Secreta', categoria: 'Llibre', preu: '13 €' },
    { nom: 'Estoig Triple Compartiment', categoria: 'Material Escolar', preu: '10 €' },
    { nom: 'Diccionari Anglès-Espanyol', categoria: 'Material Escolar', preu: '20 €' },
  ]);

  const sortData = (key) => {
    setProducts([...products].sort((a, b) => {
      if (a[key] < b[key]) return -1;
      if (a[key] > b[key]) return 1;
      return 0;
    }));
  };

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableHeader header="Nom" sortData={() => sortData('nom')} />
            <TableHeader header="Categoria" sortData={() => sortData('categoria')} />
            <TableHeader header="Preu" sortData={() => sortData('preu')} />
          </TableRow>
        </TableHead>
        <TableBody>
          {products.map((product, index) => (
            <TableRow key={index}>
              <TableCell align="center">{product.nom}</TableCell>
              <TableCell align="center">{product.categoria}</TableCell>
              <TableCell align="center">{product.preu}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default App;
