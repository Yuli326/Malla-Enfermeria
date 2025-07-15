document.querySelectorAll('.ramo').forEach(ramo => {
  ramo.addEventListener('click', () => {
    // Alterna el estado de aprobado
    ramo.classList.toggle('aprobado');

    const id = ramo.dataset.id;

    // Verifica todos los ramos que dependen de este
    document.querySelectorAll('.ramo').forEach(target => {
      const requisitos = (target.dataset.abre || '').split(' ');
      const desbloqueados = requisitos.every(reqId =>
        document.querySelector(`.ramo[data-id="${reqId}"]`)?.classList.contains('aprobado')
      );

      // Si todos sus requisitos están aprobados
      if (desbloqueados && requisitos.includes(id)) {
        target.classList.add('desbloqueado');
      } else if (requisitos.includes(id)) {
        target.classList.remove('desbloqueado');
      }
    });
  });
});
