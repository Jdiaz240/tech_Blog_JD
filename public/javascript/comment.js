const commentFormHandler = async function(event) {
    event.preventDefault();
  
    const postId = document.querySelector('input[name="post-id"]').value;
    const body = document.querySelector('textarea[name="comment-body"]').value;
  
    // Create the functionality to help create the buttons for your website.
    if (postId && body) {
      const response = await fetch(`/api/comment`, {
        method: 'POST',
        body: JSON.stringify({ body }),
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (response.ok) {
        document.location.replace('/dashboard');
      } else {
        alert('Failed to create comment');
      }
    }
};
  document
    .querySelector('#new-comment-form')
    .addEventListener('submit', commentFormHandler);