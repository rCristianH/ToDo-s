function TodoCounter({ total, completed }) {
  //crea un condicional de si completed == total el h2 lo reemplaze por "congratulations"
  if (completed === total) {
    return (
      <div>
        <h2>Congratulations you have complete all ToDos!</h2>
      </div>
    );
  } else {
    return (
      <div>
        <h2>
          Haz completado {completed} de {total}
        </h2>
      </div>
    );
  }
}
export { TodoCounter };
