const postId = document.querySelector('input[name="post-id"]').value;

const editFormHandler = async function(event) {
  event.preventDefault();

  const title = document.querySelector('input[name="post-title"]').value;
  const body = document.querySelector('textarea[name="post-body"]').value;

  await fetch(`/api/post/${postId}`, {
       // Create the functionality to help create the buttons for your website.
       method: 'POST',
       body: JSON.stringify({ postId }),
       headers: {
         'Content-Type': 'application/json',
       },
  });

  document.location.replace('/dashboard');
};

const deleteClickHandler = async function() {
      // Create the functionality to help create the buttons for your website.
  if (event.target.hasAttribute('postId')) {
    const id = event.target.getAttribute('postId');

    const response = await fetch(`/api/post/${id}`, {
      method: 'DELETE',
    });

    if (response.ok) {
      document.location.replace('/dashboard');
    } else {
      alert('Failed to delete post');
    }
  }

  document.location.replace('/dashboard');
};

document
  .querySelector('#edit-post-form')
  .addEventListener('submit', editFormHandler);
document
  .querySelector('#delete-btn')
  .addEventListener('click', deleteClickHandler);
