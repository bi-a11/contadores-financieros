// Por ahora podemos añadir un pequeño efecto de scroll suave
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});
// Envío del formulario
const form = document.querySelector('form');

form.addEventListener('submit', async (e) => {
  e.preventDefault();

  const data = {
    name: form.querySelector('input[type="text"]').value,
    email: form.querySelector('input[type="email"]').value,
    phone: form.querySelector('input[type="tel"]').value,
    message: form.querySelector('textarea').value,
  };

  try {
    const response = await fetch('http://localhost:5000/send-email', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    });

    const result = await response.json();

    if (response.ok) {
      alert('Mensaje enviado con éxito');
      form.reset();
    } else {
      alert('Error: ' + result.error);
    }
  } catch (error) {
    alert('Error al enviar mensaje: ' + error.message);
  }
});
  function toggleCard(card) {
    card.classList.toggle('active');
  }
document.addEventListener("DOMContentLoaded", () => {
  const videos = document.querySelectorAll('.bg-video');
  let current = 0;

  function changeVideo() {
    videos[current].classList.remove('active');
    current = (current + 1) % videos.length;
    videos[current].classList.add('active');
  }

  setInterval(changeVideo, 10000); // cambia cada 10 segundos
});

function toggleSubcards(card) {
  card.classList.toggle('active');
}

function toggleDefinition(event, subcard) {
  event.stopPropagation();
  const def = subcard.querySelector('.definition-card');
  def.classList.toggle('active');
}
function toggleSubcards(card) {
  card.classList.toggle('active');
}

function openDefinition(title, content) {
  const modal = document.getElementById('definitionModal');
  document.getElementById('modalTitle').innerHTML = title;
  document.getElementById('modalContent').innerHTML = content;
  modal.classList.add('active');
}

function closeDefinition(event) {
  if (event.target.classList.contains('modal-overlay') || event.target.classList.contains('close-btn')) {
    document.getElementById('definitionModal').classList.remove('active');
  }
}
 AOS.init({ duration: 900, once: true, easing: 'ease-out' });

 function openModal(title, content) {
  document.getElementById("modalTitle").innerHTML = title;
  document.getElementById("modalContent").innerHTML = content;
  document.getElementById("definitionModal").classList.add("active");
}

// 🔹 Cierra modal desde botón o clic fuera
function closeModal() {
  document.getElementById("definitionModal").classList.remove("active");
}

document.getElementById("definitionModal").addEventListener("click", function(e) {
  if (e.target === this) closeModal();
});



