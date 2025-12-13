function uploadFile() {
  const input = document.getElementById('fileInput');
  const list = document.getElementById('fileList');

  if (!input.files.length) {
    alert('Please select a file');
    return;
  }

  const file = input.files[0];
  const li = document.createElement('li');
  li.textContent = file.name + ' (added)';
  list.appendChild(li);

  input.value = '';
}
