 // Modal para editar perfil
 const editBtn = document.getElementById("editBtn");
 const editModal = document.getElementById("editModal");
 const closeModal = document.getElementById("closeModal");

 editBtn.onclick = function() {
     editModal.style.display = "flex";
 }

 closeModal.onclick = function() {
     editModal.style.display = "none";
 }

 const saveChanges = document.getElementById("saveChanges");
 saveChanges.onclick = function() {
     alert("Alterações salvas!");
     editModal.style.display = "none";
 }

 // Fechar o modal ao clicar fora dele
 window.onclick = function(event) {
     if (event.target === editModal) {
         editModal.style.display = "none";
     }
 }
// Função para abrir o modal de troca de foto
document.getElementById('changePhotoBtn').onclick = function() {
 document.getElementById('photoModal').style.display = 'flex';
};

// Fechar o modal de foto
document.getElementById('closePhotoModal').onclick = function() {
 document.getElementById('photoModal').style.display = 'none';
};

// Alterar a foto de perfil
document.querySelectorAll('.photo-option').forEach(function(photo) {
 photo.onclick = function() {
     document.querySelector('.profile-photo').src = photo.src;
     document.getElementById('photoModal').style.display = 'none';
 };
});

// Impedir alteração da foto quando o arquivo for carregado
document.getElementById('fileUpload').onchange = function() {
 // Não fazer nada, ou adicionar lógica extra para impedir a alteração
};
document.get