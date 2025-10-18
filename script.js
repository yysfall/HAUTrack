const dialog = document.getElementById('postDialog');
const createBtn = document.getElementById('createPostBtn');
const cancelBtn = document.getElementById('cancelBtn');
const form = document.getElementById('postForm');

    createBtn.addEventListener('click', () => {
      dialog.showModal();
    });

    cancelBtn.addEventListener('click', () => {
      dialog.close();
    });

const postsContainer = document.getElementById('posts');
const samplePost = document.getElementById('samplePost');


form.addEventListener('submit', (e) => {
  e.preventDefault();

  const title = form.postTitle.value.trim();
  const tags = form.postTags.value.trim();   
  const description = form.postDescription.value.trim();
  const imageFile = form.postImage.files[0];

  const newPost = samplePost.cloneNode(true);

  const titleElement = newPost.querySelector('#mainPostTitle');
  titleElement.textContent = title;

  const timeElement = newPost.querySelector('#postAuthordesc p');
  timeElement.textContent = 'Just now';

  if (imageFile) {
    const imageURL = URL.createObjectURL(imageFile);
    const photoElement = newPost.querySelector('#postPhoto');
    photoElement.style.backgroundImage = `url(${imageURL})`;
    photoElement.style.backgroundSize = "cover";
    photoElement.style.backgroundPosition = "center";
    
  }

  postsContainer.appendChild(newPost);

  dialog.close();
  form.reset();
});