const commentFormHandler = async (event) => {
    event.preventDefault();
    const comment_title = document.querySelector('#comment_title-comment').value.trim();
    const description = document.querySelector('#description-comment').value.trim();
  
    if (/*name && */comment_title && description) {
      const response = await fetch('/api/comment', {
        method: 'POST',
        body: JSON.stringify({ /*name, */comment_title, description }),
        headers: { 'Content-Type': 'application/json' },
      });
  
      if (response.ok) {
        document.location.replace('/profile');
      } else {
        alert(response.statusText);
      }
    }
  };

  


  document
  .querySelector('.comment-form')
  .addEventListener('submit', commentFormHandler);