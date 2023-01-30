function Reservar() {
  let pessoa = prompt("Por favor, insira seu nome:");
  if (pessoa == null || pessoa == "") {
    alert("Reserva Cancelada");
  } else {
    alert(
      "Parabéns " + pessoa + " ! " + "Sua reserva foi concluida com sucesso"
    );
  }
}
