const commentFormHandler = async (event) => {
    event.preventDefault();
    // const comment_title = document.querySelector('#comment_title-comment').value.trim();
    const comment_description = document.querySelector('#comment_description').value.trim();
    const blog_id = document.querySelector('.comment-form').dataset.blogid;
    if (comment_description && blog_id) {
      const response = await fetch('/api/comments', {
        method: 'POST',
        body: JSON.stringify({ comment_description, blog_id }),
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